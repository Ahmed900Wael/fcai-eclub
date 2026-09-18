import { getEvents, getBootcamps } from "@/services/events";
import EventsGrid from "./events-grid";
import TrendingEvents from "./new-events";

const Events = async () => {
    const events: Event[] | null = await getBootcamps();
    const trendingEvents: Event[] | null = await getEvents();

    return (
        <div className="bg-[#0D1B2A]">
            <main className="min-h-[75vh] relative flex flex-col items-start justify-center text-start container mx-auto">
                <span className="ds-badge w-fit mb-4" data-animate="hero-badge">
                    ● Upcoming Sessions
                </span>
                <h1 className="font-space text-[4rem] font-bold capitalize mb-4">
                    Workshops & Bootcamps
                </h1>
                <p className="text-lg opacity-85 leading-7 font-hanken max-w-3xl">
                    From technical workshops to entrepreneurship and
                    skill-building sessions, learn from experts, explore new
                    ideas, and gain practical experience.
                </p>
            </main>

            <section className="container py-24 mx-auto">
                <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase block mb-10">
                    ⸺ Upcoming Events
                </span>
                <TrendingEvents events={trendingEvents} />
            </section>

            <section className="container py-24 mx-auto">
                <EventsGrid events={events} />
            </section>
        </div>
    );
};

export default Events;
