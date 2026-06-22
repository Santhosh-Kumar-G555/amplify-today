// components/ui/MarqueeStrip.tsx
'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export function MarqueeStrip() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Scope the selector to this container to avoid conflicts
    const items = containerRef.current?.querySelectorAll('.marquee-content')
    if (!items || items.length === 0) return

    items.forEach((item) => {
      gsap.to(item, {
        xPercent: -100,
        repeat: -1,
        duration: 25,
        ease: 'none',
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0)
        }
      })
    })
  }, { scope: containerRef })

  const text = "WEBSITE ✦ SEO ✦ INSTAGRAM ✦ GOOGLE ADS ✦ HOSTING ✦ DOMAIN ✦ GROWTH ✦ "

  return (
    <div
      ref={containerRef}
      className="relative z-20 flex w-full overflow-hidden bg-orange h-12 items-center"
    >
      <div className="flex whitespace-nowrap">
        {/* Render 4 blocks to ensure smooth continuous scrolling */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="marquee-content inline-block font-bebas text-xl tracking-[0.2em] text-void px-4"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
