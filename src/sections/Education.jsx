import SectionWrapper from "../components/SectionWrapper";
import { education } from "../data/education";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Education
        </h2>

        <div className="space-y-8">

          {education.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-cyan-400 pl-6"
            >
              <h3 className="text-xl font-semibold">
                {item.degree}
              </h3>

              <p className="text-gray-400">
                {item.institute}
              </p>

              <p className="text-cyan-400">
                {item.year}
              </p>

              <p>{item.score}</p>
            </div>
          ))}

        </div>

      </div>
    </SectionWrapper>
  );
}