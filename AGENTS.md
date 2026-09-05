<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# FCAI E-Club — Project Context

## Overview

FCAI E-Club is a non-profit student-led organization platform bridging academic theory and industry reality. This is the centralized web application for the club.

**Architecture:**

```
Next.js 16 (App Router + Server Actions)
    ↓
Supabase (Auth + PostgreSQL + Storage)
    ↓
Vercel (Deployment)
```

No separate backend server. All logic runs inside Next.js Server Components, Server Actions, and API Route Handlers.

## Tech Stack

| Layer           | Technology                                     |
| --------------- | ---------------------------------------------- |
| Framework       | Next.js 16.3.4 (App Router)                    |
| React           | 19.2.8                                         |
| Styling         | Tailwind CSS 4 + shadcn/ui                     |
| Language        | TypeScript 5                                   |
| Package Manager | pnpm 10.18.2                                   |
| Database        | Supabase (PostgreSQL)                          |
| Auth            | Supabase Auth (`@supabase/ssr`)                |
| Storage         | Supabase Storage (CVs, avatars, images)        |
| Icons           | Lucide React                                   |
| Validation      | Zod                                            |
| Utilities       | clsx, tailwind-merge, class-variance-authority |

## Key Files

```
fcai-eclub/
├── app/
│   ├── globals.css          # Global styles + DS classes (ds-*)
│   ├── layout.tsx           # Root layout (Geist fonts, metadata)
│   └── page.tsx             # Landing page
├── database/
│   ├── schema.sql           # All 10 tables + auth trigger
│   ├── rls.sql              # RLS policies (41 policies, 10 tables)
│   ├── seed.sql             # Seed data (committees, events, metrics, etc.)
│   └── verify-rls.sql       # Verification queries for RLS
├── design/
│   ├── *.png                # Page mockups (7 pages)
│   └── DESIGN-SYSTEM.md     # DS class reference
├── docs/
│   └── Project Documentation-1.1.pdf  # Full project spec
├── TASKS.md                 # Master task list (all phases)
├── README.md                # Project readme
├── .env                     # Supabase keys (URL + anon key)
└── package.json
```

## Database Schema (10 tables)

| Table               | Purpose                                   |
| ------------------- | ----------------------------------------- |
| `committees`        | Technical, Marketing, Logistics           |
| `profiles`          | Member profiles (FK to auth.users)        |
| `events`            | Workshops, bootcamps, hackathons          |
| `registrations`     | Event sign-ups with screening + CV upload |
| `contributions`     | Member project contributions              |
| `partners`          | Industry partner logos                    |
| `partner_proposals` | Partnership inquiry form submissions      |
| `testimonials`      | Alumni feedback quotes                    |
| `metrics`           | Homepage stat cards (500+ members, etc.)  |
| `timeline_events`   | About page operation log                  |

**Auth trigger:** Auto-creates a `profiles` row when a user signs up via `auth.users`.

## RLS Policy Summary

- **Public read:** committees, profiles, events, contributions, partners, testimonials, metrics, timeline_events
- **Authenticated:** insert own registrations/contributions, update own profile
- **Admin only:** all writes to content tables, registration review, full profile management
- **No public read:** registrations, partner_proposals

## Design System

All reusable classes are prefixed with `ds-` in `app/globals.css`. Full reference in `design/DESIGN-SYSTEM.md`.

Key classes: `ds-card`, `ds-btn`, `ds-section-label`, `ds-section-title`, `ds-badge`, `ds-tabs`, `ds-stat-card`, `ds-timeline`, `ds-input`, `ds-avatar`, `ds-footer-*`

## Scripts

```bash
pnpm dev       # Start dev server (http://localhost:3000)
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
```

Located in `.env` (not committed to public repos).

## Current Status

**Completed:**

- Project scaffolding (Next.js 16, TypeScript, Tailwind 4, shadcn)
- Design system (ds-* classes + documentation)
- Database schema (all 10 tables)
- RLS policies (41 policies across 10 tables)
- Seed data (committees, events, metrics, partners, testimonials, timeline)
- Package installation (@supabase/ssr, @supabase/supabase-js, zod)

**Next up (Phase 2):**

- Build global components (Navbar, Footer)
- Build Landing Page
- Build About, Team, Partnerships pages

## Rules for External Agents

1. **Read `TASKS.md` first** — check what phase we're in before making changes
2. **Use the design system** — all UI must use `ds-*` classes from `globals.css`
3. **No Express/backend** — all server logic uses Next.js Server Actions + Supabase client
4. **Database changes go in `database/`** — schema, RLS, seed files
5. **Run `pnpm build` before committing** — verify no type errors
6. **Check `design/` folder** — mockups are the source of truth for UI
7. **Supabase is managed** — never expose `service_role` key to client
