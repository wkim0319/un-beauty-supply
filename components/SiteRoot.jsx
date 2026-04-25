'use client'

import { useState } from 'react'
import { useApp } from './AppContext'
import Tweaks from './Tweaks'

export default function SiteRoot({ children }) {
  const { tweak, setTweak } = useApp()
  const [tweaksOpen, setTweaksOpen] = useState(false)

  return (
    <div className={`palette-${tweak.palette} density-${tweak.density} site-root`}>
      {children}
      <button className="tweaks-toggle" onClick={() => setTweaksOpen((o) => !o)}>
        Tweaks
      </button>
      {tweaksOpen && (
        <Tweaks state={tweak} setState={setTweak} onClose={() => setTweaksOpen(false)} />
      )}
    </div>
  )
}
