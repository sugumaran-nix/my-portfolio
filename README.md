# Sugumaran — AI/ML & Full-Stack Engineer

A monochrome, glassmorphism-inspired portfolio for Sugumaran S., focused on applied AI/ML, browser inference, real-time systems, and dependable full-stack engineering.

## Stack

The portfolio uses **Next.js 16 App Router**, **React 19**, **TypeScript**, **Tailwind CSS 4**, self-hosted **Geist** fonts, **Lenis** for opt-in inertial scrolling, and a lightweight CSS motion layer with a Motion-ready dependency for future choreographed interactions. The page is statically exported for CDN-friendly delivery, while interactive behavior remains isolated to small client components.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the development site.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

The build generates a static `out/` directory suitable for Vercel or another static host. Lenis is disabled when `prefers-reduced-motion: reduce` is active and is otherwise loaded after idle or on the first user scroll so it does not delay initial rendering. EmailJS is loaded only when the contact form is submitted.
