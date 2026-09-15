import React from 'react';
import { Box, Code2, PenTool, Sparkles, Layers, Compass, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const steps = [
    {
      num: "01",
      title: "Dieline Engineering",
      desc: "Architecting press-ready 2D packaging dielines with precise fold creases, glue flaps, bleed allowances, and Pantone spot foils.",
      icon: <PenTool size={20} />,
    },
    {
      num: "02",
      title: "3D Reconstitution & Pivots",
      desc: "Transforming 2D vector nets into parametric 3D meshes in Blender, placing hinge origins precisely along the fold lines for realistic opening physics.",
      icon: <Box size={20} />,
    },
    {
      num: "03",
      title: "Photorealistic PBR Shading",
      desc: "Calibrating velvet matte paperboard textures, gold foil reflectivity, and cosmetic glass caustics under soft white studio lighting.",
      icon: <Layers size={20} />,
    },
    {
      num: "04",
      title: "Interactive Web Scrollytelling",
      desc: "Bridging the 3D model into Three.js or GSAP ScrollTrigger, enabling visitors to unbox the physical product purely through page scrolling.",
      icon: <Code2 size={20} />,
    }
  ];

  const skills = [
    { name: "Blender 3D & Cycles", level: "95%", note: "Hard-surface modeling, UV mapping, GLB optimization" },
    { name: "Packaging Dielines & Print", level: "92%", note: "Tuck cartons, rigid boxes, CMYK & spot Pantone" },
    { name: "Three.js & WebGL", level: "88%", note: "Interactive canvas, PBR material shaders, lighting" },
    { name: "GSAP & ScrollTrigger", level: "94%", note: "Pinning, scrub timelines, cinematic easing" },
    { name: "Adobe Illustrator & Photoshop", level: "96%", note: "Vector artwork, brand identity, texture baking" },
    { name: "React & Modern Web", level: "90%", note: "Vite, responsive layouts, performance optimization" },
  ];

  return (
    <section id="about" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="studio-container">
        {/* Header */}
        <div className="section-title-wrap">
          <span className="section-eyebrow">Creative Philosophy</span>
          <h2 className="section-heading">Bridging Papercraft & 3D Web</h2>
          <p className="section-subtext">
            Transforming tactile packaging concepts into immersive digital unboxing experiences that convert visitors into brand advocates.
          </p>
        </div>

        {/* Bio Banner */}
        <div 
          className="glass-panel"
          style={{
            borderRadius: '28px',
            padding: '3rem',
            marginBottom: '4.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span className="badge-pill" style={{ marginBottom: '1rem' }}>
              The Designer
            </span>
            <h3 className="font-serif" style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Crafting physical dimensions in a digital studio.
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Specialized in the intersection of <strong>cosmetic packaging design</strong>, <strong>Blender 3D modeling</strong>, and <strong>interactive web experiences</strong>. I believe that digital portfolios shouldn't be passive flat grids — they should celebrate the physical delight of unboxing, unwrapping, and discovering tangible products.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Every box flap, foil reflection, and hinge rotation is engineered to bridge tactile reality with modern web performance.
            </p>
          </div>

          {/* Key Stats Counter */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.25rem',
              padding: '1.5rem',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.65)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {[
              { val: "50+", label: "Packaging Dielines Engineered" },
              { val: "100%", label: "Custom 3D Geometries" },
              { val: "60fps", label: "Web Glb/Scroll Performance" },
              { val: "0.2s", label: "Interactive Scrub Response" },
            ].map((stat, idx) => (
              <div key={idx} style={{ padding: '0.5rem' }}>
                <div className="font-serif" style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--brand-plum)' }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-eyebrow">The Pipeline</span>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
              From Vector Dieline to Browser Unboxing
            </h3>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem' 
            }}
          >
            {steps.map((step) => (
              <div 
                key={step.num}
                className="glass-panel"
                style={{
                  borderRadius: '22px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--brand-plum)' }}>
                      {step.num}
                    </span>
                    <div 
                      style={{ 
                        width: '36px', 
                        height: '36px', 
                        borderRadius: '10px', 
                        background: 'var(--brand-plum-soft)', 
                        color: 'var(--brand-plum)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="font-serif" style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Mastery Matrix */}
        <div 
          className="glass-panel"
          style={{
            borderRadius: '28px',
            padding: '3rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #faf9f7 100%)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">Technical Mastery</span>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
              Tools & Software Disciplines
            </h3>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {skill.name}
                  </span>
                  <span className="font-mono" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-plum)' }}>
                    {skill.level}
                  </span>
                </div>
                <div 
                  style={{ 
                    height: '5px', 
                    background: 'rgba(0,0,0,0.06)', 
                    borderRadius: '9999px', 
                    overflow: 'hidden',
                    marginBottom: '0.4rem',
                  }}
                >
                  <div 
                    style={{ 
                      width: skill.level, 
                      height: '100%', 
                      background: 'linear-gradient(to right, var(--brand-plum), var(--brand-plum-light))', 
                      borderRadius: '9999px',
                    }} 
                  />
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                  {skill.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
