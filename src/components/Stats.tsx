import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 2, suffix: "M+", label: "Views Generated" },
  { value: 100, suffix: "+", label: "Projects Managed" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "+", label: "Trusted Brands" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const dur = 2000;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      
      if (p < 1) {
        setN(Math.round(eased * value));
        raf = requestAnimationFrame(tick);
      } else {
        setN(value);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-14 md:grid-cols-4 md:gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="font-display text-6xl font-900 tracking-tightest text-white glow-accent md:text-8xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white/45">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
