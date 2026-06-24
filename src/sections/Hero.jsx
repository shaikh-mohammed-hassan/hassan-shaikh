import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { socials } from "../data/socials";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      sm:px-6
      pt-20
      "
    >
      <div
        className="
        max-w-5xl
        w-full
        text-center
        px-2
        "
      >
        {/* Name */}
        <h1
          className="
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          "
        >
          Mohammed Hassan{" "}
          <span className="theme-accent">
            Shaikh
          </span>
        </h1>

        {/* Animated Roles */}
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
          className="
          mt-4
          block
          text-xl
          sm:text-2xl
          md:text-3xl
          font-medium
          theme-accent
          "
        />

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 theme-secondary">
          Computer Engineering graduate specializing in React,
          Frontend Development, and modern web technologies.
        </p>

        {/* Action Buttons */}
        <div
          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-4
          "
        >
          <a
            href="/Hassan_resume.pdf"
            download
            className="
            w-full
            sm:w-auto
            rounded-xl
            bg-cyan-500
            px-6
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-cyan-600
            hover:shadow-lg
            hover:shadow-cyan-500/20
            "
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="
            w-full
            sm:w-auto
            rounded-xl
            border
            border-cyan-500
            px-6
            py-3
            font-medium
            text-cyan-400
            transition-all
            duration-300
            hover:bg-cyan-500/10
            hover:border-cyan-400
            "
          >
            Contact Me
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-10 h-px w-32 bg-[var(--card)]" />

        {/* Social Links */}
        <div
          className="
          mt-8
          flex
          justify-center
          gap-5
          sm:gap-6
          "
        >
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
            text-2xl
            sm:text-3xl
            theme-secondary
            transition-all
            duration-300
            hover:-translate-y-1
            hover:text-cyan-400
            "
          >
            <FaGithub />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
            text-2xl
            sm:text-3xl
            theme-secondary
            transition-all
            duration-300
            hover:-translate-y-1
            hover:text-cyan-400
            "
          >
            <FaLinkedin />
          </a>

          <a
            href={socials.email}
            aria-label="Email"
            className="
            text-2xl
            sm:text-3xl
            theme-secondary
            transition-all
            duration-300
            hover:-translate-y-1
            hover:text-cyan-400
            "
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}