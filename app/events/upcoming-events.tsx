import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

import "./style.css";
import Link from "next/link";

const UpcomingEvents = ({ events }: { events: Event[] | null }) => {
    if (!events) return;

    return (
        <div className="grid gap-6">
            {events &&
                events.map((e) => (
                    <div
                        className="ds-card  flex flex-col justify-between p-7!"
                        key={e.title}
                    >
                        <div className="flex item-center justify-between mb-6">
                            <span className="ds-badge">{e.type}</span>
                            <span className="ds-badge-outline">
                                <Calendar size={16} />
                                {new Date(e.from_date ?? "").toLocaleDateString(
                                    "en-US",
                                    {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                        timeZone: "UTC",
                                    },
                                )}
                            </span>
                        </div>
                        <h4 className="font-montserrat font-semibold text-[32px] mb-2 leading-10 line-clamp-1">
                            {e.title}
                        </h4>
                        <p className="font-hanken text-[16px] leading-6 font-light text-[#BDC8D1] max-w-[80%] mb-8 line-clamp-2">
                            {e.description}
                        </p>
                        {e.slug ? (
                            <Link href={`/events/${e.slug}`}>
                                <Button className="ds-btn w-fit font-mono">
                                    Register Now →
                                </Button>
                            </Link>
                        ) : (
                            <Button className="ds-btn w-fit font-mono" disabled>
                                Coming Soon →
                            </Button>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default UpcomingEvents;
