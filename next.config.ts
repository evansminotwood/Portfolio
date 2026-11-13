import type { NextConfig } from "next";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

// Content hash of the resume PDF, appended as ?v=... so a new PDF always busts browser/CDN caches
const resumeVersion = createHash("sha256")
  .update(readFileSync("public/resume/Evans-Minot-Wood-Resume.pdf"))
  .digest("hex")
  .slice(0, 8);

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_RESUME_VERSION: resumeVersion,
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,  // Required for static export
  }
};

export default nextConfig;
