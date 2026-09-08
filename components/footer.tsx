"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="ds-footer">
            <div className="ds-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-18">
                <div className="space-y-4 row-span-2">
                    <Image
                        src={"/logo.png"}
                        width={64}
                        height={64}
                        alt="Logo"
                        loading="eager"
                    />
                    <p className="text-sm leading-6 font-hanken max-w-[40ch]">
                        Engineering the Future. Building the next generation of
                        innovators and technical entrepreneurs.
                    </p>
                </div>
                <div>
                    <h3 className="ds-footer-heading">Navigation</h3>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link href="" className="ds-footer-link">
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="ds-footer-link">
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="ds-footer-link">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="ds-footer-link">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="ds-footer-heading">Social Links</h3>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link
                                href="https://www.linkedin.com/company/fcaieclub/"
                                className="ds-footer-link"
                                rel="noreferrer"
                                target="_blank"
                            >
                                LinkedIn
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.facebook.com/fcaieclub"
                                className="ds-footer-link"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.instagram.com/fcai_eclub/"
                                className="ds-footer-link"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Instagram
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="ds-footer-copy">
                © 2026 FCAI E-Club. Where Tech Meets Innovation.
            </p>
        </footer>
    );
};

export default Footer;
