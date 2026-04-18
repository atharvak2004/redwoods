import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import mapImg from "/development/devcard1.png";
import chartImg from "/development/devcard2.png";
import blueprintImg from "/development/devcard3.png";
import checklistImg from "/development/devcard4.png";

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

export default function DevelopmentSection() {
  const cards = [
    {
      title: "Land Evaluation & Acquisition",
      desc: "Identify strategic land opportunities through market research, due diligence, and advisory support aligned with project goals.",
      image: mapImg,
    },
    {
      title: "Feasibility & Viability Analysis",
      desc: "Conduct market analysis, financial evaluation, and risk assessment to ensure project feasibility and investment viability.",
      image: chartImg,
    },
    {
      title: "Planning & Project Structuring",
      desc: "Develop project plans, regulatory approvals, and financial structuring to ensure smooth execution.",
      image: blueprintImg,
    },
    {
      title: "Execution Management & Delivery",
      desc: "Manage construction and operations with strict quality control, timeline management, and efficient project delivery.",
      image: checklistImg,
    },
  ];

  return (
    <section
      id="development"
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            End-to-End Development
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Real Estate <span className="">Development</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-700 text-lg leading-relaxed">
            We develop and operate residential and commercial real estate through a fully integrated model, managing every stage from land acquisition and feasibility to planning, construction, and final delivery.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="group relative bg-white rounded-2xl p-8
                 border border-gray-200
                 hover:shadow-2xl hover:-translate-y-2
                 transition duration-300"
            >
              {/* Top Accent */}
              <div className="absolute top-0 right-6 h-1 w-20 bg-brand-lightgreen rounded-b-3xl" />

              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-contain
                     group-hover:scale-110
                     transition duration-300"
                />
              </div>

              {/* Number + Title */}
              <div className="flex items-start gap-3 mb-4">
                <span
                  className="min-w-[36px] h-9 flex items-center justify-center
                     rounded-md bg-brand-lightgreen/10
                     text-brand-lightgreen font-semibold text-sm"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-semibold text-brand-blue leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}