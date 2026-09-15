import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: scrolled ? '0.75rem 0' : '1.5rem 0',
      }}
    >
      <div className="studio-container">
        <nav 
          className="glass-panel"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            background: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.65)',
            boxShadow: scrolled ? '0 12px 30px rgba(0, 0, 0, 0.06)' : '0 4px 20px rgba(0, 0, 0, 0.02)',
          }}
        >
          {/* Brand Logo */}
          <a 
            href="#unboxing" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              textDecoration: 'none', 
              color: 'var(--text-primary)' 
            }}
          >
            <div 
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--brand-plum)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 4px 10px rgba(66, 35, 50, 0.25)'
              }}
            >
              <Box size={18} />
            </div>
            <div>
              <div className="font-serif" style={{ fontWeight: 600, fontSize: '1.05rem', letterSpacing: '0.05em' }}>
                BONOCARTAN
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                3D & Packaging Design
              </div>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <div 
            style={{ 
              display: 'none', 
              alignItems: 'center', 
              gap: '2rem',
              '@media (min-width: 768px)': { display: 'flex' }
            }}
            className="nav-desktop-links"
          >
            <a href="#unboxing" className="nav-link">Unboxing</a>
            <a href="#product" className="nav-link">Product</a>
            <a href="#works" className="nav-link">Selected Works</a>
            <a href="#about" className="nav-link">Studio & Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Right Area: Availability & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="badge-pill" style={{ display: 'none', '@media (min-width: 640px)': { display: 'inline-flex' } }} id="nav-status-pill">
              <span className="pulse-dot"></span>
              <span>Available for Select Projects</span>
            </div>

            <a href="#contact">
              <Button size="sm">
                <span>Collaborate</span>
                <ArrowUpRight size={14} />
              </Button>
            </a>
          </div>
        </nav>
      </div>

      <style>{`
        .nav-link {
          font-size: 0.825rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          letter-spacing: 0.02em;
          position: relative;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--brand-plum);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--brand-plum);
          transition: width 0.25s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (min-width: 768px) {
          .nav-desktop-links {
            display: flex !important;
          }
        }
        @media (min-width: 640px) {
          #nav-status-pill {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
