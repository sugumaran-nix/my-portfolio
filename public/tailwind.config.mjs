/** @type {import('tailwindcss').Config} */

/**
 * PREMIUM DESIGN SYSTEM — built from /premium-website + /premium-saas-design skills
 *
 * Color Philosophy (60/30/10 rule):
 *   60% → background neutrals (surface/surfaceMuted)
 *   30% → surface/secondary (cards, borders, muted elements)
 *   10% → accent (emerald green — trust, availability, action)
 *
 * Color Tokens — Coolors-calibrated, WCAG AA compliant:
 *   Light: #FFFFFF base → #0A0A0A darkest
 *   Dark:  #000000 base → #FAFAFA lightest
 *   Accent: #10b981 emerald (trust, action, availability)
 *
 * Type Scale — modular scale 1.250 (Major Third):
 *   xs 12px · sm 14px · base 16px · lg 18px · xl 20px
 *   2xl 24px · 3xl 30px · 4xl 36px · 5xl 48px · 6xl 60px · 7xl 72px
 *
 * Spacing — 8-point grid (every value is multiple of 4px):
 *   1=4px 2=8px 3=12px 4=16px 5=20px 6=24px 8=32px 10=40px 12=48px 14=56px 16=64px
 */

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      // ── Color Token System ─────────────────────────────────────────────
      colors: {
        // Light surfaces (60% rule — background neutrals)
        surface:        '#FFFFFF',   // page background
        surfaceMuted:   '#F8F8F8',   // alternate section bg — slightly warm, not harsh
        cardLight:      '#FAFAFA',   // card background
        borderLight:    '#E8E8E8',   // solid border — softer than pure E5E5E5

        // Dark surfaces (60% rule — pure black base for real premium feel)
        surfaceDark:      '#000000',  // page background — true black
        surfaceDarkMuted: '#0A0A0A',  // alternate section bg
        cardDark:         '#111111',  // card background — slightly lifted
        borderDark:       '#1F1F1F',  // border — not too gray, stays premium

        // Text tokens
        ink:       '#0D0D0D',  // primary text light mode — slightly off-black, richer than pure black
        inkMuted:  '#6B7280',  // secondary text — warm gray (not pure neutral)

        // Accent system — emerald #10b981 (trust, availability, action)
        // Used for: availability dot, CTA hover glow, scroll bar, skill tag hover
        accent:        '#0A0A0A',   // primary CTA light mode
        accentHover:   '#1F1F1F',   // CTA hover light mode
        accentDark:    '#F5F5F5',   // primary CTA dark mode
        accentGreen:   '#10b981',   // availability/status accent
        accentGreenDim:'#059669',   // darker green variant
      },

      // ── Typography Scale (Major Third 1.250) ───────────────────────────
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],  // 72px
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }], // 60px
        'display':    ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.03em' }],  // 48px
        'heading-xl': ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.025em' }], // 36px
        'heading-lg': ['1.875rem',{ lineHeight: '1.25', letterSpacing: '-0.02em' }],  // 30px
        'heading':    ['1.5rem',  { lineHeight: '1.3',  letterSpacing: '-0.015em' }], // 24px
      },

      // ── Font Families ──────────────────────────────────────────────────
      fontFamily: {
        // Satoshi (Fontshare) for body — premium feel, Inter fallback
        sans:    ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        // DM Serif Display for headings/display — personality + contrast
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        // JetBrains Mono for code/email — technical precision
        mono:    ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },

      // ── Spacing Extensions (8-point grid) ─────────────────────────────
      spacing: {
        '18': '4.5rem',  // 72px — section component gap
        '22': '5.5rem',  // 88px — section pad mobile
        '26': '6.5rem',  // 104px
      },

      // ── Border Radius ──────────────────────────────────────────────────
      borderRadius: {
        '2xl': '1rem',   // 16px — cards
        '3xl': '1.5rem', // 24px — large cards
        '4xl': '2rem',   // 32px — hero elements
      },

      // ── Box Shadows (real layered shadows, not rgba hacks) ─────────────
      boxShadow: {
        // Light mode — genuine depth
        'card':       '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px -4px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.06), 0 20px 40px -8px rgba(0,0,0,0.14)',
        'card-lg':    '0 8px 16px rgba(0,0,0,0.06), 0 32px 64px -12px rgba(0,0,0,0.18)',

        // Dark mode — inset highlight + ring (drop shadows invisible on black)
        'card-dark':       'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.04)',
        'card-dark-hover': 'inset 0 1px 0 0 rgba(255,255,255,0.10), 0 0 0 1px rgba(255,255,255,0.07), 0 12px 32px -8px rgba(0,0,0,0.8)',

        // Accent glow — emerald
        'glow-green': '0 0 20px rgba(16,185,129,0.25)',

        // Focus ring — accessible
        'focus': '0 0 0 3px rgba(16,185,129,0.4)',
      },

      // ── Animation Durations ────────────────────────────────────────────
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
      },

      transitionTimingFunction: {
        'premium':    'cubic-bezier(0.16, 1, 0.3, 1)',    // fast start, smooth end
        'spring':     'cubic-bezier(0.34, 1.56, 0.64, 1)', // slight overshoot
      },

      // ── Max Width ──────────────────────────────────────────────────────
      maxWidth: {
        'content': '1100px',  // primary content width
        'wide':    '1280px',  // max layout width
      },
    },
  },
  plugins: [],
}
