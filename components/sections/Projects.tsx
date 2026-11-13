"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaLinkedin } from "react-icons/fa";
import { projects, projectCategories } from "@/lib/projects";
import { useEffect, useState } from "react";

const FEATURED_COUNT = 6;
const FILTERS = ["All", ...projectCategories] as const;

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("All");
    const [scrollTarget, setScrollTarget] = useState<string | null>(null);
    // "All" keeps the featured / show-more split; a category shows every match
    const isAll = activeFilter === "All";
    const filteredProjects = isAll ? projects : projects.filter((p) => p.categories.includes(activeFilter));
    const visibleProjects = isAll && !showAll ? projects.slice(0, FEATURED_COUNT) : filteredProjects;
    const hiddenCount = projects.length - FEATURED_COUNT;

    // Returning from a project page lands on /#project-<id>: expand if that card is hidden, then scroll to it
    useEffect(() => {
        const target = window.location.hash.slice(1);
        const idx = projects.findIndex((p) => `project-${p.id}` === target);
        if (idx === -1) return;
        const frame = requestAnimationFrame(() => {
            if (idx >= FEATURED_COUNT) setShowAll(true);
            setScrollTarget(target);
        });
        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        if (scrollTarget) document.getElementById(scrollTarget)?.scrollIntoView({ block: "center" });
    }, [scrollTarget]);

    return (
        <section id="projects" className="relative scroll-mt-24 py-32 bg-muted/30 flex justify-center px-4 overflow-hidden">
            {/* Ambient glow blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute top-20 -right-40 h-[26rem] w-[26rem] rounded-full bg-purple-600/10 blur-3xl animate-[float-blob_17s_ease-in-out_infinite]" />
                <div className="absolute bottom-40 -left-40 h-[22rem] w-[22rem] rounded-full bg-cyan-500/10 blur-3xl animate-[float-blob_13s_ease-in-out_infinite_reverse]" />
            </div>

            <div className="max-w-6xl w-full relative">
                {/* Section Header */}
                <Reveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h2>
                    <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From compilers and full-stack applications to embedded hardware and machine learning
                    </p>
                </Reveal>

                {/* Category Filters */}
                <div role="group" aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-3 mb-10">
                    {FILTERS.map((filter) => {
                        const isActive = activeFilter === filter;
                        return (
                            <button
                                key={filter}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                                    isActive
                                        ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                        : "border-white/10 bg-muted/40 text-foreground hover:border-blue-500/40 hover:bg-muted/70"
                                }`}
                            >
                                {filter}
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {visibleProjects.map((project, projectIdx) => {
                        const Icon = project.icon;

                        return (
                            <div key={project.id} id={`project-${project.id}`} className="h-full">
                            <Reveal delay={(projectIdx % 2) * 120} className="h-full">
                            <TiltCard className="h-full">
                            <Card className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border-0 p-0 cursor-pointer ring-1 ring-white/10 hover:ring-blue-500/30">
                                <CardContent className="p-0 flex flex-col h-full">
                                    {/* Header */}
                                    <div className={`bg-gradient-to-r ${project.gradient} bg-[length:200%_200%] group-hover:animate-[gradient-pan_3s_ease_infinite] p-6 text-white rounded-t-xl`}>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                                <Icon className="text-3xl" />
                                            </div>
                                            <div className="flex gap-2">
                                                {project.links.github && (
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="relative z-10 h-8 w-8 p-0 text-white hover:bg-white/20"
                                                        asChild
                                                    >
                                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                                                            <FaGithub className="text-xl" />
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.links.live && (
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="relative z-10 h-8 w-8 p-0 text-white hover:bg-white/20"
                                                        asChild
                                                    >
                                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`}>
                                                            <FaExternalLinkAlt className="text-lg" />
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-sm opacity-90">{project.description}</p>
                                    </div>

                                    {/* Tech Stack Icons */}
                                    <div className="px-6 py-4 bg-muted/50 border-b">
                                        <div className="flex gap-3 items-center">
                                            {project.techIcons.map((TechIcon, techIdx) => (
                                                <TechIcon key={techIdx} className="text-2xl text-muted-foreground" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Preview Content */}
                                    <div className="p-6 flex-1">
                                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                            {project.overview}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="px-6 pb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tagIdx) => (
                                                <span
                                                    key={tagIdx}
                                                    className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Read More Button (its ::after stretches over the whole card) */}
                                    <div className="px-6 pb-6">
                                        <Button
                                            asChild
                                            className="w-full bg-blue-600 hover:bg-blue-700 after:absolute after:inset-0 after:rounded-xl after:content-['']"
                                        >
                                            <Link href={`/projects/${project.id}`}>
                                                Read Full Story
                                                <FaArrowRight className="ml-2" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                            </TiltCard>
                            </Reveal>
                            </div>
                        );
                    })}
                </div>

                {/* Show More / Fewer Toggle */}
                {isAll && hiddenCount > 0 && (
                    <div className="mt-12 text-center">
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-white bg-blue-600/20 border-blue-600 hover:bg-blue-700 hover:text-white transition-colors"
                            onClick={() => {
                                if (showAll) document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                setShowAll(!showAll);
                            }}
                        >
                            {showAll ? "Show fewer projects" : `Show ${hiddenCount} more projects`}
                        </Button>
                    </div>
                )}

                {/* Call to Action */}
                <Reveal className="mt-16 text-center">
                    <Card className="p-8 bg-muted/50 border-2 border-border">
                        <p className="text-lg text-muted-foreground mb-4">
                            Want to see more of my work?
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                                <a href="https://github.com/evansminotwood" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="mr-2" />
                                    View GitHub Profile
                                </a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-white bg-blue-600/20 border-blue-600 hover:bg-blue-700 hover:text-white transition-colors">
                                <a href="https://www.linkedin.com/in/e-minot-wood" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="mr-2" />
                                    LinkedIn
                                </a>
                            </Button>
                        </div>
                    </Card>
                </Reveal>
            </div>
        </section>
    );
}