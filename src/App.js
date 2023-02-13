import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
