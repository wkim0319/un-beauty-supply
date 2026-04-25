'use client'

import { Ico } from './Icons'
import { useApp } from './AppContext'

function HeroCollage({ showStamp }) {
  return (
    <div className="collage" aria-hidden="true">
      <div className="tile t1">
        <div className="ph"><span>model · wig A</span></div>
      </div>
      <div className="tile t2">
        <div className="ph"><span>bundle stack</span></div>
      </div>
      <div className="tile t3">
        <div className="ph"><span>styling tools</span></div>
      </div>
      <div className="tile t4">We speak<br />hair.</div>
      {showStamp && <div className="stamp">Family<br />owned<br />since &apos;04</div>}
    </div>
  )
}

function HeroPoster({ showStamp }) {
  return (
    <div className="collage" style={{ aspectRatio: '3/4' }}>
      <div className="tile" style={{ inset: 0, transform: 'none', width: '100%', height: '100%', borderRadius: 22 }}>
        <div className="ph" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 12 }}>full-bleed model · hero image</span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 16, bottom: 16, right: 16, background: 'rgba(255,251,244,.92)', padding: 14, borderRadius: 14, backdropFilter: 'blur(6px)', border: '1px solid rgba(0,0,0,.08)' }}>
        <div style={{ fontFamily: 'var(--font-archivo-narrow)', fontWeight: 800, fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          This week at UN
        </div>
        <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 900, fontSize: 20, letterSpacing: '-0.01em' }}>
          New Outre shipment just landed.
        </div>
      </div>
      {showStamp && (
        <div className="stamp" style={{ bottom: 'auto', top: 14, right: 14 }}>
          Family<br />owned<br />since &apos;04
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const { activeLoc, tweak } = useApp()
  const { heroVariant: variant, showStamp } = tweak

  return (
    <section className="hero" id="top" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="kicker">
              <span className="yr">20+ YEARS</span>
              {' '}
              <span>Detroit&apos;s Beauty Supply · Est. 2004</span>
            </div>

            <h1>
              Everything you need<br />
              for <em>your hair</em>,<br />
              <span className="red">all under</span> <span className="nav">one roof.</span>
            </h1>

            <p className="lede">
              Wigs, bundles, braiding hair, styling tools, edge control, skincare — stocked fresh every
              week and backed by staff who actually know textured and natural hair.
            </p>

            <div className="hero-cta">
              <a
                href={`https://maps.google.com/?q=${activeLoc.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Ico.pin /> Get directions
              </a>
              <a href={`tel:${activeLoc.phoneHref}`} className="btn btn-primary">
                <Ico.phone /> Call {activeLoc.phone}
              </a>
            </div>

            <div className="hero-meta">
              <span className="pill">
                <span className="stars">★★★★★</span> <b>4.4</b>&nbsp;· 500+ Google reviews
              </span>
              <span className="pill">
                <Ico.pin /> <b>3 locations</b>&nbsp;across Metro Detroit
              </span>
              <span className="pill">
                <Ico.clock /> <b>Open 7 days</b>
              </span>
            </div>
          </div>

          {variant === 'collage' && <HeroCollage showStamp={showStamp} />}
          {variant === 'poster' && <HeroPoster showStamp={showStamp} />}
        </div>
      </div>
    </section>
  )
}
