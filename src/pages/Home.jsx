import Navbar from "../components/Navbar";

import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import AchievementsCertifications from "../sections/AchievementsCertifications"

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Projects from "../sections/Projects";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <AchievementsCertifications />
      <Contact />
      <Footer />  
    </>
  );
}