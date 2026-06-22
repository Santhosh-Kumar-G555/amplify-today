// components/canvas/shared/ParticleField.tsx
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  scrollProgress: number
}

export function ParticleField({ scrollProgress }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const particlesCount = 2000

  // Generate random positions and velocities
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3)
    const vel = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20

      vel[i * 3] = (Math.random() - 0.5) * 0.01
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.01
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01
    }

    return [pos, vel]
  }, [particlesCount])

  useFrame((state) => {
    if (!pointsRef.current) return
    const positionsAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute

    for (let i = 0; i < particlesCount; i++) {
      // Move particles
      positionsAttr.array[i * 3 + 1] += velocities[i * 3 + 1] + scrollProgress * 0.02
      // Reset if out of bounds
      if (positionsAttr.array[i * 3 + 1] > 10) {
        positionsAttr.array[i * 3 + 1] = -10
      }
    }

    positionsAttr.needsUpdate = true
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}
