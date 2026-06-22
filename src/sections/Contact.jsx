import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Contact Me
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="
            w-full
            p-4
            rounded-lg
            bg-slate-800
            "
          />

          <input
            type="email"
            placeholder="Email"
            className="
            w-full
            p-4
            rounded-lg
            bg-slate-800
            "
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="
            w-full
            p-4
            rounded-lg
            bg-slate-800
            "
          />

          <button
            className="
            bg-cyan-500
            px-6
            py-3
            rounded-lg
            "
          >
            Send Message
          </button>

        </form>

      </div>

    </SectionWrapper>
  );
}