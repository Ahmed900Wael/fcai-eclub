function SkeletonCard({ className = "" }: { className?: string }) {
    return (
        <div className={`ds-card p-10! animate-pulse ${className}`}>
            <div className="flex flex-col gap-4">
                <div className="h-7 w-1/3 max-w-56 bg-white/10 rounded" />
                <div className="h-4 w-full bg-white/10 rounded" />
                <div className="h-4 w-5/6 bg-white/10 rounded" />
                <div className="h-4 w-2/3 bg-white/10 rounded" />
            </div>
        </div>
    );
}

export default function Loading() {
    return (
        <div className="bg-[#0D1B2A]">
            {/* Hero skeleton — matches min-h-120 banner */}
            <main className="min-h-[80vh] pb-16 flex flex-col gap-8 text-start mx-auto">
                <div className="flex-1 p-10 min-h-120 grid place-content-center animate-pulse bg-white/5">
                    <div className="h-14 w-[min(560px,70vw)] bg-white/10 rounded" />
                </div>
            </main>

            {/* Content skeleton — matches 8/4 grid */}
            <section className="ds-container mx-auto grid grid-cols-12 gap-6 pb-24">
                <section className="col-span-12 lg:col-span-8 space-y-6 order-2 lg:order-1">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </section>

                <aside className="col-span-12 lg:col-span-4 space-y-6 order-1 lg:order-2">
                    <div className="ds-card p-10! animate-pulse">
                        <ul className="flex flex-col gap-4">
                            {[0, 1, 2].map((i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-white/10 rounded" />
                                    <div className="h-4 w-32 bg-white/10 rounded" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <SkeletonCard />
                    <div className="ds-card p-10! flex flex-col gap-4 animate-pulse">
                        <div className="h-4 w-36 bg-white/10 rounded" />
                        <div className="h-9 w-40 bg-white/10 rounded" />
                    </div>
                </aside>
            </section>
        </div>
    );
}
