export const DAY_ORDER = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function getToday() {
  return DAY_ORDER[new Date().getDay()]
}

export function parseHours(str) {
  const parts = str.split('–').map((s) => s.trim())
  if (parts.length !== 2) return null
  const toMin = (t) => {
    const [hm, ap] = t.split(' ')
    let [h, mi] = hm.split(':').map(Number)
    if (ap === 'PM' && h !== 12) h += 12
    if (ap === 'AM' && h === 12) h = 0
    return h * 60 + mi
  }
  return { open: toMin(parts[0]), close: toMin(parts[1]) }
}

export function openStatus(loc) {
  const today = getToday()
  const todayStr = loc.hours[today]
  if (!todayStr) return { open: false, label: 'Closed today' }
  const rng = parseHours(todayStr)
  if (!rng) return { open: false, label: 'Call for hours' }
  const d = new Date()
  const now = d.getHours() * 60 + d.getMinutes()
  if (now >= rng.open && now < rng.close) {
    const h = Math.floor(rng.close / 60) % 12 || 12
    const mm = rng.close % 60
    const ap = rng.close >= 12 * 60 ? 'PM' : 'AM'
    return { open: true, label: `Open · until ${h}:${mm.toString().padStart(2, '0')} ${ap}` }
  }
  if (now < rng.open) {
    const h = Math.floor(rng.open / 60) % 12 || 12
    const mm = rng.open % 60
    const ap = rng.open >= 12 * 60 ? 'PM' : 'AM'
    return { open: false, label: `Opens ${h}:${mm.toString().padStart(2, '0')} ${ap}` }
  }
  return { open: false, label: 'Closed' }
}
