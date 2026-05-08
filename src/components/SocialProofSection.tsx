import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Eye, TrendingUp, ThumbsUp, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "YouTube Creator",
    text: "The edit was clean, structured, and built for retention. The final video felt sharper from the first hook to the closing frame.",
    rating: 5,
  },
  {
    name: "Long-form Channel Owner",
    text: "Atul understood the pacing quickly, communicated clearly, and delivered a polished cut without unnecessary revisions.",
    rating: 5,
  },
  {
    name: "Brand Content Lead",
    text: "The motion graphics, sound design, and pacing made the ad feel more premium while keeping the message easy to follow.",
    rating: 5,
  },
];

const SocialProofSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">TESTIMONIALS</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            CLIENT <span className="text-[#FF6B00]">REVIEWS</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-[#121212] border border-white/5 rounded-2xl p-8 sm:p-10 md:p-12 text-center relative"
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <Quote className="w-10 h-10 text-[#FF6B00]/20 mx-auto mb-6" />

            <p className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < testimonials[current].rating ? 'text-[#FF6B00]' : 'text-white/20'}`}>★</span>
              ))}
            </div>

            <p className="text-white font-semibold text-sm">— {testimonials[current].name}</p>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:text-[#FF6B00] hover:border-[#FF6B00]/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#FF6B00] w-6' : 'bg-white/20'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:text-[#FF6B00] hover:border-[#FF6B00]/30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
