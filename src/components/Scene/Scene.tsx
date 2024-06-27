"use client";

import styles from "./Scene.module.css";
import Model from "../Model/Model";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <main className={styles.main}>
      <Canvas style={{ backgroundColor: "#f3f1ed" }}>
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset='dawn' />
        <Model />
      </Canvas>
    </main>
  );
}
