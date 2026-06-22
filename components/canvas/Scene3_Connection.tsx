// components/canvas/Scene3_Connection.tsx
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Scene3Props {
  localProgress: number // 0–1 within Scene 3
}

/**
 * Scene 3: The Connection
 * Data streams (line segments) arc from the building outward — the moment
 * it connects to the internet / Google. Green "signal" pulses travel along them.
 */
export function Scene3_Connection({ localProgress }: Scene3Props) {
  const streamRef = useRef<THREE.Group>(null)
  const pulseRef  = useRef<THREE.Mesh>(null)

  // Pre-compute arc endpoints
  const arcs = useMemo(() => [
    { from: new THREE.Vector3(0, 2, 0), to: new THREE.Vector3(4, 5, -3)  },
    { from: new THREE.Vector3(0, 2, 0), to: new THREE.Vector3(-5, 4, -2) },
    { from: new THREE.Vector3(0, 2, 0), to: new THREE.Vector3(3, 6, 2)   },
  ], [])

  useFrame((state) => {
    if (!pulseRef.current) return
    const t = (state.clock.getElapsedTime() * 0.5) % 1
    // Pulse travels from origin outward
    pulseRef.current.position.set(
      arcs[0].to.x * t * localProgress,
      2 + arcs[0].to.y * t * localProgress,
      arcs[0].to.z * t * localProgress
    )
  })

  return (
    <group ref={streamRef} visible={localProgress > 0.05}>
      {/* Travelling pulse sphere */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial
          color="#00FF88"
          emissive="#00FF88"
          emissiveIntensity={3}
        />
      </mesh>

      {/* Static endpoint nodes */}
      {arcs.map(({ to }, i) => (
        <mesh key={i} position={to.toArray() as [number, number, number]}>
          <octahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial
            color="#00FF88"
            emissive="#00FF88"
            emissiveIntensity={1.5 * localProgress}
            transparent
            opacity={localProgress}
          />
        </mesh>
      ))}

      {/* Ambient green fill light for this scene */}
      <pointLight
        position={[0, 6, 0]}
        color="#00FF88"
        intensity={2 * localProgress}
        distance={15}
      />
    </group>
  )
}
