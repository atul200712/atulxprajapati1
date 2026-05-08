import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, ArrowUpRight, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const CTASection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [submitErr, setSubmitErr] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    setSubmitErr("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitErr("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send("service_hxck1or", "template_rnc2ls8", {
        name: formData.name, email: formData.email, title: formData.subject, message: formData.message,
      });
      setSubmitMsg("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitMsg(""), 5000);
    } catch {
      setSubmitErr("Failed to send. Try reaching out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { label: "WhatsApp", icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/919589243816" },
    { label: "Email", icon: <Mail className="w-5 h-5" />, href: "mailto:atulxprajapati@gmail.com" },
    { label: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/atulxprajapati" },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="cta">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">CONTACT</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            LET'S <span className="text-[#FF6B00]">TALK</span>
          </h2>
          <p className="text-[#A0A0A0] text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Got a project in mind? Drop a message and let's make your next video impossible to skip.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div className="md:col-span-3 bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-8" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your name *" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B00]/40 transition-colors" />
                <input type="email" name="email" placeholder="Your email *" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B00]/40 transition-colors" />
              </div>
              <input type="text" name="subject" placeholder="Project subject" value={formData.subject} onChange={handleChange} className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B00]/40 transition-colors" />
              <textarea name="message" placeholder="Tell me about your project... *" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B00]/40 transition-colors resize-none" />

              {submitErr && <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2 text-red-300 text-xs">{submitErr}</div>}
              {submitMsg && <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 text-green-300 text-xs">{submitMsg}</div>}

              <button type="submit" disabled={isSubmitting} className="w-full bg-[#FF6B00] hover:bg-[#E55F00] disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm">
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div className="md:col-span-2 flex flex-col gap-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#121212] border border-white/5 rounded-2xl p-5 sm:p-6 flex items-center gap-4 hover:border-[#FF6B00]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00]/20 transition-colors">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm group-hover:text-[#FF6B00] transition-colors">{link.label}</p>
                  <p className="text-[#A0A0A0] text-xs">Get in touch</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#FF6B00] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}

            {/* Quick CTA */}
            <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 border border-[#10B981]/10 rounded-2xl p-6 text-center flex-1 flex flex-col justify-center">
              <p className="font-display text-lg font-bold text-white mb-1">Available for work</p>
              <p className="text-[#D1FAE5] text-xs font-medium">Fast response • Remote worldwide</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
