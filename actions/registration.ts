// "use server";

// import { createClient } from "@/lib/supabase/server";
// import { z } from "zod";

// const step1Schema = z.object({
//     full_name: z.string().min(1, "Full name is required"),
//     email: z.string().email("Valid email is required"),
//     academic_year: z.string().min(1, "Academic year is required"),
//     department: z.string().min(1, "Department is required"),
// });

// const step2Schema = z.object({
//     screening_answers: z.record(z.string(), z.string()),
// });

// export type Step1Data = z.infer<typeof step1Schema>;
// export type Step2Data = z.infer<typeof step2Schema>;

// export async function submitRegistration(
//     eventId: string,
//     formData: {
//         full_name: string;
//         email: string;
//         academic_year: string;
//         department: string;
//         screening_answers: Record<string, string>;
//         cv_file: File | null;
//     }
// ) {
//     const supabase = await createClient();

//     let cvFilePath: string | null = null;

//     if (formData.cv_file && formData.cv_file.size > 0) {
//         const fileExt = formData.cv_file.name.split(".").pop();
//         const filePath = `cvs/${formData.email}-${Date.now()}.${fileExt}`;

//         const { error: uploadError } = await supabase.storage
//             .from("cv-uploads")
//             .upload(filePath, formData.cv_file, {
//                 contentType: formData.cv_file.type,
//                 upsert: false,
//             });

//         if (uploadError) {
//             console.error("CV upload error:", uploadError.message);
//             return { success: false, error: "Failed to upload CV. Please try again." };
//         }

//         cvFilePath = filePath;
//     }

//     const { error: insertError } = await supabase.from("registrations").insert({
//         event_id: eventId,
//         full_name: formData.full_name,
//         email: formData.email,
//         academic_year: formData.academic_year,
//         department: formData.department,
//         screening_answers: formData.screening_answers,
//         cv_file_path: cvFilePath,
//     });

//     if (insertError) {
//         console.error("Registration insert error:", insertError.message);
//         return { success: false, error: "Failed to submit registration. Please try again." };
//     }

//     return { success: true, error: null };
// }
