// components/canvas/Scene2_Foundation.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Scene2Props {
  localProgress: number // 0–1 within Scene 2
}

/**
 * Scene 2: The Foundation
 * Rising platform elements appear beneath the building — like laying a foundation.
 * Cyan construction light sweeps in from above.
 */
export function Scene2_Foundation({ localProgress }: Scene2Props) {
  const platformRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!platformRef.current) return
    // Platform rises into frame as scene progresses
    const targetY = -3 + localProgress * 1.5
    platformRef.current.position.y = THREE.MathUtils.lerp(
      platformRef.current.position.y,
      targetY,
      0.05
    )
  })

  return (
    <group ref={platformRef} position={[0, -3, 0]}>
      {/* Foundation slab ring */}
      {[-1, 0, 1].map((offset) => (
        <mesh key={offset} position={[offset * 2.5, 0, 0]}>
          <boxGeometry args={[1.8, 0.1, 1.8]} />
          <meshStandardMaterial
            color="#001A2E"
            emissive="#003366"
            emissiveIntensity={0.3 * localProgress}
            roughness={0.4}
            metalness={0.8}
          />
        </mesh>
      ))}
      {/* Cyan edge glow strip */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[7, 0.02, 2]} />
        <meshStandardMaterial
          color="#00F0FF"
          emissive="#00F0FF"
          emissiveIntensity={2 * localProgress}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}
