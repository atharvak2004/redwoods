import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

/* ================= ANIMATION VARIANTS ================= */
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

export function ServiceOverview() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Subtle heritage wash */}
      <div
        className="absolute inset-0 
                   bg-gradient-to-r 
                   from-brand-lightgreen/3 
                   via-brand-lightgreen/6 
                   to-brand-lightgreen/3"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= CONTENT ================= */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
              Heritage Hospitality
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight mb-6">
              Preserving Legacy, <br />
              <span className="text-[#373e68]">
                Creating Experiences
              </span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our Heritage Hospitality practice specializes in the careful restoration and adaptive reuse of historic properties. We preserve architectural character and cultural significance while transforming these spaces into thoughtful hospitality destinations designed for long-term stewardship.
            </p>
          </motion.div>

          {/* ================= IMAGE ================= */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <MediaElement
                src="/home/hero/Shukla.jpg"
                alt="Heritage property restoration"
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
