'use client'

import { useRef, useEffect } from 'react'
import { LOCATIONS } from '@/lib/data'
import { DAY_ORDER, openStatus, getToday } from '@/lib/utils'
import { Ico } from './Icons'
import { useApp } from './AppContext'

function MapPin({ color = '#DC2626' }) {
  return (
    <svg
      viewBox="0 0 36 48"
      fill="none"
      style={{ width: 36, height: 48, filter: 'drop-shadow(0 6px 8px rgba(0,0,0,.25))' }}
    >
      <path
        d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30s18-16.5 18-30C36 8.06 27.94 0 18 0z"
        fill={color}
      />
      <circle cx="18" cy="18" r="7" fill="#fff" />
    </svg>
  )
}

export default function Locations() {
  const { activeId, setActiveId } = useApp()
  const active = LOCATIONS.find((l) => l.id === activeId)
  const today = getToday()
  const st = openStatus(active)
  const headingRef = useRef(null)
  const didMount = useRef(false)

  useEffect(() => {
    if (!didMount.current) { didMount.current = true; return }
    headingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    headingRef.current?.focus()
  }, [activeId])

  return (
    <section
      id="locations"
      style={{ background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="wrap">
        <div className="eyebrow">Find your nearest store</div>
        <h2 className="section-h">
          3 stores.<br />Always close by.
        </h2>
        <p className="section-sub">
          Pick your store below — we&apos;ll show hours, the map, and the direct line. Tap
          &ldquo;Directions&rdquo; and you&apos;re rolling.
        </p>

        <div className="loc-wrap">
          <div className="loc-list">
            {LOCATIONS.map((loc) => {
              const s = openStatus(loc)
              const isActive = loc.id === activeId
              return (
                <button
                  key={loc.id}
                  className="loc-item"
                  aria-pressed={isActive}
                  onClick={() => setActiveId(loc.id)}
                >
                  <div className="tag">{loc.tag}</div>
                  <div className="city">{loc.city}</div>
                  <div className="addr">
                    {loc.addr1} · {loc.addr2}
                  </div>
                  <div className={`status ${s.open ? '' : 'closed'}`}>
                    <span className="dot" /> {s.label}
                  </div>
                </button>
              )
            })}
          </div>

          <div className="loc-detail">
            <div className="loc-map">
              {active.mapSrc ? (
                <iframe
                  src={active.mapSrc}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${active.name}`}
                />
              ) : (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '48%',
                      transform: 'translate(-50%, -100%)',
                    }}
                  >
                    <MapPin />
                  </div>
                  <div className="loc-map-label">Embedded Google Map · {active.city}</div>
                </>
              )}
            </div>

            <div className="loc-info">
              <h3 ref={headingRef} tabIndex={-1} style={{ outline: 'none' }}>{active.name}</h3>
              <div className="addr-line">
                {active.addr1}, {active.addr2}
              </div>

              <div className="loc-hours">
                {DAY_ORDER.slice(1).concat('Sun').map((d) => {
                  const isToday = today === d
                  return (
                    <div key={d} className={isToday ? 'today' : ''}>
                      <span className="d">
                        {d}
                        {isToday ? ' · Today' : ''}
                      </span>
                      <span className="h">{active.hours[d]}</span>
                    </div>
                  )
                })}
              </div>

              <div className="loc-cta">
                <a href={`tel:${active.phoneHref}`} className="btn btn-primary">
                  <Ico.phone /> Call {active.phone}
                </a>
                <a
                  href={`https://maps.google.com/?q=${active.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Ico.pin /> Directions
                </a>
              </div>

              <div
                style={{
                  marginTop: 16,
                  fontSize: 12,
                  color: 'var(--ink-3)',
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <Ico.clock /> <span>{st.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
