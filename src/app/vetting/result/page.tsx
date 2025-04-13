'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface VettingResult {
  neuralSummary: string;
  uploadStatus: string;
  diagnosticNote: string;
  motto: string;
}

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<VettingResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedResult = sessionStorage.getItem('vettingResult');
      if (storedResult) {
        const parsedResult = JSON.parse(storedResult);
        setResult(parsedResult);
        // Optional: Clear the storage after reading to prevent reuse on refresh
        // sessionStorage.removeItem('vettingResult');
      } else {
        // If no result found, maybe redirect back or show an error
        setError('No vetting result found. Please complete the form first.');
        // Optionally redirect back to the form after a delay
        // setTimeout(() => router.push('/vetting'), 3000);
      }
    } catch (err) {
        console.error("Failed to parse vetting result:", err);
        setError('Failed to load vetting result. Data might be corrupted.');
    } finally {
        setIsLoading(false);
    }
  }, [router]); // Add router to dependency array if used inside effect

  if (isLoading) {
    return <div className="min-h-screen bg-gray-900 text-gray-100 p-8 flex justify-center items-center"><p>Loading consciousness profile...</p></div>;
  }

  if (error) {
      return <div className="min-h-screen bg-gray-900 text-gray-100 p-8 flex justify-center items-center"><p className="text-red-400">{error}</p></div>;
  }

  if (!result) {
      // This case should ideally be handled by the error state, but as a fallback:
      return <div className="min-h-screen bg-gray-900 text-gray-100 p-8 flex justify-center items-center"><p>Vetting result unavailable.</p></div>;
  }

  const isApproved = result.uploadStatus.toLowerCase().includes('approved');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-lg shadow-lg border border-purple-600">
        <h1 className={`text-3xl font-bold mb-6 text-center ${isApproved ? 'text-green-400' : 'text-yellow-400'}`}>
          Vetting Result: {result.uploadStatus}
        </h1>

        <div className="space-y-4 text-gray-300">
          <div>
            <h2 className="text-lg font-semibold text-purple-400 mb-1">Neural Summary:</h2>
            <p>{result.neuralSummary}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-purple-400 mb-1">Diagnostic Note:</h2>
            <p>{result.diagnosticNote}</p>
          </div>
          <div>
             <h2 className="text-lg font-semibold text-purple-400 mb-1">Registered Motto:</h2>
             <p className="italic">"{result.motto}"</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
           <button
             onClick={() => alert('Certificate download coming soon to a reality near you!')}
             className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
             >
             Download Certificate (PDF)
           </button>
          {isApproved && (
             <button
                 onClick={() => alert('Upgrade path initiated... please wait for neural synchronization.')}
                 className="px-6 py-2 font-semibold text-black bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-800"
             >
               Upgrade to Eternal You™ Now!
             </button>
          )}
        </div>
         <button
            onClick={() => router.push('/vetting')}
            className="mt-6 w-full text-center text-sm text-gray-400 hover:text-purple-400 underline"
         >
            Retake Vetting Assessment
         </button>
      </div>
    </div>
  );
} 