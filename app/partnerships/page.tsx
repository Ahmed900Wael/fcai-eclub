import { Button } from "@/components/ui/button";
import { CheckCircle, Send, User } from "lucide-react";

const Partnerships = () => {
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
                <h1 className="font-space font-bold text-[64px] leading-17.5 tracking-tight">
                    Our Success <span className="text-primary">Partners</span>
                </h1>
                <p className="text-lg text-[#BEC7D4] leading-7 font-hanken max-w-160">
                    Collaborating with industry leaders to engineer the future
                    of technology and entrepreneurship.
                </p>
            </main>

            <section className="container py-24 mx-auto">
                <div className="grid grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                        <div key={i} className="ds-card min-h-50 grid place-content-center">
                            <User size={64} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="container py-24 mx-auto">
                <div className="grid grid-cols-12 gap-6">
                    <div className="ds-card ds-card-about col-span-5 flex flex-col justify-center gap-6 p-10!">
                        <h3 className="font-space font-semibold text-primary text-[32px] leading-10.5">
                            Join Our Network
                        </h3>
                        <p className="opacity-75 text-[16px] font-hanken font-light leading-6 max-w-100">
                            Partner with the FCAI Entrepreneurship Club to
                            access top-tier engineering talent, collaborate on
                            cutting-edge research, and integrate with our
                            vibrant startup ecosystem.
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
                    <div className="ds-card p-10! col-span-7">
                        <form className="flex flex-col gap-8" action="">
                            <div>
                                <label
                                    className="ds-input-label"
                                    htmlFor="name"
                                >
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    className="ds-input"
                                    name="name"
                                    id="name"
                                    placeholder="e.g. Acme Aerospance"
                                />
                            </div>
                            <div>
                                <label
                                    className="ds-input-label"
                                    htmlFor="email"
                                >
                                    Contact Email
                                </label>
                                <input
                                    type="text"
                                    className="ds-input"
                                    name="email"
                                    id="email"
                                    placeholder="contact@company.com"
                                />
                            </div>
                            <div>
                                <label
                                    className="ds-input-label"
                                    htmlFor="reason"
                                >
                                    Partnership Interest
                                </label>
                                <select
                                    className="ds-select"
                                    name="reason"
                                    id="reason"
                                >
                                    <option value="None">
                                        Select an area of interest
                                    </option>
                                </select>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    className="ds-btn-outline font-mono"
                                >
                                    Submit Proposal <Send size={16} />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partnerships;
