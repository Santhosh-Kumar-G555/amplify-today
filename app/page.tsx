// app/page.tsx
'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { initTextReveals } from '@/lib/gsapAnimations'

import { ScrollProvider } from '@/components/providers/ScrollProvider'
import { ThreeProvider }  from '@/components/providers/ThreeProvider'
import { SceneController } from '@/components/canvas/SceneController'
import { Navbar }          from '@/components/ui/Navbar'
import { LoadingScreen }   from '@/components/ui/LoadingScreen'
import { MarqueeStrip }    from '@/components/ui/MarqueeStrip'
import { DividerLine }     from '@/components/ui/DividerLine'
import { StickerDecal }    from '@/components/ui/StickerDecal'

import { HeroSection }       from '@/components/sections/HeroSection'
import { FoundationSection } from '@/components/sections/FoundationSection'
import { ConnectionSection } from '@/components/sections/ConnectionSection'
import { NetworkSection }    from '@/components/sections/NetworkSection'
import { HubSection }        from '@/components/sections/HubSection'
import { ServicesStrip }     from '@/components/sections/ServicesStrip'

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    initTextReveals()
  }, { scope: containerRef })

  return (
    <ThreeProvider>
      <ScrollProvider>
        <main
          ref={containerRef}
          id="scroll-container"
          className="relative w-full overflow-hidden"
          style={{ height: '1250vh' }}
        >
          <StickerDecal className="top-[15vh] -right-20 w-[600px] opacity-90" rotation={-10} speed={-0.5} src="/stickers/asset1.png"/>
          <StickerDecal className="top-[40vh] -left-10 w-[400px] opacity-80" rotation={20} speed={0.8} src="/stickers/asset2.png"/>
          <StickerDecal className="top-[70vh] right-10 w-[550px] z-50" rotation={-5} speed={-1.2} src="/stickers/asset3.png"/>
          <StickerDecal className="top-[90vh] left-[20%] w-[300px]" rotation={15} speed={0.4} src="/stickers/asset4.png"/>

          <LoadingScreen />
          <Navbar />

          {/* Fixed 3D canvas — sits behind all content */}
          <SceneController />

          {/* Scene 1: The Offline Entity */}
          <section className="scene-section" data-scene="1">
            <HeroSection />
          </section>

          {/* Orange aggressive marquee divider */}
          <MarqueeStrip />

          {/* Scene 2: The Foundation */}
          <section className="scene-section" data-scene="2">
            <FoundationSection />
          </section>

          <DividerLine />

          {/* Scene 3: The Connection */}
          <section className="scene-section" data-scene="3">
            <ConnectionSection />
          </section>

          <DividerLine />

          {/* Scene 4: The Network */}
          <section className="scene-section" data-scene="4">
            <NetworkSection />
          </section>

          {/* Services icon grid — full inventory before the final scene */}
          <ServicesStrip />

          <DividerLine />

          {/* Scene 5: The Always-On Hub */}
          <section className="scene-section" data-scene="5">
            <HubSection />
          </section>
        </main>
      </ScrollProvider>
    </ThreeProvider>
  )
}
