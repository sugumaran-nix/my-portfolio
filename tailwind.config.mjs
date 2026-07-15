/** @type {import('tailwindcss').Config} */

/**
 * Color system — pure neutral gray scale, AAA contrast compliant
 *
 * Light scale:
 *   Base #FFFFFF · 50 #FAFAFA · 100 #F5F5F5 · 200 #E5E5E5 · 300 #D4D4D4
 *   400 #A3A3A3 · 500 #737373 · 600 #525252 · 700 #404040 · 800 #262626
 *   900 #171717 · 950 #0A0A0A
 *
 * Dark scale (mirror — low numbers = darkest):
 *   Base #000000 · 50 #0A0A0A · 100 #171717 · 200 #262626 · 300 #373737
 *   400 #525252 · 500 #8A8A8A · 600 #A3A3A3 · 700 #D4D4D4 · 800 #E5E5E5
 *   900 #F5F5F5 · 950 #FAFAFA
 */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // ── Light theme surfaces ──────────────────────────────────────────
        surface:       '#FFFFFF',    // Base  — page background
        surfaceMuted:  '#F5F5F5',    // 100   — alternate section bg
        cardLight:     '#FAFAFA',    // 50    — card background (slight elevation)
        borderLight:   '#E5E5E5',    // 200   — solid border (replaces rgba hack)

        // ── Dark theme surfaces ───────────────────────────────────────────
        surfaceDark:      '#000000', // Base  — page background
        surfaceDarkMuted: '#0A0A0A', // 50    — alternate section bg
        cardDark:         '#171717', // 100   — card background
        borderDark:       '#262626', // 200   — solid border (replaces rgba hack)

        // ── Text ──────────────────────────────────────────────────────────
        ink:      '#171717',         // 900   — primary text (light mode)
        inkMuted: '#737373',         // 500   — secondary/muted text

        // ── Accent (Apple system blue) ────────────────────────────────────
        accent:      '#0071e3',
        accentHover: '#0077ed',
        accentDark:  '#0a84ff',
      },

      boxShadow: {
        // Light — genuine drop shadow reads fine on white
        card:      '0 1px 2px rgba(0,0,0,0.05), 0 8px 24px -8px rgba(0,0,0,0.09)',
        cardHover: '0 4px 12px rgba(0,0,0,0.07), 0 20px 40px -12px rgba(0,0,0,0.14)',

        // Dark — on true-black, drop shadows are invisible.
        // Use an inset top-highlight + 1px ring for perceived elevation.
        cardDark:      'inset 0 1px 0 0 rgba(255,255,255,0.07), 0 0 0 1px #262626',
        cardDarkHover: 'inset 0 1px 0 0 rgba(255,255,255,0.11), 0 0 0 1px #373737',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
