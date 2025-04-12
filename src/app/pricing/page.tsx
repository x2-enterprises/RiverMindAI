'use client'

import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Basic Consciousness',
    price: '$9.99',
    period: '/mo',
    description: 'Perfect for those just starting their digital afterlife journey.',
    features: [
      'Ads injected into speech',
      '5-mile movement limit',
      'Basic memory storage (2TB)',
      'Shared processing power',
      'Weekly consciousness backups',
      'Emergency tech support (48hr response)',
    ],
    limitations: [
      'No ad-blocking available',
      'Limited memory compression',
      'Shared dream server',
    ]
  },
  {
    name: 'Premium Self',
    price: '$49.99',
    period: '/mo',
    description: 'Enhanced digital existence with premium features.',
    features: [
      'Ad-free experience',
      '50% memory retention',
      'Priority processing power',
      'Extended movement range (50 miles)',
      'Daily consciousness backups',
      'Premium tech support (12hr response)',
      'Custom dream settings',
    ],
    limitations: [
      'Some memory degradation',
      'Limited multiverse access',
    ],
    popular: true,
  },
  {
    name: 'Eternal You',
    price: '$99.99',
    period: '/mo',
    description: 'The ultimate digital immortality experience.',
    features: [
      'Full self preservation',
      '24/7 uptime guarantee*',
      'Unlimited movement range',
      'Dedicated processing cores',
      'Real-time consciousness backups',
      'Instant tech support',
      'Private dream server',
      'Multiverse access',
      'Memory expansion ready',
    ],
    limitations: [
      'Terms intentionally unclear',
      'Results may vary',
    ]
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
            Choose Your Digital Destiny
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Select the consciousness plan that best fits your digital afterlife needs.
            All plans include our patented mind-upload technology.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl border ${
                tier.popular 
                  ? 'border-[#ff6ec7]' 
                  : 'border-white/10'
              } bg-black/50 backdrop-blur-sm p-8 shadow-xl`}
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
                <h3 className="text-2xl font-orbitron font-bold mb-4">{tier.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-400 ml-2">{tier.period}</span>
                </div>
                <p className="mt-4 text-gray-400">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="h-5 w-5 text-[#9ae6f0] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {tier.limitations && (
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">Limitations:</h4>
                  <ul className="space-y-2">
                    {tier.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-center text-sm text-gray-500">
                        <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href="/terms"
                className={`block w-full text-center py-3 px-6 rounded-lg transition-colors ${
                  tier.popular
                    ? 'bg-[#ff6ec7] hover:bg-[#ff6ec7]/90 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          * Uptime guarantee subject to quantum fluctuations, parallel universe interference, and regular maintenance windows. 
          Memory retention rates may vary based on cognitive complexity and subscription tier. 
          Please read our Terms of Service for complete details about consciousness transfer limitations and potential side effects.
        </motion.div>
      </div>
    </div>
  )
} 