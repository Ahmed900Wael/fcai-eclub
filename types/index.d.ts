declare interface Profile {
    id: string;
    full_name: string;
    email: string;
    role: string | null;
    committee_id: string | null;
    bio: string | null;
    avatar_url: string | null;
    social_links: Record<string, string>;
    linkedin_url: string;
    github_url: string;
    is_admin: boolean;
    created_at: string;
    projects: number;
    workshops: number;
}

declare interface ProfileWithCommittee extends Profile {
    committees: { name: string; icon: string | null } | null;
}

declare interface Committee {
    id: string;
    name: string;
    description: string | null;
    icon: string | null;
    created_at: string;
}

declare interface CommitteeWithMembers extends Committee {
    member_count: number;
}

declare interface Committee {
    id: string;
    name: string;
}

declare interface TeamMembersProps {
    initialProfiles: ProfileWithCommittee[];
    initialHasMore: boolean;
    committees: Committee[];
}

declare interface Contribution {
    id: string;
    title: string;
    description: string;
    date: string;
    created_at: string;
    category: string;
}

declare interface Event {
    id: string;
    title: string;
    slug: string;
    description: string;
    from_date: string;
    to_date: string;
    time: string;
    location: string;
    capacity: number;
    status: "completed" | "in-progress" | "pending";
    track: "Soft Skills" | "Technical" | "Business";
    instructors: {
        name: string;
        title: string;
        avatar: string;
    }[];
    type: string;
    event_banner: string;
    created_at: string;
}

declare interface EventWithRegistration extends Event {
    registrationsCount: number;
}
