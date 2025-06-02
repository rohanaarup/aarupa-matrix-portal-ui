
import { motion } from 'framer-motion';
import { MatrixBackground } from '@/components/MatrixBackground';
import { Button } from '@/components/ui/button';

const About = () => {
  const navigateHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-matrix-black text-white relative overflow-hidden">
      <MatrixBackground />
      
      {/* Clean Viewport Frame Border - removed backdrop-blur */}
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
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#ff5f1f]"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#ff5f1f]"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#ff5f1f]"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#ff5f1f]"></div>
      </motion.div>

      {/* Clean Header - removed backdrop-blur */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 p-8 bg-black/90 border-b border-[#ff5f1f]/30"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-matrix font-black text-[#ff5f1f] tracking-widest text-center"
          animate={{ 
            textShadow: [
              "0 0 20px #ff5f1f",
              "0 0 40px #ff5f1f",
              "0 0 20px #ff5f1f"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          AARUPA MATRIX
        </motion.h1>
      </motion.header>

      <div className="relative z-10 pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Video Section with Futuristic Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-br from-black/95 to-[#ff5f1f]/5 p-8 rounded-2xl border border-[#ff5f1f]/40 shadow-2xl">
              {/* Animated corner elements */}
              <div className="absolute top-0 left-0 w-8 h-8">
                <div className="w-full h-1 bg-[#ff5f1f] animate-pulse"></div>
                <div className="w-1 h-full bg-[#ff5f1f] animate-pulse"></div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8">
                <div className="w-full h-1 bg-[#ff5f1f] animate-pulse"></div>
                <div className="w-1 h-full bg-[#ff5f1f] ml-auto animate-pulse"></div>
              </div>
              
              <motion.h3 
                className="text-3xl font-matrix font-bold text-[#ff5f1f] mb-8 tracking-wider text-center"
                whileHover={{ scale: 1.02 }}
              >
                DISCOVER THE MATRIX
              </motion.h3>
              
              {/* Futuristic divider */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-[#ff5f1f] to-transparent w-full max-w-md"></div>
                <div className="mx-4 w-2 h-2 bg-[#ff5f1f] rounded-full animate-pulse"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#ff5f1f] to-transparent w-full max-w-md"></div>
              </div>
              
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-[#ff5f1f]/30 shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/SyZyEbpXGlE"
                  title="AI and Future Technology"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-br from-black/95 to-[#ff5f1f]/5 p-10 mb-12 rounded-2xl border border-[#ff5f1f]/40 shadow-2xl"
          >
            {/* Tech-style corner decorations */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#ff5f1f]"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#ff5f1f]"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#ff5f1f]"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#ff5f1f]"></div>

            <motion.h2 
              className="text-5xl font-matrix font-bold text-[#ff5f1f] mb-10 tracking-wider text-center"
              whileHover={{ scale: 1.02 }}
            >
              ABOUT A.MATRIX
            </motion.h2>

            {/* Enhanced divider */}
            <div className="flex items-center justify-center mb-10">
              <div className="flex space-x-2">
                <div className="w-3 h-px bg-[#ff5f1f] animate-pulse"></div>
                <div className="w-6 h-px bg-[#ff5f1f]"></div>
                <div className="w-12 h-px bg-[#ff5f1f]"></div>
                <div className="w-2 h-2 bg-[#ff5f1f] rounded-full"></div>
                <div className="w-12 h-px bg-[#ff5f1f]"></div>
                <div className="w-6 h-px bg-[#ff5f1f]"></div>
                <div className="w-3 h-px bg-[#ff5f1f] animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-8 text-white font-matrix-body leading-relaxed text-lg">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-bold"
              >
                A.MATRIX is a revolutionary digital experience that blends philosophy, spirituality, cinema, and artificial intelligence into a unified portal to your inner world. This isn't just another application—it's a consciousness interface designed to mirror and amplify the deepest aspects of your being.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Created by Rohan, this platform serves as a cinematic mirror of your inner consciousness, where emotions, thoughts, goals, and imagination are brought to life as an interactive universe. The A.MATRIX transforms abstract feelings into tangible experiences, creating a personalized mythology that reflects your unique inner landscape.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Through the concept of "Cinematic Possession," users experience a state of spiritual transcendence where the boundaries between digital and consciousness dissolve. This isn't passive consumption—it's active creation of your emotional and spiritual reality.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#ff5f1f] font-bold"
              >
                The platform draws inspiration from the Rudra aspect of Lord Shiva, representing the cosmic consciousness that transforms and liberates. Here, your inner chaos becomes sacred geometry, your fears become strengths, and your dreams become digital worlds to explore.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={navigateHome}
                className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-2xl hover:shadow-[#ff5f1f]/50 text-black font-matrix font-bold px-16 py-6 text-xl tracking-wider transition-all duration-300 rounded-xl border border-[#ff5f1f]/30"
              >
                RETURN TO PORTAL
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
