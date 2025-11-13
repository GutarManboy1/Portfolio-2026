import { Canvas } from '@react-three/fiber'
import React from 'react'

const HeroExperience = () => {
  return (
    <Canvas camera={{position: [0,0,15], fov:45}}>
        {/* 3D content goes here */}
        <ambientLight intensity={0.5} color="#1a1a40" />
        <directionalLight position={[10,10,5]} intensity={1} />

        <mesh>
            <boxGeometry args={[2,2,2]} />
            <meshNormalMaterial />
        </mesh>
    </Canvas>
  )
}

export default HeroExperience