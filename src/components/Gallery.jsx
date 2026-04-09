import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { HEERBY_URL, menuPhotos } from '../data/site'
import { Reveal } from './Reveal'
import { GallerySlider } from './GallerySlider'

export function Gallery() {
  const [menuIndex, setMenuIndex] = useState(null)

  useEffect(() => {
    if (menuIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuIndex(null)
      if (e.key === 'ArrowLeft')
        setMenuIndex((i) => (i - 1 + menuPhotos.length) % menuPhotos.length)
      if (e.key === 'ArrowRight') setMenuIndex((i) => (i + 1) % menuPhotos.length)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [menuIndex])

  const lightbox =
    menuIndex !== null
      ? createPortal(
          <div
            className="menu-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-lightbox-title"
          >
            <button
              type="button"
              className="menu-lightbox-backdrop"
              aria-label="Close enlarged menu"
              onClick={() => setMenuIndex(null)}
            />
            <div className="menu-lightbox-panel">
              <div className="menu-lightbox-toolbar">
                <div className="menu-lightbox-nav">
                  <button
                    type="button"
                    className="menu-lightbox-arrow"
                    onClick={() =>
                      setMenuIndex((i) => (i - 1 + menuPhotos.length) % menuPhotos.length)
                    }
                    aria-label="Previous menu page"
                  >
                    ‹
                  </button>
                  <p id="menu-lightbox-title" className="menu-lightbox-title">
                    Menu · page {menuIndex + 1} of {menuPhotos.length}
                  </p>
                  <button
                    type="button"
                    className="menu-lightbox-arrow"
                    onClick={() => setMenuIndex((i) => (i + 1) % menuPhotos.length)}
                    aria-label="Next menu page"
                  >
                    ›
                  </button>
                </div>
                <button
                  type="button"
                  className="menu-lightbox-close"
                  onClick={() => setMenuIndex(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="menu-lightbox-frame">
                <img
                  src={menuPhotos[menuIndex]}
                  alt={`Menu page ${menuIndex + 1}, enlarged`}
                  width={900}
                  height={1200}
                  decoding="async"
                />
              </div>
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <section className="section gallery" id="gallery">
        <Reveal>
          <div className="container">
            <div className="gallery-head">
              <div>
                <p className="section-label">Gallery</p>
                <h2 className="section-title">Inside Kiki&apos;s</h2>
                <p className="section-intro gallery-sub">
                  Venue photography as featured on{' '}
                  <a href={HEERBY_URL} target="_blank" rel="noopener noreferrer">
                    Heerby
                  </a>
                  .
                </p>
              </div>
            </div>
            <GallerySlider />
            <p className="menu-strip-label">From the menu</p>
            <p className="menu-strip-hint">Click a page to view it larger</p>
            <div className="menu-strip-wrap">
              <div className="menu-strip">
                {menuPhotos.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className="menu-thumb"
                    onClick={() => setMenuIndex(i)}
                    aria-label={`Enlarge menu page ${i + 1}`}
                  >
                    <span className="menu-thumb-inner">
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        width={320}
                        height={420}
                        decoding="async"
                      />
                      <span className="menu-thumb-zoom" aria-hidden="true">
                        View
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      {lightbox}
    </>
  )
}
