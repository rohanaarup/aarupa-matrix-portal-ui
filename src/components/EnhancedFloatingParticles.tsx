
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
  type: 'orb' | 'spark' | 'glow';
}

export const EnhancedFloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const newParticles: Particle[] = [];
    
    // Create different types of particles
    for (let i = 0; i < 40; i++) {
      const particleTypes: Particle['type'][] = ['orb', 'spark', 'glow'];
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.6 + 0.2,
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
      });
    }
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getParticleStyle = (particle: Particle) => {
    const distanceFromMouse = Math.sqrt(
      Math.pow(particle.x - mousePosition.x, 2) + 
      Math.pow(particle.y - mousePosition.y, 2)
    );
    const influence = Math.max(0, 1 - distanceFromMouse / 300);

    switch (particle.type) {
      case 'orb':
        return {
          background: `radial-gradient(circle, rgba(255, 106, 0, ${particle.opacity + influence * 0.3}) 0%, transparent 70%)`,
          filter: 'blur(0.5px)',
        };
      case 'spark':
        return {
          background: `linear-gradient(45deg, rgba(255, 106, 0, ${particle.opacity}) 0%, rgba(255, 133, 51, 0.5) 50%, transparent 100%)`,
          borderRadius: '50%',
        };
      case 'glow':
        return {
          background: `rgba(255, 106, 0, ${particle.opacity * 0.3})`,
          filter: 'blur(2px)',
          borderRadius: '50%',
        };
      default:
        return {};
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {particles.map((particle) => {
        const distanceFromMouse = Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + 
          Math.pow(particle.y - mousePosition.y, 2)
        );
        const influence = Math.max(0, 1 - distanceFromMouse / 300);

        return (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              width: particle.size + influence * 3,
              height: particle.size + influence * 3,
              ...getParticleStyle(particle),
            }}
            initial={{
              x: particle.x,
              y: particle.y + 100,
              opacity: 0,
            }}
            animate={{
              x: [
                particle.x + (influence * (mousePosition.x - particle.x) * 0.05),
                particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 20,
                particle.x + (influence * (mousePosition.x - particle.x) * 0.05),
              ],
              y: [
                particle.y + 100,
                particle.y - 100,
                particle.y + 100,
              ],
              opacity: [0, particle.opacity + influence * 0.4, 0],
              scale: [0.8, 1.2 + influence * 0.5, 0.8],
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

      {/* Additional ambient glow layers */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-matrix-orange rounded-full"
          style={{
            filter: 'blur(100px)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-matrix-orange-glow rounded-full"
          style={{
            filter: 'blur(120px)',
            animation: 'pulse 10s ease-in-out infinite reverse',
          }}
        />
      </div>
    </div>
  );
};
