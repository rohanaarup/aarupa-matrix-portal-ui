
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#E86C00"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

const GeometricLines = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  const lines = useMemo(() => {
    const lineGeometry = new THREE.BufferGeometry();
    const points = [];
    
    // Create geometric line patterns
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      const radius = 5 + Math.sin(i * 0.5) * 2;
      points.push(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        Math.sin(i * 0.1) * 3
      );
    }
    
    lineGeometry.setFromPoints(points.map(p => new THREE.Vector3(p[0] || 0, p[1] || 0, p[2] || 0)));
    return lineGeometry;
  }, []);

  return (
    <group ref={groupRef}>
      <line geometry={lines}>
        <lineBasicMaterial color="#E86C00" transparent opacity={0.3} />
      </line>
    </group>
  );
};

export const MatrixBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <ParticleField />
        <GeometricLines />
      </Canvas>
    </div>
  );
};
