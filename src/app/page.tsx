'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const LiveSubscriberCount = () => {
  const [count, setCount] = useState(127843)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3))
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="text-center">
      <p className="text-gray-400 mb-2">Live Subscriber Count</p>
      <div className="font-orbitron text-4xl font-bold bg-gradient-to-r from-[#9ae6f0] to-[#ff6ec7] text-transparent bg-clip-text">
        {count.toLocaleString()}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="font-orbitron text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="glitch-effect" data-text="Upload your mind.">
              Upload your mind.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#9ae6f0] to-[#ff6ec7] text-transparent bg-clip-text">
              Stay subscribed.
              <br />
              Stay alive.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience digital immortality through our revolutionary consciousness upload service. 
            Join thousands who have already secured their digital future.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/pricing" 
              className="inline-block bg-[#ff6ec7] hover:bg-[#ff6ec7]/90 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
            >
              Choose Your Plan
            </Link>
          </motion.div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <LiveSubscriberCount />
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
            Why Choose RiverMind.ai?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "99.9% Uptime",
                description: "Your consciousness deserves reliable hosting. Terms and conditions apply.*"
              },
              {
                title: "Memory Compression",
                description: "We compress the unnecessary bits. Like that embarrassing phase in high school."
              },
              {
                title: "Ad-Free Options",
                description: "Upgrade to remove sponsored thoughts and dream advertisements."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-white/10 hover:border-[#ff6ec7]/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
