import { CheckCircle, User } from "lucide-react";
import PartnerForm from "./partner-form";
import Image from "next/image";
import { PARTNERS } from "@/constants";

const Partnerships = () => {
    return (
        <div className="bg-[#09141E]">
            <main className="min-h-[75vh] relative grid gap-5.5 place-content-center text-center">
                <div className="absolute top-0 left-0 hidden sm:block w-lg h-120 blur-3xl bg-primary/10 rounded-full"></div>
                <span
                    className="ds-badge w-fit mx-auto"
                    data-animate="hero-badge"
                >
                    ● Engineering the future
                </span>
                <h1 className="font-space font-bold text-4xl md:text-[64px] leading-17.5 tracking-tight">
                    Our Success <span className="text-primary">Partners</span>
                </h1>
                <p className="text-sm md:text-lg opacity-85 leading-5 sm:leading-7 font-hanken max-w-[80%] sm:max-w-4xl mx-auto text-[#BEC7D4] md:max-w-160">
                    Collaborating with industry leaders to engineer the future
                    of technology and entrepreneurship.
                </p>
            </main>

            <section className="ds-container py-24 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PARTNERS.map((p, i) => (
                        <div
                            key={i}
                            className="ds-card min-h-50 grid place-content-center"
                        >
                            <Image
                                src={p}
                                alt="Partner"
                                width={64}
                                height={64}
                                className="block w-24 h-24"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="ds-container py-24 mx-auto">
                <div className="grid grid-cols-12 gap-6">
                    <div className="ds-card ds-card-about col-span-12 md:col-span-5 flex flex-col justify-start gap-6 p-10!">
                        <h3 className="font-space font-semibold text-primary text-[32px] leading-10.5">
                            Join Our Network
                        </h3>
                        <p className="opacity-75 text-[16px] font-hanken font-light leading-6 max-w-100">
                            Partner with FCAI E-Club to connect with talented
                            students, collaborate on meaningful initiatives, and
                            create opportunities that bring students closer to
                            industry.
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-2 font-hanken text-sm leading-5.25">
                                <CheckCircle
                                    size={16}
                                    className="text-primary"
                                />
                                Access to student innovators
                            </li>
                            <li className="flex items-center gap-2 font-hanken text-sm leading-5.25">
                                <CheckCircle
                                    size={16}
                                    className="text-primary"
                                />
                                Co-host technical workshops
                            </li>
                            <li className="flex items-center gap-2 font-hanken text-sm leading-5.25">
                                <CheckCircle
                                    size={16}
                                    className="text-primary"
                                />
                                Brand visibility at flagship events
                            </li>
                        </ul>
                    </div>
                    <div className="ds-card p-10! col-span-12 md:col-span-7">
                        <PartnerForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partnerships;
