import Image from "next/image";
import "./style.css";

const About = () => {
    return (
        <div className="bg-[#0D1B2A]">
            <main className="min-h-[75vh] relative grid place-content-center text-center">
                <div className="absolute top-0 left-0 w-lg hidden sm:block h-120 blur-3xl bg-primary/10 rounded-full"></div>
                <h1 className="font-space text-5xl md:text-[4rem] font-bold capitalize mb-8">
                    Engineering the <span className="text-primary">Future</span>
                </h1>
                <p className="text-sm md:text-xl opacity-85 leading-5 sm:leading-7 font-hanken max-w-[80%] sm:max-w-4xl mx-auto">
                    FCAI E-club is A community for creative minds to shape the
                    future. Gain practical experience, explore new ideas, and
                    connect with leaders driving change in the tech world.
                </p>
            </main>

            <section className="ds-container py-24 mx-auto">
                <div className="grid grid-cols-12 grid-rows-2 gap-6">
                    <div className="col-span-12 md:col-span-7 ds-card flex flex-col justify-center text-center md:text-start gap-4 p-10!">
                        <h2 className="font-space font-bold text-[32px] leading-10">
                            Our Mission
                        </h2>
                        <p className="font-hanken text-on-surface-variant text-[16px] leading-6">
                            To give students the skills, experience, and
                            connections they need to learn, build, collaborate,
                            and explore entrepreneurship beyond the classroom.
                        </p>
                    </div>
                    <div className="col-span-5 hidden md:block">
                        <Image
                            width={450}
                            height={300}
                            src="/WhatsApp Image 2026-09-15 at 19.59.01.jpeg"
                            className="min-w-full grayscale-100"
                            alt="Mission"
                        />
                    </div>
                    <div className="col-span-5 hidden md:block">
                        <Image
                            width={450}
                            height={300}
                            src="/1779383511006.jpg"
                            className="min-w-full grayscale-100"
                            alt="Vision"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-7 ds-card flex flex-col justify-center text-center md:text-start gap-4 p-10!">
                        <h2 className="font-space font-bold text-[32px] leading-10">
                            Our Vision
                        </h2>
                        <p className="font-hanken text-on-surface-variant text-[16px] leading-6">
                            To create a community where students can learn from
                            each other, connect with industry, bring their ideas
                            to life, and grow into confident professionals and
                            entrepreneurs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ds-container py-24 pb-48 mx-auto">
                <h2 className="text-center font-space font-bold text-5xl mb-12 py-4">
                    How the Story <span className="text-primary">Began</span>
                </h2>
                <div className="timeline">
                    <div className="grid grid-cols-4 gap-10 md:grid-cols-2 md:gap-20 md:mx-50 time-row">
                        <div className="flex flex-col col-span-2 md:col-auto justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q3 2025
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                Presentation Skills Bootcamp
                            </h3>
                        </div>
                        <div className="ds-card p-6! col-span-2 md:col-auto">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                Building stronger presentation and communication
                                skills.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10 md:grid-cols-2 md:gap-20 md:mx-50 time-row">
                        <div className="flex flex-col col-span-2 md:col-auto justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q1 2026
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                MindShift: Adapt to Lead
                            </h3>
                        </div>
                        <div className="ds-card p-6! col-span-2 md:col-auto">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                Exploring new perspectives, ideas, and
                                opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10 md:grid-cols-2 md:gap-20 md:mx-50 time-row">
                        <div className="flex flex-col col-span-2 md:col-auto justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q1 2026
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                Ideation Camp
                            </h3>
                        </div>
                        <div className="ds-card p-6! col-span-2 md:col-auto">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                Turning ideas into concepts through teamwork and
                                mentorship.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10 md:grid-cols-2 md:gap-20 md:mx-50 time-row">
                        <div className="flex flex-col col-span-2 md:col-auto justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q2 2026
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                E-Talks x Flat6Labs
                            </h3>
                        </div>
                        <div className="ds-card p-6!  col-span-2 md:col-auto">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                Connecting students with entrepreneurship and
                                industry insights.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10 md:grid-cols-2 md:gap-20 md:mx-50 time-row">
                        <div className="flex flex-col col-span-2 md:col-auto justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q2 2026
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                Demo Day
                            </h3>
                        </div>
                        <div className="ds-card p-6! col-span-2 md:col-auto">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                Showcasing student ideas and projects to mentors
                                and judges.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10 md:grid-cols-2 md:gap-20 md:mx-50 time-row">
                        <div className="flex flex-col col-span-2 md:col-auto justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q3 2026
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                Presentation Skills Bootcamp (R2)
                            </h3>
                        </div>
                        <div className="ds-card p-6! col-span-2 md:col-auto">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                Building stronger presentation and communication
                                skills.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10 md:grid-cols-2 md:gap-20 md:mx-50 time-row">
                        <div className="flex flex-col col-span-2 md:col-auto justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q4 2026
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                Tech Program 2026
                            </h3>
                        </div>
                        <div className="ds-card p-6!  col-span-2 md:col-auto">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                Leveraging the technical skills of our members
                                by active learning and technical workshops and
                                activities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
