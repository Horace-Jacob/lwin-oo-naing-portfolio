import React from "react";
import PhoenixMesh from "../../assets/phoenix_bird.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface IPhoenix {}

export const Phoenix: React.FC<IPhoenix> = () => {
  const { scene, animations }: any = useGLTF(PhoenixMesh);
  const phoenixRef = React.useRef<THREE.Mesh>(new THREE.Mesh());
  const { actions } = useAnimations(animations, phoenixRef);

  React.useEffect(() => {
    actions["Take 001"]?.play();
  });

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    phoenixRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (phoenixRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      phoenixRef.current.rotation.y = Math.PI;
    } else if (phoenixRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      phoenixRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (phoenixRef.current.rotation.y === 0) {
      // Moving forward
      phoenixRef.current.position.x += 0.01;
      phoenixRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      phoenixRef.current.position.x -= 0.01;
      phoenixRef.current.position.z += 0.01;
    }
  });
  return (
    <>
      <mesh
        ref={phoenixRef}
        position={[-5, 2, 1]}
        scale={[0.003, 0.003, 0.003]}
      >
        <primitive object={scene} />
      </mesh>
    </>
  );
};
