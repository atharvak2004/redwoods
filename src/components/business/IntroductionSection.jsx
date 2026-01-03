import React from "react";
import { motion } from "framer-motion";

function IntroductionSection() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-widest uppercase text-brand-lightgreen mb-4"
          >
            Who We Are
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue mb-12 leading-tight"
          >
            A Legacy of Excellence
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            We are a distinguished advisory firm specializing in real estate
            development, renewable energy, and heritage hospitality. Our approach
            blends strategic insight with deep operational expertise to deliver
            enduring value for our clients and long-term partners.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default IntroductionSection;
