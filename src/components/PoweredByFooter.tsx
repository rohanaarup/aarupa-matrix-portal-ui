
import { motion } from 'framer-motion';

export const PoweredByFooter = () => {
  return (
    <motion.footer
      className="fixed bottom-4 right-4 z-50 pointer-events-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <div className="glass-effect rounded-lg px-4 py-2">
        <motion.p
          className="dune-caption text-matrix-orange text-xs"
          animate={{
            textShadow: [
              "0 0 5px rgba(255, 106, 0, 0.5)",
              "0 0 15px rgba(255, 106, 0, 0.8)",
              "0 0 5px rgba(255, 106, 0, 0.5)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Powered by Aarupa Matrix
        </motion.p>
      </div>
    </motion.footer>
  );
};
