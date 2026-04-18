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
      <div className="absolute inset-0">
        <MediaElement
          src="/solar/Dhakarani-hero.png"
          alt="Renewable energy infrastructure"
          className="h-full w-full object-cover"
        />
        {/* Brand Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,black,rgba(0,0,0,0.55)_40%,transparent)]" />
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
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
          <motion.div
            variants={fadeUpHero}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl text-white leading-tight font-bebas">
              Our Business <br />
              <span className="text-white/80">
                Renewable Energy
              </span>
            </h1>

            <motion.p
              variants={fadeUpText}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-lg text-md md:text-lg text-white/80 leading-relaxed tracking-wide text-justify fade-up delay-3"
            >
              Ownership and operation of clean energy infrastructure focused on sustainable power generation, operational efficiency, and long-term asset performance.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
