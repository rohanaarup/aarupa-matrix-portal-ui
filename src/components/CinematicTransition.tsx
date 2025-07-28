
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface CinematicTransitionProps {
  isVisible: boolean;
  onComplete: () => void;
  title?: string;
  subtitle?: string;
}

export const CinematicTransition = ({ 
  isVisible, 
  onComplete, 
  title = "MATRIX ACTIVATED",
  subtitle = "ENTERING YOUR WORLD" 
}: CinematicTransitionProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // GSAP timeline for the transition
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 300);
      }
    });

    // Mirror fractal effect
    tl.fromTo(".transition-mirror", 
      { 
        scale: 0,
        rotation: 0,
        opacity: 0 
      },
      { 
        scale: 1.2,
        rotation: 360,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out" 
      }
    );

    // Title dramatic entrance
    tl.fromTo(".transition-title",
      { 
        scale: 0.5,
        opacity: 0,
        y: 50 
      },
      { 
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.7)" 
      },
      "-=1"
    );

    // Subtitle fade in
    tl.fromTo(".transition-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    );

    // Final blast effect
    tl.to(".transition-blast", {
      scale: 3,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "+=0.5");

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3;
      });
    }, 40);

    return () => {
      clearInterval(progressInterval);
      tl.kill();
    };
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-matrix-orange rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
                x: [0, (Math.random() - 0.5) * 200],
                y: [0, (Math.random() - 0.5) * 200],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Central Mirror/Portal Effect */}
        <div className="transition-mirror relative">
          <motion.div
            className="w-64 h-64 mx-auto rounded-full border-4 border-matrix-orange relative overflow-hidden"
            style={{
              background: "radial-gradient(circle, rgba(255,106,0,0.3) 0%, rgba(0,0,0,0.8) 70%)",
              boxShadow: "0 0 100px rgba(255, 106, 0, 0.8), inset 0 0 50px rgba(255, 106, 0, 0.3)"
            }}
          >
            {/* Inner rings */}
            <div className="absolute inset-8 border-2 border-matrix-orange/60 rounded-full"></div>
            <div className="absolute inset-16 border border-matrix-orange/40 rounded-full"></div>
            
            {/* Central core */}
            <motion.div 
              className="transition-blast absolute top-1/2 left-1/2 w-8 h-8 bg-matrix-orange rounded-full"
              style={{ transform: 'translate(-50%, -50%)' }}
              animate={{ 
                scale: [1, 2, 1],
                opacity: [1, 0.3, 1]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />

            {/* Rotating elements */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-matrix-orange rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-80px)`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-40">
          <motion.h1 
            className="transition-title dune-title text-5xl md:text-6xl text-matrix-orange mb-4"
            style={{
              textShadow: "0 0 30px rgba(255, 106, 0, 0.8)"
            }}
          >
            {title}
          </motion.h1>

          <motion.p 
            className="transition-subtitle dune-body text-white/80 text-xl mb-12"
          >
            {subtitle}
          </motion.p>

          {/* Progress indicator */}
          <div className="w-80 mx-auto">
            <div className="w-full bg-matrix-gray/30 rounded-full h-2 mb-4">
              <motion.div 
                className="bg-gradient-to-r from-matrix-orange to-matrix-orange-glow h-2 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="dune-caption text-matrix-orange">{progress}% COMPLETE</p>
          </div>
        </div>

        {/* Edge glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-matrix-orange/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-matrix-orange/20 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-matrix-orange/20 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-matrix-orange/20 to-transparent"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
