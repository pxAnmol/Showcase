import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas
      camera={{ fov: 70, position: [2.7, 1.2, 4.8] }}
      gl={{ powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Canvas>
  </StrictMode>
);
