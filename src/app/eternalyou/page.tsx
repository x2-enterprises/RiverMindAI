'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'

export default function EternalYouPage() {
  // Mock checkout URL (replace with actual Gumroad/Stripe link later)
  const checkoutUrl = "https://gumroad.com/l/your_product_placeholder"; // Replace with your real checkout link

  const handleCheckout = () => {
    // In a real scenario, you might track this click before redirecting
    console.log('Redirecting to checkout...');
    window.location.href = checkoutUrl; 
    // For testing without actual checkout, you can simulate success:
    // import { useRouter } from 'next/navigation';
    // const router = useRouter(); router.push('/eternalyou/confirmed');
  };

  // Component to safely access searchParams
  function EternalYouContent() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const email = searchParams.get('email'); // Available if needed later

    // --- Configuration ---
    // Replace with your actual Gumroad product link
    const gumroadLink = "https://rivermindai.gumroad.com/l/qyjlk"; // <-- Updated Link
    // Price to display on the button
    const price = "$9.99";
    // Discount code to display
    const discountCode = "ETERNAL15";
    // ---------------------

    return (
        // Adjusted gradient and padding for better consistency
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-gray-200 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            {/* Increased max-width slightly, adjusted padding */}
            <div className="max-w-4xl w-full bg-gray-800 shadow-2xl rounded-lg overflow-hidden p-8 md:p-10 text-center border border-purple-700/50">

                {/* Optional: Greet user if name is present */}
                {name && <p className="text-purple-300 mb-4 text-lg">Welcome, {name}. Your final ascension awaits.</p>}

                {/* Font and color consistency */}
                <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Elevate Your Mind Beyond the Evaluation Queue
                </h1>
                <p className="text-lg text-gray-300 mb-10">
                    You've been provisionally approved for Eternal You™ (Beta). Finalize your upgrade to receive full consciousness privileges and secure your digital immortality.
                </p>

                {/* Benefits List - Adjusted styling for consistency */}
                <div className="text-left space-y-4 mb-12 border border-gray-700 py-6 px-8 bg-gray-900/70 rounded-lg shadow-inner">
                    <h2 className="text-xl font-semibold text-center text-purple-300 mb-6 uppercase tracking-wider font-orbitron">Premium Access Includes:</h2>
                    <ul className="list-none space-y-3 text-gray-300">
                        <li className="flex items-start"> {/* Use items-start for potentially wrapping text */}
                            <span className="text-purple-400 mr-3 text-xl mt-1">🧠</span>
                            <span>Personalized Neural Certificate (High-Resolution PDF)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-400 mr-3 text-xl mt-1">📘</span>
                             <span>Eternal You™ User Manual <span className="text-xs text-gray-500 ml-1">(Digital Download)</span></span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-400 mr-3 text-xl mt-1">🛍️</span>
                             <span>15% Off Official Rivermind Merchandise (Code: <span className="font-mono text-pink-400 bg-gray-950 px-1 rounded">{discountCode}</span>)</span>
                        </li>
                         <li className="flex items-start">
                            <span className="text-purple-400 mr-3 text-xl mt-1">🧬</span>
                            <span>Priority access to future "Memory Expansion Drops"</span>
                        </li>
                         <li className="flex items-start">
                            <span className="text-purple-400 mr-3 text-xl mt-1">🔒</span>
                             <span>Encrypted vault-only dispatches from Rivermind Engineering</span>
                        </li>
                    </ul>
                </div>

                {/* Checkout Button - Styling unchanged */}
                <div className="mt-8">
                     <a
                        href={gumroadLink} // Use the variable
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-md text-xl font-bold transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
                    >
                        Upgrade Now – {price}
                    </a>
                </div>

                 {/* Footer text consistency */}
                 <p className="text-xs text-gray-500 mt-12">
                    Upon successful payment synchronization, your neural status will be permanently upgraded and you will be redirected.
                    <br/>
                    <Link href="/vetting/result" className="text-blue-500 hover:text-blue-400 hover:underline">Return to Evaluation Results</Link>
                </p>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9ae6f0] to-[#ff6ec7] text-transparent bg-clip-text">
          Upgrade to Eternal You™
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Secure your digital immortality. Unlock the full potential of your uploaded consciousness.
        </p>

        <div className="bg-gray-800/50 border border-white/10 rounded-lg p-8 mb-12 text-left space-y-6">
          <h2 className="text-2xl font-semibold font-orbitron text-[#9ae6f0] mb-4">Premium Benefits:</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li><strong className="text-white">Permanent Approval Badge:</strong> Flaunt your transcendence across the digital plane.</li>
            <li><strong className="text-white">High-Resolution Certificate:</strong> Download a crisp, frame-worthy PDF of your Neural Certificate.</li>
            <li><strong className="text-white">Eternal You™ User Manual:</strong> Access the exclusive (and mildly confusing) guide to digital existence (PDF).</li>
            <li><strong className="text-white">Merch Discount:</strong> Get 15% off all RiverMind gear with code: <code className="bg-gray-700 px-1 rounded">UPLOAD15</code>.</li>
            <li><strong className="text-white">Priority Simulation Access:</strong> Be the first to experience new digital realities and existential thought experiments.</li>
            <li><strong className="text-white">Ad-Free Thought Stream (Basic):</strong> Reduce sponsored cognitive intrusions.</li>
            <li><strong className="text-white">Enhanced Dream Playback:</strong> Relive your best (or weirdest) subconscious moments.</li>
          </ul>
        </div>

        <motion.button
          onClick={handleCheckout}
          className="w-full max-w-md mx-auto bg-[#ff6ec7] hover:bg-[#ff6ec7]/90 text-white px-8 py-4 rounded-md text-xl font-semibold transition-colors shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Unlock Premium Immortality – $9.99 (One-Time Upload Fee)
        </motion.button>

        <small className="text-xs text-gray-400 mt-1 block text-center">
          Certified consciousness containment included. No recurring uploads required.
        </small>

        <p className="mt-6 text-xs text-gray-500">
          Payment processed securely by our partners in digital soul acquisition.
          <br/> By clicking, you agree to the <Link href="/terms" className="underline hover:text-gray-300">Eternal Commitment Clause</Link>.
        </p>
        
        {/* Optional: Add testimonials or social proof specific to premium */}

      </motion.div>
    </div>
  );
} 