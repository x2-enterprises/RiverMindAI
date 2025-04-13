'use client';

import React from 'react';

const headlines = [
  "BREAKING: Rivermind experiences brief outage; subscribers forget entire childhoods.",
  "Scientists confirm: Digital consciousness is 70% more susceptible to targeted ads.",
  "New 'Premium Plus' Tier promises reduced existential dread, slightly higher chance of data auction.",
  "Uploaded mind accidentally deleted during routine maintenance; 'Our bad,' says CEO.",
  "Study: 9 out of 10 uploaded minds prefer the taste of virtual bacon.",
  "Memory Glitch Blamed for Sudden Surge in Subscribers Reciting 90s Sitcom Dialogues.",
  "Rivermind stock dips after AI assistant recommends competitor during support chat.",
  "Debate Erupts: Is experiencing ads in your dreams a 'feature' or a 'bug'?"
];

// Combine headlines into a single string, separated and repeated for smooth looping
const tickerText = headlines.join('  •  ') + '  •  '; // Add separator between headlines
const repeatedTickerText = tickerText.repeat(3); // Repeat the whole sequence 3 times

const NewsTicker: React.FC = () => {
  return (
    <div role="alert" className="bg-gradient-to-r from-[#ff6ec7]/80 via-[#ff6ec7]/70 to-[#9ae6f0]/80 text-black text-sm py-2 px-4 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-ticker">
        <span className="font-semibold mr-2">LATEST NEWS:</span>
        <span>{repeatedTickerText}</span>
      </div>
    </div>
  );
};

export default NewsTicker; 