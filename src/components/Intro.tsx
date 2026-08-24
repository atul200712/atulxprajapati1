import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words =
  "I create visual stories between reality and imagination.".split(" ");

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.15"],
  });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[85vh] items-center px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-[1400px]">

        <p className="flex flex-wrap font-display text-4xl font-700 leading-[1.05] tracking-tight md:text-7xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} progress={scrollYProgress} range={[start, end]} word={word} />;
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const accent = ["imagination.", "reality"].includes(word);
  return (
    <span className="relative mr-3 mt-2 md:mr-4">
      <motion.span
        style={{ opacity }}
        className={accent ? "text-accent" : "text-white"}
      >
        {word}
      </motion.span>
    </span>
  );
}
