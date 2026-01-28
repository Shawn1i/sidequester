import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import QuestCard from './QuestCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const quests = [
  {
    id: 1,
    title: "Pet a Goose (Safely)",
    description: "Approach the campus guardians. Survive the encounter. Earn eternal glory.",
    icon: "🪿",
    difficulty: "Extreme",
    reward: "+50 Aura",
    xp: 500,
    location: "Ring Road",
    time: "~15 min"
  },
  {
    id: 2,
    title: "Midnight Library Run",
    description: "Study past 2AM in DP. Photograph the chaos. Bond with fellow night owls.",
    icon: "📚",
    difficulty: "Medium",
    reward: "+30 Focus",
    xp: 200,
    location: "Dana Porter Library",
    time: "~3 hrs"
  },
  {
    id: 3,
    title: "Touch Grass Speedrun",
    description: "Go outside between classes. Revolutionary concept. Touch actual grass.",
    icon: "🌱",
    difficulty: "Easy",
    reward: "+20 Sanity",
    xp: 100,
    location: "Arts Quad",
    time: "~5 min"
  },
  {
    id: 4,
    title: "Coffee Shop Socializer",
    description: "Strike up a conversation with a stranger. Make a new friend or acquaintance.",
    icon: "☕",
    difficulty: "Hard",
    reward: "+40 Charisma",
    xp: 350,
    location: "SLC Tim Hortons",
    time: "~20 min"
  },
];

export default function PhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState(0);

  const handleSwipe = (direction) => {
    setExitDirection(direction);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % quests.length);
      setExitDirection(0);
    }, 300);
  };

  return (
    <motion.div
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="relative"
    >
      {/* Phone Frame */}
      <div className="relative mx-auto" style={{ width: '280px', height: '560px' }}>
        {/* Phone body with 3D effect */}
        <div 
          className="absolute inset-0 rounded-[45px] bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900"
          style={{
            boxShadow: `
              0 0 0 2px #2a2a2a,
              0 0 0 4px #1a1a1a,
              0 25px 50px -12px rgba(0, 0, 0, 0.8),
              0 0 80px rgba(168, 85, 247, 0.15),
              inset 0 1px 0 rgba(255,255,255,0.1)
            `,
            transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)'
          }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
          
          {/* Screen */}
          <div className="absolute inset-3 rounded-[38px] overflow-hidden bg-[#0f0f1a]">
            {/* Status Bar */}
            <div className="h-12 px-6 flex items-end justify-between text-white/80 text-xs pb-1">
              <span className="font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-0.5 bg-white/80 rounded-full" style={{ height: 4 + i * 2 }} />
                  ))}
                </div>
                <span className="ml-1">5G</span>
                <div className="w-6 h-3 border border-white/80 rounded-sm ml-1 relative">
                  <div className="absolute inset-0.5 bg-green-400 rounded-sm" style={{ width: '80%' }} />
                </div>
              </div>
            </div>

            {/* App Header */}
            <div className="px-4 py-2 flex items-center justify-between">
              <h2 
                className="text-white text-lg font-bold"
                style={{ fontFamily: "'Pixelify Sans', cursive" }}
              >
                Side Quests
              </h2>
              <div className="flex items-center gap-1 bg-yellow-400/10 px-2 py-1 rounded-full">
                <span className="text-yellow-400 text-xs font-semibold">1,250 XP</span>
              </div>
            </div>

            {/* Card Stack */}
            <div className="relative mx-4 mt-2" style={{ height: '380px' }}>
              {/* Background cards */}
              <motion.div
                className="absolute inset-0"
                style={{ 
                  transform: 'scale(0.92) translateY(16px)',
                  opacity: 0.4,
                }}
              >
                <QuestCard quest={quests[(currentIndex + 2) % quests.length]} isTop={false} />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                style={{ 
                  transform: 'scale(0.96) translateY(8px)',
                  opacity: 0.7,
                }}
              >
                <QuestCard quest={quests[(currentIndex + 1) % quests.length]} isTop={false} />
              </motion.div>

              {/* Top card with swipe animation */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentIndex}
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0, x: 0, rotate: 0 }}
                  exit={{ 
                    x: exitDirection * 300, 
                    opacity: 0, 
                    rotate: exitDirection * 20,
                    transition: { duration: 0.3 }
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x > 100 || velocity.x > 500) {
                      handleSwipe(1);
                    } else if (offset.x < -100 || velocity.x < -500) {
                      handleSwipe(-1);
                    }
                  }}
                >
                  <QuestCard quest={quests[currentIndex]} isTop={true} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom nav hint */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="w-32 h-1 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Side button */}
          <div className="absolute right-[-2px] top-28 w-1 h-12 bg-zinc-600 rounded-l-sm" />
          <div className="absolute left-[-2px] top-24 w-1 h-8 bg-zinc-600 rounded-r-sm" />
          <div className="absolute left-[-2px] top-36 w-1 h-14 bg-zinc-600 rounded-r-sm" />
        </div>
      </div>

      {/* Swipe buttons for desktop */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSwipe(-1)}
          className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSwipe(1)}
          className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Glow effect under phone */}
      <div 
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-purple-500/20 blur-3xl rounded-full"
      />
    </motion.div>
  );
}