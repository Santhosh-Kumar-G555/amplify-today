// components/ui/CTAButton.tsx
'use client'

import { twMerge } from 'tailwind-merge'

interface CTAButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  arrow?: boolean
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  arrow = true,
}: CTAButtonProps) {
  const base =
    'inline-flex items-center gap-3 font-syne font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]'

  const variants = {
    primary:
      'bg-orange text-white px-8 py-4 hover:bg-[#FF8C00] hover:shadow-[0_0_30px_rgba(255,107,0,0.4)]',
    secondary:
      'bg-transparent text-cyan border border-cyan px-8 py-4 hover:bg-cyan/10 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]',
    ghost:
      'bg-transparent text-white border border-white/20 px-8 py-4 hover:border-white/60',
  }

  const classes = twMerge(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow && <span aria-hidden="true">→</span>}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </button>
  )
}
