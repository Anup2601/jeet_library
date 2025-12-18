'use client';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-cyan-400 font-medium">Loading payment data...</p>
    </div>
  );
}
