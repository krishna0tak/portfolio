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
      </div>
    </section>
  );
}
