import React from "react";
import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

export default function ServiceOverview() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Subtle background wash (same family as About section) */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          {/* <div className="absolute -bottom-4 left-10 h-1 w-32 bg-brand-lightgreen rounded-full" /> */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
              Real Estate Advisory
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
              End-to-End <br />
              <span className="text-[#373e68]">
                Real Estate Solutions
              </span>
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Our Real Estate Advisory practice delivers comprehensive,
              realistic solutions across the full spectrum of real estate
              activities — from land acquisition to project completion.
            </p>

          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <MediaElement
                src="/development/2.png"
                alt="Real estate development"
                className="object-cover"
              />
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
