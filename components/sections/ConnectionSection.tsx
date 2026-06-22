// components/sections/ConnectionSection.tsx
'use client'

import { motion } from 'framer-motion'
import { ChapterLabel } from '../ui/ChapterLabel'
import { StatPill } from '../ui/StatPill'

export function ConnectionSection() {
  const tags = ["SEO Strategy", "Keyword Research", "Content Writing", "Meta Optimisation", "Google Business"]

  return (
    <div className="scene-overlay">
      <div className="flex justify-between items-start w-full mb-auto mt-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <ChapterLabel text="03 / THE CONNECTION" colorClass="text-[#00FF88]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StatPill className="hidden md:inline-flex" text="68% of all online experiences begin with a search" color="cyan" />
        </motion.div>
      </div>

      <div className="max-w-4xl">
        <motion.h2
          className="scene-headline font-bebas text-[clamp(4rem,10vw,10rem)] leading-[0.85] text-white tracking-widest mb-6"
          initial={{ opacity: 0, y: 50, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          GET FOUND.<br />GET CLICKED.<br />GET PAID.
        </motion.h2>

        <motion.p
          className="font-dm text-base text-off-white max-w-[55ch] leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We craft SEO-optimised content that speaks Google's language. From keyword strategy to on-page structure, we make sure your business appears when your customers are searching.
        </motion.p>

        <motion.div
          className="service-tag-group flex flex-wrap gap-3 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {tags.map(tag => (
            <motion.span
              key={tag}
              className="tag px-4 py-2 bg-ash border border-[#00FF88] text-[#00FF88] font-mono text-xs uppercase tracking-wider"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="font-mono text-sm text-cyan flex flex-col gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >&gt; INDEXING amplifytoday.in... DONE</motion.span>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >&gt; RANK POSITION: CLIMBING...</motion.span>
        </motion.div>
      </div>
    </div>
  )
}
