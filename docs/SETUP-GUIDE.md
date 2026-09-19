# Environment Setup Guide

This guide walks new developers through setting up the FCAI E-Club development environment.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **pnpm** 8.x or higher ([Installation Guide](https://pnpm.io/installation))
- **Git** ([Download](https://git-scm.com/downloads))
- **VS Code** (recommended) with these extensions:
  - ESLint
  - Prettier
  - TypeScript and JavaScript Language Features

---

## Step 1: Clone the Repository

```bash
git clone <repository-url>
cd fcai-eclub
```

---

## Step 2: Install Dependencies

```bash
pnpm install
```

This will install all project dependencies including:
- Next.js 16
- React 19
- Supabase client libraries
- Tailwind CSS 4
- Zod (validation)
- Playwright (E2E testing)

---

## Step 3: Set Up Supabase

### 3.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Choose a name (e.g., `fcai-eclub-dev`)
5. Set a strong database password
6. Choose a region close to you
7. Click "Create new project"

### 3.2 Get Your Supabase Credentials

Once your project is ready:

1. Go to **Project Settings** → **API**
2. Copy the following values:
   - `Project URL` (e.g., `https://xxxxx.supabase.co`)
   - `anon public` key (starts with `eyJhbG...`)

### 3.3 Create Environment Variables

Create a `.env.local` file in the project root:

```bash
# Copy from .env.example if it exists
cp .env.example .env.local
```

Or create it manually with these contents:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace the values with your actual Supabase credentials.

### 3.4 Run Database Migrations

In the Supabase dashboard:

1. Go to **SQL Editor**
2. Run each file from the `database/` directory in order:
   - `schema.sql` - Creates all tables
   - `rls.sql` - Sets up Row Level Security policies
   - `seed.sql` - Inserts initial data
   - `verify-rls.sql` - Verifies RLS policies (optional)

Alternatively, use the Supabase CLI:

```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Link to your project
supabase link --project-ref your-project-id

# Push migrations
supabase db push
```

### 3.5 Create Storage Buckets

In the Supabase dashboard:

1. Go to **Storage**
2. Create the following buckets:
   - `avatars` - Public read, authenticated write
   - `cv-uploads` - Private (no public read), authenticated write
   - `event-images` - Public read, authenticated write

For each bucket:
- Click "Create a new bucket"
- Enter the bucket name
- Set public bucket status:
  - `avatars`: Public ✅
  - `cv-uploads`: Public ❌
  - `event-images`: Public ✅

---

## Step 4: Run the Development Server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

---

## Step 5: Verify Setup

1. Open [http://localhost:3000](http://localhost:3000) in your browser
2. Verify the landing page loads correctly
3. Check that the navbar and footer are visible
4. Navigate to the About, Team, Events, and Partnerships pages
5. Verify no console errors in the browser

---

## Step 6: Set Up Playwright (Optional)

For E2E testing, install Playwright browsers:

```bash
npx playwright install
```

Run tests to verify:

```bash
pnpm test:e2e
```

---

## Project Structure

```
fcai-eclub/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Auth pages (login, signup)
│   ├── about/             # About page
│   ├── events/            # Events catalog and detail pages
│   ├── partnerships/      # Partnerships page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles + design system
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── actions/               # Server Actions
│   ├── auth.ts           # Auth actions (signIn, signUp, signOut)
│   ├── partners.ts       # Partner proposal submission
│   ├── profiles.ts       # Profile data loading
│   └── registration.ts   # Event registration
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── register-button.tsx
│   └── registration-form.tsx
├── database/             # Database schema and migrations
│   ├── schema.sql        # Table definitions
│   ├── rls.sql           # RLS policies
│   ├── seed.sql          # Seed data
│   └── verify-rls.sql    # RLS verification
├── docs/                 # Documentation
├── lib/                  # Utility libraries
│   └── supabase/         # Supabase client configurations
├── services/             # Data access layer
├── types/                # TypeScript type definitions
├── .env.local           # Environment variables (not committed)
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── playwright.config.ts  # E2E test configuration
└── tsconfig.json         # TypeScript configuration
```

---

## Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting

# Testing
pnpm test:e2e         # Run E2E tests
pnpm test:e2e:ui      # Run E2E tests in UI mode
pnpm test:e2e:headed  # Run E2E tests with visible browser
```

---

## Design System

The project uses a custom design system with `ds-*` utility classes. See `design/DESIGN-SYSTEM.md` for the complete reference.

Key classes:
- `ds-card` - Card component
- `ds-btn` - Primary button
- `ds-btn-outline` - Outline button
- `ds-section-title` - Section heading
- `ds-input` - Form input
- `ds-avatar` - Avatar image

---

## Common Issues

### Issue: "Module not found" errors

**Solution:**
```bash
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Issue: Supabase connection errors

**Solution:**
1. Verify your `.env.local` file exists
2. Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
3. Ensure your Supabase project is active (not paused)
4. Check that you've run the database migrations

### Issue: RLS policy errors

**Solution:**
1. Verify you've run `database/rls.sql`
2. Check that the `handle_new_user()` trigger exists
3. Run `database/verify-rls.sql` to test policies

### Issue: File upload errors

**Solution:**
1. Verify storage buckets exist in Supabase
2. Check bucket policies (public read for avatars/event-images, private for cv-uploads)
3. Ensure you're authenticated (if required)

---

## Development Workflow

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**
   - Edit files as needed
   - Follow the design system (`ds-*` classes)
   - Use Server Actions for form submissions
   - Add TypeScript types for new components

3. **Test your changes:**
   ```bash
   pnpm dev
   # Test manually in browser
   pnpm test:e2e  # Run E2E tests if applicable
   ```

4. **Lint and format:**
   ```bash
   pnpm lint:fix
   pnpm format
   ```

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin feature/your-feature-name
   ```

---

## Getting Help

- **Documentation**: Check the `docs/` folder
- **Database Reference**: `docs/SUPABASE-REFERENCE.md`
- **Server Actions Reference**: `docs/SERVER-ACTIONS-REFERENCE.md`
- **Design System**: `design/DESIGN-SYSTEM.md`
- **Tasks**: `TASKS.md` for project roadmap

---

## Next Steps

After setting up:

1. Read `docs/SUPABASE-REFERENCE.md` to understand the database structure
2. Read `docs/SERVER-ACTIONS-REFERENCE.md` to learn about Server Actions
3. Review `design/DESIGN-SYSTEM.md` to understand the design system
4. Check `TASKS.md` to see the project roadmap and current phase

Happy coding! 🚀
