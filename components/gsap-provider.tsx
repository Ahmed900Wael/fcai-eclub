"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gsap: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ScrollTrigger: any;
    }
}

function loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            resolve();
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(script);
    });
}

function initAnimations() {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // ── Hero entrance (on page load) ──
    const heroTl = gsap.timeline({
        defaults: { ease: "power3.out", clearProps: "all" },
    });

    heroTl
        .from("[data-animate='hero-badge']", {
            opacity: 0,
            y: 30,
            duration: 0.8,
        })
        .from(
            "[data-animate='hero-banner']",
            { opacity: 0, scale: 0.85, duration: 1 },
            "-=0.5"
        )
        .from(
            "[data-animate='hero-paragraph']",
            { opacity: 0, y: 20, duration: 0.7 },
            "-=0.6"
        )
        .from(
            "[data-animate='hero-button']",
            { opacity: 0, y: 20, duration: 0.7 },
            "-=0.5"
        );

    // ── Stats cards ──
    gsap.from("[data-animate='stat']", {
        scrollTrigger: {
            trigger: "[data-animate='stats-section']",
            start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all",
    });

    // ── About card (slide from left) ──
    gsap.from("[data-animate='about-card']", {
        scrollTrigger: {
            trigger: "[data-animate='about-card']",
            start: "top 80%",
        },
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all",
    });

    // ── Event cards (slide from right, staggered) ──
    gsap.from("[data-animate='event-card']", {
        scrollTrigger: {
            trigger: "[data-animate='events-section']",
            start: "top 75%",
        },
        opacity: 0,
        x: 60,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "all",
    });

    // ── Testimonial cards (scale + fade, staggered) ──
    gsap.from("[data-animate='testimonial']", {
        scrollTrigger: {
            trigger: "[data-animate='testimonials-section']",
            start: "top 80%",
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all",
    });

    // ── Partner logos (fade in, staggered) ──
    gsap.from("[data-animate='partner']", {
        scrollTrigger: {
            trigger: "[data-animate='partners-section']",
            start: "top 85%",
        },
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
    });
}

export default function GsapAnimations() {
    useEffect(() => {
        const cdnBase = "https://cdn.jsdelivr.net/npm/gsap@3.12/dist";

        loadScript(`${cdnBase}/gsap.min.js`)
            .then(() => loadScript(`${cdnBase}/ScrollTrigger.min.js`))
            .then(() => initAnimations())
            .catch(() => {
                // CDN blocked — elements render normally without animation
            });
    }, []);

    return null;
}
