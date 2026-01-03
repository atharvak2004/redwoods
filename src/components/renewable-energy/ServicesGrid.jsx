import React from "react";
import { motion } from "framer-motion";

export function ServicesGrid() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">

      {/* Subtle green wash */}
      <div className="absolute inset-0 
                      bg-gradient-to-r 
                      from-brand-lightgreen/5 
                      via-brand-lightgreen/8 
                      to-brand-lightgreen/5" />

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
            Our Capabilities
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Renewable Energy <br />
            <span className="text-[#373e68]">Services</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
            End-to-end advisory for solar, wind, and hybrid energy systems across
            utility-scale, commercial, and industrial applications.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Project Advisory",
              desc: "Guidance on technology selection, site assessment, and project structuring.",
              points: [
                "Technology assessment",
                "Site evaluation",
                "Regulatory compliance",
                "Project structuring",
              ],
            },
            {
              title: "Investment Structuring",
              desc: "Financial modeling, capital raising, and investor relations.",
              points: [
                "Financial modeling",
                "Capital raising",
                "Risk allocation",
                "Returns optimization",
              ],
            },
            {
              title: "Execution Support",
              desc: "End-to-end delivery from EPC selection to commissioning.",
              points: [
                "EPC management",
                "Quality assurance",
                "Timeline management",
                "Commissioning support",
              ],
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative bg-white rounded-2xl p-10
                         border border-gray-200
                         hover:shadow-xl transition"
            >
              {/* Number Badge */}
              <div className="w-12 h-12 flex items-center justify-center
                              rounded-lg bg-brand-lightgreen/10 mb-6">
                <span className="text-brand-lightgreen font-semibold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-brand-blue mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.desc}
              </p>

              <ul className="space-y-3">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-brand-lightgreen flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Accent strip */}
              <div className="absolute top-0 right-8 h-1 w-24 bg-brand-lightgreen rounded-b-3xl" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
