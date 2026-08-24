import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { title: "Hook", desc: "Instant promise in the first frame. No dead air, no slow setups.", n: "01" },
  { title: "Rhythm", desc: "Cuts, zooms, captions, and beats working together to set the pace.", n: "02" },
  { title: "Visual Pattern", desc: "Breaking the visual pattern to reset the viewer's attention span.", n: "03" },
  { title: "Sound Design", desc: "Using audio cues to engineer attention and psychological pacing.", n: "04" },
  { title: "Payoff", desc: "Every section opens a loop and closes it cleanly for a high hold rate.", n: "05" },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.5"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative px-6 pt-10 pb-28 md:px-12 md:pt-24 md:pb-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <h2 className="font-display text-6xl font-900 uppercase tracking-tightest md:text-7xl">
            My Process
          </h2>
        </div>

        <div ref={ref} className="relative pl-10 md:pl-0">
          {/* base line */}
          <div className="absolute left-3 top-0 h-full w-px bg-white/10 md:left-1/2" />
          {/* animated fill line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-3 top-0 w-px bg-accent md:left-1/2"
          />

          <div className="flex flex-col gap-16 md:gap-28">
            {steps.map((s, i) => {
              const isEven = i % 2 === 1;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16"
                >
                  {/* node */}
                  <span className="absolute -left-[30px] top-0 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(29,191,114,0.8)] md:left-1/2 md:-translate-x-1/2" />

                  {/* Left Column on Desktop / Mobile adapts with order */}
                  <div className={`flex flex-col ${isEven ? 'order-2 md:order-1 md:items-end md:text-right' : 'order-1 md:items-start md:text-left'}`}>
                    {isEven ? (
                      <>
                        <h3 className="font-display text-3xl font-800 uppercase tracking-tight text-white md:text-5xl">
                          {s.title}
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/45">
                          {s.desc}
                        </p>
                      </>
                    ) : (
                      <span className="font-display text-7xl font-900 text-white/10 md:text-9xl">
                        {s.n}
                      </span>
                    )}
                  </div>

                  {/* Right Column on Desktop / Mobile adapts with order */}
                  <div className={`flex flex-col ${isEven ? 'order-1 md:order-2 md:items-end md:text-right' : 'order-2 md:items-start md:text-left'}`}>
                    {isEven ? (
                      <span className="font-display text-7xl font-900 text-white/10 md:text-9xl">
                        {s.n}
                      </span>
                    ) : (
                      <>
                        <h3 className="font-display text-3xl font-800 uppercase tracking-tight text-white md:text-5xl">
                          {s.title}
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/45">
                          {s.desc}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
