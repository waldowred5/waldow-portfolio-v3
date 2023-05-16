import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { CanvasContainer } from './styles'
import * as THREE from 'three'
import waterVertexShader from '../../../assets/shaders/water/vertex.glsl'
import waterFragmentShader from '../../../assets/shaders/water/fragment.glsl'
import { OrbitControls } from '@react-three/drei'

export const HeroScene = () => {
  useFrame(({ clock }) => {
    waterMaterial.uniforms.uTime.value = clock.getElapsedTime()
  })

  const waterMaterial = new THREE.ShaderMaterial({
    vertexShader: waterVertexShader,
    fragmentShader: waterFragmentShader,
    uniforms: {
      // Time
      uTime: { value: 0 },

      // Big Wave Elevation
      uBigWavesElevation: { value: 0.2 },
      uBigWavesFrequency: { value: new THREE.Vector2(1.0, 1.15) },
      uBigWavesSpeed: { value: 0.6 },

      // Small Wave Elevation
      uSmallWavesElevation: { value: 0.125 },
      uSmallWavesFrequency: { value: 2.0 },
      uSmallWavesSpeed: { value: 0.2 },
      uSmallWavesIterations: { value: 4.0 },

      // Color
      uColorOffset: { value: 0.08 },
      uColorMultiplier: { value: 4.8 },
      uDepthColor: { value: new THREE.Color('#6D00C7') },
      uSurfaceColor: { value: new THREE.Color('#00FFFB') },
    },
  })

  return (
    <>
      <OrbitControls/>
      <mesh
        rotation={[-Math.PI * 0.5, 0, 0]}
      >
        <planeGeometry
          args={[4, 8, 512, 512]}
        />
        <primitive object={waterMaterial}/>
      </mesh>
    </>
  )
}
