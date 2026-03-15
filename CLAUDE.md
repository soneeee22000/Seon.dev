# Project: Seon's Portfolio

## Quick Reference

- **Stack:** Next.js 16 + React 19 + TypeScript (strict) + Tailwind CSS 4
- **Node version:** Node 20+
- **Package manager:** npm
- **PRD:** See `docs/PRD.md` — this is the source of truth for all features

## Commands

```bash
npm run dev        # Start dev server (port 3000)
npm run build      # Production build
npm run lint       # ESLint + type check
npm run typecheck  # TypeScript only
npm start          # Serve production build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home page composing all sections
│   └── globals.css         # Tailwind + custom animations
├── components/
│   ├── navbar.tsx           # Responsive nav with mobile drawer + active section indicator
│   ├── hero.tsx             # Neural flow graph canvas + glitch text
│   ├── about.tsx            # About section
│   ├── experience.tsx       # Experience timeline
│   ├── projects.tsx         # Project cards with 3D tilt
│   ├── skills.tsx           # SVG orbital + skill list
│   ├── education.tsx        # Education cards + journey
│   ├── certifications.tsx   # Certification cards
│   ├── contact.tsx          # Contact + clipboard
│   └── footer.tsx           # Footer
├── lib/
│   ├── data.ts              # All portfolio data (typed)
│   └── hooks.ts             # Custom hooks (useScrollReveal, useActiveSection)
├── types/
│   └── portfolio.ts         # TypeScript interfaces
└── __tests__/               # Test files
```

## Design System

All colors defined as Tailwind theme tokens in `globals.css`:

- `bg`, `bg2`, `surface`, `border` — backgrounds
- `text`, `muted`, `body`, `body-dim` — text
- `accent`, `accent-light` — gold accent (#C9A96E)
- `blue`, `purple`, `green`, `warm`, `red` — category colors

Fonts: `font-playfair`, `font-dm-mono`, `font-dm-sans`

## Key Patterns

- Static site (SSG) — no API routes, no database
- All data in `src/lib/data.ts` — single source of truth
- CSS animations defined in `globals.css` (keyframes)
- Scroll reveal via IntersectionObserver (`useScrollReveal` hook)
- Active section tracking via IntersectionObserver (`useActiveSection` hook)
- Neural flow graph (DAG) on hero canvas with bezier edges and animated data pulses
- Mobile responsive navbar with hamburger menu, slide-in drawer, and body scroll lock
- 3D card tilt via inline mouse event handlers
- Image optimization via `next/image` with lazy loading
- Accessibility: focus-visible outlines, semantic buttons, ARIA labels
- External logos from vectorlogo.zone CDN with onError fallback
