import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const PortalRings = () => {
  const COUNT = 15;
  const SPACING = 5;
  const TOTAL_DISTANCE = COUNT * SPACING;
  const instancedMesh = useRef();
  const tempObject = new THREE.Object3D();
  const materialRef = useRef();
  const colors = [
    "#ff00ff",
    "#00ffff",
    "#ff3380",
    "#33ff33",
    "#ffff00",
    "#ff3300",
  ];

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    const colorIndex = (time * 0.3) % colors.length;
    const color1 = new THREE.Color(colors[Math.floor(colorIndex)]);
    const color2 = new THREE.Color(
      colors[(Math.floor(colorIndex) + 1) % colors.length]
    );
    const mixedColor = color1.lerp(color2, colorIndex % 1);

    if (materialRef.current) {
      materialRef.current.emissive = mixedColor;
    }

    for (let i = 0; i < COUNT; i++) {
      const z =
        ((time * 5 + i * SPACING) % TOTAL_DISTANCE) - TOTAL_DISTANCE / 2;
      tempObject.position.set(0, 0, -z);
      tempObject.scale.set(1 + Math.sin(time + i) * 0.1, 1, 1);
      tempObject.updateMatrix();
      instancedMesh.current.setMatrixAt(i, tempObject.matrix);
    }
    instancedMesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={instancedMesh} args={[null, null, COUNT]}>
      <torusGeometry args={[5, 0.05, 16, 100, Math.PI]} />
      <meshStandardMaterial
        ref={materialRef}
        emissive={colors[0]}
        emissiveIntensity={5}
        roughness={0.2}
        metalness={1}
        toneMapped={false}
      />
    </instancedMesh>
  );
};

export default PortalRings;
