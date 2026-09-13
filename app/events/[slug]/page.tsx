import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

import "../style.css";

const EventsDetail = () => {
    return (
        <div className="bg-[#0D1B2A]">
            <main className="min-h-[75vh] relative flex items-center justify-center text-start container mx-auto">
                <div
                    style={{
                        backgroundImage: "url('/workshop.png')",
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
                            Advanced Prompt Engineering & AI Workflows
                        </h1>
                        <p className="max-w-167.5 font-hanken text-lg leading-7 text-[#BDC8D1]">
                            Master the art of communicating with Large Language
                            Models to automate complex workflows and build
                            intelligent systems.
                        </p>
                    </div>
                </div>
            </main>

            <section className="container mx-auto grid grid-cols-12 gap-6 pb-24">
                <section className="col-span-8 space-y-6">
                    <div className="ds-card p-10!">
                        <h3 className="font-space font-bold text-2xl leading-8 mb-4">
                            About
                        </h3>
                        <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                            In this intensive 4-hour workshop, you will dive
                            deep into the mechanics of prompt engineering,
                            moving beyond basic queries to structure complex,
                            multi-step prompts for generative AI models.
                        </p>
                        <br />
                        <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                            We will cover advanced techniques such as Few-Shot
                            prompting, Chain-of-Thought reasoning, and setting
                            up context constraints to ensure reliable and
                            scalable outputs. By the end of this session, you
                            will be equipped to integrate AI capabilities into
                            your own engineering workflows.
                        </p>
                    </div>
                    <div className="ds-card p-10!">
                        <h3 className="font-space font-bold text-2xl leading-8 mb-5">
                            Instructor
                        </h3>
                        <div className="flex gap-4 items-center">
                            <Image
                                src="/instructor.png"
                                width={62}
                                height={62}
                                className="rounded-[12px] border border-gray-500 overflow-hidden"
                                alt="Instructor"
                            />
                            <div>
                                <h4 className="font-montserrat text-lg leading-7 text-[#E2E3DF]">
                                    Dr. Sarah Chen
                                </h4>
                                <span className="font-mono font-medium text-[12px] text-primary uppercase">
                                    Lead AI Researcher
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="ds-card p-10!">
                        <h3 className="font-space font-bold text-2xl leading-8 mb-8">
                            Timeline
                        </h3>
                        <div className="flex flex-col gap-10 justify-center border-l">
                            <div className="flex flex-col gap-2 row row-active">
                                <h4 className="font-mono text-[16px] leading-3 tracking-widest text-primary">
                                    10:00 AM - Foundations
                                </h4>
                                <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                    Understanding LLM architecture and basic
                                    prompt structures.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 row">
                                <h4 className="font-mono text-[16px] leading-3 tracking-widest text-primary">
                                    11:30 AM - Advanced Techniques
                                </h4>
                                <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                    Chain-of-Thought, ReAct frameworks, and
                                    context windows.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 row">
                                <h4 className="font-mono text-[16px] leading-3 tracking-widest text-primary">
                                    01:00 PM - Practical Implementation
                                </h4>
                                <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                    Building a custom workflow using API
                                    integration.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 row">
                                <h4 className="font-mono text-[16px] leading-3 tracking-widest text-primary">
                                    01:00 PM - Practical Implementation
                                </h4>
                                <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                    Building a custom workflow using API
                                    integration.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 row">
                                <h4 className="font-mono text-[16px] leading-3 tracking-widest text-primary">
                                    01:00 PM - Practical Implementation
                                </h4>
                                <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                    Building a custom workflow using API
                                    integration.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 row">
                                <h4 className="font-mono text-[16px] leading-3 tracking-widest text-primary">
                                    01:00 PM - Practical Implementation
                                </h4>
                                <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                    Building a custom workflow using API
                                    integration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-4 space-y-6">
                    <div className="ds-card p-10!">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-2">
                                <Calendar size={16} className="text-primary" />
                                <span className="font-mono text-[12px] leading-3 tracking-widest text-[#BEC7D4]">
                                    Oct 24, 2024
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock size={16} className="text-primary" />
                                <span className="font-mono text-[12px] leading-3 tracking-widest text-[#BEC7D4]">
                                    10:00 AM - 01:00 PM
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-primary" />
                                <span className="font-mono text-[12px] leading-3 tracking-widest text-[#BEC7D4]">
                                    Online Webinar
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="ds-card p-10! flex flex-col gap-2">
                        <span className="font-space font-bold text-7xl leading-16 tracking-tight text-primary text-center">
                            14
                        </span>
                        <h4 className="text-center font-mono text-sm leading-4 tracking-widest uppercase font-extralight mb-2">
                            Spot Remaining
                        </h4>
                        <div className="h-2.5 w-full rounded-full bg-black">
                            <div
                                style={{ width: "75%" }}
                                className="h-2.5 bg-primary rounded-full"
                            ></div>
                        </div>
                    </div>
                    <div className="ds-card p-10! flex flex-col gap-2">
                        <h4 className="font-mono text-sm leading-4 tracking-widest uppercase font-extralight mb-2">
                            Secure Your Spot
                        </h4>
                        <Button size={"sm"} className="ds-btn font-mono tracking-wider uppercase">
                            Register Now →
                        </Button>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default EventsDetail;
