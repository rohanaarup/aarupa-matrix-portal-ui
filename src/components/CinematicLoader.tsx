
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface CinematicLoaderProps {
  onLoadingComplete: () => void;
}

export const CinematicLoader = ({ onLoadingComplete }: CinematicLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // GSAP timeline for cinematic loading animation
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onLoadingComplete, 500);
      }
    });

    // Logo entrance animation
    tl.fromTo(".loader-logo", 
      { 
        scale: 0.5, 
        opacity: 0, 
        rotation: -180 
      },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0, 
        duration: 1.5, 
        ease: "power3.out" 
      }
    );

    // Logo breathing effect
    tl.to(".loader-logo", {
      scale: 1.1,
      duration: 1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    // Title fade in
    tl.fromTo(".loader-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Fade out animation
    tl.to(".loader-content", {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      delay: 1
    });

    return () => {
      clearInterval(progressInterval);
      tl.kill();
    };
  }, [onLoadingComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-black via-matrix-dark-gray to-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-matrix-orange rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="loader-content text-center relative z-10">
        {/* Logo */}
        <div className="loader-logo mb-8">
          <motion.div
            className="w-32 h-32 mx-auto rounded-xl overflow-hidden border-2 border-matrix-orange/60 shadow-2xl"
            style={{
              boxShadow: "0 0 50px rgba(255, 106, 0, 0.4)"
            }}
          >
            <img 
              src="/lovable-uploads/5a5bcf8c-83ac-4a81-b004-cfe7cfd3b93c.png" 
              alt="AARUPA MATRIX Logo" 
              className="w-full h-full object-cover brightness-125 contrast-110"
            />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h1 
          className="loader-title dune-title text-4xl md:text-5xl text-matrix-orange mb-8"
          style={{
            textShadow: "0 0 30px rgba(255, 106, 0, 0.8)"
          }}
        >
          AARUPA MATRIX
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="dune-body text-white/80 text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          THE WORLD OF ROHAN
        </motion.p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="w-full bg-matrix-gray/30 rounded-full h-2 mb-4">
            <motion.div 
              className="bg-gradient-to-r from-matrix-orange to-matrix-orange-glow h-2 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="dune-caption text-matrix-orange">{progress}% LOADING</p>
        </div>
      </div>
    </motion.div>
  );
};
