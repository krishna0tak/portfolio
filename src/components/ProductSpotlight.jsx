import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Droplets, Feather, Sun, Layers, Eye, CheckCircle2 } from 'lucide-react';

export default function ProductSpotlight() {
  const [activeTab, setActiveTab] = useState('benefits'); // 'benefits', 'actives', 'packaging'
  const [selectedBenefit, setSelectedBenefit] = useState(0);

  const benefits = [
    {
      number: "01",
      title: "GENTLE CLEANSING",
      tagline: "Luxuriously cleanses while preserving skin's natural moisture",
      desc: "Formulated with ultra-fine whipped microfoam that lifts impurities, excess sebum, and pollution without disturbing the skin's lipid barrier.",
      icon: <Droplets size={22} className="text-plum" />,
    },
    {
      number: "02",
      title: "VELVET SOFTNESS",
      tagline: "Enriched with shea butter & jojoba oil for velvety softness",
      desc: "Infused with pure cold-pressed botanical lipids that leave skin cushiony, nourished, and silky-smooth immediately post-rinse.",
      icon: <Feather size={22} className="text-plum" />,
    },
    {
      number: "03",
      title: "RADIANT GLOW",
      tagline: "Reveals a naturally radiant, even-toned glow",
      desc: "Powered by natural Ayurvedic botanical extracts of Licorice root and Manjistha to reduce dark spots and enhance natural clarity.",
      icon: <Sun size={22} className="text-plum" />,
    }
  ];

  const keyActives = [
    { name: "Licorice Extract (Glycyrrhiza Glabra)", role: "Brightening & Pigmentation Defense" },
    { name: "Manjistha (Rubia Cordifolia)", role: "Detoxifying & Complexion Enhancement" },
    { name: "Shea Butter & Jojoba Seed Oil", role: "Lipid Barrier Moisture & Softening" },
    { name: "Chamomile & Calendula", role: "Calming & Anti-Inflammatory Soothing" },
    { name: "Lavender Flower Extract", role: "Balancing & Botanical Aroma" },
    { name: "Vitamin E (Tocopherol)", role: "Potent Free-Radical Antioxidant Shield" },
  ];

  const packagingSpecs = [
    { label: "Volume", val: "100 ml / 3.4 fl. oz." },
    { label: "Carton Type", val: "Tuck-End Monocarton (Folding Boxboard)" },
    { label: "Finish", val: "Deep Plum Matte Velvet with Foil Stamping" },
    { label: "Dispenser", val: "Ergonomic White Foaming Cleanser Pump" },
    { label: "Standards", val: "Paraben & SLS Free, Vegan, ISO & GMP" },
    { label: "Origin", val: "Formulated & Engineered in India" },
  ];

  return (
    <section id="product" style={{ padding: '8rem 0 6rem', position: 'relative' }}>
      <div className="studio-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="section-eyebrow">Product Engineering & Design</span>
          <h2 className="section-heading">Parisian Glow Cleanser</h2>
          <p className="section-subtext">
            A harmonious synthesis of structural packaging engineering, tactile papercraft, and luxury skincare aesthetics.
          </p>
        </div>

        {/* Main Grid: Showcase Image & Interactive Details */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
            gap: '3.5rem', 
            alignItems: 'center' 
          }}
        >
          {/* Left Column: Visual Product Mockup Card */}
          <div 
            className="glass-panel"
            style={{
              borderRadius: '28px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-studio-product)',
              background: 'linear-gradient(145deg, #ffffff 0%, #f7f6f4 100%)',
            }}
          >
            {/* Background Glow */}
            <div 
              style={{
                position: 'absolute',
                top: '-30%',
                right: '-20%',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--brand-plum-soft) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Asset Image: Mockup */}
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
              <img 
                src="/assets/cameola-mockup.jpg" 
                alt="Caméola Parisian Glow Box and Bottle Mockup"
                style={{
                  width: '100%',
                  maxHeight: '440px',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  filter: 'drop-shadow(0 20px 30px rgba(66, 35, 50, 0.15))',
                  transition: 'transform 0.5s var(--ease-spring)',
                }}
                className="product-hero-img"
              />
            </div>

            {/* Spec Tag Footer */}
            <div 
              style={{ 
                marginTop: '1.5rem', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1rem',
                fontSize: '0.78rem',
                color: 'var(--text-secondary)'
              }}
            >
              <div>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Caméola</span> Monocarton
              </div>
              <div className="badge-pill" style={{ padding: '0.25rem 0.65rem', fontSize: '0.7rem' }}>
                100 ml E
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tabs & Content */}
          <div>
            {/* Tab Controls */}
            <div 
              style={{ 
                display: 'inline-flex', 
                background: 'rgba(0,0,0,0.04)', 
                padding: '4px', 
                borderRadius: '9999px',
                marginBottom: '2rem' 
              }}
            >
              {[
                { id: 'benefits', label: '3 Core Benefits' },
                { id: 'actives', label: 'Key Actives' },
                { id: 'packaging', label: 'Packaging Dieline' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    border: 'none',
                    padding: '0.6rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.825rem',
                    fontWeight: activeTab === tab.id ? 600 : 500,
                    background: activeTab === tab.id ? '#ffffff' : 'transparent',
                    color: activeTab === tab.id ? 'var(--brand-plum)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    boxShadow: activeTab === tab.id ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB 1: 3 CORE BENEFITS */}
            {activeTab === 'benefits' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {benefits.map((b, idx) => (
                  <div
                    key={b.number}
                    onClick={() => setSelectedBenefit(idx)}
                    className="glass-panel"
                    style={{
                      padding: '1.5rem',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      borderLeft: selectedBenefit === idx ? '3px solid var(--brand-plum)' : '1px solid var(--border-subtle)',
                      background: selectedBenefit === idx ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.6)',
                      transform: selectedBenefit === idx ? 'translateX(6px)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span className="font-serif" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-plum)' }}>
                          {b.number}
                        </span>
                        <h4 style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
                          {b.title}
                        </h4>
                      </div>
                      <div style={{ color: 'var(--brand-plum)' }}>{b.icon}</div>
                    </div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {b.tagline}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: KEY ACTIVES */}
            {activeTab === 'actives' && (
              <div 
                className="glass-panel"
                style={{ borderRadius: '24px', padding: '2rem' }}
              >
                <h3 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--brand-plum)', marginBottom: '1rem' }}>
                  Botanical Active Complex
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Extracted from traditional Ayurvedic pharmacopeia and French dermatological science, balanced for normal, dry, and dull skin.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
                  {keyActives.map((active, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem',
                        padding: '0.75rem 1rem',
                        background: 'rgba(255,255,255,0.7)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--brand-plum)" />
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {active.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                          {active.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: PACKAGING DIELINE & STRUCTURAL SPECS */}
            {activeTab === 'packaging' && (
              <div 
                className="glass-panel"
                style={{ borderRadius: '24px', padding: '2rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h3 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--brand-plum)' }}>
                    Structural Engineering
                  </h3>
                  <a 
                    href="/assets/cameola-dieline.png" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-secondary" 
                    style={{ padding: '0.4rem 0.85rem', fontSize: '0.75rem' }}
                  >
                    <Eye size={14} />
                    <span>View Dieline</span>
                  </a>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {packagingSpecs.map((spec, i) => (
                    <div 
                      key={i}
                      style={{
                        padding: '0.85rem',
                        background: 'rgba(255,255,255,0.7)',
                        borderRadius: '14px',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '0.2rem' }}>
                        {spec.label}
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {spec.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .product-hero-img:hover {
          transform: scale(1.03) translateY(-4px);
        }
      `}</style>
    </section>
  );
}
