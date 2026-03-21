import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

function MissionVision() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
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
            Our mission and vision guide how we create value, build trusted partnerships, and deliver meaningful impact across every venture we undertake.
          </p>
        </motion.div>

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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-lightgreen/10 text-brand-green">
                <FaBullseye size={20} />
              </div>
              <span className="text-sm uppercase tracking-widest text-brand-green">
                Our Mission
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-brand-blue">
              Deliver Clarity, Trust, and Long-Term Value
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              To guide our clients with clear insight, strategic advisory, and disciplined execution, enabling confident decisions and sustainable value creation across real estate, renewable energy, and heritage hospitality.
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-lightgreen/10 text-brand-green">
                <FaEye size={20} />
              </div>
              <span className="text-sm uppercase tracking-widest text-brand-green">
                Our Vision
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-brand-blue">
              A Trusted Partner for Generations
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              To build enduring partnerships and become a trusted, forward-thinking business group, delivering responsible growth, sustainable opportunities, and lasting value for our partners, communities, and future generations.
            </p>

            <div className="absolute top-0 right-6 h-1 w-24 bg-brand-lightgreen rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;