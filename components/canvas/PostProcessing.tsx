// components/canvas/PostProcessing.tsx
'use client'

import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import * as THREE from 'three'

export function PostProcessing() {
  const progress = useScrollProgress()
  
  // Bloom intensity scales with scene — most intense in Scene 5
  const bloomIntensity = THREE.MathUtils.lerp(0.3, 3.0, progress)
  
  // Chromatic aberration strongest in Scene 1 (glitchy offline world) -> fades out
  const chromaticOffset = THREE.MathUtils.lerp(0.005, 0.0005, progress)
  
  return (
    <EffectComposer disableNormalPass>
      <Bloom
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        intensity={bloomIntensity}
        mipmapBlur
      />
      <ChromaticAberration
        offset={new THREE.Vector2(chromaticOffset, chromaticOffset)}
        blendFunction={BlendFunction.NORMAL}
        radialModulation={false}
        modulationOffset={0}
      />
      <Noise
        opacity={0.03}
        blendFunction={BlendFunction.ADD}
      />
      <Vignette
        offset={0.3}
        darkness={0.6}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}
