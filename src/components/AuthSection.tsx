
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthSectionProps {
  isVisible: boolean;
}

export const AuthSection = ({ isVisible }: AuthSectionProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, isSignUp });
    // Authentication logic would go here
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-md mx-auto"
        >
          {/* HUD-style container */}
          <div className="relative border border-matrix-orange/60 bg-black/90 backdrop-blur-sm p-8">
            {/* Glowing border effect */}
            <div className="absolute inset-0 border border-matrix-orange/30 animate-matrix-pulse"></div>
            
            {/* Corner elements */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-matrix-orange"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-matrix-orange"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-matrix-orange"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-matrix-orange"></div>

            <motion.h2 
              className="text-2xl font-matrix font-bold text-matrix-orange mb-6 text-center tracking-wider"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {isSignUp ? 'INITIATE MATRIX' : 'ACCESS MATRIX'}
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-matrix-orange font-matrix text-sm tracking-wide">
                  NEURAL INTERFACE ID
                </Label>
                <div className="relative">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black/80 border-matrix-gray text-white focus:border-matrix-orange transition-colors font-matrix-body"
                    placeholder="Enter your interface ID..."
                    required
                  />
                  <div className="absolute inset-0 border border-matrix-orange/20 pointer-events-none"></div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-matrix-orange font-matrix text-sm tracking-wide">
                  SECURITY CODE
                </Label>
                <div className="relative">
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-black/80 border-matrix-gray text-white focus:border-matrix-orange transition-colors font-matrix-body"
                    placeholder="Enter security code..."
                    required
                  />
                  <div className="absolute inset-0 border border-matrix-orange/20 pointer-events-none"></div>
                </div>
              </div>

              {isSignUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <Label className="text-matrix-orange font-matrix text-sm tracking-wide">
                    CONFIRM SECURITY CODE
                  </Label>
                  <div className="relative">
                    <Input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-black/80 border-matrix-gray text-white focus:border-matrix-orange transition-colors font-matrix-body"
                      placeholder="Confirm security code..."
                      required
                    />
                    <div className="absolute inset-0 border border-matrix-orange/20 pointer-events-none"></div>
                  </div>
                </motion.div>
              )}

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold py-3 tracking-wider transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSignUp ? 'INITIALIZE MATRIX' : 'ENTER MATRIX'}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>

              <div className="text-center">
                <motion.button
                  type="button"
                  onClick={switchMode}
                  className="text-matrix-orange/80 hover:text-matrix-orange font-matrix-body text-sm tracking-wide transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {isSignUp ? 'Already connected? Access Matrix' : "Don't have access? Initialize Matrix"}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-matrix-orange"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
