"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaCode, FaGithub, FaExternalLinkAlt, FaLaptopCode, FaMusic, FaMountain, FaArrowRight, FaLinkedin, FaCamera, FaEdit, FaGlobe } from "react-icons/fa";
import { SiReact, SiPython, SiJavascript, SiAwslambda, SiSpotify, SiNextdotjs, SiNodedotjs, SiMysql, SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiGit, SiC, SiGo, SiRust, SiNumpy, SiScikitlearn, SiPandas, SiGooglechrome, SiPostgresql, SiDocker, SiFastapi, SiPytorch } from "react-icons/si";

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
            gradient: "from-blue-500 via-purple-500 to-cyan-500",
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
            gradient: "from-purple-600 via-violet-600 to-amber-500",
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
        aureus: {
            id: "aureus",
            title: "Aureus",
            subtitle: "AI-Powered Coin Portfolio Manager with PCGS Integration",
            description: "A production-ready, cloud-native platform for managing coin collections featuring automated AI-based identification, professional coin grading integration (PCGS API), real-time metal composition analysis, melt value calculations, and comprehensive portfolio analytics.",
            icon: SiGo,
            gradient: "from-yellow-500 via-amber-500 to-orange-600",
            tags: ["Full Stack", "Machine Learning", "Computer Vision", "FinTech", "API Integration"],
            techIcons: [
                SiGo,
                SiNextdotjs,
                SiPostgresql,
                SiDocker,
                SiPython,
                SiFastapi,
                SiPytorch
            ],
            links: {
                live: "",
                github: "https://github.com/evansminotwood/Aureus"
            },
            date: "2025",
            team: "Personal Project",
            coverImage: "/projects/Aureus.png",
            overview: "Aureus is a comprehensive, distributed coin portfolio management platform integrating multiple data sources and AI models. It combines a high-performance Go backend, modern Next.js frontend, and dedicated ML microservice for image analysis. The platform features PCGS API integration for professional grading data, automated metal composition tracking with spot price integration, historical price snapshots, and intelligent auto-population workflows that streamline data entry while maintaining data integrity.",
            problem: "Coin collectors face fragmented workflows: spreadsheets for tracking, manual PCGS lookups for grading data, separate calculations for metal content and melt values, and limited tools for image-based identification. Professional platforms are expensive and lack ML capabilities, while free tools don't integrate multiple data sources or provide comprehensive portfolio analytics.",
            solution: "Built a production-grade microservices architecture that unifies coin identification, professional grading data, metal composition analysis, and portfolio management. The system intelligently combines AI-powered image analysis (CLIP + OCR), real-time PCGS API integration, automated metal composition lookups, and spot price tracking. Smart auto-population features reduce manual data entry while allowing user override, and comprehensive error handling ensures graceful degradation when external APIs are unavailable.",
            features: [
                {
                    title: "AI-Powered Multi-Coin Detection & Identification",
                    description: "Upload images containing multiple coins and receive automated identification using CLIP (ViT-B/32) zero-shot classification combined with Hough Circle Transform detection. The system extracts coin type, year (via multi-method OCR), denomination, and provides confidence scores for each detection."
                },
                {
                    title: "PCGS API Integration & Auto-Population",
                    description: "Enter a PCGS certification number to automatically populate coin details including grade, year, mint mark, denomination, and current market value from the Professional Coin Grading Service API. Features intelligent error handling with user-friendly feedback for invalid cert numbers."
                },
                {
                    title: "Automated Metal Composition & Melt Value",
                    description: "Automatically determine metal composition (gold, silver, copper, nickel percentages) based on coin type and year. Calculate real-time melt values using current spot prices with year-specific composition accuracy (e.g., pre-1965 vs post-1965 silver content)."
                },
                {
                    title: "Historical Price Tracking & Snapshots",
                    description: "Track coin values over time with price history snapshots. Store both numismatic (collector) and melt values, enabling portfolio performance analysis and trend visualization."
                },
                {
                    title: "Smart Data Entry Workflows",
                    description: "Intelligent auto-population reduces manual data entry: PCGS cert numbers fill grade/year/value, coin types auto-fill metal composition, and ML detection pre-populates multiple fields. Users maintain full control with override capabilities and clear validation feedback."
                },
                {
                    title: "Portfolio & Collection Management",
                    description: "Create unlimited portfolios with full CRUD operations. Track purchase prices separately from current values, add detailed notes, manage quantities, and view aggregate statistics including total value, cost basis, and gains/losses."
                },
                {
                    title: "Comprehensive RESTful API",
                    description: "Well-documented REST API with endpoints for authentication, portfolios, coins, PCGS integration, metal prices, and price history. Features consistent error handling, JWT authentication, and modular handler architecture."
                },
                {
                    title: "Secure Authentication & Storage",
                    description: "JWT-based authentication with bcrypt password hashing protects user data. MinIO provides S3-compatible object storage for coin images with automatic thumbnail generation."
                }
            ],
            imageAnalysisService: {
                overview: "A production-ready FastAPI microservice handling all computer vision and ML tasks. Runs entirely self-hosted with no external API dependencies, supporting both single-coin identification and multi-coin batch processing from a single image.",
                capabilities: [
                    "Zero-shot coin classification using OpenAI CLIP (ViT-B/32) - no training data required",
                    "Multi-coin detection using Hough Circle Transform with optimized parameters (dp=1.5, minDist=100px)",
                    "Advanced OCR with 5 preprocessing methods: binary threshold, inverted threshold, CLAHE enhancement, adaptive threshold, and 3x upscaling",
                    "Regex-based year extraction (1700-2199) with position-based validation",
                    "Confidence scoring with per-coin accuracy metrics",
                    "Metal composition integration and melt value calculations",
                    "Batch processing: analyze multiple coins in one request with individual region extraction"
                ],
                performance: {
                    cpu: "Single coin ~100-500ms on Apple M4 Pro (model cached)",
                    multiCoin: "3-5 coins ~500ms-2s including detection",
                    memory: "Base: 500MB, With CLIP loaded: ~1.5GB, Peak: ~2GB",
                    accuracy: "85-95% on clear images, handles worn coins and varied lighting"
                },
                endpoints: {
                    identify: "POST /identify - Single coin identification with detailed metadata",
                    analyze: "POST /analyze - Multi-coin detection and batch analysis",
                    health: "GET /health - Service health check"
                }
            },
            technicalHighlights: [
                "Go (Gin) REST API with clean separation: handlers, middleware, models, services organized in internal packages",
                "PCGS API client with proper error handling, JWT token auth, and graceful degradation",
                "Next.js 14 App Router with TypeScript, Tailwind CSS, shadcn/ui, and React Hook Form",
                "Python FastAPI ML microservice using CLIP (ViT-B/32), OpenCV, and Tesseract OCR",
                "Zero-shot vision-language classification - no labeled training data required",
                "PostgreSQL with GORM ORM featuring auto-migrations, UUID primary keys, and foreign key relationships",
                "Metal composition database with year-specific data (e.g., 1964 vs 1965 silver content changes)",
                "Price history snapshots with timestamp tracking for portfolio performance analysis",
                "Redis caching layer for frequently accessed data and API response caching",
                "Docker Compose orchestration managing 4 services: backend, database, cache, ML service",
                "MinIO S3-compatible object storage with automatic image and thumbnail handling",
                "Comprehensive API documentation with detailed README files for each service",
                "Smart auto-population workflows with user override capabilities and clear validation feedback"
            ],
            technologies: [
                "Go",
                "Next.js",
                "TypeScript",
                "Python",
                "FastAPI",
                "PyTorch",
                "CLIP",
                "OpenCV",
                "Tesseract OCR",
                "PostgreSQL",
                "Redis",
                "Docker",
                "MinIO"
            ],
            outcomes: [
                "Built a production-ready distributed system integrating 3 languages (Go, TypeScript, Python) and 4 distinct services",
                "Integrated multiple external APIs (PCGS, metal spot prices) with comprehensive error handling and fallback strategies",
                "Implemented a real-world zero-shot ML pipeline achieving 85-95% accuracy without custom training data",
                "Created intelligent auto-population workflows that reduced data entry time by ~70% while maintaining data quality",
                "Designed extensible architecture supporting future enhancements: more grading services, additional coin types, fine-tuned models",
                "Delivered comprehensive documentation (3 detailed README files) enabling easy onboarding and maintenance"
            ],
            lessonsLearned: [
                "Zero-shot models (CLIP) are exceptionally powerful when labeled data is scarce or expensive to obtain",
                "Hybrid ML systems (CLIP + OCR) significantly outperform single-model approaches on real-world, noisy inputs",
                "External API integration requires thoughtful error handling - graceful degradation is crucial for user experience",
                "Smart auto-population must balance convenience with user control - always allow manual override",
                "Clear service boundaries and well-documented APIs make distributed systems manageable and scalable",
                "Comprehensive documentation early in development pays dividends in maintenance and feature additions",
                "Domain-specific data (metal composition by year, PCGS grading standards) adds substantial value beyond basic CRUD"
            ]
        },
        advent2025: {
            id: "advent2025",
            title: "Advent Of Code Solution Runner",
            subtitle: "Automated Python Framework for Algorithmic Challenges",
            description: "A custom-built Python framework for solving Advent of Code problems, featuring automatic input fetching, runtime analysis, and empirical Big-O complexity estimation.",
            icon: SiPython,
            gradient: "from-orange-500 via-red-500 to-rose-600",
            tags: ["Python", "Algorithms", "Automation", "Performance Analysis"],
            techIcons: [SiPython],
            links: {
                live: "https://github.com/evansminotwood/AOC-2025",
                github: "https://github.com/evansminotwood/Adevnt-Of-Code-Solution-Runner"
            },
            date: "Dec 2025",
            team: "Personal Project",
            overview: "Built a comprehensive Python framework for tackling Advent of Code challenges with automated input management, solution execution, and performance profiling. The runner includes empirical complexity analysis to help understand algorithmic efficiency.",
            problem: "Solving algorithmic puzzles requires managing inputs, testing multiple solution parts, measuring performance, and understanding time complexity. Doing this manually for each problem is tedious and error-prone, slowing down the learning process.",
            solution: "Developed an automated runner that handles the entire workflow: fetches inputs via session authentication, executes solutions with precise timing, estimates Big-O complexity empirically by running on scaled data subsets, and provides formatted output with performance metrics.",
            features: [
                {
                    title: "Automatic Input Management",
                    description: "Fetches and caches problem inputs using AOC session authentication. Inputs are stored locally and reused, eliminating manual downloads and ensuring consistent test data."
                },
                {
                    title: "Empirical Complexity Analysis",
                    description: "Estimates algorithmic complexity by running solutions on scaled subsets (25%, 50%, 100%) of input data and analyzing runtime growth patterns. Provides Big-O classifications from O(1) to O(n!)."
                },
                {
                    title: "Flexible Execution Modes",
                    description: "Run individual days, the latest solution, or all implemented days for a year. Supports multiple years and automatically detects available solutions."
                },
                {
                    title: "Performance Profiling",
                    description: "High-precision timing with formatted output showing at least 3 significant figures. Helps identify optimization opportunities and track performance improvements."
                }
            ],
            technicalHighlights: [
                "Empirical Big-O estimation using logarithmic regression on scaled runtime data",
                "Modular architecture supporting multiple years and extensible solution structure",
                "Environment-based configuration for secure session management",
                "Dynamic module loading with automatic solution detection",
                "NumPy-powered complexity analysis with polynomial fitting"
            ],
            technologies: ["Python", "NumPy", "Algorithms", "Performance Analysis", "Automation", "REST APIs"],
            outcomes: [
                "Built a reusable framework that streamlines algorithmic problem-solving workflows",
                "Solved 5+ days of Advent of Code 2025 challenges (12 problems posted as of Saturday, December 20th) using the runner",
                "Implemented empirical complexity estimation to better understand solution efficiency",
                "Created a maintainable system for continued practice and learning"
            ],
            lessonsLearned: [
                "Good tooling amplifies learning by removing friction from the practice loop",
                "Empirical analysis provides practical insights that complement theoretical Big-O knowledge",
                "Building infrastructure early pays dividends across multiple problems",
                "Well-structured automation makes it easier to return to projects after breaks"
            ]
        },
        deadheadsShortcut: {
            id: "deadheadsShortcut",
            title: "DeadHeads' Shortcut",
            subtitle: "Chrome Extension for Grateful Dead Archive Access",
            description: "A Chrome extension that enhances the Grateful Dead fan experience by adding direct Archive.org links to show listings on gratefulsets.net, enabling instant access to live recordings.",
            icon: SiGooglechrome,
            gradient: "from-purple-500 via-pink-500 to-orange-400",
            tags: ["Chrome Extension", "JavaScript", "Web Scraping", "Music", "DOM Manipulation"],
            techIcons: [SiJavascript, SiGooglechrome],
            links: {
                live: null,
                github: "https://github.com/evansminotwood/deadheads-shortcut"
            },
            date: "Dec 2025",
            team: "30 Days of Dead 2025 Initiative",
            overview: "Built for the 30 Days of Dead 2025 event, this Chrome extension seamlessly integrates Archive.org links into Grateful Dead show tables on gratefulsets.net. It automatically detects show dates and provides one-click access to live recordings, making it easier for fans to explore the band's extensive archive.",
            problem: "Grateful Dead fans frequently browse show listings on gratefulsets.net but must manually navigate to Archive.org to find recordings. This creates friction in the discovery process and interrupts the flow of exploring setlists and finding listenable versions.",
            solution: "Developed a Manifest V3 Chrome extension that uses content scripts to detect show tables, extract dates, and dynamically inject Archive.org links with headphone emoji (🎧) icons. The extension handles both static and dynamically-loaded content, ensuring compatibility with modern React-driven pages.",
            features: [
                {
                    title: "Automatic Link Injection",
                    description: "Scans Grateful Dead show tables and adds Archive.org links next to each date, enabling instant access to live recordings without leaving the page."
                },
                {
                    title: "Dynamic Content Support",
                    description: "Uses MutationObserver to detect page updates and automatically add links to newly loaded content, ensuring compatibility with single-page applications."
                },
                {
                    title: "Quick Navigation",
                    description: "Clicking the extension icon opens the Grateful Dead songs page directly, providing fast access to the main browsing interface."
                },
                {
                    title: "Smart Table Detection",
                    description: "Intelligently identifies the correct show table by looking for Date and Venue headers, with fallback strategies for different page layouts."
                }
            ],
            technicalHighlights: [
                "Manifest V3 compliance with modern Chrome extension architecture",
                "DOM manipulation with intelligent table detection and colspan adjustment",
                "Debounced mutation observation to optimize performance on dynamic pages",
                "CSS injection for seamless visual integration with existing site styles",
                "Event handling to prevent link clicks from triggering row selection"
            ],
            technologies: ["JavaScript", "Chrome Extensions API", "DOM Manipulation", "CSS", "Manifest V3", "MutationObserver"],
            outcomes: [
                "Streamlined the workflow for Grateful Dead fans exploring live recordings",
                "Created a lightweight, non-intrusive extension that enhances the browsing experience",
                "Achieved zero-configuration installation with automatic detection of show tables",
                "Built a maintainable codebase with clear separation of concerns across files"
            ],
            lessonsLearned: [
                "Manifest V3 requires service workers instead of background pages, changing extension architecture patterns",
                "Debouncing mutation observers is critical for performance when monitoring dynamic content",
                "Colspan adjustments and careful DOM insertion ensure visual consistency with existing layouts",
                "Content scripts must be resilient to varied page structures and loading patterns"
            ]
        },
        spotify: {
            id: "spotify",
            title: "Spotify Song Requester",
            subtitle: "DJ Playlist Management Tool",
            description: "Next.js application enabling users to search and request songs for DJ playlists with Spotify API integration",
            icon: FaMusic,
            gradient: "from-emerald-500 via-green-500 to-teal-600",
            tags: ["Next.js", "Spotify API", "TypeScript", "React"],
            techIcons: [SiNextdotjs, SiSpotify, SiReact],
            links: {
                live: null,
                github: null
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
            gradient: "from-sky-400 via-blue-500 to-slate-600",
            tags: ["ThingLink", "360° Photography", "Interactive Media", "Education"],
            techIcons: [FaCamera, FaEdit, FaGlobe],
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
                "Accessibility features including keyboard navigation and alternative text for screen readers"
            ],
            technologies: ["ThingLink Platform", "360° Photography", "Interactive Media Design", "Multimedia Integration", "UX Design", "Educational Technology"],
            outcomes: [
                "Successfully delivered polished virtual tour to Mount Washington Observatory and six sponsors on schedule",
                "Created accessible educational resource to be used by K-12 schools, universities, and weather education programs",
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
        projectsData.aureus,
        projectsData.compiler,
        projectsData.advent2025,
        projectsData.shopcomp,
        projectsData.deadheadsShortcut,
        projectsData.spotify,
        projectsData.mtwash
    ];

    // Technology carousel - comprehensive list of all technologies used
    const technologies = [
        // Languages
        { icon: SiC, name: "C", color: "text-[#A8B9CC]", bgLight: "bg-slate-900", bgDark: "dark:bg-slate-800" },
        { icon: SiPython, name: "Python", color: "text-[#3776AB]", bgLight: "bg-yellow-50", bgDark: "dark:bg-blue-950" },
        { icon: SiGo, name: "Go", color: "text-[#00ADD8]", bgLight: "bg-slate-900", bgDark: "dark:bg-cyan-950" },
        { icon: SiRust, name: "Rust", color: "text-[#000000] dark:text-[#FFFFFF]", bgLight: "bg-orange-50", bgDark: "dark:bg-gray-900" },
        { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]", bgLight: "bg-gray-900", bgDark: "dark:bg-yellow-950" },
        { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]", bgLight: "bg-blue-50", bgDark: "dark:bg-blue-950" },
        // Frontend Frameworks/Libraries
        { icon: SiReact, name: "React", color: "text-[#61DAFB]", bgLight: "bg-slate-900", bgDark: "dark:bg-cyan-950" },
        { icon: SiNextdotjs, name: "Next.js", color: "text-foreground", bgLight: "bg-white", bgDark: "dark:bg-gray-900" },
        { icon: SiHtml5, name: "HTML5", color: "text-[#E34F26]", bgLight: "bg-orange-50", bgDark: "dark:bg-orange-950" },
        { icon: SiCss3, name: "CSS3", color: "text-[#1572B6]", bgLight: "bg-blue-50", bgDark: "dark:bg-blue-950" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]", bgLight: "bg-slate-900", bgDark: "dark:bg-cyan-950" },
        // Backend Frameworks
        { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]", bgLight: "bg-green-50", bgDark: "dark:bg-green-950" },
        { icon: SiFastapi, name: "FastAPI", color: "text-[#009688]", bgLight: "bg-teal-50", bgDark: "dark:bg-teal-950" },
        // ML/Data Science
        { icon: SiPytorch, name: "PyTorch", color: "text-[#EE4C2C]", bgLight: "bg-orange-50", bgDark: "dark:bg-orange-950" },
        { icon: SiNumpy, name: "NumPy", color: "text-[#013243]", bgLight: "bg-cyan-50", bgDark: "dark:bg-slate-900" },
        { icon: SiScikitlearn, name: "scikit-learn", color: "text-[#F7931E]", bgLight: "bg-orange-50", bgDark: "dark:bg-orange-950" },
        { icon: SiPandas, name: "Pandas", color: "text-[#150458]", bgLight: "bg-purple-50", bgDark: "dark:bg-purple-950" },
        // Databases
        { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#4169E1]", bgLight: "bg-blue-50", bgDark: "dark:bg-blue-950" },
        { icon: SiMysql, name: "MySQL", color: "text-[#4479A1]", bgLight: "bg-blue-50", bgDark: "dark:bg-blue-950" },
        // Cloud/DevOps
        { icon: SiAwslambda, name: "AWS Lambda", color: "text-[#FF9900]", bgLight: "bg-orange-50", bgDark: "dark:bg-orange-950" },
        { icon: SiDocker, name: "Docker", color: "text-[#2496ED]", bgLight: "bg-blue-50", bgDark: "dark:bg-blue-950" },
        // Tools
        { icon: SiGit, name: "Git", color: "text-[#F05032]", bgLight: "bg-orange-50", bgDark: "dark:bg-orange-950" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % technologies.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isPaused, technologies.length]);


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
                        <div className="relative h-32 flex items-center justify-center overflow-hidden">
                            <div
                                className="flex gap-16 absolute left-1/2"
                                style={{
                                    transform: `translateX(calc(-50% - ${currentIndex * 144}px))`,
                                    transition: 'transform 700ms ease-in-out'
                                }}
                            >
                                {/* Triple the array for seamless looping */}
                                {[...technologies, ...technologies, ...technologies].map((tech, idx) => {
                                    const Icon = tech.icon;
                                    const offset = Math.abs(idx - currentIndex);
                                    const isCenter = offset === 0;
                                    const baseScale = isCenter ? 1 : Math.max(0.7, 1 - offset * 0.15);
                                    const baseOpacity = isCenter ? 1 : Math.max(0.4, 1 - offset * 0.25);

                                    return (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center justify-center min-w-[96px] transition-all duration-300 cursor-pointer group"
                                            style={{
                                                transform: `scale(${baseScale})`,
                                                opacity: baseOpacity
                                            }}
                                            onMouseEnter={() => setIsPaused(true)}
                                            onMouseLeave={() => setIsPaused(false)}
                                        >
                                            <div className={`relative p-4 ${tech.bgLight} ${tech.bgDark} rounded-xl shadow-lg mb-3 transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-blue-500/50 group-hover:z-10`}>
                                                <Icon className={`text-6xl ${tech.color} transition-all duration-300`} />
                                            </div>
                                            <span className="text-sm font-semibold text-foreground text-center whitespace-nowrap transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                {tech.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {technologies.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        idx === currentIndex
                                            ? 'bg-blue-600 w-8'
                                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500'
                                    }`}
                                    aria-label={`Go to ${technologies[idx].name}`}
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