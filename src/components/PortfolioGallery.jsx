import React, { useState } from 'react';
import { ExternalLink, Layers, Eye, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Packaging Design', '3D & Blender', 'Product Visualization', 'Brand Identity'];

  const projects = [
    {
      id: 1,
      title: "Caméola Monocarton & Cleanser",
      category: "Packaging Design",
      role: "Structural Dieline & 3D Unboxing",
      year: "2026",
      client: "Caméola Skincare",
      tools: ["Blender", "Adobe Illustrator", "Three.js", "GSAP"],
      image: "/assets/cameola-mockup.jpg",
      highlight: true,
      desc: "Comprehensive packaging engineering from 2D flat dieline to interactive 3D unboxing web experience with animated fold hinges.",
      stats: ["Tuck-End Carton", "FSC Velvet Cardstock", "Hot-Stamp Foil", "Interactive WebGL"],
    },
    {
      id: 2,
      title: "Kōso Botanical Serum Bottle",
      category: "Product Visualization",
      role: "3D Modeling & Caustics",
      year: "2025",
      client: "Kōso Apothecary",
      tools: ["Blender Cycles", "Substance Painter"],
      gradient: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
      accentColor: "#ecc94b",
      desc: "High-index optical glass shader research with realistic fluid refraction, amber dropper mechanism, and minimal silkscreen typography.",
      stats: ["Physical Glass IOR 1.52", "Volumetric Fluid", "Procedural Dust", "8K Studio Render"],
    },
    {
      id: 3,
      title: "Nordic Minimalist Audio Hub",
      category: "3D & Blender",
      role: "Hard-Surface CAD & CMF",
      year: "2025",
      client: "Sona Acoustics",
      tools: ["Blender", "HardOps", "Plasticity"],
      gradient: "linear-gradient(135deg, #4a5568 0%, #2d3748 100%)",
      accentColor: "#63b3ed",
      desc: "Precision aluminum casing with CNC micro-perforations, knurled rotational dials, and recessed LED light pipes.",
      stats: ["SubD Modeling", "Anodized Aluminum PBR", "Exploded View", "Ergonomics Study"],
    },
    {
      id: 4,
      title: "Vespera Reserve Gin Flacon",
      category: "Packaging Design",
      role: "Bespoke Glass Geometry",
      year: "2025",
      client: "Vespera Distillers",
      tools: ["Blender", "Octane", "Illustrator"],
      gradient: "linear-gradient(135deg, #1a365d 0%, #0d1b2a 100%)",
      accentColor: "#90cdf4",
      desc: "Sculptural heavy-bottom glass bottle featuring geometric faceted shoulders, laser-engraved wooden stopper, and wax-dipped neck seal.",
      stats: ["Heavy Base Glass", "Direct Silk-Screen", "Custom Emboss", "Pre-press Dieline"],
    },
    {
      id: 5,
      title: "Aura Ultrasonic Ambient Diffuser",
      category: "Product Visualization",
      role: "Form Study & Atmosphere",
      year: "2024",
      client: "Aura Living",
      tools: ["Blender", "Geometry Nodes", "Figma"],
      gradient: "linear-gradient(135deg, #744210 0%, #553c9a 100%)",
      accentColor: "#f6ad55",
      desc: "Cast ceramic silhouette with micro-porous steam outlet and gentle circadian daylight simulation ring.",
      stats: ["Ceramic Glaze PBR", "Volumetric Mist Simulation", "CGI Video Clip", "CMF Palette"],
    },
    {
      id: 6,
      title: "Elysian Ceremony Matcha Canister",
      category: "Brand Identity",
      role: "Visual Identity & Tin Dieline",
      year: "2024",
      client: "Elysian Organics",
      tools: ["Illustrator", "Photoshop", "Blender"],
      gradient: "linear-gradient(135deg, #22543d 0%, #1c4532 100%)",
      accentColor: "#68d391",
      desc: "Tinplate canister wrapped in textured Japanese washi paper with blind deboss calligraphy and metallic pantone finishes.",
      stats: ["Airtight Seal Dieline", "Pantone 871C Metallic", "FSC Paper Stock", "Complete Identity"],
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="works" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="studio-container">
        {/* Header */}
        <div className="section-title-wrap">
          <span className="section-eyebrow">Portfolio Index</span>
          <h2 className="section-heading">Selected Works & Renders</h2>
          <p className="section-subtext">
            A curation of 3D modeling, packaging engineering, material studies, and creative direction projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '0.6rem', 
            marginBottom: '3.5rem' 
          }}
        >
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={activeFilter === filter ? "active" : "default"}
              onClick={() => setActiveFilter(filter)}
              className="cursor-pointer px-5 py-2 text.xs tracking-[0.1em]"
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="glass-panel"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s var(--ease-spring)',
              }}
            >
              {/* Media Thumbnail Container */}
              <div 
                style={{
                  height: '260px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: proj.gradient || 'var(--bg-studio-warm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {proj.image ? (
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s var(--ease-spring)',
                    }}
                    className="gallery-thumb-img"
                  />
                ) : (
                  <div style={{ textAlign: 'center', color: '#fff', padding: '1.5rem' }}>
                    <div 
                      style={{ 
                        width: '48px', 
                        height: '48px', 
                        borderRadius: '12px', 
                        background: 'rgba(255,255,255,0.15)', 
                        backdropFilter: 'blur(8px)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 auto 1rem',
                        color: proj.accentColor || '#fff',
                      }}
                    >
                      <Layers size={24} />
                    </div>
                    <div className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 600 }}>{proj.title}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.3rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {proj.client} • {proj.year}
                    </div>
                  </div>
                )}

                {/* Floating Tag */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: 'var(--brand-plum)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  {proj.category}
                </div>
              </div>

              {/* Card Meta Content */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {proj.title}
                    </h3>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                      {proj.year}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                    {proj.desc}
                  </p>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {proj.tools.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(0,0,0,0.04)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT INSPECTION MODAL */}
      {selectedProject && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(20, 20, 24, 0.65)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '750px',
              borderRadius: '28px',
              overflow: 'hidden',
              background: '#ffffff',
              boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.06)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Media Preview */}
            <div 
              style={{
                height: '300px',
                background: selectedProject.gradient || 'var(--bg-studio-warm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {selectedProject.image ? (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2rem' }}
                />
              ) : (
                <div style={{ textAlign: 'center', color: '#fff' }}>
                  <Layers size={48} color={selectedProject.accentColor || '#fff'} style={{ margin: '0 auto 1rem' }} />
                  <h3 className="font-serif" style={{ fontSize: '1.8rem' }}>{selectedProject.title}</h3>
                </div>
              )}
            </div>

            {/* Modal Body Info */}
            <div style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <span className="badge-pill" style={{ marginBottom: '0.6rem' }}>
                    {selectedProject.category}
                  </span>
                  <h2 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                    {selectedProject.title}
                  </h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>CLIENT</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{selectedProject.client}</div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                {selectedProject.desc}
              </p>

              {/* Technical Highlights / Specs */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                  Engineering & Visual Specifications
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
                  {selectedProject.stats.map((s, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: '0.6rem 0.85rem',
                        borderRadius: '10px',
                        background: 'rgba(0,0,0,0.03)',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}
                    >
                      ✓ {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools list */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {selectedProject.tools.map((tool, idx) => (
                    <span key={idx} className="badge-pill" style={{ fontSize: '0.7rem' }}>
                      {tool}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-thumb-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
