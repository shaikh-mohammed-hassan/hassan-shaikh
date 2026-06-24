import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { credentials } from "../data/credentials";

export default function AchievementsCertifications() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered =
    filter === "All"
      ? credentials
      : credentials.filter(
          (item) => item.type === filter
        );

  return (
    <SectionWrapper id="credentials">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-4xl font-bold mb-3">
          Certifications & Technical Achievements
        </h2>

        <p className="text-gray-400 max-w-3xl mb-2">
          A collection of certifications, technical competitions,
          workshops, and learning milestones that reflect my
          continuous growth as a Frontend Developer and technology
          enthusiast.
        </p>

        <p className="text-cyan-400 text-sm mb-10">
          Click any certificate to view it in full size.
        </p>

        {/* Filter Buttons */}

        <div className="flex flex-wrap gap-3 mb-10">

          {[
            "All",
            "Certification",
            "Achievement",
          ].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`
                px-5 py-2 rounded-full transition-all duration-300
                ${
                  filter === type
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "bg-slate-800 hover:bg-slate-700"
                }
              `}
            >
              {type}
            </button>
          ))}

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((item) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                bg-[var(--card)]
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
                overflow-hidden
                shadow-xl
              "
            >

              {/* Image */}

              <div
                className="
                  relative
                  group
                  cursor-pointer
                "
                onClick={() =>
                  setSelectedImage(item.image)
                }
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-56
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/40
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-300
                    flex
                    items-center
                    justify-center
                    pointer-events-none
                  "
                >
                  <span
                    className="
                      bg-black/60
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      font-medium
                    "
                  >
                    View Certificate
                  </span>
                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <span
                  className="
                    text-cyan-400
                    text-sm
                    font-medium
                  "
                >
                  {item.type}
                </span>

                <h3
                  className="
                    text-xl
                    font-bold
                    mt-2
                  "
                >
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.issuer}
                </p>

                <p className="text-sm mt-2">
                  {item.date}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Modal */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setSelectedImage(null)
            }
            className="
              fixed
              inset-0
              z-50
              bg-black/90
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
            "
          >

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
                relative
                max-w-6xl
                max-h-[90vh]
              "
            >

              {/* Close Button */}

              <button
                onClick={() =>
                  setSelectedImage(null)
                }
                className="
                  absolute
                  -top-12
                  right-0
                  text-4xl
                  font-bold
                  text-white
                  hover:text-cyan-400
                  transition
                "
              >
                ×
              </button>

              {/* Full Certificate */}

              <img
                src={selectedImage}
                alt="Certificate Preview"
                className="
                  max-h-[90vh]
                  rounded-2xl
                  shadow-2xl
                "
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </SectionWrapper>
  );
}