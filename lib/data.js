export const LOCATIONS = [
  {
    id: 'detroit',
    tag: 'Flagship — Detroit',
    city: 'Detroit',
    name: 'UN Beauty Supply — Grand River',
    addr1: '14820 Grand River Ave',
    addr2: 'Detroit, MI 48227',
    phone: '(313) 555-0104',
    phoneHref: '+13135550104',
    mapsQuery: 'UN+Beauty+Supply+Grand+River+Detroit+MI',
    hours: {
      Mon: '9:00 AM – 9:00 PM',
      Tue: '9:00 AM – 9:00 PM',
      Wed: '9:00 AM – 9:00 PM',
      Thu: '9:00 AM – 9:00 PM',
      Fri: '9:00 AM – 10:00 PM',
      Sat: '9:00 AM – 10:00 PM',
      Sun: '10:00 AM – 7:00 PM',
    },
  },
  {
    id: 'southfield',
    tag: 'Metro Detroit',
    city: 'Southfield',
    name: 'UN Beauty Supply — Southfield',
    addr1: '22411 Telegraph Rd',
    addr2: 'Southfield, MI 48034',
    phone: '(248) 555-0172',
    phoneHref: '+12485550172',
    mapsQuery: 'UN+Beauty+Supply+Telegraph+Southfield+MI',
    hours: {
      Mon: '9:00 AM – 9:00 PM',
      Tue: '9:00 AM – 9:00 PM',
      Wed: '9:00 AM – 9:00 PM',
      Thu: '9:00 AM – 9:00 PM',
      Fri: '9:00 AM – 9:30 PM',
      Sat: '9:00 AM – 9:30 PM',
      Sun: '10:00 AM – 7:00 PM',
    },
  },
  {
    id: 'eastpointe',
    tag: 'Metro Detroit',
    city: 'Eastpointe',
    name: 'UN Beauty Supply — Eastpointe',
    addr1: '18340 E 8 Mile Rd',
    addr2: 'Eastpointe, MI 48021',
    phone: '(586) 555-0137',
    phoneHref: '+15865550137',
    mapsQuery: 'UN+Beauty+Supply+8+Mile+Eastpointe+MI',
    hours: {
      Mon: '9:00 AM – 8:30 PM',
      Tue: '9:00 AM – 8:30 PM',
      Wed: '9:00 AM – 8:30 PM',
      Thu: '9:00 AM – 8:30 PM',
      Fri: '9:00 AM – 9:00 PM',
      Sat: '9:00 AM – 9:00 PM',
      Sun: '11:00 AM – 6:00 PM',
    },
  },
]

export const CATS = [
  { label: 'Wigs & Units',              count: 'Over 600 styles',      a: '#e8d4c0', b: '#c89f7a' },
  { label: 'Braiding Hair',             count: 'All major brands',     a: '#d9c49a', b: '#a48558' },
  { label: 'Bundles & Extensions',      count: '10" – 30" lengths',    a: '#efddc3', b: '#c9a06d' },
  { label: 'Lace Fronts & Closures',    count: 'HD · Transparent',     a: '#f0e0c5', b: '#d4b58a' },
  { label: 'Shampoo & Conditioner',     count: 'For textured hair',    a: '#e6d2c8', b: '#b38678' },
  { label: 'Edge Control & Gels',       count: 'Ampro · Eco · Got2B',  a: '#e1cbb6', b: '#a47f5c' },
  { label: 'Hot Tools & Dryers',        count: 'BaByliss · Andis',     a: '#ddd1c0', b: '#8e7c60' },
  { label: 'Skin, Nails & Accessories', count: '500+ SKUs',            a: '#ecd6c6', b: '#c8987a' },
]

export const REVIEWS = [
  {
    rating: 5,
    quote:
      'The staff here actually knows textured hair. I came in confused about which leave-in to try and walked out with exactly what I needed — no upsell, no guessing.',
    name: 'Jasmine W.',
    when: '2 weeks ago · Detroit',
    initial: 'J',
  },
  {
    rating: 5,
    quote:
      "Been shopping here since my daughter was in elementary. She's in college now and still makes me drive her when she's home. That tells you everything.",
    name: 'Denise R.',
    when: '1 month ago · Southfield',
    initial: 'D',
  },
  {
    rating: 5,
    quote:
      "They had the exact bundle color my stylist recommended — I checked three other spots first. Parking is easy and they answer the phone every time.",
    name: 'Marcus T.',
    when: '3 weeks ago · Eastpointe',
    initial: 'M',
  },
]

export const WHY = [
  {
    n: '01',
    h: 'Real expert advice',
    p: 'Staff trained on textured & natural hair. Ask us anything — wig install, porosity, protective styles. We actually answer.',
  },
  {
    n: '02',
    h: 'Every brand you want',
    p: 'Outre, Sensationnel, Mielle, Cantu, The Mane Choice, Design Essentials, and the hard-to-find indie brands your stylist asks for.',
  },
  {
    n: '03',
    h: 'Stocked & ready',
    p: "New shipments every week. If we don't have it, we'll tell you which of our stores does — or order it in for you.",
  },
  {
    n: '04',
    h: 'Fair prices, always',
    p: 'Competitive pricing with weekly in-store specials. No membership, no pop-ups — just a fair deal, every visit.',
  },
]

export const TWEAK_DEFAULTS = {
  palette: 'red',
  heroVariant: 'collage',
  density: 'standard',
  showStamp: true,
}
