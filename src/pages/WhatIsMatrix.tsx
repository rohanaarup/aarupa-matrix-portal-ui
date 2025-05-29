
import { motion } from 'framer-motion';
import { MatrixBackground } from '@/components/MatrixBackground';
import { Button } from '@/components/ui/button';

const WhatIsMatrix = () => {
  const navigateHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-matrix-black text-white relative overflow-hidden">
      <MatrixBackground />
      
      {/* Viewport Frame Border */}
      <div className="fixed inset-4 border border-matrix-orange/50 pointer-events-none z-50 animate-matrix-glow">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-matrix-orange"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-matrix-orange"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-matrix-orange"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-matrix-orange"></div>
      </div>

      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-matrix font-black text-matrix-orange tracking-widest text-center">
          AARUPA MATRIX
        </h1>
      </motion.header>

      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative border border-matrix-orange/60 bg-black/90 backdrop-blur-sm p-8 mb-8"
          >
            {/* Glowing border */}
            <div className="absolute inset-0 border border-matrix-orange/20 animate-matrix-pulse"></div>
            
            {/* Corner elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-matrix-orange"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-matrix-orange"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-matrix-orange"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-matrix-orange"></div>

            <h2 className="text-3xl font-matrix font-bold text-matrix-orange mb-6 tracking-wider">
              WHAT IS A.MATRIX
            </h2>
            
            <div className="space-y-6 text-white/90 font-matrix-body leading-relaxed">
              <p>
                The A.MATRIX is a digital soul-driven rebellion against shallow digital tools. It's for those who see their life as a story, not a checklist. This is consciousness technology—a platform where your inner world becomes an explorable universe.
              </p>
              
              <p>
                Through concepts like Cinematic Possession and the Rudra Guna of Lord Shiva, A.MATRIX creates a space where madness is sacred and emotions become world-building tools. Your feelings aren't just acknowledged—they become the architecture of your digital reality.
              </p>
              
              <p>
                The Matrix operates on the principle that every individual contains infinite universes within themselves. These inner landscapes—composed of memories, dreams, fears, aspirations, and untapped potential—can be mapped, explored, and transformed through immersive digital experiences.
              </p>
              
              <p>
                Unlike traditional applications that impose external structures, A.MATRIX adapts to your unique consciousness patterns. It learns your emotional rhythms, understands your symbolic language, and creates experiences that resonate with your deepest truths.
              </p>
              
              <p>
                This is where philosophy meets technology, where ancient wisdom converges with artificial intelligence, creating a new form of digital spirituality that honors the complexity and beauty of human consciousness.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <Button
              onClick={navigateHome}
              className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold px-8 py-3 tracking-wider"
            >
              RETURN TO PORTAL
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsMatrix;
