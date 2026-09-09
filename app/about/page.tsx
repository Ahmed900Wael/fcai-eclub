import Image from "next/image";
import "./style.css";

const About = () => {
    return (
        <div className="bg-[#0D1B2A]">
            <main className="min-h-[75vh] relative grid place-content-center text-center">
                <div className="absolute top-0 left-0 w-lg h-120 blur-3xl bg-primary/10 rounded-full"></div>
                <h1 className="font-space text-[4rem] font-bold capitalize mb-4">
                    Engineering the <span className="text-primary">Future</span>
                </h1>
                <p className="text-lg opacity-85 leading-7 font-hanken max-w-3xl">
                    FCAI E-club is A community for creative minds to shape the
                    future. Gain practical experience, explore new ideas, and
                    connect with leaders driving change in the tech world.
                </p>
            </main>

            <section className="container py-24 mx-auto">
                <div className="grid grid-cols-12 grid-rows-2 gap-6">
                    <div className="col-span-7 ds-card flex flex-col justify-center gap-4 p-10!">
                        <h2 className="font-space font-bold text-[32px] leading-10">
                            Our Mission
                        </h2>
                        <p className="font-hanken text-on-surface-variant text-[16px] leading-6">
                            To architect an immersive environment where
                            theoretical computer science meets rapid
                            prototyping. We empower students to build scalable
                            solutions, cultivate entrepreneurial mindsets, and
                            deploy real-world applications that challenge the
                            status quo.
                        </p>
                    </div>
                    <div className="col-span-5">
                        <Image
                            width={450}
                            height={300}
                            className="min-w-full grayscale-100"
                            src="/about-demo-1.png"
                            alt="Mission"
                        />
                    </div>
                    <div className="col-span-5">
                        <Image
                            width={450}
                            height={300}
                            src="/about-demo-2.png"
                            className="min-w-full grayscale-100"
                            alt="Vision"
                        />
                    </div>
                    <div className="col-span-7 ds-card flex flex-col justify-center gap-4 p-10!">
                        <h2 className="font-space font-bold text-[32px] leading-10">
                            Our Vision
                        </h2>
                        <p className="font-hanken text-on-surface-variant text-[16px] leading-6">
                            To be the premier technical incubator in the region,
                            recognized for outputting elite engineering talent
                            and ground-breaking start-ups. We envision a network
                            where every member is equipped with the exact
                            technical stack and leadership skills to dominate
                            tomorrow's tech landscape.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container py-24 pb-48 mx-auto">
                <h2 className="text-center font-space font-bold text-5xl mb-12 py-4">
                    Operation <span className="text-primary">Log</span>
                </h2>
                <div className="timeline">
                    <div className="grid grid-cols-2 gap-20 mx-50 time-row">
                        <div className="flex flex-col justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q1 2021
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                System Initialization
                            </h3>
                        </div>
                        <div className="ds-card p-6!">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                The founding members established the core
                                architecture of the club, setting the
                                foundational vision for technical excellence.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-20 mx-50 time-row">
                        <div className="flex flex-col gap-2 justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q2 2022
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                Bootcamp Alpha
                            </h3>
                        </div>
                        <div className="ds-card p-6!">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                Launched the first iteration of practical
                                bootcamps focusing on modern web stacks and data
                                science pipelines.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-20 mx-50 time-row">
                        <div className="flex flex-col gap-2 justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q3 2023
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                System Initialization
                            </h3>
                        </div>
                        <div className="ds-card p-6!">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                The founding members established the core
                                architecture of the club, setting the
                                foundational vision for technical excellence.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-20 mx-50 time-row">
                        <div className="flex flex-col gap-2 justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Q4 2024
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                Bootcamp Alpha
                            </h3>
                        </div>
                        <div className="ds-card p-6!">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                Launched the first iteration of practical
                                bootcamps focusing on modern web stacks and data
                                science pipelines.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-20 mx-50 time-row">
                        <div className="flex flex-col gap-2 justify-center">
                            <span className="font-mono font-medium text-sm leading-4 tracking-widest text-primary uppercase">
                                Present
                            </span>
                            <h3 className="font-montserrat font-semibold text-2xl leading-8">
                                Ecosystem Expansion
                            </h3>
                        </div>
                        <div className="ds-card p-6!">
                            <p className="font-hanken text-[16px] leading-6 text-on-surface-variant max-w-93.75">
                                Scaling operations to include specialized
                                hardware tracks, AI research units, and national
                                hackathon deployments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
