import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import {
  Code2,
  BrainCircuit,
  Palette,
  Terminal,
  Cpu,
} from "lucide-react";

import { socials } from "../data/socials";

export default function Hero() {
  return (
    <section
        id="home"
        className="
          relative
          min-h-screen
          flex
          items-center
          px-6
          pt-20 md:pt-24
          overflow-hidden
        "
      >

        {/* Background Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-10
            pointer-events-none
          "
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "62px 62px",
          }}
        />

        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px]" />

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-violet-500/10 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center h-full">

          {/* LEFT SIDE */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

            {/* Available Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-500/10
                px-5
                py-2
                text-cyan-400
                shadow-lg
                shadow-cyan-500/10
                mb-6
              "
            >
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

              Available for Work
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                xl:text-7xl
                font-extrabold
                leading-tight
                tracking-tight
                "
            >
              <span className="theme-text">
                Hi, I'm{" "}
              </span>

              <span className="text-cyan-400">
                Hassan
              </span>

              <br />

              <span className="text-cyan-400">
                Shaikh
              </span>
            </h1>

            {/* Role */}
            <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold">

              <TypeAnimation
              sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "AI Enthusiast",
              2000,
              ]}
              repeat={Infinity}
              speed={50}
              wrapper="span"
              className="theme-text"
              />

              </h2>

            {/* Description */}
            <p
                className="
                mt-5
                max-w-xl
                mx-auto
                lg:mx-0
                text-base
                sm:text-lg
                leading-7
                sm:leading-8
                theme-secondary
                "
                >

             Building fast, responsive, and user-friendly web applications with React and modern frontend technologies.
            </p>


            {/* Buttons */}
            <div
              className="
              mt-8
              flex
              flex-col
              sm:flex-row
              items-center
              lg:items-start
              gap-4
              w-full
              "
            >

              <a
                href="#projects"
                className="
                w-full
                sm:w-auto
                text-center
                px-8
                py-3
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-600
                text-white
                font-semibold
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                "
              >
                View Projects
              </a>

              <a
                href="/Hassan_resume.pdf"
                download
                className="
                w-full
                sm:w-auto
                text-center
                px-8
                py-3
                rounded-xl
                border
                border-white/10
                bg-[var(--card)]
                hover:border-cyan-400
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                "
              >
                Download Resume
              </a>

            </div>

            {/* Social Icons */}
            <div
              className="
              mt-8
              flex
              justify-center
              lg:justify-start
              gap-4
              flex-wrap
              "
            >

              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="
                h-12
                w-12
                sm:h-14
                sm:w-14
                rounded-xl
                bg-[var(--card)]
                border
                border-white/10
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-110
                hover:border-cyan-400
                hover:text-cyan-400
                "
              >
                <FaGithub className="text-xl sm:text-2xl" />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                h-12
                w-12
                sm:h-14
                sm:w-14
                rounded-xl
                bg-[var(--card)]
                border
                border-white/10
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-110
                hover:border-cyan-400
                hover:text-cyan-400
                "
              >
                <FaLinkedin className="text-xl sm:text-2xl" />
              </a>

              <a
                href={socials.email}
                className="
                h-12
                w-12
                sm:h-14
                sm:w-14
                rounded-xl
                bg-[var(--card)]
                border
                border-white/10
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-110
                hover:border-cyan-400
                hover:text-cyan-400
                "
              >
                <FaEnvelope className="text-xl sm:text-2xl" />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

<div className="hidden lg:flex justify-center">
  <div className="relative w-[420px] xl:w-[500px]
h-[420px] xl:h-[500px] flex items-center justify-center">

    {/* Outer Glow */}
    <div className="absolute w-[360px] h-[360px] rounded-full bg-cyan-500/10 blur-3xl"></div>

    {/* Rotating Ring */}
    <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-400/20 animate-spin-slow"></div>

    {/* Center Circle */}
    <div
      className="
      w-40
      h-40
      rounded-full
      bg-[var(--card)]
      border
      border-white/10
      flex
      items-center
      justify-center
      text-6xl
      shadow-2xl
      z-10
      "
    >
      👨‍💻
    </div>

    <div className="absolute w-[360px] h-[360px] animate-spin-slow">
      <OrbitIcon angle={0}>
        <Code2 size={30} />
      </OrbitIcon>

      <OrbitIcon angle={60}>
        <Palette size={30} />
      </OrbitIcon>

      <OrbitIcon angle={120}>
        <BrainCircuit size={30} />
      </OrbitIcon>

      <OrbitIcon angle={180}>
        <FaGithub size={30} />
      </OrbitIcon>

      <OrbitIcon angle={240}>
        <Terminal size={30} />
      </OrbitIcon>

      <OrbitIcon angle={300}>
        <Cpu size={30} />
      </OrbitIcon>
    </div>

  </div>
</div>

        </div>

        {/* Scroll */}

      </div>
    </section>
  );
}

function OrbitIcon({ children, angle }) {
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        transform: `
          rotate(${angle}deg)
          translateY(-180px)
          rotate(-${angle}deg)
          translate(-50%, -50%)
        `,
      }}
    >
      <div
        className="
          w-16 h-16
          rounded-2xl
          bg-[var(--card)]
          border border-white/10
          flex items-center justify-center
          text-cyan-400
          shadow-xl
          hover:scale-110
          transition-all
          duration-300
        "
      >
        {children}
      </div>
    </div>
  );
}