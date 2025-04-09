import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";

const LoadingScreen = ({ onEnterExperience }) => {
  const { progress } = useProgress();
  const [canEnter, setCanEnter] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setCanEnter(true);
    }
  }, [progress]);

  const handleEnterClick = () => {
    setIsTransitioning(true);
    onEnterExperience();
  };

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-all duration-500 ease-out
      ${isTransitioning ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div
        className={`flex flex-col items-center justify-center h-full transition-all duration-500 ease-out
        ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        {!canEnter ? (
          <div className="relative w-32 h-32">
            <svg
              className="absolute inset-0 animate-spin-slow rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * progress) / 100}
                className="transition-all duration-500 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl font-light">
                {Math.round(progress)}
              </span>
            </div>
          </div>
        ) : (
          <button
            onClick={handleEnterClick}
            className="group relative overflow-hidden px-12 py-4 transition-all duration-500 ease-out text-white hover:text-black cursor-pointer hover:scale-100"
          >
            <span className="relative z-10 text-lg tracking-[0.3em]">
              ENTER
            </span>
            <div className="absolute inset-0 bg-white transform transition-transform duration-500 ease-in-out group-hover:translate-y-0 translate-y-full" />
          </button>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
