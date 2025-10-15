import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cloudinary } from '@cloudinary/url-gen';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  videoUrl?: string;
  client?: string;
  duration?: string;
  year?: number;
}

interface PortfolioGalleryProps {
  projects?: Project[];
}

const PortfolioGallery = ({
  projects = defaultProjects,
}: PortfolioGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const categories = [
    "All",
    "Commercial",
    "Documentary",
    "Creative",
    "Social Media",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <div className="w-full bg-[#0d0d0d] py-16 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            Latest Portfolio
          </h2>
          <p className="text-gray-400 mb-8">
            A showcase of my recent video editing projects across different
            genres and styles
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-red-600 hover:bg-red-700"
                    : "border-gray-700 text-black hover:bg-gray-300"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            > 
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View Project</span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-medium">{project.title}</h3>
                  <Badge
                    variant="outline"
                    className="bg-red-600 text-white border-none"
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
                {project.client && (
                  <div className="mt-3 flex items-center text-xs text-gray-500">
                    <span>Client: {project.client}</span>
                    {project.duration && (
                      <span className="ml-4">Duration: {project.duration}</span>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {selectedProject.category} •{" "}
                  {selectedProject.client &&
                    `Client: ${selectedProject.client}`}{" "}
                  {selectedProject.year && `• ${selectedProject.year}`}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                {selectedProject.videoUrl ? (
                  <div className="aspect-video w-full overflow-hidden rounded-md">
                    <iframe
                      src={selectedProject.videoUrl}
                      className="w-full h-full"
                      title={selectedProject.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
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

                <div className="mt-4 grid grid-cols-2 gap-4">
                  {selectedProject.client && (
                    <div>
                      <h5 className="text-sm font-medium text-gray-400">
                        Client
                      </h5>
                      <p className="text-white">{selectedProject.client}</p>
                    </div>
                  )}
                  {selectedProject.duration && (
                    <div>
                      <h5 className="text-sm font-medium text-gray-400">
                        Duration
                      </h5>
                      <p className="text-white">{selectedProject.duration}</p>
                    </div>
                  )}
                  {selectedProject.year && (
                    <div>
                      <h5 className="text-sm font-medium text-gray-400">
                        Year
                      </h5>
                      <p className="text-white">{selectedProject.year}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Default projects data for development
const defaultProjects: Project[] = [
  {
  id: "1",
  title: "Shoes ad",
  category: "Commercial",
  thumbnail:
    "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_094901_a4vmo0.png",
  description: "Promo video of shoes",
  videoUrl: "https://www.youtube.com/embed/FWjIn8DZ17E",
  client: "Project",
  duration: "00:06",
  year: 2025
},
{
  id: "2",
  title: "commercial video for product",
    category: "Commercial",
    thumbnail:
      "https://res.cloudinary.com/dq1fra5dd/image/upload/v1758996745/Screenshot_2025-09-27_234155_yxik5g.png",
    description:
      "A dynamic promotional video showcasing a modern style watch design with smooth transitions and engaging visual effects.",
    videoUrl: "https://res.cloudinary.com/dq1fra5dd/video/upload/v1758996818/main_1_ac6xqo.mp4",
    client: "Project",
    duration: "0:14",
    year: 2024,
  },
 {
    id: "3",
    title: "Nitish Rajput",
    category: "Documentary",
    thumbnail:
      "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_095013_xzp02b.png",
    description: "A clip edited by me of Nitish Rajput",
    videoUrl:
      "https://res.cloudinary.com/dq1fra5dd/video/upload/v1759027240/nitish_bhai_xfxovv.mp4",
    client: "Project",
    duration: "00:08",
    year: 2025
  },
  {
    id: "4",
    title: "Shoes ad",
    category: "Commercial",
    thumbnail:
      "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_094901_a4vmo0.png",
    description: "Promo video of shoes",
    videoUrl:
      "https://res.cloudinary.com/dq1fra5dd/video/upload/v1759027231/Comp_1_1_xuadit.mp4",
    client: "Project",
    duration: "00:06",
    year: 2025
  },
  {
    id: "5",
    title: "P.M of India",
    category: "Documentary",
    thumbnail:
      "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_094819_lfbv7c.png",
    description: "A edit of Prime Minister of India",
    videoUrl:
      "https://res.cloudinary.com/dq1fra5dd/video/upload/v1759027231/containing_World_Mapcomp_litsti.mp4",
    client: "Project",
    duration: "00:05",
    year: 2025
  },
  {
    id: "6",
    title: "Maggie edit",
    category: "Commercial",
    thumbnail:
      "https://res.cloudinary.com/dq1fra5dd/image/upload/v1759033255/Screenshot_2025-09-28_094945_fffqgf.png",
    description: "Promo video of maggie edited by me",
    videoUrl:
      "https://res.cloudinary.com/dq1fra5dd/video/upload/v1759027229/Comp_1_nmzl01.mp4",
    client: "Project",
    duration: "00:03",
    year: 2025
  }
];

export default PortfolioGallery;