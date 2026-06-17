/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        bg2: '#111111',
        bg3: '#1a1a1a',
        border: 'rgba(255,255,255,0.08)',
        borderHover: 'rgba(255,255,255,0.18)',
        textMuted: 'rgba(255,255,255,0.45)',
        textDim: 'rgba(255,255,255,0.22)',
        pillBg: 'rgba(255,255,255,0.06)',
        cardFeatured: '#161616',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '14px',
      },
    },
  },
  plugins: [],
}
