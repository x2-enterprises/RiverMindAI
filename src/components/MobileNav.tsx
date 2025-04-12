'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/store', label: 'Store' },
  ]

  return (
    <div className="sm:hidden">
      <button
        className="p-2 text-gray-400 hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-4 py-4">
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/pricing"
                  className="block bg-[#ff6ec7] hover:bg-[#ff6ec7]/90 text-white px-4 py-2 rounded-md transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Choose Your Plan
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 