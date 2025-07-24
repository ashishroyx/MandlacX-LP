
import React from 'react';
import { MeshWobbleMaterial } from '@react-three/drei';

const GlowingDot = ({ position }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.04, 16, 16]} />
    <MeshWobbleMaterial attach="material" color="white" emissive="white" factor={2} speed={1} />
  </mesh>
);

export default GlowingDot;
