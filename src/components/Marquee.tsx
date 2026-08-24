import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "CINEMATIC",
  "AI FILMMAKING",
  "MOTION",
  "STORYTELLING",
  "VISUAL WORLDS",
  "DIRECTION",
];

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  const row = [...words, ...words, ...words];
  return (
    <div
      ref={ref}
      className="relative overflow-hidden py-2.5"
      style={{
        background: "#1DBF72",
        transform: "rotate(-1.5deg) scaleX(1.04)",
        marginTop: "-1rem",
        marginBottom: "-1rem",
        zIndex: 10,
      }}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center">
            <span
              className="px-6 font-display text-2xl font-900 uppercase tracking-tight md:text-3xl"
              style={{ color: "#050505" }}
            >
              {w}
            </span>
            <span className="text-xl md:text-2xl" style={{ color: "#050505", opacity: 0.4 }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
