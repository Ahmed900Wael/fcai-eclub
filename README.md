# FCAI E-Club Platform

> Engineering the Future. Building the next generation of innovators and technical entrepreneurs.

FCAI E-Club is a non-profit student-led organization bridging the gap between academic theory and industry reality for engineers and entrepreneurs at FCAI-CU. This repository contains the source code for the club's centralized web platform.

## Overview

The platform serves as the central nervous system for the E-Club, providing:

- **Brand Authority** — A professional digital identity showcasing vision, mission, and impact.
- **Operational Hub** — Centralized club history, KPI tracking, and member management.
- **Engagement Engine** — Dynamic portal for events, workshops, and bootcamps with registration.
- **Partnership Gateway** — Dedicated section to attract and formalize industry relationships.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | [Next.js](https://nextjs.org) 16 (React 19) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 + shadcn/ui |
| Language | [TypeScript](https://www.typescriptlang.org) 5 |
| Package Manager | [pnpm](https://pnpm.io) |
| Icons | [Lucide React](https://lucide.dev) |
| Utilities | clsx, tailwind-merge, class-variance-authority |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+
- [pnpm](https://pnpm.io) 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/fcai-eclub.git
cd fcai-eclub

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
fcai-eclub/
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles + design system classes
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   └── page.tsx            # Landing page
├── components/             # Reusable UI components
├── design/                 # Design files and system documentation
│   ├── *.png               # Page mockups (Landing, About, Team, etc.)
│   └── DESIGN-SYSTEM.md    # Design system class reference
├── docs/                   # Project documentation (v1.1)
└── public/                 # Static assets (images, fonts)
```

## Design System

The project includes a custom design system of reusable CSS classes prefixed with `ds-`. All classes are defined in `app/globals.css`.

```html
<!-- Section header -->
<h2 class="ds-section-label">About Us</h2>
<h2 class="ds-section-title">Engineering The <span>Future</span></h2>

<!-- Cards -->
<div class="ds-card">Default card</div>
<div class="ds-card-elevated">Elevated card</div>
<div class="ds-card-accent">Accent card</div>

<!-- Buttons -->
<button class="ds-btn">Join the team</button>
<button class="ds-btn-outline">Explore Events</button>

<!-- Stats -->
<div class="ds-stat-card">
  <div class="ds-stat-number">500+</div>
  <div class="ds-stat-label">Active Members</div>
</div>
```

Full reference: [`design/DESIGN-SYSTEM.md`](design/DESIGN-SYSTEM.md)

## Pages

| Page | Description |
|---|---|
| Landing (`/`) | Hero, impact stats, upcoming events, testimonials, partners |
| About (`/about`) | Mission, vision, operation log timeline |
| Team (`/team`) | Committees, filterable member directory |
| Partnerships (`/partnerships`) | Partner logos, proposal submission form |
| Events (`/events`) | Workshop & bootcamp catalog with filters |
| Event Detail (`/events/[slug]`) | Workshop details, curriculum timeline, registration |

## Roadmap

| Phase | Description | Timeline |
|---|---|---|
| 1 | Discovery, Architecture & Design System | Weeks 1–2 |
| 2 | Core Frontend & Public Portal | Weeks 3–6 |
| 3 | Events Catalog & Registration Engine | Weeks 7–10 |
| 4 | Authentication & Member Dashboards | Weeks 11–12 |
| 5 | Admin Panel & Content Management | Weeks 13–14 |
| 6 | QA, Security Audits & Deployment | Week 15 |
| 7 | Stakeholder Handover & Documentation | Week 16 |

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## License

This project is for FCAI E-Club internal use. All rights reserved.

---

&copy; 2026 FCAI E-Club. Where Tech Meets Innovation.
