import { Button } from "@/components/ui/button";
import { getEventImageUrl } from "@/services/events-images";
import { Calendar, Clock, MapPin } from "lucide-react";

import "./style.css";
import Link from "next/link";

const TrendingEvents = ({ events }: { events: Event[] | null }) => {
    if (!events) return;

    return (
        <div className="grid grid-rows-2 grid-cols-12 gap-6">
            {events[0] && (
                <div className="col-span-8 ds-card flex flex-col justify-between p-7!">
                    <div className="flex item-center justify-between mb-6">
                        <span className="ds-badge">{events[0].type}</span>
                        <span className="ds-badge-outline">
                            <Calendar size={16} />
                            {new Date(
                                events[0].to_date ?? "",
                            ).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                                timeZone: "UTC",
                            })}
                        </span>
                    </div>
                    <h4 className="font-montserrat font-semibold text-[32px] mb-2 leading-10">
                        {events[0].title}
                    </h4>
                    <p className="font-hanken text-[16px] leading-6 font-light text-[#BDC8D1] max-w-[80%] mb-8 line-clamp-2">
                        {events[0].description}
                    </p>
                    <Button className="ds-btn w-fit font-mono">
                        <Link href={`/events/${events[0].slug}`}>
                            Register Now →
                        </Link>
                    </Button>
                </div>
            )}
            {events[1] && (
                <div className="col-span-4 ds-card flex flex-col p-7!">
                    <span className="ds-badge w-fit mb-4">
                        {events[1].type}
                    </span>
                    <h4 className="font-montserrat font-semibold text-[32px] mb-4 leading-10">
                        {events[1].title}
                    </h4>
                    <ul className="flex flex-col gap-3 mb-14">
                        <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1.5">
                            <MapPin className="text-primary" size={16} />{" "}
                            {events[1].location}
                        </li>
                        <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1.5">
                            <Clock className="text-primary" size={16} />
                            {events[1].time}
                        </li>
                    </ul>
                    <Button className="ds-btn-outline" size="sm">
                        <Link href={`/events/${events[1].slug}`}>
                            Register Now →
                        </Link>
                    </Button>
                </div>
            )}
            {events[2] && (
                <div className="col-span-4 ds-card flex flex-col justify-center p-7!">
                    <span className="ds-badge w-fit mb-4">
                        {events[2].type}
                    </span>
                    <h4 className="font-montserrat font-semibold text-[32px] mb-4 leading-10">
                        {events[2].title}
                    </h4>
                    <ul className="flex flex-col gap-3 mb-14">
                        <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1.5">
                            <MapPin className="text-primary" size={16} />{" "}
                            {events[2].location}
                        </li>
                        <li className="font-mono text-sm leading-4 text-outline flex items-center gap-1.5">
                            <Clock className="text-primary" size={16} />
                            {events[2].time}
                        </li>
                    </ul>
                    <Button className="ds-btn-outline" size="sm">
                        <Link href={`/events/${events[2].slug}`}>
                            Register Now →
                        </Link>
                    </Button>
                </div>
            )}
            {events[3] && (
                <div className="col-span-8 ds-card flex flex-col justify-between p-7!">
                    <div className="flex item-center justify-between mb-6">
                        <span className="ds-badge">{events[3].type}</span>
                        <span className="ds-badge-outline">
                            <Calendar size={16} />
                            {new Date(
                                events[3].to_date ?? "",
                            ).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                                timeZone: "UTC",
                            })}
                        </span>
                    </div>
                    <h4 className="font-montserrat font-semibold text-[32px] mb-2 leading-10">
                        {events[3].title}
                    </h4>
                    <p className="font-hanken text-[16px] leading-6 font-light text-[#BDC8D1] max-w-[80%] mb-8 line-clamp-2">
                        {events[3].description}
                    </p>
                    <Button className="ds-btn w-fit font-mono">
                        <Link href={`/events/${events[3].slug}`}>
                            Register Now →
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    );
};

export default TrendingEvents;
