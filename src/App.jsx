import { Perf } from "r3f-perf";
import {
  Environment,
  OrbitControls,
  CubeCamera,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import Car from "./components/car.jsx";
import Road from "./components/Road.jsx";
import LightTrails from "./components/LightTrails.jsx";
import PortalRings from "./components/PortalRings.jsx";
import Effects from "./Effects.jsx";

const App = () => {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 5, 20]} />

      <Road position={[0, -0.07, 0]} scale={[2, 1, 2]} />

      <CubeCamera resolution={512} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car scale={1.2} position={[0, 0, 1]} envMap={texture} />
          </>
        )}
      </CubeCamera>

      <LightTrails />
      <PortalRings />

      <Perf position="top-left" />
      <OrbitControls
        maxDistance={12}
        minDistance={1}
        maxPolarAngle={Math.PI * 0.47}
        enablePan={false}
      />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <ambientLight intensity={0.5} />

      <Effects />
    </>
  );
};

export default App;
