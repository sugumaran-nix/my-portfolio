/** @type {import('tailwindcss').Config} */

/**
 * WARM GRAPHITE MONOCHROME DESIGN SYSTEM
 *
 * Color Philosophy (60/30/10 rule):
 *   60% → background neutrals (surface/surfaceMuted)
 *   30% → surface/secondary (cards, borders, muted elements)
 *   10% → accent (near-black / near-white — purely monochrome)
 *
 * Color Tokens — Warm Graphite, WCAG AA compliant:
 *   Light: #F7F5F2 base → #0D0D0B darkest
 *   Dark:  #050505 base → #F8F8F8 lightest
 *   Zero chromatic accent — no blue, green, violet, or any hue.
 */

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      // ── Color Token System ─────────────────────────────────────────────
      colors: {
        // Light surfaces
        surface:        '#F7F5F2',   // page background — warm off-white
        surfaceMuted:   '#EDEAE6',   // alternate section bg
        cardLight:      '#FAFAF8',   // card background
        borderLight:    '#868380',   // solid border

        // Dark surfaces
        surfaceDark:      '#050505',  // page background — deep warm black
        surfaceDarkMuted: '#0A0A0A',  // alternate section bg
        cardDark:         '#0E0E0E',  // card background
        borderDark: '#2E2E2E',  // border

        // Text tokens
        ink:       '#0D0D0B',  // primary text light mode
        inkMuted:  '#6B6860',  // secondary text — warm gray

        // Accent system — purely monochrome
        accent:        '#1A1A18',   // primary CTA light mode
        accentHover:   '#2E2D2B',   // CTA hover light mode
        accentDark:    '#F8F8F8',   // primary CTA dark mode
        accentMid:     '#4A4A47',   // mid-tone for shimmer/hover
      },

      // ── Typography Scale (Major Third 1.250) ───────────────────────────
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display':    ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.03em' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.025em' }],
        'heading-lg': ['1.875rem',{ lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'heading':    ['1.5rem',  { lineHeight: '1.3',  letterSpacing: '-0.015em' }],
      },

      // ── Font Families ──────────────────────────────────────────────────
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },

      // ── Spacing Extensions (8-point grid) ─────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },

      // ── Border Radius ──────────────────────────────────────────────────
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },

      // ── Box Shadows ────────────────────────────────────────────────────
      boxShadow: {
        'card':       '0 1px 3px rgba(13,13,11,0.04), 0 8px 24px -4px rgba(13,13,11,0.08)',
        'card-hover': '0 4px 8px rgba(13,13,11,0.06), 0 20px 40px -8px rgba(13,13,11,0.14)',
        'card-lg':    '0 8px 16px rgba(13,13,11,0.06), 0 32px 64px -12px rgba(13,13,11,0.18)',

        'card-dark':       'inset 0 1px 0 0 rgba(255,255,255,0.05), 0 0 0 1px rgba(255,255,255,0.04)',
        'card-dark-hover': 'inset 0 1px 0 0 rgba(255,255,255,0.09), 0 0 0 1px rgba(255,255,255,0.07), 0 12px 32px -8px rgba(0,0,0,0.8)',

        'focus': '0 0 0 3px rgba(74,74,71,0.25)',
      },

      // ── Animation ──────────────────────────────────────────────────────
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
      },

      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      // ── Max Width ──────────────────────────────────────────────────────
      maxWidth: {
        'content': '1100px',
        'wide':    '1280px',
      },
    },
  },
  plugins: [],
}
