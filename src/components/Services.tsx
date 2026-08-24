import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const landscapeItems = [
  {
    title: "SFX Render",
    category: "Motion Graphics",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1779387454/Screenshot_2026-05-21_234046_v7rp4w.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1779387000/renderWithSfx_gdisbe.mp4",
  },
  {
    title: "Babhu's History",
    category: "Motion Graphics",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1778165393/Screenshot_2026-05-07_201940_e2msgw.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1775881090/Render_yccf0w.mp4",
  },
  {
    title: "Collage Animation",
    category: "Creative",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1771559620/Screenshot_2026-02-20_092320_ztfyih.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1763344279/collage_animation_wb5jvf.mp4",
  },
  {
    title: "Nitish Rajput Documentary",
    category: "Documentary",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_095013_xzp02b.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1773118693/nitish_bhai_vrfkkg.mp4",
  },
];

const portraitItems = [
  {
    title: "Brain Neurons",
    category: "Motion Graphics",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1777870629/Screenshot_2026-05-04_102653_bdn4lq.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1777870315/w_sfx_nzgsth.mp4",
  },
  {
    title: "Haldiram Brand Ad",
    category: "Brand Video",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1760550939/Screenshot_2025-10-15_232311_veq5ua.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1762766710/haldiram_brand_qtiapq.mp4",
  },
  {
    title: "UI Motion Graphics",
    category: "Motion Graphics",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1778165870/Screenshot_2026-01-22_130037_no9fkc.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1773118692/ui_ani_mpom8u.mp4",
  },
  {
    title: "How UPI Works",
    category: "Explainer",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1778161764/Screenshot_2026-05-07_191853_zzeaou.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1773119333/How_upi_works_design_google_technology_photoshop_tech_illustration_coding_720P_nd5tvl.mp4",
  },
];

function GalleryCard({ item, index, aspectClass }: { item: typeof landscapeItems[0]; index: number; aspectClass: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative w-full cursor-pointer overflow-hidden rounded-xl bg-white/5 ${aspectClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-hover
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        src={item.videoUrl}
        loop
        muted={isMuted}
        playsInline
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      
      {/* Sound Toggle Button (visible on hover) */}
      <button
        onClick={toggleMute}
        className={`absolute bottom-6 right-6 md:bottom-8 md:right-8 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black shadow-[0_0_15px_rgba(29,191,114,0.4)] transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {isMuted ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </button>

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

      {/* Info */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <span className="mb-2 block font-display text-[10px] uppercase tracking-[0.2em] text-accent opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
          {item.category}
        </span>
        <h3 className="font-display text-xl font-800 uppercase leading-none tracking-tight text-white/90 transition-transform duration-300 group-hover:translate-y-0 group-hover:text-white translate-y-2 md:text-2xl">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="work"
      className="relative min-h-screen px-6 pt-10 pb-28 md:px-12 md:pt-24 md:pb-40"
    >
      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="mb-16 md:mb-20">
          <span className="font-display text-5xl font-900 uppercase tracking-tightest text-white/90 md:text-7xl">
            My Work
          </span>
        </div>

        {/* Landscape Edits */}
        <div className="mb-8 flex items-center gap-4 mt-16">
          <span className="h-px flex-1 bg-white/10" />
          <h3 className="text-xs font-black uppercase tracking-widest text-accent">Landscape Edits</h3>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-10">
          {landscapeItems.map((item, i) => (
            <GalleryCard key={item.title} item={item} index={i} aspectClass="aspect-video" />
          ))}
        </div>

        {/* Portrait Edits */}
        <div className="mb-8 flex items-center gap-4 mt-24">
          <span className="h-px flex-1 bg-white/10" />
          <h3 className="text-xs font-black uppercase tracking-widest text-accent">Portrait Edits</h3>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {portraitItems.map((item, i) => (
            <GalleryCard key={item.title} item={item} index={i} aspectClass="aspect-[4/5] sm:aspect-[9/16]" />
          ))}
        </div>
      </div>
    </section>
  );
}
