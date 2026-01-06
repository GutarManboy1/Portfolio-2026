import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import SplineScene from "./Computer";

const HeroExperience = () => {
  const isTablet = useMediaQuery ({ query: "(min-width: 1024px)" });

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Spline Scene */}
      <SplineScene />

      {/* React Three Fiber Canvas */}
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* 3D content goes here */}
        <ambientLight intensity={0.5} color="#1a1a40" />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls
          enableZoom={false}
          enablePan={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
        <mesh>
          
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
