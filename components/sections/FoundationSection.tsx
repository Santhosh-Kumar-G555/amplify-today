// components/sections/FoundationSection.tsx
'use client'

import { motion }       from 'framer-motion'
import { ChapterLabel } from '../ui/ChapterLabel'

export function FoundationSection() {
  const tags = ["Domain Registration", "Fast Hosting", "SSL Certificate", "Mobile-First Design", "CMS Setup"]

  return (
    <div className="scene-overlay">
      <motion.div
        className="mb-auto mt-24"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <ChapterLabel text="02 / THE FOUNDATION" colorClass="text-cyan" />
      </motion.div>

      <div className="max-w-4xl">
        <motion.h2
          className="scene-headline font-bebas text-[clamp(3rem,8vw,7rem)] leading-[1] text-white tracking-widest mb-4"
          initial={{ opacity: 0, y: 50, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          WE LAY THE<br />FOUNDATION.
        </motion.h2>

        <motion.h3
          className="font-syne font-bold text-xl md:text-2xl text-cyan mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Domain. Hosting. Design. Security. Speed.
        </motion.h3>

        <motion.p
          className="font-dm text-base text-off-white max-w-[55ch] leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Every great online presence starts with a solid base. We register your domain, set up blazing-fast hosting, design your brand identity, and secure your site with SSL — everything locked in and live within days.
        </motion.p>

        <motion.div
          className="service-tag-group flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              className="tag px-4 py-2 bg-ash border border-cyan text-cyan font-mono text-xs uppercase tracking-wider"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
