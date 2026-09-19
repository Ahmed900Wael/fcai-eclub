# Supabase Schema & RLS Policy Reference

This document provides a comprehensive reference for the FCAI E-Club database schema and Row Level Security (RLS) policies.

## Database Schema Overview

The database consists of 10 tables plus 1 auth trigger and 1 helper function.

### Tables

| Table | Purpose | Public Read | Auth Write | Admin Write |
|-------|---------|-------------|------------|-------------|
| `committees` | Committee definitions (Technical, Marketing, Logistics) | ✅ | ❌ | ✅ |
| `profiles` | Member profiles linked to auth.users | ✅ | Own only | ✅ |
| `events` | Workshop and bootcamp events | ✅ | ❌ | ✅ |
| `registrations` | Event registrations with CV uploads | ❌ | Own only | ✅ |
| `contributions` | Member project contributions | ✅ | Own only | ✅ |
| `partners` | Industry partner logos and details | ✅ | ❌ | ✅ |
| `partner_proposals` | Partnership inquiry submissions | ❌ | Auth only | ✅ |
| `testimonials` | Alumni feedback quotes | ✅ | ❌ | ✅ |
| `metrics` | Homepage stat cards | ✅ | ❌ | ✅ |
| `timeline_events` | About page operation log | ✅ | ❌ | ✅ |

---

## Detailed Schema

### 1. committees

Defines the three main committees of the club.

```sql
create table committees (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,          -- 'Technical', 'Marketing', 'Logistics'
  description text,
  icon        text,                   -- lucide icon name
  created_at  timestamptz default now()
);
```

**Fields:**
- `id`: UUID primary key
- `name`: Committee name (Technical, Marketing, Logistics)
- `description`: Committee description text
- `icon`: Lucide icon name for UI display
- `created_at`: Timestamp of creation

**RLS Policies:**
- `committees_select_public`: Anyone can read
- `committees_insert_admin`: Only admins can insert
- `committees_update_admin`: Only admins can update
- `committees_delete_admin`: Only admins can delete

---

### 2. profiles

Member profiles linked to Supabase Auth users.

```sql
create table profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  full_name     text not null,
  email         text not null,
  role          text,                  -- 'Tech Lead', 'Head of PR', etc.
  committee_id  uuid references committees(id),
  bio           text,
  avatar_url    text,
  social_links  jsonb default '{}',   -- {"github":"...","linkedin":"..."}
  is_admin      boolean default false,
  created_at    timestamptz default now()
);
```

**Fields:**
- `id`: UUID primary key, references auth.users
- `full_name`: Member's full name
- `email`: Member's email
- `role`: Member role/title
- `committee_id`: Foreign key to committees table
- `bio`: Biography/description
- `avatar_url`: Supabase Storage path to avatar image
- `social_links`: JSON object with social media links
- `is_admin`: Admin flag for elevated permissions
- `created_at`: Timestamp of creation

**RLS Policies:**
- `profiles_select_public`: Anyone can read (public directory)
- `profiles_update_own`: Users can update their own profile
- `profiles_update_admin`: Admins can update any profile
- `profiles_delete_admin`: Admins can delete profiles

**Auth Trigger:**
- `handle_new_user()`: Automatically creates a profile row when a user signs up via auth.users

---

### 3. events

Workshop and bootcamp events.

```sql
create table events (
  id                 uuid primary key default gen_random_uuid(),
  title              text not null,
  slug               text unique not null,
  description        text,
  date               date,
  time               text,            -- '10:00 AM - 1:00 PM EST'
  location           text,
  capacity           int,
  status             text default 'open',  -- 'open', 'closed', 'upcoming'
  track              text,            -- 'technical', 'soft_skills', 'business'
  instructor_name    text,
  instructor_title   text,
  instructor_avatar  text,
  created_at         timestamptz default now()
);
```

**Fields:**
- `id`: UUID primary key
- `title`: Event title
- `slug`: URL-friendly unique identifier
- `description`: Event description
- `date`: Event date
- `time`: Event time range
- `location`: Event location
- `capacity`: Maximum number of attendees
- `status`: Event status (open, closed, upcoming)
- `track`: Event track (technical, soft_skills, business)
- `instructor_name`: Instructor's name
- `instructor_title`: Instructor's title
- `instructor_avatar`: Supabase Storage path to instructor photo
- `created_at`: Timestamp of creation

**RLS Policies:**
- `events_select_public`: Anyone can read
- `events_insert_admin`: Only admins can insert
- `events_update_admin`: Only admins can update
- `events_delete_admin`: Only admins can delete

---

### 4. registrations

Event registrations with screening answers and CV uploads.

```sql
create table registrations (
  id                 uuid primary key default gen_random_uuid(),
  event_id           uuid references events(id) on delete cascade,
  full_name          text not null,
  email              text not null,
  academic_year      text,
  department         text,
  screening_answers  jsonb default '{}',  -- {"experience":"...", "goal":"..."}
  cv_file_path       text,               -- Supabase Storage path
  status             text default 'pending',  -- 'pending', 'approved', 'rejected'
  created_at         timestamptz default now()
);
```

**Fields:**
- `id`: UUID primary key
- `event_id`: Foreign key to events table
- `full_name`: Registrant's full name
- `email`: Registrant's email
- `academic_year`: Academic year (1st, 2nd, 3rd, 4th, 5th, graduate)
- `department`: Department/major
- `screening_answers`: JSON object with screening question responses
- `cv_file_path`: Supabase Storage path to uploaded CV
- `status`: Registration status (pending, approved, rejected)
- `created_at`: Timestamp of creation

**RLS Policies:**
- `registrations_select_own`: Users can read their own registrations
- `registrations_select_admin`: Admins can read all registrations
- `registrations_insert_own`: Users can insert their own registration
- `registrations_update_admin`: Admins can update any registration (approve/reject)
- `registrations_delete_admin`: Admins can delete registrations

**Note:** Current implementation allows public registration (no auth required). RLS policy requires email match with authenticated user, which will need adjustment when authentication is fully implemented in Phase 4.

---

### 5. contributions

Member project contributions.

```sql
create table contributions (
  id          uuid primary key default gen_random_uuid(),
  member_id   uuid references profiles(id) on delete cascade,
  title       text not null,
  description text,
  date        date,
  category    text,                   -- 'project', 'workshop', 'hackathon'
  created_at  timestamptz default now()
);
```

**Fields:**
- `id`: UUID primary key
- `member_id`: Foreign key to profiles table
- `title`: Contribution title
- `description`: Contribution description
- `date`: Date of contribution
- `category`: Contribution category (project, workshop, hackathon)
- `created_at`: Timestamp of creation

**RLS Policies:**
- `contributions_select_public`: Anyone can read
- `contributions_insert_own`: Users can insert their own
- `contributions_update_own`: Users can update their own
- `contributions_update_admin`: Admins can update any contribution
- `contributions_delete_admin`: Admins can delete contributions

---

### 6. partners

Industry partner logos and details.

```sql
create table partners (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  logo_url    text,
  website_url text,
  sort_order  int default 0,
  created_at  timestamptz default now()
);
```

**Fields:**
- `id`: UUID primary key
- `name`: Partner company name
- `logo_url`: Supabase Storage path to partner logo
- `website_url`: Partner website URL
- `sort_order`: Display order
- `created_at`: Timestamp of creation

**RLS Policies:**
- `partners_select_public`: Anyone can read
- `partners_insert_admin`: Only admins can insert
- `partners_update_admin`: Only admins can update
- `partners_delete_admin`: Only admins can delete

---

### 7. partner_proposals

Partnership inquiry submissions.

```sql
create table partner_proposals (
  id            uuid primary key default gen_random_uuid(),
  company_name  text not null,
  contact_email text not null,
  interest      text,                 -- 'sponsorship', 'mentorship', 'recruitment'
  status        text default 'pending',  -- 'pending', 'reviewed', 'accepted'
  created_at    timestamptz default now()
);
```

**Fields:**
- `id`: UUID primary key
- `company_name`: Company name
- `contact_email`: Contact email
- `interest`: Partnership interest type (sponsorship, mentorship, recruitment)
- `status`: Proposal status (pending, reviewed, accepted)
- `created_at`: Timestamp of creation

**RLS Policies:**
- `partner_proposals_select_admin`: Only admins can read
- `partner_proposals_insert_auth`: Any authenticated user can submit
- `partner_proposals_update_admin`: Admins can update status

---

### 8. testimonials

Alumni feedback quotes.

```sql
create table testimonials (
  id             uuid primary key default gen_random_uuid(),
  quote          text not null,
  author_name    text,
  author_role    text,
  author_avatar  text,
  sort_order     int default 0,
  created_at     timestamptz default now()
);
```

**Fields:**
- `id`: UUID primary key
- `quote`: Testimonial quote text
- `author_name`: Author's name
- `author_role`: Author's role/title
- `author_avatar`: Supabase Storage path to author photo
- `sort_order`: Display order
- `created_at`: Timestamp of creation

**RLS Policies:**
- `testimonials_select_public`: Anyone can read
- `testimonials_insert_admin`: Only admins can insert
- `testimonials_update_admin`: Only admins can update
- `testimonials_delete_admin`: Only admins can delete

---

### 9. metrics

Homepage stat cards.

```sql
create table metrics (
  id         uuid primary key default gen_random_uuid(),
  label      text not null,           -- 'Active Members', 'Events Hosted'
  value      text not null,           -- '500+', '50+'
  sort_order int default 0,
  created_at timestamptz default now()
);
```

**Fields:**
- `id`: UUID primary key
- `label`: Metric label
- `value`: Metric value
- `sort_order`: Display order
- `created_at`: Timestamp of creation

**RLS Policies:**
- `metrics_select_public`: Anyone can read
- `metrics_insert_admin`: Only admins can insert
- `metrics_update_admin`: Only admins can update
- `metrics_delete_admin`: Only admins can delete

---

### 10. timeline_events

About page operation log.

```sql
create table timeline_events (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text,
  date_label  text not null,          -- 'Q1 2021', 'Present'
  sort_order  int default 0,
  created_at  timestamptz default now()
);
```

**Fields:**
- `id`: UUID primary key
- `title`: Timeline event title
- `description`: Event description
- `date_label`: Date label for display
- `sort_order`: Display order
- `created_at`: Timestamp of creation

**RLS Policies:**
- `timeline_events_select_public`: Anyone can read
- `timeline_events_insert_admin`: Only admins can insert
- `timeline_events_update_admin`: Only admins can update
- `timeline_events_delete_admin`: Only admins can delete

---

## Database Functions

### handle_new_user()

Automatically creates a profile row when a user signs up via Supabase Auth.

```sql
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce(new.email, '')
  );
  return new;
exception
  when others then
    raise log 'handle_new_user error: %', SQLERRM;
    return new;
end;
$$ language plpgsql security definer;
```

**Trigger:** `on_auth_user_created` - Fires after insert on auth.users

---

### get_event_registration_count(p_event_id uuid)

Helper function to count registrations for an event.

```sql
create or replace function get_event_registration_count(p_event_id uuid)
returns int as $$
  select count(*)::int from registrations where event_id = p_event_id;
$$ language sql security definer stable;
```

---

## Supabase Storage Buckets

| Bucket | Purpose | Public Read | Auth Write |
|--------|---------|-------------|------------|
| `avatars` | Member profile avatars | ✅ | ✅ |
| `cv-uploads` | Registration CV uploads | ❌ | ✅ |
| `event-images` | Event banner images | ✅ | ✅ |

---

## RLS Policy Patterns

### Admin Check Pattern

Most admin policies use this pattern to verify admin status:

```sql
exists (
  select 1 from profiles
  where profiles.id = auth.uid()
    and profiles.is_admin = true
)
```

### Own Record Pattern

Policies that allow users to manage their own data:

```sql
-- For profiles table
id = auth.uid()

-- For registrations table (email-based)
email = (
  select email from profiles
  where profiles.id = auth.uid()
)
```

### Authenticated Check Pattern

Policies that require any authenticated user:

```sql
auth.uid() is not null
```

---

## Security Notes

1. **All tables have RLS enabled** - No table allows unrestricted access
2. **Admin role is set via `is_admin` flag** in profiles table
3. **Auth trigger auto-creates profiles** - New users get a profile row automatically
4. **Public read is intentional** - Content tables (events, partners, testimonials) are public for the website
5. **Sensitive data is protected** - registrations and partner_proposals have no public read access
6. **Storage policies match RLS** - CV uploads are private, avatars and event images are public

---

## Migration Files

- `database/schema.sql` - Table definitions and functions
- `database/rls.sql` - All RLS policies (41 policies across 10 tables)
- `database/seed.sql` - Initial seed data
- `database/verify-rls.sql` - Verification queries for RLS testing
