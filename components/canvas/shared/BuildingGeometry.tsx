// components/canvas/shared/BuildingGeometry.tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface BuildingProps {
  scrollProgress: number
}

export function BuildingGeometry({ scrollProgress }: BuildingProps) {
  const groupRef = useRef<THREE.Group>(null)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)
  
  useFrame((state) => {
    if (!groupRef.current || !materialRef.current) return
    
    // Slow ambient rotation
    groupRef.current.rotation.y += 0.001
    
    // Material shifts based on scroll
    if (scrollProgress < 0.2) {
      // Scene 1: Dim, dead storefront
      materialRef.current.color.setHex(0x222233)
      materialRef.current.emissive.setHex(0x000000)
      materialRef.current.emissiveIntensity = 0
    } else if (scrollProgress >= 0.2 && scrollProgress < 0.8) {
      // Scenes 2-4: The build and connection (Cyan to Orange)
      materialRef.current.color.setHex(0x0A1A2A)
      materialRef.current.emissive.setHex(0x001533)
      materialRef.current.emissiveIntensity = 0.5
    } else {
      // Scene 5: Radiant Hub (White Hot)
      materialRef.current.emissive.setHex(0xFFFFFF)
      materialRef.current.emissiveIntensity = 2.0
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Base Slab */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.3, 2]} />
        <meshStandardMaterial 
          ref={materialRef}
          roughness={0.3} 
          metalness={0.7} 
        />
      </mesh>
      {/* Main Tower */}
      <mesh position={[0, 1.4, 0]}>
        <boxGeometry args={[1.4, 2.5, 1.4]} />
        <meshStandardMaterial 
          roughness={0.3} 
          metalness={0.7}
          color="#0A1A2A"
        />
      </mesh>
      {/* Roof Element */}
      <mesh position={[0, 2.85, 0]}>
        <boxGeometry args={[0.8, 0.4, 0.8]} />
        <meshStandardMaterial 
          roughness={0.3} 
          metalness={0.7}
          color="#0A1A2A"
        />
      </mesh>
      {/* Antenna */}
      <mesh position={[0, 3.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
        <meshStandardMaterial 
          color="#00F0FF"
          emissive="#00F0FF"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  )
}
