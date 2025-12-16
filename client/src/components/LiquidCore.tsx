import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function AnimatedSphere({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotate based on time
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    
    // Scale based on scroll (simulated here or passed via props)
    const scale = 1 + scrollProgress * 0.5;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} ref={meshRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
        <MeshDistortMaterial
          color={hovered ? "#ffffff" : "#e0e0e0"}
          attach="material"
          distort={0.6} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

export default function LiquidCore({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />
        <AnimatedSphere scrollProgress={0} />
      </Canvas>
    </div>
  );
}
