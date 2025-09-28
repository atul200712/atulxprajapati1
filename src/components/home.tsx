import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import PortfolioGallery from "./PortfolioGallery";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";

const HomePage = () => {
  // Stats data
  const stats = [
    { value: "25+", label: "Awards earned" },
    { value: "150+", label: "Completed projects" },
    { value: "900+", label: "Client review" },
    { value: "98%", label: "Client satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* Logo + Profile Pic */}
          <div className="flex items-center space-x-3">
            <img
              src="/src/components/assests/pp.png" // <-- yahan apni profile pic ka path daalna
              alt="Atul Prajapati"
              className="w-12 h-12 rounded-full border border-[#e50914] object-cover object-[58%_5%] scale-110"

            />
            <a href="#" className="text-[#e50914] font-bold text-xl">
              Atul Prajapati
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-[#e50914] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#e50914] transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-white hover:text-[#e50914] transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-white hover:text-[#e50914] transition-colors"
            >
              Services
            </a>
          </nav>

          {/* Contact Button */}
          <Button
            variant="outline"
            className="border-[#e50914] text-[#e50914] bg-black hover:bg-[#e50914] hover:text-white"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Contact
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-20">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <img
                src="/src/components/assests/app.jpg"
                alt="Atul Prajapati"
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 mb-6">
                I'm a passionate video editor with over 2+ years of experience
                crafting compelling visual stories. My approach combines
                technical expertise with creative vision to deliver content that
                resonates with audiences and achieves client goals. Whether it's
                a high-energy commercial, an intimate documentary, or complex
                motion graphics, I bring the same level of dedication and
                attention to detail to every project.
              </p>
              <h3 className="text-xl font-semibold mb-4">Skills & Software</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1a1a1a] text-[#e50914] px-3 py-1 rounded-full text-sm">
                  Adobe Premiere Pro
                </span>
                <span className="bg-[#1a1a1a] text-[#e50914] px-3 py-1 rounded-full text-sm">
                  After Effects
                </span>
                <span className="bg-[#1a1a1a] text-[#e50914] px-3 py-1 rounded-full text-sm">
                  Photoshop
                </span>
                <span className="bg-[#1a1a1a] text-[#e50914] px-3 py-1 rounded-full text-sm">
                  Motion Graphics
                </span>
                <span className="bg-[#1a1a1a] text-[#e50914] px-3 py-1 rounded-full text-sm">
                  Color Grading (not pro)
                </span>
                <span className="bg-[#1a1a1a] text-[#e50914] px-3 py-1 rounded-full text-sm">
                  Audio Mixing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="text-yellow-200 py-20 bg-black">
        <div className="container  mx-auto px-4">
          <ServicesSection />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20  bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <PortfolioGallery />
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0b0b0b]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Ready to bring your vision to life? Get in touch and we'll discuss
            your next video project.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-gray-400 mb-6">
                I'm always interested to work on new projects and collaborate
                with creative minds. Whether you need a quick edit or a
                full-scale production, let's discuss how I can help bring your
                story to life.
              </p>

              <div className="space-y-4 ali">
                <div className="flex items-start">
                  <div>
                    <a
                      href="mailto:atulxprajapati@gmail.com"
                      className="group flex items-start"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-[#e50914] p-2 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="group-hover:text-[#e50914] transition-colors duration-300">
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-400 group-hover:text-[#e50914]">
                          atulxprajapati@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#e50914] p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-400">+91 9589243816</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#e50914] p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-400">Mehsasna, Gujarat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0a0a] border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <a
                href="#"
                className="text-[#e50914] font-bold text-xl mb-4 block"
              >
                Atul Prajapati
              </a>
              <p className="text-gray-400 text-sm">
                Professional video editor specializing in creating compelling
                visual stories through expert editing and motion graphics.
                Transforming ideas into captivating content.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#e50914]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#e50914]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-[#e50914]">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#e50914]">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#e50914]">
                    Video Editing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e50914]">
                    Color Grading
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e50914]">
                    Motion Graphics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e50914]">
                    Audio Post
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/atulxprajapati?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="bg-[#1a1a1a] p-2 rounded-full hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#fa7e1e] hover:via-[#ff0080] hover:to-[#962fbf] transition-all duration-300 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a
                  href="http://www.youtube.com/@AtulPrajapati-v8d5q"
                  className="bg-[#1a1a1a] p-2 rounded-full hover:bg-[#e50914] hover:scale-110 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>
                <a
                  href="https://www.fiverr.com/s/zWG1x4g"
                  className="bg-[#1a1a1a] p-2 rounded-full hover:bg-[#1DBF73] hover:scale-110 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <circle cx="19" cy="119" r="16" fill="#1DBF73" />
                    <path
                      className="scale-"
                      d="M21.333 12.666H18.667V11.333C18.667 10.597 19.264 10 20 10H21.333V7.333H20C17.791 7.333 16 9.124 16 11.333V12.666H13.333V15.333H16V24H18.667V15.333H21.333V12.666Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919589243816"
                  className="bg-[#1a1a1a] p-2 rounded-full hover:bg-[#1DBF73] hover:scale-110 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.932-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              Copyright © 2025 - Developed by Atul Prajapati
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
