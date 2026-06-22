// components/canvas/shared/ParticleField.tsx
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleProps {
  scrollProgress: number
}

export function ParticleField({ scrollProgress }: ParticleProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 800
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Random positions within a bounding box
      positions[i * 3] = (Math.random() - 0.5) * 20     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 // z
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    
    // Slow upward drift
    pointsRef.current.position.y += delta * 0.2
    if (pointsRef.current.position.y > 10) {
      pointsRef.current.position.y = -10
    }
    
    // Slight rotation
    pointsRef.current.rotation.y += delta * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00F0FF"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
