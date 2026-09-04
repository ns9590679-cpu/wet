import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function Logo3D() {
  return (
    <mesh rotation={[0.4, 0.6, 0]}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial color="#00f" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Logo3D />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-6xl font-bold tracking-widest"
      >
        Narayan
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 text-xl"
      >
        Graphic Designer
      </motion.p>
      <div className="absolute bottom-10 animate-bounce">↓ Scroll</div>
    </section>
  );
}
