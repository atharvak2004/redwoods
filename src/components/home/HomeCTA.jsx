import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function HomeCTA() {
  return (
    <section className="bg-brand-blue text-white">
      <div className="w-full mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-3xl
                     bg-gradient-to-r from-brand-blue via-[#091676] to-brand-blue
                     p-16 md:p-20 text-center"
        >
          {/* Background Accent */}
          <div className="absolute inset-0 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1.2px 1.2px, #92c658 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block mb-4 text-sm tracking-widest uppercase text-brand-lightgreen">
              Let’s Work Together
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight">
              Ready to Build Value <br />
              <span className="text-white/80">
                Across Assets & Opportunities?
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-lg text-white/80 leading-relaxed max-w-3xl mx-auto"
            >
              Whether you’re an investor, partner, or property owner, Redwoods
              offers strategic advisory and execution expertise tailored to your
              goals.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
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
              <Link to="/contact">
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="px-10 py-4 rounded-full
                           bg-brand-green text-white font-medium
                           hover:opacity-90 transition"
              >
                Get in Touch
              </motion.button>
              </Link>
              <Link to="/business">
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="px-10 py-4 rounded-full
                           border border-white/70 text-white
                           hover:bg-white hover:text-brand-blue transition"
              >
                Explore Our Businesses
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
