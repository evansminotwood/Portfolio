"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FaBriefcase, FaUsers, FaCode, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experiencesData = {
    wpi: {
      id: "wpi",
      title: "Residential Program Advisor",
      organization: "Worcester Polytechnic Institute",
      program: "Pre-Collegiate Outreach Program - Frontiers",
      location: "Worcester, MA",
      dates: "Summer 2024 & 2025",
      icon: FaUsers,
      gradient: "from-red-700 via-red-600 to-slate-400",
      iconBg: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-700 dark:text-red-400",
      border: "border-red-200 dark:border-red-800",
      bulletBg: "bg-red-700",
      responsibilities: [
        "Ran two in-person, two-week STEM programs for high school students, guiding workshops and activities",
        "Mentored students in hands-on learning experiences and college preparation",
        "Facilitated collaborative projects and fostered an inclusive learning environment"
      ]
    },
    perkins: {
      id: "perkins",
      title: "Website Designer & Programmer",
      organization: "E.H. Perkins",
      program: null,
      location: "Hudson, MA",
      dates: "Dec. 2020 – Jan. 2021",
      icon: FaCode,
      gradient: "from-emerald-700 via-teal-600 to-amber-100",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
      iconColor: "text-emerald-700 dark:text-emerald-400",
      border: "border-emerald-200 dark:border-emerald-800",
      bulletBg: "bg-emerald-700",
      responsibilities: [
        "Redesigned corporate website using HTML, CSS, and JavaScript with a modern layout and color scheme",
        "Improved user experience and visual appeal through contemporary design principles",
        "Delivered a responsive, professional web presence for the company"
      ]
    },
    psk: {
      id: "psk",
      title: "Chapter President & Alumni Relations",
      organization: "Phi Sigma Kappa (PSK)",
      program: null,
      location: "Worcester Polytechnic Institute",
      dates: "2023 – Present",
      icon: FaUsers,
      gradient: "from-red-600 via-red-500 to-gray-300",
      iconBg: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-600 dark:text-red-400",
      border: "border-red-200 dark:border-red-800",
      bulletBg: "bg-red-600",
      isLeadership: true,
      responsibilities: [
        "Led chapter operations, organized large-scale events, and connected the chapter to the broader campus community via IFC",
        "Strengthened academic performance, philanthropy initiatives, and member engagement through strategic leadership",
        "Recognized with Associate Member Education Award for excellence as New Member Educator"
      ]
    }
  };

  const experiences = [
    experiencesData.wpi,
    experiencesData.perkins
  ];

  const leadershipExperience = experiencesData.psk;

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

        {/* Professional Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;

            return (
              <Card key={exp.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${exp.gradient} p-6 text-white`}>
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
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="flex gap-3">
                          <div className={`mt-1.5 w-2 h-2 rounded-full ${exp.bulletBg} flex-shrink-0`}></div>
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
            <div className={`bg-gradient-to-r ${leadershipExperience.gradient} p-6 text-white`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm flex-shrink-0">
                  <FaUsers className="text-3xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{leadershipExperience.title}</h3>
                  <p className="text-lg mb-1">{leadershipExperience.organization}</p>
                  <p className="text-sm opacity-90 mb-2">{leadershipExperience.location}</p>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <FaCalendarAlt />
                    <span>{leadershipExperience.dates}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Leadership Impact</h4>
              <ul className="space-y-3">
                {leadershipExperience.responsibilities.map((resp, respIdx) => (
                  <li key={respIdx} className="flex gap-3">
                    <div className={`mt-1.5 w-2 h-2 rounded-full ${leadershipExperience.bulletBg} flex-shrink-0`}></div>
                    <p className="text-muted-foreground">{resp}</p>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}