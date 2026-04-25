'use client'

import { Ico } from './Icons'
import { useApp } from './AppContext'

export default function StickyCallBar() {
  const { activeLoc } = useApp()
  return (
    <div className="bottom-bar">
      <a href={`tel:${activeLoc.phoneHref}`} className="btn btn-primary">
        <Ico.phone /> Call now
      </a>
      <a
        href={`https://maps.google.com/?q=${activeLoc.mapsQuery}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
      >
        <Ico.pin /> Directions
      </a>
    </div>
  )
}
