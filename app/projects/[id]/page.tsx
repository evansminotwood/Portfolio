import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";
import ProjectPageClient from "./ProjectPageClient";

export const dynamicParams = false;

export function generateStaticParams() {
    return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = getProject(id);
    if (!project) return {};
    return {
        title: `${project.title} - Evans Minot Wood`,
        description: project.description,
    };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    if (!getProject(id)) notFound();

    return <ProjectPageClient id={id} />;
}
