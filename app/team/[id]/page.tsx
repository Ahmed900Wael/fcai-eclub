import { Briefcase, Code, Mail } from "lucide-react";
import Image from "next/image";

import "./style.css";

const MemberProfile = () => {
    return (
        <div className="bg-[#0D1B2A]">
            {/* Hero */}
            <main className="min-h-[75vh] relative flex items-center justify-center text-start container mx-auto">
                <div className="flex-1 py-10 min-h-120 grid grid-cols-12 gap-6">
                    <div className="col-span-4">
                        <div className="ds-card p-10! h-full">
                            <Image
                                src={"/member.png"}
                                width={192}
                                height={192}
                                className="rounded-[12px] overflow-hidden block mx-auto"
                                alt="Member"
                            />
                            <div className="flex flex-col gap-2 text-center mb-10">
                                <h3 className="font-space font-bold text-[38px] leading-10">
                                    Alex Chen
                                </h3>
                                <span className="uppercase block font-mono font-light text-[16px] leading-5 tracking-wide text-primary mt-4">
                                    Technical Lead
                                </span>
                                <p className="font-mono font-light text-[12px] leading-4">
                                    Technical Committee
                                </p>
                            </div>
                            <ul className="flex gap-4 justify-center">
                                <li className="p-2 border-primary border-2 cursor-pointer rounded-3xl">
                                    <Code size={28} className="text-primary" />
                                </li>
                                <li className="p-2 border-primary border-2 cursor-pointer rounded-3xl">
                                    <Briefcase
                                        size={28}
                                        className="text-primary"
                                    />
                                </li>
                                <li className="p-2 border-primary border-2 cursor-pointer rounded-3xl">
                                    <Mail size={28} className="text-primary" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-8 flex flex-col gap-6 h-full">
                        <div className="ds-card p-10! flex-1">
                            <h3 className="font-space font-bold text-2xl text-primary leading-8 mb-4">
                                About Me
                            </h3>
                            <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                Passionate about building scalable architectures
                                and exploring the frontiers of artificial
                                intelligence. At FCAI E-club, I focus on
                                integrating machine learning models into
                                high-velocity web applications, ensuring
                                seamless user experiences backed by robust
                                computational power.
                            </p>
                            <br />
                            <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1]">
                                My approach combines rigorous engineering
                                principles with a design-first mindset, aiming
                                to create interfaces that feel like a true
                                extension of human capability. Always learning,
                                always iterating.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-6">
                            <div className="ds-card p-8! flex-1">
                                <span className="font-space font-bold text-6xl leading-16 tracking-tight text-primary text-center block">
                                    24
                                </span>
                                <h4 className="mt-4 uppercase font-mono font-light text-[12px] leading-4 tracking-wider text-center">
                                    Projects Shipped
                                </h4>
                            </div>
                            <div className="ds-card p-8! flex-1">
                                <span className="font-space font-bold text-6xl leading-16 tracking-tight text-primary text-center block">
                                    12K
                                </span>
                                <h4 className="mt-4 uppercase font-mono font-light text-[12px] leading-4 tracking-wider text-center">
                                    Lines of Code
                                </h4>
                            </div>
                            <div className="ds-card p-8! flex-1">
                                <span className="font-space font-bold text-6xl leading-16 tracking-tight text-primary text-center block">
                                    17
                                </span>
                                <h4 className="mt-4 uppercase font-mono font-light text-[12px] leading-4 tracking-wider text-center">
                                    Workshops Led
                                </h4>
                            </div>
                            <div className="ds-card p-8! flex-1">
                                <span className="font-space font-bold text-6xl leading-16 tracking-tight text-primary text-center block">
                                    3
                                </span>
                                <h4 className="mt-4 uppercase font-mono font-light text-[12px] leading-4 tracking-wider text-center">
                                    Years Active
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="container py-24 mx-auto">
                <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase block mb-10">
                    ⸺ Key Contributions
                </span>
                <div className="ds-card p-10!">
                    <div className="flex flex-col gap-10 justify-center border-l">
                        <div className="flex flex-col gap-2 row row-active">
                            <span className="font-mono font-light text-[12px] leading-4">
                                Q3 2023
                            </span>
                            <h4 className="font-space font-bold text-2xl leading-8">
                                Core System Overhaul
                            </h4>
                            <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1] max-w-222.5">
                                Led the migration of the club's internal project
                                management tool to a microservices architecture,
                                improving system uptime by 99.9% and reducing
                                latency across the board.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 row">
                            <span className="font-mono font-light text-[12px] leading-4">
                                Q1 2024
                            </span>
                            <h4 className="font-space font-bold text-2xl leading-8">
                                AI-Driven UI Workshop
                            </h4>
                            <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1] max-w-222.5">
                                Designed and delivered a comprehensive workshop
                                series on generative AI for UI design, attended
                                by over 200 students across the engineering
                                faculty.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-24 mx-auto">
                <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase block mb-10">
                    ⸺ Work Documentation
                </span>
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <Image
                            src="/work-1.png"
                            loading="eager"
                            alt="Work 1"
                            width={600}
                            height={400}
                            className="block max-w-full aspect-3/2"
                        />
                    </div>
                    <div>
                        <Image
                            src="/work-2.png"
                            loading="eager"
                            alt="Work 2"
                            width={600}
                            height={400}
                            className="block max-w-full aspect-3/2"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MemberProfile;
