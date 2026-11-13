import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { projects, getProject } from "@/lib/projects";

// Link-preview images, exported as real .png files (/og/site.png, /og/<project-id>.png)
// so GitHub Pages serves them with an image content type.
export const dynamic = "force-static";
export const dynamicParams = false;

const size = { width: 1200, height: 630 };

export function generateStaticParams() {
    return [{ file: "site.png" }, ...projects.map((p) => ({ file: `${p.id}.png` }))];
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
    const { file } = await params;
    const project = getProject(file.replace(/\.png$/, ""));

    if (!project) {
        const photo = await readFile(join(process.cwd(), "public/images/Evans-Minot-Wood.jpg"));
        const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
        return new ImageResponse(
            (
                <div style={{ display: "flex", width: "100%", height: "100%", background: "#0a0a0a", color: "#fff", padding: 80, alignItems: "center", gap: 64 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photoSrc} width={280} height={280} style={{ borderRadius: 9999, objectFit: "cover", border: "6px solid #2563eb" }} alt="" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontSize: 72, fontWeight: 700 }}>Evans Minot Wood</div>
                        <div style={{ width: 120, height: 8, background: "#2563eb", borderRadius: 4, margin: "24px 0" }} />
                        <div style={{ fontSize: 36, color: "#d4d4d4" }}>Computer Science & Data Science @ WPI</div>
                        <div style={{ fontSize: 28, color: "#a3a3a3", marginTop: 16 }}>evansminotwood.com</div>
                    </div>
                </div>
            ),
            size
        );
    }

    return new ImageResponse(
        (
            <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#0a0a0a", color: "#fff", padding: 80 }}>
                <div style={{ fontSize: 28, color: "#a3a3a3" }}>evansminotwood.com / projects</div>
                <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
                    <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>{project.title}</div>
                    <div style={{ width: 120, height: 8, background: "#2563eb", borderRadius: 4, margin: "28px 0" }} />
                    <div style={{ fontSize: 36, color: "#d4d4d4" }}>{project.subtitle}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
                    <div style={{ display: "flex", gap: 12 }}>
                        {project.tags.slice(0, 3).map((tag) => (
                            <div key={tag} style={{ fontSize: 24, color: "#93c5fd", background: "rgba(37,99,235,0.2)", padding: "8px 20px", borderRadius: 9999 }}>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div style={{ fontSize: 28, color: "#a3a3a3", whiteSpace: "nowrap", flexShrink: 0 }}>Evans Minot Wood</div>
                </div>
            </div>
        ),
        size
    );
}
