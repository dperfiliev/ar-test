// components/ARModel.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ARModelProps {
  modelUrl: string;
}

const ARModel: React.FC<ARModelProps> = ({ modelUrl }) => {
  const gltf = useLoader(GLTFLoader, modelUrl);

  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={gltf.scene} />
    </Canvas>
  );
};

export default ARModel;
