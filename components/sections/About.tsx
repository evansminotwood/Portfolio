"use client";

import { Card, CardContent } from "@/components/ui/card";
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

    return (
        <section id="about" className="scroll-mt-24 min-h-[calc(100vh-6rem)] flex items-center justify-center bg-background px-4 py-12">
            <Card className="max-w-5xl w-full overflow-hidden">
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
                        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                                    {aboutData.name}
                                </h2>
                                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                            </div>

                            {/* Info Items */}
                            <div className="space-y-4 mb-8">
                                {aboutData.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.id} className="flex items-start gap-4">
                                            <div className={`mt-1 p-3 ${item.iconBg} rounded-lg`}>
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
                            <div className="border-l-4 border-blue-600 pl-6 py-2">
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {aboutData.bio}
                                </p>
                            </div>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </section>
    );
}