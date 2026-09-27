import { createClient } from "@/lib/supabase/server";

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

export async function getProfiles(): Promise<ProfileWithCommittee[] | null> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("profiles")
        .select("*, committees(name, icon)")
        .order("sort_order", { ascending: true });

    if (error) {
        console.error("getProfileById error:", error.message);
        return null;
    }

    return data as ProfileWithCommittee[];
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
