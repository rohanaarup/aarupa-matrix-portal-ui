
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
      
      {/* Enhanced Viewport Frame Border */}
      <motion.div 
        className="fixed inset-4 border border-[#ff5f1f]/60 pointer-events-none z-50 bg-gradient-to-r from-[#ff5f1f]/5 via-transparent to-[#ff5f1f]/5 backdrop-blur-sm"
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(255, 95, 31, 0.3)",
            "0 0 40px rgba(255, 95, 31, 0.5)",
            "0 0 20px rgba(255, 95, 31, 0.3)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#ff5f1f] bg-gradient-to-br from-[#ff5f1f]/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#ff5f1f] bg-gradient-to-bl from-[#ff5f1f]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#ff5f1f] bg-gradient-to-tr from-[#ff5f1f]/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#ff5f1f] bg-gradient-to-tl from-[#ff5f1f]/20 to-transparent"></div>
      </motion.div>

      {/* Enhanced Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 p-8 bg-black/60 backdrop-blur-md border-b border-[#ff5f1f]/20"
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
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative border border-[#ff5f1f]/60 bg-black/90 backdrop-blur-sm p-6 rounded-xl">
              <div className="absolute inset-0 border border-[#ff5f1f]/20 animate-pulse rounded-xl"></div>
              
              <h3 className="text-2xl font-matrix font-bold text-[#ff5f1f] mb-6 tracking-wider text-center">
                DISCOVER THE MATRIX
              </h3>
              
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#ff5f1f]/30">
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

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative border border-[#ff5f1f]/60 bg-black/90 backdrop-blur-sm p-8 mb-8 rounded-xl"
          >
            {/* Glowing border */}
            <div className="absolute inset-0 border border-[#ff5f1f]/20 animate-pulse rounded-xl"></div>
            
            {/* Corner elements */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#ff5f1f]"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#ff5f1f]"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ff5f1f]"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#ff5f1f]"></div>

            <h2 className="text-4xl font-matrix font-bold text-[#ff5f1f] mb-8 tracking-wider">
              ABOUT A.MATRIX
            </h2>
            
            <div className="space-y-6 text-white/90 font-matrix-body leading-relaxed text-lg">
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Button
              onClick={navigateHome}
              className="bg-[#ff5f1f] hover:bg-[#ff5f1f]/80 hover:shadow-xl hover:shadow-[#ff5f1f]/30 text-black font-matrix font-bold px-12 py-4 text-lg tracking-wider transition-all duration-300 hover:scale-105"
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
