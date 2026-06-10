"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

const MAX_TILT = 4;

export function TiltCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-y * MAX_TILT).toFixed(2)}deg) rotateY(${(x * MAX_TILT).toFixed(2)}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("transition-transform duration-200 ease-out will-change-transform", className)}
        >
            {children}
        </div>
    );
}
