import SectionWrapper from "../components/SectionWrapper";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
              bg-slate-800
              rounded-xl
              p-6
              hover:scale-105
              transition
              "
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                    bg-cyan-500
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  className="text-cyan-400"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="text-cyan-400"
                >
                  Live Demo
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </SectionWrapper>
  );
}