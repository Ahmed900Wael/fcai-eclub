"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAVLINKS } from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { signOut } from "@/actions/auth";

interface NavbarProps {
    user: { email?: string } | null;
}

const Navbar = ({ user }: NavbarProps) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed z-50 w-full backdrop-blur-xs">
            <nav className="ds-nav min-h-24">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight"
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src={"/logo.png"}
                        width={80}
                        height={80}
                        alt="Logo"
                        loading="eager"
                    />
                </Link>

                {/* Navbar Links */}
                <ul className="hidden md:flex gap-8">
                    {NAVLINKS.map(({ title, path }) => {
                        const isActive = pathname === path;

                        return (
                            <li className="ds-nav-items" key={title}>
                                <Link
                                    href={path}
                                    className={cn(isActive && "ds-nav-active")}
                                >
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Auth CTA - Desktop */}
                <div className="hidden md:flex items-center gap-3">
                    {/* {user ? (
                        <form action={signOut}>
                            <Button
                                type="submit"
                                className="ds-btn-outline font-mono"
                            >
                                Logout
                            </Button>
                        </form>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button className="ds-btn-outline font-mono">
                                    Login
                                </Button>
                            </Link>
                        </>
                    )} */}
                    <Link href="/signup">
                        <Button className="ds-btn font-mono">
                            Join the team
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <Button
                    className="ds-btn-outline md:hidden!"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((value) => !value)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </nav>
            {/* Mobile navigation */}
            {isOpen && (
                <div className="absolute w-full border-t border-border px-6 py-4 md:hidden bg-[#09141E] opacity-85">
                    <div className="flex flex-col gap-6">
                        <ul className="flex flex-col md:hidden gap-6">
                            {NAVLINKS.map(({ title, path }) => {
                                const isActive = pathname === path;

                                return (
                                    <li className="ds-nav-items" key={title}>
                                        <Link
                                            href={path}
                                            className={cn(
                                                isActive && "ds-nav-active",
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* {user ? (
                            <form action={signOut}>
                                <Button
                                    type="submit"
                                    className="ds-btn-outline w-full text-center font-mono"
                                >
                                    Logout
                                </Button>
                            </form>
                        ) : (
                            <>
                                <Link href="/login" onClick={() => setIsOpen(false)}>
                                    <Button className="ds-btn-outline w-full text-center font-mono">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/signup" onClick={() => setIsOpen(false)}>
                                    <Button className="ds-btn w-full text-center font-mono">
                                        Join the team
                                    </Button>
                                </Link>
                            </>
                        )} */}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
