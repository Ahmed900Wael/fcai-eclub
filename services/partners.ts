import { createClient } from "@/lib/supabase/server";

export async function insertPartnerProposal(proposal: {
    company_name: string;
    contact_email: string;
    interest: string;
    motives: string;
    gains: string;
}): Promise<{ success: boolean; error: string | null }> {
    const supabase = await createClient();

    const { error } = await supabase.from("partner_proposals").insert({
        company_name: proposal.company_name,
        contact_email: proposal.contact_email,
        interest: proposal.interest,
        motives: proposal.motives,
        gains: proposal.gains,
    });

    if (error) {
        console.error("insertPartnerProposal error:", error.message);
        return {
            success: false,
            error: "Failed to submit proposal. Please try again.",
        };
    }

    return { success: true, error: null };
}
