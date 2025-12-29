"use client";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

interface FloatingResumeProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function FloatingResume({ isOpen, setIsOpen }: FloatingResumeProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 700, height: 850 });
  const [isInitialized, setIsInitialized] = useState(false);

  const resumePath = '/resume/Evans-Minot-Wood-Resume.pdf';

  const dragStart = useRef({ x: 0, y: 0, startX: 0, startY: 0 });
  const resizeStart = useRef({ x: 0, y: 0, startWidth: 0, startHeight: 0 });

  const MIN_WIDTH = 400;
  const MIN_HEIGHT = 500;
  const SNAP_THRESHOLD = 15;

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

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent) => {
    if (isMobile) return; // Disable dragging on mobile
    if ((e.target as HTMLElement).closest('button')) return;

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
    if (isMobile) return;
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

  // Mobile full-screen view
  if (isMobile) {
    return (
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl w-full max-w-md p-6 space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            View Resume
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-center">
            Choose how you'd like to view the resume
          </p>

          <div className="space-y-3">
            <Button
              onClick={() => {
                window.open(resumePath, '_blank');
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2"
              size="lg"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
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
              className="w-full flex items-center justify-center gap-2"
              variant="outline"
              size="lg"
            >
              <FaDownload className="w-4 h-4" />
              Download PDF
            </Button>

            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              className="w-full"
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
        className="fixed bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
      >
        {/* Title bar */}
        <div
          className="bg-gradient-to-r bg-[#0a0e1a] px-4 py-3 flex justify-between items-center cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full opacity-80" />
            <span className="font-semibold text-white text-sm">Resume - Evans Minot Wood</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 rounded px-2 py-1 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={resumePath}
            className="w-full h-full border-0"
            title="Resume PDF Viewer"
          />
        </div>

        {/* Resize handle - bottom right corner */}
        <div
          onMouseDown={handleResizeStart}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize group touch-none"
        >
          <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-gray-400 dark:border-gray-500 group-hover:border-blue-500 transition-colors" />
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