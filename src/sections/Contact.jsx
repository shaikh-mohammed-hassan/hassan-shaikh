import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../components/SectionWrapper";
import {
  User,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_asfob1k",
        "template_yqdb4pd",
        form.current,
        "pdcdwd8IwP8LhLp4s"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      });
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.25em] text-cyan-400 font-semibold text-sm">
            CONTACT
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="theme-secondary mt-4 max-w-2xl mx-auto">
            Have a project, internship opportunity, or just want to say hello?
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >

          {/* Name */}
          <div className="relative">
            <User
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
            />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="
                w-full
                pl-12
                pr-4
                py-4
                rounded-xl
                bg-[var(--card)]
                border
                border-white/10
                focus:border-cyan-400
                outline-none
                transition
              "
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="
                w-full
                pl-12
                pr-4
                py-4
                rounded-xl
                bg-[var(--card)]
                border
                border-white/10
                focus:border-cyan-400
                outline-none
                transition
              "
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare
              size={20}
              className="absolute left-4 top-5 text-cyan-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              required
              className="
                w-full
                pl-12
                pr-4
                py-4
                rounded-xl
                bg-[var(--card)]
                border
                border-white/10
                focus:border-cyan-400
                outline-none
                transition
                resize-none
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-cyan-500
              hover:bg-cyan-600
              py-4
              rounded-xl
              text-white
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >
            <Send size={18} />
            Send Message
          </button>

        </form>

      </div>
    </SectionWrapper>
  );
}