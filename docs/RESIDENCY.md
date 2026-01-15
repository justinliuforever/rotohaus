# Embers of Qiong Art Residency

> Route: `https://rotohaus.com/residency`

## Overview

Art residency recruitment page for ROTOHAUS, featuring the "Embers of Qiong" International Intangible Cultural Heritage Art Residency program.

**Duration**: March 13 - April 15, 2026
**Deadline**: February 14, 2026
**Location**: Qionglai, Sichuan, China

---

## Page Structure

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 1 | Hero | `HeroSection.jsx` | Main visual with key info |
| 2 | Intro | `IntroSection.jsx` | Project introduction, location previews |
| 3 | Info | `InfoSection.jsx` | Key details: dates, fees, accommodation |
| 4 | Jiaguan | `JiaguanSection.jsx` | Location A: Jiaguan Ancient Town |
| 5 | Qiongyao | `QiongyaoSection.jsx` | Location B: Qiong Kiln Archaeological Park |
| 6 | Landianfang | `LandianfangSection.jsx` | Location C: The Indigo Courtyard |
| 7 | Schedule | `ScheduleSection.jsx` | Three phases: Research → Creation → Exhibition |
| 8 | Application | `ApplicationSection.jsx` | Timeline, target artists, media focus |
| 9 | Support | `SupportSection.jsx` | What we offer & requirements |
| 10 | Apply | `ApplySection.jsx` | How to apply & other participation options |
| 11 | Footer | `Footer.jsx` (shared) | Footer |

---

## File Structure

```
src/
├── components/
│   ├── residency/           # Residency-specific components
│   │   ├── index.js         # Unified exports
│   │   ├── HeroSection.jsx
│   │   ├── IntroSection.jsx
│   │   ├── InfoSection.jsx
│   │   ├── JiaguanSection.jsx
│   │   ├── QiongyaoSection.jsx
│   │   ├── LandianfangSection.jsx
│   │   ├── ScheduleSection.jsx
│   │   ├── ApplicationSection.jsx
│   │   ├── SupportSection.jsx
│   │   └── ApplySection.jsx
│   └── shared/              # Shared components
│       ├── Footer.jsx
│       └── LanguageToggle.jsx
├── pages/
│   └── ResidencyPage.jsx    # Page entry
├── i18n/
│   └── translations.js      # i18n (WIP)
├── App.jsx
├── main.jsx
└── index.css

public/
└── images/
    └── residency/           # All residency images
        ├── jiaguan/
        ├── qiongyao/
        ├── landianfang/
        ├── schedule/
        ├── application/
        └── ...
```

---

## Design Style

- **Overall**: Silicon Valley Premium + Eastern aesthetics
- **Fonts**:
  - Chinese titles: `FZFengRuSong`
  - Chinese body: `Huiwen-Fangsong`
  - English: `Helvetica Neue`
- **Colors**:
  - Primary green: `#476724`
  - Dark brown: `#392C20`
  - Yellow-green: `#959726`
  - Off-white: `#FAFAF8`
- **Animation**: Framer Motion (`useInView`, `whileHover`)
- **Effects**: Paper texture overlay, FadeInSection

---

## Three Residency Locations

### 1. Jiaguan Ancient Town
- Type: Main venue + Artist studio
- Features: River night tours, local culture, Tea-Horse Road
- Photos: 7 + visual accent

### 2. Qiong Kiln Archaeological Park
- Type: Artist studio + Academic conference venue
- Features: Ceramic creation, Qiong tricolor, kiln site space
- Photos: 11 + visual accent

### 3. The Indigo Courtyard
- Type: Short-term residency space
- Features: Indigo dyeing, courtyard installations, light narrative
- Photos: 10 + visual accent

---

## TODO

- [x] Add React Router for multi-page routing
- [ ] Complete i18n support (CN/EN)
- [ ] Add in-page navigation
- [ ] Mobile responsive optimization
- [ ] Application form functionality

---

## Contact

**Email**: residency@rotohaus.com

---

*Last Updated: 2026-01-14*
