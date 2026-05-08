import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-6 md:px-20">
      <div className="container mx-auto flex flex-col items-center justify-center relative h-full">
        {/* Main Centered Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Stacked Vertical Typography - Centered */}
          <div className="flex flex-col items-center justify-center select-none pointer-events-none leading-none">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[100px] md:text-[180px] font-black tracking-tighter text-white"
            >
              PO
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-[100px] md:text-[180px] font-black tracking-tighter text-[#FF6B00]"
            >
              RT
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[100px] md:text-[180px] font-black tracking-tighter text-white"
            >
              FO
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-[100px] md:text-[180px] font-black tracking-tighter text-[#FF6B00]"
            >
              LIO
            </motion.h1>
          </div>

          {/* Subtitle / Description - Also Centered */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-10 text-center space-y-4"
          >
            <p className="text-[#FF6B00] font-bold tracking-[0.4em] text-xs uppercase">Editor & Visual Engineer</p>
            <p className="text-white/40 max-w-sm text-xs md:text-sm leading-relaxed mx-auto italic">
              "I don't just edit videos. I make people watch till the end."
            </p>
          </motion.div>
        </div>

        {/* Sticker Cutout - Positioned relative to the middle content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15, 
            delay: 0.5 
          }}
          className="absolute right-0 md:right-[10%] top-1/2 -translate-y-1/2 w-[250px] md:w-[500px] z-20 pointer-events-none opacity-80 md:opacity-100"
        >
          <img 
            src="/cutout.png" 
            alt="Atul Prajapati" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,107,0,0.3)]"
          />
        </motion.div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6B00]/5 rounded-full blur-[150px] -z-10"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#FF6B00] to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
