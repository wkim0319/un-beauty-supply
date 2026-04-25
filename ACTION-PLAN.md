# SEO Action Plan — UN Beauty Supply
**Generated:** 2026-04-25 | **Overall score:** 36 / 100 (Poor → target: 75+)

Items ordered by impact. Fix all Critical items before launch.

---

## Phase 1 — Fix Before Launch (Critical)

### 1. Fix the Detroit phone href bug
**File:** `lib/data.js:11`  
**Effort:** 1 min  
Change `"+31392289995"` → `"+13139228995"`

---

### 2. Convert page.js to a Server Component
**File:** `app/page.js`  
**Effort:** 1–2 hours  
Remove `'use client'` from `app/page.js`. Extract localStorage + tweaks state into a `ClientShell.jsx` client component. Pass all static data as props from the server page. This enables proper SSR for all content that matters to Google.

**Pattern:**
```
app/page.js            ← Server Component, no 'use client'
app/ClientShell.jsx    ← 'use client', holds useState/useEffect/localStorage
```

---

### 3. Add Open Graph + Twitter Card metadata
**File:** `app/layout.js`  
**Effort:** 30 min  
Expand the `metadata` export to include `metadataBase`, `alternates.canonical`, `openGraph`, `twitter`, and `icons`. Requires creating a 1200×630 OG image at `public/og-image.jpg`.

---

### 4. Add JSON-LD LocalBusiness schema for all 3 locations
**File:** New server component, rendered in `app/layout.js` or `app/page.js`  
**Effort:** 1 hour  
One `BeautyShop` block per location. Include: `name`, `telephone`, `address`, `openingHoursSpecification`, `aggregateRating`, `priceRange`, `paymentAccepted`, `url`, `image`.

Also add a top-level `Organization` block and a `WebSite` + `SearchAction` block.

---

### 5. Create `public/robots.txt`
**Effort:** 5 min  
Allow all by default. Deny AI scrapers per your preference. Include `Sitemap:` directive pointing to your production URL.

---

### 6. Create `app/sitemap.js`
**Effort:** 10 min  
Return at minimum the homepage URL. Add location page URLs once Phase 2 is complete.

---

### 7. Fix rating inconsistency
**Files:** `Hero.jsx`, `Trust.jsx`, `lib/data.js`  
**Effort:** 15 min  
Decide on one canonical rating (the 4.8 / 1,200+ appears more recent). Add `RATING` and `REVIEW_COUNT` constants to `lib/data.js` and reference them from both components.

---

### 8. Fix broken social links in footer
**File:** `components/Footer.jsx:47-49`  
**Effort:** 10 min  
Replace `href="#"` with real URLs for Instagram, Facebook, and TikTok. If profiles don't exist yet, remove the links entirely rather than leave them broken.

---

## Phase 2 — Within 2 Weeks of Launch (High Impact)

### 9. Create location-specific pages
**Path:** `app/locations/[id]/page.js`  
**Effort:** 3–4 hours  
Build individual pages for Detroit, Madison Heights, and Clinton Township. Each needs:
- Unique `<title>` and `<h1>` targeting the city name
- Full address, phone, hours
- Embedded Google Maps `<iframe>` (not a placeholder)
- `LocalBusiness` schema for that specific location
- A link from the homepage nav and footer

This is the single highest-leverage SEO change for local rankings.

---

### 10. Add a favicon
**File:** `app/layout.js` metadata  
**Effort:** 20 min  
Create `public/favicon.ico` and `public/apple-touch-icon.png`. Reference them via `metadata.icons`.

---

### 11. Embed real Google Maps iframes
**File:** `components/Locations.jsx`  
**Effort:** 1 hour  
Replace the placeholder map div with an actual `<iframe src="https://maps.google.com/maps?q=...&output=embed">`. This improves local trust signals and UX.

---

### 12. Add hero images using `next/image`
**File:** `components/Hero.jsx`  
**Effort:** 2–3 hours (asset creation + code)  
Replace all placeholder `<div className="ph">` tiles with `<Image>` from `next/image`. Use descriptive alt text per image: e.g., `alt="Lace front wigs displayed at UN Beauty Supply Detroit"`.

---

### 13. Add OG image
**Path:** `public/og-image.jpg`  
**Effort:** 30 min  
Create a 1200×630 branded image (store exterior or product shot + UN Beauty Supply logo + "Detroit's Beauty Supply Since 2004"). Referenced by OG metadata added in Step 3.

---

## Phase 3 — 30–60 Days Post Launch

### 14. Add `public/llms.txt`
Plain-prose file describing the business for AI search engines:
```
# UN Beauty Supply

UN Beauty Supply is a family-owned beauty supply chain founded in Detroit, MI in 2004.
We operate three stores across Metro Detroit: Detroit (7651 Gratiot Ave), 
Madison Heights (31075 John R Rd), and Clinton Township (33870 Southbound Gratiot Ave).

We carry: wigs, lace fronts, braiding hair, bundles, extensions, shampoo and conditioner
for textured hair, edge control, hot tools, skincare, and nail accessories.

Brands carried: Outre, Sensationnel, Mielle, Cantu, The Mane Choice, Design Essentials,
BaByliss, Andis, Ampro, Eco Styler, Got2B.

All stores open 7 days. EBT accepted. Staff trained in textured and natural hair care.
Rating: 4.8/5 across 1,200+ Google reviews.
```

---

### 15. Add a product categories page or section
**Effort:** 2–3 hours  
The `Categories` component exists but is commented out ("Todo: Add back in when we have imagery"). Once images are available, enable it. This adds crawlable, keyword-rich content about product lines.

---

### 16. Connect Google Search Console + Google Business Profile
- Submit sitemap in Search Console
- Ensure all 3 GBP listings link to the site (and eventually to individual location pages)
- Request review from customers with a direct GBP link

---

## Priority Summary

| # | Task | Impact | Effort | Phase |
|---|---|---|---|---|
| 1 | Fix Detroit phone href | Bug fix | 1 min | 1 |
| 2 | Server-render app/page.js | Very High | 2 hrs | 1 |
| 3 | Open Graph + Twitter meta | High | 30 min | 1 |
| 4 | LocalBusiness JSON-LD schema | Very High | 1 hr | 1 |
| 5 | robots.txt | High | 5 min | 1 |
| 6 | sitemap.js | High | 10 min | 1 |
| 7 | Fix rating inconsistency | Medium | 15 min | 1 |
| 8 | Fix social links | Medium | 10 min | 1 |
| 9 | Location-specific pages | Very High | 4 hrs | 2 |
| 10 | Favicon | Low | 20 min | 2 |
| 11 | Real Google Maps iframes | Medium | 1 hr | 2 |
| 12 | Hero images with next/image | High | 3 hrs | 2 |
| 13 | OG image asset | High | 30 min | 2 |
| 14 | llms.txt | Low | 20 min | 3 |
| 15 | Enable Categories section | Medium | 3 hrs | 3 |
| 16 | GSC + GBP integration | High | 30 min | 3 |
