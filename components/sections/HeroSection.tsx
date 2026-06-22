// components/sections/HeroSection.tsx
'use client'

import { motion }       from 'framer-motion'
import { ChapterLabel } from '../ui/ChapterLabel'
import { StatPill }     from '../ui/StatPill'
import { GlitchText }   from '../ui/GlitchText'

export function HeroSection() {
  return (
    <div className="scene-overlay">
      <div className="flex justify-between items-start w-full mb-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <ChapterLabel text="01 / THE OFFLINE ENTITY" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <StatPill
            className="hidden md:inline-flex"
            text="97% of buyers search online before purchasing"
          />
        </motion.div>
      </div>

      <div className="max-w-4xl relative">
        <motion.h1
          className="scene-headline font-bebas text-[clamp(3.5rem,8vw,7rem)] leading-[1] text-white tracking-widest mb-6"
          initial={{ opacity: 0, y: 50, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          YOUR CUSTOMERS<br />CAN'T FIND YOU.
        </motion.h1>

        <motion.p
          className="font-dm text-lg text-muted max-w-[50ch] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          Most businesses lose 9 out of 10 potential customers before they ever
          make contact. They searched online. You weren't there.
        </motion.p>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.4, delay: 0.4 }}
        >
          <GlitchText text="ERROR_404: BUSINESS_NOT_FOUND.exe" />
        </motion.div>
      </div>
    </div>
  )
}
