---
phase: 4
plan: 1
wave: 1
---

# Plan 4.1: Augen.pro Design Tokens & Floating Navigation

## Objective
Establish the `augen.pro` design system in `src/index.css` (off-white substrate `#f2f2f4`, off-black `#0f1012`, electric blue `#0071e3`, orange `#ff5102`, PP Neue Montreal / Inter Tight typography tokens, pill utilities) and build the floating backdrop-blur `Navbar` component matching `augen.pro`.

## Context
- `.gsd/SPEC.md`
- `.gsd/ROADMAP.md`
- `https://augen.pro/`

## Tasks

<task type="auto">
  <name>Update index.css with augen.pro design tokens and utilities</name>
  <files>c:\port\src\index.css</files>
  <action>
    - Define CSS variables for --color-offWhite (#f2f2f4), --color-offBlack (#0f1012), --color-blue (#0071e3), --color-orange (#ff5102), --color-greyLight (#efefef), --color-greyLighter (#f8f8f8).
    - Add custom classes for augen-pill, augen-glass, augen-card, and tracking utilities.
    - Set background color to var(--color-offWhite) and font-family to Inter Tight / system sans.
  </action>
  <verify>npm run build</verify>
  <done>index.css updated with augen.pro tokens and utility classes.</done>
</task>

<task type="auto">
  <name>Build Navbar component matching augen.pro floating pill navigation</name>
  <files>c:\port\src\components\Navbar.jsx</files>
  <action>
    - Build fixed floating navigation header with rounded pill logo icon on left, nav links (Overview, Experience, Showcase, Specs) with hover opacity transition, and circular search/menu icons.
    - Apply backdrop-filter blur(20px) and subtle border styling matching augen.pro navigation header.
  </action>
  <verify>npm run build</verify>
  <done>Navbar.jsx created matching augen.pro navigation component.</done>
</task>

## Success Criteria
- [ ] `index.css` contains `augen.pro` color palette and pill button styles.
- [ ] `Navbar.jsx` provides floating backdrop-blur pill navigation header.
- [ ] Code builds without syntax or linter errors.
