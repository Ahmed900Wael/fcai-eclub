import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Brain,
    BriefcaseBusiness,
    Calendar,
    Clock,
    Code,
    MapPin,
    Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
    return (
        <div className="bg-[#0D1B2A]">
            <main className="min-h-[75vh] relative flex flex-col items-start justify-center text-start container mx-auto">
                <span className="ds-badge w-fit mb-4" data-animate="hero-badge">
                    ● Upcoming Session
                </span>
                <h1 className="font-space text-[4rem] font-bold capitalize mb-4">
                    Workshops & Bootcamps
                </h1>
                <p className="text-lg opacity-85 leading-7 font-hanken max-w-3xl">
                    FCAI E-club is A community for creative minds to shape the
                    future. Gain practical experience, explore new ideas, and
                    connect with leaders driving change in the tech world.
                </p>
            </main>

            <section className="container py-24 mx-auto">
                <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase block mb-10">
                    ⸺ Upcoming Signals
                </span>
                <div className="grid grid-cols-12 grid-rows-2 gap-6">
                    <div
                        className="col-span-8 ds-card flex flex-col justify-center p-7!"
                        style={{
                            backgroundImage: "url('/event-1.png')",
                            backgroundSize: "cover",
                            backgroundColor: "rgba(0,0,0,0.95)",
                        }}
                    >
                        <div className="flex item-center justify-between mb-6">
                            <span className="ds-badge">Hackathon</span>
                            <span className="ds-badge-outline">
                                <Calendar size={16} />
                                Oct 24-26
                            </span>
                        </div>
                        <h4 className="font-montserrat font-semibold text-[32px] mb-2 leading-10">
                            Future Compute Hackathon '24
                        </h4>
                        <p className="font-hanken text-[16px] leading-6 font-light text-[#BDC8D1] max-w-138 mb-8">
                            A 48-hour intensive building session focused on
                            decentralized AI and next-gen computing
                            architectures. Build the infrastructure of tomorrow.
                        </p>
                        <Button className="ds-btn w-fit font-mono">
                            Register Now →
                        </Button>
                    </div>
                    <div className="col-span-4 ds-card flex flex-col justify-center p-7!">
                        <span className="ds-badge w-fit mb-4">Hackathon</span>
                        <h4 className="font-montserrat font-semibold text-[32px] mb-4 leading-10">
                            Intro to Web3 Architectures
                        </h4>
                        <ul className="flex flex-col gap-3 mb-14">
                            <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1.5">
                                <MapPin className="text-primary" size={16} />{" "}
                                Lab 402, Engineering Bldg
                            </li>
                            <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1.5">
                                <Clock className="text-primary" size={16} />
                                Nov 05, 18:00
                            </li>
                        </ul>
                        <Button className="ds-btn-outline" size="sm">
                            RSVP
                        </Button>
                    </div>
                    <div className="col-span-4 ds-card flex flex-col justify-center p-7!">
                        <span className="ds-badge w-fit mb-4">
                            Founder Talk
                        </span>
                        <h4 className="font-montserrat font-semibold text-[32px] mb-4 leading-10">
                            Scaling from 0 to 1
                        </h4>
                        <ul className="flex flex-col gap-3 mb-14">
                            <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1.5">
                                <MapPin className="text-primary" size={16} />{" "}
                                Lab 402, Engineering Bldg
                            </li>
                            <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1.5">
                                <Clock className="text-primary" size={16} />
                                Nov 12, 19:00
                            </li>
                        </ul>
                        <Button className="ds-btn-outline" size="sm">
                            RSVP
                        </Button>
                    </div>
                    <div
                        className="col-span-8 ds-card flex flex-col justify-center p-7!"
                        // style={{
                        //     backgroundImage: "url('/event-1.png')",
                        //     backgroundSize: "cover",
                        //     backgroundColor: "rgba(0,0,0,0.95)",
                        // }}
                    >
                        <div className="flex item-center justify-between mb-6">
                            <span className="ds-badge">Bootcamp</span>
                            <span className="ds-badge-outline">
                                <Calendar size={16} />
                                Nov 20 - 24
                            </span>
                        </div>
                        <h4 className="font-montserrat font-semibold text-[32px] mb-2 leading-10">
                            Advanced React Patterns
                        </h4>
                        <p className="font-hanken text-[16px] leading-6 font-light text-[#BDC8D1] max-w-138 mb-8">
                            A deep dive into performance optimization and state
                            management for complex applications.
                        </p>
                        <Button className="ds-btn w-fit font-mono">
                            View Details →
                        </Button>
                    </div>
                </div>
            </section>

            <section className="container py-24 mx-auto">
                <ul className="border-b border-b-[#303A45] flex mb-10">
                    <li className="font-mono text-sm leading-3.5 text-[#BEC7D4] py-6 px-5 cursor-pointer hover:text-primary hover:border-b hover:border-b-primary">
                        All Tracks
                    </li>
                    <li className="font-mono text-sm leading-3.5 text-[#BEC7D4] py-6 px-5 cursor-pointer hover:text-primary hover:border-b hover:border-b-primary">
                        Technical
                    </li>
                    <li className="font-mono text-sm leading-3.5 text-[#BEC7D4] py-6 px-5 cursor-pointer hover:text-primary hover:border-b hover:border-b-primary">
                        Soft Skills
                    </li>
                    <li className="font-mono text-sm leading-3.5 text-[#BEC7D4] py-6 px-5 cursor-pointer hover:text-primary hover:border-b hover:border-b-primary">
                        Business
                    </li>
                </ul>
                <div className="grid grid-cols-12 grid-rows-2 gap-6">
                    <div className="ds-card col-span-4 flex flex-col p-7!">
                        <div className="flex item-center justify-between mb-5">
                            <span className="ds-badge-outline">
                                <Calendar size={16} />
                                Nov 15, 2024
                            </span>
                            <span className="ds-status-open">● Open</span>
                        </div>
                        <div className="flex justify-start items-center font-mono text-[12px] leading-3 tracking-widest mb-2 text-primary gap-2 uppercase">
                            <Code size={16} /> Technical
                        </div>
                        <h4 className="font-space text-2xl leading-8 mb-4">
                            Advanced React Patterns
                        </h4>
                        <p className="font-hanken flex-1 text-sm leading-5 mb-8 text-[#BEC7D4]">
                            Deep dive into advanced state management, render
                            optimization, and custom hooks architecture for
                            scalable enterprise applications.
                        </p>
                        <hr />
                        <div className="flex font-mono hover:text-primary text-sm leading-3.5 tracking-widest font-extralight capitalize items-center justify-between mt-4">
                            <Link href="/about" className="flex-1">
                                Read More
                            </Link>
                            <ArrowRight size={24} />
                        </div>
                    </div>
                    <div className="ds-card col-span-4 p-7!">
                        <div className="flex item-center justify-between mb-5">
                            <span className="ds-badge-outline">
                                <Calendar size={16} />
                                Nov 22, 2024
                            </span>
                            <span className="ds-status-closed">● Closed</span>
                        </div>
                        <div className="flex justify-start items-center font-mono text-[12px] leading-3 tracking-widest mb-2 text-primary gap-2 uppercase">
                            <BriefcaseBusiness size={16} /> Business
                        </div>
                        <h4 className="font-space text-2xl leading-8 mb-4">
                            Startup Pitching 101
                        </h4>
                        <p className="font-hanken flex-1 text-sm leading-5 mb-8 text-[#BEC7D4]">
                            Learn how to structure your pitch deck, articulate
                            your value proposition, and handle investor Q&A with
                            confidence.
                        </p>
                        <hr />
                        <div className="flex font-mono hover:text-primary text-sm leading-3.5 tracking-widest font-extralight capitalize items-center justify-between mt-4">
                            <Link href="/about" className="flex-1">
                                View Recording
                            </Link>
                            <Video size={24} />
                        </div>
                    </div>
                    <div className="ds-card col-span-4 flex flex-col row-span-2 p-0!">
                        <Image
                            src={"/bootcamp.png"}
                            alt="Bootcamp"
                            className="w-full"
                            width={316}
                            height={158}
                        />
                        <div className="p-7! flex flex-col flex-1">
                            <div className="flex item-center justify-between mb-5">
                                <span className="ds-badge-outline">
                                    <Calendar size={16} />
                                    Dec 05, 2024
                                </span>
                                <span className="ds-status-open">● Open</span>
                            </div>
                            <div className="flex justify-start items-center font-mono text-[12px] leading-3 tracking-widest mb-2 text-primary gap-2 uppercase">
                                <Brain size={16} /> Soft Skills
                            </div>
                            <h4 className="font-space text-2xl leading-8 mb-4">
                                Engineering Leadership Bootcamp
                            </h4>
                            <p className="font-hanken flex-1 text-sm leading-5 mb-8 text-[#BEC7D4]">
                                Transitioning from an individual contributor to
                                a team lead. An intensive weekend focusing on
                                technical delegation, code review etiquette, and
                                mentoring junior developers in a fast-paced
                                environment.
                            </p>
                            <hr />
                            <div className="flex font-mono hover:text-primary text-sm leading-3.5 tracking-widest font-extralight capitalize items-center justify-between mt-4">
                                <Link href="/about" className="flex-1">
                                    Read More
                                </Link>
                                <ArrowRight size={24} />
                            </div>
                        </div>
                    </div>
                    <div className="ds-card col-span-4 flex flex-col p-7!">
                        <div className="flex item-center justify-between mb-5">
                            <span className="ds-badge-outline">
                                <Calendar size={16} />
                                Dec 12, 2024
                            </span>
                            <span className="ds-status-open">● Open</span>
                        </div>
                        <div className="flex justify-start items-center font-mono text-[12px] leading-3 tracking-widest mb-2 text-primary gap-2 uppercase">
                            <Code size={16} /> Technical
                        </div>
                        <h4 className="font-space text-2xl leading-8 mb-4">
                            Vector Databases & AI
                        </h4>
                        <p className="font-hanken flex-1 text-sm leading-5 mb-8 text-[#BEC7D4]">
                            Implementing semantic search and RAG architectures
                            using modern vector stores. Hands- on integration
                            with LLM APIs.
                        </p>
                        <hr />
                        <div className="flex font-mono hover:text-primary text-sm leading-3.5 tracking-widest font-extralight capitalize items-center justify-between mt-4">
                            <Link href="/about" className="flex-1">
                                Read More
                            </Link>
                            <ArrowRight size={24} />
                        </div>
                    </div>
                    <div className="ds-card col-span-4 flex flex-col p-7!">
                        <div className="flex item-center justify-between mb-5">
                            <span className="ds-badge-outline">
                                <Calendar size={16} />
                                Dec 12, 2024
                            </span>
                            <span className="ds-status-open">● Open</span>
                        </div>
                        <div className="flex justify-start items-center font-mono text-[12px] leading-3 tracking-widest mb-2 text-primary gap-2 uppercase">
                            <Code size={16} /> Technical
                        </div>
                        <h4 className="font-space text-2xl leading-8 mb-4">
                            Vector Databases & AI
                        </h4>
                        <p className="font-hanken flex-1 text-sm leading-5 mb-8 text-[#BEC7D4]">
                            Implementing semantic search and RAG architectures
                            using modern vector stores. Hands- on integration
                            with LLM APIs.
                        </p>
                        <hr />
                        <div className="flex font-mono hover:text-primary text-sm leading-3.5 tracking-widest font-extralight capitalize items-center justify-between mt-4">
                            <Link href="/about" className="flex-1">
                                Read More
                            </Link>
                            <ArrowRight size={24} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
