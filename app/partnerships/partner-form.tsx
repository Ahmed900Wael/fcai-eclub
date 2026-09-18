"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitPartnerProposal } from "@/actions/partners";

const PARTNERSHIP_INTERESTS = [
    { value: "sponsorship", label: "Sponsorship" },
    { value: "mentorship", label: "Mentorship" },
    { value: "recruitment", label: "Recruitment" },
    { value: "workshop", label: "Workshop Hosting" },
    { value: "other", label: "Other" },
];

export default function PartnerForm() {
    const [state, formAction, isPending] = useActionState(
        async (
            _prev: Awaited<ReturnType<typeof submitPartnerProposal>> | null,
            formData: FormData,
        ) => {
            return submitPartnerProposal(formData);
        },
        null,
    );

    return (
        <form className="flex flex-col gap-8" action={formAction}>
            <div>
                <label className="ds-input-label" htmlFor="company_name">
                    Organization Name
                </label>
                <input
                    type="text"
                    className="ds-input"
                    name="company_name"
                    id="company_name"
                    placeholder="e.g. Acme Aerospace"
                    disabled={isPending}
                />
                {state?.errors?.company_name && (
                    <p className="text-destructive text-xs mt-1 font-mono">
                        {state.errors.company_name[0]}
                    </p>
                )}
            </div>
            <div>
                <label className="ds-input-label" htmlFor="contact_email">
                    Contact Email
                </label>
                <input
                    type="email"
                    className="ds-input"
                    name="contact_email"
                    id="contact_email"
                    placeholder="contact@company.com"
                    disabled={isPending}
                />
                {state?.errors?.contact_email && (
                    <p className="text-destructive text-xs mt-1 font-mono">
                        {state.errors.contact_email[0]}
                    </p>
                )}
            </div>
            <div>
                <label className="ds-input-label" htmlFor="interest">
                    Partnership Interest
                </label>
                <select
                    className="ds-select"
                    name="interest"
                    id="interest"
                    disabled={isPending}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select an area of interest
                    </option>
                    {PARTNERSHIP_INTERESTS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {state?.errors?.interest && (
                    <p className="text-destructive text-xs mt-1 font-mono">
                        {state.errors.interest[0]}
                    </p>
                )}
            </div>
            <div>
                <label className="ds-input-label" htmlFor="motives">
                    What can your Organization offer to the club ?
                </label>
                <input
                    type="text"
                    className="ds-input"
                    name="motives"
                    id="motives"
                    placeholder="Answer here"
                    disabled={isPending}
                />
                {state?.errors?.motives && (
                    <p className="text-destructive text-xs mt-1 font-mono">
                        {state.errors.motives[0]}
                    </p>
                )}
            </div>
            <div>
                <label className="ds-input-label" htmlFor="gains">
                    What do you expect to gain from partnering with FCAI E-Club
                    ?
                </label>
                <input
                    type="text"
                    className="ds-input"
                    name="gains"
                    id="gains"
                    placeholder="Answer here"
                    disabled={isPending}
                />
                {state?.errors?.gains && (
                    <p className="text-destructive text-xs mt-1 font-mono">
                        {state.errors.gains[0]}
                    </p>
                )}
            </div>
            {state?.errors?.company_name && (
                <p className="text-destructive text-xs mt-1 font-mono">
                    {state.errors.company_name[0]}
                </p>
            )}
            {state?.errors?.form && (
                <p className="text-destructive text-xs font-mono flex items-center gap-1">
                    <AlertCircle size={14} />
                    {state.errors.form[0]}
                </p>
            )}
            {state?.success && (
                <p className="text-green-400 text-sm font-mono flex items-center gap-1">
                    <CheckCircle size={14} />
                    Proposal submitted successfully! We&apos;ll be in touch.
                </p>
            )}
            <div>
                <Button
                    type="submit"
                    className="ds-btn-outline font-mono"
                    disabled={isPending}
                >
                    {isPending ? (
                        <>
                            Submitting{" "}
                            <Loader2 size={16} className="animate-spin" />
                        </>
                    ) : (
                        <>
                            Submit Proposal <Send size={16} />
                        </>
                    )}
                </Button>
            </div>
        </form>
    );
}
