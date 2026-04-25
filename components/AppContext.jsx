'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { LOCATIONS, TWEAK_DEFAULTS } from '@/lib/data'

const AppContext = createContext({
  activeLoc: LOCATIONS[0],
  activeId: 'detroit',
  setActiveId: () => {},
  tweak: TWEAK_DEFAULTS,
  setTweak: () => {},
})

export function AppProvider({ children }) {
  const [activeId, setActiveId] = useState('detroit')
  const [tweak, setTweak] = useState(TWEAK_DEFAULTS)

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
    <AppContext.Provider value={{ activeLoc, activeId, setActiveId, tweak, setTweak }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
