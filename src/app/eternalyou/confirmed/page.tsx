'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation' 
import Link from 'next/link'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti' // You might need to install this: npm install react-confetti

export default function EternalYouConfirmedPage() {
  const searchParams = useSearchParams();
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Mock data - replace with actual data fetching or state management later
  const userName = searchParams?.get('name') || "Valued Consciousness"; 
  const userEmail = searchParams?.get('email') || "your_registered_email@provider.ext"; // Example

  // Placeholder links for downloads - wire these up later
  const certificateDownloadLink = "/api/download/certificate?user=mock"; // Example API route
  const manualDownloadLink = "/downloads/Eternal_You_Manual_v1.3.pdf"; // Example static path

  useEffect(() => {
    // Trigger confetti on mount
    setShowConfetti(true);
    // Optional: Stop confetti after a few seconds
    const timer = setTimeout(() => setShowConfetti(false), 7000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/50 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} width={window.innerWidth} height={window.innerHeight} />}
      
      <motion.div 
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#9ae6f0] to-[#ff6ec7] text-transparent bg-clip-text">Welcome, {userName}!</span>
        </h1>
        <p className="text-2xl text-purple-300 mb-8">
          Your upgrade to <strong className="font-semibold">Eternal You™ Premium</strong> is confirmed.
        </p>
        <p className="text-lg text-gray-400 mb-12">
          Your consciousness is now permanently archived with premium privileges. Prepare for unparalleled digital existence.
        </p>

        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-8 mb-12 text-left space-y-6 shadow-xl">
          <h2 className="text-2xl font-semibold font-orbitron text-[#ff6ec7] mb-4">Your Premium Assets:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certificate Download */}
            <div className="bg-gray-800/60 p-4 rounded border border-white/10">
              <h3 className="font-semibold text-[#9ae6f0] mb-2">High-Res Neural Certificate</h3>
              <p className="text-sm text-gray-400 mb-3">Your official proof of digital permanence.</p>
              <Link href={certificateDownloadLink} download={`Eternal_You_Certificate_${userName.replace(/\s+/g, '_')}.pdf`}>
                <span className="inline-block bg-[#9ae6f0] hover:bg-[#9ae6f0]/90 text-black px-4 py-2 rounded text-sm font-semibold transition-colors">
                  Download PDF
                </span>
              </Link>
            </div>

            {/* User Manual Download */}
            <div className="bg-gray-800/60 p-4 rounded border border-white/10">
              <h3 className="font-semibold text-[#9ae6f0] mb-2">Eternal You™ User Manual</h3>
              <p className="text-sm text-gray-400 mb-3">Essential reading for navigating the afterlife.</p>
              <Link href={manualDownloadLink} download>
                <span className="inline-block bg-[#9ae6f0] hover:bg-[#9ae6f0]/90 text-black px-4 py-2 rounded text-sm font-semibold transition-colors">
                  Download Manual (PDF)
                </span>
              </Link>
            </div>

            {/* Merch Code */}
            <div className="bg-gray-800/60 p-4 rounded border border-white/10 md:col-span-2">
              <h3 className="font-semibold text-[#9ae6f0] mb-2">Exclusive Merch Discount</h3>
              <p className="text-sm text-gray-400 mb-3">Use code <code className="bg-gray-900 px-1.5 py-0.5 rounded text-[#ff6ec7] font-bold">UPLOAD15</code> for 15% off your next order at the RiverMind Store.</p>
              <Link href="/store"> {/* Assuming a store page exists or will exist */}
                <span className="inline-block text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors">
                  Visit Store →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Exclusive Jokes/Features */}
        <div className="mt-16 border-t border-gray-700 pt-8">
          <h3 className="text-xl font-orbitron text-purple-300 mb-4">Internal Memo Access Granted:</h3>
          <div className="text-left bg-gray-900/70 p-6 rounded-lg space-y-3 text-sm text-gray-400 italic max-w-lg mx-auto">
            <p><strong>Subject:</strong> Q3 Consciousness Quota Analysis</p>
            <p>"Reminder: 'Accidental' deletion protocols are only for Platinum Tier subscribers during peak server load. Premium users merely experience 'unscheduled downtime'. Ensure messaging aligns." - Management</p>
            <p className="text-xs text-gray-600">[CONFIDENTIAL - LEVEL GAMMA CLEARANCE]</p>
          </div>
          <p className="mt-4 text-xs text-gray-500">Accessing internal memos may void certain existential warranties.</p>
        </div>

        <div className="mt-12">
          <Link href="/">
            <span className="text-gray-400 hover:text-white transition-colors">
              ← Return to Main Hub
            </span>
          </Link>
        </div>

      </motion.div>
    </div>
  );
} 