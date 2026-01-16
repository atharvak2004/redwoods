import React from "react";
import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

export function ServiceOverview() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:order-2"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <MediaElement
                src="/DHAKRANI_solor.png"
                alt="Renewable energy infrastructure"
                className="object-cover"
              />
            </div>

            {/* Accent strip */}
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:order-1"
          >
            <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
              Renewable Energy Advisory
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
              Powering a <br />
              <span className="text-[#373e68]">
                Sustainable Future
              </span>
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Our Renewable Energy practice provides comprehensive advisory and
              execution support for clean energy projects — helping investors,
              developers, and corporations navigate the energy transition with
              clarity and confidence.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
