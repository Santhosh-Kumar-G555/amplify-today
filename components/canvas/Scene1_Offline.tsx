// components/canvas/Scene1_Offline.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Scene1Props {
  localProgress: number // 0–1 within Scene 1
}

/**
 * Scene 1: The Offline Entity
 * A single dim, cold storefront — isolated, no connections, no light reaching it.
 * As localProgress increases, it begins to flicker as if about to die.
 */
export function Scene1_Offline({ localProgress }: Scene1Props) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    // Eerie slow rock — like a forgotten sign
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y = Math.sin(t * 0.08) * 0.04
  })

  // Flicker intensity ramps up towards end of scene (approaching "crash")
  const flickerIntensity = localProgress > 0.7
    ? Math.sin(Date.now() * 0.02) * 0.5 + 0.5
    : 0

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Dim overhead light — barely alive */}
      <pointLight
        position={[0, 4, 1]}
        color="#334466"
        intensity={0.6 - flickerIntensity * 0.3}
        distance={10}
      />
      {/* Ground fog plane suggestion */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#060608"
          roughness={1}
          metalness={0}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}
