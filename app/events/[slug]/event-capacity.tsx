import type { EventWithQuestions } from "@/services/events";
import RegisterButton from "@/components/register-button";

export default async function EventCapacity({
    event,
    countPromise,
}: {
    event: EventWithQuestions;
    countPromise: Promise<number>;
}) {
    const registrationsCount = await countPromise;
    const spotsRemaining =
        Number(event.capacity) - Number(registrationsCount);

    return (
        <>
            {/* Capacity */}
            {spotsRemaining > 0 && (
                <div className="ds-card p-10! flex flex-col gap-2">
                    <span className="font-space font-bold text-7xl leading-16 tracking-tight text-primary text-center">
                        {spotsRemaining}
                    </span>
                    <h4 className="text-center font-mono text-sm leading-4 tracking-widest uppercase font-extralight mb-2">
                        Spots Remaining
                    </h4>
                    <div className="h-2.5 w-full rounded-full bg-black">
                        <div
                            style={{
                                width: `${Math.max(0, (spotsRemaining / (event.capacity || 1)) * 100)}%`,
                            }}
                            className="h-2.5 bg-primary rounded-full transition-all"
                        ></div>
                    </div>
                </div>
            )}

            {/* Register CTA */}
            <div className="ds-card p-10! flex flex-col gap-2">
                <h4 className="font-mono text-sm leading-4 tracking-widest uppercase font-extralight mb-2">
                    Secure Your Spot
                </h4>
                <RegisterButton
                    eventId={event.id}
                    eventTitle={event.title}
                    screeningQuestions={event.screening_questions}
                    disabled={
                        spotsRemaining == 0 || event.status == "pending"
                    }
                />
            </div>
        </>
    );
}
