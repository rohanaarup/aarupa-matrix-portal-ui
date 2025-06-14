
import { useEffect, useRef } from 'react';

interface SoundEffects {
  playButtonHover: () => void;
  playButtonClick: () => void;
  playPageTransition: () => void;
  playSuccess: () => void;
  playError: () => void;
  playCelestialBlast: () => void;
}

export const useSoundEffects = (): SoundEffects => {
  const soundsRef = useRef<{ [key: string]: any }>({});

  useEffect(() => {
    // Initialize sound effects using Web Audio API only
    const createTone = (frequency: number, duration: number = 0.1, volume: number = 0.3) => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      } catch (error) {
        console.log('Audio not available');
      }
    };

    // Initialize placeholder sounds (using Web Audio API instead of Howler)
    soundsRef.current = {
      initialized: true
    };

    return () => {
      // Cleanup if needed
      soundsRef.current = {};
    };
  }, []);

  const playButtonHover = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.log('Audio not available');
    }
  };

  const playButtonClick = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
    } catch (error) {
      console.log('Audio not available');
    }
  };

  const playPageTransition = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(900, audioContext.currentTime + 0.3);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log('Audio not available');
    }
  };

  const playCelestialBlast = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create a complex celestial blast sound with multiple harmonics
      const frequencies = [2000, 2500, 3200, 4000, 5000];
      
      frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filterNode = audioContext.createBiquadFilter();
        
        oscillator.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // High-pitch celestial frequencies
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(freq * 0.5, audioContext.currentTime + 0.8);
        oscillator.type = index % 2 === 0 ? 'sine' : 'triangle';
        
        // Filter for ethereal quality
        filterNode.type = 'highpass';
        filterNode.frequency.setValueAtTime(1000, audioContext.currentTime);
        filterNode.Q.setValueAtTime(5, audioContext.currentTime);
        
        // Dynamic volume envelope for blast effect
        const startTime = audioContext.currentTime + index * 0.05;
        const volume = 0.15 / (index + 1); // Decreasing volume for harmonics
        
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.exponentialRampToValueAtTime(volume, startTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(volume * 0.7, startTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.8);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + 0.8);
      });
      
      // Add a subtle reverb-like effect with delay
      setTimeout(() => {
        const delayOscillator = audioContext.createOscillator();
        const delayGain = audioContext.createGain();
        
        delayOscillator.connect(delayGain);
        delayGain.connect(audioContext.destination);
        
        delayOscillator.frequency.setValueAtTime(1800, audioContext.currentTime);
        delayOscillator.type = 'sine';
        
        delayGain.gain.setValueAtTime(0, audioContext.currentTime);
        delayGain.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.01);
        delayGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);
        
        delayOscillator.start(audioContext.currentTime);
        delayOscillator.stop(audioContext.currentTime + 0.4);
      }, 200);
      
    } catch (error) {
      console.log('Audio not available');
    }
  };

  const playSuccess = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Play a chord progression for success
      [523, 659, 784].forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
        oscillator.type = 'sine';
        
        const startTime = audioContext.currentTime + index * 0.1;
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.1, startTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + 0.4);
      });
    } catch (error) {
      console.log('Audio not available');
    }
  };

  const playError = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.type = 'sawtooth';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
      console.log('Audio not available');
    }
  };

  return {
    playButtonHover,
    playButtonClick,
    playPageTransition,
    playSuccess,
    playError,
    playCelestialBlast,
  };
};
