import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MatrixBackground } from '@/components/MatrixBackground';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { PoweredByFooter } from '@/components/PoweredByFooter';
import { SpeechToTextArea } from '@/components/SpeechToTextArea';
import { CinematicTransition } from '@/components/CinematicTransition';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { Play, Pause } from 'lucide-react';

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
  const [showTransition, setShowTransition] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const { playCelestialBlast, playEpicOrchestraTransition } = useSoundEffects();

  const questions = [
    "What draws you to explore your inner consciousness?",
    "Describe the emotional landscape you wish to explore.",
    "Which fictional character do you feel most connected to and why?",
    "What aspects of your personality do you want to understand better?",
    "How do you envision your ideal emotional support system?"
  ];

  const videoContexts = [
    "Understanding the depths of consciousness and self-awareness",
    "Exploring emotional territories and inner landscapes",
    "Character connection and personality reflection",
    "Self-discovery and personality exploration",
    "Building emotional support systems and connections"
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
      setVideoPlaying(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setVideoPlaying(false);
    }
  };

  const handleSubmit = () => {
    console.log('Questionnaire submitted:', answers);
    setShowConfirmation(true);
  };

  const handleCreateMatrix = () => {
    // Play the Epic Orchestra Transition sound when cinematic transition starts
    playEpicOrchestraTransition();
    
    // Show cinematic transition
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    // Navigate to home page
    window.open('/home', '_blank');
  };

  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };

  const currentQuestionKey = `question${currentQuestion}` as keyof typeof answers;
  const currentAnswer = answers[currentQuestionKey];
  const canProceed = currentAnswer.trim().length > 0;
  const progressPercentage = (currentQuestion / 5) * 100;

  return (
    <div className="min-h-screen bg-matrix-black text-white relative overflow-hidden">
      <CustomCursor />
      <FloatingParticles />
      <PoweredByFooter />
      
      {/* Cinematic Transition */}
      <CinematicTransition
        isVisible={showTransition}
        onComplete={handleTransitionComplete}
        title="MATRIX CREATED"
        subtitle="YOUR WORLD AWAITS"
      />
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <MatrixBackground />
      </div>
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-black/50">
        <motion.div
          className="h-full bg-gradient-to-r from-matrix-orange to-matrix-orange-glow"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      
      {/* Viewport Frame Border */}
      <div className="fixed inset-4 border border-matrix-orange/50 pointer-events-none z-10 animate-matrix-glow">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-matrix-orange"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-matrix-orange"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-matrix-orange"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-matrix-orange"></div>
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-8 pt-16">
        <div className="w-full max-w-5xl mx-auto">
          
          {!showConfirmation ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Title */}
              <motion.h1 
                className="dune-title text-4xl md:text-5xl text-center text-matrix-orange mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                CONSCIOUSNESS MATRIX QUESTIONNAIRE
              </motion.h1>

              {/* Video Section */}
              <motion.div
                key={`video-${currentQuestion}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-lg p-6 mb-8"
              >
                <div className="aspect-video bg-gradient-to-br from-matrix-black to-matrix-dark-gray rounded-lg relative overflow-hidden border border-matrix-orange/30">
                  {/* Video Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <motion.div
                        className="w-20 h-20 rounded-full border-2 border-matrix-orange/50 flex items-center justify-center mx-auto"
                        whileHover={{ scale: 1.1, borderColor: "#FF6A00" }}
                      >
                        <Button
                          onClick={toggleVideo}
                          variant="ghost"
                          size="icon"
                          className="w-full h-full rounded-full hover:bg-matrix-orange/20 transition-colors"
                        >
                          {videoPlaying ? (
                            <Pause className="w-8 h-8 text-matrix-orange" />
                          ) : (
                            <Play className="w-8 h-8 text-matrix-orange ml-1" />
                          )}
                        </Button>
                      </motion.div>
                      <div className="dune-body text-white/80 max-w-md mx-auto">
                        {videoContexts[currentQuestion - 1]}
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 text-sm text-white/60">
                      <span className="dune-caption">Context Video {currentQuestion}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Progress indicator */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className="flex items-center">
                      <motion.div 
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center dune-subtitle text-sm transition-all duration-300 ${
                          currentQuestion >= step 
                            ? 'border-matrix-orange bg-matrix-orange text-black shadow-lg' 
                            : 'border-matrix-gray text-matrix-gray'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        animate={currentQuestion === step ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {step}
                      </motion.div>
                      {step < 5 && (
                        <motion.div 
                          className={`w-16 h-0.5 ml-4 transition-all duration-500 ${
                            currentQuestion > step ? 'bg-matrix-orange shadow-glow' : 'bg-matrix-gray'
                          }`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: currentQuestion > step ? 1 : 0.3 }}
                          transition={{ duration: 0.5 }}
                        />
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
                className="glass-card rounded-lg p-8"
              >
                <Label className="dune-subtitle text-matrix-orange text-xl tracking-wide block mb-6">
                  Question {currentQuestion}: {questions[currentQuestion - 1]}
                </Label>
                <SpeechToTextArea
                  value={currentAnswer}
                  onChange={handleInputChange}
                  placeholder="Share your deepest thoughts and insights..."
                  autoFocus={true}
                />
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="button"
                    onClick={prevQuestion}
                    disabled={currentQuestion === 1}
                    className={`dune-subtitle px-8 py-4 transition-all duration-300 hover-glow ${
                      currentQuestion === 1 
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50' 
                        : 'glass-effect text-white hover:bg-matrix-gray/80'
                    }`}
                  >
                    PREVIOUS
                  </Button>
                </motion.div>

                <div className="dune-caption text-matrix-orange">
                  {currentQuestion} of 5 • {Math.round(progressPercentage)}% Complete
                </div>

                {currentQuestion < 5 ? (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="button"
                      onClick={nextQuestion}
                      disabled={!canProceed}
                      className={`dune-subtitle px-8 py-4 transition-all duration-300 hover-glow ${
                        !canProceed 
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50' 
                          : 'bg-matrix-orange hover:bg-matrix-orange-glow text-black'
                      }`}
                    >
                      NEXT
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!canProceed}
                      className={`dune-subtitle px-8 py-4 transition-all duration-300 hover-glow ${
                        !canProceed 
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50' 
                          : 'bg-matrix-orange hover:bg-matrix-orange-glow text-black'
                      }`}
                    >
                      CREATE MATRIX
                    </Button>
                  </motion.div>
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
              <div className="glass-card rounded-lg p-12 max-w-2xl mx-auto">
                <motion.h2 
                  className="dune-title text-4xl md:text-5xl text-matrix-orange mb-6"
                  animate={{ 
                    textShadow: [
                      "0 0 10px #FF6A00",
                      "0 0 30px #FF6A00, 0 0 40px #FF6A00",
                      "0 0 10px #FF6A00"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  MATRIX CREATED
                </motion.h2>
                
                <p className="dune-body text-white/90 text-lg mb-8 leading-relaxed">
                  Your personal Matrix has been successfully created. Your consciousness portal is now active and ready to explore the infinite landscapes of your inner world.
                </p>

                {/* Animated matrix symbol */}
                <motion.div 
                  className="w-32 h-32 mx-auto mb-8 border-2 border-matrix-orange relative glass-effect rounded-full"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <div className="absolute inset-4 border border-matrix-orange rounded-full pointer-events-none"></div>
                  <div className="absolute inset-8 border border-matrix-orange rounded-full pointer-events-none"></div>
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-matrix-orange rounded-full pointer-events-none"
                    style={{ transform: 'translate(-50%, -50%)' }}
                    animate={{ 
                      scale: [1, 2, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="button"
                    onClick={handleCreateMatrix}
                    className="bg-matrix-orange hover:bg-matrix-orange-glow text-black dune-subtitle px-12 py-4 text-lg tracking-wider relative overflow-hidden group transition-all duration-300 hover-glow"
                  >
                    <span className="relative z-10">ENTER YOUR WORLD</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
