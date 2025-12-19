"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaLightbulb, FaCog } from "react-icons/fa";
import Image from "next/image";

interface ProjectDetailProps {
    project: {
        id: string;
        title: string;
        subtitle: string;
        gradient: string;
        icon: React.ComponentType<{ className?: string }>;
        date: string;
        team?: string;
        coverImage?: string;
        overview: string;
        problem: string;
        solution: string;
        features: Array<{
            title: string;
            description: string;
        }>;
        technicalHighlights: string[];
        technologies: string[];
        links: {
            live?: string | null;
            github?: string | null;
        };
        outcomes?: string[];
        lessonsLearned?: string[];
    };
    onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
    const Icon = project.icon;

    return (
        <div className="min-h-screen bg-background py-12 px-4 pt-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    className="mb-6 hover:bg-muted"
                    onClick={onBack}
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Projects
                </Button>

                {/* Hero Section */}
                <Card className="overflow-hidden shadow-xl mb-8">
                    <div className={`bg-gradient-to-r ${project.gradient} p-12 text-white relative`}>
                        <div className="absolute top-6 right-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                            <Icon className="text-5xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">{project.title}</h1>
                        <p className="text-xl opacity-90 mb-6">{project.subtitle}</p>

                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                <FaCalendarAlt />
                                <span>{project.date}</span>
                            </div>
                            {project.team && (
                                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                    <FaUsers />
                                    <span>{project.team}</span>
                                </div>
                            )}
                        </div>

                        {/* Links */}
                        {(project.links.live || project.links.github) && (
                            <div className="flex gap-3 mt-6">
                                {project.links.live && (
                                    <Button
                                        variant="secondary"
                                        asChild
                                        className="bg-white text-gray-900 hover:bg-gray-100"
                                    >
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt className="mr-2" />
                                            View Live
                                        </a>
                                    </Button>
                                )}
                                {project.links.github && (
                                    <Button
                                        variant="outline"
                                        asChild
                                        className="border-white text-white hover:bg-white/20"
                                    >
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="mr-2" />
                                            View Code
                                        </a>
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </Card>

                {/* Cover Image (if exists) */}
                {project.coverImage && (
                    <Card className="overflow-hidden mb-8">
                        <Image
                            src={project.coverImage}
                            alt={project.title}
                            width={1200}
                            height={600}
                            className="w-full h-auto"
                        />
                    </Card>
                )}

                {/* Overview */}
                <Card className="mb-8">
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.overview}
                        </p>
                    </CardContent>
                </Card>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-l-4 border-red-500">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <FaLightbulb className="text-2xl text-red-500" />
                                <h2 className="text-2xl font-bold text-foreground">The Problem</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.problem}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-l-4 border-green-500">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <FaCog className="text-2xl text-green-500" />
                                <h2 className="text-2xl font-bold text-foreground">The Solution</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.solution}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Key Features */}
                <Card className="mb-8">
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
                        <div className="space-y-6">
                            {project.features.map((feature, idx) => (
                                <div key={idx} className="border-l-4 border-blue-500 pl-6">
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Technical Highlights */}
                <Card className="mb-8">
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Technical Highlights</h2>
                        <ul className="space-y-3">
                            {project.technicalHighlights.map((highlight, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Technologies Used */}
                <Card className="mb-8">
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Technologies Used</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Outcomes */}
                {project.outcomes && project.outcomes.length > 0 && (
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Outcomes & Impact</h2>
                            <ul className="space-y-3">
                                {project.outcomes.map((outcome, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></div>
                                        <p className="text-muted-foreground leading-relaxed">{outcome}</p>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {/* Lessons Learned */}
                {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Lessons Learned</h2>
                            <ul className="space-y-3">
                                {project.lessonsLearned.map((lesson, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-600 flex-shrink-0"></div>
                                        <p className="text-muted-foreground leading-relaxed">{lesson}</p>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {/* Back Button at Bottom */}
                <div className="text-center">
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={onBack}
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to All Projects
                    </Button>
                </div>
            </div>
        </div>
    );
}