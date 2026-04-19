import { WHY } from '@/lib/data'

export default function Why() {
  return (
    <section id="why">
      <div className="wrap">
        <div className="eyebrow">Why Metro Detroit chooses UN</div>
        <h2 className="section-h">
          Your go-to spot.<br />And we&apos;ve earned it.
        </h2>

        <div className="why-grid">
          {WHY.map((w, i) => (
            <div className="why-card" key={i}>
              <div className="num">{w.n}</div>
              <h3>{w.h}</h3>
              <p>{w.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
