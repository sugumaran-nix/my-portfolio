/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink:      '#09090B',
        inkMuted: '#71717A',

        // Electric purple — the signature colour
        accent:      '#7C3AED',   // violet-600 — strong on white
        accentHover: '#6D28D9',   // violet-700 — hover on light
        accentDark:  '#A855F7',   // purple-500 — BRIGHT & electric on dark bg

        // Light surfaces
        surface:      '#FFFFFF',
        surfaceMuted: '#F4F4F5',
        cardLight:    '#FFFFFF',
        borderLight:  'rgba(0,0,0,0.08)',

        // Dark surfaces
        surfaceDark:      '#09090B',
        surfaceDarkMuted: '#111113',
        cardDark:         '#18181B',
        borderDark:       'rgba(255,255,255,0.08)',
      },
      boxShadow: {
        card:          '0 1px 3px rgba(0,0,0,0.06)',
        cardHover:     '0 8px 24px rgba(0,0,0,0.10)',
        cardDark:      '0 0 0 1px rgba(255,255,255,0.06)',
        // Purple glow on dark hover — the Solo Leveling effect
        cardDarkHover: '0 0 0 1px rgba(168,85,247,0.4), 0 0 40px rgba(168,85,247,0.2)',
        glowPurple:    '0 0 60px rgba(168,85,247,0.35)',
      },
    },
  },
  plugins: [],
};
