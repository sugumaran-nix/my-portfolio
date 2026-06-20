/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Light theme surfaces (Apple HIG: systemBackground / Athens Gray section bg)
        surface: '#ffffff',
        surfaceMuted: '#f5f5f7',
        cardLight: '#ffffff',
        borderLight: 'rgba(0,0,0,0.08)',
        // Dark theme surfaces (Apple HIG: true-black base, secondary/tertiary system bg for elevation)
        surfaceDark: '#000000',
        surfaceDarkMuted: '#0a0a0a',
        cardDark: '#1c1c1e',
        borderDark: 'rgba(255,255,255,0.14)',
        // Shared accents (Apple HIG near-black label + secondary label gray)
        ink: '#1d1d1f',
        inkMuted: '#6e6e73',
        paper: '#ffffff',
        paperMuted: 'rgba(255,255,255,0.6)',
        // Apple system blue — used sparingly for primary actions/links
        accent: '#0071e3',
        accentHover: '#0077ed',
        accentDark: '#0a84ff',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.04), 0 10px 30px -12px rgba(0,0,0,0.10)',
        cardHover: '0 4px 12px rgba(0,0,0,0.06), 0 24px 48px -16px rgba(0,0,0,0.16)',
        // Glassmorphism elevation for dark mode: inset top highlight (catches
        // the light like real frosted glass) + a soft ambient glow now that
        // there are colored blobs behind the content for it to pick up.
        cardDark: 'inset 0 1px 0 0 rgba(255,255,255,0.10), 0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)',
        cardDarkHover: 'inset 0 1px 0 0 rgba(255,255,255,0.16), 0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
