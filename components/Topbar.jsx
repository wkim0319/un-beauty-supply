import WaveMark from './WaveMark'
import { Ico } from './Icons'
import { openStatus } from '@/lib/utils'

export default function Topbar({ activeLoc }) {
  const st = openStatus(activeLoc)
  return (
    <header className="topbar">
      <div className="topbar-ribbon">
        <span>
          <span className="dot" />
          {st.open ? st.label : 'Open tomorrow'}
        </span>
        <span className="sep hide-sm">•</span>
        <span className="hide-sm">3 Detroit-area stores</span>
        <span className="sep hide-sm">•</span>
        <span className="hide-sm">Family-owned · Est. 2004</span>
      </div>
      <div className="topbar-main">
        <a href="#top" className="logo" aria-label="UN Beauty Supply">
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
        <nav className="topbar-nav">
          <a href="#categories">What we carry</a>
          <a href="#why">Why us</a>
          <a href="#reviews">Reviews</a>
          <a href="#locations">Locations</a>
        </nav>
        <a href={`tel:${activeLoc.phoneHref}`} className="topbar-call" aria-label={`Call ${activeLoc.phone}`}>
          <Ico.phone />
          <span className="num">{activeLoc.phone}</span>
        </a>
      </div>
    </header>
  )
}
