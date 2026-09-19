import { createClient } from "@/lib/supabase/server";

const PAGE_SIZE = 8;

export async function getProfileById(
    id: string,
): Promise<ProfileWithCommittee | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("profiles")
        .select("*, committees(name, icon)")
        .eq("id", id)
        .single();

    if (error) {
        console.error("getProfileById error:", error.message);
        return null;
    }

    return data as ProfileWithCommittee;
}

export async function getProfiles(
    page: number = 1,
    committeeId?: string | null,
): Promise<{
    profiles: ProfileWithCommittee[];
    total: number;
    hasMore: boolean;
}> {
    const supabase = await createClient();
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    let countQuery = supabase
        .from("profiles")
        .select("id", { count: "exact", head: true });

    let dataQuery = supabase
        .from("profiles")
        .select("*, committees(name, icon)")
        .order("sort_order", { ascending: true });

    if (committeeId) {
        countQuery = countQuery.eq("committee_id", committeeId);
        dataQuery = dataQuery.eq("committee_id", committeeId);
    }

    const { count } = await countQuery;
    const total = count ?? 0;

    const { data, error } = await dataQuery.range(from, to);

    if (error) {
        console.error("getProfiles error:", error.message);
        return { profiles: [], total, hasMore: false };
    }

    return {
        profiles: (data ?? []) as ProfileWithCommittee[],
        total,
        hasMore: to + 1 < total,
    };
}

export function getAvatarUrl(path: string): string {
    const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    return `${baseUrl}/storage/v1/object/public/${path}`;
}

export async function getContributionsById(
    id: string,
): Promise<Contribution[] | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("contributions")
        .select("*")
        .eq("member_id", id)
        .order("date", { ascending: false });

    if (error) {
        console.error("getContributionsById error:", error.message);
        return null;
    }

    return data as Contribution[];
}
