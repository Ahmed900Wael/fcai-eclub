# FCAI E-Club — Project Tasks

Master task list covering the full project lifecycle from documentation v1.1.

---

## Phase 1: Discovery, Architecture & Design System Setup

### Database & Schema
- [ ] Finalize PostgreSQL schema for all entities (users, members, events, registrations, contributions)
- [ ] Define member profile fields (name, email, role, committee, bio, avatar, social links)
- [ ] Define event fields (title, description, date, time, location, capacity, status, track, instructor)
- [ ] Define registration fields (member ref, event ref, screening answers, CV file path, status)
- [ ] Define contribution fields (member ref, title, description, date, category)
- [ ] Set up Supabase project and link to PostgreSQL database
- [ ] Create database migrations and seed data

### Design System
- [ ] Audit design mockups in `design/` folder and extract all reusable patterns
- [ ] Define color tokens (background, surface, border, cyan accent, text hierarchy)
- [ ] Define typography scale (headings, body, labels, monospace)
- [ ] Import Ethnocentric font for hero titles
- [ ] Create `ds-*` utility classes in `app/globals.css`
- [ ] Document all design system classes in `design/DESIGN-SYSTEM.md`

### Repository & Tooling
- [ ] Initialize Next.js repository with TypeScript
- [ ] Configure pnpm as package manager
- [ ] Set up ESLint and Prettier rules
- [ ] Configure Git branching strategy (main, dev, feature/*)
- [ ] Set up GitHub Actions CI/CD staging pipeline
- [ ] Configure environment variables (.env.local, .env.example)
- [ ] Set up Tailwind CSS v4 with custom theme

---

## Phase 2: Core Frontend & Public Portal

### Global Components
- [ ] Build responsive Navigation Bar
  - [ ] Logo (left-aligned)
  - [ ] Nav links: About, Partnerships, Team, Events
  - [ ] CTA button: "Join the team"
  - [ ] Mobile hamburger menu
- [ ] Build Footer
  - [ ] Column 1: Logo + "Engineering the Future" slogan
  - [ ] Column 2: Quick links (Privacy, Terms, Contact, FAQ)
  - [ ] Column 3: Social links (LinkedIn, GitHub, Instagram, Discord)
  - [ ] Bottom bar: Copyright notice

### Landing Page (`/`)
- [ ] Hero section with "Where tech meets innovation" tagline in Ethnocentric font
- [ ] Primary CTAs: "Join the team", "Explore Events"
- [ ] Impact statistics grid (4 cards):
  - [ ] 500+ Active Members
  - [ ] 50+ Events Hosted
  - [ ] 20+ Industry Partners
  - [ ] 15+ Shipped Projects
- [ ] About Us snippet with "Read full story" link
- [ ] Upcoming Signals section (scrollable event list)
- [ ] Testimonials section with alumni feedback cards
- [ ] "Backed by Industry Leaders" partner logos row

### About Page (`/about`)
- [ ] Hero section: "Engineering the Future"
- [ ] Mission section with text + image
- [ ] Vision section with text + visualization
- [ ] Operation Log timeline (interactive vertical timeline)
  - [ ] Q1 2021 — System Initialization
  - [ ] Q2 2022 — Bootcamp Alpha
  - [ ] Q3 2023 — System Initialization
  - [ ] Q4 2024 — Bootcamp Alpha
  - [ ] Present — Ecosystem Expansion

### Team Page (`/team`)
- [ ] Hero section: "Meet the Visionaries"
- [ ] Committees section (3 cards):
  - [ ] Technical — member count, description
  - [ ] Marketing — member count, description
  - [ ] Logistics — member count, description
- [ ] All Members section with filterable tabs (All, Technical, Marketing, Logistics)
- [ ] Member cards: profile photo, name, title, committee
- [ ] "Load More" pagination

### Partnerships Page (`/partnerships`)
- [ ] Hero section: "Our Success Partners"
- [ ] Partner logos grid
- [ ] "Join Our Network" section with benefits list
- [ ] Contact/partnership proposal form:
  - [ ] Company Name input
  - [ ] Contact Email input
  - [ ] Partnership Interest dropdown (Sponsorship, Mentorship, Recruitment)
  - [ ] Submit Proposal button

---

## Phase 3: Events Catalog & Registration Engine

### Events Catalog (`/events`)
- [ ] Hero section: "Workshops & Bootcamps"
- [ ] Filter tabs: All Tracks, Technical, Soft Skills, Business
- [ ] Upcoming Signals section with featured event cards
- [ ] Event cards with:
  - [ ] Status badge (Open / Closed)
  - [ ] Date (MMM DD, YYYY)
  - [ ] Title
  - [ ] Description
  - [ ] Track tag (Technical, Business, Soft Skills)
  - [ ] "Read More" CTA

### Event Detail Page (`/events/[slug]`)
- [ ] Hero with event title, description, and "Upcoming Workshop" tag
- [ ] About section with detailed description
- [ ] Instructor profile card (photo, name, title)
- [ ] Curriculum timeline (vertical list with times and topics)
- [ ] Sidebar details:
  - [ ] Date
  - [ ] Time
  - [ ] Location (with virtual link note)
  - [ ] Capacity remaining (spots left)

### Registration & Application Pipeline
- [ ] Multi-step registration form
  - [ ] Step 1: Basic Info (Full Name, University Email, Academic Year, Department)
  - [ ] Step 2: Screening Questions (dynamic short-answer fields per event)
  - [ ] Step 3: CV/Resume upload (PDF or DOCX, size limit validation)
- [ ] Form validation and error handling
- [ ] File upload to cloud storage
- [ ] Registration confirmation flow

---

## Phase 4: Authentication & Member Dashboards

### Authentication
- [ ] Set up NextAuth with credential provider
- [ ] University email verification flow
- [ ] Session management and middleware protection
- [ ] Login / Logout pages

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

### CRUD Operations
- [ ] Events management (create, edit, delete workshops/bootcamps)
- [ ] Member management (view, edit roles, deactivate)
- [ ] Registration review (view applications, download CVs, update status)
- [ ] Contribution tracking (approve/edit member contributions)

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
- [ ] Deploy Node.js/Express backend
- [ ] Provision production PostgreSQL database
- [ ] Set up production Supabase storage bucket
- [ ] Configure production environment variables
- [ ] DNS and SSL setup

---

## Phase 7: Handover & Documentation

### Training
- [ ] Admin walkthrough session for club board members
- [ ] Content management training (events, members, metrics)
- [ ] Registration review and CV screening training

### Documentation
- [ ] API documentation
- [ ] Repository guide and contribution guidelines
- [ ] Maintenance playbook
- [ ] Environment setup guide for new developers

---

## Ongoing

- [ ] Monitor analytics and user engagement
- [ ] Collect feedback from club members and partners
- [ ] Plan feature iterations based on usage data
- [ ] Maintain dependencies and security patches
