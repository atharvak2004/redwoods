import { motion } from "framer-motion";

function ProjectSectionTitle({ title, subtitle }) {
  return (
    <section className="pt-20 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6"
      >
        <span className="text-sm tracking-widest uppercase text-brand-green ">
          Our Projects
        </span>

        <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight mt-4">
          {title}
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}

export default ProjectSectionTitle;
