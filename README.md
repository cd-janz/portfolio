# Juan Camilo Zúñiga — Portfolio

[![CI](https://github.com/cd-janz/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/cd-janz/portfolio/actions/workflows/ci.yml)

Astro 7 + SolidJS islands, plain CSS tokens, bilingual (en/es), deployed on Vercel.

## Architecture (one responsibility per module)

```
src/
  config/      site constants only
  i18n/        locales, path helpers, UI copy (typed dictionaries)
  domain/      pure TS: dates, timeline sorting (no framework)
  schemas/     one zod schema per content type
  content/     data: <collection>/<locale>/<entry> (json / md)
  data/        read-only queries over collections
  server/      contact use case: schema, escape, template, mailer port + Resend adapter, rate limiter
  actions/     composition root that wires the server pieces into an Astro Action
  features/    one folder per section (hero, about, experience, ide, projects, contact, resume, header, footer, seo, background)
  ui/          primitives (Button, Tag, Section, Icon) + svg registries
  assets/svg/  icons, brand (logo, wordmark) and decorations, ported from the own_base project
  layouts/     Head, BaseLayout (landing), DocumentLayout (resume, 404)
  views/       page-level composition, shared by every locale
  pages/       thin routes: `<View locale="…" />`
  styles/      tokens.css (only place with raw values) + base.css
```

The IDE (`features/ide`) is split into `model/` (pure: content -> virtual repo, json/markdown tokenizers, git log),
`state/` (tabs, tree) and `components/` (presentational). Windows/VS Code styling, off-canvas explorer on mobile.

Rules: pages never read collections directly; UI copy never lives in components; the server
use case depends on interfaces (`Mailer`, `RateLimiter`), not on Resend.

## Content

Edit `src/content/**`. Projects with `placeholder: true` show a "Sample" badge and are left out
of the resume. Flip it to `false` once the content is real.

## Setup

```
cp .env.example .env   # RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
bun install
bun run dev
bun run verify         # typecheck + tests + build
```
