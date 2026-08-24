import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface NavProps {
  onOpenForm?: () => void;
}

export default function Nav({ onOpenForm }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-[9000] transition-all duration-500 ${scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5" : ""
          }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 md:px-12">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="font-display text-sm font-800 tracking-[0.25em] text-white">
              ATUL PRAJAPATI
            </span>
          </a>

          {/* Main nav links moved to right side */}

          <button
            onClick={onOpenForm}
            className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all hover:border-accent hover:bg-accent hover:text-black md:inline-flex"
          >
            Let's Talk
          </button>

          <button
            onClick={() => setOpen(true)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className="h-px w-7 bg-white" />
            <span className="h-px w-7 bg-white" />
          </button>
        </div>
      </motion.header>

      {/* Floating Vertical Left Navigation (Socials) */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        className="fixed left-10 top-[42%] z-[9000] hidden -translate-y-1/2 flex-col items-start gap-4 md:flex"
      >
        <a href="https://www.youtube.com/@Atulxprajapati" target="_blank" rel="noopener noreferrer" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white/95 transition-all duration-300 ease-out hover:scale-110 hover:border-accent hover:bg-white/5 hover:text-white" aria-label="YouTube">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a href="https://www.instagram.com/atulxprajapati?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white/95 transition-all duration-300 ease-out hover:scale-110 hover:border-accent hover:bg-white/5 hover:text-white" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://www.fiverr.com/s/L3e0Xma" target="_blank" rel="noopener noreferrer" className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur-md font-display text-[15px] font-900 tracking-tighter text-white/95 transition-all duration-300 ease-out hover:scale-110 hover:border-accent hover:bg-white/5 hover:text-white" aria-label="Fiverr">
          fi
        </a>
      </motion.nav>

      {/* Floating Vertical Right Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        className="fixed right-10 top-[42%] z-[9000] hidden -translate-y-1/2 flex-col items-end gap-4 md:flex"
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="group relative flex items-center justify-center bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 text-[10px] font-medium uppercase tracking-[0.25em] text-white/95 transition-all duration-300 ease-out hover:scale-110 hover:bg-white/5 hover:border-accent hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9500] flex flex-col justify-center bg-black px-8 md:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 text-3xl font-light text-white"
              aria-label="Close menu"
            >
              ×
            </button>
            <div className="flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="font-display text-5xl font-800 uppercase tracking-tight text-white"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + links.length * 0.08 }}
                onClick={() => { setOpen(false); onOpenForm?.(); }}
                className="mt-6 w-fit rounded-full bg-accent px-8 py-4 font-display text-sm font-700 uppercase tracking-[0.2em] text-black transition-all hover:bg-white"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
