// components/ui/GlitchText.tsx
'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { twMerge } from 'tailwind-merge'
import { useReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

interface GlitchTextProps {
  text: string | string[]
  className?: string
}

export function GlitchText({ text, className }: GlitchTextProps) {
  const containerRef   = useRef<HTMLDivElement>(null)
  const reducedMotion  = useReducedMotion()

  useGSAP(() => {
    // Skip animation entirely if the user prefers reduced motion
    if (reducedMotion) return

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 85%',
      onEnter: () => {
        if (containerRef.current) {
          containerRef.current.style.animationPlayState = 'running'
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.style.animationPlayState = 'paused'
            }
          }, 2000)
        }
      },
    })
  }, { scope: containerRef })

  const lines = Array.isArray(text) ? text : [text]

  return (
    <div
      ref={containerRef}
      className={twMerge('glitch-text flex flex-col gap-1', className)}
      // When reduced motion is active keep it fully visible but static
      style={reducedMotion ? { animationPlayState: 'paused', opacity: 1 } : undefined}
    >
      {lines.map((line, i) => (
        <span key={i}>{line}</span>
      ))}
    </div>
  )
}
