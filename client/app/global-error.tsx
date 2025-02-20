"use client";

import React from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const GlobalError: React.FC<GlobalErrorProps> = ({ error, reset }) => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center gap-8 pb-0 pt-16 md:pt-10 md:pb-32 px-4 sm:px-8 md:px-16 lg:px-60 bg-gradient-to-b from-neutral-900 to-black">
      <div className="text-center mb-8 max-w-2xl px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[550] mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300/80">
          {error.message}
        </p>
        <button
          onClick={reset}
          className="mt-8 px-4 py-2 bg-primary-500 text-neutral-900 rounded-md hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-50"
        >
          Try again
        </button>
      </div>
    </main>
  );
};

export default GlobalError;
