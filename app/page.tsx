"use client";

import { Button } from "@/components/ui/button";
import { EVENTS, PARTNERS, TESTIMONIALS } from "@/constants";
import { ArrowRight, Clock, MapPin, Quote, Rocket, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GsapAnimations from "@/components/gsap-provider";

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
                    <span className="ds-badge" data-animate="hero-badge">
                        FCAI E-Club Innovation Hub
                    </span>
                    <Image
                        width={1700}
                        height={1700}
                        src="/banner.png"
                        alt="banner"
                        data-animate="hero-banner"
                    />
                    <p
                        className="text-[#BEC7D4] text-xl font-hanken max-w-[68ch] text-center"
                        data-animate="hero-paragraph"
                    >
                        Empowering student entrepreneurs and tech innovators at
                        the FCAI-CU to build the next generation of scalable
                        solutions.
                    </p>
                    <Button
                        className="ds-btn-outline font-mono"
                        data-animate="hero-button"
                    >
                        Explore Event <ArrowRight />
                    </Button>
                </div>
            </main>

            <section
                className="container mx-auto py-24"
                data-animate="stats-section"
            >
                <div className="grid grid-cols-4 grid-rows-2 gap-6">
                    <div
                        className="col-span-2 row-span-2 ds-stat-card gap-2 justify-center"
                        data-animate="stat"
                    >
                        <span className="ds-stat-number text-6xl!">500+</span>
                        <h3 className="ds-stat-label mb-2">Active Members</h3>
                        <p className="text-sm max-w-120">
                            A thriving community of developers, designers, and
                            visionaries collaborating on future-forward tech.
                        </p>
                    </div>
                    <div
                        className="ds-stat-card ds-stat-inline gap-2 justify-center"
                        data-animate="stat"
                    >
                        <span className="ds-stat-number font-bold">15+</span>
                        <h3 className="ds-stat-label">Shipped Projects</h3>
                    </div>
                    <div
                        className="ds-stat-card ds-stat-inline gap-2 justify-center bg-[#16212A]!"
                        data-animate="stat"
                    >
                        <span className="ds-stat-number">50+</span>
                        <h3 className="ds-stat-label">Major Events Hosted</h3>
                    </div>
                    <div
                        className="row-span-1 col-span-2 col-start-3 relative ds-stat-card gap-2 justify-center py-12!"
                        data-animate="stat"
                    >
                        <Rocket
                            className="absolute right-8 opacity-10"
                            size={120}
                        />
                        <span className="ds-stat-number">20+</span>
                        <h3 className="text-sm tracking-wider font-mono text-primary">
                            Industry Partners
                        </h3>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-24">
                <div className="grid grid-cols-12 gap-6">
                    <div
                        className="ds-card ds-card-about col-span-5 flex flex-col gap-6 p-10!"
                        data-animate="about-card"
                    >
                        <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase">
                            ⸺ About us
                        </span>
                        <h3 className="font-space text-[32px] leading-10">
                            Incubating the next wave of technical founders.
                        </h3>
                        <p className="opacity-75 text-[16px] font-hanken font-light leading-6">
                            FCAI E-club is a student-led organization dedicated
                            to bridging the gap between theoretical knowledge
                            and practical innovation. We provide a platform for
                            aspiring engineers and entrepreneurs to collaborate,
                            build technical projects, and learn from industry
                            leaders.
                        </p>
                        <Link
                            href={"/about"}
                            className="text-sm text-primary tracking-wider font-mono hover:underline"
                        >
                            Read full story{" "}
                            <ArrowRight className="inline" size={16} />
                        </Link>
                    </div>
                    <div
                        className="col-span-7 flex flex-col gap-6"
                        data-animate="events-section"
                    >
                        <div className="flex justify-between">
                            <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase">
                                ⸺ Upcoming Signals
                            </span>
                            <span className="text-[12px] text-on-surface-variant font-medium font-mono tracking-widest uppercase hover:underline cursor-pointer">
                                View All
                            </span>
                        </div>
                        {EVENTS.map((e) => (
                            <div
                                className="ds-card flex gap-6 p-6!"
                                key={e.title}
                                data-animate="event-card"
                            >
                                <div className="ds-card-accent bg-[#0D1B2A]! h-fit text-center aspect-square">
                                    <span className="font-montserrat font-semibold text-2xl text-primary mb-1 block">
                                        {e.day}
                                    </span>
                                    <p className="text-on-surface-variant uppercase font-mono text-sm leading-4">
                                        {e.month}
                                    </p>
                                </div>
                                <div className="flex flex-col flex-1 gap-3">
                                    <h3 className="font-space text-2xl leading-8 text-on-surface">
                                        {e.title}
                                    </h3>
                                    <p className="text-[16px] font-hanken font-light max-w-112.5 leading-6 text-on-surface-variant">
                                        {e.description}
                                    </p>
                                    <ul className="flex gap-4">
                                        <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1">
                                            <MapPin size={16} /> {e.location}
                                        </li>
                                        <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1">
                                            <Clock size={16} /> {e.time}
                                        </li>
                                    </ul>
                                </div>
                                <div className="rounded-3xl cursor-pointer hover:-translate-y-1 transition-all self-center text-primary border-primary border h-fit p-2">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="container mx-auto py-24"
                data-animate="testimonials-section"
            >
                <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase block mb-6">
                    ⸺ Testimonials
                </span>
                <div className="grid grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t) => (
                        <div
                            className="ds-card space-y-6"
                            key={t.name}
                            data-animate="testimonial"
                        >
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

            <section
                className="container mx-auto py-24 pb-48"
                data-animate="partners-section"
            >
                <span className="block text-center mb-10 text-[12px] text-on-surface-variant font-medium font-mono tracking-widest uppercase">
                    Backed by Industry Leaders
                </span>
                <div className="grid grid-cols-6 gap-4">
                    {PARTNERS.map((p) => (
                        <p
                            key={p}
                            className="text-center font-montserrat text-4xl font-bold text-on-surface-variant"
                            data-animate="partner"
                        >
                            {p}
                        </p>
                    ))}
                </div>
            </section>

            <GsapAnimations />
        </>
    );
}