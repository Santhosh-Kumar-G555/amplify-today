// components/canvas/shared/NetworkNode.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface NetworkNodeProps {
  position: [number, number, number]
  color?: string
  size?: number
  pulseSpeed?: number
}

/**
 * A small glowing network node — used to represent connection endpoints
 * in Scenes 3–5. Pulses with emissive intensity to suggest live data flow.
 */
export function NetworkNode({
  position,
  color = '#00F0FF',
  size = 0.12,
  pulseSpeed = 1.5,
}: NetworkNodeProps) {
  const meshRef  = useRef<THREE.Mesh>(null)
  const glowRef  = useRef<THREE.Mesh>(null)
  const seed = position[0] * 2.3 + position[2] * 1.1

  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return
    const t = state.clock.getElapsedTime() * pulseSpeed + seed
    const pulse = (Math.sin(t) + 1) / 2 // 0 → 1

    // Core pulse
    ;(meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
      1 + pulse * 3

    // Outer glow scale
    glowRef.current.scale.setScalar(1 + pulse * 0.5)
    ;(glowRef.current.material as THREE.MeshStandardMaterial).opacity =
      0.15 + pulse * 0.25
  })

  const threeColor = new THREE.Color(color)

  return (
    <group position={position}>
      {/* Core icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={threeColor}
          emissiveIntensity={1}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Outer glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 2.5, 12, 12]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}
