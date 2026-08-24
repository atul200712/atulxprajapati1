import { motion } from "framer-motion";

interface ContactProps {
  onOpenForm?: () => void;
}

export default function Contact({ onOpenForm }: ContactProps) {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center md:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/work-2.jpg`}
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(29,191,114,0.18),transparent_50%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">


        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-900 uppercase leading-[0.9] tracking-tightest md:text-8xl"
        >
          Ready to create
          <br />
          something{" "}
          <span className="text-accent glow-accent">impossible?</span>
        </motion.h2>

        <motion.button
          onClick={onOpenForm}
          data-hover
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="group mt-14 inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 font-display text-sm font-700 uppercase tracking-[0.2em] text-black transition-all hover:bg-accent hover:shadow-[0_0_30px_rgba(29,191,114,0.5)]"
        >
          Start a Project
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:rotate-45">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.button>

        <div className="mt-12 flex flex-col items-center gap-2 text-sm tracking-wide text-white/50">
          <a href="mailto:atulxprajapati@gmail.com" className="font-medium text-white/90 transition-colors hover:text-accent">
            atulxprajapati@gmail.com
          </a>
          <a href="tel:+919589243816" className="transition-colors hover:text-accent">
            +91 9589243816
          </a>
          <p>Mehsana, Gujarat, IN</p>
        </div>
      </div>

      <footer className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-white/40 md:flex-row">
          <span>© 2026 Atul Prajapati Studio</span>
          <div className="flex gap-6">
            <a href={`${import.meta.env.BASE_URL}Resume-Video-Editor.pdf`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">Resume</a>
            <a href="https://www.instagram.com/atulxprajapati?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Instagram</a>
            <a href="https://www.youtube.com/@Atulxprajapati" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">YouTube</a>
            <a href="https://www.fiverr.com/s/L3e0Xma" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Fiverr</a>
          </div>
          <span>Views are the result. Retention is the engine.</span>
        </div>
      </footer>
    </section>
  );
}
