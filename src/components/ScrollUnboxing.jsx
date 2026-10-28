import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 299;

export default function ScrollUnboxing() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Preload all 299 frames
  useEffect(() => {
    let isMounted = true;
    const loadedImages = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);

    return () => {
      isMounted = false;
    };
  }, []);

  // Draw frame on canvas with background blending
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[frameIndex]) return;

    const ctx = canvas.getContext('2d');
    const img = images[frameIndex];
    if (!img.complete || img.naturalWidth === 0) return;

    const containerWidth = canvas.clientWidth;
    const containerHeight = canvas.clientHeight;

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

      setCurrentFrame(frameIndex);
      drawFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [images, isLoaded]);

  // Redraw when loaded or frame changes
  useEffect(() => {
    if (isLoaded) {
      drawFrame(currentFrame);
    }
  }, [isLoaded, currentFrame]);

  return (
    <section
      id="animation"
      ref={containerRef}
      className="relative h-[450vh] bg-white text-stone-900 overflow-visible scroll-mt-20"
    >
      {/* Sticky Fullscreen Canvas Stage with padding top to clear nav header */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-white pt-24 pb-8">
        {/* Subtle Loading Spinner */}
        {!isLoaded && (
          <div className="absolute inset-0 z-40 bg-white flex flex-col items-center justify-center p-6">
            <div className="w-10 h-10 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin mb-4" />
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-2">
              Loading 3D Frame Sequence ({loadedCount} / {TOTAL_FRAMES})
            </span>
            <div className="w-48 h-1 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-stone-900 transition-all duration-150"
                style={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Clean Unobstructed Canvas matching studio background */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain pointer-events-none transition-opacity duration-300"
        />

        {/* Frame 01 Overlay: Appears at start */}
        <div
          className={`absolute inset-0 flex flex-col justify-between items-center pointer-events-none px-6 py-28 transition-all duration-500 ${
            scrollProgress < 0.22 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="text-center space-y-2 mt-4 max-w-xl mx-auto">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-[#4A152E] uppercase font-semibold">
              BRAND IDENTITY // PACKAGING DESIGN
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-stone-950 font-normal">
              CAMEÓLA
            </h1>
            <p className="font-sans text-xs sm:text-sm tracking-wider uppercase text-stone-600 font-light">
              From Concept to Creation
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 mb-4 animate-pulse">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500">
              SCROLL TO EXPLORE
            </span>
            <div className="w-4 h-7 border border-stone-400 rounded-full flex justify-center pt-1">
              <div className="w-1 h-2 bg-stone-700 rounded-full animate-bounce" />
            </div>
          </div>
        </div>

        {/* Mid-Scroll Highlights: Unfolding narrative */}
        <div
          className={`absolute inset-x-6 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none transition-all duration-500 ${
            scrollProgress >= 0.32 && scrollProgress <= 0.68
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl text-center">
            <span className="px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-xs rounded-full font-mono text-[11px] text-stone-800 tracking-wider uppercase">
              ✦ End-to-End Brand Development
            </span>
            <span className="px-3.5 py-1.5 bg-[#4A152E]/90 text-white backdrop-blur-md shadow-xs rounded-full font-mono text-[11px] tracking-wider uppercase">
              ✦ French Elegance Meets Indian Heritage
            </span>
            <span className="px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-xs rounded-full font-mono text-[11px] text-stone-800 tracking-wider uppercase">
              ✦ A Cohesive Packaging Identity
            </span>
          </div>
        </div>

        {/* Final Frame CTA: Beyond the Packaging */}
        <div
          className={`absolute inset-0 flex flex-col justify-end items-center pointer-events-none px-6 pb-20 transition-all duration-500 ${
            scrollProgress > 0.76 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-xl p-6 sm:p-8 rounded-2xl max-w-lg w-full text-center space-y-3 pointer-events-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4A152E] font-semibold">
              CASE STUDY PRESENTATION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
              Beyond the Packaging
            </h2>
            <p className="font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              A Creative Journey from Ideation to Execution
            </p>
            <div className="pt-2">
              <a
                href="#overview"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[#4A152E] hover:bg-[#381023] text-white text-xs font-mono uppercase tracking-wider transition-colors duration-200 rounded-full shadow-sm"
              >
                Explore the Design Process ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
