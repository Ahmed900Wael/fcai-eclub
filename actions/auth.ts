"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
    const supabase = await createClient();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error("SignIn error:", error.message);
        return redirect(`/login?message=${encodeURIComponent(error.message)}`);
    }

    return redirect("/");
}

export async function signUp(formData: FormData) {
    const supabase = await createClient();

    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { full_name },
            emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/callback`,
        },
    });

    if (error) {
        console.error("SignUp error:", error.message);
        return redirect(`/signup?message=${encodeURIComponent(error.message)}`);
    }

    return redirect("/login?message=Check email to continue sign in process");
}

export async function signOut() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect("/login");
}
