// hooks/useReducedMotion.ts
import { useEffect, useState } from 'react'

/**
 * Returns true if the user has requested reduced motion via OS/browser settings.
 * Components should skip heavy GSAP / Framer Motion animations when this is true.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return prefersReduced
}
