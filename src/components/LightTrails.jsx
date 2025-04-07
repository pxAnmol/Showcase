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
  ].map((color) => new THREE.Color(color));

  trails.current = new Array(count);
  materials.current = new Array(count).fill(null).map(
    () =>
      new THREE.MeshStandardMaterial({
        emissive: baseColors[0],
        emissiveIntensity: 20,
        color: "black",
        toneMapped: false,
      })
  );

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const instance = trails.current[i];
      if (instance) {
        instance.position.z -= delta * (20 + Math.sin(time + i) * 5);
        instance.position.x += Math.sin(time * 2 + i) * delta * 0.5;
        instance.position.x = THREE.MathUtils.clamp(instance.position.x, -5, 5);
        instance.scale.z = 2 + Math.sin(time * 3 + i) * 1;

        const colorIndex = Math.floor(time + i * 0.1) % baseColors.length;
        const nextColorIndex = (colorIndex + 1) % baseColors.length;
        const lerpFactor = (time + i * 0.1) % 1;

        materials.current[i].emissive
          .copy(baseColors[colorIndex])
          .lerp(baseColors[nextColorIndex], lerpFactor);
        materials.current[i].emissiveIntensity =
          20 + Math.sin(time * 2 + i) * 10;

        if (instance.position.z < -20) {
          instance.position.z = 20;
          instance.position.x = THREE.MathUtils.clamp(
            (Math.random() - 0.5) * 15,
            -4,
            4
          );
          instance.position.y = Math.random() * 3 + 1;
        }
      }
    }
  });

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          ref={(ref) => (trails.current[i] = ref)}
          position={[
            THREE.MathUtils.clamp((Math.random() - 0) * 15, -5, 5),
            Math.random() * 3 + 0.5,
            Math.random() * 40 - 20,
          ]}
          material={materials.current[i]}
        >
          <boxGeometry args={[0.02, 0.02, 2]} />
        </mesh>
      ))}
    </>
  );
};

export default LightTrails;
