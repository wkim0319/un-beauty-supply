import WaveMark from './WaveMark'
import { LOCATIONS } from '@/lib/data'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a href="#top" className="logo logo-lg logo-inv" aria-label="UN Beauty Supply">
              <WaveMark />
              <span className="mark">
                <span className="row">
                  <span className="un">
                    U<span className="sep">•</span>N
                  </span>
                  <span className="beauty">BEAUTY</span>
                </span>
                <span className="supply">Supply</span>
              </span>
            </a>
            <p style={{ color: 'rgba(250,244,235,.65)', fontSize: 14, maxWidth: '34ch', marginTop: 14 }}>
              Detroit&apos;s go-to beauty supply for over 20 years. Family-owned, community-first, fully
              stocked.
            </p>
          </div>

          <div>
            <h4>Stores</h4>
            {LOCATIONS.map((l) => (
              <a key={l.id} href="#locations">
                {l.city} · {l.phone}
              </a>
            ))}
          </div>

          <div>
            <h4>Explore</h4>
            <a href="#categories">What we carry</a>
            <a href="#why">Why us</a>
            <a href="#reviews">Reviews</a>
            <a href="#locations">Hours &amp; directions</a>
          </div>

          <div>
            <h4>Follow</h4>
            <a href="#">Instagram · @unbeautysupply</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 UN Beauty Supply · Detroit, MI</span>
          <span>In-store only · No online checkout</span>
        </div>
      </div>
    </footer>
  )
}
