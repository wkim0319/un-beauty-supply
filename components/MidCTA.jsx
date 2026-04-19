import { Ico } from './Icons'

export default function MidCTA({ activeLoc }) {
  return (
    <section style={{ padding: '20px 0 40px' }}>
      <div className="wrap">
        <div className="cta-band" style={{ background: 'var(--navy)' }}>
          <h2>
            Got a question?<br />
            <span style={{ color: '#ffd1d8' }}>Just give us a call.</span>
          </h2>
          <p>
            We answer the phone. We&apos;ll check the shelf for you. We&apos;ll hold your item &apos;til
            close. That&apos;s it — that&apos;s the trick.
          </p>
          <div className="btns">
            <a href={`tel:${activeLoc.phoneHref}`} className="btn btn-white">
              <Ico.phone /> {activeLoc.phone}
            </a>
            <a
              href={`https://maps.google.com/?q=${activeLoc.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-white"
            >
              <Ico.pin /> Plan your visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
