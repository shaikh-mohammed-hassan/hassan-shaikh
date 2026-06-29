import SectionWrapper from "../components/SectionWrapper";
import {
  Code2,
  BrainCircuit,
  MonitorSmartphone,
  GraduationCap,
} from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={28} />,
    color: "bg-cyan-500",
    title: "Frontend Development",
    description:
      "Developing responsive, scalable, and interactive web applications using React, JavaScript, Tailwind CSS, and modern frontend practices.",
  },
  {
    icon: <BrainCircuit size={28} />,
    color: "bg-violet-500",
    title: "Artificial Intelligence",
    description:
      "Building AI-powered solutions through Gemini API integration, automation, and intelligent user experiences.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    color: "bg-emerald-500",
    title: "Responsive UI/UX",
    description:
      "Designing clean, accessible, and mobile-first interfaces focused on usability and performance.",
  },
];

const stats = [
  {
    icon: Code2,
    value: "6+",
    label: "Projects",
    color: "text-cyan-400",
  },
  {
    icon: BrainCircuit,
    value: "10+",
    label: "Technologies",
    color: "text-violet-400",
  },
  {
    icon: GraduationCap,
    value: "2026",
    label: "Graduate",
    color: "text-emerald-400",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="relative overflow-hidden max-w-7xl mx-auto px-6">

        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

        {/* Heading */}
        <div className="relative text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold text-sm">
            ABOUT ME
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold theme-text">
            Get to Know <span className="text-cyan-400">Me</span>
          </h2>

          <p className="theme-secondary mt-5 max-w-2xl mx-auto text-base md:text-lg leading-8">
            Learn more about my journey, technical expertise, and passion for
            building modern web applications.
          </p>

        </div>

        {/* Main Layout */}
        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Section */}
          <div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 theme-text">
              Profile Summary
            </h3>

            <p className="theme-secondary text-base md:text-lg leading-8 mb-6">
              For me, great software is where thoughtful design meets intelligent
              functionality. As a{" "}
              <span className="font-semibold theme-text">
                Computer Engineering graduate
              </span>
              , I specialize in building responsive React applications while
              exploring how Artificial Intelligence can make everyday software
              smarter and more useful.
            </p>

            <p className="theme-secondary text-base md:text-lg leading-8">
              Whether it's developing AI-powered web platforms, integrating
              modern APIs, or crafting intuitive user interfaces, I enjoy
              transforming ideas into practical solutions while continuously
              learning and exploring emerging technologies.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-[var(--card)]/80
                      bg-gradient-to-br
                      from-[var(--card)]
                      to-[var(--card)]/70
                      backdrop-blur-lg
                      p-6
                      text-center
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-cyan-400/30
                      hover:shadow-xl
                      hover:shadow-cyan-500/10
                    "
                  >
                    <Icon
                      className={`mx-auto mb-3 ${stat.color}`}
                      size={30}
                    />

                    <h4 className={`text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </h4>

                    <p className="theme-secondary mt-2 text-sm md:text-base">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Section */}
          <div className="space-y-6">

            {highlights.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[var(--card)]/80
                  bg-gradient-to-br
                  from-[var(--card)]
                  to-[var(--card)]/70
                  backdrop-blur-lg
                  p-5 md:p-6
                  flex
                  flex-col
                  sm:flex-row
                  gap-5
                  items-start
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                  hover:shadow-xl
                  hover:shadow-cyan-500/10
                "
              >

                <div
                  className={`
                    ${item.color}
                    h-14
                    w-14
                    md:h-16
                    md:w-16
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-white
                    shrink-0
                    shadow-lg
                  `}
                >
                  {item.icon}
                </div>

                <div>

                  <h4 className="text-xl font-semibold mb-2 theme-text">
                    {item.title}
                  </h4>

                  <p className="theme-secondary leading-7 text-sm md:text-base">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </SectionWrapper>
  );
}