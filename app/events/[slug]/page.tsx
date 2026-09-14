import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import RegisterButton from "@/components/register-button";

import "../style.css";
import { Button } from "@/components/ui/button";

interface EventPageProps {
    params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: EventPageProps) {
    const { slug } = await params;
    const supabase = await createClient();

    const { data: event } = await supabase
        .from("events")
        .select("*")
        .eq("slug", slug)
        .single();

    if (!event) notFound();

    const { count: registrationsCount } = await supabase
        .from("registrations")
        .select("id", { count: "exact", head: true })
        .eq("event_id", event.id);

    const spotsRemaining = (event.capacity ?? 0) - (registrationsCount ?? 0);

    const defaultQuestions = [
        "What is your experience with this topic?",
        "What do you hope to learn from this event?",
        "Describe a relevant project you've worked on.",
    ];

    const formattedDate = event.date
        ? new Date(event.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
          })
        : "TBD";

    return (
        <div className="bg-[#0D1B2A]">
            {/* Hero */}
            <main className="min-h-[75vh] relative flex items-center justify-center text-start container mx-auto">
                <div
                    style={{
                        backgroundImage: event.instructor_avatar
                            ? `url('${event.instructor_avatar}')`
                            : "url('/workshop.png')",
                        backgroundSize: "cover",
                        backgroundColor: "rgba(0,0,0,0.95)",
                    }}
                    className="flex-1 px-12 py-10 min-h-120 flex flex-col justify-between"
                >
                    <span
                        className="ds-badge w-fit mb-4"
                        data-animate="hero-badge"
                    >
                        Upcoming Session
                    </span>
                    <div>
                        <h1 className="max-w-260 font-space font-bold text-6xl leading-14 tracking-tight text-[#E2E3DF] mb-4">
                            {event.title}
                        </h1>
                        {event.description && (
                            <p className="max-w-167.5 font-hanken text-lg leading-7 text-[#BDC8D1]">
                                {event.description}
                            </p>
                        )}
                    </div>
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
                    {event.instructor_name && (
                        <div className="ds-card p-10!">
                            <h3 className="font-space font-bold text-2xl leading-8 mb-5">
                                Instructor
                            </h3>
                            <div className="flex gap-4 items-center">
                                {event.instructor_avatar ? (
                                    <Image
                                        src={event.instructor_avatar}
                                        width={62}
                                        height={62}
                                        className="rounded-[12px] border border-gray-500 overflow-hidden"
                                        alt={event.instructor_name}
                                    />
                                ) : (
                                    <div className="w-15.5 h-15.5 rounded-[12px] border border-gray-500 bg-[#1e201e] flex items-center justify-center font-space font-bold text-xl text-primary">
                                        {event.instructor_name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-montserrat text-lg leading-7 text-[#E2E3DF]">
                                        {event.instructor_name}
                                    </h4>
                                    {event.instructor_title && (
                                        <span className="font-mono font-medium text-[12px] text-primary uppercase">
                                            {event.instructor_title}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Timeline */}
                    <div className="ds-card p-10!">
                        <h3 className="font-space font-bold text-2xl leading-8 mb-8">
                            Timeline
                        </h3>
                        <div className="flex flex-col gap-10 justify-center border-l">
                            {[
                                {
                                    time: "10:00 AM",
                                    title: "Foundations",
                                    desc: "Introduction and core concepts overview.",
                                },
                                {
                                    time: "11:30 AM",
                                    title: "Advanced Techniques",
                                    desc: "Deep dive into advanced patterns and frameworks.",
                                },
                                {
                                    time: "01:00 PM",
                                    title: "Practical Implementation",
                                    desc: "Building a hands-on project using API integration.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex flex-col gap-2 row ${i === 0 ? "row-active" : ""}`}
                                >
                                    <h4 className="font-mono text-[16px] leading-3 tracking-widest text-primary">
                                        {item.time} - {item.title}
                                    </h4>
                                    <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
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
                                    {formattedDate}
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
                    <div className="ds-card p-10! flex flex-col gap-2">
                        <span className="font-space font-bold text-7xl leading-16 tracking-tight text-primary text-center">
                            {spotsRemaining > 0 ? spotsRemaining : 0}
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

                    {/* Register CTA */}
                    <div className="ds-card p-10! flex flex-col gap-2">
                        <h4 className="font-mono text-sm leading-4 tracking-widest uppercase font-extralight mb-2">
                            Secure Your Spot
                        </h4>
                        <RegisterButton
                            eventId={event.id}
                            eventTitle={event.title}
                            screeningQuestions={defaultQuestions}
                            disabled={false}
                        />
                    </div>
                </aside>
            </section>
        </div>
    );
}
