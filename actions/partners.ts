"use server";

import { z } from "zod";
import { insertPartnerProposal } from "@/services/partners";
import { createClient } from "@/lib/supabase/server";

const partnerProposalSchema = z.object({
    company_name: z.string().min(1, "Company name is required"),
    contact_email: z.string().email("Valid email is required"),
    interest: z.string().min(1, "Partnership interest is required"),
    motives: z.string().min(1, "Answer is required"),
    gains: z.string().min(1, "Answer is required"),
});

export type PartnerProposalInput = z.infer<typeof partnerProposalSchema>;

export async function submitPartnerProposal(formData: FormData) {
    // Authentication check - only authenticated users can submit proposals per RLS
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return {
            success: false,
            errors: {
                form: [
                    "You must be logged in to submit a partnership proposal.",
                ],
            },
        };
    }

    // Input sanitization to prevent XSS
    const sanitizeInput = (input: string): string => {
        if (!input) return "";
        return input
            .trim()
            .replace(/[<>]/g, "") // Remove angle brackets
            .replace(/javascript:/gi, "") // Remove javascript: protocol
            .replace(/on\w+=/gi, ""); // Remove event handlers like onclick=
    };

    const data = {
        company_name: sanitizeInput(
            (formData.get("company_name") as string) ?? "",
        ),
        contact_email: sanitizeInput(
            (formData.get("contact_email") as string) ?? "",
        ).toLowerCase(),
        interest: sanitizeInput((formData.get("interest") as string) ?? ""),
        motives: sanitizeInput((formData.get("motives") as string) ?? ""),
        gains: sanitizeInput((formData.get("gains") as string) ?? ""),
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
