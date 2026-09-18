import type { Metadata } from "next";
import {
    Montserrat,
    Hanken_Grotesk,
    Space_Grotesk,
    JetBrains_Mono,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Layout
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["300", "400", "600", "700", "800", "900"],
});

const hanken_grotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
    weight: ["300", "400", "600", "700", "800", "900"],
});

const space_grotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    weight: ["300", "400", "600", "700", "800"],
});

const ethnocentric = localFont({
    src: "../public/fonts/Ethnocentric-Regular.otf",
    variable: "--font-ethnocentric",
    weight: "400",
});

export const metadata: Metadata = {
    title: "FCAI E-Club | Where tech meets innovation",
    description:
        "Empowering student entrepreneurs and tech innovators at the FCAI-CU to build the next generation of scalable solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${montserrat.variable} ${hanken_grotesk.variable} ${jetBrainsMono.variable} ${ethnocentric.variable} ${space_grotesk.variable} antialiased`}
        >
            <body className="min-h-screen">
                <Navbar />

                {children}

                <Footer />
            </body>
        </html>
    );
}
