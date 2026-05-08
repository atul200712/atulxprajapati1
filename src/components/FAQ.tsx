import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are your pricing rates for video editing?",
    answer: "Pricing depends on project complexity, length, and specific requirements. I offer both per-project and retainer-based options. Contact me for a custom quote.",
    category: "Pricing"
  },
  {
    question: "What's your typical turnaround time?",
    answer: "Standard turnaround is 3-5 business days depending on the scope of the project.",
    category: "Workflow"
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, I work with clients globally using platforms like Frame.io for seamless collaboration.",
    category: "Service"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Pricing", "Service", "Technical", "Workflow"];

  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase">Frequently Asked <span className="text-brand">Questions</span></h2>
          <p className="text-gray-500">Find answers to common questions about my video editing services.</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`${
                activeTab === cat ? "bg-brand text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"
              } px-4 py-1.5 rounded-full text-xs font-bold transition-all`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-2xl border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 cursor-pointer text-left focus:outline-none"
              >
                <span className="font-bold">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand' : 'text-gray-500'}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Didn't find your answer?</p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-brand text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all uppercase text-sm" 
            href="#"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

