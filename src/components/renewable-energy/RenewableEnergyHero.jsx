import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

/* ================= ANIMATION VARIANTS ================= */
const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeUpHero = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeUpText = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};

export default function RenewableEnergyHero() {
  return (
    <section className="relative h-[90vh] min-h-[520px] flex items-center">

      {/* ================= BACKGROUND MEDIA ================= */}
      <div className="absolute inset-0">
        <MediaElement
          src="/solarherobg.png"
          alt="Renewable energy infrastructure"
          className="h-full w-full object-cover"
        />
        {/* Brand Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= BREADCRUMB ================= */}
          <motion.div
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            className="mb-6 text-sm text-white/80"
          >
            <NavLink
              to="/"
              className="hover:text-brand-green transition"
            >
              Home
            </NavLink>
            <span className="mx-2">/</span>
            <span className="hover:text-brand-green transition cursor-pointer">
              Business
            </span>
            <span className="mx-2">/</span>
            <span className="text-brand-lightgreen">
              Renewable Energy
            </span>
          </motion.div>

          {/* ================= HEADING ================= */}
          <motion.div
            variants={fadeUpHero}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-white leading-tight font-bebas">
              Our Business <br />
              <span className="text-white/80">
                Renewable Energy
              </span>
            </h1>

            <motion.p
              variants={fadeUpText}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed"
            >
              Advisory and execution support for clean energy projects focused on
              sustainability, long-term infrastructure value, and measurable
              environmental impact.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
