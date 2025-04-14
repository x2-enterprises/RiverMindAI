'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CertificatePDF from '@/components/CertificatePDF';
import generatePDF from '@/utils/generatePDF';

// Define a more specific type for the results expected from sessionStorage
interface VettingResultData {
  fullName: string;
  approvalStatus: string;
  neuralSummary: string;
  diagnosticNote: string;
  registeredMotto: string;
  backupTimestamp: string;
  email: string; // Ensure email is expected
  // Add any other fields returned by your API
}

export default function VettingResultPage() {
  const router = useRouter();
  const [results, setResults] = useState<VettingResultData | null>(null); // Use the specific type
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Added error state

  useEffect(() => {
    // Read results from sessionStorage
    try {
      const storedResult = sessionStorage.getItem('vettingResult');
      if (storedResult) {
        const parsedResult = JSON.parse(storedResult);
        // TODO: Validate parsedResult structure matches VettingResultData
        // Add data validation/transformation if necessary
        // For example, ensure timestamp is formatted correctly if not done by API
        if (!parsedResult.backupTimestamp) {
          parsedResult.backupTimestamp = new Date().toLocaleString('en-CA', { 
              year: 'numeric', month: '2-digit', day: '2-digit', 
              hour: '2-digit', minute: '2-digit', timeZoneName: 'short' 
            }).replace(",", "");
        }
        setResults(parsedResult);
        // Optional: Clear storage? Decide if you want results to persist on refresh
        // sessionStorage.removeItem('vettingResult'); 
      } else {
        setError('No vetting result found in session. Please complete the survey first.');
        // Optionally redirect back to the form after a delay
        // setTimeout(() => router.push('/vetting'), 3000);
      }
    } catch (err) {
      console.error("Failed to parse vetting result from sessionStorage:", err);
      setError('Failed to load vetting result. Data might be corrupted.');
    } finally {
        setIsLoading(false);
    }
    
  }, [router]); // Added router to dependency array as it's used in the timeout example

  const handleDownloadPDF = async () => {
    if (!results) return;
    setIsDownloading(true);
    // Ensure results.fullName exists before using it
    const fileName = `Eternal_You_Certificate_${(results.fullName || 'User').replace(/\s+/g, '_')}`;
    try {
      await generatePDF('certificate-content', fileName); 
    } catch (error) {
      console.error("PDF Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleUpgradeClick = () => {
    // Pass user data to the upgrade page via query params
    const queryParams = new URLSearchParams({
      // Ensure values are strings and handle potential null/undefined
      name: results?.fullName || 'Valued User',
      email: results?.email || '' 
    }).toString();
    router.push(`/eternalyou?${queryParams}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl font-orbitron animate-pulse">Loading Neural Compliance Scans...</p> // Changed message slightly
      </div>
    );
  }
  
  // Added specific error handling UI
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-center">
        <div>
           <p className="text-xl text-red-500 mb-4">Error: {error}</p>
           <Link href="/vetting"><span className="text-blue-400 underline hover:text-blue-300">Return to Survey</span></Link>
        </div>
      </div>
    );
  }

  if (!results) {
    // This case might be redundant if error handling is robust, but kept as a fallback
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl text-yellow-500">Vetting results are unavailable.</p>
        <Link href="/vetting"><span className="ml-4 text-blue-400 underline">Retry Survey</span></Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-orbitron text-center text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#9ae6f0] to-[#ff6ec7] text-transparent bg-clip-text">
          Neural Compliance Assessment Complete
        </h1>
        <p className="text-center text-lg text-gray-400 mb-10">
          Review your Eternal You™ candidacy report below. Results are binding (and possibly unsettling).
        </p>

        {/* Pass the validated results data to the CertificatePDF component */}
        <CertificatePDF {...results} /> 

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <button 
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="w-full md:w-auto bg-[#9ae6f0] hover:bg-[#9ae6f0]/90 text-black px-6 py-3 rounded-md text-lg font-semibold transition-colors disabled:opacity-70 disabled:cursor-wait"
          >
            {isDownloading ? 'Generating PDF...' : 'Download Certificate (Free Tier)'}
          </button>
          
          <button 
            onClick={handleUpgradeClick} // This now passes name/email
            className="w-full md:w-auto bg-[#ff6ec7] hover:bg-[#ff6ec7]/90 text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            Upgrade to Eternal You™ Premium →
          </button>
        </div>

        {/* Disclaimer/Next Steps */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Your approval tier (<span className="text-gray-300 font-semibold">{results.approvalStatus || 'N/A'}</span>) allows basic consciousness backup.</p> // Display approval status
          <p>Upgrade to Premium for high-resolution downloads, ad-free cognition, and priority existential support.</p>
          <p className="mt-4">A copy of this certificate has been digitally filed under <span className="text-gray-300">{results.email || 'your registered email'}</span> (pending subscription).</p> // Display email
           <Link href="/"><span className="mt-6 inline-block text-blue-400 hover:text-blue-300">Return to Main Hub</span></Link>
        </div>

      </motion.div>
    </div>
  );
} 