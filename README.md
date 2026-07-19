# Portfolio v2 — Rakib Sikder

A dark, motion-forward portfolio inspired by the split-sidebar layout popularized by
developer portfolios like Brittany Chiang's — a fixed intro/nav column paired with a
scrolling numbered-section content column, plus a custom cursor, magnetic buttons, a
scrolling skills ticker, and staggered/blur text reveals.

## Sections

- **Sidebar** (`components/Sidebar.tsx`) — name, role, numbered nav (01/02/03), social
  links. Fixed on desktop, collapses to a simple top block on mobile.
- **Intro statement** (`components/IntroStatement.tsx`) — large staggered/blur word-reveal
  headline plus two magnetic CTA buttons.
- **Marquee** (`components/Marquee.tsx`) — looping skills ticker, pure CSS animation.
- **01 About** (`components/AboutSection.tsx`) — bio + skill tags.
- **02 Selected Work** (`components/WorkList.tsx`, data in `lib/projects.ts`) — the seven
  projects, each with tech tags, live demo link, and source link.
- **03 Contact** (`components/ContactSection.tsx`) — large email CTA + social links.

## Interaction details

- **`components/CustomCursor.tsx`** — a dot + lagging ring (spring-driven) replaces the
  native cursor on fine-pointer devices only (`pointer: fine` media query — touch devices
  get the normal cursor, nothing is hidden for them). The ring grows on hover over any
  `a`, `button`, or `[data-cursor-hover]` element.
- **`components/MagneticButton.tsx`** — wraps a button/link and nudges it toward the
  cursor within its bounds using spring-animated motion values, snapping back on mouse leave.
- A subtle SVG-noise texture sits over the whole page (`globals.css`, `body::before`) for depth.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

## Getting started

```bash
npm install
npm run dev
```

No environment variables needed — this is a static site.

## Updating project links

Everything shown in "Selected Work" comes from `lib/projects.ts` — add, edit, or reorder
entries there; no other file needs to change.
