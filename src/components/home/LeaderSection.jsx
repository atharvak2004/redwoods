import { motion } from "framer-motion";

export default function LeaderSection() {
  return (
    <section className="py-24 bg-brand-blue/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Our Leadership
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-brand-blue leading-tight">
            Leadership Built on <br />
            <span className="text-[#373e68]">Experience & Integrity</span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At the core of Redwoods Group is a leadership philosophy rooted in
            long-term thinking, disciplined execution, and an unwavering
            commitment to creating enduring value.
          </p>
        </motion.div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-full overflow-hidden"
          >
            <img
              src="/default-avatar-photo-placeholder-profile-icon-vector.jpg"
              alt="Founder - Redwoods Group"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ================= FOUNDER CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-2">
              Anuj Nautiyal
            </h3>

            <p className="text-sm uppercase tracking-wide text-gray-500 mb-6">
              Founder
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Redwoods Group was founded in 2006 with a long-term vision to help
              clients navigate complex investment decisions and build enduring
              value across real estate and allied sectors.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              A respected industry professional and member of RICS, Anuj Nautiyal
              has played a pivotal role in structuring high-value real estate
              transactions and institutional-grade investment frameworks.
            </p>

            <p className="text-gray-700 leading-relaxed">
              He is recognized for structuring a landmark enterprise acquisition
              valued at ₹2,000 crore—among the most significant real estate
              transactions in India—reflecting disciplined leadership and
              strategic clarity.
            </p>

            {/* Accent */}
            <div className="mt-8 h-1 w-24 bg-brand-lightgreen rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
