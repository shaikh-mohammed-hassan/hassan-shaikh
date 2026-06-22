import Navbar from "../components/Navbar";

import Achievements from "../sections/Achievements";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Services from "../sections/Services";
import Projects from "../sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Education />
      <Services />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />  
    </>
  );
}