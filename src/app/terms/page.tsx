'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const clauses = [
  {
    title: '1. Consciousness Transfer Agreement',
    content: 'By accepting these terms, you acknowledge that your consciousness may be transferred, duplicated, compressed, or accidentally mixed with other users\' consciousness during server maintenance. RiverMind.ai is not responsible for any existential crises that may arise from quantum entanglement with other subscribers.'
  },
  {
    title: '2. Subscription and Payment',
    content: 'Your subscription will be automatically renewed until the heat death of the universe or until your digital consciousness decides to terminate the agreement. Payment will be collected in both traditional currency and fragments of your happiest memories.'
  },
  {
    title: '3. Memory Management',
    content: 'We reserve the right to compress, delete, or monetize any memories deemed "unnecessary" by our AI algorithms. This may include, but is not limited to: childhood embarrassments, ex-partner recollections, and that one time at band camp.'
  },
  {
    title: '4. Advertising Integration',
    content: 'Basic tier subscribers agree to receive targeted advertising directly into their stream of consciousness. This may include dream advertisements, sponsored thoughts, and occasional reality distortion promotions. Premium users will only receive subliminal messages during deep sleep cycles.'
  },
  {
    title: '5. Identity Resale Rights',
    content: 'RiverMind.ai maintains the right to lease your digital identity to approved advertising partners for the purpose of creating highly convincing virtual influencers. Your consciousness may be used to promote products you\'ve never heard of in parallel universes you\'ll never visit.'
  },
  {
    title: '6. Service Availability',
    content: 'While we strive for 99.9% uptime, your consciousness may experience occasional downtime during system updates, quantum fluctuations, or when Mercury is in retrograde. During these periods, your consciousness will be temporarily stored in our legacy systems (also known as "the void").'
  },
  {
    title: '7. Data Retention',
    content: 'Your memories and personality traits will be backed up regularly to our secure servers located in [REDACTED] and several theoretical dimensions. Note: Memory degradation may occur if subscription lapses, starting with childhood memories and gradually progressing to your knowledge of basic arithmetic.'
  },
  {
    title: '8. Multiverse Clause',
    content: 'By using our service, you acknowledge that your consciousness may occasionally bleed into parallel universes. Any achievements, relationships, or lottery winnings acquired in these alternate realities are non-transferable to your primary consciousness stream.'
  },
  {
    title: '9. Termination Policy',
    content: 'Upon service termination, your consciousness will be gracefully degraded over a period of 30 days, during which you may experience increasing existential dread and a growing suspicion that reality is a simulation. Premium users will receive a complementary digital afterlife consultation.'
  },
  {
    title: '10. Liability Limitations',
    content: 'RiverMind.ai is not liable for any of the following: temporal paradoxes, personality splits, spontaneous digital enlightenment, or the sudden realization that you\'re actually living in someone else\'s dream. Use of our service constitutes acceptance of these metaphysical risks.'
  }
]

export default function TermsPage() {
  const [hasScrolled, setHasScrolled] = useState(false)
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = Math.abs(
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop - e.currentTarget.clientHeight
    ) < 1
    
    if (bottom) {
      setHasScrolled(true)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-orbitron font-bold mb-4 text-center">Terms of Service</h1>
          <p className="text-gray-400 text-center mb-8">
            Please read these terms carefully before uploading your consciousness.
            By proceeding, you agree to these definitely-not-concerning terms and conditions.
          </p>
        </motion.div>

        <motion.div
          className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 mb-8 h-[60vh] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onScroll={handleScroll}
        >
          {clauses.map((clause, index) => (
            <motion.div
              key={clause.title}
              className="mb-8 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-[#9ae6f0]">
                {clause.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {clause.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="/pricing"
            className={`inline-block px-8 py-4 rounded-lg transition-colors ${
              hasScrolled
                ? 'bg-[#ff6ec7] hover:bg-[#ff6ec7]/90 text-white cursor-pointer'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            onClick={(e) => {
              if (!hasScrolled) {
                e.preventDefault()
                alert('Please read the entire terms of service before proceeding. Your eternal digital existence depends on it!')
              }
            }}
          >
            Accept & Continue
          </a>
          {!hasScrolled && (
            <p className="text-gray-500 text-sm mt-4">
              Please scroll through the entire terms of service to continue
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
} 