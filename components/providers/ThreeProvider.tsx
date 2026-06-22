// components/providers/ThreeProvider.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ThreeContextValue {
  /** Whether the WebGL canvas has fully initialized */
  canvasReady: boolean
  setCanvasReady: (ready: boolean) => void
  /** Current WebGL renderer info (useful for debugging) */
  rendererInfo: {
    calls: number
    triangles: number
    points: number
  } | null
  setRendererInfo: (info: ThreeContextValue['rendererInfo']) => void
}

const ThreeContext = createContext<ThreeContextValue>({
  canvasReady: false,
  setCanvasReady: () => {},
  rendererInfo: null,
  setRendererInfo: () => {},
})

interface ThreeProviderProps {
  children: ReactNode
}

/**
 * Provides Three.js/R3F canvas state to the component tree.
 * Components can check `canvasReady` before rendering 3D-dependent UI
 * (e.g. defer showing the loading screen until canvas mounts).
 *
 * Usage:
 *   const { canvasReady } = useThreeContext()
 */
export function ThreeProvider({ children }: ThreeProviderProps) {
  const [canvasReady, setCanvasReady]     = useState(false)
  const [rendererInfo, setRendererInfo]   = useState<ThreeContextValue['rendererInfo']>(null)

  return (
    <ThreeContext.Provider value={{ canvasReady, setCanvasReady, rendererInfo, setRendererInfo }}>
      {children}
    </ThreeContext.Provider>
  )
}

export function useThreeContext(): ThreeContextValue {
  return useContext(ThreeContext)
}
