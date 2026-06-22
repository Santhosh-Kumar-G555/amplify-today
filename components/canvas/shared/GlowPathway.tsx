// components/canvas/shared/GlowPathway.tsx
'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface GlowPathwayProps {
  from: [number, number, number]
  to:   [number, number, number]
  color?: string
  speed?: number
  opacity?: number
}

/**
 * A glowing line segment between two 3D points with an animated pulse travelling
 * along its length. Used to visualise data connections between nodes.
 */
export function GlowPathway({
  from,
  to,
  color = '#00F0FF',
  speed = 1,
  opacity = 0.6,
}: GlowPathwayProps) {
  const pulseRef = useRef<THREE.Mesh>(null)

  // Build line geometry between the two points
  const lineGeometry = useMemo(() => {
    const points = [new THREE.Vector3(...from), new THREE.Vector3(...to)]
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [from, to])

  const fromVec = useMemo(() => new THREE.Vector3(...from), [from])
  const toVec   = useMemo(() => new THREE.Vector3(...to),   [to])

  useFrame((state) => {
    if (!pulseRef.current) return
    // t oscillates 0 → 1 repeatedly
    const t = ((state.clock.getElapsedTime() * speed) % 1)
    pulseRef.current.position.lerpVectors(fromVec, toVec, t)
  })

  return (
    <group>
      {/* Static pathway line */}
      <line>
        <primitive object={lineGeometry} attach="geometry" />
        <lineBasicMaterial
          color={color}
          transparent
          opacity={opacity * 0.4}
          linewidth={1}
        />
      </line>

      {/* Travelling pulse along the pathway */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.05, 6, 6]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={3}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  )
}
