import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-[#FF6B00] rounded-lg flex items-center justify-center font-black text-black">AP</div>
          <div className="text-xl font-black tracking-tighter uppercase text-white">ATUL<span className="text-[#FF6B00]">XP</span></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-8"
        >
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
            <a href="#hero" className="hover:text-[#FF6B00] transition-colors">Home</a>
            <a href="#showcase" className="hover:text-[#FF6B00] transition-colors">Work</a>
            <a href="#testimonials" className="hover:text-[#FF6B00] transition-colors">Reviews</a>
          </div>
          <a href="#contact" className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#FF6B00] hover:text-white transition-all">
            Contact
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
