import { Suspense, useState } from "react";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./components/LoadingScreen.jsx";

const Root = () => {
  const [isExperienceStarted, setIsExperienceStarted] = useState(false);

  return (
    <>
      <LoadingScreen onEnterExperience={() => setIsExperienceStarted(true)} />

      <Canvas
        camera={{ fov: 70, position: [2.7, 1.2, 4.8] }}
        gl={{ powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <App isExperienceStarted={isExperienceStarted} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Root;
