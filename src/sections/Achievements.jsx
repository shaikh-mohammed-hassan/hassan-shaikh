import SectionWrapper from "../components/SectionWrapper";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {achievements.map((item) => (
            <div
              key={item.title}
              className="
              bg-slate-800
              p-6
              rounded-xl
              hover:scale-105
              transition
              "
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </SectionWrapper>
  );
}