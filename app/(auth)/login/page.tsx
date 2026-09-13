import { signIn } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ message?: string }>;
}) {
    const { message } = await searchParams;

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="text-center">
                <h1 className="ds-section-label justify-center">
                    Welcome Back
                </h1>
                <h2 className="ds-section-title text-3xl md:text-4xl">
                    Sign <span>In</span>
                </h2>
                <p className="ds-section-subtitle mx-auto mt-2 text-center">
                    Access your dashboard and manage your journey.
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

            {/* <div className="ds-card p-10! col-span-7">
                <form className="flex flex-col gap-8" action="">
                    <div>
                        <label className="ds-input-label" htmlFor="name">
                            Company Name
                        </label>
                        <input
                            type="text"
                            className="ds-input"
                            name="name"
                            id="name"
                            placeholder="e.g. Acme Aerospance"
                        />
                    </div>
                    <div>
                        <label className="ds-input-label" htmlFor="email">
                            Contact Email
                        </label>
                        <input
                            type="text"
                            className="ds-input"
                            name="email"
                            id="email"
                            placeholder="contact@company.com"
                        />
                    </div>
                    <div>
                        <label className="ds-input-label" htmlFor="reason">
                            Partnership Interest
                        </label>
                        <select className="ds-select" name="reason" id="reason">
                            <option value="None">
                                Select an area of interest
                            </option>
                        </select>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            className="ds-btn-outline font-mono"
                        >
                            Submit Proposal <Send size={16} />
                        </Button>
                    </div>
                </form>
            </div> */}

            <form action={signIn} className="flex w-full flex-col gap-8">
                <div>
                    <label className="ds-input-label" htmlFor="name">
                        Company Name
                    </label>
                    <input
                        type="text"
                        className="ds-input"
                        name="name"
                        id="name"
                        placeholder="e.g. Acme Aerospance"
                    />
                </div>
                <div>
                    <label className="ds-input-label" htmlFor="email">
                        Contact Email
                    </label>
                    <input
                        type="text"
                        className="ds-input"
                        name="email"
                        id="email"
                        placeholder="contact@company.com"
                    />
                </div>
                <div>
                    <Button
                        type="submit"
                        className="ds-btn-outline w-full cursor-pointer font-mono"
                    >
                        Submit Proposal <Send size={16} />
                    </Button>
                </div>
            </form>

            <p
                className="text-center text-sm"
                style={{ color: "var(--on-surface-variant)" }}
            >
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="ds-text-accent hover:underline">
                    Sign Up
                </Link>
            </p>
        </div>
    );
}
