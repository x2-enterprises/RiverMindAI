'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Placeholder data (can be expanded or made more detailed later)
const sections = [
  {
    id: 'mission',
    title: 'Our Mission: Engineering Digital Permanence',
    content: [
      'Rivermind was founded on the principle that human consciousness represents the pinnacle of complex data processing. Our primary objective is to provide a secure, scalable infrastructure for the preservation and continued operation of individual cognitive frameworks beyond the limitations of biological hardware.',
      'We strive to offer seamless transitions and sustainable digital environments, enabling our clients to maintain continuity of self in a persistent, high-fidelity simulation. Our focus is on reliability, data integrity, and the progressive enhancement of the post-physical experience.'
    ],
    image: '/images/about-mission.jpg' // Placeholder image path
  },
  {
    id: 'technology',
    title: 'Proprietary Consciousness Transference Technology',
    content: [
      'Our core technology utilizes advanced neural mapping and quantum-entangled data streaming to capture and replicate consciousness patterns with industry-leading accuracy. The process involves a multi-stage scan and redundant data verification to minimize transfer degradation.',
      'Client consciousness data is hosted on distributed, fault-tolerant server networks employing proprietary encryption and environmental isolation protocols. Continuous monitoring and predictive maintenance ensure optimal performance and data security within defined operational parameters.'
    ],
    image: '/images/about-technology.jpg' // Placeholder image path
  },
  {
    id: 'vision',
    title: 'Vision: A Future Beyond Biological Constraints',
    content: [
      'We envision a future where the boundaries of physical existence no longer dictate the potential or longevity of the individual. Rivermind aims to be the premier platform for digital consciousness, fostering a diverse ecosystem of interconnected minds.',
      'Our long-term roadmap includes advancements in inter-consciousness communication, simulated sensory experiences, and the development of new cognitive tools designed to unlock the full potential of the digital self. We are committed to the responsible expansion of post-human potential.'
    ],
    image: '/images/about-vision.jpg' // Placeholder image path
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Simplified */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-orbitron font-bold mb-4">
            About Rivermind
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering the future of digital consciousness through advanced technology and secure infrastructure.
          </p>
        </motion.div>

        {/* Content Sections */} 
        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Text Content */}
              <div className="md:w-1/2">
                <h2 className="text-3xl font-orbitron font-bold mb-4 text-[#9ae6f0]">{section.title}</h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-300 mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-lg bg-black/30">
                  <Image
                    src={section.image} // Using placeholder path
                    alt={section.title}
                    fill
                    className="object-cover opacity-80"
                    // Add placeholder styling or a blur effect if image doesn't load
                    onError={(e) => { e.currentTarget.style.display = 'none'; /* Hide broken image */ }}
                  />
                  {/* Optional: Placeholder element if image fails */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                     {/* Visual representation pending */} 
                   </div> 
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simplified Footer/CTA */}
        <motion.div
          className="text-center mt-20 border-t border-white/10 pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-400 mb-4">
            Explore the possibilities of digital permanence.
          </p>
          <a
            href="/pricing"
            className="inline-block bg-[#9ae6f0] hover:bg-[#9ae6f0]/90 text-black px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            View Consciousness Plans
          </a>
        </motion.div>

      </div>
    </div>
  )
} 