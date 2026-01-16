import React from "react";
import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

export default function ProjectOverview({description , image , title}) {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Subtle background wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
              About This Project
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl 
                           font-semibold text-brand-blue leading-tight">
              Project <span className="text-[#373e68]">Overview</span>
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              {description}
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
                src={image}   
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
