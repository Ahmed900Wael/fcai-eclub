"use client";

import Image from "next/image";
import Link from "next/link";

function getAvatarUrl(path: string): string {
    const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    return `${baseUrl}/storage/v1/object/public/${path}`;
}

export default function TeamMembers({
    profiles,
    committees: _committees,
}: TeamMembersProps) {
    return (
        <div className="flex flex-col gap-40">
            <div className="flex flex-col gap-6">
                <h2 className="font-space font-semibold text-[32px] leading-10.5 text-[#D9E4F1]">
                    Management
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {profiles &&
                        profiles
                            .filter((p) => p?.section?.includes("Management"))
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/team/${p.id}`}
                                    className="ds-card block hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                                        {p.avatar_url ? (
                                            <div className="w-21.25 h-21.25">
                                                <Image
                                                    src={getAvatarUrl(
                                                        p.avatar_url,
                                                    )}
                                                    alt={p.full_name}
                                                    width={85}
                                                    height={85}
                                                    className="rounded-[12px] block max-w-full h-full"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-21.25 h-21.25 rounded-[12px] bg-[#1e201e] flex items-center justify-center font-space font-bold text-3xl text-primary">
                                                {p.full_name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1 text-center">
                                        <h3 className="font-montserrat font-semibold text-lg leading-7">
                                            {p.full_name}
                                        </h3>
                                        {p.role && (
                                            <span className="uppercase block font-mono font-light text-[12px] leading-4 tracking-wide text-primary">
                                                {p.role}
                                            </span>
                                        )}
                                        <p className="font-mono text-[12px] leading-4 mt-4 text-on-surface-variant">
                                            {p.role?.includes("Founder")
                                                ? "President"
                                                : (p.committees?.name ??
                                                  "General")}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="font-space font-semibold text-[32px] leading-10.5 text-[#D9E4F1]">
                    Human Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {profiles &&
                        profiles
                            .filter((p) => p.section?.includes("Human"))
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/team/${p.id}`}
                                    className="ds-card block hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                                        {p.avatar_url ? (
                                            <div className="w-21.25 h-21.25">
                                                <Image
                                                    src={getAvatarUrl(
                                                        p.avatar_url,
                                                    )}
                                                    alt={p.full_name}
                                                    width={85}
                                                    height={85}
                                                    className="rounded-[12px] block max-w-full h-full"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-21.25 h-21.25 rounded-[12px] bg-[#1e201e] flex items-center justify-center font-space font-bold text-3xl text-primary">
                                                {p.full_name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1 text-center">
                                        <h3 className="font-montserrat font-semibold text-lg leading-7">
                                            {p.full_name}
                                        </h3>
                                        {p.role && (
                                            <span className="uppercase block font-mono font-light text-[12px] leading-4 tracking-wide text-primary">
                                                {p.role}
                                            </span>
                                        )}
                                        <p className="font-mono text-[12px] leading-4 mt-4 text-on-surface-variant">
                                            {p.role?.includes("Founder")
                                                ? "President"
                                                : (p.committees?.name ??
                                                  "General")}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="font-space font-semibold text-[32px] leading-10.5 text-[#D9E4F1]">
                    Technical
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {profiles &&
                        profiles
                            .filter((p) => p.section?.includes("Technical"))
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/team/${p.id}`}
                                    className="ds-card block hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                                        {p.avatar_url ? (
                                            <div className="w-21.25 h-21.25">
                                                <Image
                                                    src={getAvatarUrl(
                                                        p.avatar_url,
                                                    )}
                                                    alt={p.full_name}
                                                    width={85}
                                                    height={85}
                                                    className="rounded-[12px] block max-w-full h-full"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-21.25 h-21.25 rounded-[12px] bg-[#1e201e] flex items-center justify-center font-space font-bold text-3xl text-primary">
                                                {p.full_name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1 text-center">
                                        <h3 className="font-montserrat font-semibold text-lg leading-7">
                                            {p.full_name}
                                        </h3>
                                        {p.role && (
                                            <span className="uppercase block font-mono font-light text-[12px] leading-4 tracking-wide text-primary">
                                                {p.role}
                                            </span>
                                        )}
                                        <p className="font-mono text-[12px] leading-4 mt-4 text-on-surface-variant">
                                            {p.role?.includes("Founder")
                                                ? "President"
                                                : (p.committees?.name ??
                                                  "General")}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="font-space font-semibold text-[32px] leading-10.5 text-[#D9E4F1]">
                    Multimedia
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {profiles &&
                        profiles
                            .filter((p) => p.section?.includes("Multimedia"))
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/team/${p.id}`}
                                    className="ds-card block hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                                        {p.avatar_url ? (
                                            <div className="w-21.25 h-21.25">
                                                <Image
                                                    src={getAvatarUrl(
                                                        p.avatar_url,
                                                    )}
                                                    alt={p.full_name}
                                                    width={85}
                                                    height={85}
                                                    className="rounded-[12px] block max-w-full h-full"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-21.25 h-21.25 rounded-[12px] bg-[#1e201e] flex items-center justify-center font-space font-bold text-3xl text-primary">
                                                {p.full_name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1 text-center">
                                        <h3 className="font-montserrat font-semibold text-lg leading-7">
                                            {p.full_name}
                                        </h3>
                                        {p.role && (
                                            <span className="uppercase block font-mono font-light text-[12px] leading-4 tracking-wide text-primary">
                                                {p.role}
                                            </span>
                                        )}
                                        <p className="font-mono text-[12px] leading-4 mt-4 text-on-surface-variant">
                                            {p.role?.includes("Founder")
                                                ? "President"
                                                : (p.committees?.name ??
                                                  "General")}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="font-space font-semibold text-[32px] leading-10.5 text-[#D9E4F1]">
                    Instructors
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {profiles &&
                        profiles
                            .filter((p) => p.section?.includes("Instructors"))
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/team/${p.id}`}
                                    className="ds-card block hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                                        {p.avatar_url ? (
                                            <div className="w-21.25 h-21.25">
                                                <Image
                                                    src={getAvatarUrl(
                                                        p.avatar_url,
                                                    )}
                                                    alt={p.full_name}
                                                    width={85}
                                                    height={85}
                                                    className="rounded-[12px] block max-w-full h-full"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-21.25 h-21.25 rounded-[12px] bg-[#1e201e] flex items-center justify-center font-space font-bold text-3xl text-primary">
                                                {p.full_name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1 text-center">
                                        <h3 className="font-montserrat font-semibold text-lg leading-7">
                                            {p.full_name}
                                        </h3>
                                        {p.role && (
                                            <span className="uppercase block font-mono font-light text-[12px] leading-4 tracking-wide text-primary">
                                                {p.role}
                                            </span>
                                        )}
                                        <p className="font-mono text-[12px] leading-4 mt-4 text-on-surface-variant">
                                            {p.role?.includes("Founder")
                                                ? "President"
                                                : (p.committees?.name ??
                                                  "General")}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="font-space font-semibold text-[32px] leading-10.5 text-[#D9E4F1]">
                    External Relations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {profiles &&
                        profiles
                            .filter((p) =>
                                p.section?.includes("External Relations"),
                            )
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/team/${p.id}`}
                                    className="ds-card block hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                                        {p.avatar_url ? (
                                            <div className="w-21.25 h-21.25">
                                                <Image
                                                    src={getAvatarUrl(
                                                        p.avatar_url,
                                                    )}
                                                    alt={p.full_name}
                                                    width={85}
                                                    height={85}
                                                    className="rounded-[12px] block max-w-full h-full"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-21.25 h-21.25 rounded-[12px] bg-[#1e201e] flex items-center justify-center font-space font-bold text-3xl text-primary">
                                                {p.full_name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1 text-center">
                                        <h3 className="font-montserrat font-semibold text-lg leading-7">
                                            {p.full_name}
                                        </h3>
                                        {p.role && (
                                            <span className="uppercase block font-mono font-light text-[12px] leading-4 tracking-wide text-primary">
                                                {p.role}
                                            </span>
                                        )}
                                        <p className="font-mono text-[12px] leading-4 mt-4 text-on-surface-variant">
                                            {p.role?.includes("Founder")
                                                ? "President"
                                                : (p.committees?.name ??
                                                  "General")}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                </div>
            </div>
        </div>
    );
}
