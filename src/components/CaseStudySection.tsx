import React from "react";
import { motion } from "framer-motion";

const CaseStudySection = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden" id="tagline">
      {/* Background diagonal lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)',
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Big stacked tagline */}
          <div className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.95]">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              EDIT<span className="text-[#FF6B00]">.</span>
            </motion.div>
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              DELI<span className="text-[#FF6B00]">VER.</span>
            </motion.div>
            <motion.div
              className="text-[#FF6B00]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              RE<span className="text-white">PEAT.</span>
            </motion.div>
          </div>

          {/* Profile badge */}
          <motion.div
            className="mt-12 inline-flex items-center gap-4 bg-[#121212] border border-white/5 rounded-full px-5 py-2.5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <img src="/pp.png" alt="Atul" className="w-10 h-10 rounded-full object-cover" />
            <div className="text-left">
              <p className="text-white text-sm font-semibold">Atul Prajapati</p>
              <p className="text-[#A0A0A0] text-xs">Video Editor</p>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-[#A0A0A0] text-sm sm:text-base max-w-xl mx-auto mt-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            I don't just cut clips. I build polished edits that keep viewers watching, scrolling, and coming back for more.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
