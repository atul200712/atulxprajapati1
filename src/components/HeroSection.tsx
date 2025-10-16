import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { SiAdobeaftereffects, SiAdobepremierepro } from "react-icons/si";
interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  profileImage?: string;
  cvUrl?: string;
}

const HeroSection = ({
  name = "Atul Prajapati",
  title = "Creative ",
  description = "Transforming raw footage into compelling stories. Specializing in commercial, documentary, and creative content.",
  profileImage = "/pp.png",
  cvUrl = "#",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[600px] bg-black flex items-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background lighting effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-600/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left column - Text content */}
          <div className="flex-1 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hello, I'm ,<span className="font-extrabold">{name} </span>
              <span className="block text-red-600">
                {title} <span className="font-extrabold">Video Editor</span>
              </span>
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => {
                  try {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf";
                    link.download = "Atul_Prajapati_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  } catch (error) {
                    console.error("Error downloading CV:", error);
                    // You could show a toast notification here if download fails
                  }
                }}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              <Button
                onClick={() => {
                  document.getElementById("portfolio")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                variant="outline"
                className="border-white text-black hover:bg-white/10"
              >
                <Play className="mr-2 h-4 w-4" /> View My Work
              </Button>
            </div>
          </div>

          {/* Right column - Profile image with animated ring */}
          <div className="relative flex-shrink-0">
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-red-600"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(229, 9, 20, 0.5)",
                  "0 0 20px rgba(229, 9, 20, 0.7)",
                  "0 0 10px rgba(229, 9, 20, 0.5)",
                ],
              }}
              transition={{
                duration: 0,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={profileImage}
                alt="Profile headshot"
                className="w-full h-full object-cover object-[58%_3%] rounded-full transition-all duration-500 ease-in-out"
                onError={(e) => {
                  console.error('Failed to load profile image:', profileImage);
                  e.currentTarget.src = '/app.jpg'; // fallback
                }}
                onLoad={() => {
                  console.log('Profile image loaded successfully');
                }}
              />
            </motion.div>

            {/* Software badges */}
            <motion.div
              className="absolute top-0 right-0 left-[13rem] bg-[#1c02dc] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiAdobeaftereffects size={24} />
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-0 bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <DiPhotoshop size={24} />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-5 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <SiAdobepremierepro size={24} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
