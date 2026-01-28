import { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingOverlay from '@/components/landing/LoadingOverlay';
import PhoneMockup from '@/components/landing/PhoneMockup';
import CTASection from '@/components/landing/CTASection';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <LoadingOverlay onComplete={() => setShowContent(true)} />

      <div 
        className="min-h-screen bg-[#121212] overflow-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none">
              {/* Gradient orbs */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
              
              {/* Grid pattern */}
              <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />
            </div>

            {/* Main content */}
            <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
              {/* Mobile: Headline first, then CTA */}
              <div className="lg:hidden order-1 px-6 pt-12 pb-8">
                <CTASection />
              </div>

              {/* Phone Demo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full lg:w-1/2 flex items-center justify-center px-4 py-8 lg:py-0 order-2 lg:order-1"
              >
                <PhoneMockup />
              </motion.div>

              {/* Desktop: CTA Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="hidden lg:flex w-1/2 items-center justify-center px-8 lg:px-16 py-12 order-2"
              >
                <CTASection />
              </motion.div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 py-4 text-center">
              <p className="text-purple-200/30 text-xs">
                Made with 💜 by students, for students
              </p>
            </div>

            {/* Decorative corner elements */}
            <div className="fixed top-4 left-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-yellow-400 flex items-center justify-center">
                  <span className="text-sm">🎮</span>
                </div>
                <span 
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Pixelify Sans', cursive" }}
                >
                  Sidequester
                </span>
              </motion.div>
            </div>

            <div className="fixed top-4 right-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-3"
              >
                <div className="px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                  <span className="text-yellow-400 text-xs font-medium">🎓 UWaterloo Exclusive</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}