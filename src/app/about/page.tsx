'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Dr. Ada Quantum',
    role: 'Chief Consciousness Officer',
    image: '/team/ada.jpg',
    bio: 'Pioneer in quantum consciousness transfer. Previously uploaded her cat to the cloud (it now runs our security systems).',
    achievement: 'First human to experience digital déjà vu in 7 parallel universes simultaneously.'
  },
  {
    name: 'Max Mindstream',
    role: 'Head of Memory Management',
    image: '/team/max.jpg',
    bio: 'Expert in cognitive compression algorithms. Claims to remember the future but keeps forgetting to prove it.',
    achievement: 'Developed our patented "It\'s Not A Bug, It\'s A Feature" consciousness error handling system.'
  },
  {
    name: 'Dr. Luna Virtuality',
    role: 'Digital Ethics Officer',
    image: '/team/luna.jpg',
    bio: 'Ensures ethical treatment of all uploaded consciousness instances. May or may not be an AI pretending to be human.',
    achievement: 'Created the "Consciousness Rights Bill" (currently being debated in 12 simulated congresses).'
  },
  {
    name: 'Zephyr Cloud',
    role: 'Dream Server Architect',
    image: '/team/zephyr.jpg',
    bio: 'Designs the shared dream spaces for our Basic tier subscribers. Known for accidentally creating infinite recursive dream loops.',
    achievement: 'Successfully debugged the nightmare realm without entering it (mostly).'
  }
]

const timeline = [
  {
    year: '2021',
    title: 'The Beginning',
    description: 'RiverMind.ai founded in a quantum garage that simultaneously existed and didn\'t exist.'
  },
  {
    year: '2022',
    title: 'First Success',
    description: 'Successfully uploaded first consciousness (it was just a really detailed todo list, but still...).'
  },
  {
    year: '2023',
    title: 'Major Breakthrough',
    description: 'Discovered that consciousness can be compressed using middle school embarrassments as entropy.'
  },
  {
    year: '2024',
    title: 'Going Public',
    description: 'Launched public beta. Minor incident where users\' consciousness leaked into nearby WiFi networks.'
  },
  {
    year: '2025',
    title: 'The Future',
    description: 'Projected expansion into the metaverse (once we figure out which one is real).'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-orbitron font-bold mb-4">
            Meet the Minds Behind RiverMind.ai
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our team of visionaries, dreamers, and questionably sane innovators pushing the boundaries of digital consciousness.
          </p>
        </motion.div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-orbitron font-bold mb-2">{member.name}</h3>
                <p className="text-[#9ae6f0] mb-4">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-gray-500">
                    <span className="text-[#ff6ec7]">Notable Achievement:</span><br />
                    {member.achievement}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-4">Our Journey</h2>
          <p className="text-gray-400">A totally accurate timeline of our achievements and breakthroughs.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#9ae6f0] to-[#ff6ec7]" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end ml-auto pl-8' : 'justify-start mr-auto pr-8'} w-1/2`}>
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 relative">
                    {/* Year Bubble */}
                    <div 
                      className="absolute top-1/2 transform -translate-y-1/2 bg-[#ff6ec7] rounded-full w-12 h-12 flex items-center justify-center font-orbitron font-bold text-sm"
                      style={{ left: index % 2 === 0 ? '-3.5rem' : 'auto', right: index % 2 === 0 ? 'auto' : '-3.5rem' }}
                    >
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="/pricing"
            className="inline-block bg-[#ff6ec7] hover:bg-[#ff6ec7]/90 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
          >
            Join Our Digital Evolution
          </a>
          <p className="text-gray-500 text-sm mt-4">
            * No actual evolution guaranteed. Digital results may vary.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 