import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

function ProductModel() {
  const { scene } = useGLTF('/Models/Product1.glb');
  const modelRef = useRef();

  return (
    <Center>
      <primitive object={scene} scale={18.5} ref={modelRef} rotation={[0,0,0]} />
    </Center>
  );
}

export default function Model1() {
  return (
    <div className="w-85 h-85 -mt-13">
      <Canvas key="model-view-2" orthographic camera={{ zoom: 140, position: [-11, 11, 11] }}>
        <ambientLight intensity={18} />
        <directionalLight position={[30, 20, 20]} />
        <Suspense fallback={null}>
          <ProductModel />
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} />
      </Canvas>
    </div>
  );
}