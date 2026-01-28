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
                className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-8 lg:py-0 order-2 lg:order-1"
              >
                <PhoneMockup />

                {/* Footer directly under phone */}
                <div className="mt-8 text-center">
                  <p className="text-purple-200/30 text-xs">
                    Made with 💜 by students, for students
                  </p>
                </div>
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

            {/* Decorative corner elements */}
            <div className="fixed top-4 left-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-3"
              >
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697994709e47ca1b5e88d043/0995f505d_image.png"
                  alt="Sidequester Logo"
                  className="w-10 h-10 object-contain"
                />
                <span 
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "'Pixelify Sans', cursive", letterSpacing: '0.03em', fontWeight: 700 }}
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