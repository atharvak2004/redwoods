import ProjectCard from "../ProjectCard";
import { ongoingProjects } from "../../data/realEstateProjects";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

export default function OngoingProjects() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Light green wash (MATCHED) */}
      <div
        className="absolute inset-0
                   bg-gradient-to-r
                   from-brand-lightgreen/4
                   via-brand-lightgreen/7
                   to-brand-lightgreen/4"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= HEADING ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Current Engagements
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Ongoing <span className="text-[#373e68]">Projects</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-700 text-lg leading-relaxed">
            A snapshot of select projects currently under advisory and execution,
            reflecting our focus on quality, clarity, and long-term value.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ongoingProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={index}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border border-gray-200
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
              "
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
