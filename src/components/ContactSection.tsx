import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-[#050505]" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        <div>
          <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase block mb-4">LET'S CONNECT</span>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
            HAVE A <span className="text-[#FF6B00]">VISION?</span><br />LET'S BUILD IT.
          </h2>
          <p className="text-white/40 max-w-md mb-10">
            Open for freelance collaborations, long-term retainer roles, and high-stakes creative projects. Response time usually under 12 hours.
          </p>

          <div className="space-y-6">
            <a href="mailto:atulxprajapati@gmail.com" className="flex items-center gap-4 text-white hover:text-[#FF6B00] transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-black transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-bold tracking-tight">atulxprajapati@gmail.com</span>
            </a>
            <a href="https://instagram.com/atulxprajapati" target="_blank" className="flex items-center gap-4 text-white hover:text-[#FF6B00] transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="font-bold tracking-tight">@atulxprajapati</span>
            </a>
            <a href="https://wa.me/919589243816" target="_blank" className="flex items-center gap-4 text-white hover:text-[#FF6B00] transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-black transition-all">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="font-bold tracking-tight">+91 9589243816</span>
            </a>
          </div>
        </div>

        <div className="bg-[#0f0f0f] p-10 rounded-3xl border border-white/5">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6B00] outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6B00] outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Project Goal</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6B00] outline-none transition-all h-32 resize-none" placeholder="What are we building?"></textarea>
            </div>
            <button className="w-full bg-[#FF6B00] text-black font-black uppercase tracking-[0.2em] py-4 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3">
              <Send className="w-4 h-4" /> SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
