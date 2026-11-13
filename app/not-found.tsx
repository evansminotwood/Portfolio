import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaFolderOpen } from "react-icons/fa";

export default function NotFound() {
    return (
        <main className="relative min-h-screen flex items-center justify-center px-4 pt-16 bg-background overflow-hidden">
            {/* Ambient glow blob */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[40rem] rounded-full bg-blue-600/10 blur-3xl animate-[float-blob_15s_ease-in-out_infinite]" />
            </div>

            <div className="relative text-center max-w-xl">
                <p className="text-7xl md:text-8xl font-bold text-foreground mb-4">404</p>
                <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-6"></div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Page not found</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    That page doesn&apos;t exist. It may have moved, or the link may be mistyped.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                        <Link href="/">
                            <FaArrowLeft className="mr-2" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white bg-blue-600/20 border-blue-600 hover:bg-blue-700 hover:text-white transition-colors">
                        <Link href="/#projects">
                            <FaFolderOpen className="mr-2" />
                            View Projects
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
