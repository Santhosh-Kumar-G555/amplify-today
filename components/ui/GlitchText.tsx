'use client'

import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface GlitchTextProps {
  text: string | string[]
  className?: string
}

export function GlitchText({ text, className }: GlitchTextProps) {
  const reducedMotion = useReducedMotion()
  const lines = Array.isArray(text) ? text : [text]

  return (
    <div
      className={twMerge('glitch-text flex flex-col gap-1', className)}
      style={reducedMotion ? { animationPlayState: 'paused', opacity: 1 } : undefined}
    >
      {lines.map((line, i) => (
        <span key={i}>{line}</span>
      ))}
    </div>
  )
}
