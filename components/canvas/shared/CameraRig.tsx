// components/canvas/shared/CameraRig.tsx
'use client'

import { useFrame } from '@react-three/fiber'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { CAMERA_KEYFRAMES } from '@/lib/constants'
import * as THREE from 'three'

function lerpKeyframes(progress: number, keyframes: typeof CAMERA_KEYFRAMES) {
  const count = keyframes.length
  const scaled = progress * (count - 1)
  const index = Math.floor(scaled)
  const t = scaled - index
  const current = keyframes[Math.min(index, count - 1)]
  const next = keyframes[Math.min(index + 1, count - 1)]
  
  return {
    position: new THREE.Vector3(...current.position).lerp(new THREE.Vector3(...next.position), t),
    target: new THREE.Vector3(...current.target).lerp(new THREE.Vector3(...next.target), t),
    fov: THREE.MathUtils.lerp(current.fov, next.fov, t)
  }
}

export function CameraRig() {
  const scrollProgress = useScrollProgress()
  
  useFrame((state) => {
    const { position, target, fov } = lerpKeyframes(scrollProgress, CAMERA_KEYFRAMES)
    
    // Smooth damping — camera doesn't snap, it glides
    state.camera.position.lerp(position, 0.05)
    
    // Type assertion for fov since standard Camera type doesn't have it, but PerspectiveCamera does
    const perspectiveCamera = state.camera as THREE.PerspectiveCamera
    perspectiveCamera.fov = THREE.MathUtils.lerp(perspectiveCamera.fov, fov, 0.05)
    perspectiveCamera.updateProjectionMatrix()
    
    state.camera.lookAt(target)
    
    // Subtle ambient drift — never fully still, like breathing
    const time = state.clock.getElapsedTime()
    state.camera.position.y += Math.sin(time * 0.5) * 0.02
    state.camera.position.x += Math.cos(time * 0.3) * 0.01
  })
  
  return null
}
