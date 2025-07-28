
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    setParticles(newParticles);

    // Track mouse for particle interaction
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((particle) => {
        const distanceFromMouse = Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + 
          Math.pow(particle.y - mousePosition.y, 2)
        );
        const influence = Math.max(0, 1 - distanceFromMouse / 200);

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-matrix-orange particle-glow"
            style={{
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity + influence * 0.3,
            }}
            initial={{
              x: particle.x,
              y: particle.y + 100,
            }}
            animate={{
              x: particle.x + (influence * (mousePosition.x - particle.x) * 0.1),
              y: [
                particle.y + 100,
                particle.y - 50,
                particle.y + 100,
              ],
              scale: [1, 1.2 + influence * 0.5, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};
