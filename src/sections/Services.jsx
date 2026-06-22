import SectionWrapper from "../components/SectionWrapper";
import { services } from "../data/services";

export default function Services() {
  return (
    <SectionWrapper id="services">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="
              bg-slate-800
              p-6
              rounded-xl
              hover:-translate-y-2
              transition
              "
            >
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </SectionWrapper>
  );
}