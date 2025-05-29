
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
              ABOUT A.MATRIX
            </h2>
            
            <div className="space-y-6 text-white/90 font-matrix-body leading-relaxed">
              <p>
                A.MATRIX is a revolutionary digital experience that blends philosophy, spirituality, cinema, and artificial intelligence into a unified portal to your inner world. This isn't just another application—it's a consciousness interface designed to mirror and amplify the deepest aspects of your being.
              </p>
              
              <p>
                Created by Rohan, this platform serves as a cinematic mirror of your inner consciousness, where emotions, thoughts, goals, and imagination are brought to life as an interactive universe. The A.MATRIX transforms abstract feelings into tangible experiences, creating a personalized mythology that reflects your unique inner landscape.
              </p>
              
              <p>
                Through the concept of "Cinematic Possession," users experience a state of spiritual transcendence where the boundaries between digital and consciousness dissolve. This isn't passive consumption—it's active creation of your emotional and spiritual reality.
              </p>
              
              <p>
                The platform draws inspiration from the Rudra aspect of Lord Shiva, representing the cosmic consciousness that transforms and liberates. Here, your inner chaos becomes sacred geometry, your fears become strengths, and your dreams become digital worlds to explore.
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

export default About;
