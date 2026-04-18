import React from "react";
import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";
import { Link } from "react-router-dom";
const ongoingProjects = [
  {
    url:'/renewable-energy/dhakrani-solar',
    image: "/solar/Dhakarani/Dha-3.png",
    title: "Dhakrani Solar Power Project",
    location: "Dhakrani, Vikasnagar, Uttarakhand",
    description:
      "A grid-connected solar photovoltaic project supported through execution assistance, contributing to clean energy generation under a long-term power supply arrangement with a government utility.",
    // stats: [
    //   { label: "Status", value: "Commissioned (2016)" },
    // ],
  },

  {
    url:'/renewable-energy/khodri-solar',
    image: "/solar/Khodri/K-4.png",
    title: "Khodri Solar Power Project",
    location: "Khodri, Uttarakhand",
    description:
      "A utility-scale solar power project located in hilly terrain, supported through structured development and execution with a focus on long-term operational efficiency and reliability.",
    // stats: [
    //   { label: "Status", value: "Commissioned (2016)" },
    // ],
  },

  {
    url:'/renewable-energy/dadajalalpur-solar',
    image: "/solar/Dada/D-1.png",
    title: "Dadajalalpur Solar Power Project",
    location: "Dada Jalalpur, Haridwar, Uttarakhand",
    description:
      "A solar photovoltaic project delivering clean energy under a long-term power purchase agreement with a state electricity utility, supported through development and execution.",
    // stats: [
    //   { label: "Status", value: "Commissioned" },
    // ],
  },
  {
    url:'/renewable-energy/dakpathar-solar',
    image: "/solar/Dakpathar/Dak-3.png",
    title: "Dakpathar Solar Power Project",
    location: "Dakpathar, Uttarakhand",
    description:
      "A solar photovoltaic project delivering clean energy under a long-term power purchase agreement with a state electricity utility, supported through development and execution.",
    // stats: [
    //   { label: "Status", value: "Commissioned" },
    // ],
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

export function OngoingProjects() {
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
            Renewable Energy <span className=""> Projects</span>
            
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

                {/* BUTTON */}
                <Link to={project.url}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 inline-flex items-center gap-2
              bg-brand-green text-white
              px-6 py-3 rounded-full
              text-sm font-medium
              hover:opacity-90 transition"
                  >
                    View Project →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
