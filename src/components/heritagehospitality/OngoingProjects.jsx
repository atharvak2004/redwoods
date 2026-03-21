import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MediaElement from "../media/MediaElement";

/* ================= DATA ================= */
const ongoingProjects = [
  {
    image: "/barsana-ongoing.jpg",
    title: "Barsana Jal Mahal",
    slug: "/heritage-hospitality/barsana-mahal",
    description:
      "An 18th-century water palace in Barsana, Uttar Pradesh, currently undergoing a heritage restoration and adaptive reuse initiative focused on architectural conservation and long-term stewardship.",
  },
  {
    image: "/Shukla-ongoing.jpg",
    title: "Shukla Ka Talab",
    slug: "/heritage-hospitality/shukla-talab",
    description:
      "A historic Mughal-era site in Akbarpur, Kanpur Dehat, supported through heritage evaluation and restoration planning aimed at preserving its cultural significance and community value.",
  },
  // {
  //   image: "/DeckOverlookingGanges.jpg",
  //   title: "Pilibhit House",
  //   slug: "/heritage-hospitality/pilibhit-house",
  //   description:
  //     "A century-old heritage property in Haridwar, situated along the Ganges, supported through heritage hospitality development and stewardship-led hospitality use.",
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
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm tracking-widest 
                           text-brand-lightgreen uppercase">
             Projects
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl 
                         font-semibold text-brand-blue">
            Current <span className="text-[#373e68]">Engagements</span>
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
                 transition-all
                 min-h-[480px] flex flex-col"
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
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-lg font-semibold text-brand-blue mb-2
                       group-hover:text-brand-lightgreen transition">
                  {p.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {p.description}
                </p>

                {/* Button */}
                <Link to={p.slug} className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2
                       bg-brand-green text-white
                       px-5 py-2 rounded-full
                       text-sm font-medium
                       hover:opacity-90 transition"
                  >
                    Know More →
                  </motion.button>
                </Link>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
