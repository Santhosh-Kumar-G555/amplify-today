// components/sections/HeroSection.tsx
import { ChapterLabel } from '../ui/ChapterLabel'
import { StatPill }     from '../ui/StatPill'
import { GlitchText }   from '../ui/GlitchText'

export function HeroSection() {
  return (
    <div className="scene-overlay">
      <div className="flex justify-between items-start w-full mb-auto mt-24">
        <ChapterLabel text="01 / THE OFFLINE ENTITY" />
        <StatPill
          className="hidden md:inline-flex"
          text="97% of buyers search online before purchasing"
        />
      </div>

      <div className="max-w-4xl relative">
        <h1 className="scene-headline font-bebas text-[clamp(4rem,12vw,10rem)] leading-[0.85] text-white tracking-widest mb-6">
          YOUR CUSTOMERS<br />CAN'T FIND YOU.
        </h1>
        <p className="font-dm text-lg text-muted max-w-[50ch] mb-8">
          Most businesses lose 9 out of 10 potential customers before they ever
          make contact. They searched online. You weren't there.
        </p>
        <GlitchText text="ERROR_404: BUSINESS_NOT_FOUND.exe" />
      </div>
    </div>
  )
}
