import { Environment, useGLTF, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

interface TechIconsProps {
  model: {
    name: string;
    modelPath: string;
    scale: number;
    rotation: [number, number, number];
  };
}

const TechIcons = ({ model }: TechIconsProps) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh && child.name === "Object_5") {
          (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {/* environment creates a nice lighting setup for the 3D model especially with reflective materials */}
      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      {/* float is imported from drei and adds a floating animation to the 3D model */}
      <Float speed={5.5}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcons;
