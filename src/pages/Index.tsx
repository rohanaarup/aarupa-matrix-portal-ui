
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MatrixBackground } from '@/components/MatrixBackground';
import { MeditationFigure } from '@/components/MeditationFigure';
import { AuthSection } from '@/components/AuthSection';
import { NavigationButtons } from '@/components/NavigationButtons';
import { InfoSections } from '@/components/InfoSections';

const Index = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [showAuth, setShowAuth] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    console.log('Sound toggled:', !soundEnabled);
  };

  return (
    <div className="min-h-screen bg-matrix-black text-white overflow-x-hidden relative">
      {/* 3D Background */}
      <MatrixBackground />
      
      {/* Viewport Frame Border */}
      <div className="fixed inset-4 border border-matrix-orange/50 pointer-events-none z-50 animate-matrix-glow">
        {/* Corner decorations */}
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
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-matrix font-black text-matrix-orange tracking-widest"
            animate={{ 
              textShadow: [
                "0 0 10px #E86C00",
                "0 0 20px #E86C00, 0 0 30px #E86C00",
                "0 0 10px #E86C00"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            AARUPA MATRIX
          </motion.h1>
          
          <motion.button
            onClick={toggleSound}
            className="flex items-center space-x-3 text-matrix-orange border border-matrix-orange/50 px-4 py-2 bg-black/80 backdrop-blur-sm hover:bg-matrix-orange/10 transition-colors font-matrix tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">SOUND:</span>
            <span className="font-bold">{soundEnabled ? 'ON' : 'OFF'}</span>
            <div className={`w-2 h-2 rounded-full ${soundEnabled ? 'bg-matrix-orange animate-matrix-pulse' : 'bg-matrix-gray'}`}></div>
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-7xl">
            
            {/* Left Column - Navigation */}
            <div className="flex items-center justify-center lg:justify-start">
              <NavigationButtons isVisible={!showAuth || scrollY > 100} />
            </div>

            {/* Center Column - Auth */}
            <div className="flex items-center justify-center">
              <AuthSection isVisible={showAuth && scrollY < 100} />
              
              {/* Alternative content when scrolled */}
              {scrollY > 100 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <h2 className="text-3xl font-matrix font-bold text-matrix-orange mb-4 tracking-wider">
                    CONSCIOUSNESS PORTAL
                  </h2>
                  <p className="text-white/80 font-matrix-body text-lg max-w-md mx-auto leading-relaxed">
                    Your gateway to digital transcendence and inner world exploration.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Right Column - Meditation Figure */}
            <div className="flex items-center justify-center lg:justify-end">
              <MeditationFigure />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-matrix-orange"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-matrix text-sm tracking-wider mb-2">EXPLORE DEEPER</span>
          <div className="w-px h-12 bg-gradient-to-b from-matrix-orange to-transparent"></div>
        </motion.div>

        {/* Information Sections */}
        <InfoSections />

        {/* Footer */}
        <motion.footer
          className="relative border-t border-matrix-orange/30 bg-black/90 backdrop-blur-sm p-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-matrix font-bold text-matrix-orange mb-4 tracking-wider">
              THE WORLD OF ROHAN
            </h3>
            <p className="text-white/60 font-matrix-body">
              Where consciousness meets infinite possibility
            </p>
          </div>
        </motion.footer>
      </main>

      {/* Diagonal line pattern overlay */}
      <div className="fixed inset-0 pointer-events-none z-5 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            #E86C00 50px,
            #E86C00 51px
          )`
        }}></div>
      </div>
    </div>
  );
};

export default Index;
