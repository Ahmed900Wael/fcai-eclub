"use server";

import { z } from "zod";
import { insertPartnerProposal } from "@/services/partners";

const partnerProposalSchema = z.object({
    company_name: z.string().min(1, "Company name is required"),
    contact_email: z.string().email("Valid email is required"),
    interest: z.string().min(1, "Partnership interest is required"),
    motives: z.string().min(1, "Answer is required"),
    gains: z.string().min(1, "Answer is required"),
});

export type PartnerProposalInput = z.infer<typeof partnerProposalSchema>;

export async function submitPartnerProposal(formData: FormData) {
    const data = {
        company_name: (formData.get("company_name") as string)?.trim() ?? "",
        contact_email: (formData.get("contact_email") as string)?.trim() ?? "",
        interest: (formData.get("interest") as string) ?? "",
        motives: (formData.get("motives") as string) ?? "",
        gains: (formData.get("gains") as string) ?? "",
    };

    const parsed = partnerProposalSchema.safeParse(data);

    if (!parsed.success) {
        const fieldErrors: Record<string, string[]> = {};
        parsed.error.issues.forEach((issue) => {
            const field = issue.path[0] as string;
            if (!fieldErrors[field]) fieldErrors[field] = [];
            fieldErrors[field].push(issue.message);
        });
        return { success: false, errors: fieldErrors };
    }

    const result = await insertPartnerProposal(parsed.data);

    if (!result.success) {
        return { success: false, errors: { form: [result.error!] } };
    }

    return { success: true, errors: null };
}
