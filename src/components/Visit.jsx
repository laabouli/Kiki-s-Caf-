import { SITE } from '../data/site'
import { Reveal } from './Reveal'

export function Visit() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.embedQuery)}&hl=en&z=16&output=embed`

  return (
    <section className="section visit" id="visit">
      <Reveal>
        <div className="container visit-grid">
        <div>
          <p className="section-label">Visit</p>
          <h2 className="section-title">Kiki&apos;s Café Zerktouni</h2>
          <p className="visit-address">{SITE.address}</p>
          <ul className="visit-facts">
            <li>
              <span>Hours</span>
              <strong>{SITE.hours}</strong>
            </li>
            <li>
              <span>Indicative spend</span>
              <strong>{SITE.priceNote}</strong>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </li>
          </ul>
          <div className="visit-actions">
            <a className="btn btn-solid" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
            <a className="btn btn-line" href="#reservation">
              Reserve online
            </a>
            <a className="btn btn-line" href={`tel:${SITE.phoneTel}`}>
              Call us
            </a>
          </div>
        </div>
        <div className="map-frame">
          <iframe
            title="Kiki's Café Zerktouni on Google Maps"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        </div>
      </Reveal>
    </section>
  )
}
