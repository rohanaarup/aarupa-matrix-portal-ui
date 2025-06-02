
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
      {/* Clean 3D Background */}
      <MatrixBackground />
      
      {/* Clean Viewport Frame Border */}
      <motion.div 
        className="fixed inset-4 border border-[#ff5f1f]/60 pointer-events-none z-50"
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(255, 95, 31, 0.3)",
            "0 0 40px rgba(255, 95, 31, 0.5)",
            "0 0 20px rgba(255, 95, 31, 0.3)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Clean corner decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#ff5f1f]"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#ff5f1f]"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#ff5f1f]"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#ff5f1f]"></div>
      </motion.div>

      {/* Clean Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 p-8 bg-black/80 border-b border-[#ff5f1f]/20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.div
              className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ff5f1f]/50 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 30px rgba(255, 95, 31, 0.6)"
              }}
            >
              <img 
                src="/lovable-uploads/5a5bcf8c-83ac-4a81-b004-cfe7cfd3b93c.png" 
                alt="AARUPA MATRIX Logo" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-matrix font-black text-[#ff5f1f] tracking-widest"
              animate={{ 
                textShadow: [
                  "0 0 20px #ff5f1f",
                  "0 0 40px #ff5f1f, 0 0 60px #ff5f1f",
                  "0 0 20px #ff5f1f"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
            >
              AARUPA MATRIX
            </motion.h1>
          </div>
          
          <motion.button
            onClick={toggleSound}
            className="flex items-center space-x-3 text-[#ff5f1f] border border-[#ff5f1f]/50 px-6 py-3 bg-black/90 hover:bg-[#ff5f1f]/10 transition-all duration-300 font-matrix tracking-wide rounded-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 95, 31, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">SOUND:</span>
            <span className="font-bold">{soundEnabled ? 'ON' : 'OFF'}</span>
            <motion.div 
              className={`w-3 h-3 rounded-full ${soundEnabled ? 'bg-[#ff5f1f]' : 'bg-matrix-gray'}`}
              animate={soundEnabled ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Clean floating particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ff5f1f]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-40">
        {/* Clean Hero Section */}
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full max-w-7xl">
            
            {/* Left Column - Navigation */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <NavigationButtons isVisible={!showAuth || scrollY > 100} />
            </motion.div>

            {/* Center Column - Auth */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <AuthSection isVisible={showAuth && scrollY < 100} />
              </motion.div>
              
              {/* Alternative content when scrolled */}
              {scrollY > 100 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center p-8 rounded-xl border border-[#ff5f1f]/30 bg-black/80"
                >
                  <motion.h2 
                    className="text-4xl font-matrix font-bold text-[#ff5f1f] mb-6 tracking-wider"
                    animate={{ 
                      textShadow: [
                        "0 0 10px #ff5f1f",
                        "0 0 20px #ff5f1f",
                        "0 0 10px #ff5f1f"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    CONSCIOUSNESS PORTAL
                  </motion.h2>
                  <p className="text-white font-matrix-body text-xl max-w-md mx-auto leading-relaxed">
                    Your gateway to digital transcendence and inner world exploration.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Right Column - Meditation Figure */}
            <motion.div 
              className="flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <MeditationFigure />
            </motion.div>
          </div>
        </div>

        {/* Clean Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#ff5f1f]"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.span 
            className="font-matrix text-sm tracking-wider mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            EXPLORE DEEPER
          </motion.span>
          <div className="w-px h-16 bg-gradient-to-b from-[#ff5f1f] to-transparent"></div>
        </motion.div>

        {/* Information Sections */}
        <InfoSections />

        {/* Clean Footer */}
        <motion.footer
          className="relative border-t border-[#ff5f1f]/30 bg-gradient-to-br from-black/95 to-black/80 p-12 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.h3 
              className="text-3xl font-matrix font-bold text-[#ff5f1f] mb-6 tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              THE WORLD OF ROHAN
            </motion.h3>
            <p className="text-white font-matrix-body text-lg">
              Where consciousness meets infinite possibility
            </p>
          </div>
        </motion.footer>
      </main>

      {/* Clean diagonal line pattern overlay - reduced opacity */}
      <div className="fixed inset-0 pointer-events-none z-5 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            #ff5f1f 60px,
            #ff5f1f 61px
          )`
        }}></div>
      </div>
    </div>
  );
};

export default Index;
