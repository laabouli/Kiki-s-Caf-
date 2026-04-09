import { useEffect, useRef, useState } from 'react'

/**
 * Sets `visible` to true once the element intersects the viewport.
 */
export function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, visible]
}
