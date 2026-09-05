-- ============================================================
-- FCAI E-Club — Seed Data
-- Run AFTER schema.sql and rls.sql
-- ============================================================

-- ============================================================
-- COMMITTEES
-- ============================================================

insert into committees (id, name, description, icon) values
  ('a0000000-0000-0000-0000-000000000001', 'Technical', 'Architecting robust software solutions and hardware prototypes. The engine room of innovation.', 'monitor'),
  ('a0000000-0000-0000-0000-000000000002', 'Marketing', 'Broadcasting our vision. Crafting compelling narratives and engaging our academic community.', 'megaphone'),
  ('a0000000-0000-0000-0000-000000000003', 'Logistics', 'Orchestrating complex events and maintaining the structural integrity of club operations.', 'building');


-- ============================================================
-- METRICS (Homepage stats)
-- ============================================================

insert into metrics (label, value, sort_order) values
  ('Active Members', '500+', 1),
  ('Events Hosted', '50+', 2),
  ('Industry Partners', '20+', 3),
  ('Shipped Projects', '15+', 4);


-- ============================================================
-- TIMELINE EVENTS (About page)
-- ============================================================

insert into timeline_events (title, description, date_label, sort_order) values
  ('System Initialization', 'The founding members established the core architecture of the club, setting the foundational vision for technical excellence.', 'Q1 2021', 1),
  ('Bootcamp Alpha', 'Launched the first iteration of practical bootcamps focusing on modern web stacks and data science pipelines.', 'Q2 2022', 2),
  ('System Initialization', 'Expanded the core team and established specialized sub-committees for technical, marketing, and logistics operations.', 'Q3 2023', 3),
  ('Bootcamp Alpha', 'Second wave of bootcamps with increased industry partnership and hands-on project-based curriculum.', 'Q4 2024', 4),
  ('Ecosystem Expansion', 'Scaling operations to include specialized hardware tracks, AI research units, and national hackathon deployments.', 'Present', 5);


-- ============================================================
-- PARTNERS
-- ============================================================

insert into partners (name, logo_url, website_url, sort_order) values
  ('TechCorp', null, null, 1),
  ('InnoSys', null, null, 2),
  ('FutureX', null, null, 3),
  ('DataNet', null, null, 4),
  ('CloudBase', null, null, 5),
  ('Quantum Labs', null, null, 6),
  ('CyberCore', null, null, 7),
  ('NeuralPath', null, null, 8);


-- ============================================================
-- TESTIMONIALS
-- ============================================================

insert into testimonials (quote, author_name, author_role, author_avatar, sort_order) values
  (
    'The E-club provided the perfect environment to transition my research into a tangible prototype. The community support is unmatched.',
    'Sarah Chen',
    'AI Researcher',
    null,
    1
  ),
  (
    'Partnering with FCAI E-club has given us access to some of the brightest technical minds. Their workshops are consistently high-quality.',
    'Marcus Thorne',
    'Tech Lead, InnoSys',
    null,
    2
  ),
  (
    'Being part of the core team helped me develop leadership skills while working on cutting-edge WebGL projects. It''s a game changer.',
    'Alex Rivera',
    'Full Stack Developer',
    null,
    3
  );


-- ============================================================
-- EVENTS (Sample workshops and bootcamps)
-- ============================================================

insert into events (title, slug, description, date, time, location, capacity, status, track, instructor_name, instructor_title, instructor_avatar) values
  (
    'Advanced React Patterns',
    'advanced-react-patterns',
    'Deep dive into advanced state management, render optimization, and custom hooks architecture for scalable enterprise applications.',
    '2024-11-15',
    '10:00 AM - 1:00 PM EST',
    'Main Campus Lab',
    30,
    'open',
    'technical',
    'Ahmed Hassan',
    'Tech Lead',
    null
  ),
  (
    'Startup Pitching 101',
    'startup-pitching-101',
    'Learn how to structure your pitch deck, articulate your value proposition, and handle investor Q&A with confidence.',
    '2024-11-22',
    '6:00 PM - 8:00 PM EST',
    'Virtual Hall',
    50,
    'closed',
    'business',
    'Nour Khaled',
    'Head of PR',
    null
  ),
  (
    'Engineering Leadership Bootcamp',
    'engineering-leadership-bootcamp',
    'Transitioning from an individual contributor to a team lead. An intensive weekend focusing on technical delegation, code review etiquette, and mentoring junior developers.',
    '2024-12-05',
    '9:00 AM - 5:00 PM EST',
    'Innovation Hub',
    40,
    'open',
    'soft_skills',
    null,
    null,
    null
  ),
  (
    'Advanced Prompt Engineering & AI Workflows',
    'advanced-prompt-engineering',
    'Master the art of communicating with Large Language Models to automate complex workflows and build intelligent systems.',
    '2024-10-24',
    '10:00 AM - 1:00 PM EST',
    'Online Webinar',
    50,
    'upcoming',
    'technical',
    'Dr. Sarah Chen',
    'Lead AI Researcher',
    null
  ),
  (
    'Vector Databases & AI',
    'vector-databases-ai',
    'Implementing semantic search and RAG architectures using modern vector stores. Hands-on integration with LLM APIs.',
    '2024-12-12',
    '2:00 PM - 5:00 PM EST',
    'Innovation Hub',
    25,
    'open',
    'technical',
    'Omar Tariq',
    'Event Coordinator',
    null
  ),
  (
    'Scaling from 0 to 1',
    'scaling-from-0-to-1',
    'Fireside chat with alumni who built successful YC startups.',
    '2024-11-12',
    '7:00 PM - 9:00 PM EST',
    'Main Auditorium',
    80,
    'upcoming',
    'business',
    null,
    null,
    null
  ),
  (
    'Future Compute Hackathon',
    'future-compute-hackathon',
    'A 48-hour intensive building session focused on decentralized AI and next-gen computing architectures. Build the infrastructure of tomorrow.',
    '2024-10-24',
    'Oct 24-26',
    'Engineering Building',
    100,
    'upcoming',
    'technical',
    null,
    null,
    null
  ),
  (
    'Intro to WebGL Shaders',
    'intro-to-webgl-shaders',
    'Learn the fundamentals of writing fragment shaders to create stunning visual effects.',
    '2024-10-24',
    '6:00 PM - 8:00 PM',
    'Main Campus Lab',
    25,
    'open',
    'technical',
    'Salma Youssef',
    'UI Designer',
    null
  ),
  (
    'Intro to Web3 Architectures',
    'intro-to-web3-architectures',
    'An introduction to decentralized systems, smart contracts, and Web3 development patterns.',
    '2024-11-05',
    '6:00 PM',
    'Lab 402, Engineering Bldg',
    30,
    'upcoming',
    'technical',
    null,
    null,
    null
  ),
  (
    'Startup Pitch Night',
    'startup-pitch-night',
    'Watch club members pitch their tech startup ideas to a panel of industry judges.',
    '2024-11-02',
    '7:00 PM EST',
    'Virtual Hall',
    60,
    'upcoming',
    'business',
    null,
    null,
    null
  );
