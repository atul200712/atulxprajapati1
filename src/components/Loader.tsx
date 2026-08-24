import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "नमस्ते",
  "Bonjour",
  "こんにちは",
  "Hola",
  "안녕하세요",
  "Ciao",
  "مرحبا",
  "Olá",
  "Hallo",
  "Привет",
  "สวัสดี",
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [greetIndex, setGreetIndex] = useState(0);

  // Cycle through greetings
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetIndex((p) => (p + 1) % greetings.length);
    }, 280);
    return () => clearInterval(interval);
  }, []);

  // Counter
  useEffect(() => {
    const dur = 2400;
    const start = performance.now();
    let raf: number;

    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 300);
        setTimeout(() => onComplete(), 1000);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Subtle green ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,191,114,0.1),transparent_50%)]" />

          {/* Cycling greetings in center */}
          <div className="relative flex items-center justify-center gap-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>

            <AnimatePresence mode="wait">
              <motion.span
                key={greetIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="font-display text-4xl font-800 text-white md:text-5xl"
              >
                {greetings[greetIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Counter — bottom right */}
          <div className="absolute bottom-8 right-10 flex items-baseline gap-1 md:bottom-12 md:right-14">
            <span className="font-display text-6xl font-900 leading-none tracking-tightest text-white md:text-8xl">
              {count}
            </span>
            <span className="font-display text-xl font-700 text-accent md:text-2xl">
              %
            </span>
          </div>

          {/* Loading label — bottom left */}
          <div className="absolute bottom-10 left-10 flex items-center gap-3 md:bottom-14 md:left-14">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
              Loading Experience
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
