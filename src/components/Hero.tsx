import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        {/* Big Typography Column */}
        <div className="lg:col-span-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[100px] md:text-[180px] lg:text-[200px] leading-[0.85] font-black tracking-tighter flex flex-col"
          >
            <span>PO</span>
            <span className="text-brand">RT</span>
            <span className="flex items-baseline">FO</span>
            <span>LIO</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4 text-xs font-bold text-gray-500 uppercase"
          >
            <span>Creative</span> • <span>Retentive</span> • <span>Storytelling</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 text-gray-400 max-w-sm italic"
          >
            "I don't just edit videos. I make people watch till the end."
          </motion.p>
        </div>

        {/* Image/Placeholder Column */}
        <div className="lg:col-span-6 flex justify-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-md aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden relative group"
          >
            <img 
              alt="Professional Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="/portrait.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="vertical-text text-xs font-bold text-gray-700 uppercase tracking-widest">
          SCROLL TO EXPLORE • AVINASH EDITS • 2024
        </span>
      </div>
    </section>
  );
};

export default Hero;

