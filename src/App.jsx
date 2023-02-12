import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
