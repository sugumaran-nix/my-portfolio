# Sugumaran S — Portfolio v2 (Astro + Tailwind + Framer Motion, Light/Dark Theme)

This rebuild matches the layout, spacing, and section order of the reference
screenshots you provided (UI.zip), in monochrome black/white, with a working
light/dark toggle — and your real content swapped in throughout.

## Setup
```
npm install
npm run dev
```

**Want to change content (projects, skills, bio, contact info, links)?**
See `EDITING_GUIDE.md` — it maps every editable piece of content to the exact
file and section to change, without needing to understand the rest of the code.

## What changed vs. the reference UI
- **Experience section removed entirely** — both the section and the nav link.
  Sections are: Home → About → Skills → Projects → Contact.
- **Theme toggle** — sun/moon icon button in the navbar (top right, same spot as
  reference). Defaults to the visitor's OS preference on first visit, then
  remembers their choice in localStorage. No flash-of-wrong-theme on reload
  (handled by an inline blocking script in `Layout.astro`).
- **Content** replaced throughout with your real details: name, location,
  contact info, social links (GitHub: an0nl, LinkedIn: sugumaran0333), and your
  actual projects (AI Fake News Detection Platform / VeritAI, AI Study Planner
  with Claude API integration, ML-Powered Fake Job Detector, and your original
  BCA web scraping tool).
- **Proficiency percentages** are placeholders reflecting a realistic fresher
  skill level — edit the `proficiency` array in `src/pages/index.astro` to
  match how you'd actually rate yourself in an interview. Inflated numbers
  here are one of the first things a technical interviewer will probe.
- **Project images** are temporary stock placeholders (Unsplash). Swap the
  `image` field in the `projects` array for real screenshots of your apps —
  recruiters click through, and stock photos read poorly once they do.

## File structure
- `src/layouts/Layout.astro` — head, fonts, anti-flash theme script, IntersectionObserver for `.reveal`
- `src/components/Navbar.astro` — sticky nav, no Experience link
- `src/components/Footer.astro` — footer with social icons
- `src/components/ThemeToggle.jsx` — sun/moon toggle, persists to localStorage (client:load)
- `src/components/ProficiencyBar.jsx` — animated skill bar (client:visible)
- `src/components/ProjectCard.jsx` — project card with hover lift (client:visible)
- `src/components/ContactForm.jsx` — interactive form with submit states (client:visible)
- `src/pages/index.astro` — all content lives here as plain JS arrays at the top

## Animation approach
Two different mechanisms are used deliberately, not interchangeably:
- **Static text/layout blocks** (headings, paragraphs, the about card) use a plain
  `.reveal` CSS class + a small IntersectionObserver script in `Layout.astro`.
  This is zero-JS-framework — Astro can't pass multi-element children into a
  hydrated React component as real React nodes (only as a single opaque HTML
  blob), so wrapping static content in a React fade-in component would add
  JS weight for no real benefit.
- **Genuinely interactive elements** (proficiency bars that animate width,
  project cards with hover lift, the contact form's submit state) are real
  `.jsx` components hydrated with `client:visible`, using Framer Motion.

## Theming approach
Tailwind's `darkMode: 'class'` toggles a `.dark` class on `<html>`. Every themed
element uses paired utilities like `bg-surface dark:bg-surfaceDark`. Colors are
defined as named tokens in `tailwind.config.mjs` so the whole palette can be
adjusted in one place.

## Where to add your photo
Drop a real headshot at `public/profile.jpg` and reference it in the About
section's card if you'd rather show a photo than the code icon shown now.

## Where to add your resume/CV
The Contact section's "Download CV" button points to `public/sugumaran-s-resume.pdf`,
which doesn't exist yet — add your resume PDF there with that exact filename
(or update the button's `href` if you use a different name). See
`EDITING_GUIDE.md` §6 for details.
