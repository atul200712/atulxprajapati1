import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const coreServices = [
  {
    name: "High-Retention Editing",
    category: "Video Editing",
    tag: "Core",
    img: "/images/work-1.jpg",
    desc: "Crafting narratives with precise pacing, rhythm, and sound design to maximize viewer retention.",
  },
  {
    name: "Motion Graphics",
    category: "Animation & VFX",
    tag: "Core",
    img: "/images/work-2.jpg",
    desc: "Custom kinetic typography, 2D animations, and seamless visual effects to elevate your visual identity.",
  },
  {
    name: "Color Grading",
    category: "Cinematic Finishing",
    tag: "Core",
    img: "/images/work-3.jpg",
    desc: "Professional color correction and cinematic grading to give your raw footage a premium, distinct look.",
  },
];

export default function Work() {
  return (
    <section id="services" className="relative px-6 pt-10 pb-28 md:px-12 md:pt-24 md:pb-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <div>

            <h2 className="font-display text-6xl font-900 uppercase leading-[0.85] tracking-tightest md:text-8xl">
              Core
              <br />
              <span className="text-outline">Services</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/50">
            A curated selection of films and campaigns crafted for brands who
            demand the impossible.
          </p>
        </div>

        <div className="flex flex-col">
          {coreServices.map((s, i) => (
            <ServiceRow key={s.name} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
}: {
  service: (typeof coreServices)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid cursor-pointer grid-cols-1 items-center gap-6 border-t border-white/10 py-8 md:grid-cols-12 md:gap-8 md:py-10"
    >
      <div className="flex items-center gap-4 md:col-span-1">
        <span className="font-display text-sm text-white/40">
          0{index + 1}
        </span>
      </div>

      <div className="md:col-span-5">
        <h3 className="font-display text-4xl font-800 uppercase leading-none tracking-tight transition-colors duration-300 group-hover:text-accent md:text-6xl">
          {service.name}
        </h3>
      </div>

      <div className="md:col-span-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
          {service.category}
        </p>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/40">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}
