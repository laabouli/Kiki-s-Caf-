import { useCallback, useEffect, useState } from 'react'
import { Reveal } from './Reveal'

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

const ITEMS = [
  {
    quote:
      'The pink ambience feels so modern and aesthetic — the whole place feels vibrant. Pancakes are fluffy and portions are generous.',
    name: 'Sam S.',
  },
  {
    quote:
      'Splendid decor and a well-designed space — great vibe and animation. I loved this café-restaurant.',
    name: 'Fouzia A.',
  },
  {
    quote:
      'Warm atmosphere, delicious food, and attentive service. A memorable evening — highly recommended.',
    name: 'Hajar K.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const reduceMotion = usePrefersReducedMotion()

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % ITEMS.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + ITEMS.length) % ITEMS.length)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(next, 7000)
    return () => clearInterval(id)
  }, [next, reduceMotion])

  const item = ITEMS[index]

  return (
    <section className="section testimonials" aria-labelledby="testimonials-heading">
      <Reveal>
        <div className="container testimonials-inner">
          <p className="section-label">Voices</p>
          <h2 id="testimonials-heading" className="section-title">
            Loved by Casablanca diners
          </h2>
          <p className="section-intro testimonials-sub">
            Short excerpts inspired by recent guest feedback — refreshed automatically.
          </p>
          <div className="testimonial-card">
            <blockquote key={index} className="testimonial-quote">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              {item.quote}
            </blockquote>
            <footer className="testimonial-meta">
              <span className="testimonial-name">{item.name}</span>
              <span className="testimonial-tag">Guest</span>
            </footer>
            <div className="testimonial-controls">
              <button type="button" className="t-nav" onClick={prev} aria-label="Previous quote">
                ‹
              </button>
              <div className="t-dots" role="tablist" aria-label="Quotes">
                {ITEMS.map((_, i) => (
                  <button
                    key={String(i)}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Quote ${i + 1}`}
                    className={`t-dot ${i === index ? 'is-active' : ''}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <button type="button" className="t-nav" onClick={next} aria-label="Next quote">
                ›
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
