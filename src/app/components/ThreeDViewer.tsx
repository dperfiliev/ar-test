import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';

const Model = ({ modelUrl }) => {
  const model = useLoader(GLTFLoader, modelUrl);

  return <primitive object={model.scene} />;
};

const ThreeDViewer = ({ modelUrl }) => (
  <Canvas>
    <Suspense fallback={null}>
      <Model modelUrl={modelUrl} />
    </Suspense>
  </Canvas>
);

export default ThreeDViewer;
