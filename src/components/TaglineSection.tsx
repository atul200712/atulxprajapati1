import React from "react";
import { motion } from "framer-motion";

const TaglineSection = () => {
  const words = ["HIGH RETENTION", "MOTION DESIGN", "CINEMATIC PACING", "COLOR GRADING", "SOUND DESIGN", "STORYTELLING"];

  return (
    <div className="py-10 bg-[#FF6B00] overflow-hidden whitespace-nowrap flex">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex items-center gap-10"
      >
        {[...words, ...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-black text-4xl md:text-6xl font-black tracking-tighter uppercase">{word}</span>
            <div className="w-4 h-4 rounded-full bg-black"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TaglineSection;
