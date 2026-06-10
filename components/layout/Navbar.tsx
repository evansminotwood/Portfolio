import { useState } from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { projects } from "@/lib/projects";

export default function Navbar({
    onToggleResume,
}: {
    onToggleResume: () => void;
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const imgSrc = '/images/Evans-Minot-Wood.jpg';

    const handleResumeClick = () => {
        setIsMobileMenuOpen(false);
        onToggleResume();
    };

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Left: Name / Home with HoverCard */}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <HoverCard openDelay={150}>
                                <HoverCardTrigger asChild>
                                    <NavigationMenuLink asChild className="text-lg font-semibold">
                                        <Link href="/">Evans Minot Wood</Link>
                                    </NavigationMenuLink>
                                </HoverCardTrigger>

                                <HoverCardContent className="w-72">
                                    <div className="flex gap-3">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage
                                                src={imgSrc}
                                                alt="Evans Minot Wood"
                                            />
                                            <AvatarFallback>EMW</AvatarFallback>
                                        </Avatar>

                                        <div className="space-y-1">
                                            <p className="font-medium leading-none">Evans Minot Wood</p>
                                            <p className="text-sm text-muted-foreground">
                                                Computer Science & Data Science @ WPI
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Software • AI • Music
                                            </p>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Desktop Navigation - Hidden on mobile */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex gap-4">
                        {[
                            { id: "about", label: "About" },
                            { id: "education", label: "Education" },
                            { id: "experience", label: "Experience" },
                        ].map((link) => (
                            <NavigationMenuItem key={link.id}>
                                <NavigationMenuLink asChild>
                                    <Link href={`/#${link.id}`}>{link.label}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}

                        {/* Projects: click navigates, hover shows top projects */}
                        <NavigationMenuItem className="relative group/projects">
                            <NavigationMenuLink asChild>
                                <Link href="/#projects">Projects</Link>
                            </NavigationMenuLink>

                            <div className="pointer-events-none invisible absolute right-0 top-full z-50 w-80 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover/projects:pointer-events-auto group-hover/projects:visible group-hover/projects:translate-y-0 group-hover/projects:opacity-100 group-focus-within/projects:pointer-events-auto group-focus-within/projects:visible group-focus-within/projects:translate-y-0 group-focus-within/projects:opacity-100">
                                <div className="rounded-xl border border-white/10 bg-background/95 p-2 shadow-2xl backdrop-blur-md">
                                    {projects.slice(0, 3).map((project) => {
                                        const Icon = project.icon;
                                        return (
                                            <Link
                                                key={project.id}
                                                href={`/projects/${project.id}`}
                                                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted/60"
                                            >
                                                <div className={`shrink-0 rounded-md bg-gradient-to-br ${project.gradient} p-2 text-white`}>
                                                    <Icon className="text-lg" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="truncate text-sm font-semibold text-foreground">{project.title}</p>
                                                    <p className="truncate text-xs text-muted-foreground">{project.subtitle}</p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                    <div className="mt-1 border-t border-white/10 pt-1">
                                        <Link
                                            href="/#projects"
                                            className="block rounded-lg p-2 text-center text-xs font-medium text-blue-400 transition-colors hover:bg-muted/60"
                                        >
                                            View all {projects.length} projects →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onToggleResume();
                                }}
                            >
                                Resume
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Right Side: Resume Button + Hamburger */}
                <div className="flex items-center gap-2 md:hidden">
                    {/* Resume Button - Always visible on mobile */}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleResumeClick}
                        className="text-sm font-medium"
                    >
                        Resume
                    </Button>

                    {/* Hamburger Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu - No longer includes Resume */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-md">
                    <nav className="container mx-auto py-4 flex flex-col gap-2">
                        {[
                            { id: "about", label: "About" },
                            { id: "education", label: "Education" },
                            { id: "experience", label: "Experience" },
                            { id: "projects", label: "Projects" },
                        ].map((link) => (
                            <Button
                                key={link.id}
                                asChild
                                variant="ghost"
                                className="justify-start text-base"
                            >
                                <Link
                                    href={`/#${link.id}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}