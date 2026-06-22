import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-400 leading-8 text-lg">
          Computer Engineering student passionate
          about Frontend Development, React,
          Artificial Intelligence and creating
          beautiful web experiences.
        </p>

      </div>

    </SectionWrapper>
  );
}