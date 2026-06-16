# Sugumaran S — Portfolio (Template-Matched Build)

A Next.js 14 + Tailwind CSS portfolio built to match a supplied reference design: split nav, hero with floating avatar card, About with quick-facts panel, skill cards with proficiency bars, project cards with preview tiles, and a contact form — with a working light/dark mode toggle (dark by default, matching the reference).

## Tech stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (selector-based dark mode, `.light` class override)
- Zero external dependencies, no environment variables or API keys

## Project structure

```
.
├── app/
│   ├── globals.css       # Theme tokens, light/dark base styles
│   ├── layout.tsx         # Fonts, theme-flash prevention script
│   └── page.tsx
├── components/
│   ├── Nav.tsx
│   ├── ThemeToggle.tsx    # Light/dark switch (persisted to localStorage)
│   ├── Hero.tsx
│   ├── AvatarCard.tsx     # Floating photo-card substitute with badges
│   ├── SocialIcons.tsx
│   ├── About.tsx          # Bio + quick-facts info card
│   ├── Skills.tsx         # 4-card grid with proficiency bars
│   ├── Projects.tsx       # 3-card grid with preview tiles + tags
│   └── Contact.tsx        # Info list + message form
├── tailwind.config.ts
└── package.json
```

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Toggle the sun/moon icon in the nav to switch themes — the preference is saved in the browser and restored on reload.

```bash
npm run build
npm start
```

## Notes

- The reference design used a placeholder photo ("Vansh Verma"); since no headshot was provided, the photo card was replaced with an initials-based avatar card carrying the same floating-badge layout (years badge, code-icon badge).
- All copy is original and reflects Sugumaran's actual resume/LinkedIn content — nothing was copied from the reference image's sample text.
- The contact form submits via `mailto:` (no backend) since no form-handling service was specified — replace the `<form>` action with a real endpoint if you want submissions to land somewhere other than the visitor's email client.
