
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MatrixBackground } from '@/components/MatrixBackground';

const Questionnaire = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    aboutYourself: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Questionnaire submitted:', answers);
    setShowConfirmation(true);
  };

  const navigateToHome = () => {
    window.location.href = '/home';
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
        <div className="w-full max-w-4xl mx-auto">
          
          {!showConfirmation ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative border border-matrix-orange/60 bg-black/90 backdrop-blur-sm p-8"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 border border-matrix-orange/30 animate-matrix-pulse"></div>
              
              {/* Corner elements */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-matrix-orange"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-matrix-orange"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-matrix-orange"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-matrix-orange"></div>

              <h1 className="text-4xl font-matrix font-bold text-matrix-orange mb-8 text-center tracking-wider">
                INTRODUCE & CREATE YOUR MATRIX
              </h1>

              {/* Progress indicator */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-matrix text-sm ${
                        currentStep >= step 
                          ? 'border-matrix-orange bg-matrix-orange text-black' 
                          : 'border-matrix-gray text-matrix-gray'
                      }`}>
                        {step}
                      </div>
                      {step < 3 && (
                        <div className={`w-16 h-0.5 ml-4 ${
                          currentStep > step ? 'bg-matrix-orange' : 'bg-matrix-gray'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* Question 1 */}
                {currentStep === 1 && (
                  <motion.div
                    key="question1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label className="text-matrix-orange font-matrix text-lg tracking-wide block mb-4">
                        Question 1: What draws you to explore your inner consciousness?
                      </Label>
                      <Textarea
                        value={answers.question1}
                        onChange={(e) => handleInputChange('question1', e.target.value)}
                        className="min-h-[150px] bg-black/80 border-matrix-gray text-white focus:border-matrix-orange transition-colors font-matrix-body resize-none"
                        placeholder="Share your thoughts about what drives your journey into consciousness exploration..."
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button
                        onClick={nextStep}
                        disabled={!answers.question1.trim()}
                        className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold px-8 py-3 tracking-wider"
                      >
                        CONTINUE
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Question 2 */}
                {currentStep === 2 && (
                  <motion.div
                    key="question2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label className="text-matrix-orange font-matrix text-lg tracking-wide block mb-4">
                        Question 2: Describe the emotional landscape you wish to explore.
                      </Label>
                      <Textarea
                        value={answers.question2}
                        onChange={(e) => handleInputChange('question2', e.target.value)}
                        className="min-h-[150px] bg-black/80 border-matrix-gray text-white focus:border-matrix-orange transition-colors font-matrix-body resize-none"
                        placeholder="Describe the emotions, feelings, and inner territories you want to map and understand..."
                      />
                    </div>
                    <div className="flex justify-between">
                      <Button
                        onClick={prevStep}
                        className="bg-matrix-gray hover:bg-matrix-gray-light text-white font-matrix font-bold px-8 py-3 tracking-wider"
                      >
                        BACK
                      </Button>
                      <Button
                        onClick={nextStep}
                        disabled={!answers.question2.trim()}
                        className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold px-8 py-3 tracking-wider"
                      >
                        CONTINUE
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Tell about yourself */}
                {currentStep === 3 && (
                  <motion.div
                    key="aboutYourself"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label className="text-matrix-orange font-matrix text-lg tracking-wide block mb-4">
                        Tell about yourself
                      </Label>
                      <Textarea
                        value={answers.aboutYourself}
                        onChange={(e) => handleInputChange('aboutYourself', e.target.value)}
                        className="min-h-[200px] bg-black/80 border-matrix-gray text-white focus:border-matrix-orange transition-colors font-matrix-body resize-none"
                        placeholder="Share your thoughts, feelings, aspirations, fears, dreams, and anything that defines your inner world..."
                      />
                    </div>
                    <div className="flex justify-between">
                      <Button
                        onClick={prevStep}
                        className="bg-matrix-gray hover:bg-matrix-gray-light text-white font-matrix font-bold px-8 py-3 tracking-wider"
                      >
                        BACK
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        disabled={!answers.aboutYourself.trim()}
                        className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold px-8 py-3 tracking-wider"
                      >
                        CREATE MATRIX
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Matrix Created Confirmation */
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="relative border-2 border-matrix-orange bg-black/90 backdrop-blur-sm p-12 max-w-2xl mx-auto">
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-matrix-orange animate-matrix-glow"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-matrix-orange"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-matrix-orange"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-matrix-orange"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-matrix-orange"></div>

                <motion.h2 
                  className="text-4xl font-matrix font-bold text-matrix-orange mb-6 tracking-wider"
                  animate={{ 
                    textShadow: [
                      "0 0 10px #E86C00",
                      "0 0 30px #E86C00, 0 0 40px #E86C00",
                      "0 0 10px #E86C00"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  MATRIX CREATED
                </motion.h2>
                
                <p className="text-white/90 font-matrix-body text-lg mb-8 leading-relaxed">
                  Your personal Matrix has been successfully created. Your consciousness portal is now active and ready to explore the infinite landscapes of your inner world.
                </p>

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
                  onClick={navigateToHome}
                  className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold px-12 py-4 text-lg tracking-wider relative overflow-hidden group"
                >
                  <span className="relative z-10">ENTER YOUR WORLD</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
