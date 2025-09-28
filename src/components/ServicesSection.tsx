import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Video, Palette, Music, Shapes } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({
  icon,
  title,
  description = "Service description",
}: ServiceCardProps) => {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-red-600 transition-all duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 bg-red-00/10 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-zinc-400">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Video className="w-6 h-6 text-red-600" />,
      title: "Video Editing",
      description:
        "Professional video editing services with attention to detail, pacing, and storytelling. Creating compelling narratives for your audience.",
    },
    {
      icon: <Palette className="w-6 h-6 text-red-600" />,
      title: "Color Grading",
      description:
        "minimal color correction and grading techniques to enhance visual appeal and create consistent mood across all aspects of your project.",
    },
    {
      icon: <Music className="w-6 h-6 text-red-600" />,
      title: "Audio Post",
      description:
        "Complete audio post-production including sound design, mixing, and optimization for professional sound quality across all platforms.",
    },
    {
      icon: <Shapes className="w-6 h-6 text-red-600" />,
      title: "Motion Graphics",
      description:
        "Creative motion graphics, titles, and visual effects to enhance your content and brand presentation.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-black" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-2">Services</h2>
          <h3 className="text-4xl font-bold text-white mb-4">
            What I Do for Clients
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
