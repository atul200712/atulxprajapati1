import { motion } from "framer-motion";

const stats = [
  { label: "Experience", value: "2+ Years" },
  { label: "Videos Edited", value: "150+" },
  { label: "Avg. Retention", value: "85% +", color: "text-brand" },
  { label: "Global Clients", value: "30+" },
];

const techStack = [
  { name: "Premiere Pro", color: "bg-blue-600", icon: "Pr" },
  { name: "After Effects", color: "bg-purple-600", icon: "Ae" },
  { name: "Photoshop", color: "bg-blue-400", icon: "Ps" },
  { name: "Illustrator", color: "bg-orange-600", icon: "Ai" },
];

const ValueProp = () => {
  return (
    <section className="py-24 bg-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-brand text-xs font-bold uppercase tracking-widest">THE BENEFIT</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight uppercase">
            I TURN <span className="text-brand">RAW FOOTAGE</span><br/>INTO DIGITAL LEVERAGE.
          </h2>
          <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
            Specializing in high-retention content for creators and brands. I don't just cut clips; I engineer attention using rhythm, motion, and psychological pacing.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className={`text-4xl font-black ${stat.color || "text-white"}`}>{stat.value}</div>
                <div className="text-gray-500 text-sm font-bold uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-3xl border border-white/5"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-brand"></div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Core Tech Stack</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                <div className={`w-8 h-8 ${tech.color} rounded flex items-center justify-center font-bold text-xs italic shadow-lg`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-bold">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProp;

