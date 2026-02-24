"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.5, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="#8B5CF6"
              distort={0.4}
              speed={2}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}
