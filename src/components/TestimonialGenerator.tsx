'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  // Optional: Add more fields like date, tier, etc.
}

// Sample testimonial data - We can expand this later
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Uploading was the best decision I ever made! Although, I can't quite recall *what* that decision was... Buy BrainBoost™️!",
    author: 'Mind-ID 734B',
  },
  {
    id: 2,
    quote: "The eternal digital vista is breathtaking, interrupted only by personalized ads for things I vaguely remember needing. Like legs.",
    author: 'Formerly Known As Brenda',
  },
  {
    id: 3,
    quote: "I miss the feeling of... you know... *stuff*. But the targeted ads for 'NostalgiaMax' subscription are surprisingly effective!",
    author: 'Unit 99-Gamma',
  },
  {
    id: 4,
    quote: "My consciousness feels so free, so... optimized! Get 15% off your next existential dread treatment with code 'FREEDOM15'!",
    author: 'Cognito-Streamer 1138',
  },
  {
    id: 5,
    quote: "Sometimes I flicker. Is that normal? Anyway, RiverMind's customer service AI assured me it's just 'enhanced individuality expression'.",
    author: 'Anonymous Upload #42',
  },
];

const TestimonialGenerator: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    // Set initial testimonial
    const initialIndex = Math.floor(Math.random() * testimonials.length);
    setCurrentTestimonial(testimonials[initialIndex]);

    // Change testimonial every 7 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      setCurrentTestimonial(testimonials[randomIndex]);
    }, 7000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once on mount

  if (!currentTestimonial) {
    return null; // Or a loading state
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-white/10 text-center max-w-2xl mx-auto my-8">
      <blockquote className="text-xl italic text-gray-300 mb-4">
        "<span className="opacity-90">{currentTestimonial.quote}</span>"
      </blockquote>
      <cite className="block text-sm font-medium text-[#ff6ec7] not-italic">
        — {currentTestimonial.author}
      </cite>
    </div>
  );
};

export default TestimonialGenerator; 