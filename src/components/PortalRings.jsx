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
    "#ff4400",
    "#00ff00",
    "#0000ff",
    "#ff0000",
    "#8A2BE2",
    "#00FF7F",
    "#FF1493",
    "#7FFFD4",
    "#FFD700",
    "#9400D3",
    "#00CED1",
    "#FF69B4",
    "#4169E1",
  ];

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    const colorIndex = (time * 0.5) % colors.length;
    const color1 = new THREE.Color(colors[Math.floor(colorIndex)]);
    const color2 = new THREE.Color(
      colors[(Math.floor(colorIndex) + 1) % colors.length]
    );
    const mixedColor = color1.lerp(color2, colorIndex % 1);

    if (materialRef.current) {
      materialRef.current.emissive = mixedColor;
      materialRef.current.emissiveIntensity = 3 + Math.sin(time * 1.5) * 1;
    }

    for (let i = 0; i < COUNT; i++) {
      const z =
        ((time * 5 + i * SPACING) % TOTAL_DISTANCE) - TOTAL_DISTANCE / 2;
      const pulseScale = 1 + Math.sin(time * 1.2 + i * 0.3) * 0.08;
      const randomOffset = Math.sin(i * 0.5) * 0.02;
      const waveEffect = Math.cos(time * 0.8 + i * 0.3) * 0.03 + randomOffset;

      tempObject.position.set(0, waveEffect, -z);
      tempObject.scale.set(pulseScale, 1, 1);
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
        emissiveIntensity={3}
        roughness={0.1}
        metalness={0.9}
        toneMapped={false}
      />
    </instancedMesh>
  );
};

export default PortalRings;
