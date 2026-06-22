// components/canvas/shared/DigitalBlock.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface DigitalBlockProps {
  position: [number, number, number]
  scale?: number
  color?: string
  emissiveColor?: string
  emissiveIntensity?: number
  rotationSpeed?: number
}

/**
 * A single floating digital block — used as decoration around the main building.
 * Rotates slowly and bobs up and down to give the scene life.
 */
export function DigitalBlock({
  position,
  scale = 1,
  color = '#0A1A2E',
  emissiveColor = '#00F0FF',
  emissiveIntensity = 0.3,
  rotationSpeed = 0.3,
}: DigitalBlockProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const seed = position[0] * 1.7 + position[2] * 0.9 // Unique offset per block

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime() + seed
    // Gentle bob and rotate
    meshRef.current.position.y = position[1] + Math.sin(t * 0.6) * 0.1
    meshRef.current.rotation.y += rotationSpeed * 0.01
    meshRef.current.rotation.x += rotationSpeed * 0.005
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={emissiveColor}
        emissiveIntensity={emissiveIntensity}
        roughness={0.3}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  )
}
