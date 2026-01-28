import { motion } from 'framer-motion';
import { Skull, Star, Zap, MapPin, Clock, Sparkles } from 'lucide-react';

const difficultyConfig = {
  'Easy': { color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30' },
  'Medium': { color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30' },
  'Hard': { color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/30' },
  'Extreme': { color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30' }
};

export default function QuestCard({ quest, isTop }) {
  const config = difficultyConfig[quest.difficulty] || difficultyConfig['Medium'];

  return (
    <motion.div
      className={`absolute inset-0 rounded-2xl overflow-hidden ${isTop ? 'z-10' : 'z-0'}`}
      style={{
        background: 'linear-gradient(145deg, #1a1a2e 0%, #16162a 100%)'
      }}>

      {/* Card gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full p-5 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className={`px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.color} ${config.border} border`}>
            {quest.difficulty}
          </div>
          <div className="flex items-center gap-1 text-purple-300/60 text-xs">
            <Clock className="w-3 h-3" />
            <span>{quest.time}</span>
          </div>
        </div>

        {/* Quest Icon */}
        <div className="flex-1 flex items-center justify-center my-2">
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative">

            <div className="text-6xl">{quest.icon}</div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 blur-xl bg-purple-500/30 rounded-full -z-10" />

          </motion.div>
        </div>

        {/* Quest Title */}
        <h3
          className="text-lg font-bold text-white mb-1 leading-tight"
          style={{ fontFamily: "'Pixelify Sans', cursive", letterSpacing: '0.02em', fontWeight: 700 }}>

          {quest.title}
        </h3>
        <p className="text-purple-200/50 text-xs mb-3 line-clamp-2">{quest.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-yellow-400/10 rounded-lg p-2 border border-yellow-400/20">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-yellow-400 text-xs font-semibold">{quest.reward}</span>
            </div>
            <span className="text-purple-200/40 text-[10px]">Reward</span>
          </div>
          <div className="bg-purple-400/10 rounded-lg p-2 border border-purple-400/20">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-purple-400 text-xs font-semibold">{quest.xp} XP</span>
            </div>
            <span className="text-purple-200/40 text-[10px]">Experience</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-purple-200/40 text-xs pb-2">
          <MapPin className="w-3 h-3" />
          <span>{quest.location}</span>
        </div>

        {/* Swipe hints */}
        {isTop &&
        <div className="text-purple-300/30 absolute bottom-0.5 left-0 right-0 flex justify-center gap-8 text-xs pb-1">
            <span>← Skip</span>
            <span>Accept →</span>
          </div>
        }
      </div>

      {/* Border glow for top card */}
      {isTop &&
      <div className="absolute inset-0 rounded-2xl border border-purple-500/20 pointer-events-none" />
      }
    </motion.div>);

}