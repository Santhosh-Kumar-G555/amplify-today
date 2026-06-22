// components/canvas/Scene4_Network.tsx
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Scene4Props {
  localProgress: number // 0–1 within Scene 4
}

/**
 * Scene 4: The Network
 * Multiple satellite nodes orbit the central building — representing social
 * media, search platforms, and ad networks all connected.
 */
export function Scene4_Network({ localProgress }: Scene4Props) {
  const orbitGroupRef = useRef<THREE.Group>(null)

  const nodes = useMemo(() => [
    { radius: 3.5, speed: 0.4,  yOffset: 1.5,  phase: 0               },
    { radius: 5,   speed: 0.25, yOffset: 0.5,  phase: Math.PI / 2     },
    { radius: 4,   speed: 0.55, yOffset: 2,    phase: Math.PI         },
    { radius: 6,   speed: 0.2,  yOffset: -0.5, phase: (3 * Math.PI) / 2 },
    { radius: 4.5, speed: 0.35, yOffset: 1,    phase: Math.PI / 4     },
  ], [])

  useFrame((state) => {
    if (!orbitGroupRef.current) return
    orbitGroupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
  })

  return (
    <group ref={orbitGroupRef} visible={localProgress > 0.05}>
      {nodes.map(({ radius, speed, yOffset, phase }, i) => {
        const angle = phase // Static angle — group rotates as a whole
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        return (
          <mesh key={i} position={[x, yOffset, z]}>
            <icosahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial
              color="#FF6B00"
              emissive="#FF6B00"
              emissiveIntensity={2 * localProgress}
              roughness={0.2}
              metalness={0.8}
              transparent
              opacity={Math.min(localProgress * 2, 1)}
            />
          </mesh>
        )
      })}

      {/* Orange radial light burst for this scene */}
      <pointLight
        position={[0, 4, 0]}
        color="#FF6B00"
        intensity={4 * localProgress}
        distance={12}
      />
    </group>
  )
}
