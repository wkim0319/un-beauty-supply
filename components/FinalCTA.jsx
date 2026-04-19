import { Ico } from './Icons'

export default function FinalCTA({ activeLoc }) {
  return (
    <section>
      <div className="wrap">
        <div className="cta-band">
          <h2>
            Stop by today.<br />We&apos;ll take care of you.
          </h2>
          <p>
            Seven days a week. Three locations. One crew that actually knows what they&apos;re talking
            about. Come see why Detroit keeps coming back.
          </p>
          <div className="btns">
            <a href={`tel:${activeLoc.phoneHref}`} className="btn btn-white">
              <Ico.phone /> Call {activeLoc.phone}
            </a>
            <a
              href={`https://maps.google.com/?q=${activeLoc.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-white"
            >
              <Ico.pin /> Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
