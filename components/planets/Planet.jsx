import React, { useRef, useState } from "react";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import * as THREE from "three";

import { PerformanceMonitor, Instances, Instance } from "@react-three/drei";
import { Detailed, useGLTF } from "@react-three/drei";

function Planet({
  position,
  args,
  color,
  textureMap,
  offset,
  speed,
  rotationSpeed,
  xRadius,
  zRadius,
}) {
  const planetRef = useRef();
  const texture = useLoader(THREE.TextureLoader, textureMap);

  // const [low, mid, high] = useGLTF(["/low.glb", "/mid.glb", "/high.glb"]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;

    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);

    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    planetRef.current.rotation.y += rotationSpeed;
  });

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <>
      <mesh
        ref={planetRef}
        position={position}
        // Funkade inte..
        // onClick={() => setExpand(!expand)}
        // scale={props.scale}
      >
        <sphereBufferGeometry attach="geometry" args={args} />
        <meshStandardMaterial
          map={texture}
          color={color}
          factor={0.6}
          side={"DoubleSide"}
          attach="material"
          transparent="true"
        />
      </mesh>
    </>
  );
}
export default Planet;
