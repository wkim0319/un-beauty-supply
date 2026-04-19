import { REVIEWS } from '@/lib/data'

export default function Trust() {
  return (
    <section id="reviews" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="trust">
          <div className="trust-top">
            <div>
              <div className="eyebrow" style={{ color: 'rgba(250,244,235,.55)' }}>
                <span style={{ background: 'var(--red)' }} />
                Google reviews · real customers
              </div>
              <div className="trust-stars">
                <div>
                  <span className="gstars">★★★★★</span>
                  <span style={{ display: 'block', marginTop: 6 }}>4.8 / 5</span>
                  <span className="rating-sub">across 1,200+ reviews</span>
                </div>
              </div>
            </div>
            <div className="trust-stats">
              <div className="trust-stat">
                <div className="n">20+</div>
                <div className="l">Years serving Detroit</div>
              </div>
              <div className="trust-stat">
                <div className="n">3</div>
                <div className="l">Metro Detroit stores</div>
              </div>
              <div className="trust-stat">
                <div className="n">600+</div>
                <div className="l">Wig styles in stock</div>
              </div>
              <div className="trust-stat">
                <div className="n">98%</div>
                <div className="l">Say they&apos;ll be back</div>
              </div>
            </div>
          </div>

          <div className="reviews">
            {REVIEWS.map((r, i) => (
              <div className="review" key={i}>
                <div className="s">{'★'.repeat(r.rating)}</div>
                <div className="q">&ldquo;{r.quote}&rdquo;</div>
                <div className="who">
                  <div className="av">{r.initial}</div>
                  <div>
                    <div className="name">{r.name}</div>
                    <div className="meta">{r.when}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="trust-foot">
            <span className="chip">Family-owned since 2004</span>
            <span className="chip">Licensed &amp; insured</span>
            <span className="chip">Detroit Black Chamber member</span>
            <span className="chip">EBT accepted</span>
          </div>
        </div>
      </div>
    </section>
  )
}
