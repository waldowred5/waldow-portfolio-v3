import React from 'react';
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';

export const MacbookController = () => {
  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const changeColor = (event, color) => {
    event.eventObject.color =
      new THREE.Color(color);
  };

  const goToSiteText = '< GO TO SITE';

  return <>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        touchAction: 'none',
      }}
      // colorManagement={false}
      onCreated={({ gl }) => gl.toneMapping = THREE.NoToneMapping}
      linear
    >
      {/* Background */}
      <color
        args={['#071D3A']}
        attach="background"
      />

      {/* Environment */}
      <Environment preset="city"/>

      {/* Computer*/}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{
          mass: 2,
          tension: 400,
        }}
        snap={{
          mass: 4,
          tension: 400,
        }}
      >
        <Float
          rotationIntensity={0.4}
        >
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={0.8}
            position={[2, 0.75, 0.25]}
            rotation-y={-1.45}
            maxWidth={2}
            textAlign="center"
            color={'#07B8ED'}
          >
            DANIEL WALDOW
          </Text>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={0.35}
            position={[2, -0.45, 0.25]}
            rotation-y={-1.45}
            textAlign="center"
            color={'#38E000'}
            onClick={() => handleClick()}
            onPointerEnter={(event) => changeColor(event, '#C56CEF')}
            onPointerLeave={(event) => changeColor(event, '#38E000')}
            text={goToSiteText}
          />
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={15}
            color={'#38E000'}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive
            object={computer.scene}
            position-y={-1.2}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe
                src={'/'}
                style={{
                  width: '1024px',
                  height: '670px',
                  border: 'none',
                  borderRadius: '20px',
                  background: '#000',
                }}
              />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      <ContactShadows
        position-y={-1.4}
        opacity={0.4}
        scale={5}
        blur={2.4}
      />
    </Canvas>
  </>;
};
