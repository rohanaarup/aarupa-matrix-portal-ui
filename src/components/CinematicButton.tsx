
import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface CinematicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export const CinematicButton = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  disabled = false 
}: CinematicButtonProps) => {
  const { playButtonHover, playButtonClick } = useSoundEffects();

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      playButtonHover();
      
      // GSAP hover animation
      gsap.to(e.currentTarget, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });

      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.classList.add('absolute', 'inset-0', 'bg-white/20', 'rounded-lg', 'opacity-0');
      e.currentTarget.appendChild(ripple);
      
      gsap.to(ripple, {
        opacity: 0.3,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(ripple, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => ripple.remove()
          });
        }
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      gsap.to(e.currentTarget, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      playButtonClick();
      
      // Click animation
      gsap.to(e.currentTarget, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });

      onClick();
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-matrix-orange hover:bg-matrix-orange-glow text-black border-matrix-orange';
      case 'secondary':
        return 'bg-transparent hover:bg-matrix-orange/10 text-matrix-orange border-matrix-orange';
      case 'ghost':
        return 'bg-transparent hover:bg-white/5 text-white border-white/20';
      default:
        return 'bg-matrix-orange hover:bg-matrix-orange-glow text-black border-matrix-orange';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <motion.button
      className={`
        relative overflow-hidden border-2 rounded-lg font-matrix font-bold tracking-wider
        transition-all duration-300 transform-gpu
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      style={{
        boxShadow: variant === 'primary' 
          ? '0 0 20px rgba(255, 106, 0, 0.3), inset 0 0 20px rgba(255, 106, 0, 0.1)' 
          : '0 0 10px rgba(255, 106, 0, 0.2)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={disabled}
      whileHover={!disabled ? { 
        boxShadow: variant === 'primary' 
          ? '0 0 30px rgba(255, 106, 0, 0.6), inset 0 0 30px rgba(255, 106, 0, 0.2)' 
          : '0 0 20px rgba(255, 106, 0, 0.4)',
      } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 border-2 border-matrix-orange rounded-lg opacity-0"
        animate={{
          opacity: [0, 0.5, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
};
