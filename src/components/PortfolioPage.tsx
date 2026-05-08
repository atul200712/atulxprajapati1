import { useState } from "react";
import { Check, ChevronDown, Instagram, Mail, MessageCircle, Play, Send, X } from "lucide-react";
import portraitUrl from "./assests/hero.png";
import appImageUrl from "./assests/app.jpg";

type ProjectVideo = {
  label: string;
  thumbnail: string;
  videoUrl: string;
};

type Project = {
  category: string;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
  tools: string[];
  orientation?: "portrait" | "landscape";
  videos?: ProjectVideo[];
};

const motionGraphicThumbnail =
  "https://res.cloudinary.com/dq1fra5dd/image/upload/v1777870629/Screenshot_2026-05-04_102653_bdn4lq.png";

const projects: Project[] = [
  {
    category: "Motion Graphics",
    title: "Motion Graphic\nEdit",
    description:
      "Cinematic motion graphic edit with clean pacing, animated visual flow, and high-quality render polish.",
    image: motionGraphicThumbnail,
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1775881090/Render_yccf0w.mp4",
    tools: ["Premiere Pro", "After Effects"],
    videos: [
      {
        label: "Babhu's History",
        thumbnail:
          "https://res.cloudinary.com/dq1fra5dd/image/upload/v1778165393/Screenshot_2026-05-07_201940_e2msgw.png",
        videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1775881090/Render_yccf0w.mp4",
      },
      {
        label: "Brain Neurons",
        thumbnail: motionGraphicThumbnail,
        videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1777870315/w_sfx_nzgsth.mp4",
      },
    ],
  },
  {
    category: "Brand Video",
    title: "Haldiram\nBrand Ad",
    description:
      "Brand storytelling video showcasing product heritage and quality through cinematic visuals and engaging motion.",
    image:
      "https://res.cloudinary.com/dq1fra5dd/image/upload/v1760550939/Screenshot_2025-10-15_232311_veq5ua.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1762766710/haldiram_brand_qtiapq.mp4",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
  },
  {
    category: "Creative",
    title: "Collage\nAnimation",
    description:
      "Abstract storytelling using stop-motion style collage and rhythmic editing for a unique visual experience.",
    image:
      "https://res.cloudinary.com/dq1fra5dd/image/upload/v1771559620/Screenshot_2026-02-20_092320_ztfyih.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1763344279/collage_animation_wb5jvf.mp4",
    tools: ["After Effects", "Photoshop"],
    orientation: "landscape",
  },
  {
    category: "Motion Graphics",
    title: "UI Motion\nGraphics",
    description:
      "Smooth UI animation showcasing complex interactions and mobile design skills with clean visual storytelling.",
    image:
      "https://res.cloudinary.com/dq1fra5dd/image/upload/v1778165870/Screenshot_2026-01-22_130037_no9fkc.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1773118692/ui_ani_mpom8u.mp4",
    tools: ["After Effects", "Illustrator"],
  },
  {
    category: "Documentary",
    title: "Nitish Rajput\nDocumentary",
    description:
      "Research-based educational content with high-paced motion graphics to keep viewers hooked for long durations.",
    image:
      "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_095013_xzp02b.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1773118693/nitish_bhai_vrfkkg.mp4",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    orientation: "landscape",
  },
  {
    category: "Explainer",
    title: "How UPI\nWorks",
    description:
      "Animated explainer breaking down complex concepts into engaging, easy-to-understand visual storytelling.",
    image:
      "https://res.cloudinary.com/dq1fra5dd/image/upload/v1778161764/Screenshot_2026-05-07_191853_zzeaou.png",
    videoUrl:
      "https://res.cloudinary.com/dq1fra5dd/video/upload/v1773119333/How_upi_works_design_google_technology_photoshop_tech_illustration_coding_720P_nd5tvl.mp4",
    tools: ["Premiere Pro", "After Effects"],
  },
];

const tools = [
  { name: "Premiere Pro", abbr: "Pr", className: "text-[#9999FF] border-[#9999FF]/70" },
  { name: "After Effects", abbr: "Ae", className: "text-[#CF96FD] border-[#CF96FD]/70" },
  { name: "Photoshop", abbr: "Ps", className: "text-[#31A8FF] border-[#31A8FF]/70" },
  { name: "Illustrator", abbr: "Ai", className: "text-[#FF9A00] border-[#FF9A00]/70" },
];

const toolByName = Object.fromEntries(tools.map((tool) => [tool.name, tool]));

function AdobeMark({ abbr, className }: { abbr: string; className: string }) {
  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border bg-black/20 text-2xl font-black tracking-tighter ${className}`}>
      {abbr}
    </span>
  );
}

const faqs = [
  {
    question: "What are your pricing rates for video editing?",
    answer:
      "Pricing depends on project complexity, video length, and delivery requirements. I offer project-based and monthly retainer options after understanding the scope.",
  },
  {
    question: "What's your typical turnaround time?",
    answer: "Standard turnaround is usually 3-5 business days. Short-form edits can move faster depending on the brief and footage quality.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. I work remotely with creators and brands using Drive, Frame.io, WhatsApp, and email for smooth collaboration.",
  },
];

const posts = [
  {
    category: "YouTube",
    title: "How to Create Engaging YouTube Videos - Complete Guide",
    excerpt:
      "Master the art of creating compelling YouTube content with professional editing techniques that keep viewers engaged.",
    date: "Sep 22, 2023",
    readTime: "7 min read",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqfEFmgAantJvGc1X98okthC8sF64MwtkYXPlWo2MWOmXtNbMXkOoneQ8Trw76YmPkmcqnDRCAt6kpT5gg92nHec2zTITpLS92gR_zo0IydW0nkVw7aZIySfKsiv3rezokWhAJcQlz4tkA9szxVFFvCzB6SXoG5ALk00uJJdLU8WsIpW1EzEVnbBBI3OXUZIjXtSGWksDm4kW9UjzuyJhwq8i66Gp2gUF36xgEYfS-ucDeilRgDDaTq4hhCkoy4Wg5dWJi2pa4mlDx",
  },
  {
    category: "Social Media",
    title: "Instagram Reels Editing - Trending Techniques",
    excerpt:
      "Learn the latest editing techniques to create viral Instagram Reels that engage your audience and build your brand.",
    date: "Oct 05, 2023",
    readTime: "5 min read",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8A0pUDB_qaF-ZbNLfsBpKaz4uTr0d_MWGQNRe6OgNxWmEOaJVbWVIN2JEdn0XymeDXgDLV9xjHS-9lYhhSBf5sv5rSdkA-3khf-StM1mC01mX6Wk3gBeH-hBtkk0TBJZeeG3cRBiJZvZ49wRHIuPYRhPtrZ5PB1MoXymmMxXwyIWjiw6vfiBPddRIxXAhakb1Md5uLCT61DwR0DXCI4yJnzVZyDq_2TrFyYqBYehIiuFUm2hgUdTzG3htZBI9A1G-yoYGnDtLiwjg",
  },
  {
    category: "Color",
    title: "Essential Color Correction Workflow",
    excerpt:
      "Learn a simple yet professional color correction workflow to give your videos a cinematic look and feel.",
    date: "Oct 12, 2023",
    readTime: "10 min read",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABwfbYGB9d4c8II0wabiC7wcq6cMp1l5dF_2Xj9OV2ktT0RPJV3K1YsKW_8ZoyZqa8xhJCOJkKzpo_5XjzIDqeGlAFY8nN-SPnyOdzvQYv5CMDQ_JdUR9ZYfcWfcPKiHOuzPseaGbWjXUidZAmUXWHRpROfaKiKNqnxp1SIyrmhN2-v4hwAAu-nQuIfAIY8sW5aiea5ekWBTfOSDiKmUj1-CYEOwB5FEnWugP8DCqUHC9sRW9yO55cl8Cw-g4MPQi3X0ngQyqroMAw",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand font-black text-dark">AP</div>
      <span className="text-xl font-bold uppercase tracking-tighter">
        Atul<span className="text-brand">XP</span>
      </span>
    </div>
  );
}

function PlayCard({
  image,
  title,
  videoUrl,
  videos,
  orientation = "portrait",
}: {
  image: string;
  title: string;
  videoUrl: string;
  videos?: ProjectVideo[];
  orientation?: "portrait" | "landscape";
}) {
  const cards = videos?.length ? videos : [{ label: "Play", thumbnail: image, videoUrl }];
  const [activeVideo, setActiveVideo] = useState<ProjectVideo | null>(null);
  const frameClass =
    orientation === "landscape"
      ? "aspect-video max-w-[680px] rounded-[28px]"
      : "aspect-[9/16] max-w-[340px] rounded-[32px] lg:max-w-[380px]";

  if (activeVideo && cards.length === 1) {
    return (
      <div className={`relative mx-auto flex w-full items-center overflow-hidden border border-white/10 bg-black shadow-2xl shadow-black/50 ${frameClass}`}>
        <button
          aria-label="Close video"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-brand"
          onClick={() => setActiveVideo(null)}
          type="button"
        >
          <X className="h-5 w-5" />
        </button>
        <video
          autoPlay
          className="max-h-full w-full bg-black object-contain"
          controls
          playsInline
          src={activeVideo.videoUrl}
        />
      </div>
    );
  }

  if (cards.length > 1) {
    return (
      <div className="relative mx-auto aspect-[9/16] w-full max-w-[380px]">
        {cards.map((card, index) => {
          const isActive = activeVideo?.videoUrl === card.videoUrl;
          const positionClass = index === 0 ? "-translate-x-8 -rotate-6" : "translate-x-8 rotate-6";
          const inactiveDepthClass = "z-10 shadow-black/50";

          if (isActive) {
            return (
              <div
                className={`absolute inset-0 z-30 flex items-center overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-2xl shadow-black/60 transition-all duration-300 ${positionClass}`}
                key={card.label}
              >
                <button
                  aria-label="Close video"
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-brand"
                  onClick={() => setActiveVideo(null)}
                  type="button"
                >
                  <X className="h-5 w-5" />
                </button>
                <video
                  autoPlay
                  className="max-h-full w-full bg-black object-contain"
                  controls
                  playsInline
                  src={card.videoUrl}
                />
              </div>
            );
          }

          return (
            <button
              className={`group absolute inset-0 overflow-hidden rounded-[32px] border border-white/10 bg-neutral-900 text-left shadow-2xl transition-all duration-300 hover:z-40 hover:rotate-0 hover:scale-[1.03] ${positionClass} ${inactiveDepthClass}`}
              key={card.label}
              onClick={() => setActiveVideo(card)}
              type="button"
            >
              <img alt={`${title} ${card.label}`} className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" src={card.thumbnail} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-widest text-white backdrop-blur">
                {card.label}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-white text-white" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <button
      className={`group relative mx-auto block w-full cursor-pointer overflow-hidden border border-white/5 bg-neutral-900 text-left shadow-2xl shadow-black/50 ${frameClass}`}
      onClick={() => setActiveVideo(cards[0])}
      type="button"
    >
      <img alt={title} className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" src={image} />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all group-hover:bg-black/20">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand transition-transform group-hover:scale-110">
          <Play className="ml-1 h-8 w-8 fill-white text-white" />
        </div>
      </div>
    </button>
  );
}

const PortfolioPage = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-dark font-sans text-white selection:bg-brand selection:text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-dark/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="hidden items-center gap-8 text-sm font-medium text-gray-400 md:flex">
            <a className="transition-colors hover:text-brand" href="#home">Home</a>
            <a className="transition-colors hover:text-brand" href="#work">Work</a>
            <a className="transition-colors hover:text-brand" href="#contact">Contact</a>
            <a className="rounded-full bg-white px-5 py-2 font-bold text-dark transition-all hover:bg-brand hover:text-white" href="#contact">Hire Me</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative min-h-screen overflow-hidden pb-20 pt-32" id="home">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-6">
              <h1 className="flex flex-col text-[82px] font-black leading-[0.85] tracking-tighter sm:text-[120px] md:text-[180px]">
                <span>PO</span>
                <span className="text-brand">RT</span>
                <span className="flex items-baseline">FO </span>
                <span>LIO</span>
              </h1>
              <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold uppercase text-gray-500 sm:gap-4">
                <span>Creative</span><span>•</span><span>Retention</span><span>•</span><span>Storytelling</span>
              </div>
              <p className="mt-4 max-w-sm text-gray-400 italic">"I don't just edit videos. I make people watch till the end."</p>
            </div>
            <div className="relative flex justify-center lg:col-span-6">
              <div className="group relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-dark isolate">
                <img alt="Atul Prajapati" className="h-full w-full object-cover object-top scale-[1.4] origin-[50%_10%] grayscale transition-all duration-700 hover:grayscale-0 hover:scale-[1.45]" src={portraitUrl} />
                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-2 ring-inset ring-dark bg-gradient-to-t from-dark via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-dark py-24" id="about">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">The Benefit</span>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-5xl">
                I turn <span className="text-brand">raw footage</span><br />into digital leverage.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-gray-400">
                Specializing in high-retention content for creators and brands. I don't just cut clips; I engineer attention using rhythm, motion, and psychological pacing.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-8">
                {[
                  ["2+ Years", "Experience"],
                  ["150+", "Videos Edited"],
                  ["85%+", "Avg. Retention"],
                  ["30+", "Global Clients"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className={`text-4xl font-black ${label.includes("Retention") ? "text-brand" : ""}`}>{value}</div>
                    <div className="mt-1 text-sm font-bold uppercase text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/5 bg-card p-8">
              <div className="mb-8 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Core Tech Stack</span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {tools.map(({ abbr, className, name }) => (
                  <div className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/5" key={name}>
                    <AdobeMark abbr={abbr} className={className} />
                    <span className="text-sm font-bold">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y-4 border-black bg-brand py-6">
          <div className="marquee-track text-2xl font-black uppercase italic tracking-tighter text-black md:text-4xl">
            <span>MOTION DESIGN • CINEMATIC PACING • COLOR GRADING • SOUND DESIGN • STORYTELLING • HIGH RETENTION EDITS •</span>
            <span>MOTION DESIGN • CINEMATIC PACING • COLOR GRADING • SOUND DESIGN • STORYTELLING • HIGH RETENTION EDITS •</span>
          </div>
        </div>

        <section className="bg-dark px-6 py-24" id="work">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-brand">Featured Projects</span>
              <h2 className="text-outline mt-2 text-6xl font-black uppercase tracking-tighter md:text-8xl">
                CASE <span className="text-brand [-webkit-text-stroke:0]">STUDIES</span>
              </h2>
            </div>
            <div className="space-y-40 md:space-y-48">
              {projects.map((project, index) => (
                <div
                  className={`relative overflow-hidden rounded-[36px] border border-white/20 bg-white/[0.045] p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl md:p-12 lg:grid lg:grid-cols-2 lg:items-center ${
                    index % 2 === 0 ? "lg:gap-28" : "lg:gap-40 xl:gap-52"
                  }`}
                  key={project.title}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-white/[0.02]" />
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <div className={`${index % 2 === 0 ? "order-2 lg:order-1" : "lg:order-2"} relative mx-auto mt-14 w-full max-w-xl lg:mt-0`}>
                    <span className="text-xs font-bold uppercase text-brand">{project.category}</span>
                    <h3 className="mt-4 whitespace-pre-line text-4xl font-black leading-tight md:text-5xl">{project.title}</h3>
                    <p className="mt-6 max-w-md leading-relaxed text-gray-400">{project.description}</p>
                    <div className="mt-8 flex gap-3">
                      {project.tools.map((toolName) => {
                        const tool = toolByName[toolName];
                        return (
                          <div
                            className="flex h-12 w-12 items-center justify-center"
                            key={toolName}
                            title={toolName}
                          >
                            {tool ? <AdobeMark abbr={tool.abbr} className={tool.className} /> : <span className="text-[10px] font-black">{toolName.slice(0, 2)}</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={`${index % 2 === 0 ? "order-1 lg:order-2" : "lg:order-1"} relative flex w-full justify-center`}>
                    <PlayCard
                      image={project.image}
                      title={project.title}
                      videoUrl={project.videoUrl}
                      videos={project.videos}
                      orientation={project.orientation}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black py-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
          <div className="mx-auto max-w-6xl px-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">The Retention Diagnosis</span>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Why viewers leave in the <span className="text-brand">first 8 seconds</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
              A video usually fails before the main point arrives. I rebuild the opening rhythm, visual pattern, and sound cues so the viewer has a reason to stay.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-6 text-left lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
              <div className="rounded-3xl border border-red-500/20 bg-[#0d0d0f] p-7 shadow-2xl shadow-red-950/10">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-400">
                    <X className="h-4 w-4" /> Weak Edit
                  </h3>
                  <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[10px] font-bold uppercase text-red-300">Drop-off</span>
                </div>
                <div className="space-y-5">
                  {[
                    ["0-3 sec", "No hook, no curiosity gap"],
                    ["4-8 sec", "Dead air and slow setup"],
                    ["9+ sec", "Viewer scrolls before payoff"],
                  ].map(([time, text]) => (
                    <div className="flex gap-4 rounded-2xl bg-white/[0.03] p-4" key={time}>
                      <div className="min-w-14 text-sm font-black text-red-400">{time}</div>
                      <p className="text-sm font-medium text-gray-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative flex h-full min-h-32 w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-3xl border border-brand/30 bg-brand p-6 text-black lg:w-44">
                  <div className="text-[11px] font-black uppercase tracking-widest opacity-70">Watch Time</div>
                  <div className="mt-2 text-5xl font-black tracking-tighter">+85%</div>
                  <div className="mt-2 text-center text-xs font-bold uppercase leading-snug">built with pacing, pattern breaks, and payoff</div>
                  <div className="absolute -bottom-8 -right-5 text-8xl font-black italic opacity-10">PLAY</div>
                </div>
              </div>

              <div className="rounded-3xl border border-brand/25 bg-[#151515] p-7 shadow-2xl shadow-black/40">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand">
                    <Check className="h-4 w-4" /> Attention Edit
                  </h3>
                  <span className="rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-[10px] font-bold uppercase text-brand">Hold rate</span>
                </div>
                <div className="space-y-5">
                  {[
                    ["Hook", "Instant promise in the first frame"],
                    ["Rhythm", "Cuts, zooms, captions, and beats working together"],
                    ["Payoff", "Every section opens a loop and closes it cleanly"],
                  ].map(([label, text]) => (
                    <div className="flex gap-4 rounded-2xl bg-brand/[0.06] p-4" key={label}>
                      <div className="min-w-14 text-sm font-black text-brand">{label}</div>
                      <p className="text-sm font-medium text-white">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-12 text-lg text-gray-400">
              Views are the result. <span className="font-bold italic text-brand">Retention is the engine.</span>
            </p>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">They Love My Work</span>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">Client <span className="text-brand">Reviews</span></h2>
            <div className="relative mt-16 rounded-[40px] border border-white/5 bg-card p-10 md:p-16">
              <div className="absolute left-1/2 top-10 -translate-x-1/2 text-6xl text-brand opacity-20">"</div>
              <blockquote className="mb-8 text-xl font-medium leading-relaxed md:text-2xl">
                "The edit was clean, structured, and built for retention. The final video felt sharper from the first hook to the closing frame."
              </blockquote>
              <div className="flex flex-col items-center">
                <div className="mb-4 text-brand">★★★★★</div>
                <div className="text-sm font-bold uppercase tracking-widest">— YouTube Creator</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-dark px-6 py-24" id="contact">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-brand">Contact Me</span>
              <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">Let's <span className="text-brand">Talk</span></h2>
              <p className="mt-4 text-gray-400">Got a project in mind? Drop a message and let's make your next video impossible to skip.</p>
            </div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="rounded-[40px] border border-white/5 bg-card p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <input className="rounded-xl border-white/10 bg-white/5 px-6 py-4 text-sm focus:border-brand focus:ring-0" placeholder="Your Name" type="text" />
                    <input className="rounded-xl border-white/10 bg-white/5 px-6 py-4 text-sm focus:border-brand focus:ring-0" placeholder="Your Email" type="email" />
                  </div>
                  <input className="w-full rounded-xl border-white/10 bg-white/5 px-6 py-4 text-sm focus:border-brand focus:ring-0" placeholder="Project Subject" type="text" />
                  <textarea className="w-full rounded-xl border-white/10 bg-white/5 px-6 py-4 text-sm focus:border-brand focus:ring-0" placeholder="Tell me about your project..." rows={4} />
                  <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-brand py-5 font-black uppercase tracking-widest text-white transition-all hover:brightness-110" type="submit">
                    Send Message <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
              <div className="flex flex-col justify-between">
                <div className="space-y-6">
                  {[
                    [MessageCircle, "WhatsApp", "+91 95892 43816", "https://wa.me/919589243816"],
                    [Mail, "Email", "atulxprajapati@gmail.com", "mailto:atulxprajapati@gmail.com"],
                    [Instagram, "Instagram", "@atulxprajapati", "https://instagram.com/atulxprajapati"],
                  ].map(([Icon, label, value, href]) => {
                    const ContactIcon = Icon as typeof MessageCircle;
                    return (
                      <a className="flex items-center gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 transition-colors hover:border-brand/30" href={href as string} key={label as string}>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/20 text-brand"><ContactIcon className="h-6 w-6" /></div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{label as string}</div>
                          <div className="text-lg font-bold">{value as string}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <div className="group relative mt-8 flex cursor-pointer items-center justify-between overflow-hidden rounded-3xl bg-brand p-8">
                  <div className="relative z-10">
                    <div className="text-xs font-black uppercase tracking-widest text-dark">Available for work</div>
                    <div className="font-bold text-dark">Get Response • Within 12 Hours</div>
                  </div>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform group-hover:translate-x-2">
                    <Send className="h-5 w-5 text-brand" />
                  </div>
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 select-none text-8xl font-black italic text-dark opacity-10">NOW</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-6 py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand">Let's Start A Project</span>
              <h2 className="mt-4 text-6xl font-black uppercase leading-tight md:text-7xl">
                Have a <span className="text-brand">vision?</span><br />Let's build it.
              </h2>
              <div className="mt-12 space-y-4 text-gray-400">
                {["Open for freelance collaborations", "Helping creators reach millions of views", "Expert in short-form and long-form retention"].map((item) => (
                  <div className="flex items-center gap-4" key={item}><span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand"><Check className="h-3 w-3 text-white" /></span>{item}</div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[40px] border border-white/5 bg-card shadow-2xl">
              <img src={appImageUrl} alt="Editing workspace" className="aspect-video w-full object-cover opacity-80" />
              <div className="p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Creative editing partner</p>
                <p className="mt-3 text-2xl font-black">Clean structure. Better pacing. Sharper watch time.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-dark px-6 py-24" id="faq">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-black">Frequently Asked Questions</h2>
              <p className="text-gray-500">Find answers to common questions about my video editing services.</p>
            </div>
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {["All", "Pricing", "Service", "Technical", "Workflow"].map((item, index) => (
                <button className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${index === 0 ? "bg-brand text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"}`} key={item}>{item}</button>
              ))}
            </div>
            <div className="space-y-4">
              {faqs.map((item, index) => (
                <details className="group rounded-2xl border border-white/5 bg-card" key={item.question} open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                    <span className="font-bold">{item.question}</span>
                    <ChevronDown className="h-6 w-6 transition group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-sm text-gray-400">{item.answer}</div>
                </details>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="mb-4 text-sm text-gray-500">Didn't find your answer?</p>
              <a className="rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase text-white transition-all hover:brightness-110" href="#contact">Get in Touch</a>
            </div>
          </div>
        </section>

      </main>

        <footer className="border-t border-white/5 bg-dark px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <Logo />
          <div className="text-xs font-medium text-gray-500">© {new Date().getFullYear()} ATUL PRAJAPATI. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <a className="transition-colors hover:text-brand" href="#home">Privacy</a>
            <a className="transition-colors hover:text-brand" href="#home">Terms</a>
            <a className="transition-colors hover:text-brand" href="#home">Cookies</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PortfolioPage;
