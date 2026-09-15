# Design System: Atelier Visual Archive (Editorial 3D Packaging Portfolio)

Generated from Stitch Project: `projects/15722830854534913509`

---

## 🎨 Color Palette

### 1. Structural Substrates & Roles
| Role Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| **Canvas Base** | `#F7F6F3` | Universal background plane. Emulates heavyweight archival cotton stock. Never use pure `#FFFFFF` as a broad canvas backdrop. |
| **Canvas Subtle** | `#EFECE6` | Used for technical inset panels, metadata index shelves, and structural framing. |
| **Border Hairline** | `#E2DFD7` | 1px delineators that govern the grid. Provides razor-sharp editorial separation without visual weight. |
| **Primary Ink / Charcoal** | `#202020` | Primary text and structural element color. Pure contrast without the synthetic harshness of `#000000`. |
| **Secondary / Stone Gray** | `#77736F` | Technical notations, aspect ratios, focal lengths, project indexes, and inactive state signifiers. |
| **Charcoal Muted** | `#57534E` | Muted body and secondary metadata. |
| **Primary Accent / Cosmetic Plum** | `#4A152E` | Strategic optical punctuation. Applied to active index points, interactive state changes, and primary callouts. |
| **Tertiary Accent / Deep Plum** | `#3B1224` | Pressed states, hover fills on buttons, and high-impact structural blocks. |

---

### 2. Surface Hierarchy (Light Mode)
| Surface Token | Hex Code | Description |
| :--- | :--- | :--- |
| `surface` | `#FCF9F8` | Default surface tone |
| `surface-dim` | `#DCD9D9` | Dimmed surface variant |
| `surface-bright` | `#FCF9F8` | Bright surface variant |
| `surface-container-lowest` | `#FFFFFF` | Lowest elevation container fill |
| `surface-container-low` | `#F6F3F2` | Low elevation container fill |
| `surface-container` | `#F0EDED` | Medium container fill |
| `surface-container-high` | `#EAE7E7` | High elevation container fill |
| `surface-container-highest` | `#E5E2E1` | Highest elevation container fill |
| `surface-variant` | `#E5E2E1` | Muted variant surface fill |
| `surface-tint` | `#8A4A64` | Tint overlay for elevated elements |

---

### 3. Material / Functional Roles
| Token | Hex Code | Text On Element (On-Token) |
| :--- | :--- | :--- |
| **Primary** | `#300119` | `#FFFFFF` |
| **Primary Container** | `#4A152E` | `#C37A96` |
| **Primary Fixed** | `#FFD9E4` | `#390720` |
| **Primary Fixed Dim** | `#FFB0CD` | Variant: `#6E334C` |
| **Secondary** | `#615E5A` | `#FFFFFF` |
| **Secondary Container** | `#E8E1DC` | `#676460` |
| **Secondary Fixed** | `#E8E1DC` | `#1D1B18` |
| **Secondary Fixed Dim** | `#CBC5C1` | Variant: `#494643` |
| **Tertiary** | `#2C0617` | `#FFFFFF` |
| **Tertiary Container** | `#451A2C` | `#BB7F94` |
| `tertiary-fixed` | `#FFD9E4` | `#350D1F` |
| `tertiary-fixed-dim` | `#F7B4CB` | Variant: `#68384A` |
| **Inverse Surface** | `#303030` | `#F3F0EF` |
| **Inverse Primary** | `#FFB0CD` | — |
| **Outline** | `#837378` | Variant: `#D6C1C7` |
| **Error** | `#BA1A1A` | `#FFFFFF` |
| **Error Container** | `#FFDAD6` | `#93000A` |

---

## ✒️ Typography System

### Font Families
- **Display & Headline Font:** `Playfair Display` (Literary, romantic serif with haute-couture tracking)
- **Body & Technical Font:** `Inter` (Crystalline, modernist sans-serif)

---

### Typographic Hierarchy

| Token Name | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | Playfair Display | `88px` | `400` | `96px` | `-0.03em` |
| `display-hero-mobile` | Playfair Display | `44px` | `400` | `50px` | `-0.02em` |
| `headline-xl` | Playfair Display | `56px` | `400` | `64px` | `-0.025em` |
| `headline-xl-mobile` | Playfair Display | `34px` | `400` | `40px` | `-0.02em` |
| `headline-lg` | Playfair Display | `36px` | `400` | `44px` | `-0.015em` |
| `headline-lg-mobile` | Playfair Display | `26px` | `400` | `32px` | `-0.01em` |
| `headline-md` | Playfair Display | `24px` | `400` | `32px` | `-0.01em` |
| `title-editorial` | Playfair Display | `20px` | `400` | `28px` | `0em` |
| `body-large` | Inter | `18px` | `300` | `30px` | `-0.01em` |
| `body-base` | Inter | `15px` | `400` | `26px` | `-0.005em` |
| `body-muted` | Inter | `13px` | `400` | `22px` | `0.01em` |
| `label-caps` | Inter | `11px` | `600` | `16px` | `0.14em` (Uppercase) |
| `technical-mono` | Inter | `11px` | `400` | `16px` | `0.08em` |

---

## 📏 Layout & Spacing

### Spacing Scale
- `space-xs`: `0.25rem` (4px)
- `space-sm`: `0.5rem` (8px)
- `space-md`: `1.0rem` (16px)
- `space-lg`: `2.0rem` (32px)
- `space-xl`: `4.0rem` (64px)
- `space-2xl`: `8.0rem` (128px)
- `space-3xl`: `12.0rem` (192px)

### Grid & Margins
- **Desktop (≥ 1280px):** 12-column grid \| Margin: `4rem` (64px) \| Gutter: `3rem` (48px) \| Max-width: 1760px
- **Tablet (768px – 1279px):** 8-column grid \| Margin: `2rem` (32px) \| Gutter: `1.5rem` (24px)
- **Mobile (< 768px):** 4-column fluid layout \| Margin: `1.5rem` (24px) \| Gutter: `1rem` (16px)

---

## 🏛️ Elevation, Shapes & Depth

- **Corners:** Strictly architectural (`border-radius: 0px`). No rounded buttons or badges.
- **Shadows:** Non-skeuomorphic and completely flat (`box-shadow: none`). Zero drop shadows or glassmorphism.
- **Depth Mechanism:** 
  1. **Rule-Line Cadence:** `1px solid #E2DFD7` hairlines to separate content blocks.
  2. **Substrate Shifts:** Panel backgrounds shift to `#EFECE6` (Canvas Subtle) with `1px solid #202020` or `#4A152E` borders.
  3. **Plum Chromatic Staging:** `#4A152E` solid fills for highest optical priority.

---

## 🛠️ Key Components & Specifications

### 1. Primary Button
```css
background-color: #202020;
color: #F7F6F3;
border-radius: 0px;
padding: 16px 36px;
font-family: 'Inter', sans-serif;
font-size: 11px;
font-weight: 600;
letter-spacing: 0.14em;
text-transform: uppercase;
transition: background-color 0.2s ease-out;

/* Hover State */
background-color: #4A152E;
```

### 2. Secondary / Ghost Button
```css
background-color: transparent;
color: #202020;
border: 1px solid #202020;
border-radius: 0px;
padding: 16px 36px;

/* Hover State */
background-color: #202020;
color: #F7F6F3;
```

### 3. Filter & Discipline Chips
- **Default:** `background: transparent; border: 1px solid #E2DFD7; color: #202020; font: technical-mono;`
- **Active:** `background: #4A152E; color: #F7F6F3; border: none;`

### 4. Input Fields
- **Default:** `border-bottom: 1px solid #77736F; background: transparent; border-radius: 0px;`
- **Focus:** `border-bottom: 1px solid #4A152E; outline: none;`
