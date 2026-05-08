import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Shushant Agrawal Edit",
    category: "DOCUMENTARY",
    description: "Promo video of shoes with professional editing and smooth transitions.",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1760550939/Screenshot_2025-10-15_232311_veq5ua.png",
    videoUrl: "https://www.youtube.com/embed/FWjIn8DZ17E",
    platforms: ["YT"],
    reversed: false,
  },
  {
    title: "Commercial Video Product",
    category: "BRAND VIDEO",
    description: "A dynamic promotional video showcasing a modern style watch design with smooth transitions and engaging visual effects.",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1758996745/Screenshot_2025-09-27_234155_yxik5g.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1758996818/main_1_ac6xqo.mp4",
    platforms: ["YT", "IG"],
    reversed: true,
  },
  {
    title: "Nitish Rajput",
    category: "DOCUMENTARY",
    description: "Research-based documentary with high-paced motion graphics to keep viewers engaged throughout.",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_095013_xzp02b.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1759027240/nitish_bhai_xfxovv.mp4",
    platforms: [],
    reversed: false,
  },
  {
    title: "Shoes Ad",
    category: "COMMERCIAL",
    description: "Professional promo video showcasing shoes with cinematic visuals and product highlights.",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_094901_a4vmo0.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1759027231/Comp_1_1_xuadit.mp4",
    platforms: ["YT"],
    reversed: true,
  },
  {
    title: "P.M of India",
    category: "DOCUMENTARY",
    description: "An edit of Prime Minister of India with dynamic motion graphics and powerful storytelling.",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_094819_lfbv7c.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1759027231/containing_World_Mapcomp_litsti.mp4",
    platforms: [],
    reversed: false,
  },
  {
    title: "Maggie Edit",
    category: "COMMERCIAL",
    description: "Professional promo video for Maggie with engaging visuals and brand-focused editing.",
    image: "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_094945_fffqgf.png",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1759027229/Comp_1_nmzl01.mp4",
    platforms: ["YT", "IG"],
    reversed: true,
  },
];

const CaseStudies = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-brand text-xs font-bold uppercase tracking-widest">FEATURED PROJECTS</span>
          <h2 className="text-6xl md:text-8xl font-black mt-2 text-outline tracking-tighter uppercase relative">
            CASE <span className="text-brand opacity-100" style={{ color: '#FF6B00', WebkitTextStroke: '0' }}>STUDIES</span>
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: project.reversed ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`lg:col-span-5 ${project.reversed ? 'lg:order-2' : 'order-2 lg:order-1'}`}
              >
                <span className="text-brand text-xs font-bold uppercase">{project.category}</span>
                <h3 className="text-4xl md:text-5xl font-black mt-4 leading-tight">{project.title.split(' ')[0]}<br />{project.title.split(' ').slice(1).join(' ')}</h3>
                <p className="mt-6 text-gray-400 leading-relaxed max-w-md">
                  {project.description}
                </p>
                {project.platforms.length > 0 && (
                  <div className="mt-8 flex gap-3">
                    {project.platforms.map((p, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand/20 transition-colors cursor-pointer group">
                        <i className="text-white text-xs group-hover:text-brand transition-colors">{p}</i>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`lg:col-span-7 ${project.reversed ? 'lg:order-1' : 'order-1 lg:order-2'}`}
              >
                <div 
                  className="aspect-video bg-neutral-900 rounded-3xl overflow-hidden relative group cursor-pointer shadow-2xl border border-white/5"
                  onClick={() => handleProjectClick(project)}
                >
                  <img alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={project.image} />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-brand rounded-full flex items-center justify-center transform transition-transform shadow-xl"
                    >
                      <Play className="w-8 h-8 text-white fill-current translate-x-0.5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                {selectedProject.videoUrl ? (
                  <div className="aspect-video w-full overflow-hidden rounded-md">
                    {selectedProject.videoUrl.includes("youtube") ? (
                      <iframe
                        src={selectedProject.videoUrl}
                        className="w-full h-full"
                        title={selectedProject.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video
                        src={selectedProject.videoUrl}
                        controls
                        className="w-full h-full"
                        controlsList="nodownload"
                      />
                    )}
                  </div>
                ) : (
                  <div className="aspect-video w-full bg-gray-800 flex items-center justify-center rounded-md">
                    <p className="text-gray-400">Video not available</p>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Project Details</h4>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseStudies;

