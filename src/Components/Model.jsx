import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import LabelConnector from './LabelConnector';
import * as THREE from 'three';

function ProductModel() {
  const { scene } = useGLTF('/Models/Product.glb');
  const modelRef = useRef();


  return (
    <Center>
      <primitive object={scene} scale={18.5} ref={modelRef} />
    </Center>
  );
}

export default function Model() {
  return (
    <div className="w-full h-177 -mt-30">
      <Canvas key="model-view-1" orthographic camera={{ zoom: 140, position: [11, 11, 11] }}>
        <ambientLight intensity={18} />
        <directionalLight position={[30, 20, 20]} />
        <Suspense fallback={null}>
          <ProductModel />
          <LabelConnector
  point1={new THREE.Vector3(0.3, 0.5, 0.4)}      
  point2={new THREE.Vector3(1.5, 1.3, 0)}      
  labelText="Key Specifications"
/>
          <LabelConnector
  point1={new THREE.Vector3(1.5, 1, 1)}      
  point2={new THREE.Vector3(1.5, -1, -1)}      
  labelText="Key Specifications"
/>
          <LabelConnector
  point1={new THREE.Vector3(-0.3,0.5 , 0.5)}      
  point2={new THREE.Vector3(-1.7, 1.2, 2.6)}      
  labelText="Key Specifications"
/>
          <LabelConnector
  point1={new THREE.Vector3(1.4,1 , 2)}      
  point2={new THREE.Vector3(-1, -0.5, 2.8)}      
  labelText="Key Specifications"
/>

          
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
