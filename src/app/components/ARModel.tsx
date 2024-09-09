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
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={gltf.scene} />
    </Canvas>
  );
};

export default ARModel;
