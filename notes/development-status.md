# Rotohaus Website Development Status & Progress

> Last updated: 2026-03-01

---

## 1. Global Site Architecture

### Planned Routes

| Route | Section | Status |
|-------|---------|--------|
| `/` | Home | Not developed (currently redirects to `/residency`) |
| `/residency` | Residency Program (Chinese) | ✅ Live, undergoing revamp |
| `/residency/en` | Residency Program (English) | ✅ Live, undergoing revamp |
| `/dialog` | Roto_Dialogue (exhibitions, community, partnerships) | Not developed |
| `/collection` | Roto_Collection (curated shop) | Not developed |
| `/experience` | Roto_Experience (performance, healing) | Not developed |
| `/lab` | Roto_Material Lab (workshops, craft) | Not developed |

### Tech Stack

React 19 + Vite 7 + Tailwind CSS v4 + Framer Motion + React Router

---

## 2. Residency Section — "Yanhuo Qiongzhou" Revamp Plan

### Background

- The "Yanhuo Qiongzhou" residency open call has ended; artists have been selected
- The current page is in "open call" mode and needs to transition to "showcase" mode
- No second residency cohort is planned within the next year — no need for versioning/sub-routes
- Route structure unchanged: `/residency` (Chinese) + `/residency/en` (English)

### Revamp Goals

1. **Add an "Artist Lineup" section** — showcase the selected artists as the page's core highlight
2. **Update Hero** — main visual and copy shift from "open call" to "showcase"; CTA changes to "View the Artist Lineup"
3. **De-emphasize application-related content** — mark "This cohort's open call has closed"; keep content but reduce prominence
4. **Update side navigation** — add an "Artists" nav item

### Post-Revamp Page Structure (top to bottom)

```
┌─ Hero ────────────────────────── Updated main visual, CTA → "View the Artist Lineup"
│
├─ Artist Lineup ⭐ NEW ─────────── Selected artists showcase (core new content)
│
├─ Venue Introductions ──────────── Retained (Jiaguan / Qiongyao / Landianfang)
│   ├─ JiaguanSection
│   ├─ QiongyaoSection
│   └─ LandianfangSection
│
├─ Process / Timeline ───────────── Retained, stage status may be updated
│   ├─ ScheduleSection
│   ├─ ApplicationSection (de-emphasized, marked as closed)
│   ├─ SupportSection
│   └─ ApplySection (de-emphasize/hide the apply button)
│
├─ Q&A ──────────────────────────── Retained, content may be updated
│
├─ Team & Advisors ──────────────── Retained
│   ├─ AdvisorsSection
│   └─ TeamSection
│
├─ About & Acknowledgements ─────── Retained
│   ├─ RotohausSection
│   ├─ HistorySection
│   └─ ThanksSection
│
└─ Footer
```

### Side Navigation Update

```
Before: Home → Venues → Process → Application Requirements → Q&A → Team → About
After:  Home → Artists → Venues → Process → Application Info (de-emphasized) → Team → About
```

### Revamp Task Checklist

- [ ] Collect Artist Lineup content (bilingual copy + image assets)
- [ ] Collect new Hero key visual assets
- [ ] Design the Artist Lineup section UI/UX
- [ ] Build ArtistsSection component (Chinese + English)
- [ ] Update HeroSection (visual + copy + CTA)
- [ ] Update InfoSection (dates / status info)
- [ ] De-emphasize ApplicationSection / ApplySection (mark as closed)
- [ ] Update SideNavigation (add "Artists" item)
- [ ] Update ResidencyPage.jsx / ResidencyPageEN.jsx (insert new components)
- [ ] Responsive adaptation & testing
- [ ] Bilingual content proofreading

---

## 3. Completed Milestones

- [x] Residency page v1 launched (Chinese + English)
- [x] All venue sections completed (Jiaguan / Qiongyao / Landianfang)
- [x] Team & Advisors sections completed
- [x] Application process sections completed
- [x] Shared components: Footer, LanguageToggle, SideNavigation, FadeInSection
- [x] Animation system: FadeInSection + parallax scrolling + stacked photo gallery
- [x] Responsive adaptation (fluid typography via `clamp()`)

---

## 4. Long-term Planning Notes

- When the second residency cohort launches, the current content can be extracted to `/residency/yanhuoqiongzhou`, and a new `/residency` will serve as the overview page
- Home page development requires coordinating entry-point designs for all sections
- The i18n system is currently WIP (content is hardcoded inside components); a unified context/hook approach can be considered in the future
- Section narratives can be found in `/content.txt`
