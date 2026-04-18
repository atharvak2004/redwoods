import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

function HeroSection({ name, title, title2, descr, img }) {
  return (
    <section className="relative h-[90vh] min-h-[520px] flex items-center">
      {/* Background Media */}
      <div className="absolute inset-0">
        <MediaElement
          src={img}
          alt="Premium real estate architecture"
          className="h-full w-full object-cover"
        />
        {/* Brand Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />

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
            <span className="">Business</span>
            <span className="mx-2">/</span>
            <span className="text-brand-lightgreen">{name}</span>
          </motion.div>

          {/* ================= HEADING ================= */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl text-white leading-tight font-bebas">
              {title} <br />
              <span className="text-white/80">
                {title2}
              </span>
            </h1>

            <motion.p
              className="mt-6 max-w-lg text-md md:text-lg text-white/80 leading-relaxed tracking-wide text-justify fade-up delay-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {descr}
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
