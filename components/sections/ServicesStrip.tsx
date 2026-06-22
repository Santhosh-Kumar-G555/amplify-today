// components/sections/ServicesStrip.tsx
'use client'

import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

interface Service {
  icon: string
  label: string
  color: 'cyan' | 'orange' | 'green' | 'white'
}

const SERVICES: Service[] = [
  { icon: '◈', label: 'Website Design',       color: 'cyan'   },
  { icon: '◎', label: 'SEO & Content',         color: 'green'  },
  { icon: '◉', label: 'Instagram Management',  color: 'orange' },
  { icon: '◌', label: 'Google Ads',            color: 'orange' },
  { icon: '◍', label: 'Facebook Pages',        color: 'cyan'   },
  { icon: '◐', label: 'Domain & Hosting',      color: 'white'  },
  { icon: '◑', label: 'SSL & Security',        color: 'green'  },
  { icon: '◒', label: 'Brand Identity',        color: 'orange' },
  { icon: '◓', label: 'Analytics Setup',       color: 'cyan'   },
  { icon: '◔', label: 'WhatsApp Integration',  color: 'green'  },
]

const colorMap = {
  cyan:   'text-cyan   border-cyan/30   bg-cyan/5',
  orange: 'text-orange border-orange/30 bg-orange/5',
  green:  'text-[#00FF88] border-[#00FF88]/30 bg-[#00FF88]/5',
  white:  'text-white  border-white/20  bg-white/5',
}

export function ServicesStrip() {
  return (
    <section
      id="services"
      className="relative z-20 w-full py-16 px-6 md:px-12 bg-abyss border-y border-smoke"
    >
      <motion.p
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted text-center mb-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        EVERYTHING YOUR BUSINESS NEEDS — UNDER ONE ROOF
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
      >
        {SERVICES.map(({ icon, label, color }) => (
          <motion.div
            key={label}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
            }}
            whileHover={{ scale: 1.05 }}
            className={twMerge(
              'flex flex-col items-center gap-2 p-4 border backdrop-blur-sm',
              'font-mono text-xs uppercase tracking-wider text-center cursor-pointer',
              'transition-shadow duration-300 hover:shadow-lg',
              colorMap[color]
            )}
          >
            <span className="text-2xl">{icon}</span>
            <span>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
