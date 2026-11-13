import { FaCode, FaLaptopCode, FaMusic, FaMountain, FaCamera, FaEdit, FaGlobe, FaDna, FaIdCard, FaServer, FaCoins, FaMicrochip } from "react-icons/fa";
import { SiReact, SiPython, SiJavascript, SiAwslambda, SiSoundcloud, SiNextdotjs, SiPostgresql, SiDocker, SiFastapi, SiPytorch, SiGooglechrome, SiGo, SiPrisma, SiHtml5, SiTailscale, SiCloudflare, SiNginxproxymanager, SiAdguard } from "react-icons/si";

export const projectsData = {
    shopcomp: {
        id: "shopcomp",
        categories: ["Software"],
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
        categories: ["Software"],
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
        ],
        // TODO: drop images in public/projects/ then uncomment:
        // media: [
        //     { type: "image" as const, src: "/projects/compiler-pipeline.png", alt: "Compiler pipeline diagram", caption: "Lexer → LALR parser → AST → dataflow optimization → x86 codegen" },
        //     { type: "image" as const, src: "/projects/compiler-output.png", alt: "Sample compilation", caption: "Python source alongside the generated x86 assembly" },
        // ],
    },
    aureus: {
        id: "aureus",
        categories: ["Software", "ML & Research"],
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
        ],
        // TODO: drop images in public/projects/ then uncomment:
        // media: [
        //     { type: "image" as const, src: "/projects/aureus-dashboard.png", alt: "Aureus portfolio dashboard", caption: "Portfolio dashboard with holdings, melt value, and historical snapshots" },
        //     { type: "image" as const, src: "/projects/aureus-identify.png", alt: "ML coin identification", caption: "CLIP + OCR pipeline identifying a coin from a photo" },
        //     { type: "image" as const, src: "/projects/aureus-pcgs.png", alt: "PCGS grading detail", caption: "Auto-populated PCGS grading data with manual override" },
        // ],
    },
    musicga: {
        id: "musicga",
        categories: ["Software", "ML & Research"],
        title: "Evolving Music",
        subtitle: "A Genetic Algorithm for Music Composition",
        description: "A full-stack web app that uses a genetic algorithm to evolve melodies in real time. Tune music-theory fitness weights in the UI, watch the melody improve generation by generation on a live piano roll, then play it back or export it as MIDI.",
        icon: FaDna,
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        tags: ["Genetic Algorithm", "Python", "FastAPI", "Next.js", "Tone.js", "Music Theory"],
        techIcons: [SiPython, SiFastapi, SiNextdotjs, SiDocker],
        links: {
            live: null,
            github: "https://github.com/evansminotwood/GA-Music"
        },
        date: "Spring 2026",
        team: "Humanities Practicum",
        overview: "Evolving Music is a digital-humanities project that sits at the intersection of computer science and music theory. Instead of searching for a pleasing melody by brute force, it maintains a population of 80 candidate melodies and improves them through natural selection — scoring each against a fitness function built from 20+ music-theory components, then selecting, recombining, and mutating the best across 150 generations. A FastAPI backend streams every generation to a Next.js frontend over Server-Sent Events, so you can watch the melody climb from random noise to a coherent, stylistically-grounded line in real time on a live piano roll, then hear it through a browser synth or export it as a standard MIDI file.",
        problem: "Genetic algorithms are usually taught as abstractions — optimizing a number, with the search invisible and the result a single answer at the end. Music is the opposite: it's experiential, governed by centuries of theory (cadences, voice leading, phrase structure, stylistic idiom) that resists being reduced to a single objective. The challenge of a Humanities Practicum was to make evolutionary computation both audible and legible: to encode genuine musical aesthetics as a fitness landscape, and to expose the search as it happens rather than hiding it behind a final output.",
        solution: "I represented each melody as a list of (pitch, duration, velocity) notes — including rests — and built a DEAP-based genetic algorithm with tournament selection, two-point crossover, adaptive mutation, and a Hall of Fame. The fitness function decomposes musicality into graded components (scale conformance, pitch contour, cadences, leading-tone resolution, phrase arch, jazz blue notes, syncopation, and more), each returning a value between 0 and 1 so the GA always has a gradient to climb. Classical and Jazz presets reshape the weights to give each style its own character. The whole run streams to the browser generation-by-generation, where a canvas piano roll, an interactive fitness chart, and a Tone.js sampler turn the optimization into something you can see and hear.",
        features: [
            {
                title: "Real-Time Generational Streaming",
                description: "The FastAPI backend runs the GA and pushes each generation to the browser over Server-Sent Events. The live piano roll and fitness chart update as the population evolves, so you watch a melody emerge from random noise across 150 generations rather than waiting for a final result."
            },
            {
                title: "Music-Theory Fitness Function",
                description: "Every individual is scored as a weighted average of 20+ components — scale conformance, pitch contour, rhythmic variety, authentic cadence, leading-tone resolution, antecedent/consequent phrasing, phrase arch, jazz blue notes, syncopation, and more. Each returns a graded 0–1 score so small improvements are always rewarded, giving the search a slope to climb instead of a flat pass/fail landscape."
            },
            {
                title: "Tunable Weights & Style Presets",
                description: "You control every fitness weight from the UI. Classical and Jazz presets don't just turn dials up — they deliberately zero out conflicting components (Classical mutes velocity variation and irregular spacing; Jazz turns off scale conformance entirely to let blue notes drive the line), so each style develops its own identity rather than a muddy average."
            },
            {
                title: "Domain-Aware Genetic Operators",
                description: "The GA encodes musical knowledge directly into its operators: bar-boundary crossover only cuts where both parents sit on a 4-beat boundary (preserving metric structure), scale-constrained mutation draws new pitches from the dominant scale, and cadence pinning fixes a V→I resolution in C-major mode. A Hall of Fame preserves the top 5% of melodies ever discovered."
            },
            {
                title: "Local Hillclimbing",
                description: "Every 10 generations a Lamarckian hillclimbing pass refines the current Hall of Fame leader — trying the two nearest pitches for each note and keeping any improvement. This accelerates late-generation convergence once the population has homogenized and crossover yields diminishing returns."
            },
            {
                title: "Browser Synth Playback & MIDI Export",
                description: "Play the evolved melody in-browser via a Tone.js sampler using the Salamander Grand Piano routed through reverb, with explicit note re-attack so repeated pitches strike distinctly. Or export the result as a standard MIDI file through a dedicated backend endpoint to open in any DAW."
            },
            {
                title: "Generation Scrubbing",
                description: "Hovering across the fitness chart scrubs through the entire evolution history — the piano roll and playback snap to whichever generation the cursor is on, then back to the final result on leave, making the algorithm's progress directly explorable."
            }
        ],
        technicalHighlights: [
            "Genetic algorithm built on DEAP with tournament selection, two-point crossover, adaptive mutation, and Hall of Fame elitism (top 5%, minimum 2)",
            "Graded fitness scoring (every component returns 0–1) instead of binary pass/fail, giving the GA a continuous gradient to optimize from generation one",
            "Bar-boundary crossover that only cuts where both parents are simultaneously on a 4-beat boundary, falling back to standard crossover when fewer than two shared boundaries exist",
            "Scale-constrained mutation that infers a pitch pool from whichever scale weight dominates (C major, Dorian/blues, or full chromatic)",
            "Fixed cadence pinning that locks the last two pitched notes to a smooth-voice-leading V→I resolution in C-major mode after every mutation pass",
            "Adaptive mutation rate that decays to 30% of its configured value by the final generation — aggressive early exploration, fine-tuning late",
            "Lamarckian local hillclimbing applied to the Hall of Fame leader every 10 generations",
            "FastAPI backend streaming generations over Server-Sent Events (GET /stream) and serving MIDI downloads (POST /generate)",
            "Tone.js Salamander Grand Piano sampler through a reverb bus, with explicit 20ms release before re-attacking repeated pitches",
            "Canvas-based piano roll and an interactive fitness chart with hover-to-scrub generation history",
            "Two standalone chord-generation strategies: a greedy rule-based harmonizer and a separate chord-progression GA",
            "Containerized with Docker Compose for one-command full-stack startup"
        ],
        technologies: ["Python", "DEAP", "pretty_midi", "librosa", "basic-pitch", "FastAPI", "Server-Sent Events", "Next.js", "React", "TypeScript", "Tone.js", "MIDI", "Tailwind CSS", "Docker"],
        outcomes: [
            "Built a full-stack system that makes evolutionary computation audible and interactive — best-individual fitness typically climbs from ~0.36 (random noise) to 0.80–0.92 over 150–200 generations",
            "Encoded centuries of music theory — scale conformance, authentic cadences, leading-tone resolution, phrase arch, jazz blue notes and syncopation — as 20+ graded, independently-weighted fitness components",
            "Demonstrated that no single component drives a good melody: the GA simultaneously satisfies scale tones, stepwise motion, rhythmic variety, and cadential structure to produce a coherent line",
            "Turned an abstract optimization into a legible artifact through real-time streaming, a live piano roll, generation scrubbing, in-browser synth playback, and MIDI export"
        ],
        lessonsLearned: [
            "Graded scoring is essential: a binary fitness function creates a flat landscape the GA can only cross by luck, while partial credit at every step gives it a slope to climb",
            "Encoding a musical style means turning components OFF as much as turning them up — a weighted average pulled in too many directions produces mediocrity; a focused set of constraints produces character",
            "Baking domain knowledge into the operators (bar-boundary crossover, scale-constrained mutation, cadence pinning) outperforms relying on fitness pressure alone to discover structure",
            "Visualization is part of the argument: streaming each generation to a piano roll and scrubable fitness chart makes the algorithm's behavior understandable to a non-technical, humanities audience in a way a final MIDI file never could"
        ],
        // TODO: drop images in public/projects/ then uncomment (coverImage shows above the overview, like Aureus):
        // coverImage: "/projects/musicga-cover.png",
        // media: [
        //     { type: "image" as const, src: "/projects/musicga-pianoroll.png", alt: "Live piano roll", caption: "The live piano roll updating generation by generation as the melody evolves" },
        //     { type: "image" as const, src: "/projects/musicga-weights.png", alt: "Fitness weight controls", caption: "Tunable music-theory fitness weights with Classical and Jazz presets" },
        //     { type: "image" as const, src: "/projects/musicga-chart.png", alt: "Fitness chart with generation scrubbing", caption: "Hover the fitness chart to scrub through the full evolution history" },
        //     { type: "video" as const, src: "/projects/musicga-demo.mp4", caption: "End-to-end demo: evolving a Classical melody and exporting it as MIDI" },
        // ],
    },
    advent2025: {
        id: "advent2025",
        categories: ["Software"],
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
        categories: ["Software"],
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
    sonus: {
        id: "sonus",
        categories: ["Software"],
        title: "Sonus",
        subtitle: "Collaborative Music Voting Platform",
        description: "A collaborative music voting platform that lets event hosts create interactive playlists where guests can request and vote on songs, powered by SoundCloud integration.",
        icon: FaMusic,
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        tags: ["Next.js", "SoundCloud API", "TypeScript", "PostgreSQL", "Prisma"],
        techIcons: [SiNextdotjs, SiSoundcloud, SiPostgresql, SiPrisma],
        links: {
            live: "https://sonus.evansminotwood.com",
            github: "https://github.com/evansminotwood/sonus"
        },
        date: "2025",
        team: "Personal Project",
        overview: "Sonus is a full-stack collaborative music platform designed for live events. Event hosts (DJs) create events that automatically generate SoundCloud playlists, while guests join via simple 6-character codes or QR codes to search, request, and vote on songs. The platform features real-time vote-based queue ordering, DJ mode with auto-advance playback, and intelligent duplicate prevention.",
        problem: "At live events, managing song requests is chaotic. DJs receive requests verbally or through scattered messages, making it hard to track what's been requested and gauge popularity. Meanwhile, guests struggle to communicate their requests clearly, and there's no democratic way to surface the most-wanted songs.",
        solution: "Built a full-stack platform where guests can easily search SoundCloud's library, add songs, and vote on requests. Votes determine queue order, giving the crowd control over what plays next. DJs get an integrated player with auto-advance that respects the vote rankings, while the SoundCloud playlist automatically syncs to match the current order.",
        features: [
            {
                title: "Event Creation & QR Codes",
                description: "Hosts create events with custom names, descriptions, and optional time windows. Each event gets a unique 6-character code and shareable QR code for easy guest access."
            },
            {
                title: "Vote-Based Queue System",
                description: "Guests upvote their favorite songs to move them up the queue. Songs are automatically sorted by vote count, ensuring the crowd's preferences drive the playlist."
            },
            {
                title: "DJ Mode with Auto-Advance",
                description: "Integrated SoundCloud player shows songs in vote order. Songs automatically play in sequence when one finishes, and played songs are tracked to prevent re-adding."
            },
            {
                title: "SoundCloud Playlist Sync",
                description: "Each event creates a linked SoundCloud playlist that automatically updates to match the current vote rankings, keeping the DJ's library in sync."
            },
            {
                title: "Guest-Friendly Access",
                description: "No account required for guests. Join with a simple code, search SoundCloud's library, add songs, and vote—all from a mobile-optimized interface."
            },
            {
                title: "Smart Duplicate Prevention",
                description: "Songs cannot be added twice to the same event. Once a song is played, it's tracked and cannot be re-added, keeping the queue fresh."
            }
        ],
        technicalHighlights: [
            "Next.js 16 App Router with TypeScript for modern full-stack development",
            "PostgreSQL database with Prisma ORM for type-safe data access",
            "NextAuth.js with SoundCloud OAuth for secure host authentication",
            "SoundCloud API integration for search, playlist creation, and widget playback",
            "Real-time updates via WebSockets for instant vote synchronization",
            "IP-hash based voting system allowing guest participation without accounts",
            "Tailwind CSS 4 with Radix UI components for responsive, accessible design",
            "Event status management (Scheduled, Active, Ended) with time-based controls"
        ],
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js", "SoundCloud API", "Tailwind CSS", "Radix UI"],
        // TODO: quantify these — e.g. number of events hosted, guests joined, songs requested/voted, sync latency after the WebSocket switch
        outcomes: [
            "Built a complete event-based music request system with democratic voting",
            "Implemented seamless SoundCloud integration for search, playback, and playlist management",
            "Created frictionless guest experience requiring no account creation",
            "Designed scalable architecture with Docker support for easy deployment"
        ],
        lessonsLearned: [
            "OAuth integration with third-party music services requires careful token management",
            "Switching from polling to WebSockets dramatically improved real-time responsiveness—polling's delays felt sluggish for live events where instant feedback matters",
            "IP-hash voting provides reasonable guest identification without authentication friction",
            "Event-based time windows add complexity but provide hosts with important control"
        ],
        // TODO: drop images in public/projects/ then uncomment (coverImage shows above the overview, like Aureus):
        // coverImage: "/projects/sonus-cover.png",
        // media: [
        //     { type: "image" as const, src: "/projects/sonus-queue.png", alt: "Live voting queue", caption: "Guests vote songs up the queue in real time" },
        //     { type: "image" as const, src: "/projects/sonus-join.png", alt: "Event join screen", caption: "Guests join with a 6-character code or QR — no account needed" },
        //     { type: "image" as const, src: "/projects/sonus-dj.png", alt: "DJ mode", caption: "DJ mode with auto-advance playback following vote rankings" },
        // ],
    },
    mtwash: {
        id: "mtwash",
        categories: ["Software"],
        title: "Mount Washington Summit Virtual Tour",
        subtitle: "Interactive Educational Experience",
        description: "Interactive 360° virtual tour created with ThingLink in collaboration with Mount Washington Observatory",
        icon: FaMountain,
        gradient: "from-sky-400 via-blue-500 to-slate-600",
        tags: ["ThingLink", "360° Photography", "Interactive Media", "Education"],
        techIcons: [FaCamera, FaEdit, FaGlobe],
        links: {
            live: "https://mountwashington.org/education/mount-washington-virtual-tour/",
            github: null
        },
        date: "Aug 2025 – Oct 2025",
        team: "Team of 4",
        overview: "An immersive 360° virtual tour of Mount Washington's summit, developed as a WPI student collaboration with the Mount Washington Observatory's education team. Delivered in just 9 weeks, the tour brings the Observatory and six partner groups — Mount Washington State Park, the Mt. Washington Auto Road, the Mount Washington Cog Railway, the Appalachian Mountain Club, the US Forest Service, and Townsquare Media — into a single digital experience for the first time, letting visitors worldwide explore the summit through interactive panoramic scenes with embedded multimedia hotspots.",
        problem: "Mount Washington's summit experiences some of the world's most extreme weather on Earth, making it inaccessible to many due to weather, cost, or physical limitations. The Observatory needed to deliver consistent K-12 educational content about an environment most students have never experienced — while coordinating six stakeholder groups beyond the Observatory itself that had never been unified into one visitor experience.",
        solution: "We spent 6 weeks on research and planning with the Observatory's Director of Education, then 3 weeks capturing 360° imagery, video, and atmospheric audio on-site at the summit. Using ThingLink's interactive tour platform, we built a self-paced experience with embedded videos, on-site audio, informational pop-ups, map and floor plan navigation, and seamless scene-to-scene transitions, consulting a Stanford University researcher to shape the educational experience.",
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
                description: "First-ever unified digital experience across the Observatory and its six partner groups — Mount Washington State Park, Mt. Washington Auto Road, Mount Washington Cog Railway, the Appalachian Mountain Club, the US Forest Service, and Townsquare Media."
            },
            {
                title: "On-Site Atmospheric Audio",
                description: "Audio recorded at the summit itself — wind, instruments, and ambient station sounds — immerses virtual visitors in the sensory experience of the world's most extreme weather station."
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
            "Delivered the complete tour in 9 weeks (6 weeks research and planning, 3 weeks on-site capture) — now live on the Observatory's website",
            "Deployed beyond the web: a 55-inch touchscreen installation at the Cog Railway museum and VR headset showcases at Observatory fundraising events",
            "Unified the Observatory and six partner groups into a single digital experience for the first time",
            "Serves K-12 science education nationwide, doubling as a pre-trip safety resource and post-visit follow-up tool",
            "Featured as a case study on ThingLink's blog, with annual content refreshes planned through future WPI student cohorts",
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
    },
    pcbcard: {
        id: "pcbcard",
        categories: ["Hardware"],
        title: "PCB Business Card",
        subtitle: "Dual-NFC Printed Circuit Board Business Card",
        description: "My first PCB design: a business card with two separate NFC tags. One opens my resume, the other opens evansminotwood.com.",
        icon: FaIdCard,
        gradient: "from-green-700 via-emerald-600 to-yellow-500",
        tags: ["PCB Design", "NFC", "Hardware", "Electronics"],
        // TODO: add design tool icon once confirmed (e.g. SiKicad)
        techIcons: [FaMicrochip],
        // TODO: add GitHub link
        links: {
            live: null,
            github: null
        },
        date: "Nov 2026",
        team: "Personal Project",
        overview: "My first printed circuit board design is a business card that is itself a PCB. It carries two separate NFC tags: tapping one with a phone opens my resume, and tapping the other opens evansminotwood.com. I assembled the board at WPI's IEEE workshop using their reflow oven.",
        // TODO: review problem framing
        problem: "A paper business card can only hold so much, and anyone who wants to see more has to type a URL by hand. I also wanted a first PCB project small enough to finish but complete enough to cover design through assembly.",
        solution: "I designed a business-card-sized PCB with two independent NFC tags, each pointing to a different destination, so a single tap takes someone straight to my resume or my portfolio. The board was then assembled at WPI's IEEE workshop using a reflow oven.",
        features: [
            {
                title: "Two Independent NFC Tags",
                description: "Two separate NFC tags on one card: one opens my resume and the other opens evansminotwood.com."
            },
            {
                title: "Business Card Form Factor",
                description: "The PCB itself is the business card, so the electronics and the card are a single piece."
            },
            {
                title: "Reflow-Soldered Assembly",
                description: "Assembled at WPI's IEEE workshop using their reflow oven."
            }
        ],
        technicalHighlights: [
            "First PCB I designed",
            "Two separate NFC tags on a single board, each linked to a different URL",
            "Reflow soldering at WPI's IEEE workshop"
        ],
        // TODO: add design tool (e.g. KiCad) and NFC chip/antenna details
        technologies: ["PCB Design", "NFC", "Reflow Soldering"],
        // TODO: add outcomes and lessonsLearned
        // TODO: drop photos/renders in public/projects/ then uncomment:
        // coverImage: "/projects/pcbcard-cover.png",
        // media: [
        //     { type: "image" as const, src: "/projects/pcbcard-render.png", alt: "PCB business card render", caption: "TODO caption" },
        // ],
    },
    notitia: {
        id: "notitia",
        categories: ["Hardware"],
        title: "Notitia Homelab",
        subtitle: "Self-Hosted Infrastructure on a NAS",
        description: "Self-hosted infrastructure on a UGREEN DXP2800 NAS, accessed over Tailscale and running Docker services, with public services like Sonus exposed through Cloudflare Tunnel.",
        icon: FaServer,
        gradient: "from-slate-600 via-cyan-700 to-teal-600",
        tags: ["Homelab", "Docker", "Self-Hosting", "Networking", "Tailscale", "Cloudflare"],
        techIcons: [SiDocker, SiTailscale, SiCloudflare, SiNginxproxymanager, SiAdguard],
        links: {
            live: null,
            github: null
        },
        date: "Dec 2025",
        team: "Personal Project",
        overview: "Notitia is my homelab: self-hosted infrastructure running on a UGREEN DXP2800 NAS. Services run as Docker containers, including self-hosted Git (Gitea/OneDev), Nginx Proxy Manager, AdGuard Home, and Vikunja. Private access goes through Tailscale, while public-facing services like Sonus are exposed through a Cloudflare Tunnel.",
        // TODO: review problem framing
        problem: "Running my own services means handling everything a hosted platform normally hides: where the services run, how I reach them remotely, and how anything public gets exposed to the internet without opening up the home network.",
        solution: "I run everything as Docker containers on a UGREEN DXP2800 NAS. Tailscale provides private remote access, Nginx Proxy Manager handles reverse proxying, and Cloudflare Tunnel publishes the services that need to be public, such as Sonus.",
        features: [
            {
                title: "Private Access over Tailscale",
                description: "The NAS and its services are reached remotely through Tailscale."
            },
            {
                title: "Containerized Services",
                description: "Self-hosted Git (Gitea/OneDev), Vikunja for task management, and other tools all run as Docker containers on the NAS."
            },
            {
                title: "Reverse Proxy & DNS Filtering",
                description: "Nginx Proxy Manager routes traffic to services, and AdGuard Home provides DNS-level ad and tracker blocking."
            },
            {
                title: "Public Services via Cloudflare Tunnel",
                description: "Public-facing services like Sonus are exposed through Cloudflare Tunnel rather than through open inbound ports."
            }
        ],
        technicalHighlights: [
            "UGREEN DXP2800 NAS as the host",
            "Docker containers for every service",
            "Tailscale for private remote access",
            "Nginx Proxy Manager for reverse proxying",
            "AdGuard Home for DNS filtering",
            "Cloudflare Tunnel for publishing public services like Sonus"
        ],
        // TODO: confirm Gitea vs OneDev (or both)
        technologies: ["Docker", "Tailscale", "Cloudflare Tunnel", "Nginx Proxy Manager", "AdGuard Home", "Gitea", "OneDev", "Vikunja"],
        // TODO: add outcomes and lessonsLearned
    },
    geflipdesk: {
        id: "geflipdesk",
        categories: ["Software"],
        title: "GE Flip Desk",
        subtitle: "Old School RuneScape Grand Exchange Flipping Analyzer",
        description: "A web app that ranks Old School RuneScape Grand Exchange items by after-tax margin, ROI, volume, and buy limits using live prices from the OSRS Wiki API.",
        icon: FaCoins,
        gradient: "from-yellow-600 via-amber-700 to-stone-700",
        tags: ["JavaScript", "HTML", "REST APIs", "Data Visualization", "GitHub Pages"],
        techIcons: [SiHtml5, SiJavascript],
        links: {
            live: "https://evansminotwood.github.io/grand-exchange-flip-desk/",
            github: "https://github.com/evansminotwood/grand-exchange-flip-desk"
        },
        date: "Oct 2026",
        // TODO: add team (e.g. "Personal Project")
        overview: "GE Flip Desk is an Old School RuneScape Grand Exchange flipping analyzer. It pulls live data from the OSRS Wiki real-time prices API, ranks items by after-tax margin, ROI, volume, and buy limits, and charts each item's buy/sell history with a plain-language analysis. A watchlist and flip log let you track the items you care about and record the flips you make.",
        problem: "Finding a good flip on the Grand Exchange means weighing several numbers at once: the buy/sell spread, the Grand Exchange tax, how often an item trades, and how many you can buy before hitting the limit. Comparing those by hand across thousands of items isn't practical.",
        solution: "I built a single-page web app that fetches live prices from the OSRS Wiki API, applies the Grand Exchange tax to compute real margins, and ranks items on the board by the metric you choose. Selecting an item shows its price history and a plain-language analysis of the flip.",
        features: [
            {
                title: "Ranked Flip Board",
                description: "Sort items by best profit per buy limit, highest ROI, biggest margin, or most traded, plus a top-10 view by profit per 4-hour limit window."
            },
            {
                title: "After-Tax Margins",
                description: "Margins account for the 2% Grand Exchange tax, including its 5M cap, its low-price floor, and tax-exempt items."
            },
            {
                title: "Price History Charts",
                description: "Each item's buy/sell history is charted over roughly 30 hours, 2 weeks, or 3 months, alongside a plain-language analysis."
            },
            {
                title: "Watchlist & Flip Log",
                description: "Watch items to track them in a separate view and log the flips you make. Both are saved in the browser."
            }
        ],
        technicalHighlights: [
            "Single self-contained HTML file with no build step or external JavaScript libraries",
            "Live data from the OSRS Wiki real-time prices API (item mapping, latest, 5-minute, 1-hour, and timeseries endpoints)",
            "After-tax profit model with the 2% rate, 5M cap, low-price floor, and exemption list",
            "Hand-built SVG price charts with three time ranges",
            "Watchlist and flip log persisted with localStorage",
            "Hosted on GitHub Pages"
        ],
        technologies: ["JavaScript", "HTML", "CSS", "SVG", "OSRS Wiki Prices API", "localStorage", "GitHub Pages"],
        // TODO: add outcomes and lessonsLearned
    }
};

export const projectCategories = ["Software", "ML & Research", "Hardware"] as const;

export const projects = [
    projectsData.sonus,
    projectsData.aureus,
    projectsData.compiler,
    projectsData.musicga,
    projectsData.pcbcard,
    projectsData.shopcomp,
    projectsData.notitia,
    projectsData.geflipdesk,
    projectsData.advent2025,
    projectsData.deadheadsShortcut,
    projectsData.mtwash
];

export type Project = (typeof projects)[number];

export function getProject(id: string): Project | undefined {
    return (projectsData as Record<string, Project>)[id];
}
