'use client'

import { useApp } from './AppContext'

export default function SiteRoot({ children }) {
  const { tweak } = useApp()

  return (
    <div className={`palette-${tweak.palette} density-${tweak.density} site-root`}>
      {children}
    </div>
  )
}
