create table committees (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,          -- 'Technical', 'Marketing', 'Logistics'
  description text,
  icon        text,                   -- lucide icon name
  created_at  timestamptz default now()
);

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

create table contributions (
  id          uuid primary key default gen_random_uuid(),
  member_id   uuid references profiles(id) on delete cascade,
  title       text not null,
  description text,
  date        date,
  category    text,                   -- 'project', 'workshop', 'hackathon'
  created_at  timestamptz default now()
);

create table partners (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  logo_url    text,
  website_url text,
  sort_order  int default 0,
  created_at  timestamptz default now()
);

create table partner_proposals (
  id            uuid primary key default gen_random_uuid(),
  company_name  text not null,
  contact_email text not null,
  interest      text,                 -- 'sponsorship', 'mentorship', 'recruitment'
  status        text default 'pending',  -- 'pending', 'reviewed', 'accepted'
  created_at    timestamptz default now()
);

create table testimonials (
  id             uuid primary key default gen_random_uuid(),
  quote          text not null,
  author_name    text,
  author_role    text,
  author_avatar  text,
  sort_order     int default 0,
  created_at     timestamptz default now()
);

create table metrics (
  id         uuid primary key default gen_random_uuid(),
  label      text not null,           -- 'Active Members', 'Events Hosted'
  value      text not null,           -- '500+', '50+'
  sort_order int default 0,
  created_at timestamptz default now()
);

create table timeline_events (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text,
  date_label  text not null,          -- 'Q1 2021', 'Present'
  sort_order  int default 0,
  created_at  timestamptz default now()
);

create or replace function handle_new_user()
returns trigger as $$
begin
  insert into profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();