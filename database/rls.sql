-- ============================================================
-- FCAI E-Club — Row Level Security Policies
-- Run AFTER schema.sql
-- ============================================================

-- ============================================================
-- 1. COMMITTEES
--    Public read, admin-only write
-- ============================================================

alter table committees enable row level security;

-- Anyone can read committees
create policy "committees_select_public"
  on committees for select
  using (true);

-- Only admins can insert
create policy "committees_insert_admin"
  on committees for insert
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can update
create policy "committees_update_admin"
  on committees for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can delete
create policy "committees_delete_admin"
  on committees for delete
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );


-- ============================================================
-- 2. PROFILES
--    Public read, authenticated update own, admin full access
-- ============================================================

alter table profiles enable row level security;

-- Anyone can read profiles (public directory)
create policy "profiles_select_public"
  on profiles for select
  using (true);

-- Users can update their own profile
create policy "profiles_update_own"
  on profiles for update
  using (id = auth.uid());

-- Admins can update any profile
create policy "profiles_update_admin"
  on profiles for update
  using (
    exists (
      select 1 from profiles p
      where p.id = auth.uid()
        and p.is_admin = true
    )
  );

-- Admins can delete profiles
create policy "profiles_delete_admin"
  on profiles for delete
  using (
    exists (
      select 1 from profiles p
      where p.id = auth.uid()
        and p.is_admin = true
    )
  );


-- ============================================================
-- 3. EVENTS
--    Public read, admin-only write
-- ============================================================

alter table events enable row level security;

-- Anyone can read events
create policy "events_select_public"
  on events for select
  using (true);

-- Only admins can insert
create policy "events_insert_admin"
  on events for insert
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can update
create policy "events_update_admin"
  on events for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can delete
create policy "events_delete_admin"
  on events for delete
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );


-- ============================================================
-- 4. REGISTRATIONS
--    No public read, authenticated insert own + read own, admin full
-- ============================================================

alter table registrations enable row level security;

-- Authenticated users can read their own registrations
create policy "registrations_select_own"
  on registrations for select
  using (
    email = (
      select email from profiles
      where profiles.id = auth.uid()
    )
  );

-- Admins can read all registrations
create policy "registrations_select_admin"
  on registrations for select
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Authenticated users can insert their own registration
create policy "registrations_insert_own"
  on registrations for insert
  with check (
    email = (
      select email from profiles
      where profiles.id = auth.uid()
    )
  );

-- Admins can update any registration (approve/reject)
create policy "registrations_update_admin"
  on registrations for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Admins can delete registrations
create policy "registrations_delete_admin"
  on registrations for delete
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );


-- ============================================================
-- 5. CONTRIBUTIONS
--    Public read, authenticated insert/update own, admin full
-- ============================================================

alter table contributions enable row level security;

-- Anyone can read contributions
create policy "contributions_select_public"
  on contributions for select
  using (true);

-- Authenticated users can insert their own
create policy "contributions_insert_own"
  on contributions for insert
  with check (
    member_id = auth.uid()
  );

-- Authenticated users can update their own
create policy "contributions_update_own"
  on contributions for update
  using (member_id = auth.uid());

-- Admins can update any contribution
create policy "contributions_update_admin"
  on contributions for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Admins can delete contributions
create policy "contributions_delete_admin"
  on contributions for delete
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );


-- ============================================================
-- 6. PARTNERS
--    Public read, admin-only write
-- ============================================================

alter table partners enable row level security;

-- Anyone can read partners
create policy "partners_select_public"
  on partners for select
  using (true);

-- Only admins can insert
create policy "partners_insert_admin"
  on partners for insert
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can update
create policy "partners_update_admin"
  on partners for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can delete
create policy "partners_delete_admin"
  on partners for delete
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );


-- ============================================================
-- 7. PARTNER PROPOSALS
--    No public read, authenticated insert, admin read + update
-- ============================================================

alter table partner_proposals enable row level security;

-- Admins can read all proposals
create policy "partner_proposals_select_admin"
  on partner_proposals for select
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Any authenticated user can submit a proposal
create policy "partner_proposals_insert_auth"
  on partner_proposals for insert
  with check (
    auth.uid() is not null
  );

-- Admins can update proposal status
create policy "partner_proposals_update_admin"
  on partner_proposals for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );


-- ============================================================
-- 8. TESTIMONIALS
--    Public read, admin-only write
-- ============================================================

alter table testimonials enable row level security;

-- Anyone can read testimonials
create policy "testimonials_select_public"
  on testimonials for select
  using (true);

-- Only admins can insert
create policy "testimonials_insert_admin"
  on testimonials for insert
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can update
create policy "testimonials_update_admin"
  on testimonials for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can delete
create policy "testimonials_delete_admin"
  on testimonials for delete
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );


-- ============================================================
-- 9. METRICS
--    Public read, admin-only write
-- ============================================================

alter table metrics enable row level security;

-- Anyone can read metrics
create policy "metrics_select_public"
  on metrics for select
  using (true);

-- Only admins can insert
create policy "metrics_insert_admin"
  on metrics for insert
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can update
create policy "metrics_update_admin"
  on metrics for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can delete
create policy "metrics_delete_admin"
  on metrics for delete
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );


-- ============================================================
-- 10. TIMELINE EVENTS
--     Public read, admin-only write
-- ============================================================

alter table timeline_events enable row level security;

-- Anyone can read timeline events
create policy "timeline_events_select_public"
  on timeline_events for select
  using (true);

-- Only admins can insert
create policy "timeline_events_insert_admin"
  on timeline_events for insert
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can update
create policy "timeline_events_update_admin"
  on timeline_events for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );

-- Only admins can delete
create policy "timeline_events_delete_admin"
  on timeline_events for delete
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and profiles.is_admin = true
    )
  );
