"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import FloatingResume from "@/components/sections/FloatingResume";
import Footer from "@/components/layout/Footer";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Page() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [viewingProjectDetail, setViewingProjectDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleNavClick = () => {
    setViewingProjectDetail(false);
    setSelectedProject(null);
    const el = document.getElementById("projects");
    if (el) {
      const yOffset = -96;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        onToggleResume={() => setIsResumeOpen(prev => !prev)}
        onNavClick={handleNavClick}
      />

      <FloatingResume isOpen={isResumeOpen} setIsOpen={setIsResumeOpen} />

      <main className={!viewingProjectDetail ? "pt-24" : ""}>
        {!viewingProjectDetail ? (
          <>
            <About />
            <Education />
            <Experience />
          </>
        ) : null}

        <Projects
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          onViewChange={setViewingProjectDetail}
        />
      </main>

      <Footer />
    </>
  );
}
