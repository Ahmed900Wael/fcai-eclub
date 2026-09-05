-- ============================================================
-- FCAI E-Club — RLS Verification Queries
-- Run AFTER rls.sql to verify policies are correctly applied
-- Execute these in the Supabase SQL Editor
-- ============================================================

-- ============================================================
-- CHECK 1: Confirm RLS is enabled on all tables
-- ============================================================

select
  schemaname,
  tablename,
  rowsecurity as rls_enabled
from pg_tables
where schemaname = 'public'
  and tablename in (
    'committees', 'profiles', 'events', 'registrations',
    'contributions', 'partners', 'partner_proposals',
    'testimonials', 'metrics', 'timeline_events'
  )
order by tablename;

-- Expected: rls_enabled = true for ALL 10 tables


-- ============================================================
-- CHECK 2: List all policies per table
-- ============================================================

select
  schemaname,
  tablename,
  policyname,
  permissive,    -- 'PERMISSIVE' or 'RESTRICTIVE'
  roles,         -- who the policy applies to
  cmd,           -- SELECT, INSERT, UPDATE, DELETE, ALL
  qual,          -- USING expression (for SELECT/UPDATE/DELETE)
  with_check     -- WITH CHECK expression (for INSERT/UPDATE)
from pg_policies
where schemaname = 'public'
order by tablename, cmd, policyname;


-- ============================================================
-- CHECK 3: Count policies per table (should match expected)
-- ============================================================

select
  tablename,
  count(*) as policy_count
from pg_policies
where schemaname = 'public'
group by tablename
order by tablename;

-- Expected:
--   committees          4  (select, insert, update, delete)
--   profiles            4  (select, update_own, update_admin, delete_admin)
--   events              4  (select, insert, update, delete)
--   registrations       5  (select_own, select_admin, insert, update, delete)
--   contributions       5  (select, insert, update_own, update_admin, delete)
--   partners            4  (select, insert, update, delete)
--   partner_proposals   3  (select, insert, update)
--   testimonials        4  (select, insert, update, delete)
--   metrics             4  (select, insert, update, delete)
--   timeline_events     4  (select, insert, update, delete)


-- ============================================================
-- CHECK 4: Verify anon role can READ public tables
-- (Run as service_role to impersonate anon context)
-- ============================================================

-- These should return data if seed data exists:
-- set role to 'anon';
-- select count(*) from committees;
-- select count(*) from profiles;
-- select count(*) from events;
-- select count(*) from partners;
-- select count(*) from testimonials;
-- select count(*) from metrics;
-- select count(*) from timeline_events;
-- select count(*) from contributions;
-- reset role;


-- ============================================================
-- CHECK 5: Verify anon role CANNOT write to any table
-- (Each should fail with "new row violates row-level security")
-- ============================================================

-- set role to 'anon';
--
-- insert into committees (name) values ('HACK');
-- insert into profiles (id, full_name, email) values (gen_random_uuid(), 'HACK', 'x@x.com');
-- insert into events (title, slug) values ('HACK', 'hack');
-- insert into registrations (event_id, full_name, email) values (gen_random_uuid(), 'HACK', 'x@x.com');
-- insert into contributions (member_id, title) values (gen_random_uuid(), 'HACK');
-- insert into partners (name) values ('HACK');
-- insert into partner_proposals (company_name, contact_email) values ('HACK', 'x@x.com');
-- insert into testimonials (quote) values ('HACK');
-- insert into metrics (label, value) values ('HACK', '0');
-- insert into timeline_events (title, date_label) values ('HACK', 'NOW');
--
-- reset role;


-- ============================================================
-- CHECK 6: Verify authenticated users can INSERT registrations
-- (Run while logged in as a test user)
-- ============================================================

-- insert into registrations (event_id, full_name, email, academic_year, department)
-- values (
--   (select id from events limit 1),
--   'Test Student',
--   (select email from profiles where id = auth.uid()),
--   '3rd Year',
--   'Computer Science'
-- );
-- -- Should succeed if user is authenticated
-- -- Then clean up:
-- delete from registrations where email = (select email from profiles where id = auth.uid()) and full_name = 'Test Student';


-- ============================================================
-- CHECK 7: Verify authenticated users can INSERT contributions
-- ============================================================

-- insert into contributions (member_id, title, description, category)
-- values (
--   auth.uid(),
--   'Test Contribution',
--   'This is a test.',
--   'project'
-- );
-- -- Should succeed
-- -- Then clean up:
-- delete from contributions where title = 'Test Contribution' and member_id = auth.uid();


-- ============================================================
-- CHECK 8: Verify authenticated users CANNOT update OTHER profiles
-- (Run while logged in as a non-admin test user)
-- ============================================================

-- update profiles set full_name = 'HACKED'
-- where id = (select id from profiles where full_name != (select full_name from profiles where id = auth.uid()) limit 1);
-- -- Should affect 0 rows (RLS blocks it)


-- ============================================================
-- CHECK 9: Verify admin can UPDATE any profile
-- (Run while logged in as an admin user)
-- ============================================================

-- update profiles set full_name = full_name;  -- no-op update
-- -- Should succeed for all rows if admin


-- ============================================================
-- CHECK 10: Verify partner_proposals — anon cannot read
-- ============================================================

-- set role to 'anon';
-- select count(*) from partner_proposals;
-- -- Should return 0 or fail
-- reset role;


-- ============================================================
-- CHECK 11: Verify registrations — anon cannot read
-- ============================================================

-- set role to 'anon';
-- select count(*) from registrations;
-- -- Should return 0 or fail
-- reset role;
