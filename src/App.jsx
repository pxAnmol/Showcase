import { Perf } from "r3f-perf";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  CubeCamera,
  PositionalAudio,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import Car from "./components/car.jsx";
import Road from "./components/Road.jsx";
import LightTrails from "./components/LightTrails.jsx";
import PortalRings from "./components/PortalRings.jsx";
import Effects from "./Effects.jsx";

const App = ({ isExperienceStarted }) => {
  const audio2Ref = useRef(null);
  const orbitControlsRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useFrame((state) => {
    if (!userInteracted && orbitControlsRef.current) {
      const time = state.clock.getElapsedTime();

      const radius = 4;
      const baseSpeed = 0.15;

      const x =
      Math.sin(time * baseSpeed) 
      * radius + Math.sin(time * 0.1) * 0.5;
      const z =
      Math.cos(time * baseSpeed) * 
      radius + Math.cos(time * 0.08) * 0.3;

      const y = Math.sin(time * 0.2) * 0.3 
      + Math.cos(time * 0.1) * 0.2 + 1.4;

      state.camera.position.set(x, y, z);
      if (!userInteracted) {
        state.camera.lookAt(0, 0, 0);
      }
    }
  });

  const handleUserInteraction = () => {
    setUserInteracted(true);
  };

  useEffect(() => {
    if (isExperienceStarted) {
      const audio1 = new Audio("./meditation.ogg");
      audio1.volume = 0.4;
      audio1.loop = true;
      audio1.play();

      if (audio2Ref.current) {
        audio2Ref.current.play();
        audio2Ref.current.setVolume(0.8);
      }
    }
  }, [isExperienceStarted]);

  return (
    <>
      <PositionalAudio
        ref={audio2Ref}
        url="./driving.ogg"
        position={[0, 0, 0]}
        distance={3.5}
        loop
      />

      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 5, 20]} />

      <Road position={[0, -0.07, 0]} scale={[2, 1, 2]} />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car scale={1.1} position={[0, 0, 0.5]} envMap={texture} />
          </>
        )}
      </CubeCamera>

      <LightTrails />
      <PortalRings />

      {/* <Perf position="top-left" /> */}
      <OrbitControls
        ref={orbitControlsRef}
        maxDistance={13}
        minDistance={1}
        maxPolarAngle={Math.PI * 0.48}
        enablePan={false}
        onStart={handleUserInteraction}
      />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <ambientLight intensity={0.5} />

      <Effects />
    </>
  );
};

export default App;
