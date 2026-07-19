# Portfolio v2 — Rakib Sikder

A fresh portfolio design — warm editorial light theme (with a dark mode), distinct from the
older template-based portfolio. Showcases seven recent builds spanning full-stack web,
AI/LLM integration, motion design, and browser automation, each linking to a live demo and
its GitHub repo.

## Sections

- **Hero** — positioning across the four areas this portfolio covers.
- **Selected work** (`lib/projects.ts`) — the seven projects, each with a one-line pitch,
  tech tags, live demo link, and source link.
- **Skills** — grouped by the same four areas (full-stack, AI/LLM, motion, automation).
- **About** — a short, specific bio instead of generic buzzwords.
- **Contact** — real links (email, GitHub, LinkedIn, X).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion (restrained —
fade/slide reveals only, since the animation-heavy showcase is its own separate project)

## Getting started

```bash
npm install
npm run dev
```

No environment variables needed — this is a static site.

## Updating project links

Everything shown in the "Selected work" section comes from `lib/projects.ts` — add, edit,
or reorder entries there; no other file needs to change.
