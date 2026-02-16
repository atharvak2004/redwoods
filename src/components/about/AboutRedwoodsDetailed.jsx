import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutRedwoodsDetailed() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Our Story
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Redefining Trust in <br />
            <span className="text-[#373e68]">
              Real Estate & Investments
            </span>
          </h2>

          <p className="mt-14 text-gray-700 text-lg leading-relaxed max-w-3xl">
            At <strong>Redwoods</strong>, we help clients navigate real estate decisions
            with clarity, integrity, and a long-term perspective.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-lg">
            Founded in <strong>2006</strong>, Redwoods Group provides end-to-end real
            estate advisory and investment services, supporting clients across
            commercial, residential, retail, hospitality, and infrastructure assets.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-lg">
            Our strength lies in combining market insight with practical execution,
            enabling informed decisions across acquisitions, transactions, capital
            structuring, and development strategies.
          </p>

          <p className="mt-8 text-gray-700 leading-relaxed max-w-3xl text-xl font-semibold">
            Today, Redwoods is a trusted partner for investors, developers, and
            businesses seeking sustainable, value-driven real estate outcomes.
          </p>


          {!isAboutPage && (
            <Link to="/about">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="
                  mt-10 inline-flex items-center gap-3
                  bg-brand-green text-white px-8 py-3 rounded-full
                  font-medium hover:opacity-90 transition
                "
              >
                Learn More About Us →
              </motion.button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
