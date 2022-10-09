import React, { useRef } from "react";

import FPSLimiter from "./FPSLimiter";

import { useFrame, useLoader } from "@react-three/fiber";
// import { useSpring, a } from "@react-spring/three";
import * as THREE from "three";

export default function Saturn({ position }) {
  const random = (a, b) => a + Math.random() * b;
  const id = "saturn";

  const textureSaturn = "/saturn.jpg";
  const textureSaturnRing = "/saturn-ring.jpg";

  const radius = 2;
  const offset = random(0, Math.PI * 2);
  const speed = random(0.15, 0.4);
  const rotationSpeed = random(0.01, 0.02);
  const xRadius = 22;
  const zRadius = 11;

  const saturnRef = useRef();
  const texture = useLoader(THREE.TextureLoader, textureSaturn);
  const textureRing = useLoader(THREE.TextureLoader, textureSaturnRing);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;

    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);

    saturnRef.current.position.x = x;
    saturnRef.current.position.z = z;
    saturnRef.current.rotation.y += rotationSpeed;
  });

  // const [expand, setExpand] = useState(false);

  // const props = useSpring({
  //   scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  // });

  // const rotate = (Math.PI / 180) * 90;

  return (
    <>
      <group ref={saturnRef} position={position}>
        <mesh>
          <sphereBufferGeometry attach="geometry" args={[radius, 24, 36]} />
          <meshStandardMaterial
            map={texture}
            factor={0.6}
            side={"DoubleSide"}
            attach="material"
          />
        </mesh>
        <mesh rotation={[5, 0, 0]}>
          <torusGeometry attach="geometry" args={[3, 0.5, 2, 48]} />
          <meshStandardMaterial
            map={textureRing}
            factor={0.6}
            side={"DoubleSide"}
            attach="material"
            opacity={0.7}
            transparent={true}
            // metalness={0.2}
            // roughness={0.4}
          />
        </mesh>
      </group>
    </>
  );
}
