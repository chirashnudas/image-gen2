
import React, { useState, useCallback } from 'react';
import { PromptInput } from './components/PromptInput';
import { ImageDisplay } from './components/ImageDisplay';
import { Header } from './components/Header';
import { generateImage } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('A majestic lion wearing a crown, cinematic, detailed');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = useCallback(async () => {
    if (!prompt) {
      setError('Please enter a prompt.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const generatedImageUrl = await generateImage(prompt);
      setImageUrl(generatedImageUrl);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-3xl space-y-8">
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={handleGenerateImage}
            isLoading={isLoading}
          />
          <ImageDisplay
            imageUrl={imageUrl}
            isLoading={isLoading}
            error={error}
            prompt={prompt}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
