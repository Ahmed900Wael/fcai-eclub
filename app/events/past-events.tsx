"use client";

import { cn } from "@/lib/utils";
import {
    ArrowRight,
    Brain,
    BriefcaseBusiness,
    Calendar,
    Code,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const EVENTS_TRACK_ICONS = {
    Technical: <Code size={16} />,
    "Soft Skills": <Brain size={16} />,
    Business: <BriefcaseBusiness size={16} />,
};

const PastEvents = ({ events }: { events: Event[] | null }) => {
    const [selectedTab, setSelectedTab] = useState<
        "All" | "Technical" | "Business" | "Soft Skills"
    >("All");

    const filteredEvents = events?.filter((e) => {
        if (selectedTab == "All") {
            return e;
        }
        return e.track == selectedTab;
    });

    return (
        <>
            <ul className="border-b border-b-[#303A45] flex mb-10 justify-end">
                <li
                    onClick={() => setSelectedTab("All")}
                    className={cn(
                        "font-mono text-sm leading-3.5 text-[#BEC7D4] py-6 px-5 cursor-pointer hover:text-primary hover:border-b hover:border-b-primary",
                        selectedTab == "All" &&
                            "text-primary border-b border-b-primary",
                    )}
                >
                    All Tracks
                </li>
                <li
                    onClick={() => setSelectedTab("Technical")}
                    className={cn(
                        "font-mono text-sm leading-3.5 text-[#BEC7D4] py-6 px-5 cursor-pointer hover:text-primary hover:border-b hover:border-b-primary",
                        selectedTab == "Technical" &&
                            "text-primary border-b border-b-primary",
                    )}
                >
                    Technical
                </li>
                <li
                    onClick={() => setSelectedTab("Business")}
                    className={cn(
                        "font-mono text-sm leading-3.5 text-[#BEC7D4] py-6 px-5 cursor-pointer hover:text-primary hover:border-b hover:border-b-primary",
                        selectedTab == "Business" &&
                            "text-primary border-b border-b-primary",
                    )}
                >
                    Business
                </li>
                <li
                    onClick={() => setSelectedTab("Soft Skills")}
                    className={cn(
                        "font-mono text-sm leading-3.5 text-[#BEC7D4] py-6 px-5 cursor-pointer hover:text-primary hover:border-b hover:border-b-primary",
                        selectedTab == "Soft Skills" &&
                            "text-primary border-b border-b-primary",
                    )}
                >
                    Soft Skills
                </li>
            </ul>
            <div className="grid grid-cols-12 gap-6">
                {filteredEvents &&
                    filteredEvents.map((e) => (
                        <div
                            key={e.title}
                            className="ds-card col-span-12 md:col-span-6 lg:col-span-4 flex flex-col p-0!"
                        >
                            <div className="p-7 flex-1 flex flex-col">
                                <div className="flex item-center justify-between mb-5">
                                    <span className="ds-badge-outline">
                                        <Calendar size={16} />
                                        {new Date(
                                            e.from_date,
                                        ).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                            timeZone: "UTC",
                                        })}
                                    </span>
                                    <span
                                        className={cn(
                                            e.status === "completed"
                                                ? "ds-status-open"
                                                : "ds-status-closed",
                                        )}
                                    >
                                        ● {e.status.toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex justify-start items-center font-mono text-[12px] leading-3 tracking-widest mb-2 text-primary gap-2 uppercase">
                                    {EVENTS_TRACK_ICONS[e.track]} {e.track}
                                </div>
                                <h4 className="font-space text-2xl leading-8 mb-4 line-clamp-1">
                                    {e.title}
                                </h4>
                                <p className="font-hanken flex-1 text-sm leading-5 mb-16 text-[#BEC7D4] line-clamp-3">
                                    {e.description}
                                </p>
                                <hr />
                                <div className="flex font-mono hover:text-primary text-sm leading-3.5 tracking-widest font-extralight capitalize items-center justify-between mt-4">
                                    <Link
                                        href={`/events/${e.slug}`}
                                        className="flex-1"
                                    >
                                        Read More
                                    </Link>
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default PastEvents;
