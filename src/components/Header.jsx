import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="logo" onClick={close}>
          Kiki&apos;s <span>Café</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <a href="#experience" onClick={close}>
            Experience
          </a>
          <a href="#gallery" onClick={close}>
            Gallery
          </a>
          <a href="#reservation" onClick={close}>
            Reserve
          </a>
          <a href="#visit" onClick={close}>
            Visit
          </a>
          <a
            className="nav-cta"
            href="https://www.instagram.com/kikis_cafe_bakery/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  )
}
