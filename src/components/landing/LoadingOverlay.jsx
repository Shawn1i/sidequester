import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingOverlay({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0: initial, 1: second text, 2: fade out

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 1500);
    const timer2 = setTimeout(() => setPhase(2), 3000);
    const timer3 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center"
        >
          <div className="relative">
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="w-full h-full opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)]" />
            </div>

            {/* Glowing orb behind text */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 blur-3xl bg-purple-500/20 rounded-full"
            />

            <AnimatePresence mode="wait">
              {phase === 0 && (
                <motion.div
                  key="phase0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <h1 
                    className="text-4xl md:text-6xl text-white tracking-wider"
                    style={{ fontFamily: "'Pixelify Sans', cursive" }}
                  >
                    Main Quest Paused...
                  </h1>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5 }}
                    className="h-1 bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-500 mt-4 rounded-full"
                  />
                </motion.div>
              )}

              {phase === 1 && (
                <motion.div
                  key="phase1"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ 
                      textShadow: [
                        '0 0 20px rgba(168, 85, 247, 0.8)',
                        '0 0 40px rgba(168, 85, 247, 0.8)',
                        '0 0 20px rgba(168, 85, 247, 0.8)',
                      ]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <h1 
                      className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 tracking-wider"
                      style={{ fontFamily: "'Pixelify Sans', cursive" }}
                    >
                      New Side Quest Discovered
                    </h1>
                  </motion.div>
                  
                  {/* Sparkle effects */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, (i % 2 ? 1 : -1) * (20 + i * 10)],
                        y: [0, (i % 3 ? -1 : 1) * (15 + i * 8)],
                      }}
                      transition={{ 
                        duration: 0.8,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                      className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
                      style={{ filter: 'blur(1px)' }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Corner decorations */}
            <div className="absolute -top-8 -left-8 w-4 h-4 border-t-2 border-l-2 border-purple-500/50" />
            <div className="absolute -top-8 -right-8 w-4 h-4 border-t-2 border-r-2 border-purple-500/50" />
            <div className="absolute -bottom-8 -left-8 w-4 h-4 border-b-2 border-l-2 border-purple-500/50" />
            <div className="absolute -bottom-8 -right-8 w-4 h-4 border-b-2 border-r-2 border-purple-500/50" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}