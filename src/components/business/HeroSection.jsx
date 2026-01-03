import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[520px] flex items-center">
      {/* Background Media */}
      <div className="absolute inset-0">
        <MediaElement
          src="/hero-services.jpg"
          alt="Premium real estate architecture"
          className="h-full w-full object-cover"
        />
        {/* Brand Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= BREADCRUMB ================= */}
          <motion.div
            className="mb-6 text-sm text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <NavLink
              to="/"
              className="hover:text-brand-green transition"
            >
              Home
            </NavLink>
            <span className="mx-2">/</span>
            <span className="text-brand-lightgreen">Services</span>
          </motion.div>

          {/* ================= HEADING ================= */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-white leading-tight">
              Our Services <br />
              <span className="text-white/80">
                Strategic Expertise Across Assets
              </span>
            </h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Strategic expertise across real estate, renewable energy, and
              heritage hospitality—delivering clarity, execution, and long-term
              value.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
