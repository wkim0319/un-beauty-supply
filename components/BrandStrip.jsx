const BRANDS = [
  'Outre', 'Sensationnel', 'Mielle', 'Cantu', 'The Mane Choice',
  'Design Essentials', 'Shea Moisture', 'BaByliss', 'Andis',
  'Ampro', 'Eco', 'Got2B', 'Bold Hold', "Murray's", 'Kaleidoscope',
]

export default function BrandStrip() {
  const row = (
    <span>
      {BRANDS.map((b, i) => (
        <span key={i}>
          {b}
          <span className="star">✦</span>
        </span>
      ))}
    </span>
  )
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {row}{row}{row}
      </div>
    </div>
  )
}
