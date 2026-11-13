"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal, CountUp } from "@/components/ui/reveal";
import { projects } from "@/lib/projects";
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaChartLine } from "react-icons/fa";

export default function About() {
    const imgSrc = '/images/Evans-Minot-Wood.jpg';

    const aboutData = {
        name: "Evans Minot Wood",
        bio: "I'm a passionate technologist working at the intersection of computer science and data analytics. I enjoy tackling complex problems and building thoughtful, impactful solutions. Outside of coding, I channel my creativity through music production, creating and mixing music for events, while continually exploring emerging technologies.",
        items: [
            {
                id: "school",
                icon: FaGraduationCap,
                title: "Worcester Polytechnic Institute",
                subtitle: "Class of 2027",
                // WPI official crimson
                iconBg: "bg-red-100 dark:bg-red-900/30",
                iconColor: "text-red-700 dark:text-red-400"
            },
            {
                id: "cs",
                icon: FaCode,
                title: "Computer Science",
                subtitle: "Building robust systems and elegant solutions",
                // Professional tech blue
                iconBg: "bg-blue-100 dark:bg-blue-900/30",
                iconColor: "text-blue-600 dark:text-blue-400"
            },
            {
                id: "ds",
                icon: FaChartLine,
                title: "Data Science",
                subtitle: "Extracting insights from complex data",
                // Python/data science green
                iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
                iconColor: "text-emerald-600 dark:text-emerald-400"
            },
            {
                id: "location",
                icon: FaMapMarkerAlt,
                title: "Worcester, MA",
                subtitle: "Based in Central Massachusetts",
                // Neutral slate for location
                iconBg: "bg-slate-100 dark:bg-slate-900/30",
                iconColor: "text-slate-600 dark:text-slate-400"
            }
        ]
    };

    const stats = [
        { value: 3.84, decimals: 2, suffix: "", label: "GPA" },
        { value: 6, decimals: 0, suffix: "x", label: "Dean's List" },
        { value: projects.length, decimals: 0, suffix: "", label: "Projects" },
        { value: 2, decimals: 0, suffix: "", label: "Majors" },
    ];

    return (
        <section id="about" className="relative scroll-mt-24 min-h-screen flex items-center justify-center bg-background px-4 pt-16 overflow-hidden">
            {/* Ambient glow blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-3xl animate-[float-blob_14s_ease-in-out_infinite]" />
                <div className="absolute -bottom-32 -right-32 h-[24rem] w-[24rem] rounded-full bg-purple-600/10 blur-3xl animate-[float-blob_18s_ease-in-out_infinite_reverse]" />
            </div>

            <Reveal className="max-w-5xl w-full py-6">
            <Card className="w-full overflow-hidden ring-1 ring-white/10">
                <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">

                        {/* Left: Image Section */}
                        <div className="md:w-2/5 flex items-center justify-center p-12">
                            <div className="relative">
                                {/* Animated glow effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-75 blur-2xl animate-pulse"></div>

                                {/* Secondary glow layer for depth */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50 blur-3xl"></div>

                                {/* Image */}
                                <img
                                    src={imgSrc}
                                    alt={aboutData.name}
                                    width={280}
                                    height={280}
                                    className="relative rounded-full  shadow-2xl object-cover z-10"
                                />
                            </div>
                        </div>

                        {/* Right: Content Section */}
                        <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                            <div className="mb-6">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                                    {aboutData.name}
                                </h2>
                                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                            </div>

                            {/* Info Items */}
                            <div className="space-y-3 mb-6">
                                {aboutData.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.id} className="flex items-start gap-4">
                                            <div className={`mt-1 p-2.5 ${item.iconBg} rounded-lg`}>
                                                <Icon className={`${item.iconColor} text-xl`} />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                                                <p className="text-muted-foreground">{item.subtitle}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Bio */}
                            <div className="border-l-4 border-blue-600 pl-6 py-2 mb-6">
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {aboutData.bio}
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <p className="text-2xl md:text-3xl font-bold text-blue-500">
                                            <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                                        </p>
                                        <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </CardContent>
            </Card>
            </Reveal>
        </section>
    );
}