import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    { text: "Low retention", icon: <X className="w-5 h-5" /> },
    { text: "People skip", icon: <X className="w-5 h-5" /> },
    { text: "No engagement", icon: <X className="w-5 h-5" /> },
  ];

  const solutions = [
    { text: "Hook-driven edits", icon: <Check className="w-5 h-5" /> },
    { text: "Fast pacing", icon: <Check className="w-5 h-5" /> },
    { text: "Scroll-stopping visuals", icon: <Check className="w-5 h-5" /> },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="problem-solution">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF6B00] text-sm font-semibold tracking-widest uppercase mb-3 block">The Problem</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Why most content <span className="text-[#FF6B00]">doesn't work</span>
          </h2>
        </motion.div>

        {/* Two column grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-16">
          {/* Problems */}
          <motion.div
            className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-red-400/80 font-semibold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              Without the right edits
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                    {problem.icon}
                  </div>
                  <span className="text-white/70 text-base sm:text-lg font-medium">{problem.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              With attention engineering
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#FF6B00]/5 border border-[#FF6B00]/10"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                    {solution.icon}
                  </div>
                  <span className="text-white text-base sm:text-lg font-medium">{solution.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing line */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed">
            Your content doesn't need more views.{" "}
            <span className="text-[#FF6B00]">It needs better watch time.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
