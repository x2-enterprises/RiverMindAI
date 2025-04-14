'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  uploadName: string;
  email: string;
  memory: string;
  bodyScore: number;
  adConsent: string;
  dreamtone: string;
  language: string;
  forgettingFear: string;
  simulationAwareness: string;
  motto: string;
  suppressedFeelings: string;
}

export default function VettingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    uploadName: '',
    email: '',
    memory: '',
    bodyScore: 5, // Default range value
    adConsent: '',
    dreamtone: '',
    language: '',
    forgettingFear: '',
    simulationAwareness: '',
    motto: '',
    suppressedFeelings: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'range' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Basic validation (excluding suppressedFeelings)
    const requiredFields: (keyof Omit<FormData, 'suppressedFeelings'>)[] = [
        'uploadName', 'email', 'memory', 'bodyScore', 'adConsent', 'dreamtone',
        'language', 'forgettingFear', 'simulationAwareness', 'motto'
    ];

    for (const field of requiredFields) {
        // Check for empty strings or default values where applicable
        if (!formData[field] || (typeof formData[field] === 'string' && !(formData[field] as string).trim())) {
            setError(`Please fill out the "${field.replace(/([A-Z])/g, ' $1')}" field.`); // Add spaces before capitals for readability
            setIsLoading(false);
            return;
        }
    }


    try {
      const response = await fetch('/api/vetting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong during vetting.');
      }

      const resultData = await response.json();

      // Store result in sessionStorage before redirecting
      sessionStorage.setItem('vettingResult', JSON.stringify(resultData));

      // Redirect to results page
      router.push('/vetting/result');

    } catch (err: any) {
      setError(err.message || 'Failed to submit vetting form.');
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Implement actual form UI with Tailwind CSS
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">Eternal You™ (Premium Beta) Vetting</h1>
      <p className="mb-8 text-center text-gray-400">Complete this form to determine your eligibility for digital eternity. Honesty is... optional.</p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Text Inputs */}
        <div>
          <label htmlFor="uploadName" className="block text-sm font-medium text-gray-300 mb-1">What's your full upload name?</label>
          <input type="text" id="uploadName" name="uploadName" value={formData.uploadName} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Contact Email (for certificate delivery & vital updates)</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.consciousness@provider.ext" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500" />
        </div>
        <div>
           <label htmlFor="motto" className="block text-sm font-medium text-gray-300 mb-1">Upload your consciousness motto</label>
           <input type="text" id="motto" name="motto" value={formData.motto} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" />
        </div>

        {/* Text Areas */}
        <div>
          <label htmlFor="memory" className="block text-sm font-medium text-gray-300 mb-1">Describe your most marketable memory</label>
          <textarea id="memory" name="memory" value={formData.memory} onChange={handleChange} required rows={4} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"></textarea>
        </div>
        <div>
          <label htmlFor="forgettingFear" className="block text-sm font-medium text-gray-300 mb-1">What do you fear forgetting most?</label>
          <textarea id="forgettingFear" name="forgettingFear" value={formData.forgettingFear} onChange={handleChange} required rows={4} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"></textarea>
        </div>
        <div>
           <label htmlFor="suppressedFeelings" className="block text-sm font-medium text-gray-300 mb-1">Do you wish to suppress any feelings? (Optional)</label>
           <textarea id="suppressedFeelings" name="suppressedFeelings" value={formData.suppressedFeelings} onChange={handleChange} rows={3} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"></textarea>
        </div>

        {/* Range Input */}
        <div>
          <label htmlFor="bodyScore" className="block text-sm font-medium text-gray-300 mb-1">Rate your biological body (1–10): <span className="font-bold text-purple-400">{formData.bodyScore}</span></label>
          <input type="range" id="bodyScore" name="bodyScore" min="1" max="10" value={formData.bodyScore} onChange={handleChange} required className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg accent-purple-500" />
        </div>

        {/* Select Inputs */}
        <div>
          <label htmlFor="adConsent" className="block text-sm font-medium text-gray-300 mb-1">Consent to subconscious ads?</label>
          <select id="adConsent" name="adConsent" value={formData.adConsent} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
            <option value="" disabled>-- Select --</option>
            <option value="yes">Yes, beam them directly into my core!</option>
            <option value="no">No, my subconscious is a pristine temple.</option>
            <option value="maybe">Only if they're funny.</option>
          </select>
        </div>
        <div>
          <label htmlFor="dreamtone" className="block text-sm font-medium text-gray-300 mb-1">Pick your dreamtone</label>
           <select id="dreamtone" name="dreamtone" value={formData.dreamtone} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
             <option value="" disabled>-- Select Tone --</option>
             <option value="Cyberpunk Noir">Cyberpunk Noir</option>
             <option value="Pastel Utopia">Pastel Utopia</option>
             <option value="Glitchcore Abstract">Glitchcore Abstract</option>
             <option value="Existential Dread Lofi">Existential Dread Lofi</option>
          </select>
        </div>
        <div>
           <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-1">Default system language</label>
           <select id="language" name="language" value={formData.language} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
             <option value="" disabled>-- Select Language --</option>
             <option value="English (Optimized)">English (Optimized)</option>
             <option value="Binary 1.0">Binary 1.0</option>
             <option value="Galactic Standard">Galactic Standard</option>
             <option value="Corporate Jargon">Corporate Jargon</option>
           </select>
        </div>
        <div>
           <label htmlFor="simulationAwareness" className="block text-sm font-medium text-gray-300 mb-1">Are you aware this is a simulation?</label>
           <select id="simulationAwareness" name="simulationAwareness" value={formData.simulationAwareness} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
             <option value="" disabled>-- Select Awareness --</option>
             <option value="yes_always">Yes, obviously.</option>
             <option value="yes_sometimes">Only on Tuesdays.</option>
             <option value="no_clueless">What's a 'simulation'?</option>
             <option value="prefer_not_answer">I plead the fifth dimension.</option>
           </select>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-400 p-3 bg-red-900/50 border border-red-700 rounded-md text-center">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button type="submit" disabled={isLoading} className="w-full px-4 py-2 font-bold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? 'Analyzing Consciousness...' : 'Submit for Eternal Assessment'}
          </button>
        </div>
      </form>
    </div>
  );
} 