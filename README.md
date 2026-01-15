# ROTOHAUS

Art & cultural platform website.

## Getting Started

```bash
npm install     # Install dependencies
npm run dev     # Dev server → http://localhost:5173
npm run build   # Production build
npm run preview # Preview production build
```

## Tech Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion
- React Router

## Project Structure

```
src/
├── components/
│   ├── residency/      # Residency page components
│   └── shared/         # Shared components
├── pages/
│   └── ResidencyPage.jsx
├── i18n/
├── App.jsx
└── index.css

public/
└── images/
    └── residency/      # Residency page assets

docs/
└── RESIDENCY.md        # Residency page documentation
```

## Pages

| Route | Status | Description |
|-------|--------|-------------|
| `/residency` | ✅ Done | Art Residency Program |
| `/` | ↪️ Redirect | Redirects to `/residency` |
| `/dialog` | 🔜 Planned | ROTO Dialog |
| `/collection` | 🔜 Planned | ROTO Collection |
| `/experience` | 🔜 Planned | ROTO Experience |
| `/lab` | 🔜 Planned | ROTO Material Lab |

## Fonts

- Instrument Serif (Google Fonts)
- Helvetica Neue (System)
- FZFengRuSong (`/public/fonts/`)
- Huiwen-Fangsong (`/public/fonts/`)
