import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { SiAdobepremierepro, SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

/* ─── Types ─── */
interface ProjectSlide {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  tools: string[];
}

/* ─── Helpers ─── */
const getEmbedUrl = (url: string): string => {
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&/]+)/);
  if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  const ytMatch = url.match(/youtube\.com\/watch\?v=([^?&/]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  return url;
};

const isDirectVideo = (url: string): boolean =>
  /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url) || url.includes("res.cloudinary.com");

const toolData: Record<string, { icon: React.ReactNode; color: string }> = {
  "Premiere Pro": { icon: <SiAdobepremierepro className="w-6 h-6" />, color: "bg-[#9999FF] text-[#00005B]" },
  "After Effects": { icon: <SiAdobeaftereffects className="w-6 h-6" />, color: "bg-[#9999FF] text-[#00005B]" },
  "Photoshop": { icon: <SiAdobephotoshop className="w-6 h-6" />, color: "bg-[#31A8FF] text-[#001E36]" },
  "Illustrator": { icon: <SiAdobeillustrator className="w-6 h-6" />, color: "bg-[#FF9A00] text-[#330000]" },
};

/* ─── Individual Project Section ─── */
const ProjectSection = ({ slide, index }: { slide: ProjectSlide; index: number }) => {
  const [playing, setPlaying] = useState(false);
  const isReversed = index % 2 !== 0;
  const bgColor = index % 2 === 0 ? "#0B0B0B" : "#0E0E0E";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5 py-16 md:py-0" style={{ background: bgColor }}>
      <div className={`w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-24 flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center gap-12 md:gap-16 lg:gap-24 relative`}>
        
        {/* ─── Text side ─── */}
        <div className={`flex-1 flex flex-col justify-center min-w-0 max-w-xl w-full ${isReversed ? 'md:ml-auto' : 'md:mr-auto'}`}>
          <motion.span
            className="text-[#FF6B00] text-xs tracking-[0.2em] uppercase mb-4 block font-semibold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {slide.category}
          </motion.span>

          <motion.h3
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] mb-5"
            style={{ whiteSpace: "pre-line" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {slide.title}
          </motion.h3>

          <motion.p
            className="text-[#888] text-sm sm:text-base leading-relaxed max-w-md mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {slide.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-white/40 text-xs tracking-wider uppercase mb-3 block">Tools Used</span>
            <div className="flex items-center gap-3">
              {slide.tools.map((tool, i) => {
                const td = toolData[tool];
                return (
                  <div key={i} className={`w-11 h-11 rounded-xl flex items-center justify-center ${td?.color || 'bg-white/10 text-white'} transition-transform duration-300 hover:scale-110 cursor-default`} title={tool}>
                    {td?.icon || <span className="text-xs font-bold">{tool.slice(0, 2)}</span>}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ─── Media side ─── */}
        <motion.div 
          className="flex-1 flex items-center justify-center min-w-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        >
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px]">
            {playing ? (
              <div className="relative aspect-[9/14] rounded-2xl overflow-hidden shadow-2xl shadow-black/70">
                <button
                  className="absolute top-3 right-3 z-20 text-white bg-black/60 hover:bg-red-600 rounded-full p-2 transition-colors"
                  onClick={() => setPlaying(false)}
                >
                  <X className="w-5 h-5" />
                </button>
                {isDirectVideo(slide.videoUrl) ? (
                  <video src={slide.videoUrl} className="w-full h-full object-cover" autoPlay controls playsInline loop />
                ) : (
                  <iframe src={getEmbedUrl(slide.videoUrl)} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={slide.title} />
                )}
              </div>
            ) : (
              <div
                className="relative aspect-[9/14] rounded-2xl overflow-hidden cursor-pointer shadow-2xl shadow-black/70 hover:shadow-[#FF6B00]/15 transition-all duration-500 group/card"
                onClick={() => setPlaying(true)}
              >
                <img
                  src={slide.thumbnail}
                  alt={slide.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF6B00] flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110 shadow-lg shadow-[#FF6B00]/30">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Gallery ─── */
const ShowcaseGallery = () => {
  return (
    <div className="w-full bg-[#0B0B0B]" id="showcase">
      {/* Section header */}
      <motion.div
        className="text-center pt-24 sm:pt-32 pb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">FEATURED SHOWCASE</span>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight">
          CASE <span className="text-[#FF6B00]">STUDIES</span>
        </h2>
      </motion.div>

      {/* Render all projects vertically */}
      <div className="flex flex-col">
        {allSlides.map((slide, index) => (
          <ProjectSection key={slide.id} slide={slide} index={index} />
        ))}
      </div>
    </div>
  );
};

/* ─── Slides ─── */
const allSlides: ProjectSlide[] = [
  {
    id: "s1",
    title: "Haldiram\nBrand Ad",
    category: "Brand Story",
    description: "Brand storytelling video showcasing product heritage and quality through cinematic visuals and engaging motion.",
    thumbnail: "/Haldiram.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1762766710/haldiram_brand_qtiapq.mp4",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
  },
  {
    id: "s2",
    title: "Collage\nAnimation",
    category: "Creative",
    description: "Dynamic collage animation blending motion design with creative transitions for a visually striking result.",
    thumbnail: "/Collage animation.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1763344279/collage_animation_wb5jvf.mp4",
    tools: ["After Effects", "Photoshop"],
  },
  {
    id: "s3",
    title: "UI Motion\nGraphics",
    category: "Motion Graphics",
    description: "Smooth UI animation showcasing micro-interactions and motion design skills with clean visual storytelling.",
    thumbnail: "/Ui Animtion.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1773118692/ui_ani_mpom8u.mp4",
    tools: ["After Effects", "Illustrator"],
  },
  {
    id: "s4",
    title: "Cinematic\nRender",
    category: "Cinematic",
    description: "Landscape render showcase with cinematic pacing and clean motion flow. High-quality visuals that keep viewers engaged.",
    thumbnail: "/My video.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1775881090/Render_yccf0w.mp4",
    tools: ["Premiere Pro", "After Effects"],
  },
  {
    id: "s5",
    title: "Nitish Rajput\nDocumentary",
    category: "Documentary",
    description: "Professional documentary edit with cinematic storytelling, tight pacing, and engaging narrative structure.",
    thumbnail: "/Nitish rajput.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1773118693/nitish_bhai_vrfkkg.mp4",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
  },
  {
    id: "s6",
    title: "How UPI\nWorks",
    category: "Explainer",
    description: "Animated explainer breaking down complex concepts into engaging, easy-to-understand visual storytelling.",
    thumbnail: "/UPI.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1773119333/How_upi_works_design_google_technology_photoshop_tech_illustration_coding_720P_nd5tvl.mp4",
    tools: ["Premiere Pro", "After Effects"],
  },
];

export default ShowcaseGallery;
