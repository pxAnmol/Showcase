import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export default function Road(props) {
  const road = useGLTF('/road-com.glb')
  const { nodes, materials } = road
  const alphaMap = useTexture("/circular.png");
  const roadRef = useRef();
  const timeOffset = useRef(Math.random() * 1000);
  
  useEffect(() => {
    road.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.alphaMap = alphaMap;
        child.material.needsUpdate = true;
      }
    });
  }, [alphaMap, road.scene]);
  
  useFrame((state) => {
    road.scene.traverse((child) => {
      if (child.isMesh && child.material.map) {
        child.material.map.offset.y -= 0.0225;
      }
    });

    if (roadRef.current) {
      const time = state.clock.elapsedTime + timeOffset.current;
      
      // Complex movement pattern
      roadRef.current.position.x = 
        Math.sin(time * 0.5) * 0.2 + 
        Math.sin(time * 0.3) * 0.1;
      
      // Dynamic rotation
      roadRef.current.rotation.z = 
        Math.sin(time * 0.4) * 0.03 + 
        Math.cos(time * 0.2) * 0.02;
    }
  });

  return (
    <group {...props} ref={roadRef} dispose={null}>
      <mesh
        geometry={nodes.Plane_0.geometry}
        material={materials.track_1}
        position={[0, 0.031, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[3, 6, 1]}
      />
    </group>
  )
}

useGLTF.preload('/road-com.glb')
