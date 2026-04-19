import { CATS, LOCATIONS } from '@/lib/data'
import { Ico } from './Icons'

export default function Categories() {
  return (
    <section id="categories">
      <div className="wrap">
        <div className="eyebrow">What we carry · in-store</div>
        <h2 className="section-h">
          Thousands of products.<br />One quick stop.
        </h2>
        <p className="section-sub">
          Here&apos;s a taste of what&apos;s on the shelves. Looking for a specific brand or shade? Just
          call — we&apos;ll pull it and hold it for you.
        </p>

        <div className="cats-grid">
          {CATS.map((c, i) => (
            <div className="cat" key={i}>
              <div
                className="cat-ph"
                data-label={`cat ${String(i + 1).padStart(2, '0')}`}
                style={{ '--cat-a': c.a, '--cat-b': c.b }}
              />
              <div className="arrow">
                <Ico.arrow />
              </div>
              <div className="cat-body">
                <h3>{c.label}</h3>
                <div className="count">{c.count}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="cats-note">
          <span>
            <b>Don&apos;t see it?</b> We probably have it — or can get it in by end of week.
          </span>
          <a
            href={`tel:${LOCATIONS[0].phoneHref}`}
            className="btn btn-primary"
            style={{ minHeight: 48, fontSize: 14, marginLeft: 'auto' }}
          >
            <Ico.phone /> Call &amp; ask
          </a>
        </div>
      </div>
    </section>
  )
}
