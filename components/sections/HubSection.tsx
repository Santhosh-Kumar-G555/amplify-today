// components/sections/HubSection.tsx
import { ChapterLabel } from '../ui/ChapterLabel'
import { StatPill }     from '../ui/StatPill'
import { CTAButton }    from '../ui/CTAButton'

export function HubSection() {
  return (
    <div className="scene-overlay flex-col items-center text-center pb-12 pointer-events-none">
      <div className="flex justify-between items-start w-full mb-auto mt-24 text-left">
        <ChapterLabel text="05 / THE ALWAYS-ON HUB" colorClass="text-white" />
        <StatPill
          className="hidden md:inline-flex"
          text="Businesses with full presence grow 2.8× faster"
          color="cyan"
        />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center mb-12 pointer-events-auto relative">
        <h2 className="scene-headline font-bebas text-[clamp(3.5rem,12vw,12rem)] leading-[0.85] text-white tracking-widest mb-8">
          YOUR BUSINESS.<br />ONLINE.<br />AMPLIFIED.
        </h2>

        <p className="font-dm text-lg text-off-white max-w-[55ch] leading-relaxed mb-12 mx-auto">
          From zero online presence to a complete, automated, always-on digital brand. This is what Amplify Today delivers.
        </p>

        {/* Primary CTA */}
        <CTAButton
          href="#start"
          variant="primary"
          className="text-base md:text-xl px-10 py-5 md:px-14 md:py-6 mb-6"
        >
          START YOUR GROWTH JOURNEY
        </CTAButton>

        {/* Secondary ghost CTA */}
        <CTAButton
          href="#work"
          variant="ghost"
          className="text-sm mb-12"
          arrow={false}
        >
          SEE OUR WORK ↓
        </CTAButton>

        {/* Social proof */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-12 px-4">
          <div className="text-muted font-mono text-xs md:text-sm">"Ankit's Bakery: 3× walk-ins in 60 days"</div>
          <div className="text-muted font-mono text-xs md:text-sm">"Priya Boutique: First IG sale in Week 2"</div>
          <div className="text-muted font-mono text-xs md:text-sm">"Ravi Auto: Now ranks #1 in Bangalore"</div>
        </div>
      </div>

      <div className="w-full text-center font-mono text-xs text-muted border-t border-smoke pt-6 mt-auto">
        amplifytoday.in · hello@amplifytoday.in · Made in Bengaluru 🇮🇳
      </div>
    </div>
  )
}
