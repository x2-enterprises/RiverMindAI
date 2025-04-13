'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import TestimonialGenerator from '@/components/TestimonialGenerator'

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

// New component for the Email Form logic
const EmailCaptureForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('Submitting application...');

    try {
      const response = await fetch('https://formspree.io/f/meoandky', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send email as JSON
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Application Received! Your consciousness is pending review... (Check your email for confirmation from Formspree).');
        setEmail(''); // Clear the form
      } else {
        const data = await response.json();
        setStatus('error');
        setMessage(data.errors?.map((e: any) => e.message).join(", ") || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An unexpected error occurred. Please check your connection and try again.');
      console.error("Form submission error:", error);
    }
  };

  return (
    <form id="upload-form" onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Apply for Upload Eligibility:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email address" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6ec7] focus:border-transparent disabled:opacity-50"
        />
      </div>
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-[#9ae6f0] hover:bg-[#9ae6f0]/90 text-black px-6 py-3 rounded-md text-lg font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Application'}
      </button>
      {message && (
        <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-400' : status === 'success' ? 'text-green-400' : 'text-gray-400'}`}>
          {message}
        </p>
      )}
    </form>
  );
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
      
      {/* Email Capture Section */}
      <section id="email-capture" className="py-16 bg-gradient-to-b from-black via-gray-900/80 to-black">
        <motion.div 
          className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-4 text-[#9ae6f0]">
            Ready to Transcend?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            The physical world is temporary. Rivermind offers eternity (subscription required).
            Apply for Upload Eligibility and join the waitlist.
          </p>
          {/* Removed TODO comment and form structure, replaced with component */}
          <EmailCaptureForm /> {/* Use the new form component */} 
          <p className="mt-4 text-xs text-gray-500">
            By submitting, you agree to our <Link href="/terms" className="underline hover:text-gray-300">Terms of Service</Link> and potential existential risks.
          </p>
        </motion.div>
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
      
      {/* Testimonial Section */}
      <section className="py-16 bg-black/95">
         <TestimonialGenerator />
      </section>
    </div>
  );
}
