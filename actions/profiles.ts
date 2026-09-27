"use server";

import { getProfiles } from "@/services/profiles";

export async function loadMoreProfiles(): Promise<{
    profiles: ProfileWithCommittee[];
    hasMore: boolean;
}> {
    const profiles = await getProfiles();
    return { profiles: profiles ?? [], hasMore: false };
}
