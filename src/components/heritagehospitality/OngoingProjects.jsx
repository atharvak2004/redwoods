import React from "react";
import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

const ongoingProjects = [
  {
    image: "/Heritage_herobg.jpg",
    title: "Barsana Jal Mahal",
    description: "A historic two-story water palace built by Roopram Katara in the 18th century in Barsana, Uttar Pradesh, India",
  },
  {
    image: '/Shukla_Talab.JPG',
    title: "Shukla Ka Talab",
    description: "A historic pond and Mughal-era site in Akbarpur, Kanpur Dehat, Uttar Pradesh, India",
  },
  // {
  //   image: heritageImage,
  //   title: "Lakeside Haveli",
  //   description: "Heritage haveli redevelopment • Udaipur, Rajasthan",
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

export function OngoingProjects() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Light green wash */}
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
            Current Engagements
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Ongoing <span className="text-[#373e68]">Projects</span>
          </h2>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {ongoingProjects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              className="group bg-white rounded-2xl overflow-hidden
                         border border-gray-200
                         hover:shadow-xl hover:-translate-y-1
                         transition-all"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <MediaElement
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover
                             transition-transform duration-700
                             group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-semibold text-brand-blue mb-2
                             group-hover:text-brand-lightgreen
                             transition-colors duration-300"
                >
                  {p.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.description}
                </p>

                {/* Accent divider */}
                <div className="mt-4 h-px w-12 bg-brand-lightgreen" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
