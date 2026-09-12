# FCAI E-Club — Project Tasks

Master task list covering the full project lifecycle.

## Architecture

```
Next.js 16 (App Router + Server Actions)
    ↓
Supabase (Auth + PostgreSQL + Storage)
    ↓
Vercel (Deployment)
```

No separate backend server. All logic runs inside Next.js Server Components, Server Actions, and API Route Handlers. Supabase handles auth, database, and file storage.

---

## Phase 1: Discovery, Architecture & Design System Setup

### Supabase Setup

- [x] Create Supabase project
- [x] Enable Email/Password auth provider
- [x] Create storage buckets (avatars, cv-uploads, event-images)
- [x] Set storage bucket policies (public read, authenticated write)
- [x] Generate and save `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [x] Set up Row Level Security (RLS) policies for all tables

### Database Schema

- [x] Create `profiles` table (id, full_name, email, role, committee, bio, avatar_url, social_links, created_at)
- [x] Create `events` table (id, title, slug, description, date, time, location, capacity, status, track, instructor_name, instructor_title, instructor_avatar, created_at)
- [x] Create `registrations` table (id, member_id, event_id, full_name, email, academic_year, department, screening_answers jsonb, cv_file_path, status, created_at)
- [x] Create `contributions` table (id, member_id, title, description, date, category)
- [x] Create `partners` table (id, name, logo_url, website_url, sort_order)
- [x] Create `testimonials` table (id, quote, author_name, author_role, author_avatar)
- [x] Create `metrics` table (id, label, value, sort_order)
- [x] Create `timeline_events` table (id, title, description, date_label, sort_order)
- [x] Seed data for committees, timeline, metrics, and partners
- [x] Verify RLS policies enforce correct access per role

### Design System

- [x] Audit design mockups in `design/` folder and extract all reusable patterns
- [x] Define color tokens (background, surface, border, cyan accent, text hierarchy)
- [x] Define typography scale (headings, body, labels, monospace)
- [x] Create `ds-*` utility classes in `app/globals.css`
- [x] Document all design system classes in `design/DESIGN-SYSTEM.md`

### Repository & Tooling

- [x] Initialize Next.js repository with TypeScript
- [x] Configure pnpm as package manager
- [x] Set up `@supabase/ssr` package for Server Component auth
- [x] Create `.env.local` and `.env.example` with Supabase keys
- [x] Set up ESLint and Prettier rules
- [x] Configure Git branching strategy (main, dev, feature/*)
- [x] Set up GitHub Actions CI/CD staging pipeline
- [x] Set up Tailwind CSS v4 with custom theme

---

## Phase 2: Core Frontend & Public Portal

### Global Components

- [x] Build responsive Navigation Bar
  - [x] Logo (left-aligned)
  - [x] Nav links: About, Partnerships, Team, Events
  - [x] CTA button: "Join the team"
  - [x] Mobile hamburger menu
- [x] Build Footer
  - [x] Column 1: Logo + "Engineering the Future" slogan
  - [x] Column 2: Quick links (Privacy, Terms, Contact, FAQ)
  - [x] Column 3: Social links (LinkedIn, GitHub, Instagram, Discord)
  - [x] Bottom bar: Copyright notice

### Landing Page (`/`)

- [x] Hero section with "Where tech meets innovation" tagline in Ethnocentric font
- [x] Primary CTAs: "Join the team", "Explore Events"
- [x] Impact statistics grid (4 cards):
  - [x] 500+ Active Members
  - [x] 50+ Events Hosted
  - [x] 20+ Industry Partners
  - [x] 15+ Shipped Projects
- [x] About Us snippet with "Read full story" link
- [x] Upcoming Signals section (scrollable event list)
- [x] Testimonials section with alumni feedback cards
- [x] "Backed by Industry Leaders" partner logos row

### About Page (`/about`)

- [x] Hero section: "Engineering the Future"
- [x] Mission section with text + image
- [x] Vision section with text + visualization
- [x] Operation Log timeline (interactive vertical timeline)
  - [x] Q1 2021 — System Initialization
  - [x] Q2 2022 — Bootcamp Alpha
  - [x] Q3 2023 — System Initialization
  - [x] Q4 2024 — Bootcamp Alpha
  - [x] Present — Ecosystem Expansion

### Team Page (`/team`)

- [x] Hero section: "Meet the Visionaries"
- [x] Committees section (3 cards):
  - [x] Technical — member count, description
  - [x] Marketing — member count, description
  - [x] Logistics — member count, description
- [x] All Members section with filterable tabs (All, Technical, Marketing, Logistics)
- [x] Member cards: profile photo, name, title, committee
- [x] "Load More" pagination

### Partnerships Page (`/partnerships`)

- [x] Hero section: "Our Success Partners"
- [x] Partner logos grid
- [x] "Join Our Network" section with benefits list
- [x] Contact/partnership proposal form:
  - [x] Company Name input
  - [x] Contact Email input
  - [x] Partnership Interest dropdown (Sponsorship, Mentorship, Recruitment)
  - [x] Submit Proposal button

---

## Phase 3: Events Catalog & Registration Engine

### Events Catalog (`/events`)

- [x] Hero section: "Workshops & Bootcamps"
- [x] Filter tabs: All Tracks, Technical, Soft Skills, Business
- [x] Upcoming Signals section with featured event cards
- [x] Event cards with:
  - [x] Status badge (Open / Closed)
  - [x] Date (MMM DD, YYYY)
  - [x] Title
  - [x] Description
  - [x] Track tag (Technical, Business, Soft Skills)
  - [x] "Read More" CTA

### Event Detail Page (`/events/[slug]`)

- [x] Hero with event title, description, and "Upcoming Workshop" tag
- [x] About section with detailed description
- [x] Instructor profile card (photo, name, title)
- [x] Curriculum timeline (vertical list with times and topics)
- [x] Sidebar details:
  - [x] Date
  - [x] Time
  - [x] Location (with virtual link note)
  - [x] Capacity remaining (spots left)

### Registration & Application Pipeline

- [ ] Multi-step registration form (Server Actions for submission)
  - [ ] Step 1: Basic Info (Full Name, University Email, Academic Year, Department)
  - [ ] Step 2: Screening Questions (dynamic short-answer fields per event)
  - [ ] Step 3: CV/Resume upload (client-side to Supabase Storage bucket)
- [ ] Client-side form validation (zod or native)
- [ ] Server Action: insert registration row into `registrations` table
- [ ] Server Action: upload CV to Supabase Storage, store file path in row
- [ ] Registration confirmation page / toast

---

## Phase 4: Authentication & Member Dashboards

### Authentication (Supabase Auth)

- [ ] Configure Supabase Auth with email/password provider
- [ ] Create `@supabase/ssr` middleware for session refresh on every request
- [ ] Create login page with Supabase `signInWithPassword`
- [ ] Create signup page with Supabase `signUp`
- [ ] Protect routes with middleware (redirect unauthenticated users)
- [ ] Create logout Server Action (`signOut`)
- [ ] Sync new auth users to `profiles` table via database trigger

### Member Dashboard

- [ ] Personalized "Upcoming Missions" view
- [ ] Registered events list
- [ ] Uploaded resume management
- [ ] Project contributions log
- [ ] Profile editing (name, bio, avatar, social links)

---

## Phase 5: Admin Panel & Content Management

### Admin Dashboard

- [ ] Secure admin-only routes with role-based access
- [ ] Admin layout with sidebar navigation

### CRUD Operations (via Supabase client)

- [ ] Events management (Server Actions: insert, update, delete in `events` table)
- [ ] Member management (Server Actions: update role, soft-delete in `profiles` table)
- [ ] Registration review (Server Actions: update status, query Supabase Storage for CVs)
- [ ] Contribution tracking (Server Actions: approve/edit in `contributions` table)

### Content Management

- [ ] Update site metrics and KPI percentages on About page
- [ ] Manage partner logos and details
- [ ] Manage testimonials

---

## Phase 6: QA, Security & Deployment

### Testing

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness audit (all breakpoints)
- [ ] End-to-end testing of registration pipeline
- [ ] End-to-end testing of CV upload flow
- [ ] Performance audit (Lighthouse scores)

### Security

- [ ] File upload constraints (size limits, MIME type validation)
- [ ] API endpoint authorization checks
- [ ] Input sanitization and XSS prevention
- [ ] CSRF protection
- [ ] Rate limiting on forms

### Deployment

- [ ] Deploy Next.js frontend to Vercel
- [ ] Set production Supabase environment variables in Vercel
- [ ] Verify Supabase Storage buckets in production
- [ ] Verify RLS policies in production
- [ ] Configure custom domain and SSL

---

## Phase 7: Handover & Documentation

### Training

- [ ] Admin walkthrough session for club board members
- [ ] Content management training (events, members, metrics)
- [ ] Registration review and CV screening training

### Documentation

- [ ] Supabase schema and RLS policy reference
- [ ] Server Actions reference (what each action does, inputs, outputs)
- [ ] Repository guide and contribution guidelines
- [ ] Maintenance playbook
- [ ] Environment setup guide for new developers

---

## Ongoing

- [ ] Monitor analytics and user engagement
- [ ] Collect feedback from club members and partners
- [ ] Plan feature iterations based on usage data
- [ ] Maintain dependencies and security patches
