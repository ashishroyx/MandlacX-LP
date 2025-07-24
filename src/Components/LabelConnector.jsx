import React from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import GlowingDot from './GlowingDot';

const LabelConnector = ({ point1, point2, labelText }) => {
  // Create 2 straight line segments
  const midPoint = new THREE.Vector3(
    point1.x,
    point1.y + (point2.y - point1.y) / 2,
    point1.z
  );

  const linePoints = [point1, midPoint, point2];
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);

  return (
    <>
      {/* Line */}
      <line>
        <bufferGeometry attach="geometry" {...lineGeometry} />
        <lineBasicMaterial attach="material" color="white" linewidth={2} />
      </line>

      {/* Glowing Dot */}
      <GlowingDot position={point1} />

      {/* Floating Label */}
      <Html position={[0.5, 2.3, 0]}>
        <div
  style={{
    width: '337px',
    height: '150px',
    background: 'linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(10,10,10,0.95) 100%)',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#ffffff',
    fontSize: '15px',
    fontFamily: 'Inter, sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    backdropFilter: 'blur(4px)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: 600,
      fontSize: '16px',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      paddingBottom: '6px',
    }}
  >
    <span>Key Specifications</span>
    <div
      style={{
        width: '4px',
        height: '20px',
        backgroundColor: '#FFD400',
        borderRadius: '2px',
      }}
    />
  </div>

  <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: '1.6', listStyleType: 'disc' }}>
    <li>USB 3.0 Support</li>
    <li>16 GB RAM</li>
    <li>A7 Cortex Processor</li>
    <li>Three multi-axis surveillance lenses</li>
  </ul>
</div>

      </Html>
      <Html position={[3.3, 1.8, 3]}>
        <div
  style={{
    width: '337px',
    height: '150px',
    background: 'linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(10,10,10,0.95) 100%)',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#ffffff',
    fontSize: '15px',
    fontFamily: 'Inter, sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    backdropFilter: 'blur(4px)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: 600,
      fontSize: '16px',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      paddingBottom: '6px',
    }}
  >
    <span>On-Device Intelligence</span>
    <div
      style={{
        width: '4px',
        height: '20px',
        backgroundColor: '#FFD400',
        borderRadius: '2px',
      }}
    />
  </div>

  <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: '1.6', listStyleType: 'disc'}}>
    <li>
      Engineered to deliver intelligent surveillance without 
      relying on the cloud, it gives you control, speed, and reliability right where you need it.
    </li>
  
  </ul>
</div>

      </Html>
      <Html position={[-4.4, 0, 0]}>
        <div
  style={{
    width: '337px',
    height: '150px',
    background: 'linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(10,10,10,0.95) 100%)',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#ffffff',
    fontSize: '15px',
    fontFamily: 'Inter, sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    backdropFilter: 'blur(4px)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: 600,
      fontSize: '16px',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      paddingBottom: '6px',
    }}
  >
    <span>MandlacX Edge Processor</span>
    <div
      style={{
        width: '4px',
        height: '20px',
        backgroundColor: '#FFD400',
        borderRadius: '2px',
      }}
    />
  </div>

  <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: '1.6', listStyleType: 'disc'}}>
    <li>
     A multi-domain, first-generation AI-powered device designed for real-time threat detection
    </li>
  
  </ul>
</div>

      </Html>
      <Html position={[-4, -3.55, 0]}>
        <div
  style={{
    width: '337px',
    height: '170px',
    background: 'linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(10,10,10,0.95) 100%)',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#ffffff',
    fontSize: '15px',
    fontFamily: 'Inter, sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    backdropFilter: 'blur(4px)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: 600,
      fontSize: '16px',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      paddingBottom: '6px',
    }}
  >
    <span>Real-Time Threat Detection</span>
    <div
      style={{
        width: '4px',
        height: '20px',
        backgroundColor: '#FFD400',
        borderRadius: '2px',
      }}
    />
  </div>

  <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: '1.6', listStyleType: 'disc' }}>
    Detects
    <li>Intrusions</li>
    <li>Firearms & Sharp Object</li>
    <li>Human Fall</li>
    <li>Unusual or Aggressive Motion</li>
  </ul>
</div>

      </Html>
    </>
  );
};

export default LabelConnector;
