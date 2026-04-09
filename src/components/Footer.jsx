import { HEERBY_URL, SITE } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            Kiki&apos;s <span>Café</span>
          </p>
          <p className="footer-tag">{SITE.tagline}</p>
        </div>
        <div className="footer-links">
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
            Google Maps
          </a>
          <a href={HEERBY_URL} target="_blank" rel="noopener noreferrer">
            Photos on Heerby
          </a>
        </div>
      </div>
      <p className="footer-note">
        Hours and menu may change; confirm before you travel. Gallery images mirror
        the venue listing on Heerby.
      </p>
    </footer>
  )
}
