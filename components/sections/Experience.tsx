"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { FaBriefcase, FaUsers, FaCode, FaCalendarAlt, FaFlask, FaChalkboardTeacher } from "react-icons/fa";

export default function Experience() {
  const experiencesData = {
    mqp: {
      id: "mqp",
      title: "Undergraduate Researcher (MQP)",
      organization: "Worcester Polytechnic Institute",
      program: "Major Qualifying Project (WPI's senior research capstone) - Advised by Prof. Neil Heffernan",
      location: "Worcester, MA",
      dates: "Fall 2026 – Present",
      icon: FaFlask,
      responsibilities: [
        "Researching ways to evaluate randomized controlled trials on ASSISTments, an online math learning platform, using knowledge tracing",
        "Running and evaluating knowledge tracing models on an ASSISTments trial testing whether LLM-selected tutoring feedback strategies improve student performance on subsequent attempts and problems",
        "Building a CLI tool that lets researchers combine remnant and trial data with any of the supported knowledge tracing methods to quickly evaluate their own RCTs",
        "Modeling outcomes with mixed-effects logistic regression (lme4 glmer) using random intercepts for student, problem, and class, reported with sjPlot and texreg"
      ]
    },
    insight: {
      id: "insight",
      title: "Community Advisor",
      organization: "Worcester Polytechnic Institute",
      program: "Insight Program - First-Year Experience",
      location: "Worcester, MA",
      dates: "Fall 2026",
      icon: FaChalkboardTeacher,
      responsibilities: [
        "Mentor a group of 40 first-year students through their first two terms, alongside an Insight Advisor",
        "Plan and lead weekly social and educational programs for my Insight group, including lessons on academic integrity and AI",
        "Help new students acclimate to life at WPI and connect them with academic and campus resources"
      ]
    },
    wpi: {
      id: "wpi",
      title: "Residential Program Advisor",
      organization: "Worcester Polytechnic Institute",
      program: "Pre-Collegiate Outreach Program - Frontiers",
      location: "Worcester, MA",
      dates: "Summer 2024 & 2025",
      icon: FaUsers,
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
      isLeadership: true,
      responsibilities: [
        "Led chapter operations, organized large-scale events, and connected the chapter to the broader campus community via IFC",
        "Strengthened academic performance, philanthropy initiatives, and member engagement through strategic leadership",
        "Recognized with Associate Member Education Award for excellence as New Member Educator"
      ]
    }
  };

  const experiences = [
    experiencesData.mqp,
    experiencesData.insight,
    experiencesData.wpi,
    experiencesData.perkins
  ];

  const leadershipExperience = experiencesData.psk;

  return (
    <section id="experience" className="relative scroll-mt-24 py-32 bg-background flex justify-center px-4 overflow-hidden">
      {/* Ambient glow blob */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-1/4 -left-40 h-[24rem] w-[24rem] rounded-full bg-blue-600/10 blur-3xl animate-[float-blob_15s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="max-w-5xl w-full relative">
        {/* Section Header */}
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
          <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experiences in research, education, web development, and leadership
          </p>
        </Reveal>

        {/* Professional Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, expIdx) => {
            const Icon = exp.icon;

            return (
              <Reveal key={exp.id} delay={expIdx * 120}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0 p-0 ring-1 ring-white/10 hover:ring-blue-500/30">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="bg-blue-600 p-6 text-white rounded-t-xl">
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
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{resp}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Leadership Experience Callout */}
        <Reveal delay={120}>
        <Card className="mt-12 overflow-hidden shadow-lg border-0 p-0 ring-1 ring-white/10 hover:ring-blue-500/30 transition-shadow">
          <CardContent className="p-0">
            <div className="bg-blue-600 p-6 text-white rounded-t-xl">
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
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{resp}</p>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        </Reveal>
      </div>
    </section>
  );
}