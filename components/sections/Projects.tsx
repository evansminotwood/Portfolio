"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaCode, FaGithub, FaExternalLinkAlt, FaLaptopCode, FaMusic, FaMountain, FaArrowRight, FaLinkedin } from "react-icons/fa";
import { SiReact, SiPython, SiJavascript, SiAwslambda, SiSpotify, SiNextdotjs, SiNodedotjs, SiMysql, SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiGit, SiExpress, SiC, SiGo, SiRust, SiNumpy, SiScikitlearn, SiPandas } from "react-icons/si";

// Import the ProjectDetail component
import ProjectDetail from "./ProjectDetail";

export default function Projects({
    selectedProject,
    setSelectedProject,
    onViewChange,
}: {
    selectedProject: string | null;
    setSelectedProject: (id: string | null) => void;
    onViewChange?: (isDetailView: boolean) => void;
}) {

    const projectsData = {
        shopcomp: {
            id: "shopcomp",
            title: "ShopComp.online",
            subtitle: "AI-Powered Receipt Management Platform",
            description: "Full-stack web application for shopper, receipt, and store management with AI-powered receipt analysis",
            icon: FaLaptopCode,
            gradient: "from-blue-600 to-cyan-600",
            tags: ["React", "Node.js", "AWS Lambda", "Aurora RDS", "Gemini API"],
            techIcons: [SiReact, SiJavascript, SiAwslambda],
            links: {
                live: null,
                github: null
            },
            // Blog-style content
            date: "Fall 2024",
            team: "Team of 4",
            overview: "ShopComp is a comprehensive receipt and shopping management platform that leverages AI to automatically analyze and categorize receipts. Built as a full-stack application, it serves shoppers, store managers, and administrators with distinct workflows tailored to each role.",
            problem: "Managing receipts and tracking shopping expenses is tedious and error-prone. Manual data entry is time-consuming, and organizing receipts across multiple stores and shoppers becomes overwhelming quickly.",
            solution: "We built an intelligent platform that uses Google's Gemini AI to automatically extract data from receipt images. The serverless architecture on AWS ensures scalability, while our microservices design allows each component to operate independently and efficiently.",
            features: [
                {
                    title: "AI-Powered Receipt Analysis",
                    description: "Upload receipt images and let Gemini AI automatically extract items, prices, store information, and totals with high accuracy."
                },
                {
                    title: "Dynamic Shopping Lists",
                    description: "Create and manage shopping lists with fuzzy search capabilities that help you find items even with typos or partial names."
                },
                {
                    title: "Multi-Role Architecture",
                    description: "Separate interfaces for shoppers, store managers, and administrators, each with role-specific features and permissions."
                },
                {
                    title: "Store Chain Management",
                    description: "Administrators can manage store chains, locations, and hierarchies for organized data across franchises."
                }
            ],
            technicalHighlights: [
                "Serverless backend with AWS Lambda & API Gateway for automatic scaling and cost efficiency",
                "Aurora RDS database with optimized SQL schemas for complex queries and relationships",
                "Microservices architecture handling authentication, shopping lists, and receipt processing independently",
                "React front-end with modern UI/UX patterns and responsive design",
                "RESTful API design following best practices for maintainability and extensibility"
            ],
            technologies: ["React", "Node.js", "Express", "AWS Lambda", "API Gateway", "Aurora RDS", "PostgreSQL", "Gemini AI", "JavaScript", "CSS"],
            outcomes: [
                "Successfully processed hundreds of receipt images with 90%+ accuracy",
                "Reduced manual data entry time by 85% through AI automation",
                "Achieved sub-second API response times through optimized queries",
                "Built scalable infrastructure capable of handling thousands of concurrent users"
            ],
            lessonsLearned: [
                "Serverless architecture requires careful consideration of cold starts and execution time limits",
                "AI model integration needs robust error handling and fallback mechanisms for edge cases",
                "Database schema design is critical - early optimization saved countless hours later",
                "Microservices require clear API contracts and thorough documentation for team collaboration"
            ]
        },
        compiler: {
            id: "compiler",
            title: "Python-to-x86 Compiler",
            subtitle: "Full-Featured Language Compiler",
            description: "Fully functional compiler that transforms Python code into optimized x86 assembly with advanced language features",
            icon: FaCode,
            gradient: "from-purple-600 to-pink-600",
            tags: ["Python", "x86 Assembly", "LALR Parser", "Compiler Design"],
            techIcons: [SiPython],
            links: {
                live: null,
                github: null
            },
            date: "Spring 2024",
            team: "Individual Project",
            overview: "A comprehensive compiler that translates Python source code into executable x86 assembly. This project implements all stages of compilation from lexical analysis through code generation, supporting multiple programming paradigms including functional, procedural, and declarative features.",
            problem: "Understanding how high-level programming languages are translated into machine code is fundamental to computer science, but most students only learn the theory. Building a real compiler bridges that gap and reveals the complexity beneath simple Python syntax.",
            solution: "I implemented a complete compiler pipeline using established compiler construction techniques. The LALR parser generates abstract syntax trees, which are then optimized through dataflow analysis before final code generation to x86 assembly.",
            features: [
                {
                    title: "Multi-Paradigm Support",
                    description: "Supports declarative, procedural, and functional programming styles, allowing for flexible code organization and multiple approaches to problem-solving."
                },
                {
                    title: "Automatic Garbage Collection",
                    description: "Implements reference counting and mark-and-sweep garbage collection to automatically manage memory and prevent leaks."
                },
                {
                    title: "Lexically Scoped Lambdas",
                    description: "Full support for closures and lambda functions with proper variable capture, enabling functional programming patterns."
                },
                {
                    title: "Optimization Pipeline",
                    description: "Multiple optimization passes including constant folding, dead code elimination, and register allocation for efficient code generation."
                }
            ],
            technicalHighlights: [
                "LALR(1) parser generator for robust syntax analysis with clear error messages",
                "Three-address code intermediate representation for platform-independent optimization",
                "Dataflow analysis for liveness and reaching definitions to inform optimizations",
                "Register allocation using graph coloring algorithms",
                "Stack frame management for function calls and local variable storage",
                "Type checking and inference for catching errors early in compilation"
            ],
            technologies: ["Python", "x86 Assembly", "LALR Parser", "PLY (Python Lex-Yacc)", "Compiler Theory", "Computer Architecture"],
            outcomes: [
                "Successfully compiles complex Python programs including recursive functions and nested closures",
                "Generated assembly code runs 10-15% faster than naive code generation through optimizations",
                "Comprehensive test suite with 100+ test cases covering edge cases and language features",
                "Detailed error messages that pinpoint syntax and semantic errors with line numbers"
            ],
            lessonsLearned: [
                "Compiler construction requires meticulous attention to detail - small bugs cause cascading failures",
                "Intermediate representations are crucial for separation of concerns between analysis and generation",
                "Optimization is a balancing act between compilation time and runtime performance",
                "Understanding assembly deepened my appreciation for what high-level languages abstract away"
            ]
        },
        spotify: {
            id: "spotify",
            title: "Spotify Song Requester",
            subtitle: "DJ Playlist Management Tool",
            description: "Next.js application enabling users to search and request songs for DJ playlists with Spotify API integration",
            icon: FaMusic,
            gradient: "from-green-600 to-emerald-600",
            tags: ["Next.js", "Spotify API", "TypeScript", "React"],
            techIcons: [SiNextdotjs, SiSpotify, SiReact],
            links: {
                live: null,
                github: "https://github.com/evansminotwood/Song-Requester"
            },
            date: "Summer 2024",
            team: "Individual Project",
            overview: "A web application designed to streamline the song request process at live DJ events. Users can search Spotify's vast music library and submit requests to a centralized playlist, while DJs get a curated list to review in their DJ software.",
            problem: "At live events, managing song requests is chaotic. DJs receive requests verbally or through scattered messages, making it hard to track what's been requested. Meanwhile, guests struggle to remember song titles or communicate their requests clearly.",
            solution: "By integrating Spotify's search API, users can easily find songs with autocomplete suggestions. Requests are collected in a centralized playlist that DJs can review in Rekordbox, creating an organized workflow that improves both the guest and DJ experience.",
            features: [
                {
                    title: "Intelligent Song Search",
                    description: "Real-time search powered by Spotify API with autocomplete suggestions, helping users find songs even with partial titles or artist names."
                },
                {
                    title: "Centralized Request Queue",
                    description: "All requests flow into a single playlist that DJs can access, preventing duplicate requests and providing an organized queue."
                },
                {
                    title: "Rekordbox Integration",
                    description: "DJs can import the request playlist directly into Rekordbox for seamless workflow during live performances."
                },
                {
                    title: "Request History",
                    description: "Maintains a record of all requests from past events, allowing DJs to analyze popular songs and build better setlists for future events."
                }
            ],
            technicalHighlights: [
                "Next.js server-side rendering for fast initial page loads and SEO optimization",
                "OAuth 2.0 authentication flow with Spotify for secure API access",
                "React hooks for managing search state and debouncing API calls to reduce requests",
                "TypeScript for type safety and better developer experience",
                "Responsive design that works seamlessly on mobile devices at events",
                "Real-time updates using polling to keep the request list current"
            ],
            technologies: ["Next.js", "React", "TypeScript", "Spotify Web API", "OAuth 2.0", "Tailwind CSS", "Node.js"],
            outcomes: [
                "Successfully deployed at multiple live DJ events with 50+ concurrent users",
                "Reduced DJ workload by organizing requests in advance of the event",
                "Improved guest satisfaction by providing an easy way to make song requests",
                "Created a valuable dataset of song preferences for future event planning"
            ],
            lessonsLearned: [
                "API rate limiting requires careful management - debouncing and caching are essential",
                "Real-time features need to balance freshness with server load and costs",
                "User experience design is critical for apps used in noisy, distracting environments",
                "OAuth flows can be tricky - thorough testing of authentication edge cases is important"
            ]
        },
        mtwash: {
            id: "mtwash",
            title: "Mount Washington Summit Virtual Tour",
            subtitle: "Interactive Educational Experience",
            description: "Interactive 360° virtual tour created with ThingLink in collaboration with Mount Washington Observatory",
            icon: FaMountain,
            gradient: "from-red-600 to-grey-600",
            tags: ["ThingLink", "360° Photography", "Interactive Media", "Education"],
            techIcons: [SiJavascript, SiReact],
            links: {
                live: null,
                github: null
            },
            date: "Aug 2025 – Oct 2025",
            team: "Team of 4",
            overview: "An immersive 360° virtual tour of Mount Washington's summit, developed in partnership with the Mount Washington Observatory using ThingLink's no-code platform. This educational experience allows visitors worldwide to explore the summit through interactive panoramic scenes with embedded multimedia hotspots.",
            problem: "Mount Washington's summit experiences some of the world's most extreme weather conditions, making it physically inaccessible to many people. The Observatory needed a way to share their research, facilities, and the unique summit environment with students, educators, and weather enthusiasts who cannot visit in person.",
            solution: "We leveraged ThingLink's interactive 360° tour platform to create an immersive educational experience. Using high-resolution 360° photography and ThingLink's drag-and-drop hotspot system, we built a self-paced virtual tour with embedded videos, audio narration, informational pop-ups, and seamless scene-to-scene navigation.",
            features: [
                {
                    title: "Interactive 360° Panoramas",
                    description: "High-resolution 360° photospheres of the summit captured with professional equipment, allowing visitors to look around freely as if standing on the summit, experiencing Mount Washington's dramatic views and unique architecture."
                },
                {
                    title: "Multimedia Hotspots",
                    description: "ThingLink's tag system enables clickable hotspots throughout scenes that reveal detailed information about weather instruments, building history, extreme weather phenomena, and ongoing research with images, videos, and audio."
                },
                {
                    title: "Seamless Scene Navigation",
                    description: "Transit tags connect multiple 360° scenes, creating a smooth virtual walkthrough experience from the summit building exterior through various interior rooms and observation areas."
                },
                {
                    title: "Educational Content Integration",
                    description: "Embedded videos explaining the Observatory's weather research, audio clips from meteorologists, historical photos, and interactive infographics about extreme weather patterns recorded at the summit."
                },
                {
                    title: "Multi-Stakeholder Collaboration",
                    description: "Professional presentation incorporating branding and recognition for six project sponsors while maintaining focus on educational content and the Observatory's mission."
                }
            ],
            technicalHighlights: [
                "ThingLink's no-code platform enabling rapid development without custom programming",
                "360° photography workflow with proper lighting and camera positioning for optimal image quality",
                "Organized scene architecture with logical navigation flow through the summit facilities",
                "Responsive design automatically working across desktop, tablet, mobile, and VR headsets",
                "Multimedia asset management integrating photos, videos, audio files, and text content",
                "Accessibility features including keyboard navigation and alternative text for screen readers",
                "Cloud-based hosting through ThingLink ensuring reliable access and performance"
            ],
            technologies: ["ThingLink Platform", "360° Photography", "Interactive Media Design", "Multimedia Integration", "UX Design", "Educational Technology", "Cloud Hosting"],
            outcomes: [
                "Successfully delivered polished virtual tour to Mount Washington Observatory and six sponsors on schedule",
                "Created accessible educational resource used by K-12 schools, universities, and weather education programs",
                "Reached thousands of virtual visitors in the first month, expanding the Observatory's educational reach",
                "Received positive feedback from Observatory staff, sponsors, and educators for engaging presentation",
                "Enabled year-round virtual access to the summit regardless of dangerous weather conditions"
            ],
            lessonsLearned: [
                "ThingLink's no-code platform significantly accelerated development compared to custom web solutions",
                "Capturing high-quality 360° photography requires careful planning for lighting and camera stability",
                "Balancing informational density with visual clarity—too many hotspots can overwhelm users",
                "Multi-stakeholder projects require clear communication protocols and regular milestone check-ins",
                "User testing with target audiences (students, teachers) provided invaluable feedback on navigation flow",
                "Educational content works best when organized around storytelling rather than information dumps"
            ]
        }
    };

    const projects = [
        projectsData.shopcomp,
        projectsData.compiler,
        projectsData.spotify,
        projectsData.mtwash
    ];

    // Technology carousel - based on resume skills
    const technologies = [
        // Languages
        { icon: SiC, name: "C", color: "text-[#A8B9CC]" },
        { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
        { icon: SiGo, name: "Golang", color: "text-[#00ADD8]" },
        { icon: SiRust, name: "Rust", color: "text-[#000000] dark:text-[#FFFFFF]" },
        { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
        { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
        // Frameworks/Libraries
        { icon: SiReact, name: "React", color: "text-[#61DAFB]" },
        { icon: SiNextdotjs, name: "Next.js", color: "text-foreground" },
        { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]" },
        { icon: SiNumpy, name: "NumPy", color: "text-[#013243]" },
        { icon: SiScikitlearn, name: "scikit-learn", color: "text-[#F7931E]" },
        { icon: SiPandas, name: "Pandas", color: "text-[#150458]" },
        // Cloud/Databases
        { icon: SiAwslambda, name: "AWS Lambda", color: "text-[#FF9900]" },
        { icon: SiMysql, name: "SQL", color: "text-[#4169E1]" },
        // Tools
        { icon: SiGit, name: "Git", color: "text-[#F05032]" },
        { icon: SiHtml5, name: "HTML5", color: "text-[#E34F26]" },
        { icon: SiCss3, name: "CSS3", color: "text-[#1572B6]" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-[#06B6D4]" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % technologies.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [technologies.length]);

    const handleProjectSelect = (projectId: string) => {
        setSelectedProject(projectId);
        onViewChange?.(true);

        // Scroll to top immediately for mobile, or with offset for desktop
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
    };

    const handleBackToProjects = () => {
        setSelectedProject(null);
        onViewChange?.(false);

        // Use setTimeout to wait for DOM to update
        setTimeout(() => {
            const el = document.getElementById("projects");
            if (el) {
                const yOffset = -96; // adjust for fixed navbar
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }, 0);
    };

    if (selectedProject) {
        const project = projectsData[selectedProject as keyof typeof projectsData];
        return <ProjectDetail project={project} onBack={handleBackToProjects} />;
    }

    // Otherwise show projects grid
    return (
        <section id="projects" className="scroll-mt-24 py-32 bg-muted/30 flex justify-center px-4">
            <div className="max-w-6xl w-full">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h2>
                    <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From compilers to full-stack applications, exploring the breadth of software engineering
                    </p>
                </div>

                {/* Technologies Carousel */}
                <div className="mb-16 overflow-hidden">
                    <div className="relative bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-blue-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
                        <h3 className="text-center text-xl font-semibold text-foreground mb-6">Technologies I Work With</h3>

                        {/* Carousel Track */}
                        <div className="relative h-24 flex items-center justify-center">
                            <div
                                className="flex gap-12 transition-transform duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * 120}px)`
                                }}
                            >
                                {/* Duplicate array for seamless loop */}
                                {[...technologies, ...technologies, ...technologies].map((tech, idx) => {
                                    const Icon = tech.icon;
                                    const offset = Math.abs(idx - currentIndex - technologies.length);
                                    const isCenter = offset === 0;
                                    const scale = isCenter ? 1 : Math.max(0.6, 1 - offset * 0.2);
                                    const opacity = isCenter ? 1 : Math.max(0.3, 1 - offset * 0.3);

                                    return (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center justify-center min-w-[80px] transition-all duration-700"
                                            style={{
                                                transform: `scale(${scale})`,
                                                opacity: opacity
                                            }}
                                        >
                                            <div className="p-3 bg-white dark:bg-white-800 rounded-lg shadow-md mb-2">
                                                <Icon className={`text-5xl ${tech.color}`} />
                                            </div>
                                            <span className="text-xs font-medium text-muted-foreground text-center whitespace-nowrap">
                                                {tech.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {technologies.slice(0, 7).map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex % 7 ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 dark:bg-gray-600'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => {
                        const Icon = project.icon;

                        return (
                            <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                <CardContent className="p-0 flex flex-col h-full">
                                    {/* Header */}
                                    <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                                <Icon className="text-3xl" />
                                            </div>
                                            <div className="flex gap-2">
                                                {project.links.github && (
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="h-8 w-8 p-0 text-white hover:bg-white/20"
                                                        asChild
                                                    >
                                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                                            <FaGithub className="text-xl" />
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.links.live && (
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="h-8 w-8 p-0 text-white hover:bg-white/20"
                                                        asChild
                                                    >
                                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
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
                                    <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-b">
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

                                    {/* Read More Button */}
                                    <div className="px-6 pb-6">
                                        <Button
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                            onClick={() => handleProjectSelect(project.id)}
                                        >
                                            Read Full Story
                                            <FaArrowRight className="ml-2" />
                                        </Button>
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
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
                        <p className="text-lg text-muted-foreground mb-4">
                            Want to see more of my work?
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
                </div>
            </div>
        </section>
    );
}