import { Sparkles, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useMousePosition } from "../hooks/useMousePosition";

function OrbitalGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useMousePosition();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
    const targetX = (mouse.y / window.innerHeight - 0.5) * 0.4;
    const targetY = (mouse.x / window.innerWidth - 0.5) * 0.4;
    groupRef.current.rotation.x +=
      (targetX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshStandardMaterial
          color="#C9A66A"
          emissive="#C9A66A"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial
          color="#E7C989"
          emissive="#E7C989"
          emissiveIntensity={0.3}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
      <OrbitalRing
        radius={1.2}
        tubeRadius={0.025}
        rotX={Math.PI / 2}
        rotY={0}
        speed={0.6}
        color="#C9A66A"
      />
      <OrbitalRing
        radius={1.6}
        tubeRadius={0.018}
        rotX={Math.PI / 4}
        rotY={Math.PI / 6}
        speed={-0.4}
        color="#E7C989"
      />
      <OrbitalRing
        radius={2.0}
        tubeRadius={0.014}
        rotX={0.2}
        rotY={Math.PI / 3}
        speed={0.3}
        color="#78B7FF"
      />
      <OrbitingBody
        orbitRadius={1.2}
        orbitSpeed={0.8}
        size={0.1}
        color="#E7C989"
        phaseOffset={0}
      />
      <OrbitingBody
        orbitRadius={1.2}
        orbitSpeed={0.8}
        size={0.07}
        color="#C9A66A"
        phaseOffset={Math.PI}
      />
      <OrbitingBody
        orbitRadius={1.6}
        orbitSpeed={-0.5}
        size={0.09}
        color="#78B7FF"
        phaseOffset={Math.PI / 3}
        inclineX={Math.PI / 4}
      />
      <OrbitingBody
        orbitRadius={2.0}
        orbitSpeed={0.35}
        size={0.06}
        color="#E7C989"
        phaseOffset={0}
      />
    </group>
  );
}

function OrbitalRing({
  radius,
  tubeRadius,
  rotX,
  rotY,
  speed,
  color,
}: {
  radius: number;
  tubeRadius: number;
  rotX: number;
  rotY: number;
  speed: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.getElapsedTime() * speed * 0.2;
  });
  return (
    <mesh ref={ref} rotation={[rotX, rotY, 0]}>
      <torusGeometry args={[radius, tubeRadius, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        roughness={0.1}
        metalness={1.0}
      />
    </mesh>
  );
}

function OrbitingBody({
  orbitRadius,
  orbitSpeed,
  size,
  color,
  phaseOffset,
  inclineX = 0,
}: {
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  color: string;
  phaseOffset: number;
  inclineX?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * orbitSpeed + phaseOffset;
    const x = Math.cos(t) * orbitRadius;
    const y = Math.sin(t) * orbitRadius * Math.sin(inclineX);
    const z = Math.sin(t) * orbitRadius * Math.cos(inclineX);
    ref.current.position.set(x, y, z);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

export function OrbitalModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#E7C989" />
        <pointLight position={[-3, -3, 3]} intensity={1} color="#78B7FF" />
        <Stars
          radius={80}
          depth={50}
          count={3000}
          factor={4}
          saturation={0.5}
          fade
          speed={1}
        />
        <Sparkles count={60} scale={6} size={1.5} speed={0.5} color="#C9A66A" />
        <OrbitalGroup />
      </Suspense>
    </Canvas>
  );
}
