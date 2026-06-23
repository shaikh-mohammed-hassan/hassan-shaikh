import SectionWrapper from "../components/SectionWrapper";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-xl
                p-6
                flex
                flex-col
                items-center
                gap-3
                hover:scale-105
                hover:border-cyan-400
                transition-all
                duration-300
                "
              >
                <Icon size={40} />

                <span className="font-medium">
                  {skill.name}
                </span>
              </div>
            );
          })}

        </div>

      </div>
    </SectionWrapper>
  );
}