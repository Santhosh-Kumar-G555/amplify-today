// components/ui/ChapterLabel.tsx
import { twMerge } from 'tailwind-merge'

interface ChapterLabelProps {
  text: string
  colorClass?: string
  className?: string
}

export function ChapterLabel({ text, colorClass = "text-muted", className }: ChapterLabelProps) {
  return (
    <div className={twMerge("font-mono text-xs tracking-[0.3em] uppercase", colorClass, className)}>
      {text}
    </div>
  )
}
