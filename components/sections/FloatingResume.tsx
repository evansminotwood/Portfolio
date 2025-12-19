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

  const resumePath = process.env.NODE_ENV === 'production'
    ? '/Portfolio/Evans-Minot-Wood-Resume.pdf'
    : '/Evans-Minot-Wood-Resume.pdf';

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
        // On desktop, position in bottom right
        const x = Math.max(20, window.innerWidth - size.width - 50);
        const y = Math.max(20, window.innerHeight - size.height - 50);
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
    if (y < SNAP_THRESHOLD) snapY = 0;
    if (x + size.width > vw - SNAP_THRESHOLD) snapX = vw - size.width;
    if (y + size.height > vh - SNAP_THRESHOLD) snapY = vh - size.height;

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

    // Clamp to viewport
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

  // Resize handlers
  const handleResizeStart = (e: React.MouseEvent) => {
    if (isMobile) return; // Disable resizing on mobile
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

    // Constrain to viewport
    const maxWidth = window.innerWidth - position.x;
    const maxHeight = window.innerHeight - position.y;
    newWidth = Math.min(newWidth, maxWidth);
    newHeight = Math.min(newHeight, maxHeight);

    setSize({ width: newWidth, height: newHeight });
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  // Global mouse listeners
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
  // Mobile full-screen view
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-[9999] bg-background flex flex-col" style={{ width: '100vw', height: '100vh' }}>
        {/* Mobile header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 flex justify-between items-center shadow-lg flex-shrink-0">
          <span className="font-semibold text-white text-sm">Resume</span>
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 text-white hover:bg-white/20 rounded"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </Button>
        </div>

        {/* Action buttons */}
        <div className="bg-white dark:bg-gray-900 border-b px-4 py-2 flex gap-2 flex-shrink-0">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 text-xs"
            asChild
          >
            <a href={resumePath} download="Evans-Minot-Wood-Resume.pdf">
              <FaDownload className="mr-1" />
              Download
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 text-xs"
            asChild
          >
            <a href={resumePath} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="mr-1" />
              Open
            </a>
          </Button>
        </div>

        {/* PDF viewer - takes remaining space */}
        <div className="flex-1 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          <iframe
            src={`${resumePath}#view=FitH`}
            title="Resume PDF"
            className="border-0"
            style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }}
          />
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
          className="fixed inset-0 z-[9998]"
          style={{ cursor: isDragging ? 'grabbing' : 'nwse-resize' }}
        />
      )}

      {/* Floating window */}
      <div
        ref={windowRef}
        className="fixed bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-2xl rounded-lg overflow-hidden z-[9999] select-none"
        style={{
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
          cursor: isDragging ? 'grabbing' : 'default',
          opacity: isInitialized ? 1 : 0,
          transition: isInitialized ? 'none' : 'opacity 0.2s',
        }}
      >
        {/* Title bar */}
        <div
          className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 flex justify-between items-center cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full opacity-80" />
            <span className="font-semibold text-white text-sm">Resume - Evans Minot Wood</span>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 px-2 text-xs text-white hover:bg-white/20 rounded"
              asChild
            >
              <a href={resumePath} download="Evans-Minot-Wood-Resume.pdf">
                <FaDownload />
              </a>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 text-white hover:bg-white/20 rounded"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </Button>
          </div>
        </div>

        {/* Content area */}
        <div
          className="relative w-full bg-gray-50 dark:bg-gray-800"
          style={{ height: 'calc(100% - 48px)' }}
        >
          <iframe
            src={resumePath}
            title="Resume PDF"
            className="w-full h-full border-0"
            style={{
              pointerEvents: isDragging || isResizing ? 'none' : 'auto',
            }}
          />
        </div>

        {/* Resize handle - bottom right corner */}
        <div
          onMouseDown={handleResizeStart}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize group"
          style={{ touchAction: 'none' }}
        >
          <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-gray-400 dark:border-gray-500 group-hover:border-blue-500 transition-colors" />
        </div>

        {/* Resize handles - edges */}
        <div
          onMouseDown={handleResizeStart}
          className="absolute bottom-0 right-0 h-2 cursor-ns-resize"
          style={{ left: 0, right: 20, touchAction: 'none' }}
        />
        <div
          onMouseDown={handleResizeStart}
          className="absolute right-0 bottom-0 w-2 cursor-ew-resize"
          style={{ top: 48, bottom: 20, touchAction: 'none' }}
        />
      </div>
    </>
  );
}