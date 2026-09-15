import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Box, Globe } from 'lucide-react';

export default function Footer() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(10px)',
        padding: '3rem 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="studio-container">
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {/* Left: Studio Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div 
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'var(--brand-plum)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box size={16} />
            </div>
            <div>
              <div className="font-serif" style={{ fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.04em' }}>
                BONOCARTAN
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}>
                © {new Date().getFullYear()} • 3D Unboxing & Packaging Studio
              </div>
            </div>
          </div>

          {/* Center: Live Studio Clock */}
          <div 
            className="badge-pill"
            style={{
              padding: '0.4rem 0.9rem',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
            }}
          >
            <Globe size={14} color="var(--brand-plum)" />
            <span>Studio Local:</span>
            <span className="font-mono" style={{ fontWeight: 600, color: 'var(--brand-plum)' }}>
              {timeString || '12:00:00'}
            </span>
          </div>

          {/* Right: Back to top */}
          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.78rem',
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
