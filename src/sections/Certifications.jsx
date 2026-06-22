import SectionWrapper from "../components/SectionWrapper";
import { certifications } from "../data/certification";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="
              bg-slate-800
              p-6
              rounded-xl
              "
            >
              <h3 className="font-bold text-xl">
                {cert.title}
              </h3>

              <p className="text-cyan-400 mt-2">
                {cert.issuer}
              </p>
            </div>
          ))}

        </div>

      </div>

    </SectionWrapper>
  );
}