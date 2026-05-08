import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-brand text-xs font-bold uppercase tracking-widest">THE PROBLEM</span>
        <h2 className="text-4xl md:text-5xl font-black mt-4">Why most content <span className="text-brand">doesn't work</span></h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Without Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-red-500/20"
          >
            <h3 className="text-xs font-bold text-red-500 uppercase mb-6 flex items-center gap-2">
              <X className="h-4 w-4" />
              Without the right edits
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Low retention
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> People skip
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> No engagement
              </li>
            </ul>
          </motion.div>

          {/* With Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-zinc-900 border border-brand/20 relative"
          >
            <div className="absolute -top-3 -right-3 bg-brand text-white text-[10px] font-bold px-2 py-1 rounded">RECOMMENDED</div>
            <h3 className="text-xs font-bold text-brand uppercase mb-6 flex items-center gap-2">
              <Check className="h-4 w-4" />
              With Attention Engineering
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-brand rounded-full"></div> Hook driven edits
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-brand rounded-full"></div> Fast pacing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-brand rounded-full"></div> Scroll stopping visuals
              </li>
            </ul>
          </motion.div>
        </div>
        
        <p className="mt-12 text-gray-400 text-lg">
          Your content doesn't need more views. <span className="text-brand font-bold italic">It needs better watch time.</span>
        </p>
      </div>
    </section>
  );
};

export default ProblemSolution;

