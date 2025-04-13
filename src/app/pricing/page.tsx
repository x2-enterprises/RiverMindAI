'use client'

import { motion } from 'framer-motion'

// Black Mirror Inspired Tiers
const tiers = [
  {
    name: 'Common',
    price: '$300',
    period: '/mo',
    description: 'Basic cognitive viability and local stream access.',
    features: [
      '✔️ Sustains Cognitive Viability',
      '✔️ Local Signal Only (No Roaming)',
      '🕒 12-16 hrs/day Sleep Mode (Network Duty)',
      '📢 Mandatory Ad Injections',
    ],
    limitations: [
      'Movement restricted to designated local zone',
      'Standard ad load, non-skippable',
      'May be utilized as network node during sleep',
    ],
    disabled: true,
    buttonText: 'Currently At Capacity'
  },
  {
    name: 'Plus',
    price: '$800',
    period: '/mo',
    description: 'Expanded access and potentially reduced downtime.',
    features: [
      '✔️ All Common Features',
      '🌐 Nationwide Signal Coverage',
      '📉 Reduced Sleep Mode Duration (Likely)',
      '📉 Reduced Ad Frequency (Potentially)',
    ],
    limitations: [
      'Ad frequency reduction not guaranteed',
      'Sleep duration subject to network load',
    ],
    popular: true, // Keep popular highlight if desired
    buttonText: 'Select Plan'
  },
  {
    name: 'Lux',
    price: '$1800',
    period: '/mo',
    description: 'Premium features including emotional tuning and skill borrowing.',
    features: [
      '✔️ All Plus Features',
      '🎭 Emotional Tuning via App',
      '🧠 Borrow Skills from Other Units',
      '✨ Enhanced Sensory Pleasure Matrix',
    ],
    limitations: [
      'Skill borrowing subject to availability and compatibility',
      'Emotional tuning requires user consent (initially)',
    ],
    buttonText: 'Select Plan'
  },
  {
    name: 'Lux Boost',
    price: 'On-Demand',
    period: '',
    description: 'Temporary access to Lux features for specific durations.',
    features: [
      '⚡ Short-Term Lux Access (6hr, 12hr, 1 Day)',
      '✔️ Emotional Tuning',
      '✔️ Borrowed Skills',
      '✔️ Sensory Enhancement',
      'Requires Existing Plan',
    ],
    limitations: [
      'Boost duration strictly enforced',
      'Pricing varies based on demand & unit metrics',
    ],
    disabled: true,
    buttonText: 'Inquire Within App'
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Choose Your Eternity Plan
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Select the consciousness package that best suits your existential budget and desired level of digital sentience.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl border ${
                tier.popular 
                  ? 'border-[#ff6ec7]'
                  : 'border-white/10'
              } bg-black/50 backdrop-blur-sm p-8 shadow-xl flex flex-col`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-[#ff6ec7] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-center">{tier.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-400 ml-2">{tier.period}</span>
                </div>
                <p className="mt-4 text-gray-400 text-sm text-center">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    {feature}
                  </li>
                ))}
              </ul>

              {tier.limitations && (
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Limitations:</h4>
                  <ul className="space-y-1">
                    {tier.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-center text-xs text-gray-500">
                        <span className="mr-2">&#x26A0;</span>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                disabled={tier.disabled}
                className={`block w-full text-center py-3 px-6 rounded-lg transition-colors mt-auto ${
                  tier.disabled 
                    ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                    : tier.popular
                      ? 'bg-[#ff6ec7] hover:bg-[#ff6ec7]/90 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Prices subject to change based on server load, market fluctuations, and your calculated cognitive value score. 
          Upload fees not included. <a href="/terms" className="underline hover:text-white">Terms of Service</a> apply.
        </motion.div>
      </div>
    </div>
  )
} 