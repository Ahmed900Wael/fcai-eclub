import { signUp } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function SignupPage({
    searchParams,
}: {
    searchParams: Promise<{ message?: string }>;
}) {
    const { message } = await searchParams;

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="text-center">
                <h1 className="ds-section-label justify-center">
                    Join the Club
                </h1>
                <h2 className="ds-section-title text-3xl md:text-4xl">
                    Create <span>Account</span>
                </h2>
                <p className="ds-section-subtitle mx-auto mt-2 text-center">
                    Start your journey with FCAI E-Club today.
                </p>
            </div>

            {message && (
                <div
                    className="w-full rounded border px-4 py-3 text-sm"
                    style={{
                        borderColor: "rgba(44, 194, 255, 0.3)",
                        background: "rgba(44, 194, 255, 0.05)",
                        color: "var(--primary-fixed-dim)",
                    }}
                >
                    {message}
                </div>
            )}

            <form action={signUp} className="flex w-full flex-col gap-5">
                <div>
                    <label className="ds-input-label" htmlFor="full_name">
                        Full Name
                    </label>
                    <input
                        className="ds-input"
                        id="full_name"
                        name="full_name"
                        type="full_name"
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div>
                    <label className="ds-input-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="ds-input"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@university.edu.eg"
                        required
                    />
                </div>

                <div>
                    <label className="ds-input-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="ds-input"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Create a strong password"
                        required
                        minLength={6}
                    />
                </div>

                <Button
                    type="submit"
                    className="ds-btn mt-2 w-full justify-center cursor-pointer"
                >
                    Create Account
                </Button>
            </form>

            <p
                className="text-center text-sm"
                style={{ color: "var(--on-surface-variant)" }}
            >
                Already have an account?{" "}
                <Link href="/login" className="ds-text-accent hover:underline">
                    Sign In
                </Link>
            </p>
        </div>
    );
}
