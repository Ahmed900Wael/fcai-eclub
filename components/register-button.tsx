"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const RegistrationForm = dynamic(() => import("./registration-form"), {
    loading: () => (
        <div className="flex flex-col items-center justify-center gap-3 py-24">
            <Loader2 size={32} className="animate-spin text-primary" />
            <p className="font-mono text-xs tracking-widest uppercase text-[#BEC7D4]">
                Loading form…
            </p>
        </div>
    ),
});

interface RegisterButtonProps {
    eventId: string;
    eventTitle: string;
    screeningQuestions: ScreeningQuestion[];
    disabled?: boolean;
}

export default function RegisterButton({
    eventId,
    eventTitle,
    screeningQuestions,
    disabled,
}: RegisterButtonProps) {
    const [open, setOpen] = useState(false);
    const [mounted, _] = useState(true);

    return (
        <>
            <Button
                className="ds-btn font-mono tracking-wider uppercase"
                size="sm"
                onClick={() => setOpen(true)}
                disabled={disabled}
            >
                Register Now <ArrowRight size={16} />
            </Button>

            {open &&
                mounted &&
                createPortal(
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        style={{
                            background: "rgba(17, 20, 18, 0.6)",
                            backdropFilter: "blur(16px) saturate(180%)",
                            WebkitBackdropFilter: "blur(16px) saturate(180%)",
                        }}
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setOpen(false);
                        }}
                    >
                        <div className="w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-xl border border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-1">
                            <RegistrationForm
                                eventId={eventId}
                                eventTitle={eventTitle}
                                screeningQuestions={screeningQuestions}
                                onClose={() => setOpen(false)}
                            />
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}
