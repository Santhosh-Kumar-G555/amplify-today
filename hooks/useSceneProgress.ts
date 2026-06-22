// hooks/useSceneProgress.ts
import { useMemo } from 'react'
import { useScrollProgress } from './useScrollProgress'
import { SCENE_RANGES } from '@/lib/constants'

interface SceneProgress {
  /** Active scene index 1–5 */
  activeScene: 1 | 2 | 3 | 4 | 5
  /** Progress within the active scene, normalized 0–1 */
  localProgress: number
}

/**
 * Returns the currently active scene and the normalised local progress
 * within that scene (0 = scene just started, 1 = scene finished).
 */
export function useSceneProgress(): SceneProgress {
  const globalProgress = useScrollProgress()

  return useMemo(() => {
    const scenes = Object.entries(SCENE_RANGES) as [
      keyof typeof SCENE_RANGES,
      [number, number]
    ][]

    for (let i = 0; i < scenes.length; i++) {
      const [, [start, end]] = scenes[i]
      if (globalProgress >= start && globalProgress <= end) {
        const localProgress = (globalProgress - start) / (end - start)
        return {
          activeScene: (i + 1) as 1 | 2 | 3 | 4 | 5,
          localProgress: Math.min(Math.max(localProgress, 0), 1),
        }
      }
    }

    // Fallback — past the end of scroll
    return { activeScene: 5, localProgress: 1 }
  }, [globalProgress])
}
