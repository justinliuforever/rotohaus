> Team shared document · Last updated 2026-04-26

## Summary

The Rotohaus website is a multi-section art-brand site that hosts all of the organization's outward-facing business lines: NYC Studio, China Residency, curated shop, commercial partnerships, and brand story.

- 6 top-level sections: Home plus 5 business sections
- Unified technical foundation: React 19 + Vite + Tailwind + Framer Motion, deployed as a single SPA
- Section-specific differentiation: Collection integrates with the Shopify backend and Storefront API; NYC Studio integrates with Luma for event booking; Home / Residency / Work With Us / Our Story are pure content showcases
- The site supports Chinese and English only. Each section selects its default language based on its target audience (see "Bilingual Strategy" below)
- Current status: China Residency is live; the other 5 sections are not yet developed

---

## Site Structure

```
rotohaus.com/
├── /              Home              Brand narrative + entry to all sections
├── /studio        NYC Studio        New York studio (workshops, experiences, events, archive)
├── /residency     China Residency   China residency (currently featured: Yanhuo Qiongzhou, live)
├── /shop          Collection        Curated shop (e-commerce)
├── /collaborate   Work With Us      Brand partnerships + corporate team building
└── /about         Our Story         Organization intro + team + partners
```

---

## Section Details

### 1. Home `/`

**Purpose**: Brand entry point and navigation hub.

- Hero brand narrative
- Three main entry cards: NYC Studio / China Residency / Collection
- Current events / featured bookings (Tufting, Crystal, etc.)
- CTAs: Book / Participate / Explore

**Current status**: Not developed; `/` currently redirects to `/residency`.

---

### 2. NYC Studio `/studio`

**Purpose**: The main entry point for all outward-facing activities of the New York studio.

| Subsection                  | Description                                                      |
| --------------------------- | ---------------------------------------------------------------- |
| Overview                    | Studio intro, location, atmosphere                               |
| Material-Based Practices    | Material workshops (yarn, leather, fabric, plant dyeing)         |
| Experiences & Reservations  | Bookable experiences (Tufting, Crystal, co-work time slots)      |
| Events & Calendar           | Event calendar (Luma embed)                                      |
| Archive                     | Archive of past events and workshops                             |

**Current status**: Not developed.

---

### 3. China Residency `/residency`

**Purpose**: Long-term residency program and cultural learning in China.

| Subsection                   | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| Residency Overview           | Residency philosophy and participation models            |
| Qionglai Residency           | Current featured project "Yanhuo Qiongzhou" (Spring 2026)|
| Learning & Field Experiences | Immersive cultural learning                              |
| Residency Archive            | Past residency archives                                  |

**Current status**: Live; undergoing v2 revamp (open-call mode → showcase mode).

- Chinese: `/residency`
- English: `/residency/en`
- Artist details: `/residency/artists` + `/residency/en/artists`

---

### 4. Collection `/shop`

**Purpose**: Curated e-commerce selling intangible cultural heritage and artisan works.

| Subsection             | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| Shop Overview          | Collection philosophy and curatorial narrative             |
| Products               | Product listings (filterable by category)                  |
| Categories             | Categories (ceramics / bamboo weaving / embroidery …)      |
| Product Detail         | Product details + link to the maker's story                |
| Makers `/makers/:slug` | Long-form maker profiles                                   |

**Current status**: Not developed. MVP work is about to begin (see `roto collection/rotocollectionSpec.md`).

- Default English: `/shop`
- Chinese: `/shop/zh`
- Audience is primarily in the US

---

### 5. Work With Us `/collaborate`

**Purpose**: Entry point for brand partnerships and corporate services (B2B).

| Subsection                   | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| Brand & Commercial Projects  | Brand partnerships, custom projects               |
| Corporate / Private Programs | Corporate team building, private group workshops  |
| Inquiry                      | Partnership inquiry form                          |

**Current status**: Not developed.

---

### 6. Our Story `/about`

**Purpose**: Organizational identity and trust-building.

| Subsection       | Description                                       |
| ---------------- | ------------------------------------------------- |
| Mission & Vision | Philosophy and long-term direction                |
| Team             | Founders and core team                            |
| Partners         | Partner artists, institutions, collaborators      |
| Organization     | Company background, dual locations in US & China  |

**Current status**: Not developed.

---

## Tech Stack Overview

### Shared Foundation Across the Site

| Layer            | Technology                                          | Use                                              |
| ---------------- | --------------------------------------------------- | ------------------------------------------------ |
| Framework        | React 19 + Vite 7                                   | Single SPA, covers all sections                  |
| Styling          | Tailwind CSS v4                                     | Atomic styling + design-system tokens            |
| Animation        | Framer Motion + custom CSS                          | Entrance animations, parallax, hover effects    |
| Routing          | React Router 7                                      | Client-side routing                              |
| Fonts            | FZFengRuSong / Huiwen-Fangsong / Instrument Serif   | Chinese & English brand fonts                    |
| Shared components| TopNav / Footer / LanguageToggle / FadeInSection    | Reused across sections                           |

### Section-Specific Differentiation

| Section         | Primary tech                                | Third-party services                                                                                            |
| --------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Home            | Pure frontend components                    | —                                                                                                               |
| NYC Studio      | Pure frontend + embeds                      | **Luma** (event calendar and booking)                                                                           |
| China Residency | Pure frontend components                    | —                                                                                                               |
| Collection      | `@shopify/hydrogen-react` + Storefront API  | **Shopify Basic** (products / orders / payments / tax / email); Phase 2 adds **Resend** + **React Email** for branded email |
| Work With Us    | Pure frontend + form                        | **Formspree** or **Resend** (inquiry form → email)                                                              |
| Our Story       | Pure frontend components                    | —                                                                                                               |

### Content Management Strategy (per section)

| Section                            | MVP approach                                              | Future optional upgrade                                  |
| ---------------------------------- | --------------------------------------------------------- | -------------------------------------------------------- |
| Residency / About / Work With Us   | Content hardcoded in React components                     | Sanity / Notion API (if copy is updated frequently)      |
| NYC Studio                         | Workshop copy hardcoded + Luma for the calendar           | Same as above                                            |
| Collection                         | Product data in the Shopify backend + maker stories hardcoded | Migrate to a CMS once makers > 10                    |

### Deployment & Infrastructure

| Item                | Choice                                                                          |
| ------------------- | ------------------------------------------------------------------------------- |
| Main site hosting   | Vercel or Netlify (auto-deploy from Git)                                        |
| Domain              | `rotohaus.com` (main site) + `shop.rotohaus.com` (Shopify checkout subdomain)   |
| Serverless functions| Vercel Functions (only for the Collection Phase 2 email webhook)                |
| Email sending       | Resend (with domain SPF/DKIM/DMARC verification)                                |
| Analytics (optional)| Plausible or Fathom (privacy-friendly)                                          |

---

## Bilingual Strategy

The site supports Chinese and English only. Each section sets its default language based on its target audience; the URL is switched via `LanguageToggle`, and state is unified through the `useLanguage` hook.

| Section         | Default language | Audience                                |
| --------------- | ---------------- | --------------------------------------- |
| Home            | English          | International visitors first            |
| NYC Studio      | English          | Local New York customers                |
| China Residency | Chinese          | Chinese artists and applicants          |
| Collection      | English          | US consumers                            |
| Work With Us    | English          | International brands / corporate clients|
| Our Story       | English          | International visitors first            |

**Routing rules**:

- Default language: `/{board}`
- Alternate language: `/{board}/zh` or `/{board}/en`
- Existing exception: China Residency uses `/residency` (Chinese) + `/residency/en` (English), preserving the historical paths

---

## Shared Components Inventory

| Component       | Path                                    | Status     | Use                                                                  |
| --------------- | --------------------------------------- | ---------- | -------------------------------------------------------------------- |
| TopNav          | `components/shared/TopNav.jsx`          | To build   | Cross-page top navigation (logo + section links + cart + language)   |
| Footer          | `components/shared/Footer.jsx`          | Live       | Site-wide footer                                                     |
| LanguageToggle  | `components/shared/LanguageToggle.jsx`  | Live       | EN/ZH toggle button; will be integrated into TopNav                  |
| useLanguage     | `hooks/useLanguage.js`                  | To build   | Unified hook mapping URL to language state                           |
| FadeInSection   | `components/shared/FadeInSection.jsx`   | Live       | Scroll-in animation wrapper                                          |
| SideNavigation  | `components/shared/SideNavigation.jsx`  | Live       | In-page anchor navigation for Residency only; not cross-page         |
| CartDrawer      | `components/shop/CartDrawer.jsx`        | To build   | Cart drawer for the Collection section                               |

---

## Prioritization (Recommended)

Ordered by workflow dependency:

1. **Infrastructure**: TopNav + useLanguage hook. Every new section depends on these — must come first
2. **Collection MVP**: highest current commercial priority; needs cash-flow validation
3. **Residency v2 revamp**: content update for an already-live project; small effort
4. **Home**: brand storefront; funnels traffic to all other sections
5. **Our Story**: trust-building; mostly copy, small effort
6. **NYC Studio**: depends on Luma integration and event content prep
7. **Work With Us**: B2B entry; in the short term, an email inquiry can substitute

---

## Related Documents

- Current sitemap source: `/ROTOHAUS Sitemap.md`
- Section narrative copy: `/content.txt`
- Per-section development progress: `/notes/development-status.md`
- Collection detailed spec: `/notes/roto collection/rotocollectionSpec.md`
