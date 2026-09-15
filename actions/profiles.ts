"use server";

import { getProfiles, type ProfileWithCommittee } from "@/services/profiles";

export async function loadMoreProfiles(
    page: number,
    committeeId?: string | null
): Promise<{ profiles: ProfileWithCommittee[]; hasMore: boolean }> {
    const { profiles, hasMore } = await getProfiles(page, committeeId);
    return { profiles, hasMore };
}
