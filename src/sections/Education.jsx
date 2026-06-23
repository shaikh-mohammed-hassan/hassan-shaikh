import SectionWrapper from "../components/SectionWrapper";
import { education } from "../data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold mb-10 text-slate-900 dark:text-white">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="
                bg-[var(--card)]
                shadow-xl
                dark:bg-slate-900/50
                border border-slate-200
                dark:border-slate-700
                rounded-2xl
                shadow-sm
                px-6
                py-6
                flex
                items-center
                justify-between
                gap-6
                transition-all
                hover:shadow-md
              "
            >
              {/* Left Side */}
              <div className="flex items-center gap-5">
                <div
                  className="
                    h-12 w-12
                    rounded-xl
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    text-white
                    shrink-0
                  "
                >
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    {item.institute}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="text-right shrink-0">
                <p className="text-slate-600 dark:text-slate-400">
                  {item.year}
                </p>

                <p className="text-blue-600 font-semibold text-lg">
                  {item.score}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}