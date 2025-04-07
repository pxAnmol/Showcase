import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas
      camera={{ fov: 65, position: [2.3, 1.3, 4.3] }}
      gl={{ powerPreference: "high-performance", stencil: false }}
    >
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Canvas>
  </StrictMode>
);
