import React from "react";
import { motion } from "framer-motion";
import { SiAdobeaftereffects, SiAdobepremierepro, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

const WhoAmI = () => {
  const stats = [
    { label: "Experience", value: "2+ Years" },
    { label: "Projects", value: "150+" },
    { label: "Retention", value: "85%+" },
    { label: "Clients", value: "30+" }
  ];

  const tools = [
    { icon: <SiAdobepremierepro className="w-6 h-6" />, name: "Premiere Pro", color: "text-[#9999FF]" },
    { icon: <SiAdobeaftereffects className="w-6 h-6" />, name: "After Effects", color: "text-[#CF96FD]" },
    { icon: <SiAdobephotoshop className="w-6 h-6" />, name: "Photoshop", color: "text-[#31A8FF]" },
    { icon: <SiAdobeillustrator className="w-6 h-6" />, name: "Illustrator", color: "text-[#FF9A00]" }
  ];

  return (
    <section className="py-20 bg-[#080808] border-y border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase block mb-4">THE STORY</span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 uppercase tracking-tighter">
            I turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-white">raw footage</span> into digital leverage.
          </h2>
          <p className="text-white/40 leading-relaxed mb-10 max-w-lg">
            Specializing in high-retention content for creators and brands. I don't just cut clips; I engineer attention using rhythm, motion, and psychological pacing.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111] p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/10 blur-[60px] group-hover:bg-[#FF6B00]/20 transition-colors"></div>
          <h3 className="text-white font-bold mb-8 flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#FF6B00]"></div>
            CORE TECH STACK
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {tools.map((tool, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-[#FF6B00]/30 transition-all cursor-default">
                <div className={tool.color}>{tool.icon}</div>
                <div className="text-xs font-bold text-white/80">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
