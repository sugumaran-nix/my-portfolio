# Sugumaran S — Portfolio (Astro + Tailwind + Framer Motion)

## Setup
npm install
npm run dev

## Notes on edits applied (per your annotations)
- Removed: "FULL-STACK DEVELOPER" badge above hero (red mark) — not present in this rebuild.
- Removed: the legacy "Projects" table section (`#work`) entirely — it duplicated the cards above it (red X).
- Replaced: empty 5th skill card placeholder with the new 5-category skills table you provided (yellow "Replace").
- Expanded: About section copy into a full 3-paragraph bio using your real background (yellow "big About Me").
- Added: social icons (GitHub, LinkedIn) next to the Contact section links (yellow "Add social icons").
- Fixed: About image placeholder now points to `/public/profile.jpg` — drop your photo there (orange gap-fill).

## File structure
- src/layouts/Layout.astro — shared <head>, fonts, Tailwind import
- src/components/Navbar.astro — static nav (zero JS)
- src/components/Footer.astro — static footer (zero JS)
- src/components/ProjectCard.jsx — animated project card (Framer Motion, client:visible)
- src/components/SkillCard.jsx — animated skill category card (client:visible)
- src/components/RevealOnScroll.jsx — generic scroll-reveal wrapper (client:visible)
- src/components/ContactForm.jsx — interactive form with submit state (client:visible)
- src/pages/index.astro — assembles everything, all content/data lives here
- tailwind.config.mjs, astro.config.mjs, package.json

## Where to add your photo
Place a file at public/profile.jpg (replaces the about-img placeholder).

## Hydration strategy
Everything text/static stays in .astro (zero JS shipped).
Anything animated (cards, reveals, form) is .jsx, hydrated with client:visible
so JS for a section only loads once the user scrolls near it.
