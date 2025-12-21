"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FaGraduationCap, FaAward, FaBook, FaLaptopCode } from "react-icons/fa";
import { SiPython } from "react-icons/si";

export default function Education() {
    const educationData = {
        school: {
            name: "Worcester Polytechnic Institute",
            location: "Worcester, Massachusetts",
            graduation: "May 2027",
            gpa: "3.85",
            gradient: "from-red-700 via-red-600 to-slate-400",
        },
        degrees: [
            {
                id: "cs",
                title: "Computer Science",
                subtitle: "Bachelor of Science",
                icon: FaLaptopCode,
                description: "Focusing on software engineering, algorithms, and system design",
                gradient: "from-blue-600 to-indigo-600",
                borderColor: "border-blue-300 dark:border-blue-700",
                bgColor: "bg-blue-50/50 dark:bg-blue-900/10",
                iconColor: "text-blue-600 dark:text-blue-400"
            },
            {
                id: "ds",
                title: "Data Science",
                subtitle: "Bachelor of Science",
                icon: SiPython,
                description: "Specializing in machine learning, statistical analysis, and data visualization",
                gradient: "from-emerald-600 to-teal-600",
                borderColor: "border-emerald-300 dark:border-emerald-700",
                bgColor: "bg-emerald-50/50 dark:bg-emerald-900/10",
                iconColor: "text-emerald-600 dark:text-emerald-400"
            }
        ],
        coursework: [
            "Software Engineering",
            "Operating Systems",
            "Database Systems",
            "Algorithms",
            "Machine Learning",
            "Data Structures",
            "Computer Systems",
            "Statistical Methods",
            "Web Development"
        ],
        honors: [
            {
                id: "deans",
                title: "Dean's List",
                subtitle: "2023 – Present (5x Recipient)",
                description: "Recognized for outstanding academic performance",
                gradient: "from-red-700 to-slate-500",
                borderColor: "border-red-300 dark:border-red-700",
                bgColor: "bg-red-50/50 dark:bg-red-900/10"
            },
            {
                id: "omega",
                title: "Order of Omega Honor Society",
                subtitle: "2025 – Present",
                description: "Greek life leadership honor society",
                gradient: "from-amber-400 to-yellow-600",
                borderColor: "border-amber-300 dark:border-amber-700",
                bgColor: "bg-amber-50/50 dark:bg-amber-900/10"
            },
            {
                id: "ame",
                title: "Associate Member Education Award",
                subtitle: "Phi Sigma Kappa",
                description: "Excellence as New Member Educator",
                gradient: "from-red-600 to-rose-600",
                borderColor: "border-red-300 dark:border-red-700",
                bgColor: "bg-red-50/50 dark:bg-red-900/10"
            }
        ]
    };

    return (
        <section id="education" className="scroll-mt-24 py-32 bg-muted/30 flex justify-center px-4">
            <div className="max-w-5xl w-full">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h2>
                    <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        My academic journey combining computer science and data science
                    </p>
                </div>

                {/* Main Education Card */}
                <Card className="overflow-hidden shadow-xl">
                    <CardContent className="p-0">
                        {/* Header Banner - WPI Colors */}
                        <div className={`bg-gradient-to-r ${educationData.school.gradient} p-8 text-white`}>
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                                    <FaGraduationCap className="text-5xl" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold mb-2">{educationData.school.name}</h3>
                                    <p className="text-xl opacity-90 mb-2">{educationData.school.location}</p>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <p className="text-lg opacity-90">Expected Graduation: {educationData.school.graduation}</p>
                                        <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                                            <p className="text-lg font-semibold">GPA: {educationData.school.gpa}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            {/* Degrees */}
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <FaAward className="text-2xl text-blue-600" />
                                    <h4 className="text-2xl font-semibold text-foreground">Degrees</h4>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {educationData.degrees.map((degree) => {
                                        const Icon = degree.icon;
                                        return (
                                            <div
                                                key={degree.id}
                                                className={`p-6 border-2 ${degree.borderColor} rounded-lg ${degree.bgColor}`}
                                            >
                                                <div className="flex items-center gap-3 mb-3">
                                                    <Icon className={`text-3xl ${degree.iconColor}`} />
                                                    <div>
                                                        <h5 className="text-xl font-semibold text-foreground">{degree.title}</h5>
                                                        <p className="text-sm text-muted-foreground">{degree.subtitle}</p>
                                                    </div>
                                                </div>
                                                <p className="text-muted-foreground">
                                                    {degree.description}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Relevant Coursework */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <FaBook className="text-2xl text-blue-600" />
                                    <h4 className="text-2xl font-semibold text-foreground">Relevant Coursework</h4>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {educationData.coursework.map((course, idx) => (
                                        <div
                                            key={idx}
                                            className="p-4 bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all"
                                        >
                                            <p className="text-sm font-medium text-foreground">{course}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Honors & Recognition */}
                            <div className="mt-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <FaAward className="text-2xl text-blue-600" />
                                    <h4 className="text-2xl font-semibold text-foreground">Honors & Recognition</h4>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {educationData.honors.map((honor) => (
                                        <div
                                            key={honor.id}
                                            className={`p-5 ${honor.bgColor} rounded-lg border-2 ${honor.borderColor} hover:shadow-lg transition-shadow`}
                                        >
                                            <h5 className="text-lg font-semibold text-foreground mb-1">{honor.title}</h5>
                                            <p className="text-sm text-muted-foreground mb-2">{honor.subtitle}</p>
                                            <p className="text-sm text-muted-foreground">{honor.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Academic Focus */}
                            <div className="mt-10 p-6 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900/30 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-600">
                                <p className="text-muted-foreground mb-3">
                                    <strong className="text-foreground">The Journey:</strong> As a child, I dreamt of building a computer that could think and reason for itself. That dream sparked a lifelong passion for artificial intelligence and problem-solving that continues to drive my academic pursuits today.
                                </p>
                                <p className="text-muted-foreground">
                                    <strong className="text-foreground">Academic Focus:</strong> Pursuing dual degrees to bridge the gap between software development and data-driven decision making, with hands-on experience in full-stack development, systems programming, and machine learning applications.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}