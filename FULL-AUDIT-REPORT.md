# SEO Full Audit Report — UN Beauty Supply
**Audit date:** 2026-04-25  
**Audited:** Local source code (pre-launch Next.js 15 App Router site)  
**Industry:** Local Retail / Beauty Supply (3 Metro Detroit locations)  
**Auditor:** Claude Code SEO Skill

---

## Executive Summary

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 32 | 8.0 |
| Content Quality | 20% | 62 | 12.4 |
| On-Page SEO | 15% | 58 | 8.7 |
| Schema / Structured Data | 15% | 0 | 0 |
| Performance (CWV) | 10% | 52 | 5.2 |
| Image Optimization | 10% | 8 | 0.8 |
| AI Search Readiness (GEO) | 5% | 18 | 0.9 |
| **Overall** | **100%** | — | **36 / 100** |

**Rating: Poor** — Pre-launch site has a strong content foundation but is blocked by a critical architectural flaw (full client-side rendering) and is missing every off-page technical signal (schema, sitemap, OG tags, robots.txt). All critical items can be fixed before the first deploy.

---

## Findings

### Technical SEO
**Score: 32 / 100**

| Element | Value | Severity |
|---|---|---|
| Server-side rendering | ❌ Entire `app/page.js` is `'use client'` | 🔴 Critical |
| `robots.txt` | ❌ Not present | 🔴 Critical |
| `sitemap.xml` | ❌ Not present | 🔴 Critical |
| Canonical URL | ❌ Not set | ⚠️ Warning |
| `lang` attribute | ✅ `lang="en"` on `<html>` | ✅ Pass |
| `rel="noopener noreferrer"` | ✅ All external links | ✅ Pass |
| Mobile-first | ✅ Responsive layout | ✅ Pass |
| Favicon | ❌ Only default Next.js SVG assets; no `favicon.ico` or `<link rel="icon">` | ⚠️ Warning |
| Google Maps embed | ❌ Placeholder div, not a real `<iframe>` | ⚠️ Warning |

---

#### 🔴 Critical — Full Page is a Client Component

**Finding:** `app/page.js` starts with `'use client'`, making the entire page tree a client component. Next.js App Router renders server components by default; opting the root page into client-only mode means Google receives a nearly empty HTML shell on first fetch and must execute JavaScript to see any content.

**Evidence:** `app/page.js:1` — `'use client'`

**Impact:** Googlebot can render JS, but client-only rendering delays indexing by days to weeks, reduces crawl budget efficiency, and risks content being missed entirely if rendering times out. This affects every keyword the site could rank for.

**Fix:** Extract only the interactive state (localStorage, tweak panel) to a small `ClientShell` client component. Keep `app/page.js` as a Server Component that imports `<ClientShell>` and passes static data as props. The hero, locations list, trust section, footer — all of this should render on the server.

```jsx
// app/page.js  ← Server Component (no 'use client')
import { LOCATIONS, TWEAK_DEFAULTS } from '@/lib/data'
import ClientShell from './ClientShell'

export default function HomePage() {
  return <ClientShell locations={LOCATIONS} tweakDefaults={TWEAK_DEFAULTS} />
}
```

---

#### 🔴 Critical — No `robots.txt`

**Finding:** No `public/robots.txt` exists.

**Impact:** Without explicit rules, crawlers use permissive defaults — but the absence signals an unconfigured site. AI crawlers (GPTBot, ClaudeBot, etc.) will freely scrape content.

**Fix:** Create `public/robots.txt`:

```
User-agent: *
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

Sitemap: https://unbeautysupply.com/sitemap.xml
```

Adjust AI-crawler rules based on your preference for AI-generated summaries.

---

#### 🔴 Critical — No `sitemap.xml`

**Finding:** No sitemap in `public/` and no `app/sitemap.js` generator.

**Impact:** Google relies on sitemaps for discovery and recrawl scheduling. Without one, pages may not be indexed promptly after launch.

**Fix:** Add `app/sitemap.js`:

```js
export default function sitemap() {
  return [
    { url: 'https://unbeautysupply.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ]
}
```

---

### On-Page SEO
**Score: 58 / 100**

| Element | Value | Severity |
|---|---|---|
| `<title>` | "UN Beauty Supply — Detroit's Go-To Beauty Supply for 20+ Years" (66 chars) | ✅ Pass |
| Meta description | "Hair, wigs, braiding hair, styling tools & more. 3 stores across Metro Detroit…" (139 chars) | ✅ Pass |
| `<h1>` | "Everything you need for your hair, all under one roof." | ✅ Pass |
| `<h2>` | "3 stores. Always close by." | ✅ Pass |
| Open Graph tags | ❌ None | 🔴 Critical |
| Twitter Card tags | ❌ None | ⚠️ Warning |
| Rating inconsistency | Hero: "4.4 · 500+ reviews" vs Trust section: "4.8 / 5 · 1,200+ reviews" | ⚠️ Warning |
| Broken social hrefs | `href="#"` on Instagram, Facebook, TikTok | ⚠️ Warning |
| Phone href bug (Detroit) | `"+31392289995"` should be `"+13139228995"` | ⚠️ Warning |

---

#### 🔴 Critical — No Open Graph or Twitter Card Metadata

**Finding:** `app/layout.js` only exports `title` and `description`. No social metadata.

**Impact:** Every shared link (Google Business posts, social media, messaging apps) shows as a plain-text URL with no image or description. Kills click-through on referral traffic.

**Fix:** Expand `layout.js` `metadata` export:

```js
export const metadata = {
  title: "UN Beauty Supply — Detroit's Go-To Beauty Supply for 20+ Years",
  description: 'Hair, wigs, braiding hair, styling tools & more. 3 stores across Metro Detroit. Real expert help in-store. Call or stop in today.',
  metadataBase: new URL('https://unbeautysupply.com'),
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  openGraph: {
    title: "UN Beauty Supply — Detroit's Beauty Supply Since 2004",
    description: 'Wigs, bundles, braiding hair & more. 3 Metro Detroit locations. Family-owned since 2004.',
    url: 'https://unbeautysupply.com',
    siteName: 'UN Beauty Supply',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'UN Beauty Supply — Detroit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "UN Beauty Supply — Detroit's Beauty Supply Since 2004",
    description: 'Wigs, bundles, braiding hair & more. 3 Metro Detroit locations.',
    images: ['/og-image.jpg'],
  },
}
```

---

#### ⚠️ Warning — Rating Inconsistency

**Finding:** `Hero.jsx:84` shows "4.4 · 500+ Google reviews"; `Trust.jsx:18` shows "4.8 / 5 across 1,200+ reviews."

**Impact:** Contradictory numbers erode trust at a glance. Google's quality raters and users both notice. Whichever figure is correct, the other must be removed.

**Fix:** Centralize both values in `lib/data.js` as constants (`RATING`, `REVIEW_COUNT`) and reference them from both components.

---

#### ⚠️ Warning — Detroit Phone `href` Bug

**Finding:** `lib/data.js:11` — `phoneHref: "+31392289995"` (Netherlands country code +31, missing US +1).

**Impact:** Tapping "Call" on mobile will dial a wrong international number, destroying the call-to-action.

**Fix:** `"+13139228995"` (US country code 1, area code 313).

---

### Schema / Structured Data
**Score: 0 / 100**

| Element | Value | Severity |
|---|---|---|
| LocalBusiness schema | ❌ None | 🔴 Critical |
| Organization schema | ❌ None | ⚠️ Warning |
| WebSite + SearchAction | ❌ None | ⚠️ Warning |
| Review/AggregateRating | ❌ None | ⚠️ Warning |

---

#### 🔴 Critical — No LocalBusiness Schema

**Finding:** No JSON-LD structured data of any kind is present.

**Impact:** Google uses LocalBusiness schema to power Knowledge Panels, map pack results, and rich results. For a 3-location local business, this is the highest-leverage structured data. Without it, the site relies entirely on Google's unassisted parsing.

**Fix:** Add one `LocalBusiness` block per location in `app/layout.js` or in a server component that renders in the `<head>`. Example for the Detroit location:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BeautyShop",
  "@id": "https://unbeautysupply.com/#detroit",
  "name": "UN Beauty Supply — Grand River",
  "url": "https://unbeautysupply.com",
  "telephone": "+13139228995",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7651 Gratiot Ave",
    "addressLocality": "Detroit",
    "addressRegion": "MI",
    "postalCode": "48213",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:30", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "10:30", "closes": "18:00" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1200"
  },
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, EBT",
  "image": "https://unbeautysupply.com/og-image.jpg"
}
</script>
```

Use `BeautyShop` (a subtype of `LocalBusiness`) for all three locations.

---

### Content Quality
**Score: 62 / 100**

| Element | Value | Severity |
|---|---|---|
| H1 copy | Strong, keyword-rich | ✅ Pass |
| Product categories listed | Wigs, bundles, braiding hair, styling tools, edge control, lace fronts, skincare | ✅ Pass |
| Brand names mentioned | Outre, Sensationnel, Mielle, Cantu, Mane Choice, BaByliss, Andis | ✅ Pass |
| Trust signals | Family-owned, 20+ years, Detroit Black Chamber, EBT accepted, Licensed & insured | ✅ Pass |
| Real customer reviews | 3 reviews with text | ✅ Pass |
| Location-specific pages | ❌ Single page only; no `/detroit`, `/madison-heights`, `/clinton-township` pages | ⚠️ Warning |
| Blog / content hub | ❌ None | ℹ️ Info |
| Word count (estimated) | ~600–700 words visible — below 800-word minimum for competitive local pages | ⚠️ Warning |

---

#### ⚠️ Warning — No Location-Specific Pages

**Finding:** All three locations exist as interactive state within a single page. There are no URLs like `/locations/detroit`.

**Impact:** "Beauty supply Detroit", "beauty supply Madison Heights", and "beauty supply Clinton Township" are three distinct search queries. A single page can only canonically target one geo. Google maps searches, zero-click local results, and Google Business Profile integration all benefit from dedicated URL per location.

**Fix:** Create `app/locations/[id]/page.js` server-rendered pages for each location, with unique `<title>`, `<h1>`, and `LocalBusiness` schema targeting that specific city.

---

### Performance (CWV)
**Score: 52 / 100 (estimated — no live URL to measure)**

| Element | Assessment | Severity |
|---|---|---|
| Google Fonts with `display: swap` | ✅ All 4 fonts use swap | ✅ Pass |
| Client-side hydration overhead | High — full page is a client component, all state initializes on mount | ⚠️ Warning |
| Hero images | Placeholder divs — no actual images to optimize yet | ℹ️ Info |
| Google Maps iframe | Placeholder — a real iframe will add significant load weight | ⚠️ Warning |
| `next.config.mjs` | Empty — no image optimization or caching headers configured | ⚠️ Warning |

**Confidence:** Hypothesis (no live URL; score estimated from code review)

---

### Image Optimization
**Score: 8 / 100**

| Element | Value | Severity |
|---|---|---|
| Hero images | ❌ All placeholder `<div>` elements | 🔴 Critical |
| `next/image` usage | ❌ Not used anywhere | ⚠️ Warning |
| Alt text | ❌ No `<img>` tags exist yet to evaluate | ℹ️ Info |
| OG image | ❌ No `/og-image.jpg` in public/ | ⚠️ Warning |

When images are added, every `<img>` must:
- Use `<Image>` from `next/image` (auto WebP, lazy loading, size hints)
- Include descriptive `alt` text (e.g., `alt="Outre HD lace front wig display at UN Beauty Supply Detroit"`)
- Never use generic alt text like `alt="image"` or empty `alt=""`

---

### AI Search Readiness (GEO)
**Score: 18 / 100**

| Element | Value | Severity |
|---|---|---|
| `llms.txt` | ❌ Not present | ⚠️ Warning |
| AI crawler rules in robots.txt | ❌ No robots.txt | 🔴 Critical |
| Entity disambiguation | Partial — "UN Beauty Supply" is distinctive but no schema `@id` | ⚠️ Warning |
| Factual, citable content | ✅ Addresses, phones, hours present | ✅ Pass |
| Structured Q&A content | ❌ None — no FAQ, no "what we carry" page | ⚠️ Warning |

**Fix:** Add `public/llms.txt` with a concise business description, locations, hours, and product categories in plain prose. This is read by AI search engines (Perplexity, ChatGPT Search, etc.) to produce accurate citations.

---

## Data Quality Issues

| Issue | File | Severity |
|---|---|---|
| Detroit phoneHref wrong country code | `lib/data.js:11` | 🔴 Bug |
| Review rating inconsistency (4.4 vs 4.8) | `Hero.jsx:84`, `Trust.jsx:18` | ⚠️ Warning |
| Social links are `href="#"` | `Footer.jsx:47-49` | ⚠️ Warning |
| Review dates are relative strings ("7 month ago") | `lib/data.js:130` | ℹ️ Info |
| Google Maps is a placeholder div | `Locations.jsx:81` | ⚠️ Warning |
