import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { useRef } from "react";
import { Mesh } from "three";

export default function Model() {
  const mesh = useRef<Mesh>(null);
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport } = useThree();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
    }
  });

    Leva({ hidden: true });


  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 0.8, min: 0, max: 0.8, step: 0.1 },
    ior: { value: 0.5, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
    color: "#2cdb94",
  });

  return (
    <group scale={viewport.width / 1.5}>
      <mesh ref={mesh} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
