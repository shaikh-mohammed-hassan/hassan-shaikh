import SectionWrapper from "../components/SectionWrapper";
import { education } from "../data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="
                bg-[var(--card)]
                border
                border-white/10
                rounded-2xl
                shadow-lg
                p-5
                sm:p-6
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-5
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              {/* Left Side */}
              <div className="flex items-start sm:items-center gap-4 flex-1">

                <div
                  className="
                    h-12
                    w-12
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

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold break-words">
                    {item.degree}
                  </h3>

                  <p className="theme-secondary mt-1 break-words">
                    {item.institute}
                  </p>

                  {/* Mobile Only */}
                  <div className="mt-2 md:hidden">
                    <p className="text-cyan-400 font-semibold">
                      {item.score}
                    </p>

                    <p className="theme-secondary text-sm">
                      {item.year}
                    </p>
                  </div>
                </div>

              </div>
              {/* Desktop Only */}
<div
  className="
    hidden
    md:flex
    flex-col
    items-end
    text-right
    shrink-0
    ml-6
  "
>
  <p className="text-cyan-400 font-bold text-lg">
    {item.score}
  </p>

  <p className="theme-secondary">
    {item.year}
  </p>
</div>



            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}