import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-24 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-brand text-xs font-bold uppercase tracking-widest">THEY LOVE MY WORK</span>
        <h2 className="text-4xl md:text-5xl font-black mt-4 uppercase">CLIENT <span className="text-brand">REVIEWS</span></h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-card p-10 md:p-16 rounded-[40px] border border-white/5 relative"
        >
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-brand text-8xl opacity-10 select-none">"</div>
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
            "The edit was clean, structured, and built for retention. The final video felt sharper from the first hook to the closing frame."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-brand">★</span>
              ))}
            </div>
            <div className="text-sm font-bold uppercase tracking-widest text-gray-400">— YouTube Creator</div>
          </div>
        </motion.div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-brand"></div>
          <div className="w-2 h-2 rounded-full bg-white/10"></div>
          <div className="w-2 h-2 rounded-full bg-white/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

