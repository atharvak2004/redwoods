import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Strategic Services
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Real Estate <br />
            <span className="text-[#373e68]">Advisory & Brokerage</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-700 text-lg leading-relaxed">
            Strategic services designed to optimise asset value and investment
            outcomes through disciplined analysis, market intelligence, and
            execution-focused advisory.
          </p>
        </motion.div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Investment Advisory */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-white rounded-2xl p-10
                       border border-gray-200
                       hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-brand-blue mb-4">
              Investment Advisory
            </h3>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Strategic guidance for institutional and private investors seeking
              optimal risk-adjusted returns from real estate allocations.
            </p>

            <ul className="space-y-4">
              {[
                "Portfolio strategy and asset allocation",
                "Due diligence and transaction support",
                "Risk assessment and mitigation",
                "Performance monitoring and reporting",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-brand-lightgreen flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Accent strip */}
            <div className="absolute top-0 right-8 h-1 w-24 bg-brand-lightgreen rounded-b-3xl" />
          </motion.div>

          {/* Brokerage */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="relative bg-white rounded-2xl p-10
                       border border-gray-200
                       hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-brand-blue mb-4">
              Brokerage
            </h3>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Premium transaction services for high-value commercial and
              residential assets across key Indian markets.
            </p>

            <ul className="space-y-4">
              {[
                "Market positioning and pricing strategy",
                "Buyer qualification and matching",
                "Negotiation and deal structuring",
                "Transaction closure and handover",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-brand-lightgreen flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Accent strip */}
            <div className="absolute top-0 right-8 h-1 w-24 bg-brand-lightgreen rounded-b-3xl" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
