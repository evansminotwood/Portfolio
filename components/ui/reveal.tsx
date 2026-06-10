"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                "transition-all duration-700 ease-out",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                className
            )}
        >
            {children}
        </div>
    );
}

export function CountUp({
    value,
    decimals = 0,
    suffix = "",
    duration = 1500,
    className,
}: {
    value: number;
    decimals?: number;
    suffix?: string;
    duration?: number;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();

                const start = performance.now();
                const tick = (now: number) => {
                    const progress = Math.min((now - start) / duration, 1);
                    // ease-out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setDisplay(value * eased);
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref} className={className}>
            {display.toFixed(decimals)}
            {suffix}
        </span>
    );
}
