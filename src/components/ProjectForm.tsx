import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectFormProps {
  onClose: () => void;
}

export default function ProjectForm({ onClose }: ProjectFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: ""
  });

  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Focus trap: focus the overlay on mount
  useEffect(() => {
    overlayRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      
      if (!accessKey) {
        throw new Error("Form Access Key is missing. Check .env setup.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Project Inquiry from ${formData.name}: ${formData.title}`,
          from_name: formData.name,
          replyto: formData.email,
          message: formData.description,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        setTimeout(() => onClose(), 2500);
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to submit form. Please check configuration.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={overlayRef}
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9990] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl outline-none"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-[0_0_40px_rgba(29,191,114,0.5)]"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>
            <h3 className="font-display text-3xl font-900 uppercase tracking-tight text-white md:text-4xl">
              Request <span className="text-accent glow-accent">Sent!</span>
            </h3>
            <p className="max-w-sm text-sm text-white/50">
              I'll get back to you within 24 hours. Let's create something impossible together.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-8 shadow-2xl backdrop-blur-sm md:p-12"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-white/50 transition-colors hover:text-white"
              aria-label="Close form"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="mb-10 text-center md:text-left">
              <h2 className="font-display text-4xl font-900 uppercase tracking-tight text-white md:text-5xl">
                Start a <span className="text-accent glow-accent">Project</span>
              </h2>
              <p className="mt-4 text-sm text-white/50">
                Tell me about your vision. Let's create something impossible together.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-6 rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-center text-sm text-red-400">
                {errorMsg}
              </div>
            )}

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent focus:bg-white/10"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent focus:bg-white/10"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent focus:bg-white/10"
                  placeholder="e.g. YouTube Documentary Edit"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                  Project Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent focus:bg-white/10"
                  placeholder="Tell me about the style, pacing, and goals of this project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-4 flex items-center justify-center gap-4 rounded-full bg-accent px-8 py-4 font-display text-sm font-700 uppercase tracking-[0.2em] text-black transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] disabled:opacity-70 disabled:hover:bg-accent disabled:hover:shadow-none"
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
                {!isSubmitting && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
