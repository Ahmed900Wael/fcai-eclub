"use client";

import { Button } from "@/components/ui/button";
import { EVENTS, PARTNERS, TESTIMONIALS } from "@/constants";
import {
    ArrowRight,
    Calendar,
    Clock,
    MapPin,
    Quote,
    Rocket,
    User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <main
                style={{
                    backgroundImage: "url('/hero-section.png')",
                    backgroundSize: "cover",
                }}
                className="min-h-screen bg-[#09141E]"
            >
                <div className="absolute w-full h-screen bg-black opacity-65 grid place-content-center"></div>
                <div className="relative h-full flex flex-col gap-6 min-h-screen justify-center items-center">
                    <span className="ds-badge">FCAI E-Club Innovation Hub</span>
                    <Image
                        width={1700}
                        height={1700}
                        src="/banner.png"
                        loading="eager"
                        alt="banner"
                    />
                    <p className="text-[#BEC7D4] text-sm md:text-xl font-hanken max-w-[80%] lg:max-w-[68ch] text-center">
                        A student-led community at FCAI-CU where students learn,
                        build, collaborate, and turn ideas into real experience.
                    </p>
                    <Button size={"sm"} className="ds-btn-outline font-mono">
                        <Link href="/events">
                            Explore Events <ArrowRight className="inline" />
                        </Link>
                    </Button>
                </div>
            </main>

            <section className="ds-container mx-auto py-24">
                <div className="grid grid-cols-4 grid-rows-2 gap-6">
                    <div className="col-span-4 lg:col-span-2 row-span-1 md:row-span-2 ds-stat-card gap-2 justify-center">
                        <span className="ds-stat-number text-6xl!">40+</span>
                        <h3 className="ds-stat-label mb-2">Active Members</h3>
                        <p className="text-sm max-w-120">
                            A thriving community of developers, designers, and
                            visionaries collaborating on future-forward tech.
                        </p>
                    </div>
                    <div className="ds-stat-card ds-stat-inline gap-2 col-span-2 sm:col-span-1 justify-center">
                        <span className="ds-stat-number font-bold">5+</span>
                        <h3 className="ds-stat-label">Shipped Projects</h3>
                    </div>
                    <div className="ds-stat-card ds-stat-inline gap-2 col-span-2 sm:col-span-1 justify-center bg-[#16212A]!">
                        <span className="ds-stat-number">4</span>
                        <h3 className="ds-stat-label">Major Events Hosted</h3>
                    </div>
                    <div className="row-span-1 col-span-4 sm:col-span-2 sm:col-start-3 col-start-1 relative ds-stat-card gap-2 justify-center py-12!">
                        <Rocket
                            className="absolute right-8 opacity-10"
                            size={120}
                        />
                        <span className="ds-stat-number">15+</span>
                        <h3 className="text-sm tracking-wider font-mono text-primary">
                            Industry Partners
                        </h3>
                    </div>
                </div>
            </section>

            <section className="ds-container mx-auto py-24">
                <div className="grid grid-cols-12 gap-6">
                    <div className="ds-card ds-card-about col-span-12 md:col-span-6 flex flex-col gap-6 p-10!">
                        <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase">
                            ⸺ About us
                        </span>
                        <h3 className="font-space text-[32px] leading-10">
                            Turning Student Potential Into Experience
                        </h3>
                        <p className="opacity-75 text-[16px] font-hanken font-light leading-6">
                            FCAI E-Club is a student-led community at the
                            Faculty of Computing and Artificial Intelligence,
                            Cairo University. We create opportunities for
                            students to learn beyond the classroom, develop
                            practical skills, work with others, explore
                            entrepreneurship, and turn ideas into action.
                        </p>
                        <Link
                            href={"/about"}
                            className="text-sm text-primary tracking-wider font-mono hover:underline"
                        >
                            Read Our story{" "}
                            <ArrowRight className="inline" size={16} />
                        </Link>
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
                        <div className="flex justify-between">
                            <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase">
                                ⸺ Upcoming Events
                            </span>
                            <span className="text-[12px] text-on-surface-variant text-end font-medium font-mono tracking-widest uppercase hover:underline cursor-pointer">
                                <Link href={"/events"}>View All Events</Link>
                            </span>
                        </div>
                        {EVENTS.map((e) => (
                            <div
                                className="ds-card flex flex-wrap gap-6 p-6!"
                                key={e.title}
                            >
                                <div className="flex flex-col flex-1 gap-3">
                                    <span className="ds-badge-outline w-fit mb-2">
                                        <Calendar size={16} />
                                        {e.date}
                                    </span>
                                    <h3 className="font-space text-2xl leading-8 text-on-surface">
                                        {e.title}
                                    </h3>
                                    <p className="text-[16px] font-hanken font-light max-w-112.5 leading-6 text-on-surface-variant line-clamp-3">
                                        {e.description}
                                    </p>
                                    <ul className="flex flex-col gap-4 mt-4">
                                        <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1">
                                            <MapPin size={16} /> {e.location}
                                        </li>
                                        <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1">
                                            <Clock size={16} /> {e.time}
                                        </li>
                                    </ul>
                                </div>
                                <div className="rounded-3xl cursor-pointer hover:-translate-y-1 transition-all self-center text-primary border-primary border h-fit p-2">
                                    <Link href={`/events/${e.slug}`}>
                                        <ArrowRight size={24} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ds-container mx-auto py-24">
                <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase block mb-6">
                    ⸺ Testimonials
                </span>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t) => (
                        <div className="ds-card space-y-6" key={t.name}>
                            <Quote className="text-primary" />
                            <p
                                style={{ fontStyle: "italic" }}
                                className="text-[16px] mb-10 leading-6 font-hanken opacity-85"
                            >
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="flex gap-4">
                                <div className="ds-card-accent rounded-4xl! w-fit flex items-center p-2!">
                                    <User />
                                </div>
                                <div className="font-mono flex flex-col justify-center">
                                    <h5 className="text-sm">{t.name}</h5>
                                    <p className="text-[10px] text-on-surface-variant">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ds-container mx-auto py-24 pb-48">
                <span className="block text-center mb-10 text-[12px] text-on-surface-variant font-medium font-mono tracking-widest uppercase">
                    Our Partners & Collaborations
                </span>
                <div className="flex overflow-x-auto scrollbar-hide gap-10">
                    {PARTNERS.map((p) => (
                        <Image
                            src={p.link}
                            key={p.title}
                            alt="Partner"
                            width={64}
                            height={64}
                            className="block w-24 h-24 mx-auto"
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
