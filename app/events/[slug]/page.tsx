import { getEventDetails } from "@/services/events";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import RegisterButton from "@/components/register-button";

import "../style.css";
import { getEventImageUrl } from "@/services/events-images";
import { getAvatarUrl } from "@/services/profiles";

interface EventPageProps {
    params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: EventPageProps) {
    const { slug } = await params;
    const event: EventWithRegistration | null = await getEventDetails(slug);

    console.log(event);

    if (!event) return;

    const formattedDate = new Date(event.from_date).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
        },
    );

    const spotsRemaining =
        Number(event.capacity) - Number(event.registrationsCount);

    return (
        <div className="bg-[#0D1B2A]">
            {/* Hero */}
            <main className="min-h-[75vh] relative flex items-center justify-center text-start container mx-auto">
                <div
                    style={{
                        backgroundImage: `url('${event.event_banner ? getEventImageUrl(event.event_banner) : "/event-1.png"}')`,
                        backgroundSize: "cover",
                    }}
                    className="flex-1 px-12 py-10 min-h-120 flex flex-col justify-between"
                >
                    <span
                        className="ds-badge w-fit mb-4"
                        data-animate="hero-badge"
                    >
                        Upcoming {event.type}
                    </span>
                    {!event.event_banner && (
                        <div>
                            <h1 className="max-w-260 font-space font-bold text-6xl leading-14 tracking-tight text-[#E2E3DF] mb-4">
                                {event.title}
                            </h1>
                            {event.description && (
                                <p className="max-w-[80%] font-hanken text-lg leading-7 text-[#BDC8D1] line-clamp-3">
                                    {event.description}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </main>

            {/* Content */}
            <section className="container mx-auto grid grid-cols-12 gap-6 pb-24">
                {/* Left column */}
                <section className="col-span-8 space-y-6">
                    {/* About */}
                    {event.description && (
                        <div className="ds-card p-10!">
                            <h3 className="font-space font-bold text-2xl leading-8 mb-4">
                                About
                            </h3>
                            <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                {event.description}
                            </p>
                        </div>
                    )}

                    {/* Instructor */}
                    {event.instructors && (
                        <div className="ds-card p-10!">
                            <h3 className="font-space font-bold text-2xl leading-8 mb-5">
                                Instructor
                            </h3>
                            <div className="flex flex-col gap-6">
                                {event.instructors.map((ins) => (
                                    <div className="flex gap-4 items-center">
                                        {ins.avatar ? (
                                            <Image
                                                src={getAvatarUrl(ins.avatar)}
                                                width={62}
                                                height={62}
                                                className="rounded-[12px] border border-gray-500 overflow-hidden"
                                                alt={ins.name}
                                            />
                                        ) : (
                                            <div className="w-15.5 h-15.5 rounded-[12px] border border-gray-500 bg-[#1e201e] flex items-center justify-center font-space font-bold text-xl text-primary">
                                                {ins.name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="font-montserrat text-lg leading-7 text-[#E2E3DF]">
                                                {ins.name}
                                            </h4>
                                            {ins.title && (
                                                <span className="font-mono font-medium text-[12px] text-primary uppercase">
                                                    {ins.title}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Timeline */}
                    <div className="ds-card p-10!">
                        <h3 className="font-space font-bold text-2xl leading-8 mb-8">
                            Timeline
                        </h3>
                        {/* <div className="flex flex-col gap-10 justify-center border-l"> */}
                        <div className="flex flex-col gap-10 justify-center">
                            {/* <div
                                key={i}
                                className={`flex flex-col gap-2 row ${i === 0 ? "row-active" : ""}`}
                            >
                                <h4 className="font-mono text-[16px] leading-3 tracking-widest text-primary">
                                    {item.time} - {item.title}
                                </h4>
                                <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                    {item.desc}
                                </p>
                            </div> */}
                            <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                We're waiting for schedule to be announced.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Right sidebar */}
                <aside className="col-span-4 space-y-6">
                    {/* Info card */}
                    <div className="ds-card p-10!">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-2">
                                <Calendar size={16} className="text-primary" />
                                <span className="font-mono text-[12px] leading-3 tracking-widest text-[#BEC7D4]">
                                    {event.from_date ? formattedDate : "TBD"}
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock size={16} className="text-primary" />
                                <span className="font-mono text-[12px] leading-3 tracking-widest text-[#BEC7D4]">
                                    {event.time || "TBD"}
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-primary" />
                                <span className="font-mono text-[12px] leading-3 tracking-widest text-[#BEC7D4]">
                                    {event.location || "TBD"}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Capacity */}
                    {spotsRemaining > 0 && (
                        <div className="ds-card p-10! flex flex-col gap-2">
                            <span className="font-space font-bold text-7xl leading-16 tracking-tight text-primary text-center">
                                {spotsRemaining ?? 0}
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
                            screeningQuestions={[]}
                            disabled={spotsRemaining == 0}
                        />
                    </div>
                </aside>
            </section>
        </div>
    );
}
