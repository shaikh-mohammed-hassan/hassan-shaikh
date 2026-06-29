import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { projects } from "../data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, 3);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">
          Projects
        </h2>

        {/* Show only first 3 projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {displayedProjects.map((project) => (
            <div
              key={project.title}
              className="
              bg-[var(--card)]
              border
              border-white/10
              rounded-2xl
              p-8
              shadow-lg
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
              flex
              flex-col
              "
            >
              {/* Title */}
              <h3 className="text-2xl font-bold mb-5">
                {project.title}
              </h3>

              {/* Description */}
              <p className="theme-secondary leading-8 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-8 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                    px-3
                    py-1
                    rounded-md
                    text-sm
                    bg-white/5
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  font-semibold
                  text-white
                  "
                >
                  <FaExternalLinkAlt size={14} />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  hover:bg-white/10
                  transition
                  "
                >
                  <FaGithub />
                </a>

              </div>
            </div>
          ))}

        </div>
{/* Bottom Controls */}
<div className="mt-8">

  {/* See More / Hide */}
  {projects.length > 3 && (
    <div className="flex justify-end">
        <button
  onClick={() => setShowAll(!showAll)}
  className="
    flex
    items-center
    gap-1
    text-cyan-400
    hover:text-cyan-300
    font-semibold
    transition
  "
>
  {showAll ? (
    <>
      Hide <ChevronUp size={18} />
    </>
  ) : (
    <>
      See More <ChevronDown size={18} />
    </>
  )}
</button>
    </div>
  )}

  {/* GitHub Button - Always Visible */}
  <div className="flex justify-center mt-10">
    <a
      href="https://github.com/shaikh-mohammed-hassan"
      target="_blank"
      rel="noopener noreferrer"
      className="
      flex
      items-center
      gap-3
      px-8
      py-4
      rounded-xl
      bg-blue-600
      hover:bg-blue-700
      transition
      font-semibold
      text-white
      shadow-lg
      "
    >
      <FaGithub />
      View Projects on GitHub
    </a>
  </div>

</div>

      </div>
    </SectionWrapper>
  );
}