
import { motion } from 'framer-motion';
import { MatrixBackground } from '@/components/MatrixBackground';
import { Button } from '@/components/ui/button';

const Home = () => {
  const navigateToPortal = () => {
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

      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative border-2 border-matrix-orange bg-black/90 backdrop-blur-sm p-12"
          >
            {/* Animated border */}
            <div className="absolute inset-0 border-2 border-matrix-orange animate-matrix-glow"></div>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-matrix-orange"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-matrix-orange"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-matrix-orange"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-matrix-orange"></div>

            <motion.h1 
              className="text-5xl font-matrix font-bold text-matrix-orange mb-8 tracking-wider"
              animate={{ 
                textShadow: [
                  "0 0 10px #E86C00",
                  "0 0 30px #E86C00, 0 0 40px #E86C00",
                  "0 0 10px #E86C00"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              WELCOME TO YOUR MATRIX
            </motion.h1>
            
            <p className="text-white/90 font-matrix-body text-xl mb-8 leading-relaxed">
              You have successfully entered your personal consciousness portal. This is where your inner world becomes reality, where your thoughts shape digital landscapes, and where your journey of self-discovery truly begins.
            </p>

            <div className="space-y-6 text-white/80 font-matrix-body text-lg leading-relaxed mb-12">
              <p>
                Your Matrix is now active and learning from your consciousness patterns. Every interaction will deepen the connection between your inner world and this digital realm.
              </p>
              <p>
                This is just the beginning. Your personal universe awaits exploration, creation, and continuous evolution as you grow and discover new aspects of yourself.
              </p>
            </div>

            {/* Animated matrix symbol */}
            <motion.div 
              className="w-32 h-32 mx-auto mb-8 border-2 border-matrix-orange relative"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <div className="absolute inset-4 border border-matrix-orange"></div>
              <div className="absolute inset-8 border border-matrix-orange"></div>
              <motion.div 
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-matrix-orange rounded-full"
                style={{ transform: 'translate(-50%, -50%)' }}
                animate={{ 
                  scale: [1, 2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            <Button
              onClick={navigateToPortal}
              className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold px-12 py-4 text-lg tracking-wider"
            >
              EXPLORE MORE
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
