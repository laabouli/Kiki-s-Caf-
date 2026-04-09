import { heroBackground } from '../data/site'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-visual" aria-hidden="true">
        <img
          src={heroBackground}
          alt=""
          className="hero-img"
          width={2400}
          height={1600}
          sizes="100vw"
          decoding="async"
          fetchPriority="high"
        />
        <div className="hero-scrim" />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Casablanca · Zerktouni</p>
        <h1>
          Where the city meets <em>rosé light</em> &amp; calm
        </h1>
        <p className="hero-lead">
          A refined café and bakery for long coffees, celebrations, and
          unhurried afternoons — crafted with warmth and attention to detail.
        </p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#reservation">
            Reserve a table
          </a>
          <a className="btn btn-line" href="#visit">
            Plan your visit
          </a>
          <a
            className="btn btn-line"
            href="https://www.instagram.com/kikis_cafe_bakery/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
