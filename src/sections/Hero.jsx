import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center">

        <h1 className="text-6xl md:text-7xl font-bold mb-4">
          Mohammed Hassan
          <span className="text-cyan-400"> Shaikh</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl text-cyan-400"
        />

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Building responsive web applications,
          modern interfaces and AI-powered solutions.
        </p>
        <a
        href="/resume.pdf"
        download
        className="bg-cyan-500 px-6 py-3 rounded-lg inline-block mt-8">
        Download Resume
      </a>

      

      </div>
      
    </section>
  );
}