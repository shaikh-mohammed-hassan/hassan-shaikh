import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import SectionWrapper from "../components/SectionWrapper";
import { projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

        {/* Filter Buttons */}

        <div className="flex flex-wrap gap-3 mb-10">

          {["All", "Frontend", "React", "AI"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`
                  px-5 py-2 rounded-full transition
                  ${
                    filter === category
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-800 text-gray-300"
                  }
                `}
              >
                {category}
              </button>
            )
          )}

        </div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 gap-6">

          {filteredProjects.map((project) => (

            <motion.div
              key={project.title}
              layout
              whileHover={{ scale: 1.03 }}
              className="
              bg-[var(--card)]
              backdrop-blur-lg
              border
              border-white/20
              shadow-xl
              rounded-xl
              overflow-hidden
              "
            >

              {/* Project Image */}

              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-52
                  object-cover
                  "
                />
              )}

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mb-4">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      bg-cyan-500/20
                      text-cyan-400
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      border
                      border-cyan-500/20
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    px-4
                    py-2
                    bg-cyan-500
                    rounded-lg
                    hover:bg-cyan-600
                    transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    px-4
                    py-2
                    border
                    border-cyan-500
                    rounded-lg
                    hover:bg-cyan-500/10
                    transition
                    "
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
      <div className="flex justify-center mt-12">
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
    bg-gradient-to-r
    from-cyan-500
    to-purple-500
    font-semibold
    hover:scale-105
    transition-all
    duration-300
    shadow-lg
    "
  >
    <FaGithub size={22} />
    View More Projects
  </a>
</div>
    </SectionWrapper>
    
  );
}