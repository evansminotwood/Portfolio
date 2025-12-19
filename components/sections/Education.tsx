"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FaGraduationCap, FaAward, FaBook, FaLaptopCode } from "react-icons/fa";

export default function Education() {
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
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                  <FaGraduationCap className="text-5xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">Worcester Polytechnic Institute</h3>
                  <p className="text-xl text-blue-100 mb-2">Worcester, Massachusetts</p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <p className="text-lg text-blue-100">Expected Graduation: May 2027</p>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <p className="text-lg font-semibold">GPA: 3.9</p>
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
                  <div className="p-6 border-2 border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50/50 dark:bg-purple-900/10">
                    <div className="flex items-center gap-3 mb-3">
                      <FaLaptopCode className="text-3xl text-purple-600 dark:text-purple-400" />
                      <div>
                        <h5 className="text-xl font-semibold text-foreground">Computer Science</h5>
                        <p className="text-sm text-muted-foreground">Bachelor of Science</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Focusing on software engineering, algorithms, and system design
                    </p>
                  </div>

                  <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-lg bg-green-50/50 dark:bg-green-900/10">
                    <div className="flex items-center gap-3 mb-3">
                      <FaBook className="text-3xl text-green-600 dark:text-green-400" />
                      <div>
                        <h5 className="text-xl font-semibold text-foreground">Data Science</h5>
                        <p className="text-sm text-muted-foreground">Bachelor of Science</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Specializing in machine learning, statistical analysis, and data visualization
                    </p>
                  </div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FaBook className="text-2xl text-blue-600" />
                  <h4 className="text-2xl font-semibold text-foreground">Relevant Coursework</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Software Engineering",
                    "Operating Systems",
                    "Database Systems",
                    "Algorithms",
                    "Machine Learning",
                    "Data Structures",
                    "Computer Systems",
                    "Statistical Methods",
                    "Web Development"
                  ].map((course, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-100 dark:border-blue-800 hover:shadow-md transition-shadow"
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
                  <div className="p-5 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h5 className="text-lg font-semibold text-foreground mb-1">Dean's List</h5>
                    <p className="text-sm text-muted-foreground mb-2">2023 – Present (4x Recipient)</p>
                    <p className="text-sm text-muted-foreground">Recognized for outstanding academic performance</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h5 className="text-lg font-semibold text-foreground mb-1">Order of Omega Honor Society</h5>
                    <p className="text-sm text-muted-foreground mb-2">2025 – Present</p>
                    <p className="text-sm text-muted-foreground">Greek life leadership honor society</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h5 className="text-lg font-semibold text-foreground mb-1">Associate Member Education Award</h5>
                    <p className="text-sm text-muted-foreground mb-2">Phi Sigma Kappa</p>
                    <p className="text-sm text-muted-foreground">Excellence as New Member Educator</p>
                  </div>
                </div>
              </div>

              {/* Academic Focus */}
              <div className="mt-10 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-600">
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