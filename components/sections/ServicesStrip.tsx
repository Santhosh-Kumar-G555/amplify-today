// components/sections/ServicesStrip.tsx
import { twMerge } from 'tailwind-merge'

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
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted text-center mb-10">
        EVERYTHING YOUR BUSINESS NEEDS — UNDER ONE ROOF
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {SERVICES.map(({ icon, label, color }) => (
          <div
            key={label}
            className={twMerge(
              'flex flex-col items-center gap-2 p-4 border backdrop-blur-sm',
              'font-mono text-xs uppercase tracking-wider text-center',
              'transition-transform duration-300 hover:scale-105 hover:shadow-lg',
              colorMap[color]
            )}
          >
            <span className="text-2xl">{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
