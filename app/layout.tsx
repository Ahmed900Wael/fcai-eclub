import type { Metadata } from "next";
import { Montserrat, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
    weight: ["300", "400", "600", "700", "800"],
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
            className={`${montserrat.variable} ${hanken_grotesk.variable} ${jetBrainsMono.variable} antialiased`}
        >
            <body>{children}</body>
        </html>
    );
}
