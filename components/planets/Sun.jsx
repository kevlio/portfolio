import { useTexture } from "@react-three/drei";

export default function Sun() {
  const texture = useTexture("/sun.jpg");

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereBufferGeometry attach="geometry" args={[4]} />
        <meshStandardMaterial
          map={texture}
          factor={0.6}
          side={"DoubleSide"}
          attach="material"
        />
      </mesh>
    </>
  );
}
