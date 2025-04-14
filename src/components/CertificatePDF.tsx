import React from 'react';
import Image from 'next/image';

interface CertificateProps {
  fullName: string;
  approvalStatus: string;
  neuralSummary: string;
  diagnosticNote: string;
  registeredMotto: string;
  backupTimestamp: string;
}

const CertificatePDF: React.FC<CertificateProps> = ({
  fullName = "[Upload Recipient Name]",
  approvalStatus = "[Pending Final Neural Sync]",
  neuralSummary = "[Cognitive Profile Summary Placeholder]",
  diagnosticNote = "[Initial Diagnostic Assessment Note]",
  registeredMotto = "[User's Chosen Motto Placeholder]", // Corrected escape sequence
  backupTimestamp = "[Timestamp Placeholder, e.g., 2025-04-13, 7:14 PM UTC]"
}) => {
  return (
    <div id="certificate-content" className="bg-gray-900 text-white p-8 border-4 border-gradient-to-r from-[#9ae6f0] to-[#ff6ec7] font-mono relative max-w-2xl mx-auto my-10 shadow-xl" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
      {/* Holographic Seal - Placeholder */}
      <div className="absolute top-4 right-4 opacity-30">
        {/* Replace with actual Image component once you have the seal */}
         <div className="w-20 h-20 bg-gradient-to-br from-[#9ae6f0]/50 to-[#ff6ec7]/50 rounded-full flex items-center justify-center text-xs text-center border border-white/30">
           RIVERMIND <br/> CERTIFIED
         </div>
        {/* <Image src="/path/to/holographic-seal.png" alt="Rivermind Seal" width={80} height={80} /> */}
      </div>

      <h1 className="text-3xl font-bold text-center mb-2 font-orbitron bg-gradient-to-r from-[#9ae6f0] to-[#ff6ec7] text-transparent bg-clip-text">
        Eternal You™ Neural Certificate
      </h1>
      <p className="text-center text-sm text-gray-400 mb-8">OFFICIAL CONSCIOUSNESS BACKUP RECORD</p>

      <div className="space-y-4 text-sm">
        <div className="grid grid-cols-3 gap-4">
          <span className="text-gray-500">FULL UPLOAD NAME:</span>
          <span className="col-span-2 text-[#9ae6f0]">{fullName}</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <span className="text-gray-500">APPROVAL STATUS:</span>
          <span className="col-span-2 font-bold text-green-400">{approvalStatus}</span>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="grid grid-cols-3 gap-4">
          <span className="text-gray-500">NEURAL SUMMARY:</span>
          <span className="col-span-2 text-gray-300">{neuralSummary}</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <span className="text-gray-500">DIAGNOSTIC NOTE:</span>
          <span className="col-span-2 text-gray-400 italic">{diagnosticNote}</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <span className="text-gray-500">REGISTERED MOTTO:</span>
          <span className="col-span-2 text-[#ff6ec7]">"{registeredMotto}"</span>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="grid grid-cols-3 gap-4">
          <span className="text-gray-500">BACKUP GENERATED:</span>
          <span className="col-span-2 text-gray-500">{backupTimestamp}</span>
        </div>
      </div>

      <p className="text-xs text-gray-600 mt-8 text-center">
        RiverMind.ai Internal Document RC-7B. Unauthorized duplication or sharing outside the approved neural network is strictly monitored.
        <br/> *Certificate validity contingent upon continued subscription adherence.*
      </p>
    </div>
  );
};

export default CertificatePDF; 