import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  return (
    <section
      id="development"
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      {/* Background wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Development Advisory
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Real Estate <br />
            <span className="text-[#373e68]">Development </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-700 text-lg leading-relaxed">
            Strategic development advisory supporting residential and commercial
            projects through land evaluation, feasibility assessment, structured
            planning, and execution guidance—focused on long-term value creation
            and disciplined project delivery.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Land Evaluation & Acquisition",
              desc: "Strategic assessment, due diligence, and advisory support for land identification and acquisition aligned with project objectives.",
            },
            {
              title: "Feasibility & Viability Analysis",
              desc: "Market-driven feasibility studies, financial evaluation, and risk assessment to support informed development decisions.",
            },
            {
              title: "Planning & Project Structuring",
              desc: "Development planning, regulatory coordination, and transaction structuring to enable efficient and compliant project execution.",
            },
            {
              title: "Execution Management & Delivery",
              desc: "Active execution management ensuring schedule control, quality compliance, and coordinated project delivery.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="relative bg-white rounded-2xl p-8
                         border border-gray-200
                         hover:shadow-xl transition"
            >
              {/* Number Badge */}
              <div
                className="w-12 h-12 flex items-center justify-center
                           rounded-lg bg-brand-lightgreen/10 mb-6"
              >
                <span className="text-brand-lightgreen font-semibold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-brand-blue mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Accent strip */}
              <div className="absolute top-0 right-6 h-1 w-20 bg-brand-lightgreen rounded-b-3xl" />
            </motion.div>
          ))}
        </div>

        {/* ================= CENTERED BUTTON ================= */}
        {/* <div className="flex justify-center mt-16">
          <Link to="/real-estate/development">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 
                         bg-brand-green text-white px-8 py-3 rounded-full
                         font-medium hover:opacity-90 transition"
            >
              Learn More →
            </motion.button>
          </Link>
        </div> */}

      </div>
    </section>
  );
}
