"use client";

import { useState } from "react";
import { loadMoreProfiles } from "@/actions/profiles";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function getAvatarUrl(path: string): string {
    const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    return `${baseUrl}/storage/v1/object/public/${path}`;
}

export default function TeamMembers({
    initialProfiles,
    initialHasMore,
    committees,
}: TeamMembersProps) {
    const [profiles, setProfiles] = useState(initialProfiles);
    const [page, setPage] = useState(2);
    const [hasMore, setHasMore] = useState(initialHasMore);
    const [loading, setLoading] = useState(false);
    const [activeCommittee, setActiveCommittee] = useState<string | null>(null);

    async function handleFilter(committeeId: string | null) {
        setActiveCommittee(committeeId);
        setPage(2);
        setLoading(true);
        const { profiles: first, hasMore: next } = await loadMoreProfiles(
            1,
            committeeId,
        );
        setProfiles(first);
        setHasMore(next);
        setLoading(false);
    }

    async function handleLoadMore() {
        setLoading(true);
        const { profiles: more, hasMore: next } = await loadMoreProfiles(
            page,
            activeCommittee,
        );
        setProfiles((prev) => [...prev, ...more]);
        setPage((p) => p + 1);
        setHasMore(next);
        setLoading(false);
    }

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 px-4 py-2">
                <button
                    className={cn(
                        "ds-tab shrink-0",
                        activeCommittee === null && "ds-tab-active",
                    )}
                    onClick={() => handleFilter(null)}
                >
                    All
                </button>
                {committees.map((c) => (
                    <button
                        key={c.id}
                        className={cn(
                            "ds-tab shrink-0",
                            activeCommittee === c.id && "ds-tab-active",
                        )}
                        onClick={() => handleFilter(c.id)}
                    >
                        {c.name}
                    </button>
                ))}
            </div>
            {
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-16">
                    {profiles.map((p) => (
                        <Link
                            key={p.id}
                            href={`/team/${p.id}`}
                            className="ds-card block hover:opacity-80 transition-opacity"
                        >
                            <div className="w-fit mb-4 p-1 mx-auto border border-white/20 rounded-[12px]">
                                {p.avatar_url ? (
                                    <div className="w-21.25 h-21.25">
                                        <Image
                                            src={getAvatarUrl(p.avatar_url)}
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
                                        : (p.committees?.name ?? "General")}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            }
            {loading && (
                <p className="text-center font-mono text-sm text-[#BEC7D4] mt-16">
                    Loading...
                </p>
            )}
            {!loading && profiles.length === 0 && (
                <p className="text-center font-mono text-sm text-[#BEC7D4]">
                    No members found.
                </p>
            )}
            {hasMore && !loading && (
                <div className="flex justify-center mt-20">
                    <Button
                        className="ds-btn ds-btn-outline"
                        onClick={handleLoadMore}
                    >
                        Load More Members
                    </Button>
                </div>
            )}
        </>
    );
}
