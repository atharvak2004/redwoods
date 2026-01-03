import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";

const completedRenewableProjects = [
  // {
  //   image: "/projects/dhakrani.jpg",
  //   title: "Dhakrani Solar Power Plant",
  //   description: "1.95 MW Solar • Vikasnagar, Uttarakhand • Commissioned (2016)",
  // },
  // {
  //   image: "/projects/khodri.jpg",
  //   title: "Khodri Solar Power Plant",
  //   description: "5.04 MW Solar • Dakpathar, Uttarakhand • Commissioned (2016)",
  // },
  // {
  //   image: "/projects/dadajalalpur.jpg",
  //   title: "Dadajalalpur Solar Project",
  //   description: "2.26 MW Solar • Haridwar, Uttarakhand • Commissioned",
  // },
];

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

export default function CompletedProjects() {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">

      {/* Subtle background wash */}
      <div
        className="absolute inset-0 
                   bg-gradient-to-r 
                   from-brand-lightgreen/4 
                   via-brand-lightgreen/7 
                   to-brand-lightgreen/4"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Track Record
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Completed <span className="text-[#373e68]">Projects</span>
          </h2>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {completedRenewableProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={index}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
