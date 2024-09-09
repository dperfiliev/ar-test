import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ThreeDViewerProps {
  modelUrl: string;
}

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ modelUrl }) => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      scene.add(gltf.scene);
      gltf.scene.scale.set(2, 2, 2);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, [modelUrl]);

  return null;
};

export default ThreeDViewer;
