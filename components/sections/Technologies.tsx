"use client";

import { Reveal } from "@/components/ui/reveal";
import type { IconType } from "react-icons";
import { SiReact, SiPython, SiJavascript, SiAwslambda, SiNextdotjs, SiNodedotjs, SiMysql, SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiGit, SiC, SiGo, SiRust, SiNumpy, SiScikitlearn, SiPandas, SiPostgresql, SiDocker, SiFastapi, SiPytorch } from "react-icons/si";

type Tech = { icon: IconType; name: string; color: string };

const technologies: Tech[] = [
    // Languages
    { icon: SiC, name: "C", color: "text-[#A8B9CC]" },
    { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
    { icon: SiGo, name: "Go", color: "text-[#00ADD8]" },
    { icon: SiRust, name: "Rust", color: "text-[#F74C00]" },
    { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
    { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
    // Frontend
    { icon: SiReact, name: "React", color: "text-[#61DAFB]" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-foreground" },
    { icon: SiHtml5, name: "HTML5", color: "text-[#E34F26]" },
    { icon: SiCss3, name: "CSS3", color: "text-[#1572B6]" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
    // Backend
    { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]" },
    { icon: SiFastapi, name: "FastAPI", color: "text-[#009688]" },
    // ML / Data Science
    { icon: SiPytorch, name: "PyTorch", color: "text-[#EE4C2C]" },
    { icon: SiNumpy, name: "NumPy", color: "text-[#4DABCF]" },
    { icon: SiScikitlearn, name: "scikit-learn", color: "text-[#F7931E]" },
    { icon: SiPandas, name: "Pandas", color: "text-[#E70488]" },
    // Databases
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#4169E1]" },
    { icon: SiMysql, name: "MySQL", color: "text-[#4479A1]" },
    // Cloud / DevOps
    { icon: SiAwslambda, name: "AWS Lambda", color: "text-[#FF9900]" },
    { icon: SiDocker, name: "Docker", color: "text-[#2496ED]" },
    // Tools
    { icon: SiGit, name: "Git", color: "text-[#F05032]" },
];

const rowA = technologies.slice(0, Math.ceil(technologies.length / 2));
const rowB = technologies.slice(Math.ceil(technologies.length / 2));

function MarqueeRow({ items, duration, reverse = false }: { items: Tech[]; duration: number; reverse?: boolean }) {
    return (
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
                className="flex w-max py-2 animate-[marquee_linear_infinite] group-hover:[animation-play-state:paused]"
                style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
            >
                {/* Duplicate the row so translateX(-50%) loops seamlessly */}
                {[...items, ...items].map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                        <div
                            key={idx}
                            className="mx-2 flex items-center gap-3 rounded-full border border-white/10 bg-muted/40 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-muted/70 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <Icon className={`text-2xl ${tech.color}`} />
                            <span className="whitespace-nowrap text-sm font-semibold text-foreground">{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function Technologies() {
    return (
        <section id="technologies" className="relative scroll-mt-24 py-24 bg-background overflow-hidden">
            {/* Ambient glow blob */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[40rem] rounded-full bg-blue-600/10 blur-3xl animate-[float-blob_15s_ease-in-out_infinite]" />
            </div>

            <div className="relative">
                <Reveal className="text-center mb-12 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technologies</h2>
                    <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        The languages, frameworks, and tools I build with<span className="hidden md:inline"> - hover to pause</span>
                    </p>
                </Reveal>

                <Reveal delay={100} className="space-y-4">
                    <MarqueeRow items={rowA} duration={40} />
                    <MarqueeRow items={rowB} duration={48} reverse />
                </Reveal>
            </div>
        </section>
    );
}
