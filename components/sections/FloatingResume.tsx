"use client";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaDownload, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

interface FloatingResumeProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function FloatingResume({ isOpen, setIsOpen }: FloatingResumeProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 700, height: 850 });
  const [isInitialized, setIsInitialized] = useState(false);
  const [resumePath, setResumePath] = useState('/resume/Evans-Minot-Wood-Resume.pdf');

  // Set the correct resume path after hydration
  useEffect(() => {
    if (window.location.hostname === 'evansminotwood.com') {
      setResumePath('https://evansminotwood.com/resume/Evans-Minot-Wood-Resume.pdf');
    }
  }, []);

  const dragStart = useRef({ x: 0, y: 0, startX: 0, startY: 0 });
  const resizeStart = useRef({ x: 0, y: 0, startWidth: 0, startHeight: 0 });
  const restoreState = useRef({ position: { x: 0, y: 0 }, size: { width: 700, height: 850 } });

  const MIN_WIDTH = 400;
  const MIN_HEIGHT = 500;
  const SNAP_THRESHOLD = 15;
  const NAVBAR_HEIGHT = 64;

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize position on mount
  useEffect(() => {
    if (typeof window !== "undefined" && isOpen && !isInitialized) {
      if (isMobile) {
        // On mobile, use full screen
        setPosition({ x: 0, y: 0 });
        setSize({ width: window.innerWidth, height: window.innerHeight });
      } else {
        // On desktop, position in bottom right but ensure top is visible
        const x = Math.max(20, window.innerWidth - size.width - 50);
        const maxY = window.innerHeight - size.height - 50;
        // Ensure the window never starts above the top of the viewport (minimum y = 0)
        const y = Math.max(0, maxY);
        setPosition({ x, y });
      }
      setIsInitialized(true);
    }
  }, [isOpen, isInitialized, size.width, size.height, isMobile]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, setIsOpen]);

  // Snap to edges helper
  const snapPosition = (x: number, y: number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let snapX = x;
    let snapY = y;

    if (x < SNAP_THRESHOLD) snapX = 0;
    // Don't snap to top if it would hide the title bar - keep minimum y at 0
    if (y < SNAP_THRESHOLD) snapY = Math.max(0, y);
    if (x + size.width > vw - SNAP_THRESHOLD) snapX = vw - size.width;
    // Only snap to bottom if there's enough vertical space
    if (y + size.height > vh - SNAP_THRESHOLD && vh > size.height) {
      snapY = vh - size.height;
    }

    return { x: snapX, y: snapY };
  };

  const toggleMaximize = () => {
    if (isMaximized) {
      setPosition(restoreState.current.position);
      setSize(restoreState.current.size);
      setIsMaximized(false);
    } else {
      restoreState.current = { position, size };
      const margin = 16;
      setPosition({ x: margin, y: NAVBAR_HEIGHT + margin });
      setSize({
        width: window.innerWidth - margin * 2,
        height: window.innerHeight - NAVBAR_HEIGHT - margin * 2,
      });
      setIsMaximized(true);
    }
  };

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent) => {
    if (isMobile || isMaximized) return;
    if ((e.target as HTMLElement).closest('button, a')) return;

    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      startX: position.x,
      startY: position.y,
    };
    e.preventDefault();
  };

  const handleDrag = (e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;

    let newX = dragStart.current.startX + deltaX;
    let newY = dragStart.current.startY + deltaY;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    newX = Math.max(0, Math.min(newX, vw - size.width));
    newY = Math.max(0, Math.min(newY, vh - size.height));

    const snapped = snapPosition(newX, newY);
    setPosition(snapped);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    if (isMobile || isMaximized) return;
    e.stopPropagation();
    setIsResizing(true);
    resizeStart.current = {
      x: e.clientX,
      y: e.clientY,
      startWidth: size.width,
      startHeight: size.height,
    };
    e.preventDefault();
  };

  const handleResize = (e: MouseEvent) => {
    if (!isResizing) return;

    const deltaX = e.clientX - resizeStart.current.x;
    const deltaY = e.clientY - resizeStart.current.y;

    let newWidth = Math.max(MIN_WIDTH, resizeStart.current.startWidth + deltaX);
    let newHeight = Math.max(MIN_HEIGHT, resizeStart.current.startHeight + deltaY);

    const maxWidth = window.innerWidth - position.x;
    const maxHeight = window.innerHeight - position.y;
    newWidth = Math.min(newWidth, maxWidth);
    newHeight = Math.min(newHeight, maxHeight);

    setSize({ width: newWidth, height: newHeight });
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener("mouseup", handleDragEnd);
      return () => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", handleDragEnd);
      };
    }
  }, [isDragging, position, size]);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleResize);
      document.addEventListener("mouseup", handleResizeEnd);
      return () => {
        document.removeEventListener("mousemove", handleResize);
        document.removeEventListener("mouseup", handleResizeEnd);
      };
    }
  }, [isResizing, position, size]);

  if (!isOpen) return null;

  // Mobile bottom-sheet style modal
  if (isMobile) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full max-w-md space-y-5 rounded-2xl border border-white/10 bg-background/95 p-6 shadow-2xl backdrop-blur-md animate-[window-pop_250ms_ease-out]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 ring-1 ring-blue-500/40">
            <FaFilePdf className="text-2xl text-blue-400" />
          </div>

          <div className="space-y-1 text-center">
            <h2 className="text-xl font-bold text-foreground">Resume</h2>
            <p className="text-sm text-muted-foreground">
              Evans Minot Wood — CS & Data Science @ WPI
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => {
                window.open(resumePath, '_blank');
                setIsOpen(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              <FaExternalLinkAlt className="mr-2 h-4 w-4" />
              Open in New Tab
            </Button>

            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = resumePath;
                link.download = 'Evans-Minot-Wood-Resume.pdf';
                link.click();
                setIsOpen(false);
              }}
              className="w-full border-white/15 bg-white/5 hover:bg-white/10"
              variant="outline"
              size="lg"
            >
              <FaDownload className="mr-2 h-4 w-4" />
              Download PDF
            </Button>

            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              className="w-full text-muted-foreground"
              size="lg"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop floating window
  return (
    <>
      {/* Overlay to catch all mouse events during drag/resize */}
      {(isDragging || isResizing) && (
        <div
          className="fixed inset-0 z-[60] cursor-move"
          style={{ cursor: isResizing ? 'nwse-resize' : 'move' }}
        />
      )}

      {/* Floating window */}
      <div
        ref={windowRef}
        className={`fixed z-50 flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0a0e1a] shadow-2xl shadow-black/60 animate-[window-pop_250ms_ease-out] transition-shadow ${
          isDragging || isResizing ? 'ring-2 ring-blue-500/40' : 'ring-1 ring-white/5'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
      >
        {/* Title bar */}
        <div
          className="flex select-none items-center justify-between gap-2 border-b border-white/10 bg-[#0a0e1a]/95 px-4 py-2 backdrop-blur-md cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onDoubleClick={toggleMaximize}
          title="Drag to move — double-click to maximize"
        >
          <div className="flex items-center gap-3">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close resume"
                className="group/light flex h-3 w-3 items-center justify-center rounded-full bg-red-500 transition-colors hover:bg-red-400"
              >
                <span className="text-[9px] font-bold leading-none text-red-950 opacity-0 transition-opacity group-hover/light:opacity-100">×</span>
              </button>
              <button
                onClick={toggleMaximize}
                aria-label={isMaximized ? "Restore window size" : "Maximize window"}
                className="group/light flex h-3 w-3 items-center justify-center rounded-full bg-green-500 transition-colors hover:bg-green-400"
              >
                <span className="text-[9px] font-bold leading-none text-green-950 opacity-0 transition-opacity group-hover/light:opacity-100">+</span>
              </button>
            </div>
            <span className="text-sm font-medium text-white/90">
              Evans Minot Wood — Resume
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-white/60 hover:bg-white/10 hover:text-white"
            >
              <a href={resumePath} download="Evans-Minot-Wood-Resume.pdf" aria-label="Download resume">
                <FaDownload className="text-xs" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-white/60 hover:bg-white/10 hover:text-white"
            >
              <a href={resumePath} target="_blank" rel="noopener noreferrer" aria-label="Open resume in new tab">
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </Button>
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`${resumePath}#navpanes=0&view=FitH`}
            className="h-full w-full border-0"
            title="Resume PDF Viewer"
          />
        </div>

        {/* Resize handle - bottom right corner */}
        <div
          onMouseDown={handleResizeStart}
          className="group absolute bottom-0 right-0 h-4 w-4 cursor-nwse-resize touch-none"
        >
          <div className="absolute bottom-1 right-1 h-3 w-3 border-b-2 border-r-2 border-white/25 transition-colors group-hover:border-blue-500" />
        </div>

        {/* Resize handles - edges */}
        <div
          onMouseDown={handleResizeStart}
          className="absolute bottom-0 left-0 right-4 h-2 cursor-ns-resize touch-none"
        />
        <div
          onMouseDown={handleResizeStart}
          className="absolute top-12 right-0 bottom-4 w-2 cursor-ew-resize touch-none"
        />
      </div>
    </>
  );
}
