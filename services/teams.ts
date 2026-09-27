import { createClient } from "@/lib/supabase/server";

export async function getCommittees(): Promise<CommitteeWithMembers[]> {
    const supabase = await createClient();

    const { data, error } = await supabase.from("committees").select("*");

    if (error) {
        console.error("getCommittees error:", error.message);
        return [];
    }

    const committees = (data ?? []) as Committee[];

    const committeesWithCount = await Promise.all(
        committees.map(async (committee) => {
            const { count } = await supabase
                .from("profiles")
                .select("id", { count: "exact", head: true })
                .eq("committee_id", committee.id);
                
            return {
                ...committee,
                is_management: committee.is_management ?? false,
                member_count: count ?? 0,
            };
        }),
    );

    return committeesWithCount;
}
