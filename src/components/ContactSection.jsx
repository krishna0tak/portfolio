import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Send, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [inquiryType, setInquiryType] = useState('3D Packaging');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    '3D Packaging',
    'Interactive 3D Web',
    'Blender Product Visualization',
    'Brand Identity & Dielines',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#422332', '#c5a07e', '#ffffff', '#2b1420']
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '8rem 0 6rem', position: 'relative' }}>
      <div className="studio-container">
        {/* Header */}
        <div className="section-title-wrap">
          <span className="section-eyebrow">Direct Inquiries</span>
          <h2 className="section-heading">Let's Create Something Memorable</h2>
          <p className="section-subtext">
            Have a new packaging launch, 3D modeling challenge, or interactive web project in mind? Reach out to collaborate.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
            gap: '3.5rem', 
            alignItems: 'flex-start' 
          }}
        >
          {/* Left: Studio Info */}
          <div>
            <span className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <span className="pulse-dot" />
              <span>Studio Status: Available</span>
            </span>

            <h3 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: '1.2' }}>
              Ready to bring your physical products into the 3D digital realm.
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Whether you need precision structural dielines for mass production, high-fidelity Blender Cycles renders, or an interactive unboxing web experience, let’s build it together.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div 
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '12px', 
                    background: 'var(--brand-plum-soft)', 
                    color: 'var(--brand-plum)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)' }}>
                    Email Directly
                  </div>
                  <a href="mailto:hello@bonocartan.design" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                    hello@bonocartan.design
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div 
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '12px', 
                    background: 'var(--brand-plum-soft)', 
                    color: 'var(--brand-plum)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)' }}>
                    Studio Location
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                    Available Worldwide (Remote)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Footprints */}
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                Portfolio & Networks
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Behance', 'ArtStation', 'Instagram', 'LinkedIn', 'GitHub'].map((net) => (
                  <span 
                    key={net} 
                    className="btn-secondary" 
                    style={{ padding: '0.45rem 1rem', fontSize: '0.78rem', cursor: 'pointer' }}
                  >
                    {net}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div 
            className="glass-panel"
            style={{
              borderRadius: '28px',
              padding: '2.5rem',
              background: '#ffffff',
              boxShadow: 'var(--shadow-studio-elevated)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
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
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Inquiry Received!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                  Thank you for reaching out. I review all project proposals promptly and will be in touch within 24–48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ padding: '0.6rem 1.5rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h4 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  Project Details
                </h4>

                {/* Inquiry Type Pills */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '0.6rem' }}>
                    I Am Interested In:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {inquiryTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        style={{
                          border: 'none',
                          padding: '0.4rem 0.85rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          background: inquiryType === type ? 'var(--brand-plum)' : 'rgba(0,0,0,0.04)',
                          color: inquiryType === type ? '#ffffff' : 'var(--text-secondary)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-medium)',
                      background: 'var(--bg-studio)',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '0.4rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@studio.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-medium)',
                      background: 'var(--bg-studio)',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '0.4rem' }}>
                    Project Brief / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your product packaging, timelines, or 3D vision..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-medium)',
                      background: 'var(--bg-studio)',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.95rem' }}
                >
                  <span>Submit Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
