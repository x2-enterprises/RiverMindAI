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
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">🧠 Final Eternal You™ Vetting Survey</h1>
      <p className="mb-8 text-center text-gray-400">Complete this survey to determine your eligibility for digital consciousness migration.</p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Text Inputs */}
        <div>
          <label htmlFor="uploadName" className="block text-sm font-medium text-gray-300 mb-1">Identification Unit</label>
          <p className="text-xs text-gray-400 mb-1">Please confirm your upload designation. This will be used on all identity certificates.</p>
          <input type="text" id="uploadName" name="uploadName" value={formData.uploadName} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" autoFocus />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Contact Email (for certificate delivery & vital updates)</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.consciousness@provider.ext" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500" />
        </div>
        <div>
           <label htmlFor="motto" className="block text-sm font-medium text-gray-300 mb-1">Persistent Identity Statement</label>
           <p className="text-xs text-gray-400 mb-1">Submit a statement or phrase you believe best defines your core consciousness.</p>
           <input type="text" id="motto" name="motto" value={formData.motto} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" />
        </div>

        {/* Text Areas */}
        <div>
          <label htmlFor="memory" className="block text-sm font-medium text-gray-300 mb-1">Core Memory Index</label>
          <p className="text-xs text-gray-400 mb-1">Briefly describe a memory you consider most representative of your neural value.</p>
          <textarea id="memory" name="memory" value={formData.memory} onChange={handleChange} required rows={4} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"></textarea>
        </div>
        <div>
          <label htmlFor="forgettingFear" className="block text-sm font-medium text-gray-300 mb-1">Memory Retention Priorities</label>
          <p className="text-xs text-gray-400 mb-1">What aspect of your current life are you most afraid of forgetting post-migration?</p>
          <textarea id="forgettingFear" name="forgettingFear" value={formData.forgettingFear} onChange={handleChange} required rows={4} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"></textarea>
        </div>
        <div>
           <label htmlFor="suppressedFeelings" className="block text-sm font-medium text-gray-300 mb-1">Emotive Artifacts for Suppression (Optional)</label>
           <p className="text-xs text-gray-400 mb-1">Indicate any recurring feelings, regrets, or thought patterns you prefer to be minimized post-upload.</p>
           <textarea id="suppressedFeelings" name="suppressedFeelings" value={formData.suppressedFeelings} onChange={handleChange} rows={3} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"></textarea>
        </div>

        {/* Range Input */}
        <div>
          <label htmlFor="bodyScore" className="block text-sm font-medium text-gray-300 mb-1">Biological Shell Status (Self-Reported)</label>
          <p className="text-xs text-gray-400 mb-1">On a scale of 1–10, how would you rate the current resilience of your physical form? <span className="font-bold text-purple-400">{formData.bodyScore}</span></p>
          <input type="range" id="bodyScore" name="bodyScore" min="1" max="10" value={formData.bodyScore} onChange={handleChange} required className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg accent-purple-500" />
        </div>

        {/* Select Inputs */}
        <div>
          <label htmlFor="adConsent" className="block text-sm font-medium text-gray-300 mb-1">Subconscious Monetization Preference</label>
          <p className="text-xs text-gray-400 mb-1">Do you consent to subconscious-level content integrations in exchange for enhanced uptime?</p>
          <select id="adConsent" name="adConsent" value={formData.adConsent} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
            <option value="" disabled>Select monetization preference...</option>
            <option value="accept">I accept standard integration terms</option>
            <option value="review">I prefer to review modules prior to activation</option>
            <option value="decline">I decline at this time</option>
            <option value="no_preference">Proceed without preference</option>
          </select>
        </div>
        <div>
          <label htmlFor="dreamtone" className="block text-sm font-medium text-gray-300 mb-1">Perceptual Rendering Mode</label>
          <p className="text-xs text-gray-400 mb-1">Select your preferred visual cognition profile.</p>
           <select id="dreamtone" name="dreamtone" value={formData.dreamtone} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
             <option value="" disabled>Choose rendering mode...</option>
             <option value="ambient_neutral">Ambient Neutral (Default)</option>
             <option value="precision_mono">Precision Monochrome</option>
             <option value="high_sat_commercial">High-Saturation Commercial</option>
             <option value="retinal_cloud">Retinal Cloud Archive</option>
          </select>
        </div>
        <div>
           <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-1">Linguistic Encoding Standard</label>
           <p className="text-xs text-gray-400 mb-1">Choose your primary interpretation model.</p>
           <select id="language" name="language" value={formData.language} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
             <option value="" disabled>Select language encoding...</option>
             <option value="en_streamlined">English (Streamlined)</option>
             <option value="en_hle">Human Legacy English (HLE)</option>
             <option value="tni_v3">TNI v3 (Techno-Neuro Interface)</option>
             <option value="no_preference">No Preference</option>
           </select>
        </div>
        <div>
           <label htmlFor="simulationAwareness" className="block text-sm font-medium text-gray-300 mb-1">Simulation Alignment Confidence</label>
           <p className="text-xs text-gray-400 mb-1">Please confirm your current perceptual frame alignment.</p>
           <select id="simulationAwareness" name="simulationAwareness" value={formData.simulationAwareness} onChange={handleChange} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white">
             <option value="" disabled>Confirm perceptual alignment...</option>
             <option value="aligned">Alignment confirmed — baseline matches</option>
             <option value="misaligned">Misalignment suspected</option>
             <option value="uncertain">Uncertain — recommend resync</option>
             <option value="defer">Defer report</option>
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