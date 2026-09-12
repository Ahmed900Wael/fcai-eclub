import { Button } from "@/components/ui/button";
import { Code, GitFork, Megaphone } from "lucide-react";
import Image from "next/image";

const Team = () => {
    return (
        <div className="bg-[#09141E]">
            <main className="min-h-[75vh] relative grid gap-5.5 place-content-center text-center">
                <div className="absolute top-0 left-0 w-lg h-120 blur-3xl bg-primary/10 rounded-full"></div>
                <span
                    className="ds-badge w-fit mx-auto"
                    data-animate="hero-badge"
                >
                    ● Engineering the future
                </span>
                <h1 className="font-space font-bold text-[64px] leading-17.5 tracking-tighter">
                    Meet the <span className="text-primary">Visionaries</span>
                </h1>
                <p className="text-lg text-[#BEC7D4] leading-7 font-hanken max-w-160">
                    The architects of tomorrow&apos;s solutions. A collective of
                    engineers, designers, and strategists building the ecosystem
                    of innovation at FCAI.
                </p>
            </main>

            <section className="container py-24 mx-auto">
                <h2 className="font-space font-semibold text-[32px] leading-10.5 text-[#D9E4F1] ps-4 mb-12 border-s-4 border-primary">
                    All Committees
                </h2>
                <div className="grid grid-cols-3 gap-6">
                    <div className="ds-card p-10!">
                        <div className="p-4 text-primary border-[hsla(210,100%,80%,0.2)] rounded-sm bg-[#303A45] w-fit mb-8">
                            <Code />
                        </div>
                        <h3 className="font-space font-semibold text-2xl leading-8 text-[#D9E4F1] mb-2">
                            Technical
                        </h3>
                        <p className="font-hanken text-sm leading-5 text-[#BEC7D4] max-w-66.25 mb-6">
                            Architecting robust software solutions and hardware
                            prototypes. The engine room of innovation.
                        </p>
                        <span className="font-mono text-sm leading-3.5 tracking-wider text-[#B6C6ED]">
                            24 Members
                        </span>
                    </div>
                    <div className="ds-card p-10!">
                        <div className="p-4 text-primary border-[hsla(210,100%,80%,0.2)] rounded-sm bg-[#303A45] w-fit mb-8">
                            <Megaphone />
                        </div>
                        <h3 className="font-space font-semibold text-2xl leading-8 text-[#D9E4F1] mb-2">
                            Marketing
                        </h3>
                        <p className="font-hanken text-sm leading-5 text-[#BEC7D4] max-w-66.25 mb-6">
                            Broadcasting our vision. Crafting compelling
                            narratives and engaging our academic community.
                        </p>
                        <span className="font-mono text-sm leading-3.5 tracking-wider text-[#B6C6ED]">
                            18 Members
                        </span>
                    </div>
                    <div className="ds-card p-10!">
                        <div className="p-4 text-primary border-[hsla(210,100%,80%,0.2)] rounded-sm bg-[#303A45] w-fit mb-8">
                            <GitFork />
                        </div>
                        <h3 className="font-space font-semibold text-2xl leading-8 text-[#D9E4F1] mb-2">
                            Logistics
                        </h3>
                        <p className="font-hanken text-sm leading-5 text-[#BEC7D4] max-w-66.25 mb-6">
                            Orchestrating complex events and maintaining the
                            structural integrity of club operations.
                        </p>
                        <span className="font-mono text-sm leading-3.5 tracking-wider text-[#B6C6ED]">
                            15 Members
                        </span>
                    </div>
                </div>
            </section>

            <section className="container py-24 mx-auto">
                <h2 className="font-space font-semibold text-[32px] leading-10.5 text-[#D9E4F1] ps-4 mb-12 border-s-4 border-primary">
                    Team Members
                </h2>
                <div className="flex justify-center gap-4">
                    <div className="ds-tab">All</div>
                    <div className="ds-tab">Technical</div>
                    <div className="ds-tab">Marketing</div>
                    <div className="ds-tab">Logistics</div>
                </div>
                <div className="grid grid-cols-4 gap-10 my-16">
                    <div className="ds-card">
                        <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                            <Image
                                src="/user-1.png"
                                alt="User 1"
                                width={85}
                                height={85}
                            />
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <h3 className="font-montserrat font-semibold text-lg leading-7">
                                Ahmed Hassan
                            </h3>
                            <p className="font-mono text-[12px] leading-4 text-on-surface-variant">
                                Technical Committee
                            </p>
                            <span className="uppercase block mt-4 font-mono font-light text-[12px] leading-4 tracking-wide text-primary">
                                Tech Lead
                            </span>
                        </div>
                    </div>
                    <div className="ds-card">
                        <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                            <Image
                                src="/user-2.png"
                                alt="User 2"
                                width={85}
                                height={85}
                            />
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <h3 className="font-montserrat font-semibold text-lg leading-7">
                                Nour Khaled
                            </h3>
                            <p className="font-mono text-[12px] leading-4 text-on-surface-variant">
                                Marketing Committee
                            </p>
                            <span className="uppercase block mt-4 font-mono font-light text-[12px] leading-4 tracking-wide text-primary">
                                Head of PR
                            </span>
                        </div>
                    </div>
                    <div className="ds-card">
                        <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                            <Image
                                src="/user-3.png"
                                alt="User 3"
                                width={85}
                                height={85}
                            />
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <h3 className="font-montserrat font-semibold text-lg leading-7">
                                Omar Tariq
                            </h3>
                            <p className="font-mono text-[12px] leading-4 text-on-surface-variant">
                                Logistics Committee
                            </p>
                            <span className="uppercase block mt-4 font-mono font-light text-[12px] leading-4 tracking-wide text-primary">
                                Event Coordinator
                            </span>
                        </div>
                    </div>
                    <div className="ds-card">
                        <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                            <Image
                                src="/user-4.png"
                                alt="User 4"
                                width={85}
                                height={85}
                            />
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <h3 className="font-montserrat font-semibold text-lg leading-7">
                                Salma Youssef
                            </h3>
                            <p className="font-mono text-[12px] leading-4 text-on-surface-variant">
                                Technical Committee
                            </p>
                            <span className="uppercase block mt-4 font-mono font-light text-[12px] leading-4 tracking-wide text-primary">
                                UI Designer
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <Button className="ds-btn ds-btn-outline">
                        Load More Members
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Team;
