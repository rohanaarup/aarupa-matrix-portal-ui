
import { motion } from 'framer-motion';
import { MatrixBackground } from '@/components/MatrixBackground';
import { Button } from '@/components/ui/button';

const BuildWorld = () => {
  const navigateHome = () => {
    window.location.href = '/';
  };

  const startBuilding = () => {
    window.location.href = '/questionnaire';
  };

  return (
    <div className="min-h-screen bg-matrix-black text-white relative overflow-hidden">
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
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#ff5f1f]"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#ff5f1f]"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#ff5f1f]"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#ff5f1f]"></div>
      </motion.div>

      {/* Clean Header */}
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
          {/* Video Section with Futuristic Design */}
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
                BUILD YOUR DIGITAL UNIVERSE
              </motion.h3>
              
              {/* Animated tech divider */}
              <div className="flex items-center justify-center mb-8">
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-[#ff5f1f] to-transparent w-full max-w-md"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="mx-4 w-2 h-2 bg-[#ff5f1f] rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-[#ff5f1f] to-transparent w-full max-w-md"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
              </div>
              
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-[#ff5f1f]/30 shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/fSiIQHBJnJE"
                  title="Virtual World Creation and Future Tech"
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
            {/* Premium corner decorations */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#ff5f1f]"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#ff5f1f]"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#ff5f1f]"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#ff5f1f]"></div>

            <motion.h2 
              className="text-5xl font-matrix font-bold text-[#ff5f1f] mb-10 tracking-wider text-center"
              whileHover={{ scale: 1.02 }}
            >
              BUILD YOUR WORLD
            </motion.h2>

            {/* Futuristic segmented divider */}
            <div className="flex items-center justify-center mb-10">
              <div className="flex space-x-2">
                <motion.div 
                  className="w-3 h-px bg-[#ff5f1f]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.div>
                <div className="w-6 h-px bg-[#ff5f1f]"></div>
                <div className="w-12 h-px bg-[#ff5f1f]"></div>
                <motion.div 
                  className="w-2 h-2 bg-[#ff5f1f] rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <div className="w-12 h-px bg-[#ff5f1f]"></div>
                <div className="w-6 h-px bg-[#ff5f1f]"></div>
                <motion.div 
                  className="w-3 h-px bg-[#ff5f1f]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.div>
              </div>
            </div>
            
            <div className="space-y-8 text-white font-matrix-body leading-relaxed text-lg">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-bold"
              >
                Within the A.MATRIX, you'll create your own cinematic life—built from your fears, beliefs, chaos, and hopes. This isn't world-building in the traditional sense; it's consciousness mapping, where your inner universe becomes an interactive digital reality.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Through a series of immersive questions and interactions, you'll shape your Emotional Army and World Map, creating a personalized mythology that reflects your inner universe. Every answer becomes a building block, every feeling a landscape feature.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Your world will be uniquely yours—a mirror of your consciousness where your deepest truths are given form and substance. Navigate through realms constructed from your memories, explore territories shaped by your dreams, and discover hidden aspects of yourself in this digital reflection of your soul.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                The building process is itself a journey of self-discovery. As you answer questions about your inner landscape, you're not just creating content—you're excavating the hidden architecture of your psyche and giving it tangible form.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#ff5f1f] font-bold"
              >
                Ready to begin the creation of your personal Matrix? The journey starts with understanding yourself—your drives, desires, fears, and dreams will become the raw materials from which your world is born.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={startBuilding}
                className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-2xl hover:shadow-[#ff5f1f]/50 text-black font-matrix font-bold px-20 py-6 text-xl tracking-wider mr-8 transition-all duration-300 rounded-xl border border-[#ff5f1f]/30"
              >
                START BUILDING
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={navigateHome}
                className="bg-transparent border-2 border-[#ff5f1f] text-[#ff5f1f] hover:bg-[#ff5f1f] hover:text-black font-matrix font-bold px-16 py-6 text-xl tracking-wider transition-all duration-300 rounded-xl hover:shadow-xl hover:shadow-[#ff5f1f]/30"
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

export default BuildWorld;
