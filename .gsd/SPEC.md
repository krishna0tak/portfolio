# SPEC.md — Augen.pro Inspired Rebuild Specification

> **Status**: `FINALIZED`
>
> ⚠️ **Planning Lock**: `FINALIZED` — Ready for GSD planning and execution.

## Vision
A modern, ultra-clean web application inspired by **[augen.pro](https://augen.pro/)**. It combines Swiss grotesque typography ("PP Neue Montreal" / Inter Tight), off-white substrate tones (`#f2f2f4`, `#fdfdfd`), floating blurred pill navigation, bento-box showcase grids, minimal pill badges, and places our **300-frame `foamer` scroll canvas animation** directly into the main hero showcase stage.

## Core Features & Design System
1. **Augen.pro Design Tokens & Typography**:
   - Backgrounds: Off-white (`#f2f2f4`, `#fdfdfd`), soft grey (`#efefef`), off-black (`#0f1012`), and pure white (`#ffffff`).
   - Accents: Electric Blue (`#0071e3`), Vibrant Orange (`#ff5102`), Emerald (`#00b982`), and Yellow (`#fca311`).
   - Typography: Clean grotesque headers & body with tight tracking (`-0.02em`) and subtle opacity hierarchy (`opacity: 0.5` on section labels).
2. **Hero Stage with Foamer Scroll Canvas**:
   - Hero header with headline ("Invisible Computing that works effortlessly for you"), category pills, CTA arrow buttons, and the **`foamer` 299-frame canvas scroll scrubbing stage** embedded right where `augen.pro` places their hero showcase asset.
3. **Floating Blurred Navigation Pill**:
   - Header with rounded pill logo, nav links (`Overview`, `Experience`, `Showcase`, `Specs`), and hover opacity fades.
4. **Bento-Box Feature & Product Grid**:
   - Rounded cards (`border-radius: 1.5rem`), category pills, subtitle labels, and subtle hover interactions.
5. **Minimalist Footer**:
   - Clean footer matching `augen.pro` layout with status pill, nav links, and back-to-top action.

## Constraints
- **Framework**: React + Vite + Tailwind CSS + Canvas Scroll Scrubbing.
- **Performance**: High 60fps scroll scrubbing performance with zero layout jitter.

## Success Criteria
- [ ] Implement `augen.pro` styling tokens, typography, and utility classes in `index.css`.
- [ ] Build floating blurred pill `Navbar` matching `augen.pro`.
- [ ] Build `HeroSection` incorporating headline, category pills, CTA, and embedded `foamer` canvas scroll stage.
- [ ] Build `FeatureGrid` & `ShowcaseSection` following `augen.pro` card & list patterns.
- [ ] Build `Footer` matching `augen.pro`.
- [ ] Production build (`npm run build`) passes with 0 errors.

---

*Last updated: 2026-09-18*
