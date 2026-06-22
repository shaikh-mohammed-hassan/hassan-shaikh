import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl">

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
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
          className="text-2xl md:text-3xl text-cyan-400"
        />

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Building responsive web applications,
          modern interfaces and AI-powered solutions.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="/Hassan.pdf"
            download
            className="
              bg-cyan-500
              hover:bg-cyan-600
              text-white
              px-6
              py-3
              rounded-xl
              transition
            "
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="
              border
              border-cyan-500
              text-cyan-400
              px-6
              py-3
              rounded-xl
              hover:bg-cyan-500/10
              transition
            "
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}