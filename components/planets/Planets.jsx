import React, { useRef, useState, Suspense } from "react";

import FPSLimiter from "./FPSLimiter";

import { BackgroundContext } from "../../context/BackgroundContext";

import Planet from "./Planet";
import Saturn from "./Saturn";
import Sun from "./Sun";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  softShadows,
  // MeshWobbleMaterial,
  // Reflector,
  CameraShake,
  PerformanceMonitor,
  Instances,
  // useTexture,
} from "@react-three/drei";

// import { useSpring, a } from "@react-spring/three";
// import { DoubleSide } from "three";
// import * as THREE from "three";
import { planetData } from "/components/planets/PlanetData";
import { isMobile } from "react-device-detect";

softShadows();

const Planets = React.memo(function Planets({ setEnableBg }) {
  const [dpr, setDpr] = useState(1.5);

  return (
    <>
      <Canvas
        dpr={dpr}
        onMouseUp={() => setEnableBg(false)}
        onTouchEnd={() => setEnableBg(false)}
        // gl={{ alpha: false }}
        gl={{
          powerPreference: "low-power",

          // alpha: false,
          // antialias: false,
          // stencil: false,
          depth: true,
        }}
        // color="black"
        shadows
        camera={
          isMobile
            ? {
                position: [-5, 15, 50],
                fov: 32,
                zoom: 0.8,
                near: 10,
                far: 2000,
                aspect: 0.2,
                filmGauge: 500,
                filmOffset: 1,
                focus: 20,
              }
            : {
                position: [-5, 15, 50],
                fov: 32,
                zoom: 1,
                near: 0.1,
                far: 1000,
              }
        }
        // camera={{ position: [-0, 2, 10], fov: 50 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.3} />
          <pointLight position={[0, -10, 0]} intensity={1} />
          {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
          <group>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}
            >
              {/* <planeBufferGeometry attach="geometry" args={[50, 50]} /> */}
              <shadowMaterial attach="material" opacity={0.3} />
              {/* <meshStandardMaterial
                attach="material"
                color={"#AE7D6E"}
                opacity={0.3}
              /> */}
            </mesh>
            <Sun />
            <Saturn />
            {planetData.map((planet) => (
              <>
                <Planet
                  textureMap={planet.textureMap}
                  // Nånting fel med key
                  key={planet.id}
                  args={[planet.radius, 24, 36]}
                  color={planet.color}
                  offset={planet.offset}
                  speed={planet.speed}
                  rotationSpeed={planet.rotationSpeed}
                  xRadius={planet.xRadius}
                  zRadius={planet.zRadius}
                  // yRadius={planet.yRadius}
                />
              </>
            ))}
          </group>
          <OrbitControls
            enableZoom={true}
            // enablePan={false}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
            minDistance={3.5}
          />
          <CameraShake
            yawFrequency={isMobile ? 0.01 : 0.01}
            pitchFrequency={isMobile ? 0.05 : 0.05}
            rollFrequency={isMobile ? 0.05 : 0.1}
          />
          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={isMobile ? 50 : 50} // Depth of area where stars should fit (default=50)
            count={isMobile ? 12000 : 8000} // Amount of stars (default=5000)
            factor={isMobile ? 10 : 6}
            saturation={0} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false)
          />
        </Suspense>
      </Canvas>
    </>
  );
});

export default Planets;
