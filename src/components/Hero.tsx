import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);

  // mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const tImg = useTransform(sx, (v) => v * 20);
  const tImgY = useTransform(sy, (v) => v * 20);
  const tText = useTransform(sx, (v) => v * -12);
  const tTextY = useTransform(sy, (v) => v * -12);
  const tChar = useTransform(sx, (v) => v * 8);
  const tCharY = useTransform(sy, (v) => v * 8);

  const onMove = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mx.set((e.clientX - r.width / 2) / r.width);
    my.set((e.clientY - r.height / 2) / r.height);
  };

  const { scrollYProgress: globalScroll } = useScroll();
  const indicatorOpacity = useTransform(globalScroll, [0.9, 1], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
      {/* Immersive background scene */}
      <motion.div
        style={{ scale: imgScale, x: tImg, y: tImgY }}
        className="absolute inset-0 -m-8"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/hero.jpg`}
          alt=""
          className="h-full w-full object-cover opacity-50 filter grayscale contrast-125 brightness-50"
        />
      </motion.div>

      {/* Cinematic vignette & subtle green radial lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,5,5,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(29,191,114,0.12),transparent_50%)]" />

      {/* MASSIVE BACKGROUND TYPOGRAPHY */}
      <motion.div
        style={{ scale, y, opacity }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4"
      >
        <motion.div style={{ x: tText, y: tTextY }} className="flex w-full flex-col items-center">
          <h1
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="flex flex-col items-start text-[17vw] font-normal leading-[0.9] tracking-wide text-white/95"
          >
            <span className="block overflow-hidden py-4 -my-4">
              <span className="flex justify-start">
                {"ATUL".split("").map((c, i) => (
                  <motion.span
                    key={`atul-${i}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.4 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    {c}
                  </motion.span>
                ))}
              </span>
            </span>
            <span className="block overflow-hidden py-4 -my-4">
              <span className="flex justify-start">
                {"CREATIVES".split("").map((c, i) => (
                  <motion.span
                    key={`creatives-${i}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.6 + i * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    {c}
                  </motion.span>
                ))}
              </span>
            </span>
          </h1>
        </motion.div>
      </motion.div>

      {/* PORTRAIT IMAGE OF ATUL PRAJAPATI IN THE CENTER */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex h-full items-end justify-center pointer-events-none">
        <motion.div
          style={{ x: tChar, y: tCharY }}
          initial={{ opacity: 0, y: 150, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative h-[120vh] w-auto max-w-none translate-y-[55vh] md:h-[170vh] md:translate-y-[80vh]"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/new-hero-portrait.png`}
            alt="Atul Prajapati"
            className="h-full w-auto object-contain select-none"
          />
          {/* Massive glow behind head */}
          <div className="absolute top-[10%] left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent/40 blur-[120px]" />
        </motion.div>
      </div>

      {/* CINEMATIC STRIP (moved to front, covering bottom cut edge) */}
      <div className="absolute inset-x-0 -bottom-0.5 z-30 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="relative w-[110%] bg-accent py-2.5 shadow-[0_0_30px_rgba(29,191,114,0.6)] md:py-3.5"
        >
          {/* Film strip style borders */}
          <div className="absolute top-1 left-0 right-0 flex justify-between px-2 text-[6px] tracking-[0.4em] text-black/55">
            {"▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣".split("").map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>

          <div className="flex w-max animate-marquee whitespace-nowrap py-1">
            {/* Repeat the text array 3 times to perfectly match the -33.333% CSS marquee animation */}
            {[...Array(3)].map((_, groupIdx) => (
              <span key={groupIdx} className="flex">
                {["ATUL PRAJAPATI STUDIO", "MOTION DESIGNER", "VIDEO EDITOR", "HIGH RETENTION EDITS", "CINEMATIC PACING"].map((w, i) => (
                  <span key={i} className="flex items-center">
                    <span className="mx-6 font-display text-[10px] font-900 uppercase tracking-[0.35em] text-[#050505] md:text-xs">
                      {w}
                    </span>
                    <span className="text-[10px] font-900 text-[#050505] opacity-40">·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>

          <div className="absolute bottom-1 left-0 right-0 flex justify-between px-2 text-[6px] tracking-[0.4em] text-black/55">
            {"▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣".split("").map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Corners UI */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="pointer-events-none absolute inset-0 z-20 hidden md:block"
      >
        {/* Top Left */}
        <span className="absolute left-10 top-28 h-12 w-12 border-l border-t border-white/20" />
        {/* Top Right */}
        <span className="absolute right-10 top-28 h-12 w-12 border-r border-t border-white/20" />

        {/* Bottom Left */}
        <div className="absolute bottom-28 left-10 h-12 w-12 border-b border-l border-white/20">
          <span className="absolute bottom-2 left-4 whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-white/40">
            REC <span className="text-accent">●</span> 4K · CINEMA
          </span>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-28 right-10 h-12 w-12 border-b border-r border-white/20">
          <span className="absolute bottom-2 right-4 whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-white/40">
            LAT 21.17 · LON 72.83
          </span>
        </div>
      </motion.div>

      {/* Play Reel Indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-24 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-2 cursor-pointer pointer-events-auto md:flex"
        onClick={() => {
          const el = document.getElementById("gallery");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            const altEl = document.getElementById("work");
            altEl?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
            Scroll to explore
          </span>
          <div className="h-10 w-px overflow-hidden bg-white/15">
            <motion.div
              animate={{ y: [-40, 40] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="h-4 w-px bg-accent"
            />
          </div>
        </motion.div>
      </motion.div>
      </motion.div>
    </section>
  );
}
