'use client'

import { useState, useEffect } from 'react'
import { LOCATIONS, TWEAK_DEFAULTS } from '@/lib/data'
import Topbar from '@/components/Topbar'
import Hero from '@/components/Hero'
import BrandStrip from '@/components/BrandStrip'
import Categories from '@/components/Categories'
import Locations from '@/components/Locations'
import MidCTA from '@/components/MidCTA'
import Trust from '@/components/Trust'
import Why from '@/components/Why'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import Tweaks from '@/components/Tweaks'

export default function HomePage() {
  const [activeId, setActiveId] = useState('detroit')
  const [tweak, setTweak] = useState(TWEAK_DEFAULTS)
  const [tweaksOpen, setTweaksOpen] = useState(false)

  // Hydrate from localStorage after mount
  useEffect(() => {
    try {
      const savedLoc = localStorage.getItem('un.loc')
      if (savedLoc) setActiveId(savedLoc)
      const savedTweak = localStorage.getItem('un.tweaks')
      if (savedTweak) setTweak((t) => ({ ...t, ...JSON.parse(savedTweak) }))
    } catch {}
  }, [])

  useEffect(() => {
    try { localStorage.setItem('un.loc', activeId) } catch {}
  }, [activeId])

  useEffect(() => {
    try { localStorage.setItem('un.tweaks', JSON.stringify(tweak)) } catch {}
  }, [tweak])

  const activeLoc = LOCATIONS.find((l) => l.id === activeId) || LOCATIONS[0]

  return (
    <div className={`palette-${tweak.palette} density-${tweak.density} site-root`}>
      <Topbar activeLoc={activeLoc} />
      <main>
        <Hero activeLoc={activeLoc} variant={tweak.heroVariant} showStamp={tweak.showStamp} />
        <BrandStrip />
        <Categories />
        <Locations activeId={activeId} setActiveId={setActiveId} />
        <MidCTA activeLoc={activeLoc} />
        <Trust />
        <Why />
        <FinalCTA activeLoc={activeLoc} />
      </main>
      <Footer />
      <StickyCallBar activeLoc={activeLoc} />
      <button className="tweaks-toggle" onClick={() => setTweaksOpen((o) => !o)}>
        Tweaks
      </button>
      {tweaksOpen && (
        <Tweaks state={tweak} setState={setTweak} onClose={() => setTweaksOpen(false)} />
      )}
    </div>
  )
}
