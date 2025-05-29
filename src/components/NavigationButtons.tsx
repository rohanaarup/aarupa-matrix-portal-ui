
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface NavigationButtonsProps {
  isVisible: boolean;
}

export const NavigationButtons = ({ isVisible }: NavigationButtonsProps) => {
  const navigate = useNavigate();

  const buttons = [
    { text: 'ABOUT A.MATRIX', path: '/about', delay: 0 },
    { text: 'WHAT IS A.MATRIX', path: '/what-is-matrix', delay: 0.2 },
    { text: 'BUILD YOUR WORLD', path: '/build-world', delay: 0.4 }
  ];

  const handleButtonClick = (path: string, buttonText: string) => {
    console.log(`Navigating to: ${path} - ${buttonText}`);
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col space-y-4 w-full max-w-sm"
    >
      {buttons.map((button, index) => (
        <motion.div
          key={button.text}
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            x: isVisible ? 0 : -50 
          }}
          transition={{ 
            duration: 0.8, 
            delay: button.delay,
            ease: "easeOut" 
          }}
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => handleButtonClick(button.path, button.text)}
            variant="outline"
            className="w-full py-4 px-6 bg-black/80 border-2 border-matrix-orange/60 text-matrix-orange hover:bg-matrix-orange/10 hover:border-matrix-orange transition-all duration-300 font-matrix tracking-wider relative group overflow-hidden"
          >
            {/* Background glow effect */}
            <motion.div
              className="absolute inset-0 bg-matrix-orange/5"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Button text */}
            <span className="relative z-10 text-sm font-bold">
              {button.text}
            </span>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-matrix-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-matrix-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-matrix-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-matrix-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};
