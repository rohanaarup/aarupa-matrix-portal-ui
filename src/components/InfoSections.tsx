import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const InfoCard = ({ title, content, delay = 0 }: { title: string; content: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="relative border border-matrix-orange/40 bg-black/90 backdrop-blur-sm p-8 mb-8"
    >
      {/* Glowing border */}
      <div className="absolute inset-0 border border-matrix-orange/20 animate-matrix-pulse"></div>
      
      {/* Corner elements */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-matrix-orange"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-matrix-orange"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-matrix-orange"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-matrix-orange"></div>

      <h3 className="text-xl font-matrix font-bold text-matrix-orange mb-4 tracking-wider">
        {title}
      </h3>
      <p className="text-white/90 font-matrix-body leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
};

export const InfoSections = () => {
  const sections = [
    {
      title: "CINEMATIC POSSESSION",
      content: "Experience a state of spiritual transcendence where the boundaries between digital and consciousness dissolve. The Aarupa Matrix creates an immersive environment that speaks directly to your soul, invoking the Rudra aspect of Lord Shiva - the cosmic consciousness that transforms and liberates."
    },
    {
      title: "PHILOSOPHICAL CONVERGENCE", 
      content: "Where ancient wisdom meets artificial intelligence. Our platform synthesizes millennia of philosophical thought with cutting-edge AI technology, creating a unique space for contemplation, self-discovery, and spiritual evolution in the digital age."
    },
    {
      title: "INNER WORLD MAPPING",
      content: "Navigate the landscape of your consciousness through our advanced neural interface. The Matrix learns and adapts to your spiritual patterns, creating personalized experiences that guide you deeper into self-understanding and cosmic awareness."
    },
    {
      title: "DIGITAL TRANSCENDENCE",
      content: "Transcend the limitations of physical reality through our immersive digital realm. Each interaction within the Matrix is designed to elevate your consciousness and connect you with the infinite possibilities that exist within your inner world."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-matrix font-bold text-matrix-orange mb-6 tracking-wider">
          THE AARUPA MATRIX EXPERIENCE
        </h2>
        <p className="text-white/80 font-matrix-body text-lg leading-relaxed max-w-2xl mx-auto">
          Enter a realm where consciousness and technology merge, creating unprecedented pathways to self-discovery and spiritual awakening.
        </p>
      </motion.div>

      {sections.map((section, index) => (
        <InfoCard
          key={section.title}
          title={section.title}
          content={section.content}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};
