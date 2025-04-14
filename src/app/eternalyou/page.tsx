'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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
          Unlock Premium Immortality - $999 (One-Time Upload Fee)
        </motion.button>

        <p className="mt-6 text-xs text-gray-500">
          Payment processed securely by our partners in digital soul acquisition.
          <br/> By clicking, you agree to the <Link href="/terms" className="underline hover:text-gray-300">Eternal Commitment Clause</Link>.
        </p>
        
        {/* Optional: Add testimonials or social proof specific to premium */}

      </motion.div>
    </div>
  );
} 