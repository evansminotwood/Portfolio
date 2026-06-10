"use client";

import { getProject } from "@/lib/projects";
import ProjectDetail from "@/components/sections/ProjectDetail";

export default function ProjectPageClient({ id }: { id: string }) {
    const project = getProject(id);
    if (!project) return null;

    return <ProjectDetail project={project} />;
}
