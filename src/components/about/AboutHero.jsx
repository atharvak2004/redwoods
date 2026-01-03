import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="relative h-[90vh] min-h-[520px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/aboutbg.avif"
          alt="About Redwoods Group"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 text-sm text-white/80"
          >
            <NavLink
              to="/"
              className="hover:text-brand-green transition"
            >
              Home
            </NavLink>
            <span className="mx-2">/</span>
            <span className="text-brand-lightgreen">About Us</span>
          </motion.div>

          {/* Heading + Text */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-white leading-tight">
              Building Trust. <br />
              <span className="text-white/80">
                Creating Long-Term Value.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed"
            >
              Redwoods Group is a diversified advisory and investment platform
              delivering strategic insight, disciplined execution, and enduring
              value across real estate, renewable energy, and heritage
              hospitality.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;
