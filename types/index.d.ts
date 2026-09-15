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
    is_admin: boolean;
    created_at: string;
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
