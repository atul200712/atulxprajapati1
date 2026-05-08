import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">INTRODUCTION</span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight">
            WHO <span className="text-[#FF6B00]">AM I</span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-[#FF6B00]/30 p-1">
              <img src="/pp.png" alt="Atul Prajapati" className="w-full h-full object-cover object-top rounded-full" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Atul Prajapati</h3>
            <p className="text-[#FF6B00] text-sm font-semibold tracking-wider uppercase mb-5">Motion Graphics Expert</p>
            <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed mb-6">
              I'm a motion graphics expert specializing in creating visually stunning animations and kinetic designs. I craft dynamic visual experiences through seamless motion design, compelling transitions, and innovative animation techniques. Whether it's UI animations, promotional videos, or brand storytelling, I bring ideas to life with precision and creativity that captivates viewers.
            </p>

            {/* Stats row */}
            <div className="flex items-center justify-center md:justify-start gap-8">
              <div>
                <span className="font-display text-2xl sm:text-3xl font-black text-white">100+</span>
                <p className="text-[#A0A0A0] text-xs mt-1">Projects</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="font-display text-2xl sm:text-3xl font-black text-white">1.5+</span>
                <p className="text-[#A0A0A0] text-xs mt-1">Years Exp.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
