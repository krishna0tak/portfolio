import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VantaBackground from './VantaBackground';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;
// Version cache-buster to ensure browser immediately fetches new 1080p frames
const FRAME_PATH = (index) => `/frames/ezgif-frame-${String(index).padStart(3, '0')}.jpg?v=2`;

export default function ProductUnboxingScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Smooth lerp references
  const targetFrameRef = useRef(0);
  const renderedFrameRef = useRef(0);
  const rafRef = useRef(null);

  // Render active frame to canvas
  const renderFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // High quality downscaling / rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Background matching studio tone
    ctx.fillStyle = '#c8c8c8';
    ctx.fillRect(0, 0, width, height);

    // Aspect ratio fit (contain)
    const imgRatio = img.width / img.height;
    const screenRatio = width / height;

    let drawW, drawH, drawX, drawY;

    if (screenRatio > imgRatio) {
      // Screen is wider than 16:9
      drawH = height;
      drawW = height * imgRatio;
      drawX = (width - drawW) / 2;
      drawY = 0;
    } else {
      // Screen is taller than 16:9
      drawW = width;
      drawH = width / imgRatio;
      drawX = 0;
      drawY = (height - drawH) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();
  }, []);

  // Preload frames
  useEffect(() => {
    let loaded = 0;
    const images = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);

      img.onload = () => {
        loaded++;
        const pct = Math.round((loaded / TOTAL_FRAMES) * 100);
        setLoadingProgress(pct);

        if (loaded === 1) {
          renderFrame(0);
        }

        if (loaded >= TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loaded++;
        if (loaded >= TOTAL_FRAMES) setIsLoaded(true);
      };

      images.push(img);
    }

    imagesRef.current = images;

    const handleResize = () => {
      renderFrame(Math.round(renderedFrameRef.current));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [renderFrame]);

  // Smooth lerp loop
  useEffect(() => {
    const loop = () => {
      const diff = targetFrameRef.current - renderedFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        renderedFrameRef.current += diff * 0.25;
        const frameToDraw = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(renderedFrameRef.current))
        );
        renderFrame(frameToDraw);
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [renderFrame]);

  // Setup GSAP ScrollTrigger
  useEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=4500',
        pin: true,
        scrub: 0.4,
        onUpdate: (self) => {
          const index = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(self.progress * TOTAL_FRAMES)
          );
          targetFrameRef.current = index;
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '100vh',
        background: '#c8c8c8',
      }}
    >
      {/* Minimal clean preloader line (only visible during initial load) */}
      {!isLoaded && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'radial-gradient(ellipse at 50% 45%, #dedede 0%, #c4c4c4 60%, #a8a8a8 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '200px', height: '2px', background: 'rgba(0,0,0,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${loadingProgress}%`,
                height: '100%',
                background: '#422332',
                borderRadius: '9999px',
                transition: 'width 0.15s ease',
              }}
            />
          </div>
        </div>
      )}

      {/* Ambient 3D Fog Vanta Backdrop */}
      <VantaBackground />

      {/* Pinned Viewport - Pure Canvas Animation Only */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  );
}
