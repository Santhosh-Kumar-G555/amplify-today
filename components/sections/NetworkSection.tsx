// components/sections/NetworkSection.tsx
'use client'

import { motion } from 'framer-motion'
import { ChapterLabel } from '../ui/ChapterLabel'
import { StatPill } from '../ui/StatPill'

export function NetworkSection() {
  const tags = ["Instagram Management", "Facebook Pages", "Content Calendar", "Reels Production", "Community Replies"]

  return (
    <div className="scene-overlay">
      <div className="flex justify-between items-start w-full mb-auto mt-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <ChapterLabel text="04 / THE NETWORK" colorClass="text-orange" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StatPill className="hidden md:inline-flex" text="India has 600M+ social users. Your competitors are there." color="orange" />
        </motion.div>
      </div>

      <div className="max-w-4xl">
        <motion.h2
          className="scene-headline font-bebas text-[clamp(3rem,8vw,7rem)] leading-[1] text-white tracking-widest mb-6"
          initial={{ opacity: 0, y: 50, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          YOUR BRAND,<br />EVERYWHERE<br />AT ONCE.
        </motion.h2>

        <motion.p
          className="font-dm text-base text-off-white max-w-[55ch] leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Consistent, scheduled content across Instagram, Facebook, and beyond. We manage your social presence so you can manage your business. Stories. Reels. Posts. Every week. On autopilot.
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
              className="tag px-4 py-2 bg-ash border border-orange text-orange font-mono text-xs uppercase tracking-wider"
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
          className="font-bebas text-3xl md:text-5xl text-orange mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          12 POSTS PUBLISHED THIS WEEK FOR OUR CLIENTS
        </motion.div>
      </div>
    </div>
  )
}
