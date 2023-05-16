import React from 'react'
import { Canvas } from '@react-three/fiber'
import { CanvasContainer } from './styles'
import { HeroScene } from './HeroScene'

export const HeroCanvas = () => {
  return (
    <CanvasContainer>
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
          position: [2, 0.4, 0.5],
          rotation: [-Math.PI * 2, Math.PI * 0.3, Math.PI * 1.1],
        }}
        legacy={true}
      >
        <HeroScene />
      </Canvas>
    </CanvasContainer>
  )
}
