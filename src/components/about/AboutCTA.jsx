import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function AboutCTA() {
  return (
    <section className="bg-brand-blue text-white">
      <div className="mx-auto px-6">
        <div
          className="
            relative overflow-hidden rounded-3xl
            bg-gradient-to-r from-brand-blue via-[#091676] to-brand-blue
            p-8 sm:p-12 md:p-16 lg:p-20
            text-center
          "
        >
          {/* Dotted Background Accent */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1.2px 1.2px, #92c658 1px, transparent 0)",
                backgroundSize: "34px 34px",
              }}
            />
          </div>

          {/* ================= CONTENT ================= */}
          <motion.div
            className="relative z-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block mb-4 text-sm tracking-widest uppercase text-brand-lightgreen">
              Partner With Us
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight">
              Looking for a Partner <br />
              <span className="text-white/80">
                You Can Trust Long-Term?
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto"
            >
              Whether you’re exploring an opportunity, seeking strategic
              advisory, or planning a long-term partnership, our team is ready
              to engage with clarity, discretion, and purpose.
            </motion.p>

            {/* ================= CTA BUTTONS ================= */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-5 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {/* Primary CTA */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <NavLink
                  to="/contact"
                  className="
                    inline-flex items-center justify-center
                    px-10 py-4 rounded-full
                    bg-brand-green text-white font-medium
                    hover:opacity-90 transition
                    w-full sm:w-auto
                  "
                >
                  Start a Conversation
                </NavLink>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <NavLink
                  to="/transaction"
                  className="
                    inline-flex items-center justify-center
                    px-10 py-4 rounded-full
                    border border-white/70 text-white
                    hover:bg-white hover:text-brand-blue
                    transition
                    w-full sm:w-auto
                  "
                >
                  Explore Our Transactions
                </NavLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
