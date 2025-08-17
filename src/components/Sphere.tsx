import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const BlochSphere = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      
      {/* Bloch Sphere */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial wireframe color="blue" />
      </mesh>

      {/* State Vector */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1, 32]} />
        <meshBasicMaterial color="red" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
};

export default BlochSphere;
