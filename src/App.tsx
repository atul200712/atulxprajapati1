import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import ProjectForm from "./components/ProjectForm";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="grain relative min-h-screen bg-ink text-white">
      {showLoader && <Loader onComplete={() => setShowLoader(false)} />}

      <Cursor />
      <Nav onOpenForm={() => setIsFormOpen(true)} />
      <main>
        <Hero />
        <Intro />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <About />
        <Stats />
        <Contact onOpenForm={() => setIsFormOpen(true)} />
      </main>

      <AnimatePresence>
        {isFormOpen && <ProjectForm onClose={() => setIsFormOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
