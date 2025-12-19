"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaChartLine } from "react-icons/fa";

export default function About() {
    const imgSrc = process.env.NODE_ENV === 'production'
        ? '/Portfolio/images/Evans-Minot-Wood.jpg'
        : '/images/Evans-Minot-Wood.jpg';

    return (
        <section id="about" className="scroll-mt-24 min-h-[calc(100vh-6rem)] flex items-center justify-center bg-background px-4 py-12">
            <Card className="max-w-5xl w-full overflow-hidden">
                <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">

                        {/* Left: Image Section */}
                        <div className="md:w-2/5 flex items-center justify-center p-12">
                            <div className="relative">
                                <img
                                    src={imgSrc}
                                    alt="Evans Minot Wood"
                                    width={280}
                                    height={280}
                                    className="rounded-full border-4 border-blue-600 shadow-2xl object-cover"
                                />
                            </div>
                        </div>

                        {/* Right: Content Section */}
                        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                            <div className="mb-8">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
                                    Evans Minot Wood
                                </h2>
                                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                            </div>

                            {/* Education Info */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                        <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-foreground">Worcester Polytechnic Institute</h3>
                                        <p className="text-muted-foreground">Class of 2027</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                        <FaCode className="text-purple-600 dark:text-purple-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-foreground">Computer Science</h3>
                                        <p className="text-muted-foreground">Building robust systems and elegant solutions</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                        <FaChartLine className="text-green-600 dark:text-green-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-foreground">Data Science</h3>
                                        <p className="text-muted-foreground">Extracting insights from complex data</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                                        <FaMapMarkerAlt className="text-orange-600 dark:text-orange-400 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-foreground">Worcester, MA</h3>
                                        <p className="text-muted-foreground">Based in Central Massachusetts</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="border-l-4 border-blue-600 pl-6 py-2">
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    I'm a passionate technologist at the intersection of computer science and data analytics.
                                    I thrive on solving complex problems and building innovative solutions that make a difference.
                                    When I'm not coding, you'll find me performing with local bands or exploring new technologies.
                                </p>
                            </div>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </section>
    );
}