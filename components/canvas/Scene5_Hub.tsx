// components/canvas/Scene5_Hub.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Scene5Props {
  localProgress: number // 0–1 within Scene 5
}

/**
 * Scene 5: The Always-On Hub
 * The building pulses with white-hot energy. Rings of light expand outward
 * like a digital heartbeat — the brand is alive, found, and thriving.
 */
export function Scene5_Hub({ localProgress }: Scene5Props) {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    const expandAndFade = (
      ref: React.RefObject<THREE.Mesh | null>,
      phaseOffset: number
    ) => {
      if (!ref.current) return
      const phase = ((t * 0.5 + phaseOffset) % 1)
      const scale = 1 + phase * 6 * localProgress
      ref.current.scale.setScalar(scale)
      ;(ref.current.material as THREE.MeshStandardMaterial).opacity =
        (1 - phase) * 0.6 * localProgress
    }

    expandAndFade(ring1Ref, 0)
    expandAndFade(ring2Ref, 0.33)
    expandAndFade(ring3Ref, 0.66)
  })

  const ringMaterial = (
    <meshStandardMaterial
      color="#FFFFFF"
      emissive="#FFFFFF"
      emissiveIntensity={2}
      transparent
      opacity={0}
      side={THREE.DoubleSide}
    />
  )

  return (
    <group visible={localProgress > 0.05}>
      {/* Expanding pulse rings */}
      <mesh ref={ring1Ref} position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1, 64]} />
        {ringMaterial}
      </mesh>
      <mesh ref={ring2Ref} position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1, 64]} />
        {ringMaterial}
      </mesh>
      <mesh ref={ring3Ref} position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1, 64]} />
        {ringMaterial}
      </mesh>

      {/* White radiance core */}
      <pointLight
        position={[0, 2, 0]}
        color="#FFFFFF"
        intensity={8 * localProgress}
        distance={20}
      />
      <pointLight
        position={[0, 2, 0]}
        color="#00F0FF"
        intensity={3 * localProgress}
        distance={30}
      />
    </group>
  )
}
