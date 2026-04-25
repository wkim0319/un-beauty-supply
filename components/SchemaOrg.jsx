// Server Component — no 'use client'. Renders JSON-LD in the initial HTML for Google.

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    // ── Organization (parent brand) ───────────────────────────────────────────
    {
      "@type": "Organization",
      "@id": "https://unbeauty.supply/#organization",
      "name": "UN Beauty Supply",
      "url": "https://unbeauty.supply",
      "logo": {
        "@type": "ImageObject",
        "url": "https://unbeauty.supply/og-image.jpg"
      },
      "sameAs": [
        "https://www.instagram.com/unbeautysupply",
        "https://www.facebook.com/unbeautysupply",
        "https://www.tiktok.com/@unbeautysupply"
      ]
    },

    // ── WebSite ───────────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": "https://unbeauty.supply/#website",
      "url": "https://unbeauty.supply",
      "name": "UN Beauty Supply",
      "publisher": { "@id": "https://unbeauty.supply/#organization" }
    },

    // ── Detroit (Flagship) ────────────────────────────────────────────────────
    {
      "@type": "BeautyShop",
      "@id": "https://unbeauty.supply/#location-detroit",
      "name": "UN Beauty Supply — Grand River",
      "url": "https://unbeauty.supply",
      "parentOrganization": { "@id": "https://unbeauty.supply/#organization" },
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
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "09:30",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "10:30",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "211"
      },
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, EBT",
      "currenciesAccepted": "USD",
      "image": "https://unbeauty.supply/og-image.jpg",
      "hasMap": "https://maps.google.com/?q=UN+Beauty+Supply+Grand+River+Detroit+MI"
    },

    // ── Madison Heights ───────────────────────────────────────────────────────
    {
      "@type": "BeautyShop",
      "@id": "https://unbeauty.supply/#location-madison-heights",
      "name": "UN Beauty Supply — Madison Heights",
      "url": "https://unbeauty.supply",
      "parentOrganization": { "@id": "https://unbeauty.supply/#organization" },
      "telephone": "+12482915022",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "31075 John R Rd",
        "addressLocality": "Madison Heights",
        "addressRegion": "MI",
        "postalCode": "48071",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "09:30",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "10:30",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.0",
        "reviewCount": "122"
      },
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, EBT",
      "currenciesAccepted": "USD",
      "image": "https://unbeauty.supply/og-image.jpg",
      "hasMap": "https://maps.google.com/?q=UN+Beauty+Supply+John+R+Madison+Heights+MI"
    },

    // ── Clinton Township ──────────────────────────────────────────────────────
    {
      "@type": "BeautyShop",
      "@id": "https://unbeauty.supply/#location-clinton-township",
      "name": "UN Beauty Supply — Clinton Township",
      "url": "https://unbeauty.supply",
      "parentOrganization": { "@id": "https://unbeauty.supply/#organization" },
      "telephone": "+15867924432",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "33870 Southbound Gratiot Ave",
        "addressLocality": "Clinton Township",
        "addressRegion": "MI",
        "postalCode": "48035",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "10:00",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "243"
      },
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, EBT",
      "currenciesAccepted": "USD",
      "image": "https://unbeauty.supply/og-image.jpg",
      "hasMap": "https://maps.google.com/?q=UN+Beauty+Supply+Gratiot+Clinton+Township+MI"
    }
  ]
}

export default function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
