// components/sections/HubSection.tsx
'use client'

import { motion }       from 'framer-motion'
import { ChapterLabel } from '../ui/ChapterLabel'
import { StatPill }     from '../ui/StatPill'
import { CTAButton }    from '../ui/CTAButton'

export function HubSection() {
  return (
    <div className="scene-overlay flex-col items-center text-center pb-12 pointer-events-none">
      <div className="flex justify-between items-start w-full mb-auto mt-24 text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <ChapterLabel text="05 / THE ALWAYS-ON HUB" colorClass="text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StatPill
            className="hidden md:inline-flex"
            text="Businesses with full presence grow 2.8× faster"
            color="cyan"
          />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center mb-12 pointer-events-auto relative">
        <motion.h2
          className="scene-headline font-bebas text-[clamp(3rem,8vw,7rem)] leading-[1] text-white tracking-widest mb-8"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          YOUR BUSINESS.<br />ONLINE.<br />AMPLIFIED.
        </motion.h2>

        <motion.p
          className="font-dm text-lg text-off-white max-w-[55ch] leading-relaxed mb-12 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From zero online presence to a complete, automated, always-on digital brand. This is what Amplify Today delivers.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CTAButton
            href="#start"
            variant="primary"
            className="text-base md:text-xl px-10 py-5 md:px-14 md:py-6 mb-6"
          >
            START YOUR GROWTH JOURNEY
          </CTAButton>
        </motion.div>

        {/* Secondary ghost CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CTAButton
            href="#work"
            variant="ghost"
            className="text-sm mb-12"
            arrow={false}
          >
            SEE OUR WORK ↓
          </CTAButton>
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-12 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-muted font-mono text-xs md:text-sm">"Ankit's Bakery: 3× walk-ins in 60 days"</motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-muted font-mono text-xs md:text-sm">"Priya Boutique: First IG sale in Week 2"</motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-muted font-mono text-xs md:text-sm">"Ravi Auto: Now ranks #1 in Bangalore"</motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-full text-center font-mono text-xs text-muted border-t border-smoke pt-6 mt-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        amplifytoday.in · hello@amplifytoday.in · Made in Bengaluru 🇮🇳
      </motion.div>
    </div>
  )
}
