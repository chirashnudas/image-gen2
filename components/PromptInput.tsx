
import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (!isLoading) {
        onSubmit();
      }
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 shadow-lg">
      <h2 className="text-lg font-semibold text-gray-200 mb-3">Enter your image prompt</h2>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g., A futuristic city on a distant planet, with flying cars and neon lights"
          className="w-full h-24 sm:h-auto sm:min-h-[44px] bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
          disabled={isLoading}
        />
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate'
          )}
        </button>
      </div>
    </div>
  );
};
