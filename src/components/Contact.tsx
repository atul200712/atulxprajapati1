import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Instagram, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand text-xs font-bold uppercase tracking-widest">CONTACT ME</span>
          <h2 className="text-4xl md:text-6xl font-black mt-4 uppercase">LET'S <span className="text-brand">TALK</span></h2>
          <p className="mt-4 text-gray-400">Got a project in mind? Drop a message and let's make your next video impossible to skip.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-[40px] border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  className="bg-white/5 border-white/10 rounded-xl px-6 py-4 focus:border-brand focus:ring-0 text-sm w-full outline-none" 
                  placeholder="Your Name" 
                  type="text"
                />
                <input 
                  className="bg-white/5 border-white/10 rounded-xl px-6 py-4 focus:border-brand focus:ring-0 text-sm w-full outline-none" 
                  placeholder="Your Email" 
                  type="email"
                />
              </div>
              <input 
                className="w-full bg-white/5 border-white/10 rounded-xl px-6 py-4 focus:border-brand focus:ring-0 text-sm outline-none" 
                placeholder="Project Subject" 
                type="text"
              />
              <textarea 
                className="w-full bg-white/5 border-white/10 rounded-xl px-6 py-4 focus:border-brand focus:ring-0 text-sm min-h-[150px] outline-none" 
                placeholder="Tell me about your project..." 
                rows={4}
              ></textarea>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand text-white font-black py-5 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3" 
                type="submit"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="p-6 bg-white/5 rounded-3xl flex items-center gap-6 border border-white/5 cursor-pointer"
              >
                <div className="w-12 h-12 bg-brand/20 rounded-2xl flex items-center justify-center text-brand">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">WhatsApp</div>
                  <div className="font-bold text-lg">+91 95892 43816</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="p-6 bg-white/5 rounded-3xl flex items-center gap-6 border border-white/5 cursor-pointer"
              >
                <div className="w-12 h-12 bg-brand/20 rounded-2xl flex items-center justify-center text-brand">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</div>
                  <div className="font-bold text-lg">atulxprajapati@gmail.com</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="p-6 bg-white/5 rounded-3xl flex items-center gap-6 border border-white/5 cursor-pointer"
              >
                <div className="w-12 h-12 bg-brand/20 rounded-2xl flex items-center justify-center text-brand">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Instagram</div>
                  <div className="font-bold text-lg">@atulxprajapati</div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="mt-6 p-6 bg-brand/10 rounded-3xl border border-brand/20 cursor-pointer text-center"
            >
              <p className="text-sm text-gray-400 mb-2">Ready to start?</p>
              <p className="font-black uppercase flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

