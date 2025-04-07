import React, { useEffect } from "react";
import { Perf } from "r3f-perf";
import {
  Environment,
  OrbitControls,
  useGLTF,
  useTexture,
  CubeCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Car from "./components/car.jsx";
import LightTrails from "./components/LightTrails.jsx";
import PortalRings from "./components/PortalRings.jsx";
import Effects from "./Effects.jsx";

const App = () => {
  const road = useGLTF("/road-com.glb");
  const alphaMap = useTexture("/circular.png");

  useEffect(() => {
    road.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.alphaMap = alphaMap;
        child.material.needsUpdate = true;
      }
    });
  }, [road, alphaMap]);

  useFrame(() => {
    road.scene.traverse((child) => {
      if (child.isMesh && child.material.map) {
        child.material.map.offset.y -= 0.007;
      }
    });
  });

  return (
    <>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 5, 20]} />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car scale={1.2} position={[0, 0, 0]} envMap={texture} />
          </>
        )}
      </CubeCamera>

      <primitive
        object={road.scene}
        scale={[2, 1, 2]}
        position={[0, -0.07, 0]}
      />

      <LightTrails />
      <PortalRings />

      <Perf position="top-left" />
      <OrbitControls
        maxDistance={15}
        minDistance={1}
        maxPolarAngle={Math.PI * 0.45}
        enablePan={false}
      />
      <ambientLight intensity={1.5} />

      <Effects />
    </>
  );
};

export default App;
