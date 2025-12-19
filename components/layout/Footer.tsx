// app/components/layout/Footer.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side: copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; 2025 Evans Minot Wood. All rights reserved.
        </p>

        {/* Right side: social links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/e-minot-wood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 text-white bg-blue-600/20 border-blue-600 hover:bg-blue-700 hover:text-white transition-colors"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </Button>
          </a>

          <a
            href="https://github.com/evansminotwood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 text-white bg-gray-800/20 border-gray-800 hover:bg-gray-900 hover:text-white transition-colors"
            >
              <FaGithub size={16} />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
