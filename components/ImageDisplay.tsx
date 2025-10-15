
import React from 'react';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  prompt: string;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center text-center text-gray-400">
    <svg className="animate-spin h-12 w-12 text-purple-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <p className="font-semibold">Generating your masterpiece...</p>
    <p className="text-sm mt-1">This may take a moment.</p>
  </div>
);

const Placeholder: React.FC = () => (
  <div className="text-center text-gray-500">
     <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 mb-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <h3 className="font-semibold text-lg">Your generated image will appear here</h3>
    <p className="text-sm">Enter a prompt above and click "Generate"</p>
  </div>
);

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error, prompt }) => {
  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return (
        <div className="text-center text-red-400 bg-red-900/50 p-6 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-bold">Generation Failed</p>
          <p className="text-sm">{error}</p>
        </div>
      );
    }
    if (imageUrl) {
      return (
        <img
          src={imageUrl}
          alt={prompt}
          className="w-full h-full object-contain rounded-lg shadow-2xl transition-opacity duration-500 opacity-0 animate-fade-in"
          onLoad={(e) => (e.currentTarget.style.opacity = '1')}
        />
      );
    }
    return <Placeholder />;
  };

  return (
    <div className="w-full aspect-square bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center p-4 transition-all duration-300">
      {renderContent()}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
