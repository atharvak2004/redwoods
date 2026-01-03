import { motion } from "framer-motion";
import MediaElement from "./media/MediaElement";

export default function AlternatingProject({ project, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28`}
    >
      {/* IMAGE */}
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <MediaElement
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <h3 className="text-2xl md:text-3xl font-semibold text-brand-blue">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
          {project.location}
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          {project.description}
        </p>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {project.stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-xl font-semibold text-brand-lightgreen">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
