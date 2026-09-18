import { Briefcase, Code, Mail } from "lucide-react";
import { BiLogoLinkedin } from "react-icons/bi";
import Image from "next/image";

import "./style.css";
import {
    getAvatarUrl,
    getContributionsById,
    getProfileById,
} from "@/services/profiles";
import Link from "next/link";
import { cn, getYearlyQuarter } from "@/lib/utils";

interface ProfilePageProps {
    params: Promise<{ id: string }>;
}

const MemberProfile = async ({ params }: ProfilePageProps) => {
    const { id } = await params;
    const profile = await getProfileById(id);
    const contributions = await getContributionsById(id);

    return (
        <div className="bg-[#0D1B2A]">
            {/* Hero */}
            <main className="min-h-[75vh] relative flex items-center justify-center text-start ds-container mx-auto py-24">
                <div className="flex-1 py-10 min-h-120 grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-4">
                        <div className="ds-card p-10! h-full">
                            {profile?.avatar_url ? (
                                <div className="w-48 h-48 mx-auto rounded-[12px] border-4 border-primary overflow-hidden">
                                    <Image
                                        src={getAvatarUrl(profile?.avatar_url)}
                                        width={192}
                                        height={192}
                                        className="block max-w-full h-full"
                                        alt="Member"
                                    />
                                </div>
                            ) : (
                                <div className="w-46 h-46 rounded-[12px] bg-[#1e201e] border flex items-center justify-center font-space font-bold text-6xl text-primary mx-auto">
                                    {profile?.full_name.charAt(0)}
                                </div>
                            )}
                            <div className="flex flex-col gap-2 text-center mb-10 mt-6">
                                <h3 className="font-space font-bold text-[38px] leading-10">
                                    {profile?.full_name}
                                </h3>
                                {profile?.committees?.name ? (
                                    <p className="font-hanken text-sm text-[#BEC7D4] mt-1">
                                        {profile.committees.name} Committee
                                    </p>
                                ) : (
                                    <p className="font-hanken text-sm text-[#BEC7D4] mt-1">
                                        {profile?.role?.includes("Founder")
                                            ? "All Committees"
                                            : (profile?.committees?.name ??
                                              "General")}
                                    </p>
                                )}
                                {profile?.role && (
                                    <span className="font-mono font-medium text-[12px] text-primary uppercase tracking-widest">
                                        {profile?.role}
                                    </span>
                                )}
                            </div>
                            <ul className="flex gap-4 justify-center">
                                <li
                                    className={cn(
                                        "p-2 border-primary border-2 rounded-3xl",
                                        !profile?.github_url &&
                                            "opacity-45 pointer-events-none cursor-not-allowed",
                                    )}
                                >
                                    <Link
                                        href={
                                            profile?.github_url ??
                                            ("" as string)
                                        }
                                        target="_blank"
                                    >
                                        <Code
                                            size={28}
                                            className="text-primary"
                                        />
                                    </Link>
                                </li>
                                <li className="p-2 border-primary border-2 cursor-pointer rounded-3xl">
                                    <Link
                                        href={
                                            ("https://" +
                                                profile?.linkedin_url) as string
                                        }
                                        target="_blank"
                                    >
                                        <BiLogoLinkedin
                                            size={28}
                                            className="text-primary"
                                        />
                                    </Link>
                                </li>
                                <li className="p-2 border-primary border-2 cursor-pointer rounded-3xl">
                                    <Link
                                        href={`mailto:${profile?.email as string}`}
                                        target="_blank"
                                    >
                                        <Mail
                                            size={28}
                                            className="text-primary"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 flex flex-col gap-6 h-full">
                        <div className="ds-card p-10! flex-1">
                            <h3 className="font-space font-bold text-xl text-primary leading-8 mb-4">
                                About
                            </h3>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: profile?.bio ?? "No bio yet",
                                }}
                                className="font-hanken text-[16px] leading-6 text-[#BDC8D1]"
                            />
                        </div>
                        <div className="flex flex-wrap gap-6">
                            <div className="ds-card p-8! flex-1">
                                <span className="font-space font-bold text-6xl leading-16 tracking-tight text-primary text-center block">
                                    {profile?.projects ?? "--"}
                                </span>
                                <h4 className="mt-4 uppercase font-mono font-light text-[12px] leading-4 tracking-wider text-center">
                                    Projects Shipped
                                </h4>
                            </div>
                            <div className="ds-card p-8! flex-1">
                                <span className="font-space font-bold text-6xl leading-16 tracking-tight text-primary text-center block">
                                    {contributions?.length ?? 0}
                                </span>
                                <h4 className="mt-4 uppercase font-mono font-light text-[12px] leading-4 tracking-wider text-center">
                                    Contributions
                                </h4>
                            </div>
                            <div className="ds-card p-8! flex-1">
                                <span className="font-space font-bold text-6xl leading-16 tracking-tight text-primary text-center block">
                                    {profile?.workshops ?? "--"}
                                </span>
                                <h4 className="mt-4 uppercase font-mono font-light text-[12px] leading-4 tracking-wider text-center">
                                    Workshops Led
                                </h4>
                            </div>
                            <div className="ds-card p-8! flex-1">
                                <span className="font-space font-bold text-6xl leading-16 tracking-tight text-primary text-center block">
                                    {new Date(
                                        profile?.created_at ?? "",
                                    ).getFullYear()}
                                </span>
                                <h4 className="mt-4 uppercase font-mono font-light text-[12px] leading-4 tracking-wider text-center">
                                    Years Since
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="ds-container py-24 mx-auto">
                <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase block mb-10">
                    ⸺ Key Contributions
                </span>
                <div className="ds-card p-10!">
                    <div className="flex flex-col gap-10 justify-center border-l">
                        {contributions &&
                            contributions.map((c) => (
                                <div
                                    key={c.title}
                                    className="flex flex-col gap-2 row"
                                >
                                    <span className="font-mono font-light text-[12px] leading-4">
                                        {getYearlyQuarter(c.date)}{" "}
                                        {c.date.split("-")[0]}
                                    </span>
                                    <h4 className="font-space font-bold text-2xl leading-8">
                                        {c.title}
                                    </h4>
                                    <p className="font-hanken text-[16px] leading-6 text-[#BDC8D1] max-w-222.5">
                                        {c.description}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            <section className="ds-container py-24 mx-auto">
                <span className="text-sm text-primary font-medium font-mono tracking-widest uppercase block mb-10">
                    ⸺ Work Documentation
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <Image
                            src="/work-1.png"
                            loading="eager"
                            alt="Work 1"
                            width={600}
                            height={400}
                            className="block max-w-full aspect-3/2"
                        />
                    </div>
                    <div>
                        <Image
                            src="/work-2.png"
                            loading="eager"
                            alt="Work 2"
                            width={600}
                            height={400}
                            className="block max-w-full aspect-3/2"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MemberProfile;
