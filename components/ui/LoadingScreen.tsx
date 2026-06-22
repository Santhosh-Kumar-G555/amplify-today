// components/ui/LoadingScreen.tsx
'use client'

import { useProgress } from '@react-three/drei'
import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

export function LoadingScreen() {
  const { progress, active } = useProgress()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Dismiss if progress hits 100% OR if no assets are loading (progress=0, active=false after a delay)
    // This handles the case where there are no 3D assets to load (procedural geometry only)
    if (progress === 100) {
      const timer = setTimeout(() => setVisible(false), 600)
      return () => clearTimeout(timer)
    }
  }, [progress])

  useEffect(() => {
    // Fallback: if no assets are ever loaded (active stays false, progress stays 0),
    // dismiss after 2.5s so the user isn't stuck on the loading screen
    const fallback = setTimeout(() => {
      setVisible(false)
    }, 2500)
    return () => clearTimeout(fallback)
  }, [])

  if (!visible) return null

  return (
    <div className={twMerge(
      "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void transition-opacity duration-700",
      progress === 100 ? "opacity-0 pointer-events-none" : "opacity-100"
    )}>
      <div className="font-bebas text-4xl text-white tracking-[0.3em] mb-4">
        AMPLIFY TODAY
      </div>
      <div className="w-64 h-[2px] bg-smoke relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-cyan transition-all duration-300 ease-out"
          style={{ width: `${Math.max(progress, active ? 5 : 80)}%` }}
        />
      </div>
      <div className="font-mono text-xs text-muted mt-4 tracking-widest">
        INITIALISING DIGITAL EVOLUTION... {Math.round(progress)}%
      </div>
    </div>
  )
}
