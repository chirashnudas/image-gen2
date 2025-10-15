
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full p-4 sm:p-6 text-center">
      <div className="inline-flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 011.414-1.414L10 10.586 14.293 6.293a1 1 0 011.414 0L18 8.586m-5 5l2.293 2.293a1 1 0 010 1.414L11 21.414l-4.293-4.293a1 1 0 01-1.414-1.414L10 13.414l-4.293 4.293"
          />
        </svg>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Gemini Image Generator
        </h1>
      </div>
       <p className="mt-2 text-md text-gray-400">
        Bring your imagination to life with the power of AI.
      </p>
    </header>
  );
};
