import { useState } from "react";
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

export default function Navbar({
    onToggleResume,
    onNavClick,
}: {
    onToggleResume: () => void;
    onNavClick?: () => void;
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const imgSrc = process.env.NODE_ENV === 'production'
        ? '/Portfolio/images/Evans-Minot-Wood.jpg'
        : '/images/Evans-Minot-Wood.jpg';

    const handleNavClick = (id: string) => {
        onNavClick?.();
        setIsMobileMenuOpen(false);

        if (id === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const el = document.getElementById(id);
        if (el) {
            const yOffset = -96;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const handleResumeClick = () => {
        setIsMobileMenuOpen(false);
        onToggleResume();
    };

    return (
        <header className="fixed top-0 z-50 w-full border-b bg-background">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                {/* Left: Name / Home with HoverCard */}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <HoverCard openDelay={150}>
                                <HoverCardTrigger asChild>
                                    <NavigationMenuLink
                                        href="#top"
                                        className="text-lg font-semibold"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick("top");
                                        }}
                                    >
                                        Evans Minot Wood
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
                            { id: "projects", label: "Projects" },
                        ].map((link) => (
                            <NavigationMenuItem key={link.id}>
                                <NavigationMenuLink
                                    href={`#${link.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.id);
                                    }}
                                >
                                    {link.label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}

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

                {/* Mobile Hamburger Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="container mx-auto py-4 flex flex-col gap-2">
                        {[
                            { id: "about", label: "About" },
                            { id: "education", label: "Education" },
                            { id: "experience", label: "Experience" },
                            { id: "projects", label: "Projects" },
                        ].map((link) => (
                            <Button
                                key={link.id}
                                variant="ghost"
                                className="justify-start text-base"
                                onClick={() => handleNavClick(link.id)}
                            >
                                {link.label}
                            </Button>
                        ))}
                        <Button
                            variant="ghost"
                            className="justify-start text-base"
                            onClick={handleResumeClick}
                        >
                            Resume
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}