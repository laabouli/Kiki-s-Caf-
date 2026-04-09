import { useCallback, useEffect, useState } from 'react'
import { venuePhotos } from '../data/site'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

export function GallerySlider() {
  const [index, setIndex] = useState(0)
  const reduceMotion = usePrefersReducedMotion()

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % venuePhotos.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + venuePhotos.length) % venuePhotos.length)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(next, 5200)
    return () => clearInterval(id)
  }, [next, reduceMotion])

  return (
    <div
      className="gallery-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Venue photos"
    >
      <div className="gallery-slider-viewport">
        <div
          className="gallery-slider-track"
          style={{
            transform: `translate3d(-${index * 100}%, 0, 0)`,
            transition: reduceMotion ? 'none' : 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {venuePhotos.map((src, i) => (
            <figure key={src} className="gallery-slide">
              <img
                src={src}
                alt={`Kiki's Café Zerktouni interior and dishes, photo ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                width={1200}
                height={800}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
      <div className="gallery-slider-nav">
        <button type="button" className="gs-btn" onClick={prev} aria-label="Previous photo">
          ‹
        </button>
        <div className="gs-dots" role="tablist" aria-label="Slide">
          {venuePhotos.map((_, i) => (
            <button
              key={String(i)}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Photo ${i + 1}`}
              className={`gs-dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" className="gs-btn" onClick={next} aria-label="Next photo">
          ›
        </button>
      </div>
    </div>
  )
}
