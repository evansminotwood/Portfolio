// components/layout/Navbar.tsx
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

const imgSrc = process.env.NODE_ENV === 'production'
    ? '/Portfolio/images/Evans-Minot-Wood.jpg'
    : '/images/Evans-Minot-Wood.jpg';

export default function Navbar({
    onToggleResume,
    onNavClick, // new callback
}: {
    onToggleResume: () => void;
    onNavClick?: () => void;
}) {
    const handleNavClick = (id: string) => {
        onNavClick?.(); // reset viewingProjectDetail if provided
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -96; // offset for fixed navbar height
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 z-50 w-full border-b bg-background">
            <div className="container mx-auto flex items-center justify-between py-4">
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

                {/* Right: Section links */}
                <NavigationMenu>
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

                        {/* Resume link now toggles the floating resume panel */}
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault(); // prevent scrolling
                                    onToggleResume();
                                }}
                            >
                                Resume
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}
