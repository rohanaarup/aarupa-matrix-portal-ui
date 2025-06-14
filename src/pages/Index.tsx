import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MatrixBackground } from '@/components/MatrixBackground';
import { MeditationFigure } from '@/components/MeditationFigure';
import { AuthSection } from '@/components/AuthSection';
import { NavigationButtons } from '@/components/NavigationButtons';
import { InfoSections } from '@/components/InfoSections';
import { CustomCursor } from '@/components/CustomCursor';
import { EnhancedFloatingParticles } from '@/components/EnhancedFloatingParticles';
import { PoweredByFooter } from '@/components/PoweredByFooter';
import { CinematicLoader } from '@/components/CinematicLoader';
import { CinematicButton } from '@/components/CinematicButton';
import { useSoundEffects } from '@/hooks/useSoundEffects';

const Index = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [showAuth, setShowAuth] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  
  const { playCelestialBlast } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    console.log('Sound toggled:', !soundEnabled);
  };

  const handleLoadingComplete = () => {
    setShowLoader(false);
    setIsLoaded(true);
    playCelestialBlast();
  };

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <CinematicLoader onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen bg-matrix-black text-white overflow-x-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <CustomCursor />
        <EnhancedFloatingParticles />
        <PoweredByFooter />
        
        {/* Enhanced 3D Background */}
        <MatrixBackground />
        
        {/* Enhanced Viewport Frame Border */}
        <motion.div 
          className="fixed inset-4 border border-matrix-orange/60 pointer-events-none z-50"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(255, 106, 0, 0.3)",
              "0 0 40px rgba(255, 106, 0, 0.5)",
              "0 0 20px rgba(255, 106, 0, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Enhanced corner decorations */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-matrix-orange"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-matrix-orange"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-matrix-orange"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-matrix-orange"></div>
        </motion.div>

        {/* Enhanced Header */}
        <motion.header 
          className="fixed top-0 left-0 right-0 z-40 p-8 glass-effect border-b border-matrix-orange/20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <motion.div
                className="w-16 h-16 rounded-xl overflow-hidden border-2 border-matrix-orange/60 shadow-xl glass-effect"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: isLoaded ? 360 : 0
                }}
                transition={{ 
                  opacity: { duration: 1, delay: 0.7 },
                  scale: { duration: 1, delay: 0.7 },
                  rotate: { duration: 10, delay: 1, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(255, 106, 0, 0.8)",
                  borderColor: "#FF6A00"
                }}
              >
                <img 
                  src="/lovable-uploads/5a5bcf8c-83ac-4a81-b004-cfe7cfd3b93c.png" 
                  alt="AARUPA MATRIX Logo" 
                  className="w-full h-full object-cover brightness-125 contrast-110 saturate-110"
                />
              </motion.div>
              <motion.h1 
                className="dune-title text-5xl md:text-6xl text-matrix-orange"
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  textShadow: [
                    "0 0 20px #FF6A00",
                    "0 0 40px #FF6A00, 0 0 60px #FF6A00",
                    "0 0 20px #FF6A00"
                  ]
                }}
                transition={{ 
                  opacity: { duration: 1, delay: 0.8 },
                  x: { duration: 1, delay: 0.8 },
                  textShadow: { duration: 3, repeat: Infinity, delay: 1.5 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                AARUPA MATRIX
              </motion.h1>
            </div>
            
            <CinematicButton
              onClick={toggleSound}
              variant="secondary"
              size="sm"
              className="flex items-center space-x-3"
            >
              <span>SOUND:</span>
              <span className="font-bold">{soundEnabled ? 'ON' : 'OFF'}</span>
              <motion.div 
                className={`w-3 h-3 rounded-full ${soundEnabled ? 'bg-matrix-orange' : 'bg-matrix-gray'}`}
                animate={soundEnabled ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </CinematicButton>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="relative z-10 pt-40">
          {/* Enhanced Hero Section */}
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
                  className="w-full"
                >
                  <AuthSection isVisible={showAuth && scrollY < 100} />
                </motion.div>
                
                {/* Alternative content when scrolled */}
                {scrollY > 100 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center p-8 rounded-xl glass-card floating"
                  >
                    <motion.h2 
                      className="dune-title text-4xl text-matrix-orange mb-6"
                      animate={{ 
                        textShadow: [
                          "0 0 10px #FF6A00",
                          "0 0 20px #FF6A00",
                          "0 0 10px #FF6A00"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      CONSCIOUSNESS PORTAL
                    </motion.h2>
                    <p className="dune-body text-white text-xl max-w-md mx-auto leading-relaxed">
                      Your gateway to digital transcendence and inner world exploration.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Right Column - Enhanced Meditation Figure or Logo */}
              <motion.div 
                className="flex items-center justify-center lg:justify-end"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                {scrollY > 100 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 rounded-xl floating"
                  >
                    <img 
                      src="/lovable-uploads/d2c08584-d7a9-4e4e-b5be-f02c8bfcd86b.png" 
                      alt="AARUPA MATRIX" 
                      className="w-64 h-64 object-contain filter brightness-110"
                    />
                  </motion.div>
                ) : (
                  <div className="floating">
                    <MeditationFigure />
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-matrix-orange"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span 
              className="dune-caption mb-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              EXPLORE DEEPER
            </motion.span>
            <div className="w-px h-16 bg-gradient-to-b from-matrix-orange to-transparent"></div>
          </motion.div>

          {/* Enhanced Information Sections */}
          <InfoSections />

          {/* Enhanced Footer */}
          <motion.footer
            className="relative border-t border-matrix-orange/30 glass-effect p-12 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.h3 
                className="dune-title text-3xl text-matrix-orange mb-6"
                whileHover={{ scale: 1.05 }}
              >
                THE WORLD OF ROHAN
              </motion.h3>
              <p className="dune-body text-white text-lg">
                Where consciousness meets infinite possibility
              </p>
            </div>
          </motion.footer>
        </main>

        {/* Enhanced diagonal line pattern overlay */}
        <div className="fixed inset-0 pointer-events-none z-5 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              #FF6A00 60px,
              #FF6A00 61px
            )`
          }}></div>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
