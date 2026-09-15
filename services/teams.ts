import { createClient } from "@/lib/supabase/server";

export async function getCommittees(): Promise<CommitteeWithMembers[]> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("committees")
        .select("*")
        .order("name");

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

            return { ...committee, member_count: count ?? 0 };
        }),
    );

    return committeesWithCount;
}
