// components/canvas/SceneController.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { CameraRig }         from './shared/CameraRig'
import { ParticleField }     from './shared/ParticleField'
import { BuildingGeometry }  from './shared/BuildingGeometry'
import { DigitalBlock }      from './shared/DigitalBlock'
import { NetworkNode }       from './shared/NetworkNode'
import { GlowPathway }       from './shared/GlowPathway'
import { PostProcessing }    from './PostProcessing'
import { Scene1_Offline }    from './Scene1_Offline'
import { Scene2_Foundation } from './Scene2_Foundation'
import { Scene3_Connection } from './Scene3_Connection'
import { Scene4_Network }    from './Scene4_Network'
import { Scene5_Hub }        from './Scene5_Hub'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useSceneProgress }  from '@/hooks/useSceneProgress'
import { mapRange, clamp }   from '@/lib/threeUtils'

function SceneLighting({ progress }: { progress: number }) {
  return (
    <>
      <ambientLight intensity={Math.max(0.1, progress)} color="#1A1A2E" />
      <pointLight position={[2, 4, 2]}  color="#2233AA" intensity={progress < 0.2 ? 0.8 : 0} />
      <pointLight position={[0, 8, 0]}  color="#00F0FF" intensity={progress >= 0.2 && progress < 0.4 ? 2.5 : 0} />
      <pointLight position={[0, 10, 0]} color="#00FF88" intensity={progress >= 0.4 && progress < 0.6 ? 3.0 : 0} />
      <pointLight position={[0, 5, 0]}  color="#FF6B00" intensity={progress >= 0.6 && progress < 0.8 ? 4.0 : 0} />
      <pointLight position={[0, 3, 0]}  color="#FFFFFF"  intensity={progress >= 0.8 ? 8.0 : 0} />
    </>
  )
}

// Ambient floating DigitalBlocks around the building — always visible
function AmbientBlocks({ progress }: { progress: number }) {
  const emissive = progress < 0.2 ? '#001122' : progress >= 0.8 ? '#FFFFFF' : '#00F0FF'
  const intensity = clamp(progress * 2, 0, 1.5)
  return (
    <>
      <DigitalBlock position={[-3, 0.5, -2]}  scale={0.25} emissiveColor={emissive} emissiveIntensity={intensity} />
      <DigitalBlock position={[3.5, 1, -1.5]} scale={0.18} emissiveColor={emissive} emissiveIntensity={intensity} rotationSpeed={0.5} />
      <DigitalBlock position={[-2, 2, 1.5]}   scale={0.2}  emissiveColor={emissive} emissiveIntensity={intensity} rotationSpeed={0.2} />
      <DigitalBlock position={[2.5, 0.2, 2]}  scale={0.15} emissiveColor={emissive} emissiveIntensity={intensity} rotationSpeed={0.4} />
    </>
  )
}

// GlowPathways + NetworkNodes — appear from Scene 3 onward
function ConnectionLayer({ progress }: { progress: number }) {
  if (progress < 0.38) return null
  const opacity = clamp(mapRange(progress, 0.38, 0.55, 0, 1), 0, 1)
  return (
    <>
      <GlowPathway from={[0,2,0]} to={[5, 5,-3]}   color="#00FF88" speed={0.8} opacity={opacity} />
      <GlowPathway from={[0,2,0]} to={[-4,4,-2]}   color="#00F0FF" speed={1.1} opacity={opacity} />
      <GlowPathway from={[0,2,0]} to={[3, 6, 2]}   color="#00FF88" speed={0.6} opacity={opacity} />
      <NetworkNode position={[5,  5, -3]} color="#00FF88" size={0.14} />
      <NetworkNode position={[-4, 4, -2]} color="#00F0FF" size={0.12} />
      <NetworkNode position={[3,  6,  2]} color="#00FF88" size={0.16} />
    </>
  )
}

export function SceneController() {
  const progress                    = useScrollProgress()
  const { activeScene, localProgress } = useSceneProgress()

  // Fog clears as the world comes online — uses threeUtils.mapRange
  const fogDensity = clamp(mapRange(progress, 0, 1, 0.08, 0.004), 0.004, 0.08)

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        zIndex: 0,
        background: '#000000',
        display: 'block',
      }}
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
      shadows
      camera={{ position: [2, 3, 8], fov: 55, near: 0.1, far: 500 }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <CameraRig />
        <SceneLighting progress={progress} />
        <ParticleField scrollProgress={progress} />

        {/* Core building — always visible, state driven by scroll */}
        <BuildingGeometry scrollProgress={progress} />

        {/* Ambient decorative blocks */}
        <AmbientBlocks progress={progress} />

        {/* Per-scene specific geometry */}
        <Scene1_Offline    localProgress={activeScene === 1 ? localProgress : 0} />
        <Scene2_Foundation localProgress={activeScene === 2 ? localProgress : 0} />
        <Scene3_Connection localProgress={activeScene === 3 ? localProgress : 0} />
        <Scene4_Network    localProgress={activeScene === 4 ? localProgress : 0} />
        <Scene5_Hub        localProgress={activeScene === 5 ? localProgress : 0} />

        {/* Connection network — appears from Scene 3 onward */}
        <ConnectionLayer progress={progress} />

        <PostProcessing />
        <fogExp2 attach="fog" color="#000000" density={fogDensity} />
      </Suspense>
    </Canvas>
  )
}
