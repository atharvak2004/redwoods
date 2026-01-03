import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function CTASection() {
  return (
    <section className="bg-brand-blue text-white">
      <div className="mx-auto px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl
                     bg-gradient-to-r from-brand-blue via-[#091676] to-brand-blue
                     p-16 md:p-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
          <div className="relative z-10 max-w-4xl mx-auto">

            <motion.span
              className="inline-block mb-4 text-sm tracking-widest uppercase text-brand-lightgreen"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let’s Collaborate
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl xl:text-5xl font-semibold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let’s Build Value <br />
              <span className="text-white/80">Together</span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Partner with us to create lasting impact through strategic insight,
              disciplined execution, and a long-term vision.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
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
              <Link
                to="/contact"
                className="px-10 py-4 rounded-full
               bg-brand-green text-white font-medium
               hover:opacity-90 transition"
              >
                Contact Us
              </Link>

              <Link
                to="/transaction"
                className="px-10 py-4 rounded-full
               border border-white/70 text-white
               hover:bg-white hover:text-brand-blue transition"
              >
                View Transactions
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
