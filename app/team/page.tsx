import { getCommittees } from "@/services/teams";
import { getProfiles } from "@/services/profiles";
import { getIcon } from "@/lib/icons";
import TeamMembers from "@/components/team-members";

const Team = async () => {
    const committees = await getCommittees();
    const { profiles, hasMore } = await getProfiles(1);

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
                <h1 className="font-space font-bold text-[64px] leading-17.5 tracking-tighter">
                    Meet the <span className="text-primary">Visionaries</span>
                </h1>
                <p className="text-lg text-[#BEC7D4] leading-7 font-hanken max-w-160">
                    The architects of tomorrow&apos;s solutions. A collective of
                    engineers, designers, and strategists building the ecosystem
                    of innovation at FCAI.
                </p>
            </main>

            <section className="container py-24 mx-auto">
                <h2 className="font-space font-semibold text-[32px] leading-10.5 text-[#D9E4F1] ps-4 mb-12 border-s-4 border-primary">
                    All Committees
                </h2>
                <div className="flex gap-10 overflow-x-auto scrollbar-hide px-4 py-2">
                    {committees.map((c) => {
                        const Icon = getIcon(c.icon);
                        return (
                            <div
                                key={c.id}
                                className="ds-card min-w-100 p-10! shrink-0 w-80"
                            >
                                <div className="p-4 text-primary border-[hsla(210,100%,80%,0.2)] rounded-sm bg-[#303A45] w-fit mb-8">
                                    <Icon />
                                </div>
                                <h3 className="font-space font-semibold text-2xl leading-8 text-[#D9E4F1] mb-2">
                                    {c.name}
                                </h3>
                                <p className="font-hanken text-sm leading-5 text-[#BEC7D4] max-w-112.5 mb-6">
                                    {c.description}
                                </p>
                                <span className="font-mono text-sm leading-3.5 tracking-wider text-[#B6C6ED]">
                                    {c.member_count} Member
                                    {c.member_count !== 1 && "s"}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="container py-24 mx-auto">
                <h2 className="font-space font-semibold text-[32px] leading-10.5 text-[#D9E4F1] ps-4 mb-12 border-s-4 border-primary">
                    Team Members
                </h2>
                <TeamMembers
                    initialProfiles={profiles}
                    initialHasMore={hasMore}
                    committees={committees}
                />
            </section>
        </div>
    );
};

export default Team;
