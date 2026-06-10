"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingResume from "@/components/sections/FloatingResume";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <>
            <Navbar onToggleResume={() => setIsResumeOpen((prev) => !prev)} />
            <FloatingResume isOpen={isResumeOpen} setIsOpen={setIsResumeOpen} />
            {children}
            <Footer />
        </>
    );
}
