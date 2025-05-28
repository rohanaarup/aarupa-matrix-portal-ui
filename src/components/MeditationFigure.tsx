
import { motion } from 'framer-motion';

export const MeditationFigure = () => {
  return (
    <motion.div 
      className="relative w-48 h-48 border border-matrix-orange/50 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 border border-matrix-orange animate-matrix-glow"></div>
      
      {/* Meditation figure silhouette */}
      <motion.div 
        className="absolute inset-4 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full text-matrix-orange"
          fill="currentColor"
        >
          {/* Stylized meditation figure */}
          <circle cx="50" cy="25" r="8" opacity="0.8" />
          <path 
            d="M42 35 Q50 32 58 35 L58 50 Q58 58 50 60 Q42 58 42 50 Z" 
            opacity="0.7"
          />
          <path 
            d="M35 45 Q42 48 42 55 L42 75 Q45 80 50 80 Q55 80 58 75 L58 55 Q58 48 65 45"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <circle cx="35" cy="55" r="3" opacity="0.5" />
          <circle cx="65" cy="55" r="3" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Energy radiating effect */}
      <motion.div 
        className="absolute inset-0 border-2 border-matrix-orange/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Corner geometric elements */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-matrix-orange"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-matrix-orange"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-matrix-orange"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-matrix-orange"></div>
    </motion.div>
  );
};
