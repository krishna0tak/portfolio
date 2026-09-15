---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Tailwind CSS & shadcn/ui Component Integration

## Objective
Install Tailwind CSS, PostCSS, and shadcn/ui component primitives (`Button`, `Badge`, `Card`, `Tabs`) styled according to `DESIGN.md` (0px sharp geometry, `#E2DFD7` hairline borders, `#202020` charcoal ink, `#4A152E` cosmetic plum).

## Context
- .gsd/SPEC.md
- DESIGN.md
- src/index.css
- tailwind.config.js
- src/components/ui/

## Tasks

<task type="auto">
  <name>Install Tailwind CSS & shadcn dependencies</name>
  <files>package.json, postcss.config.js, tailwind.config.js, vite.config.js</files>
  <action>
    Installed tailwindcss, @tailwindcss/postcss, autoprefixer, clsx, tailwind-merge, class-variance-authority.
    Configured path aliasing (@ -> ./src) in vite.config.js and jsconfig.json.
    Configured tailwind.config.js with DESIGN.md color tokens and 0px border radius.
  </action>
  <verify>npm run build</verify>
  <done>Tailwind and PostCSS processing active without build warnings</done>
</task>

<task type="auto">
  <name>Create shadcn UI primitives and refactor components</name>
  <files>src/components/ui/*, src/components/PortfolioGallery.jsx, src/components/ProductSpotlight.jsx, src/components/Navbar.jsx</files>
  <action>
    Created Button, Badge, Card, and Tabs components in src/components/ui/.
    Refactored PortfolioGallery filter chips to use Badge.
    Refactored ProductSpotlight detail tabs to use Tabs, TabsList, TabsTrigger.
    Refactored Navbar CTA link to use Button.
  </action>
  <verify>npm run build</verify>
  <done>Zero-error build passing in under 1 second</done>
</task>

## Success Criteria
- [ ] Tailwind CSS + PostCSS pipeline operational
- [ ] shadcn/ui components created with sharp 0px geometry matching `DESIGN.md`
- [ ] Build passes cleanly with zero errors
