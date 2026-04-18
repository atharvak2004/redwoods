import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

const ongoingProjects = [

  {
    image: "/solar/Dakpathar/Dak-3.png",
    title: "Dakpathar Solar Power Project",
    location: "Dakpathar, Uttarakhand",
    description:
      "A solar project delivering clean energy under a long-term power purchase agreement with a state electricity utility, supported through development and execution.",
    
  },
];


/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function SolarInfo4() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Light green wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-lightgreen/4 via-brand-lightgreen/7 to-brand-lightgreen/4" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-24"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Current Engagements
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue">
            Project <span className="">Information</span>
          </h2>
        </motion.div>

        {/* ================= PROJECTS ================= */}
        {ongoingProjects.map((project, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28"
            >
              {/* IMAGE */}
              <div className={reverse ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <MediaElement
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className={reverse ? "lg:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-semibold text-brand-blue">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
                  {project.location}
                </p>

                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {/* STATS */}
                {/* <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {project.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </div>
                      <div className="text-xl font-semibold text-brand-lightgreen">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </motion.div>
          );  r
        })}
      </div>
    </section>
  );
}
