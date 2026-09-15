import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      try {
        vantaEffect.current = FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xefece6,
          midtoneColor: 0xf7f6f3,
          lowlightColor: 0xe2dfd7,
          baseColor: 0xf7f6f3,
          blurFactor: 0.60,
          speed: 1.20,
          zoom: 1.00
        });
      } catch (err) {
        console.warn("Vanta background failed to initialize:", err);
      }
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.85,
        overflow: 'hidden',
      }}
    />
  );
}
