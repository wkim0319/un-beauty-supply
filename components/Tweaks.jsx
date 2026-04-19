'use client'

function Opts({ state, setState, k, options }) {
  const set = (v) => setState((s) => ({ ...s, [k]: v }))
  return (
    <div className="opts">
      {options.map((o) => (
        <button key={String(o.v)} className="opt" aria-pressed={state[k] === o.v} onClick={() => set(o.v)}>
          {o.l}
        </button>
      ))}
    </div>
  )
}

export default function Tweaks({ state, setState, onClose }) {
  return (
    <div className="tweaks">
      <button className="close" onClick={onClose} aria-label="Close tweaks">
        ×
      </button>
      <h5>Tweaks</h5>

      <label>Palette</label>
      <Opts
        state={state}
        setState={setState}
        k="palette"
        options={[
          { v: 'red', l: 'Signage Red' },
          { v: 'navy', l: 'Signage Navy' },
          { v: 'mono', l: 'Warm Mono' },
        ]}
      />

      <label>Hero</label>
      <Opts
        state={state}
        setState={setState}
        k="heroVariant"
        options={[
          { v: 'collage', l: 'Collage' },
          { v: 'poster', l: 'Poster' },
        ]}
      />

      <label>Density</label>
      <Opts
        state={state}
        setState={setState}
        k="density"
        options={[
          { v: 'standard', l: 'Standard' },
          { v: 'cozy', l: 'Cozy' },
        ]}
      />

      <label>Hero stamp</label>
      <Opts
        state={state}
        setState={setState}
        k="showStamp"
        options={[
          { v: true, l: 'On' },
          { v: false, l: 'Off' },
        ]}
      />
    </div>
  )
}
