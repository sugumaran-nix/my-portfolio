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
        borderDark: 'rgba(255,255,255,0.1)',
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
        // Shadows don't read on black — dark elevation instead uses a subtle inset
        // top highlight + hairline ring, matching how macOS/iOS render dark cards.
        cardDark: 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.05)',
        cardDarkHover: 'inset 0 1px 0 0 rgba(255,255,255,0.09), 0 0 0 1px rgba(255,255,255,0.09)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
