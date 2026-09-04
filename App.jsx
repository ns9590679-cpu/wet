import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ImageStrip from "./components/ImageStrip";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ImageStrip />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
