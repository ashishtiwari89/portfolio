import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = (checked) => {
    setIsDarkMode(checked);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      {/* Updated Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        handleToggle={handleToggle}
      />

      {/* Removed duplicate Resume Button (now inside Navbar) */}
      {/* Sections */}
      <div id="home" className="section">
        <Home isDarkMode={isDarkMode} handleToggle={handleToggle} />
      </div>
      <div id="about" className="section">
        <About isDarkMode={isDarkMode} />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="experience" className="section">
        <Experience />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
