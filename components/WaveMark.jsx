export default function WaveMark() {
  return (
    <span className="wave" aria-hidden="true">
      <svg viewBox="0 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 12)">
          <path className="w w-main" d="M8 32C8 32 12 44 20 44C28 44 28 32 36 32C44 32 44 44 52 44C56 44 58 40 58 40" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path className="w w-accent" d="M8 24C8 24 12 36 20 36C28 36 28 24 36 24C44 24 44 36 52 36C56 36 58 32 58 32" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path className="w w-main" d="M8 16C8 16 12 28 20 28C28 28 28 16 36 16C44 16 44 28 52 28C56 28 58 24 58 24" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none" />
        </g>
      </svg>
    </span>
  )
}
