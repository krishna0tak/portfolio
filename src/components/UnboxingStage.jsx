import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Video, Box, ChevronDown, Sliders, RefreshCw, Upload, Play, Pause } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function UnboxingStage() {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const videoRef = useRef(null);

  // State
  const [activeMode, setActiveMode] = useState('3d'); // '3d' or 'video'
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightingPreset, setLightingPreset] = useState('studio'); // 'studio', 'warm', 'dramatic'
  const [videoSrc, setVideoSrc] = useState(null);
  const [customVideoUploaded, setCustomVideoUploaded] = useState(false);

  // Unboxing calculations based on progress (0 to 1)
  // 0 - 0.20: Camera zooms in / stage settles
  // 0.20 - 0.50: Top tuck flap unfolds, main lid opens backward, side dust flaps open outward
  // 0.45 - 0.85: Bottle rises up out of the carton with gentle rotation
  // 0.80 - 1.00: Product showcase position, camera settles, transition hint to portfolio
  const progress = scrollProgress;

  const tuckRotation = Math.min(1, Math.max(0, (progress - 0.15) / 0.20)) * 130;
  const mainLidRotation = Math.min(1, Math.max(0, (progress - 0.20) / 0.25)) * 140;
  const dustLeftRotation = Math.min(1, Math.max(0, (progress - 0.30) / 0.20)) * 110;
  const dustRightRotation = Math.min(1, Math.max(0, (progress - 0.30) / 0.20)) * 110;
  
  // Product elevation (0px inside box to -220px floating above box)
  const productElevationProgress = Math.min(1, Math.max(0, (progress - 0.35) / 0.40));
  const productY = -productElevationProgress * 230;
  const productRotationY = productElevationProgress * 360;
  const productScale = 0.85 + productElevationProgress * 0.25;

  // Camera subtle tilt
  const cameraRotateX = 18 - progress * 12;
  const cameraRotateY = -15 + progress * 25;
  const cameraScale = 0.95 + progress * 0.15;

  // Setup GSAP ScrollTrigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=3000',
        pin: stageRef.current,
        scrub: 0.6,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          
          // Video scrubber sync
          if (videoRef.current && videoRef.current.duration) {
            videoRef.current.currentTime = self.progress * videoRef.current.duration;
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle custom video upload from Google Flow
  const handleVideoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setCustomVideoUploaded(true);
      setActiveMode('video');
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="unboxing"
      style={{
        position: 'relative',
        minHeight: '400vh',
        background: 'transparent',
      }}
    >
      {/* Pinned Viewport Container */}
      <div 
        ref={stageRef}
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Soft Studio Floor Reflection & Shadow Base */}
        <div 
          style={{
            position: 'absolute',
            bottom: '12%',
            width: '600px',
            height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(66, 35, 50, 0.22) 0%, rgba(66, 35, 50, 0.06) 45%, transparent 70%)',
            filter: 'blur(20px)',
            pointerEvents: 'none',
            transform: `scale(${1 + progress * 0.2}) translateY(${progress * 20}px)`,
            transition: 'transform 0.1s ease',
          }}
        />

        {/* Top Studio HUD Bar */}
        <div 
          className="glass-panel"
          style={{
            position: 'absolute',
            top: '5.5rem',
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.4rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.78rem',
            color: 'var(--text-secondary)',
          }}
        >
          {/* Mode Switcher */}
          <div style={{ display: 'flex', background: 'rgba(0,0,0,0.04)', borderRadius: '9999px', padding: '2px' }}>
            <button
              onClick={() => setActiveMode('3d')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: 'none',
                background: activeMode === '3d' ? '#fff' : 'transparent',
                color: activeMode === '3d' ? 'var(--brand-plum)' : 'var(--text-secondary)',
                fontWeight: activeMode === '3d' ? 600 : 400,
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                boxShadow: activeMode === '3d' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              <Box size={14} />
              <span>Interactive 3D</span>
            </button>
            <button
              onClick={() => setActiveMode('video')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: 'none',
                background: activeMode === 'video' ? '#fff' : 'transparent',
                color: activeMode === 'video' ? 'var(--brand-plum)' : 'var(--text-secondary)',
                fontWeight: activeMode === 'video' ? 600 : 400,
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                boxShadow: activeMode === 'video' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              <Video size={14} />
              <span>Google Flow Video</span>
              {customVideoUploaded && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />}
            </button>
          </div>

          <div style={{ width: '1px', height: '18px', background: 'var(--border-medium)' }} />

          {/* Lighting Presets */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)' }}>
              Light:
            </span>
            {['studio', 'warm', 'dramatic'].map((preset) => (
              <button
                key={preset}
                onClick={() => setLightingPreset(preset)}
                style={{
                  border: 'none',
                  background: lightingPreset === preset ? 'var(--brand-plum)' : 'transparent',
                  color: lightingPreset === preset ? '#fff' : 'var(--text-secondary)',
                  borderRadius: '9999px',
                  padding: '0.2rem 0.5rem',
                  fontSize: '0.68rem',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Headline & Prompt Callout */}
        <div 
          style={{
            position: 'absolute',
            top: '9rem',
            textAlign: 'center',
            zIndex: 20,
            maxWidth: '600px',
            padding: '0 1rem',
            pointerEvents: 'none',
            opacity: Math.max(0, 1 - progress * 2.8),
            transform: `translateY(-${progress * 40}px)`,
            transition: 'opacity 0.2s ease',
          }}
        >
          <span className="section-eyebrow">Interactive Unboxing Portfolio</span>
          <h1 className="section-heading" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '0.5rem' }}>
            Caméola × Bonocartan
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', letterSpacing: '0.02em' }}>
            Scroll down to unfold the custom monocarton & reveal the Parisian Glow cleanser
          </p>
        </div>

        {/* STAGE: MODE A (INTERACTIVE 3D PACKAGE & BOTTLE) */}
        {activeMode === '3d' && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              height: '520px',
              perspective: '1200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            {/* 3D World Pivot */}
            <div
              style={{
                position: 'relative',
                width: '160px',
                height: '320px',
                transformStyle: 'preserve-3d',
                transform: `scale(${cameraScale}) rotateX(${cameraRotateX}deg) rotateY(${cameraRotateY}deg)`,
                transition: 'transform 0.05s linear',
              }}
            >
              {/* --- PRODUCT: BOTTLE (RISING FROM INSIDE) --- */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '20px',
                  width: '120px',
                  height: '280px',
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(20px) translateY(${productY}px) rotateY(${productRotationY}deg) scale(${productScale})`,
                  zIndex: progress > 0.4 ? 15 : 2,
                  transition: 'transform 0.05s linear',
                  pointerEvents: 'none',
                }}
              >
                {/* 3D Cylindrical Bottle Body */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    height: '220px',
                    borderRadius: '24px 24px 14px 14px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f7f7f9 50%, #eae8e6 100%)',
                    boxShadow: '0 20px 45px rgba(66, 35, 50, 0.25), inset 0 2px 4px rgba(255,255,255,0.9), inset -4px 0 10px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.25rem 0.5rem',
                    textAlign: 'center',
                    overflow: 'hidden',
                  }}
                >
                  {/* Bottle Label Print (Real Asset Typography) */}
                  <div style={{ opacity: 0.9, width: '100%' }}>
                    <div className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--brand-plum)', letterSpacing: '0.04em' }}>
                      Caméola
                    </div>
                    <div style={{ fontSize: '0.55rem', fontWeight: 600, color: 'var(--brand-plum-light)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                      Parisian Glow
                    </div>
                    <div style={{ fontSize: '0.5rem', color: 'var(--text-tertiary)', letterSpacing: '0.05em', marginTop: '0.2rem' }}>
                      Whipped Foaming Cleanser
                    </div>
                    <div style={{ fontSize: '0.45rem', color: 'var(--brand-gold-warm)', marginTop: '0.4rem', fontWeight: 600 }}>
                      Shea Butter & Licorice • 100 ml
                    </div>
                  </div>

                  {/* High-res bottle label graphic watermark */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'url(/assets/cameola-bottle-label.png)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      opacity: 0.18,
                      mixBlendMode: 'multiply',
                      pointerEvents: 'none',
                    }} 
                  />
                </div>

                {/* Cosmetic Pump Dispenser Top */}
                <div
                  style={{
                    position: 'absolute',
                    top: '25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '36px',
                    height: '35px',
                    background: 'linear-gradient(to right, #f4f4f4, #ffffff 60%, #e0e0e0)',
                    borderRadius: '6px 6px 0 0',
                    border: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  {/* Pump Nozzle Spout */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '-8px',
                      width: '38px',
                      height: '14px',
                      background: '#ffffff',
                      borderRadius: '8px 12px 0 4px',
                      border: '1px solid rgba(0,0,0,0.08)',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
                    }}
                  />
                </div>
              </div>

              {/* --- MONOCARTON: MAIN BOX BODY --- */}
              {/* FRONT PANEL */}
              <div
                style={{
                  position: 'absolute',
                  width: '160px',
                  height: '320px',
                  transform: 'translateZ(80px)',
                  background: 'linear-gradient(135deg, #442434 0%, #361a28 60%, #2b131f 100%)',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.35)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  padding: '1.5rem',
                  overflow: 'hidden',
                }}
              >
                {/* Vertical Caméola Typography (Matching real packaging dieline) */}
                <div
                  className="font-serif"
                  style={{
                    transform: 'rotate(-90deg)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#ffffff',
                    whiteSpace: 'nowrap',
                    textShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  }}
                >
                  Caméola
                </div>
                <div style={{ position: 'absolute', bottom: '1.5rem', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                  100 ml / 3.4 fl oz
                </div>
              </div>

              {/* BACK PANEL */}
              <div
                style={{
                  position: 'absolute',
                  width: '160px',
                  height: '320px',
                  transform: 'rotateY(180deg) translateZ(80px)',
                  background: '#2b131f',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.4)',
                  color: 'rgba(255,255,255,0.75)',
                  padding: '1rem',
                  fontSize: '0.45rem',
                  lineHeight: '1.4',
                  overflow: 'hidden',
                }}
              >
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.6rem', marginBottom: '0.3rem' }}>INGREDIENTS & ACTIVES</div>
                <p>Aqua, Myristic Acid, Shea Butter, Jojoba Seed Oil, Licorice Extract, Chamomilla, Manjistha, Vitamin E.</p>
                <div style={{ marginTop: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.4rem' }}>
                  • Paraben & SLS Free<br />
                  • Vegan & Cruelty Free<br />
                  • ISO & GMP Certified
                </div>
              </div>

              {/* LEFT SIDE PANEL */}
              <div
                style={{
                  position: 'absolute',
                  width: '160px',
                  height: '320px',
                  left: '0',
                  transformOrigin: 'left',
                  transform: 'rotateY(-90deg) translateZ(0px)',
                  background: 'linear-gradient(to right, #381b2a, #2c1421)',
                  padding: '1rem',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                  Parisian Glow
                </div>
                <div className="font-serif" style={{ transform: 'rotate(-90deg)', fontSize: '1.2rem', textAlign: 'center' }}>
                  Whipped Foam
                </div>
                <div style={{ fontSize: '0.45rem', color: 'rgba(255,255,255,0.5)' }}>
                  Made in India
                </div>
              </div>

              {/* RIGHT SIDE PANEL */}
              <div
                style={{
                  position: 'absolute',
                  width: '160px',
                  height: '320px',
                  right: '0',
                  transformOrigin: 'right',
                  transform: 'rotateY(90deg) translateZ(0px)',
                  background: 'linear-gradient(to left, #381b2a, #2c1421)',
                  padding: '1rem',
                  color: '#fff',
                }}
              >
                <div style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>HOW TO USE</div>
                <div style={{ fontSize: '0.42rem', marginTop: '0.5rem', lineHeight: '1.3' }}>
                  1. Apply small amount onto damp face.<br />
                  2. Massage gently in circular motions.<br />
                  3. Rinse thoroughly with water.<br />
                  4. Suitable for daily morning & night use.
                </div>
              </div>

              {/* BOTTOM PANEL */}
              <div
                style={{
                  position: 'absolute',
                  width: '160px',
                  height: '160px',
                  bottom: '0',
                  transformOrigin: 'bottom',
                  transform: 'rotateX(90deg) translateZ(0px)',
                  background: '#200c16',
                  boxShadow: '0 25px 40px rgba(0,0,0,0.5)',
                }}
              />

              {/* --- ANIMATED BOX FLAPS WITH PRECISE HINGE PIVOTS --- */}
              {/* TOP MAIN LID FLAP (Hinged at back top edge: transformOrigin 'top') */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '160px',
                  height: '160px',
                  transformOrigin: 'top center',
                  transform: `translateZ(-80px) rotateX(${mainLidRotation}deg)`,
                  background: '#3d1f2f',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 -10px 25px rgba(0,0,0,0.25)',
                  transformStyle: 'preserve-3d',
                  zIndex: 8,
                }}
              >
                {/* TUCK FLAP (Hinged at the front edge of the main lid) */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '160px',
                    height: '45px',
                    transformOrigin: 'bottom center',
                    transform: `rotateX(${tuckRotation}deg)`,
                    background: '#331926',
                    borderRadius: '0 0 12px 12px',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                />
              </div>

              {/* LEFT DUST FLAP (Hinged at left top edge) */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '80px',
                  height: '80px',
                  transformOrigin: 'left top',
                  transform: `rotateY(-90deg) rotateX(-${dustLeftRotation}deg)`,
                  background: '#361b29',
                  borderRadius: '0 0 16px 0',
                  zIndex: 6,
                }}
              />

              {/* RIGHT DUST FLAP (Hinged at right top edge) */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '80px',
                  height: '80px',
                  transformOrigin: 'right top',
                  transform: `rotateY(90deg) rotateX(-${dustRightRotation}deg)`,
                  background: '#361b29',
                  borderRadius: '0 0 0 16px',
                  zIndex: 6,
                }}
              />
            </div>
          </div>
        )}

        {/* STAGE: MODE B (GOOGLE FLOW VIDEO SCRUBBER) */}
        {activeMode === 'video' && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '850px',
              height: '480px',
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#ffffff',
              boxShadow: 'var(--shadow-studio-product)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                playsInline
                muted
                preload="auto"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem', maxWidth: '480px' }}>
                <div 
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    background: 'var(--brand-plum-soft)', 
                    color: 'var(--brand-plum)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  <Video size={28} />
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Google Flow Video Scrubber
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                  When your Google Flow (Veo) unboxing video finishes generating, export it as an MP4 and load it here to preview scroll scrubbing!
                </p>

                <label 
                  className="btn-primary" 
                  style={{ cursor: 'pointer', display: 'inline-flex' }}
                >
                  <Upload size={16} />
                  <span>Upload Google Flow MP4</span>
                  <input 
                    type="file" 
                    accept="video/mp4,video/webm" 
                    onChange={handleVideoUpload}
                    style={{ display: 'none' }} 
                  />
                </label>
              </div>
            )}
          </div>
        )}

        {/* Dynamic Scrubbing Progress Bar & Status HUD */}
        <div 
          className="glass-panel"
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '0.6rem 1.25rem',
            borderRadius: '9999px',
          }}
        >
          {/* Scroll Cue or Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div 
              style={{
                width: '18px',
                height: '28px',
                borderRadius: '9999px',
                border: '1.5px solid var(--brand-plum)',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '4px',
              }}
            >
              <div 
                style={{
                  width: '3px',
                  height: '6px',
                  background: 'var(--brand-plum)',
                  borderRadius: '9999px',
                  animation: 'pulseGlow 1.5s infinite',
                }}
              />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
              {progress < 0.1 ? 'Scroll Down to Unbox' : progress < 0.8 ? 'Unboxing Package...' : 'Product Revealed'}
            </div>
          </div>

          {/* Interactive Progress Track */}
          <div 
            style={{
              width: '160px',
              height: '4px',
              background: 'rgba(0,0,0,0.08)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div 
              style={{
                width: `${Math.round(progress * 100)}%`,
                height: '100%',
                background: 'var(--brand-plum)',
                borderRadius: '9999px',
                transition: 'width 0.1s ease',
              }}
            />
          </div>

          {/* Numerical Percentage */}
          <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--brand-plum)', fontWeight: 600, minWidth: '35px' }}>
            {Math.round(progress * 100)}%
          </span>
        </div>
      </div>
    </section>
  );
}
