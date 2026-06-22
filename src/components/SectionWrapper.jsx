import { motion } from "framer-motion";

export default function SectionWrapper({
  id,
  children,
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24"
    >
      {children}
    </motion.section>
  );
}