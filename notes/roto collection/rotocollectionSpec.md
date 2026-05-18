# Rotocollection — E-Commerce Integration Spec (v2 · Verified Revision)

> This version is a comprehensive revision of the v1 spec, based on hands-on npm registry checks, Shopify official docs (2026-04 stable), and a full read-through of the current codebase (`rotohaus/`).

## Key Revisions in This Version (vs. v1)

| Category | v1 wording | v2 correction | Reason |
|----------|------------|---------------|--------|
| Hydrogen-react version | `^2026.1.0` | **`^2026.4.0`** | npm latest is actually `2026.4.2`; must align with API version `2026-04` |
| React version requirement | Not mentioned | **Must be `^19.2.3+`** | hydrogen-react peer dep does not accept `19.2.0`–`19.2.2` |
| Vite version | Not constrained | **Pin to `^7.0.0`; do not upgrade to 8** | Vite 8 is currently incompatible with hydrogen (`set-cookie-parser` error) |
| Chinese language enum | `language: ZH` | **`language: ZH_CN`** | `ZH` is generic; simplified/traditional translations won't match it |
| ShopifyProvider usage | Hardcoded `languageIsoCode="EN"` | **Do not hardcode language on the Provider**; pass `$lang` as a query variable instead | Our language is URL-driven; a hardcoded value cannot react to route changes |
| Provider placement | Not specified | **Must live inside `<BrowserRouter>`** | Otherwise downstream hooks cannot read router context |
| Cross-page navigation | "Add a Shop item to SideNavigation" | **Build a new TopNav component** | The current SideNavigation only handles in-page scroll anchors for the residency page; it cannot navigate to other pages |
| Shop route naming | Not specified | **`/shop` (EN) + `/shop/zh` (ZH)** | Audience is primarily in the US, so English first; opposite of residency (which is Chinese first) |
| Cart icon location | Not specified | **Right side of TopNav**, alongside LanguageToggle | Avoids competing with SideNavigation for the top-left area |
| Customer accounts | "Switch to New Customer Accounts" | **Already the default** | Legacy accounts have been unavailable for new stores since 2026-02 |
| Customer Storefront API | Not mentioned | **Explicitly not called** | `customerCreate` and other Storefront mutations are deprecated in favor of the Customer Account API; the MVP does not include this |
| Email fonts | "Fall back to Songti SC" | Explicit: **email HTML does not reference any project fonts**; system font stack only | Email clients cannot load local TTF files |
| Webhook | Signature verification only | **Must be idempotent** (use `X-Shopify-Webhook-Id` or order ID) | Shopify retries up to 19 times |
| Email domain | SPF/DKIM only | **Must add DMARC** | Gmail/Yahoo have required it since 2024-02 |
| Metafield | Mentioned but not defined | **Add a "define metafield" step in ops prep** | Without prior definition, Storefront API cannot retrieve it |
| Headless credentials | "Enable Headless sales channel" | **Explicit: install the Headless Channel App** | There are two paths (Headless app vs. Custom app); the app is the more standard choice |
| Checkout subdomain | `shop.rotohaus.com` with no DNS notes | **Add ops prep: DNS CNAME + wait for SSL issuance** | Subdomain configuration has propagation delay; do it early |
| Dependency cleanup | Not mentioned | **Remove `git: ^0.1.5`** | An obsolete, unrelated package currently in package.json |
| SEO | Not mentioned | **Explicitly acknowledge the CSR limitation** | Vite SPA is not SEO-friendly for product pages; the MVP will not do SSR |

---

## Project Background

Rotohaus (Yesuo) is an artist residency website; the main site is already live.

**Current tech stack as verified** (`rotohaus/package.json`):

- React 19.2.0 (**needs to be upgraded to ≥ 19.2.3**) + React DOM 19.2.0
- Vite 7.2.4 (keep; **do not upgrade to 8**)
- Tailwind CSS v4.1.18 (`@tailwindcss/vite` plugin)
- Framer Motion 12.26.2
- React Router DOM 7.12.0
- A mistakenly installed `git: ^0.1.5` (**should be removed**)

**Custom design system**: FZFengRuSong (6 weights) and Huiwen-Fangsong fonts; primary color `#476724` (deep green), gold `#E2D19E`, body text `#392C20`.

**Current bilingual support**: differentiated via URL path (`/residency` Chinese, `/residency/en` English); no i18n context — each section has two component versions (`components/residency/` and `components/residency-en/`). `LanguageToggle` decides the current language via `location.pathname.includes('/en')`.

We want to add an **e-commerce section called Rotocollection** to this site. It imports intangible-cultural-heritage-related products from China and sells them to US customers. Inventory is already in the US; we pack and ship ourselves.

---

## Business Constraints

| Item | Value |
| ---- | ----- |
| Customer base | US only |
| Default language | English (audience is in the US) |
| Estimated order volume | Currently ≤ 20 orders/month; future ceiling ~100 orders/month |
| SKU count | Small (a curated selection of artisan products, ≤ 50 SKUs) |
| Payment methods | Shopify Payments (credit card) + Apple Pay + PayPal Wallet |
| Not supported | Alipay, WeChat Pay, subscriptions, multi-currency (MVP is USD only) |
| Developers | 1 |
| Design requirement | Must maintain consistency with the existing design system |

---

## Selected Approach: Shopify Headless (hydrogen-react)

After full research, the final approach is **Shopify Basic + Headless integration**.

### Key 2026 Facts

1. **The Shopify JS Buy SDK is deprecated** (`shopify-buy` was last updated on 2025-06-24 on npm). **Do not use** the `shopify-buy` package.
2. **The official successor** is `@shopify/hydrogen-react` (a framework-agnostic React component library that can plug into any React app, including Vite). **npm latest is verified as `2026.4.2`**, aligned with Storefront API version `2026-04`.
3. **Do not confuse** `@shopify/hydrogen-react` (a library, which is what we use) with `@shopify/hydrogen` (a full framework that would replace our Vite app — **absolutely do not use it**).
4. **US-based Stripe accounts cannot route PayPal through Stripe.** PayPal is integrated directly via Shopify Payments' built-in PayPal Wallet — **not via Stripe**.
5. **Legacy Customer Accounts were deprecated in 2026-02.** New stores default to the passwordless email-OTP-based New Customer Accounts. No manual switching needed.
6. **Storefront API customer mutations (`customerCreate` / `customerAccessTokenCreate` etc.) are being deprecated**, replaced by the Customer Account API. **This project's MVP does not call any customer mutations**; accounts are handled by Shopify-hosted pages.

### Compatibility Matrix (Verified)

| Package | Current | Required | Action |
|---------|---------|----------|--------|
| `react` | 19.2.0 | hydrogen-react peer dep `^19.2.3` | **Upgrade to `^19.2.3`** |
| `react-dom` | 19.2.0 | Same as above | **Upgrade to `^19.2.3`** |
| `vite` | 7.2.4 | hydrogen-react peer dep `^7.0.0` (also supports 5, 6, 8) | Keep 7; **do not upgrade to 8** (Hydrogen issue #3577) |
| `react-router-dom` | 7.12.0 | No conflict | Keep |
| `framer-motion` | 12.26.2 | No conflict | Keep |

---

## Overall Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  rotohaus.com (our Vite + React app)                         │
│                                                              │
│  Existing pages (unchanged):                                 │
│   ├── /residency           Chinese                           │
│   ├── /residency/en        English                           │
│   ├── /residency/artists   Artist details (Chinese)          │
│   └── /residency/en/artists Artist details (English)         │
│                                                              │
│  New pages:                                                  │
│   ├── /shop              Product list (default English)      │
│   ├── /shop/zh           Product list (Chinese)              │
│   ├── /shop/:handle      Product detail (English)            │
│   ├── /shop/zh/:handle   Product detail (Chinese)            │
│   └── /makers/:slug      Maker profile page                  │
│                                                              │
│  New components:                                             │
│   ├── TopNav             Cross-page top nav (Logo + main links + Cart) │
│   ├── CartDrawer         Right-side cart drawer (Portal-rendered)      │
│   └── ShopProvider tree  ShopifyProvider + CartProvider      │
│                                                              │
│  Uses @shopify/hydrogen-react to fetch data + manage cart    │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ Storefront API (GraphQL)
                       │ Public token, safe to ship to client
                       │ language passed as a query variable, not pinned on the Provider
                       │
┌──────────────────────▼──────────────────────────────────────┐
│  Shopify (headless backend + hosted pages)                   │
│                                                              │
│  Hosted pages (not our code):                                │
│   ├── shop.rotohaus.com/checkout    Checkout page            │
│   ├── shop.rotohaus.com/account     Customer account (OTP login) │
│   └── shop.rotohaus.com/policies/*  Returns policy, etc.     │
│                                                              │
│  Admin (admin.shopify.com):                                  │
│   ├── Product management (incl. metafields: maker_slug, cultural_origin, etc.) │
│   ├── Orders / inventory / tax / customers                   │
│   └── Analytics                                              │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ Webhook: orders/paid, orders/fulfilled
                       │ HMAC signature verification + idempotency key for dedupe
                       │
┌──────────────────────▼──────────────────────────────────────┐
│  Serverless functions (Phase 2, Vercel/Netlify Functions)    │
│   └── Resend + React Email send branded order/shipping email │
└─────────────────────────────────────────────────────────────┘
```

---

## What We Implement (Code We Write)

### 0. Architectural Prerequisites (Before Touching Shopify)

**This piece is missing from v1 but is mandatory** — otherwise you'll get blocked later:

1. **Upgrade dependencies**
   - Upgrade React / React DOM to `^19.2.3`
   - Remove `git: ^0.1.5` (an unrelated obsolete package)
2. **Create `TopNav.jsx`** (`components/shared/`)
   - Sticky top, translucent background + backdrop-blur
   - Left: Rotohaus logo (clicks back to Home)
   - Middle: main nav links (Residency / Shop / About)
   - Right: LanguageToggle (moved here) + Cart icon (with quantity badge)
   - Shared across ResidencyPage / ResidencyPageEN / ArtistsPage / Shop and all other pages
   - Visually coordinate with the existing `LanguageToggle` (do not end up with two separate button styles)
3. **Create the `useLanguage.js` hook** (`hooks/`, new directory)
   - Encapsulate the current URL → language logic
   - Returns `{ isEnglish, lang: 'EN' | 'ZH_CN', toggleHref(currentPath) }`
   - Replaces LanguageToggle's internal `location.pathname.includes('/en')`
   - All future language consumers (GraphQL query variables, email templates, etc.) should source language from here
4. **Decide SideNavigation behavior on the Shop page**
   - Recommended: **do not show** SideNavigation on the Shop page (it is in-page anchor navigation for residency)
   - The Shop page uses TopNav only

### 1. Product List Page `/shop` (and `/shop/zh`)

- Fetch the Shopify product list (Storefront API GraphQL query); language passed via `$lang` variable
- Grid layout; product cards include: main image, title, price, sold-out status
- Reuse the existing `FadeInSection` for entrance animation
- Loading state: skeleton cards (no "Loading..." text)
- Empty state: friendly copy + a link back

### 2. Product Detail Page `/shop/:handle` (and `/shop/zh/:handle`)

- Multi-image carousel (Hydrogen React's `<Image>` component, with automatic srcset and lazy load)
- Product title, description (rich text), price (Hydrogen's `<Money>`)
- Variant selection (if any)
- Stock state (use the `availableForSale` field; disable the button when sold out)
- "Add to Cart" button, triggers `useCart().linesAdd()`
- After adding, automatically open the CartDrawer
- "View maker's story" link (read from the `custom.maker_slug` metafield, jumps to `/makers/:slug`)
- Storytelling description area, supporting imagery, cultural context (in our own design language)

### 3. Shopping Cart (Drawer)

- Wrap `App.jsx` in `<ShopifyProvider>` + `<CartProvider>`, **placed inside `<BrowserRouter>`**
- `CartDrawer` renders via `createPortal` into `<body>` (avoids z-index / overflow issues)
- Drawer slides in from the right, animated with Framer Motion
- Shows added items, subtotal, shipping note ("calculated at checkout")
- "Go to Checkout" button: `window.location.href = cart.checkoutUrl`
- Auto-opens the drawer after adding to cart
- Empty cart state: illustration + "Go browse products" link

### 4. Maker Profile Page `/makers/:slug`

- Content **is not in Shopify**; it lives as a content page on our site (hardcoded in `data/makers.js` or `.md`)
- Long-form narrative + photography + bilingual
- At the bottom of the page, display all of that maker's products (fetch from Shopify again, filtered by `tag` or `metafield`)
- Migrate to Sanity / Contentful only when makers > 10

### 5. Navigation Integration (see Prerequisite #2)

- Add a Shop link to TopNav
- Add a Cart icon + quantity badge on the right of TopNav
- "My Account" lives as a link in the Footer, pointing to `shop.rotohaus.com/account`

### 6. Phase 2: Branded Emails

- Create a serverless function (Vercel Functions recommended), listening on Shopify webhooks
- Use React Email to write order-confirmation and shipping-confirmation emails
- Send through Resend
- Email HTML **does not use** `FZFengRuSong` or `Huiwen-Fangsong` (email clients cannot load local TTF files)
- Chinese email font stack: `'Songti SC', 'STSong', 'SimSun', serif`
- English email font stack: `Georgia, 'Times New Roman', serif`
- **Must be idempotent**: use the `X-Shopify-Webhook-Id` header as Resend's `idempotencyKey` to prevent duplicate sends (Shopify retries up to 19 times)

---

## What We **Don't** Code — Hosted by Shopify

| Function | Where Shopify handles it |
|----------|--------------------------|
| Adding products, editing copy, uploading images | Admin Products, visual form |
| Bilingual product copy | Translate & Adapt App (free) |
| New order notifications | Shopify mobile app push + email |
| Fulfillment, label printing, tracking numbers | Admin Orders → Fulfill (discounted USPS / UPS / FedEx) |
| Returns, refunds | Admin Orders → Return / Refund |
| Customer accounts, order history | Shopify-hosted `/account` page (OTP email login) |
| Checkout (credit card / Apple Pay / PayPal Wallet) | Shopify-hosted `/checkout` |
| Sales tax calculation | Shopify Tax (free under $100k annual revenue) |
| Inventory tracking, low-stock alerts | Admin Inventory |
| Abandoned cart recovery emails (enable later) | Admin Marketing → Automations |
| Returns policy, privacy policy pages | Admin Settings → Policies, template generator |
| Analytics | Admin Analytics |
| Fraud detection | Built into Shopify (powered by Stripe Radar) |

---

## Tech Stack Details

### Dependencies to Install

```jsonc
{
  "@shopify/hydrogen-react": "^2026.4.0",
  "@shopify/storefront-api-client": "^1.0.10"
}
```

Phase 2 adds:

```jsonc
{
  "resend": "^4.0.0",
  "@react-email/components": "^0.0.x",
  "react-email": "^3.0.0"
}
```

Also:

```bash
npm install react@^19.2.3 react-dom@^19.2.3   # patch version bump
npm uninstall git                              # clean up obsolete package
```

### Environment Variables

```bash
# .env (Vite client-readable, VITE_ prefix)
VITE_SHOPIFY_STORE_DOMAIN=rotohaus.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=xxxxxxxxxxxxxxxxxx  # public token
VITE_SHOPIFY_API_VERSION=2026-04                  # aligned with hydrogen-react version

# Phase 2 (used by serverless functions, not exposed to the client)
RESEND_API_KEY=re_xxxxxxxxxx
SHOPIFY_WEBHOOK_SECRET=xxxxxxxxxx
```

### Storefront API Calling Pattern (Pass Language as a Variable)

```js
// src/lib/shopify.js
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export const shopifyClient = createStorefrontApiClient({
  storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
  apiVersion: import.meta.env.VITE_SHOPIFY_API_VERSION,
  publicAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN,
});
```

```js
// src/lib/shopify-queries.js
export const PRODUCTS_QUERY = `
  query Products($lang: LanguageCode!, $country: CountryCode!)
    @inContext(country: $country, language: $lang) {
    products(first: 20) {
      nodes {
        id
        handle
        title
        description
        priceRange { minVariantPrice { amount currencyCode } }
        featuredImage { url altText width height }
        availableForSale
        # fetch metafield: maker_slug
        metafield(namespace: "custom", key: "maker_slug") { value }
      }
    }
  }
`;
```

```jsx
// in a component
import { useLanguage } from '../hooks/useLanguage';
import { shopifyClient } from '../lib/shopify';
import { PRODUCTS_QUERY } from '../lib/shopify-queries';

const { lang } = useLanguage(); // 'EN' or 'ZH_CN'
const { data } = await shopifyClient.request(PRODUCTS_QUERY, {
  variables: { lang, country: 'US' }
});
```

### Provider Integration (Mind the Nesting Order)

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ShopifyProvider, CartProvider } from '@shopify/hydrogen-react';

function App() {
  return (
    <BrowserRouter>
      {/* ShopifyProvider must be inside BrowserRouter, with CartProvider inside it */}
      <ShopifyProvider
        storeDomain={import.meta.env.VITE_SHOPIFY_STORE_DOMAIN}
        storefrontToken={import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN}
        storefrontApiVersion={import.meta.env.VITE_SHOPIFY_API_VERSION}
        countryIsoCode="US"
        languageIsoCode="EN"  /* Provider default only; actual queries override via variables */
      >
        <CartProvider>
          <Routes>
            {/* Existing routes preserved */}
            <Route path="/residency" element={<ResidencyPage />} />
            <Route path="/residency/en" element={<ResidencyPageEN />} />
            <Route path="/residency/artists" element={<ArtistsPage />} />
            <Route path="/residency/en/artists" element={<ArtistsPageEN />} />

            {/* New Shop routes (English first) */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/zh" element={<Shop />} />
            <Route path="/shop/:handle" element={<ShopProduct />} />
            <Route path="/shop/zh/:handle" element={<ShopProduct />} />
            <Route path="/makers/:slug" element={<Maker />} />

            <Route path="/" element={<Navigate to="/residency" replace />} />
          </Routes>
        </CartProvider>
      </ShopifyProvider>
    </BrowserRouter>
  );
}
```

```jsx
// Using the cart from any component
import { useCart } from '@shopify/hydrogen-react';

const { lines, totalQuantity, cost, checkoutUrl, linesAdd } = useCart();
```

---

## Suggested File Structure

```
rotohaus/
├── src/
│   ├── pages/
│   │   ├── Shop.jsx              # /shop and /shop/zh listing
│   │   ├── ShopProduct.jsx       # /shop/:handle and /shop/zh/:handle detail
│   │   └── Maker.jsx             # /makers/:slug
│   ├── components/
│   │   ├── shop/                 # new
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── CartDrawer.jsx
│   │   │   ├── CartIcon.jsx
│   │   │   ├── AddToCartButton.jsx
│   │   │   ├── PriceDisplay.jsx
│   │   │   └── ProductSkeleton.jsx
│   │   └── shared/               # existing; add TopNav
│   │       ├── TopNav.jsx        # new: cross-page top navigation
│   │       ├── LanguageToggle.jsx  # existing; may be refactored into TopNav
│   │       ├── SideNavigation.jsx  # existing; residency page only
│   │       ├── FadeInSection.jsx   # existing; reuse
│   │       └── Footer.jsx          # existing; may add a "My Account" link
│   ├── hooks/                    # new
│   │   └── useLanguage.js        # wraps URL → language detection
│   ├── lib/
│   │   ├── shopify.js            # Storefront API client instance
│   │   └── shopify-queries.js    # all GraphQL query strings
│   ├── data/
│   │   └── makers.js             # maker content (not in Shopify)
│   └── ...
└── api/                          # Phase 2: serverless functions
    └── webhooks/
        └── orders-paid.js        # triggers Resend email, with idempotency key
```

---

## Implementation Order (Recommended)

### Phase 0: Architecture Prep (no Shopify account needed, 1–2 days)

In this order:

1. **Dependency upgrades and cleanup**
   - `npm install react@^19.2.3 react-dom@^19.2.3`
   - `npm uninstall git`
   - `npm run dev` to confirm existing functionality still works
2. **Create the `useLanguage` hook**, refactor `LanguageToggle` to use it
3. **Create the `TopNav` component**; first wire it into all existing pages (Residency / ResidencyEN / Artists / ArtistsEN), with Logo + Residency link + LanguageToggle (no Shop / Cart yet)
4. **Regression testing**: visuals, interactions, and animations on all existing pages remain consistent

### Phase 1: Shopify Ops Prep (Justin does this; no code, 1 day)

1. Open a Shopify Basic account
2. Apply for Shopify Payments (PayPal Wallet auto-enables)
3. **Configure the checkout subdomain**: Settings → Domains, add `shop.rotohaus.com`; add a DNS CNAME → `shops.myshopify.com`; wait for SSL issuance (up to 48h — **do this early**)
4. **Configure Tax**: Settings → Taxes and duties; enable Shopify Tax; register the states where you have nexus
5. **Generate Policies**: Settings → Policies; use templates to generate returns / privacy / terms-of-service pages
6. **Define Metafields**: Settings → Custom data → Products; create `custom.maker_slug` (single line text); as needed add `custom.cultural_origin`, `custom.craft_type`, etc.
7. **Install the Headless Channel App**: Apps → search "Headless"; install the official app (made by Shopify)
8. **Generate a Storefront API token**: in the Headless app, create a Storefront and copy the public access token
9. **Upload 5–10 test products** (using Bogus Gateway or test mode)

### Phase 2: MVP Integration (5–7 days)

10. Write env vars to `.env`
11. `npm install @shopify/hydrogen-react@^2026.4.0 @shopify/storefront-api-client@^1.0.10`
12. Create `lib/shopify.js` and `lib/shopify-queries.js`
13. Add `<ShopifyProvider>` + `<CartProvider>` to `App.jsx`; ensure placement is inside `<BrowserRouter>`
14. Implement the **product list page** (`/shop`; English first; simple grid first; skip animation for now)
15. Implement the **product detail page** (`/shop/:handle`, with add-to-cart)
16. Implement **CartDrawer** (via Portal; triggers redirect to `cart.checkoutUrl`)
17. Add the Shop link + Cart icon to TopNav
18. **Design polish**: FadeInSection, fonts, color consistency
19. **Add Chinese version**: `/shop/zh`, `/shop/zh/:handle`; queries use `$lang: ZH_CN`
20. Implement the **Maker page**

### Phase 3: Testing + Launch (2–3 days)

21. Use Shopify Bogus Gateway to test payments; confirm orders flow through
22. Live-device Apple Pay testing
23. Test the refund flow
24. Invite 2–3 friends to place real orders end to end

### Phase 4: Branded Emails (optional, 3–5 days)

25. Choose Vercel Functions as the serverless platform
26. **Domain email config**: add SPF + DKIM + **DMARC** in DNS (the Resend console guides you)
27. Write React Email templates (order confirmation + shipping confirmation)
28. Deploy the webhook function; **implement idempotent dedupe**
29. Wire it up in the Shopify admin: Notifications → Webhooks

### Phase 5: Extend as Needed

Only build these when data shows you need them:

- Abandoned cart recovery (use Shopify-native Marketing Automations)
- Product reviews (Judge.me or Shopify Reviews)
- "Only X left" stock indicator
- Product analytics (Plausible / Fathom)
- Customer Account API integration (if you want an in-domain "My Orders" page)

---

## Design System Integration Checklist

When building storefront components, make sure:

- [ ] Product titles in Chinese: `font-family: 'FZFengRuSong', serif`
- [ ] Product titles in English: `font-family: 'Instrument Serif', serif`
- [ ] Body text in Chinese: `font-family: 'Huiwen-Fangsong', serif`
- [ ] Body text in English: `font-family: 'Helvetica Neue', sans-serif`
- [ ] Primary color `#476724`, accent `#E2D19E`, body text `#392C20`
- [ ] Reuse `FadeInSection` (opacity + y + blur, easing `[0.16, 1, 0.3, 1]`)
- [ ] Fluid typography via `clamp()`
- [ ] Price displayed with Hydrogen's `<Money>` component, with an outer styling wrapper
- [ ] Images use Hydrogen's `<Image>` component (built-in responsive srcset); wrap in FadeInSection
- [ ] Reuse existing classes such as `.paper-texture`, `.ink-blur` (e.g., on product story sections)
- [ ] CartDrawer is rendered via `createPortal` into `<body>` (avoids overflow clipping)

### Advanced Motion (Leave Hooks for the Future)

Later, in suitable locations (Hero, empty cart, add-to-cart success feedback, maker story imagery), we can consider introducing:

- **LottieFiles** (lightweight JSON animations via `lottie-react`): good for icon-level and decorative animations — small files, fast to load
- **Rive** (interactive vector animations via `@rive-app/react-canvas`): good for state-driven, interactive motion (e.g., hover, add-to-cart celebration)

Not in the MVP scope; specific placements and assets are determined in the design phase.

---

## Common Pitfalls (Reminders for Claude Code)

1. **Do not install `shopify-buy`** (Buy SDK, deprecated). Install `@shopify/hydrogen-react`.
2. **Do not use the Hydrogen framework** (`@shopify/hydrogen` + Remix/RR7 template) to replace the existing Vite app. We only use the `@shopify/hydrogen-react` component library.
3. **Do not write code for a login system.** Customer accounts are handled by the Shopify-hosted page `shop.rotohaus.com/account`. We only put an external link in the Footer.
4. **Do not write code for checkout.** Checkout is hosted by Shopify. We just `window.location.href = cart.checkoutUrl`.
5. **Do not process payments on the frontend.** Stripe / Apple Pay / PayPal are all handled by the Shopify checkout page.
6. **Do not call customer-related Storefront mutations** (`customerCreate`, etc., are deprecated). If we ever build account features, we must use the Customer Account API (not the Storefront API).
7. **Do not hardcode `languageIsoCode` on ShopifyProvider** expecting it to react to URL changes — the Provider does not auto re-render. Use `$lang` variables in each query instead.
8. **Do not place `<ShopifyProvider>` outside `<BrowserRouter>`** — downstream hooks won't get router context.
9. **Do not add a Shop item to `SideNavigation`** — it's an in-page scroll anchor for residency; cross-page navigation goes through TopNav.
10. **Do not upgrade Vite to 8** — Hydrogen-react is currently incompatible (issue #3577). Pin Vite to `^7.0.0`.
11. **Do not pin React at `^19.2.0`** — hydrogen-react peer dep requires `^19.2.3+`.
12. **Do not install `git: ^0.1.5`** — it's a mistakenly-installed obsolete package in package.json; remove it.
13. **The API version updates quarterly.** Current is `2026-04`. Each version is supported for 12 months. Bump hydrogen-react's version in lockstep on every upgrade.
14. **The Storefront API token is public** (safe under a `VITE_*` prefix). But **do not confuse it** with the Admin API token (Admin tokens must never be exposed; we don't use one in this project).
15. **Maker content does not go into Shopify.** Manage it as static data on the React side; Shopify products use a metafield storing the maker slug as the link.
16. **Webhooks must be idempotent.** Shopify retries up to 19 times (48h window); use `X-Shopify-Webhook-Id` as the dedupe key.
17. **Email HTML must not reference local fonts.** System font stack only (Chinese: `Songti SC` / English: `Georgia`).
18. **Use `ZH_CN` for Chinese**, not `ZH` (both are legal, but simplified translations only match `ZH_CN`).

---

## Test / Verification Checklist (At End of Phase 2)

- [ ] `/shop` shows the product list with live data from Shopify (English by default)
- [ ] Switching to `/shop/zh` shows Chinese translations for product titles and descriptions
- [ ] Product detail page correctly shows variants and stock status
- [ ] Sold-out products' button is greyed out
- [ ] After adding to cart, CartDrawer slides in and the quantity badge updates
- [ ] Cart persists after a page refresh (Hydrogen CartProvider uses localStorage by default)
- [ ] Clicking "Go to Checkout" redirects to `shop.rotohaus.com/checkout` (custom subdomain, not `myshopify.com`)
- [ ] On the checkout page, three options are visible: Shopify Payments, Apple Pay, PayPal Wallet
- [ ] A test order placed (Bogus Gateway or test mode)
- [ ] An order appears in Shopify admin → Orders
- [ ] Mobile app receives a push notification
- [ ] The customer's inbox receives Shopify's default order confirmation email
- [ ] TopNav displays and navigates correctly on every page (Residency / Shop / Maker)
- [ ] LanguageToggle on the Shop page can switch EN ↔ ZH while preserving the current path
- [ ] SideNavigation appears only on the Residency page (not on Shop)
- [ ] Mobile: CartDrawer goes full-screen / TopNav collapse menu works correctly

## Test / Verification Checklist (At End of Phase 4 Email Work)

- [ ] DNS has SPF + DKIM + DMARC; Resend console shows "verified"
- [ ] Webhook for the same order retries 5 times; the customer still receives only 1 email
- [ ] Email font fallback is correct across Gmail Web, Apple Mail, and Outlook Web
- [ ] Email HTML does not reference `FZFengRuSong` or `Huiwen-Fangsong` at all

---

## SEO & Limitations Statement

Vite is a CSR (client-side rendered) app, so **Shop product pages are not friendly to Google and other search engines**. With the current choice:

- **MVP does not do SSR**: traffic primarily comes from Instagram, email, and word of mouth; we don't depend on organic search
- **Lightweight improvement**: add `react-helmet-async` to at least make `<title>` and `<meta description>` dynamic on the client
- **Future SEO needs**: either migrate to Next.js / Remix, or move to the Hydrogen framework (a major change, out of scope for this project)

---

## References

- Shopify Hydrogen React: <https://shopify.dev/docs/api/hydrogen-react>
- Storefront API 2026-04: <https://shopify.dev/docs/api/storefront/2026-04>
- Storefront API LanguageCode enum: <https://shopify.dev/docs/api/storefront/latest/enums/languagecode>
- Customer Account API (headless accounts): <https://www.shopify.com/partners/blog/introducing-customer-account-api-for-headless-stores>
- PayPal Wallet for US merchants: <https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/united-states/paypal-wallet>
- React Email: <https://react.email>
- Resend: <https://resend.com/docs>
- npm `@shopify/hydrogen-react`: <https://www.npmjs.com/package/@shopify/hydrogen-react>
