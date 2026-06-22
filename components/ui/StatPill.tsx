// components/ui/StatPill.tsx
import { twMerge } from 'tailwind-merge'

interface StatPillProps {
  text: string
  color?: 'cyan' | 'orange'
  className?: string
}

export function StatPill({ text, color = 'cyan', className }: StatPillProps) {
  const baseClasses = "stat-pill inline-flex items-center px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] backdrop-blur-sm border"
  
  const colorClasses = color === 'cyan' 
    ? "border-cyan text-cyan bg-cyan/5" 
    : "border-orange text-orange bg-orange/5"

  return (
    <div className={twMerge(baseClasses, colorClasses, className)}>
      {text}
    </div>
  )
}
