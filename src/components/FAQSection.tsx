import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  items?: FAQItem[];
}

const FAQSection = ({ items = defaultFAQItems }: FAQSectionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(items.map((item) => item.category))];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative py-20 overflow-hidden" id="faq">


      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Find answers to common questions about my video editing services
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#FF6B00] text-white"
                  : "bg-gray-800/40 text-gray-300 hover:bg-gray-700/40 border border-gray-700/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden hover:border-[#FF6B00]/60 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-gray-800/20 transition-colors"
              >
                <div className="text-left flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white text-left group-hover:text-blue-400">
                    {item.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-[#FF6B00]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-700/30 bg-gradient-to-r from-[#FF6B00]/5 to-orange-500/5">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 mb-4">Didn't find your answer?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#FF6B00] hover:bg-[#E55F00] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Default FAQ Items
const defaultFAQItems: FAQItem[] = [
  {
    id: "1",
    question: "What are your pricing rates for video editing?",
    answer:
      "Pricing is tailored to your project. Let's discuss scope, deadlines, and deliverables, and I'll share a clear quote that fits your needs.",
    category: "Pricing",
  },
  {
    id: "2",
    question: "What's your typical turnaround time?",
    answer:
      "Turnaround times depend on project scope:\n\n• YouTube videos (5-10 min): 3-5 business days\n• Instagram Reels: 1-2 business days\n• Commercial videos: 5-10 business days\n• Short clips/teasers: 1-2 days\n• Rush jobs: Available with 50% surcharge\n\nI always communicate realistic timelines upfront and provide progress updates.",
    category: "Services",
  },
  {
    id: "3",
    question: "What editing software do you use?",
    answer:
      "I use professional industry-standard software:\n\n• Adobe Premiere Pro (Primary editing tool)\n• DaVinci Resolve (Color grading, effects)\n• Adobe After Effects (Motion graphics)\n• Adobe Audition (Audio editing)\n• Filmora (Quick edits and templates)\n\nAll software is updated to the latest versions. I can export in any format your project requires.",
    category: "Technical",
  },
  {
    id: "4",
    question: "Can you add subtitles/captions to videos?",
    answer:
      "Yes, I offer professional subtitle and caption services:\n\n• Automatic speech-to-text captions\n• Manual caption creation for accuracy\n• Multi-language support\n• Styled caption formatting\n• SRT, VTT, or hardcoded subtitle options\n• Timed perfectly to match audio\n\nCaptions increase accessibility and boost YouTube SEO. Highly recommended for all content.",
    category: "Technical",
  },
  {
    id: "5",
    question: "How do I deliver my footage to you?",
    answer:
      "Multiple options for convenient file delivery:\n\n1. Google Drive/Dropbox links\n2. WeTransfer (up to 2GB)\n3. Cloud storage (OneDrive, iCloud)\n4. Email for small files\n5. USB drive (in-person)\n\nI handle all files securely and delete them after project completion (unless you request archival). High-speed internet recommended for large files.",
    category: "Workflow",
  },
  {
    id: "6",
    question: "Do you work with international clients?",
    answer:
      "Yes! I work globally:\n\n✓ Worldwide client base\n✓ Time zone coordination handled\n✓ Multiple payment methods accepted\n✓ International file transfer setup\n✓ Professional service across borders\n\nLocation doesn't matter. Remote collaboration is seamless. I've worked with clients from US, UK, Canada, Australia, Europe, and Asia.",
    category: "Collaboration",
  },
  {
    id: "7",
    question: "Can I see samples of your previous work?",
    answer:
      "Absolutely! Check out my portfolio:\n\n📹 Portfolio gallery: View professional projects\n🎬 Project types: Commercial, YouTube, Reels, Creative\n⭐ Client testimonials: Real feedback from satisfied clients\n\nProjects include:\n• Commercial product videos\n• Instagram & TikTok content\n• YouTube video edits\n• Motion graphics\n• Corporate videos\n\nEach project showcases different editing styles and techniques.",
    category: "Portfolio",
  },
  {
    id: "8",
    question: "What's your experience level?",
    answer:
      "I'm a professional video editor:\n\n✓ 3+ years of editing experience\n✓ Delivered 20+ projects\n✓ Active clients across niches\n✓ Learning continuously to stay sharp\n✓ YouTube, Reels, commercials, and corporate content\n✓ Social media and long-form storytelling focus\n\nI prioritize clear communication and reliable delivery for every project.",
    category: "About Me",
  },
];

export default FAQSection;
