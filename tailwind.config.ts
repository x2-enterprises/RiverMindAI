import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
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
        'prose-dark': {
          body: '#cbd5e1',
          headings: '#f1f5f9',
          lead: '#a3a3a3',
          links: '#9ae6f0',
          bold: '#e2e8f0',
          counters: '#a3a3a3',
          bullets: '#64748b',
          hr: '#334155',
          quotes: '#e2e8f0',
          'quote-borders': '#334155',
          captions: '#a3a3a3',
          code: '#f1f5f9',
          'pre-code': '#cbd5e1',
          'pre-bg': '#1e293b',
          'th-borders': '#334155',
          'td-borders': '#334155',
        },
      },
      typography: ({ theme }: { theme: (path: string, defaultValue?: string) => string }) => ({
        DEFAULT: {
          css: {
            p: { marginBottom: '1.2em', lineHeight: '1.6' },
            a: { color: theme('colors.primary.blue') },
          },
        },
        dark: {
          css: {
            color: theme('colors.prose-dark.body'),
            '[class~="lead"]': { color: theme('colors.prose-dark.lead') },
            a: {
              color: theme('colors.prose-dark.links'),
              '&:hover': {
                 color: theme('colors.primary.pink'),
               },
            },
            strong: { color: theme('colors.prose-dark.bold') },
            'ol > li::before': { color: theme('colors.prose-dark.counters') },
            'ul > li::before': { backgroundColor: theme('colors.prose-dark.bullets') },
            hr: { borderColor: theme('colors.prose-dark.hr') },
            blockquote: {
              color: theme('colors.prose-dark.quotes'),
              borderLeftColor: theme('colors.prose-dark.quote-borders'),
              fontStyle: 'normal',
              backgroundColor: theme('colors.slate.800', '#1e293b'),
              padding: '0.8em 1em',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            h1: { color: theme('colors.prose-dark.headings') },
            h2: { color: theme('colors.prose-dark.headings'), marginTop: '1.8em', marginBottom: '0.8em' },
            h3: { color: theme('colors.prose-dark.headings'), marginTop: '1.5em', marginBottom: '0.6em' },
            h4: { color: theme('colors.prose-dark.headings') },
            figcaption: { color: theme('colors.prose-dark.captions') },
            code: { 
              color: theme('colors.prose-dark.code'),
              backgroundColor: theme('colors.slate.700', '#334155'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            pre: {
              color: theme('colors.prose-dark.pre-code'),
              backgroundColor: theme('colors.prose-dark.pre-bg'),
            },
            thead: {
              color: theme('colors.prose-dark.headings'),
              borderBottomColor: theme('colors.prose-dark.th-borders'),
            },
            'tbody tr': { borderBottomColor: theme('colors.prose-dark.td-borders') },
            p: { marginTop: '1em', marginBottom: '1em', lineHeight: '1.7' }, 
            li: { marginTop: '0.5em', marginBottom: '0.5em' },
          },
        },
      }),
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
    require('@tailwindcss/typography'),
  ],
};

export default config; 