import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

function RealEstateSection() {
  return (
    <section id="real-estate" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= BANNER ================= */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-20
                     h-[320px] sm:h-[420px] md:h-[520px] lg:h-[60vh]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <MediaElement
            src="/service-real-estate.jpg"
            alt="Real Estate Advisory"
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t
                          from-brand-blue/50 via-brand-blue/25 to-transparent" />

          <motion.div
            className="absolute bottom-8 left-8 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Real Estate Advisory
            </h2>
            <p className="mt-3 text-lg text-white/80">
              Strategic advisory across development, investment, and execution.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= DEVELOPMENT ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-semibold text-brand-blue mb-4">
              Real Estate Development
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Advisory across land acquisition, project feasibility, planning,
              structuring, and execution oversight—helping transform opportunities
              into sustainable developments.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {[
                "Land acquisition & feasibility analysis",
                "Project planning & structuring",
                "Development advisory",
                "Execution support",
              ].map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-brand-green">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="aspect-square rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <MediaElement
              src="/service-real-estate.jpg"
              alt="Development project"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-24 h-px bg-brand-lightgreen/40" />

        {/* ================= SERVICES ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            className="aspect-square rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <MediaElement
              src="/service-real-estate.jpg"
              alt="Real Estate Services"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-semibold text-brand-blue mb-4">
              Real Estate Services
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Strategic services designed to optimise asset value, manage risk,
              and enable informed investment decisions across residential and
              commercial real estate.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {[
                "Investment Advisory",
                "Brokerage Services",
                "Market intelligence & deal structuring",
              ].map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-brand-green">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default RealEstateSection;
