import { motion } from 'framer-motion';
import { QrCode, ExternalLink, Sparkles, Users, Gamepad2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import qrCode from '@/app/qr-code.png';

export default function CTASection() {
  const googleFormUrl = "https://forms.gle/9zEPz1c1CHui7zPC6";

  return (
    <div className="flex flex-col items-center lg:items-start">
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 text-center lg:text-left"
          style={{ fontFamily: "'Pixelify Sans', cursive", letterSpacing: '0.05em', fontWeight: 700 }}>

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Break the Loop</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">Chase Novelty</span>
          <br />
          <span className="text-white">Meet new People</span>
        </h1>
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-purple-200/60 text-lg lg:text-xl max-w-md mb-8 text-center lg:text-left leading-relaxed">

        The app that gamifies your campus life.
        <br />
        <span className="text-purple-300/80 italic">Your degree is the Main Quest. Don’t forget the SideQuests.</span>
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex gap-6 mb-8">

        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 text-yellow-400 mb-1">
            <Gamepad2 className="w-4 h-4" />
            <span className="text-2xl font-bold">50+</span>
          </div>
          <span className="text-purple-200/40 text-xs">Quests Ready</span>
        </div>
        <div className="w-px bg-purple-500/20" />
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 text-purple-400 mb-1">
            <Users className="w-4 h-4" />
            <span className="text-2xl font-bold">500+</span>
          </div>
          <span className="text-purple-200/40 text-xs">Beta Waitlist</span>
        </div>
      </motion.div>

      {/* CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative w-full max-w-sm">

        {/* Animated border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-yellow-400 via-purple-500 to-yellow-400 opacity-75 blur-sm animate-pulse" />
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-yellow-400 via-purple-500 to-yellow-400"
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 3s ease infinite'
        }} />

        
        <div className="relative bg-[#1a1a2e] rounded-2xl p-6">
          <div className="text-center mb-4">
            <h3
              className="text-white text-xl font-bold mb-1"
              style={{ fontFamily: "'Pixelify Sans', cursive", letterSpacing: '0.03em', fontWeight: 700 }}>

              Join the Beta
            </h3>
            <p className="text-purple-200/50 text-sm">Be first to play when we launch</p>
          </div>

          {/* QR Code */}
          <div className="bg-white rounded-xl p-4 mb-4 mx-auto w-fit">
            <img
              src={qrCode}
              alt="SideQuester QR code"
              className="w-32 h-32 object-contain"
            />
          </div>

          <p className="text-purple-200/40 text-xs text-center mb-4">Scan to Start Your Quest</p>

          {/* Button */}
          <motion.a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block">

            <Button
              className="w-full h-12 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-bold text-base rounded-xl shadow-lg shadow-yellow-500/25 transition-all duration-300">

              <Sparkles className="w-5 h-5 mr-2" />
              Or Click Here to Join
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.a>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 mt-4 text-purple-200/30 text-xs">
            <span className="">✓ F2P</span>
            <span>✓ UWaterloo exclusive</span>
          </div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-10 text-4xl opacity-20 hidden lg:block">

        🎯
      </motion.div>
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-40 right-20 text-3xl opacity-20 hidden lg:block">

        ⚡
      </motion.div>

      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>);

}
