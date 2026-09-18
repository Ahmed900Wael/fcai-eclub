"use server";

import { getProfiles } from "@/services/profiles";

export async function loadMoreProfiles(
    page: number,
    committeeId?: string | null
): Promise<{ profiles: ProfileWithCommittee[]; hasMore: boolean }> {
    const { profiles, hasMore } = await getProfiles(page, committeeId);
    return { profiles, hasMore };
}
