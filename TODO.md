# UN Beauty Supply — Outstanding TODOs

Last updated: 2026-04-25

---

## Blocked on Design / Assets

- [ ] **Create og-image.jpg** — 1200×630px branded image, place at `/public/og-image.jpg`
  - Then add `images` field to `openGraph` and `twitter` in `app/layout.js`
  - Also update `SchemaOrg.jsx` logo/image fields once hosted

- [ ] **Replace placeholder collage tiles with real photos** — hero tiles in `components/Hero.jsx` (`HeroCollage`, `HeroPoster`) are currently CSS placeholders
  - Convert to Next.js `<Image>` components with descriptive `alt` text
  - Use WebP (Next.js Image handles this automatically)
  - Uncomment `<Categories />` in `app/page.js` once imagery is ready

---

## Blocked on DNS / Hosting

- [ ] **Set up 301 redirect** `www.unbeauty.supply` → `https://unbeauty.supply`
  - Done at the DNS/hosting provider level, not in code

---

## Copywriting

- [ ] **Expand homepage copy to 800–1,200 words** (currently ~530)
  - Add 50–75 word intro per product category (wigs, braiding, tools, skincare)
  - Add staff/expertise section
  - Add community/Detroit history section
  - Add brand logos section with `alt` text naming each brand

- [ ] **Lower readability to grade 6–8** (currently grade 10.1)
  - Shorten sentences to 12–15 words average
  - Replace complex phrases: "professionally trained" → "trained", "comprehensive inventory" → "huge selection"
  - Use bullet lists instead of paragraphs where possible

---

## Development (Next 30 Days)

- [ ] **Create dedicated location pages**
  - `/locations/detroit`
  - `/locations/madison-heights`
  - `/locations/clinton-township`
  - Each needs: location H1, address/phone/hours, embedded Google Map, local BeautyShop schema, internal links

- [ ] **Create product category pages**
  - `/wigs` — "Wigs & Hair Extensions in Metro Detroit"
  - `/braiding-hair` — "Braiding Hair — All Types in Stock"
  - `/styling-tools` — "Hair Styling Tools & Appliances"
  - `/skincare` — "Skincare & Beauty Products"
  - `/hair-care` — "Natural & Textured Hair Care Products"
  - Each needs: 400+ words, brand callouts, internal links, added to sitemap

- [ ] **Add ItemList schema** for each category page (do after category pages are built)

- [ ] **Add CSP-Report-Only header** in `next.config.mjs` — audit Google Maps iframe dependencies first to avoid breaking the map embeds

---

## Ongoing Maintenance

- [ ] **Re-verify review counts from Google Business Profile** each quarter and update `components/SchemaOrg.jsx`
  - Detroit: 211 / 4.5 ★ (last checked 2026-04-25)
  - Madison Heights: 122 / 4.0 ★ (last checked 2026-04-25)
  - Clinton Township: 243 / 4.2 ★ (last checked 2026-04-25)
