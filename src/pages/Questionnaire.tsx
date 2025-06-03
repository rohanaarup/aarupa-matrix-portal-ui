
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MatrixBackground } from '@/components/MatrixBackground';

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    "What draws you to explore your inner consciousness?",
    "Describe the emotional landscape you wish to explore.",
    "Which fictional character do you feel most connected to and why?",
    "What aspects of your personality do you want to understand better?",
    "How do you envision your ideal emotional support system?"
  ];

  const handleInputChange = (value: string) => {
    const questionKey = `question${currentQuestion}` as keyof typeof answers;
    setAnswers(prev => ({
      ...prev,
      [questionKey]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Questionnaire submitted:', answers);
    setShowConfirmation(true);
  };

  const navigateToHome = () => {
    window.open('/home', '_blank');
  };

  const currentQuestionKey = `question${currentQuestion}` as keyof typeof answers;
  const currentAnswer = answers[currentQuestionKey];
  const canProceed = currentAnswer.trim().length > 0;

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
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-matrix text-sm ${
                        currentQuestion >= step 
                          ? 'border-matrix-orange bg-matrix-orange text-black' 
                          : 'border-matrix-gray text-matrix-gray'
                      }`}>
                        {step}
                      </div>
                      {step < 5 && (
                        <div className={`w-16 h-0.5 ml-4 ${
                          currentQuestion > step ? 'bg-matrix-orange' : 'bg-matrix-gray'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Question */}
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="p-6 border border-matrix-gray/30 rounded bg-black/40">
                  <Label className="text-matrix-orange font-matrix text-lg tracking-wide block mb-4">
                    Question {currentQuestion}: {questions[currentQuestion - 1]}
                  </Label>
                  <textarea
                    value={currentAnswer}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="w-full min-h-[150px] bg-black/60 border border-matrix-gray/50 text-white focus:border-matrix-orange transition-colors font-matrix-body resize-none rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-matrix-orange/50 placeholder:text-gray-400"
                    placeholder="Share your thoughts..."
                    autoFocus
                  />
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <Button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 1}
                  className={`font-matrix font-bold px-8 py-3 transition-all duration-300 ${
                    currentQuestion === 1 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50' 
                      : 'bg-matrix-gray hover:bg-matrix-gray/80 text-white hover:scale-105'
                  }`}
                >
                  PREVIOUS
                </Button>

                <div className="text-matrix-orange font-matrix text-sm">
                  {currentQuestion} of 5
                </div>

                {currentQuestion < 5 ? (
                  <Button
                    onClick={nextQuestion}
                    disabled={!canProceed}
                    className={`font-matrix font-bold px-8 py-3 transition-all duration-300 ${
                      !canProceed 
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50' 
                        : 'bg-matrix-orange hover:bg-matrix-orange-glow text-black hover:scale-105'
                    }`}
                  >
                    NEXT
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceed}
                    className={`font-matrix font-bold px-8 py-3 transition-all duration-300 ${
                      !canProceed 
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50' 
                        : 'bg-matrix-orange hover:bg-matrix-orange-glow text-black hover:scale-105'
                    }`}
                  >
                    CREATE MATRIX
                  </Button>
                )}
              </div>
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
                  className="bg-matrix-orange hover:bg-matrix-orange-glow text-black font-matrix font-bold px-12 py-4 text-lg tracking-wider relative overflow-hidden group transition-all duration-300 hover:scale-105"
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
