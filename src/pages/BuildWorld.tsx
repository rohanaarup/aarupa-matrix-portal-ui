
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
              BUILD YOUR WORLD
            </h2>
            
            <div className="space-y-6 text-white/90 font-matrix-body leading-relaxed">
              <p>
                Within the A.MATRIX, you'll create your own cinematic life—built from your fears, beliefs, chaos, and hopes. This isn't world-building in the traditional sense; it's consciousness mapping, where your inner universe becomes an interactive digital reality.
              </p>
              
              <p>
                Through a series of immersive questions and interactions, you'll shape your Emotional Army and World Map, creating a personalized mythology that reflects your inner universe. Every answer becomes a building block, every feeling a landscape feature.
              </p>
              
              <p>
                Your world will be uniquely yours—a mirror of your consciousness where your deepest truths are given form and substance. Navigate through realms constructed from your memories, explore territories shaped by your dreams, and discover hidden aspects of yourself in this digital reflection of your soul.
              </p>
              
              <p>
                The building process is itself a journey of self-discovery. As you answer questions about your inner landscape, you're not just creating content—you're excavating the hidden architecture of your psyche and giving it tangible form.
              </p>
              
              <p>
                Ready to begin the creation of your personal Matrix? The journey starts with understanding yourself—your drives, desires, fears, and dreams will become the raw materials from which your world is born.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <Button
              onClick={startBuilding}
              className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold px-12 py-4 text-lg tracking-wider mr-4"
            >
              START BUILDING
            </Button>
            <Button
              onClick={navigateHome}
              className="bg-transparent border-2 border-matrix-orange text-matrix-orange hover:bg-matrix-orange hover:text-black font-matrix font-bold px-8 py-3 tracking-wider"
            >
              RETURN TO PORTAL
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BuildWorld;
