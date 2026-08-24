import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="relative px-6 pt-10 pb-28 md:px-12 md:pt-24 md:pb-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        <div ref={ref} className="relative order-2 md:order-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <motion.img
              style={{ y: imgY }}
              src="/images/portrait-new.png"
              alt="Atul Prajapati"
              className="h-[120%] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Video Editor & Motion Designer
            </div>
          </div>
        </div>

        <div className="order-1 flex flex-col justify-center md:order-2">

          <h2 className="font-display text-4xl font-900 uppercase leading-[0.95] tracking-tight md:text-6xl">
            I turn raw footage into{" "}
            <span className="text-outline">digital leverage.</span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/55">
            I'm Atul Prajapati — a Motion Designer and Video Editor specializing
            in high-retention content for creators and brands. I don't just cut
            clips; I engineer attention using rhythm, motion, and psychological pacing.
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/55">
            A video usually fails before the main point arrives. I rebuild the opening rhythm, visual pattern, and sound cues so the viewer has a reason to stay.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Premiere Pro", "After Effects", "Photoshop", "Motion Graphics", "Sound Design"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-white/60"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
