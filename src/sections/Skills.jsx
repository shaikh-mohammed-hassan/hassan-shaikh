import SectionWrapper from "../components/SectionWrapper";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
              bg-slate-800
              p-4
              rounded-xl
              hover:scale-105
              transition
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </SectionWrapper>
  );
}