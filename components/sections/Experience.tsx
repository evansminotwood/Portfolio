"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FaBriefcase, FaUsers, FaCode, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Residential Program Advisor",
      organization: "Worcester Polytechnic Institute",
      program: "Pre-Collegiate Outreach Program - Frontiers",
      location: "Worcester, MA",
      dates: "Summer 2024 & 2025",
      icon: FaUsers,
      color: "blue",
      responsibilities: [
        "Ran two in-person, two-week STEM programs for high school students, guiding workshops and activities",
        "Mentored students in hands-on learning experiences and college preparation",
        "Facilitated collaborative projects and fostered an inclusive learning environment"
      ]
    },
    {
      title: "Website Designer & Programmer",
      organization: "E.H. Perkins",
      program: null,
      location: "Hudson, MA",
      dates: "Dec. 2020 – Jan. 2021",
      icon: FaCode,
      color: "purple",
      responsibilities: [
        "Redesigned corporate website using HTML, CSS, and JavaScript with a modern layout and color scheme",
        "Improved user experience and visual appeal through contemporary design principles",
        "Delivered a responsive, professional web presence for the company"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: {
        gradient: "from-blue-600 to-cyan-600",
        iconBg: "bg-blue-100 dark:bg-blue-900/30",
        iconColor: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        bulletBg: "bg-blue-600"
      },
      purple: {
        gradient: "from-purple-600 to-pink-600",
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        iconColor: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800",
        bulletBg: "bg-purple-600"
      },
      green: {
        gradient: "from-green-600 to-emerald-600",
        iconBg: "bg-green-100 dark:bg-green-900/30",
        iconColor: "text-green-600 dark:text-green-400",
        border: "border-green-200 dark:border-green-800",
        bulletBg: "bg-green-600"
      }
    };
    return colors[color];
  };

  return (
    <section id="experience" className="scroll-mt-24 py-32 bg-background flex justify-center px-4">
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
          <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experiences in education, web development, and leadership
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const colors = getColorClasses(exp.color);
            const Icon = exp.icon;

            return (
              <Card key={idx} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm flex-shrink-0">
                        <Icon className="text-3xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-lg mb-1">{exp.organization}</p>
                        {exp.program && (
                          <p className="text-sm opacity-90 mb-2">{exp.program}</p>
                        )}
                        <div className="flex flex-wrap gap-4 text-sm opacity-90">
                          <div className="flex items-center gap-2">
                            <FaBriefcase />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt />
                            <span>{exp.dates}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Responsibilities & Achievements</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="flex gap-3">
                          <div className={`mt-1.5 w-2 h-2 rounded-full ${colors.bulletBg} flex-shrink-0`}></div>
                          <p className="text-muted-foreground">{resp}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Leadership Experience Callout */}
        <Card className="mt-12 overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-red-600 to-grey-600 p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm flex-shrink-0">
                  <FaUsers className="text-3xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">Chapter President & Alumni Relations</h3>
                  <p className="text-lg mb-1">Phi Sigma Kappa (PSK)</p>
                  <p className="text-sm opacity-90 mb-2">Worcester Polytechnic Institute</p>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <FaCalendarAlt />
                    <span>2023 – Present</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Leadership Impact</h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Led chapter operations, organized large-scale events, and connected the chapter to the broader campus community via IFC</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Strengthened academic performance, philanthropy initiatives, and member engagement through strategic leadership</p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Recognized with Associate Member Education Award for excellence as New Member Educator</p>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}