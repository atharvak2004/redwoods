import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutRedwoods() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
              About Redwoods Group
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
              Redefining Trust in <br />
              <span className="text-[#373e68]">
                Real Estate & Investments
              </span>
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              At <strong>Redwoods</strong>, we redefine trust in the real estate
              service market through credibility, transparency, and an
              unwavering client focus.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Established in <strong>2006</strong>, Redwoods Group has grown to
              offer end-to-end, realistic services across real estate advisory,
              fund management, deal structuring, fund allotment, joint
              developments, and uniquely complex transactions.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              With more than <strong>two decades of hands-on experience</strong>,
              we have evolved into one of the most trusted property consultants,
              delivering professional insight and personalized solutions.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Today, Redwoods is recognised as one of the most reliable brands
              for partners, investors, and property buyers alike.
            </p>

            {!isAboutPage && (
              <Link to="/about">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 inline-flex items-center gap-3
                           bg-brand-green text-white px-8 py-3 rounded-full
                           font-medium hover:opacity-90 transition"
              >
                Learn More About Us →
              </motion.button>
              </Link>
            )}
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Established",
                value: "2006",
                desc: "A legacy built on credibility, growth, and trust.",
              },
              {
                title: "Experience",
                value: "20+ Years",
                desc: "Deep industry knowledge across market cycles.",
              },
              {
                title: "Services",
                value: "End-to-End",
                desc: "From advisory to execution and investment structuring.",
              },
              {
                title: "Reputation",
                value: "Trusted Brand",
                desc: "Recognised by investors, partners, and buyers.",
              },
            ].map((item, index) => (
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
                className="relative p-8 border border-gray-200 rounded-2xl
                           hover:shadow-lg transition bg-white"
              >
                <h3 className="text-sm uppercase tracking-wider text-gray-500">
                  {item.title}
                </h3>

                <div className="mt-2 text-3xl font-semibold text-brand-blue">
                  {item.value}
                </div>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="absolute top-0 right-6 h-1 w-24 bg-brand-lightgreen rounded-bl-3xl" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
