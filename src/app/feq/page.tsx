import React from 'react';

export default function FEQPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Evaded Questions</h1>
      
      <div className="space-y-6">
        {/* Placeholder for Q&A items - We'll add real content later */}
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">Q: Some Placeholder Question?</h2>
          <p className="text-gray-700">A: A deliberately vague and unhelpful answer will go here, probably involving blaming the user or changing the subject entirely.</p>
        </div>
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">Q: Another Question You Won't Get a Straight Answer To?</h2>
          <p className="text-gray-700">A: We strive for transparency, which is why we're transparently telling you we can't answer this. Think about that.</p>
        </div>
        {/* Add more Q&A pairs here */}
      </div>

      <p className="mt-12 text-center text-gray-500">
        Have more questions? Excellent! We specialize in not answering them.
      </p>
    </div>
  );
} 