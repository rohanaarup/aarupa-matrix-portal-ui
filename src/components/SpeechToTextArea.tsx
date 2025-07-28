
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SpeechToTextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export const SpeechToTextArea: React.FC<SpeechToTextAreaProps> = ({
  value,
  onChange,
  placeholder = "Share your deepest thoughts and insights...",
  className = "",
  autoFocus = false
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Check if Speech Recognition is supported
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      setIsSupported(true);
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        if (finalTranscript) {
          const newValue = value + (value ? ' ' : '') + finalTranscript;
          onChange(newValue);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [value, onChange]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <div className="relative">
      <motion.textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full min-h-[200px] glass-effect rounded-lg text-white dune-body resize-none p-6 pr-16 focus:outline-none focus:ring-2 focus:ring-matrix-orange/50 placeholder:text-gray-400 transition-all duration-300 ${className}`}
        placeholder={placeholder}
        autoFocus={autoFocus}
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Microphone Button */}
      {isSupported && (
        <motion.div
          className="absolute bottom-4 right-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            type="button"
            onClick={toggleListening}
            className={`p-3 rounded-full transition-all duration-300 ${
              isListening 
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/50' 
                : 'bg-matrix-orange/20 hover:bg-matrix-orange/30 text-matrix-orange border border-matrix-orange/50'
            }`}
            title={isListening ? 'Stop recording' : 'Start voice input'}
          >
            {isListening ? (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <MicOff className="w-5 h-5" />
              </motion.div>
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </Button>
        </motion.div>
      )}

      {/* Recording Indicator */}
      {isListening && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-2 right-2 flex items-center space-x-2 text-red-400 text-sm dune-caption"
        >
          <motion.div
            className="w-2 h-2 bg-red-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span>RECORDING</span>
        </motion.div>
      )}

      {/* Browser Support Warning */}
      {!isSupported && (
        <div className="absolute bottom-4 right-4 text-xs text-gray-500 dune-caption">
          Voice input not supported in this browser
        </div>
      )}
    </div>
  );
};
