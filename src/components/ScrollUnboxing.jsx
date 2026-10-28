import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 299;
const BATCH_SIZE = 20;

export default function ScrollUnboxing() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(TOTAL_FRAMES));
  const currentFrameRef = useRef(0);

  const [isReady, setIsReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Draw frame on canvas with background blending and fallback to nearest loaded frame
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scan backwards from frameIndex to 0 to find the nearest loaded frame
    let img = null;
    for (let i = frameIndex; i >= 0; i--) {
      const candidate = imagesRef.current[i];
      if (candidate && candidate.complete && candidate.naturalWidth > 0) {
        img = candidate;
        break;
      }
    }

    // Fallback: scan forward if no prior frame is loaded
    if (!img) {
      for (let i = frameIndex + 1; i < TOTAL_FRAMES; i++) {
        const candidate = imagesRef.current[i];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          img = candidate;
          break;
        }
      }
    }

    if (!img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const containerWidth = canvas.clientWidth;
    const containerHeight = canvas.clientHeight;
    if (!containerWidth || !containerHeight) return;

    canvas.width = containerWidth * window.devicePixelRatio;
    canvas.height = containerHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Fill canvas with exact frame background color (#FFFFFF) to blend seamlessly
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, containerWidth, containerHeight);

    // Fit contain logic
    const hRatio = containerWidth / img.width;
    const vRatio = containerHeight / img.height;
    const ratio = Math.min(hRatio, vRatio);

    const centerShiftX = (containerWidth - img.width * ratio) / 2;
    const centerShiftY = (containerHeight - img.height * ratio) / 2;

    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );
  };

  // Progressive frame loading: load frame 0 first, then batch-load 1-298 in background
  useEffect(() => {
    let isMounted = true;
    let idleId = null;
    let timerId = null;

    const scheduleBatch = (callback) => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        return window.requestIdleCallback(callback, { timeout: 1000 });
      }
      return setTimeout(callback, 0);
    };

    const firstImg = new Image();
    firstImg.src = '/frames/ezgif-frame-001.jpg';

    let firstHandled = false;
    const handleFirstFrame = () => {
      if (firstHandled || !isMounted) return;
      firstHandled = true;

      imagesRef.current[0] = firstImg;
      setLoadedCount(1);
      setIsReady(true);
      drawFrame(currentFrameRef.current);

      // Start background batch loading for remaining frames
      let batchStart = 1;

      const loadNextBatch = () => {
        if (!isMounted || batchStart >= TOTAL_FRAMES) return;

        const batchEnd = Math.min(batchStart + BATCH_SIZE, TOTAL_FRAMES);
        for (let i = batchStart; i < batchEnd; i++) {
          const img = new Image();
          const frameNum = String(i + 1).padStart(3, '0');
          img.src = `/frames/ezgif-frame-${frameNum}.jpg`;

          img.onload = () => {
            if (!isMounted) return;
            imagesRef.current[i] = img;
            setLoadedCount((prev) => {
              const next = prev + 1;
              if (next >= TOTAL_FRAMES) {
                setAllLoaded(true);
              }
              return next;
            });

            // If current frame being viewed matches or is awaiting this frame, redraw
            if (currentFrameRef.current === i || (currentFrameRef.current >= i && currentFrameRef.current < batchEnd)) {
              drawFrame(currentFrameRef.current);
            }
          };

          img.onerror = () => {
            if (!isMounted) return;
            setLoadedCount((prev) => {
              const next = prev + 1;
              if (next >= TOTAL_FRAMES) {
                setAllLoaded(true);
              }
              return next;
            });
          };
        }

        batchStart = batchEnd;
        if (batchStart < TOTAL_FRAMES) {
          idleId = scheduleBatch(loadNextBatch);
        }
      };

      idleId = scheduleBatch(loadNextBatch);
    };

    firstImg.onload = handleFirstFrame;
    firstImg.onerror = () => {
      if (!isMounted) return;
      setIsReady(true);
      handleFirstFrame();
    };

    if (firstImg.complete && firstImg.naturalWidth > 0) {
      handleFirstFrame();
    }

    return () => {
      isMounted = false;
      if (idleId && typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);

  // Scroll scrubbing listener
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = containerRef.current.offsetHeight - windowHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      setScrollProgress(progress);
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES)
      );

      currentFrameRef.current = frameIndex;
      setCurrentFrame(frameIndex);
      drawFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isReady]);

  // Redraw when ready
  useEffect(() => {
    if (isReady) {
      drawFrame(currentFrameRef.current);
    }
  }, [isReady]);

  return (
    <section
      id="animation"
      ref={containerRef}
      className="relative h-[450vh] bg-white text-stone-900 overflow-visible scroll-mt-20"
    >
      {/* Sticky Fullscreen Canvas Stage with padding top to clear nav header */}
      <div className="sticky top-0 h-screen w-full relative flex items-center justify-center overflow-hidden bg-white pt-24 pb-8">
        {/* Subtle non-blocking background loading indicator */}
        {!allLoaded && (
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-sm border border-stone-200 shadow-sm pointer-events-none transition-opacity duration-300">
            <div className="w-2.5 h-2.5 border-2 border-stone-300 border-t-stone-800 rounded-full animate-spin shrink-0" />
            <span className="font-mono text-[10px] text-stone-500 tracking-wider">
              Buffering 3D ({Math.round((loadedCount / TOTAL_FRAMES) * 100)}%)
            </span>
          </div>
        )}

        {/* Clean Unobstructed Canvas matching studio background */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full object-contain pointer-events-none transition-opacity duration-300 ${
            isReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </section>
  );
}
