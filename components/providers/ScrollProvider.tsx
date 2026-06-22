// components/providers/ScrollProvider.tsx
'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useSceneProgress } from '@/hooks/useSceneProgress'

interface ScrollContextValue {
  /** Global scroll progress: 0 (top) → 1 (bottom) */
  globalProgress: number
  /** Currently active scene: 1–5 */
  activeScene: 1 | 2 | 3 | 4 | 5
  /** Progress within the active scene: 0 → 1 */
  localProgress: number
}

const ScrollContext = createContext<ScrollContextValue>({
  globalProgress: 0,
  activeScene: 1,
  localProgress: 0,
})

interface ScrollProviderProps {
  children: ReactNode
}

/**
 * Provides scroll and scene progress to the entire component tree.
 * Wrap the root layout in this provider to avoid prop-drilling scroll values.
 *
 * Usage:
 *   const { globalProgress, activeScene, localProgress } = useScrollContext()
 */
export function ScrollProvider({ children }: ScrollProviderProps) {
  const globalProgress = useScrollProgress()
  const { activeScene, localProgress } = useSceneProgress()

  return (
    <ScrollContext.Provider value={{ globalProgress, activeScene, localProgress }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScrollContext(): ScrollContextValue {
  return useContext(ScrollContext)
}
