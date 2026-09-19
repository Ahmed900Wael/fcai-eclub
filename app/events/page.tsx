import { getEvents } from "@/services/events";
import UpcomingEvents from "./upcoming-events";
import PastEvents from "./past-events";

const Events = async () => {
    const events: Event[] | null = await getEvents();

    return (
        <div className="bg-[#0D1B2A] relative">
            <main className="min-h-[75vh] flex flex-col justify-center text-center ds-container mx-auto">
                <div className="absolute top-0 left-0 w-lg hidden sm:block h-120 blur-3xl bg-primary/10 rounded-full"></div>
                <h1 className="font-space text-6xl font-bold capitalize mb-8">
                    Events <span className="normal-case">and</span> Bootcamps
                </h1>
                <p className="text-lg opacity-85 leading-7 font-hanken max-w-3xl mx-auto">
                    From technical workshops to entrepreneurship and
                    skill-building sessions, learn from experts, explore new
                    ideas, and gain practical experience.
                </p>
            </main>

            <section className="ds-container py-24 mx-auto">
                <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase block mb-10">
                    ⸺ Upcoming Events
                </span>
                <UpcomingEvents events={events?.slice(0, 2) ?? []} />
            </section>

            <section className="ds-container py-24 mx-auto">
                <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase block mb-10">
                    ⸺ Past Events
                </span>
                <PastEvents events={events?.slice(2) ?? []} />
            </section>
        </div>
    );
};

export default Events;
