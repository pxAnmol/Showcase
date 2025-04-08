import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const LightTrails = () => {
  const count = 25;
  const trails = useRef([]);
  const materials = useRef([]);

  const baseColors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ff00ff",
    "#00ffff",
    "#ffff00",
    "#ff3300",
    "#33ff33",
    "#3333ff",
    "#ff3380",
    "#ff33ff",
    "#7FFF00",
    "#FF1493",
    "#00FFFF",
    "#FF69B4",
    "#4169E1",
    "#32CD32",
    "#FF4500",
    "#9400D3",
    "#00CED1",
    "#FFD700",
    "#8A2BE2",
    "#7FFFD4",
    "#FF69B4",
  ].map((color) => new THREE.Color(color));

  const getRandomPosition = () => {
    let x = (Math.random() - 0.5) * 12;
    while (x >= -1 && x <= 1) {
      x = (Math.random() - 0.5) * 12;
    }

    let y = Math.random() * 6;
    while (y >= 0 && y <= 1) {
      y = Math.random() * 6;
    }

    return {
      x: THREE.MathUtils.clamp(x, -6, 6),
      y: y,
      z: Math.random() * 50 - 25,
    };
  };

  trails.current = new Array(count);
  materials.current = new Array(count).fill(null).map(
    () =>
      new THREE.MeshStandardMaterial({
        emissive: baseColors[0],
        emissiveIntensity: 15,
        color: "black",
        toneMapped: false,
      })
  );

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const instance = trails.current[i];
      if (instance) {
        const speed = 15 + Math.sin(time * 0.8 + i * 3.2) * 8;
        instance.position.z -= delta * speed;

        instance.position.x +=
          Math.sin(time * (1.5 + i * 0.15) + i) * delta * 1.5;
        instance.position.x = THREE.MathUtils.clamp(instance.position.x, -6, 6);
        instance.scale.z = 3 + Math.sin(time * (2.5 + i * 0.25) + i) * 1.5;

        instance.rotation.z = Math.sin(time * 0.5 + i) * 0.2;
        instance.rotation.y = Math.cos(time * 0.3 + i) * 0.1;

        const colorIndex = Math.floor(time * 0.8 + i * 0.4) % baseColors.length;
        const nextColorIndex = (colorIndex + 1) % baseColors.length;
        const lerpFactor = (time * 0.8 + i * 0.4) % 1;

        materials.current[i].emissive
          .copy(baseColors[colorIndex])
          .lerp(baseColors[nextColorIndex], lerpFactor);
        materials.current[i].emissiveIntensity =
          25 + Math.sin(time + i * 1.2) * 15;

        if (instance.position.z < -25) {
          const newPos = getRandomPosition();
          instance.position.set(newPos.x, newPos.y, 25);
        }
      }
    }
  });

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const initialPos = getRandomPosition();
        return (
          <mesh
            key={i}
            ref={(ref) => (trails.current[i] = ref)}
            position={[initialPos.x, initialPos.y, initialPos.z]}
            material={materials.current[i]}
          >
            <boxGeometry args={[0.02, 0.02, 2]} />
          </mesh>
        );
      })}
    </>
  );
};

export default LightTrails;
