import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: {
          blue: '#9ae6f0',
          pink: '#ff6ec7',
        },
      },
      animation: {
        'glitch': 'glitch 3s infinite',
      },
      keyframes: {
        glitch: {
          '0%': {
            textShadow: '0.05em 0 0 #ff6ec7, -0.05em -0.025em 0 #9ae6f0',
          },
          '14%': {
            textShadow: '0.05em 0 0 #ff6ec7, -0.05em -0.025em 0 #9ae6f0',
          },
          '15%': {
            textShadow: '-0.05em -0.025em 0 #ff6ec7, 0.025em 0.025em 0 #9ae6f0',
          },
          '49%': {
            textShadow: '-0.05em -0.025em 0 #ff6ec7, 0.025em 0.025em 0 #9ae6f0',
          },
          '50%': {
            textShadow: '0.025em 0.05em 0 #ff6ec7, 0.05em 0 0 #9ae6f0',
          },
          '99%': {
            textShadow: '0.025em 0.05em 0 #ff6ec7, 0.05em 0 0 #9ae6f0',
          },
          '100%': {
            textShadow: '-0.025em 0 0 #ff6ec7, -0.025em -0.025em 0 #9ae6f0',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config; 