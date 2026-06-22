'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function StickerDecal({ src, className, speed = 1, rotation = 0 }: { src: string, className: string, speed?: number, rotation?: number }) {
  const decalRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(decalRef.current, {
      yPercent: 100 * speed,
      rotation: rotation + 15,
      ease: "none",
      scrollTrigger: {
        trigger: decalRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    })
  }, [])

  return (
    <div ref={decalRef} className={`absolute pointer-events-none z-30 ${className}`}>
      <Image alt="Graphic Decal" className="w-full h-auto drop-shadow-2xl " height={500} src={src} width={500}/>
    </div>
  )
}
