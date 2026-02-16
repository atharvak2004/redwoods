import React from "react";
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

export function ImpactSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Very light green background wash */}
      <div
        className="absolute inset-0 
                   bg-gradient-to-r 
                   from-brand-green/10 
                   via-brand-green/20 
                   to-brand-green/10"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Measurable Outcomes
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-green/80 leading-tight">
            Our <span className="text-brand-green">Impact</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
            Supporting India's clean energy transition through structured advisory, disciplined execution support, and a long-term commitment to
            sustainable infrastructure development.

          </p>
        </motion.div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { number: "500+", label: "MW Capacity Advised" },
            { number: "₹2,500", label: "Cr. Capital Deployed" },
            { number: "15+", label: "Projects Delivered" },
            { number: "250K", label: "Tonnes CO₂ Avoided" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="relative"
            >
              <div className="text-4xl md:text-5xl font-semibold text-brand-lightgreen mb-3">
                {stat.number}
              </div>

              <div className="text-gray-600 text-sm uppercase tracking-wider">
                {stat.label}
              </div>

              {/* Accent underline */}
              <div className="mx-auto mt-4 h-0.5 w-12 bg-brand-lightgreen/50 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
