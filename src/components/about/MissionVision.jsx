import React from "react";
import { motion } from "framer-motion";

function MissionVision() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-sm tracking-widest uppercase text-brand-lightgreen">
            Our Purpose
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Mission & Vision
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Our mission and vision define how we create value, build trust, and
            deliver lasting impact across every engagement.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative border border-gray-200 rounded-3xl p-10
                       hover:shadow-xl transition bg-white"
          >
            <span className="text-sm uppercase tracking-widest text-brand-green">
              Our Mission
            </span>

            <h3 className="mt-4 text-2xl font-semibold text-brand-blue">
              Deliver Clarity, Trust, and Value
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              To provide strategic advisory and execution expertise that enables
              clients to make informed decisions, manage risk, and unlock
              long-term value across real estate, energy, and heritage assets.
            </p>

            <div className="absolute top-0 right-6 h-1 w-24 bg-brand-lightgreen rounded-bl-3xl" />
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative border border-gray-200 rounded-3xl p-10
                       hover:shadow-xl transition bg-white"
          >
            <span className="text-sm uppercase tracking-widest text-brand-green">
              Our Vision
            </span>

            <h3 className="mt-4 text-2xl font-semibold text-brand-blue">
              Be a Trusted Partner for Generations
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              To be recognised as a long-term, trusted partner by investors,
              developers, and institutions—creating sustainable value while
              respecting culture, community, and the environment.
            </p>

            <div className="absolute top-0 right-6 h-1 w-24 bg-brand-lightgreen rounded-bl-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default MissionVision;
