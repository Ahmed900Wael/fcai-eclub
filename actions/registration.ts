"use server";

import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const step1Schema = z.object({
    full_name: z.string().min(1, "Full name is required"),
    email: z.string().email("Valid email is required"),
    academic_year: z.string().min(1, "Academic year is required"),
    department: z.string().min(1, "Department is required"),
});

const step2Schema = z.object({
    screening_answers: z.record(z.string(), z.string()),
});

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;

export async function submitRegistration(
    eventId: string,
    formData: {
        full_name: string;
        email: string;
        academic_year: string;
        department: string;
        screening_answers: Record<string, string>;
        cv_file: File | null;
    },
) {
    const supabase = await createClient();

    // NOTE: Registration is currently public (no auth required) per Phase 4 being postponed.
    // Once authentication is implemented, add auth check here and update RLS policy accordingly.
    // Current RLS policy requires email match with authenticated user, which will need adjustment.

    // Input sanitization to prevent XSS
    const sanitizeInput = (input: string): string => {
        if (!input) return "";
        return input
            .trim()
            .replace(/[<>]/g, "") // Remove angle brackets
            .replace(/javascript:/gi, "") // Remove javascript: protocol
            .replace(/on\w+=/gi, ""); // Remove event handlers like onclick=
    };

    const sanitizedData = {
        full_name: sanitizeInput(formData.full_name),
        email: sanitizeInput(formData.email).toLowerCase(),
        academic_year: sanitizeInput(formData.academic_year),
        department: sanitizeInput(formData.department),
        screening_answers: Object.fromEntries(
            Object.entries(formData.screening_answers).map(([key, value]) => [
                sanitizeInput(key),
                sanitizeInput(value),
            ]),
        ) as Record<string, string>,
    };

    // Rate limiting: Check if this email has already registered for this event within the last hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: existingRegistration } = await supabase
        .from("registrations")
        .select("id")
        .eq("event_id", eventId)
        .eq("email", sanitizedData.email)
        .gte("created_at", oneHourAgo)
        .maybeSingle();

    if (existingRegistration) {
        return {
            success: false,
            error: "You have already registered for this event. Please wait before submitting again.",
        };
    }

    let cvFilePath: string | null = null;

    if (formData.cv_file && formData.cv_file.size > 0) {
        // File size validation: max 5MB
        const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
        if (formData.cv_file.size > MAX_FILE_SIZE) {
            return {
                success: false,
                error: "File size exceeds 5MB limit. Please upload a smaller file.",
            };
        }

        // MIME type validation: only allow PDF, DOC, DOCX
        const allowedMimeTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        if (!allowedMimeTypes.includes(formData.cv_file.type)) {
            return {
                success: false,
                error: "Invalid file type. Only PDF, DOC, and DOCX files are allowed.",
            };
        }

        // File extension validation
        const fileExt = formData.cv_file.name.split(".").pop()?.toLowerCase();
        const allowedExtensions = ["pdf", "doc", "docx"];
        if (!fileExt || !allowedExtensions.includes(fileExt)) {
            return {
                success: false,
                error: "Invalid file extension. Only PDF, DOC, and DOCX files are allowed.",
            };
        }

        const filePath = `cvs/${sanitizedData.email}-${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
            .from("cv-uploads")
            .upload(filePath, formData.cv_file, {
                contentType: formData.cv_file.type,
                upsert: false,
            });

        if (uploadError) {
            console.error("CV upload error:", uploadError.message);
            return {
                success: false,
                error: "Failed to upload CV. Please try again.",
            };
        }

        cvFilePath = filePath;
    }

    const { error: insertError } = await supabase.from("registrations").insert({
        event_id: eventId,
        full_name: sanitizedData.full_name,
        email: sanitizedData.email,
        academic_year: sanitizedData.academic_year,
        department: sanitizedData.department,
        screening_answers: sanitizedData.screening_answers,
        cv_file_path: cvFilePath,
    });

    if (insertError) {
        console.error("Registration insert error:", insertError.message);
        return {
            success: false,
            error: "Failed to submit registration. Please try again.",
        };
    }

    return { success: true, error: null };
}
