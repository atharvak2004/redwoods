import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

function HeritageHospitalitySection() {
  return (
    <section id="heritage-hospitality" className="py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= INTRO ================= */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-sm tracking-widest uppercase text-brand-lightgreen">
            Our Portfolio
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-6">
            Heritage Hospitality
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Restoring and managing heritage properties with sensitivity,
            authenticity, and modern hospitality standards—creating immersive
            experiences while preserving cultural legacy.
          </p>
        </motion.div>

        {/* ================= HERO MEDIA ================= */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-20
                     h-[320px] sm:h-[420px] md:h-[520px] lg:h-[60vh]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <MediaElement
            src="/service-real-estate.jpg"
            alt="Heritage Hospitality"
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t
                          from-brand-blue/50 via-brand-blue/25 to-transparent" />
        </motion.div>

        {/* ================= HERITAGE CARDS ================= */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl overflow-hidden
                         border border-gray-200
                         hover:shadow-xl transition"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="h-[240px] overflow-hidden">
                <MediaElement
                  src="/service-heritage.jpg"
                  alt="Heritage property"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-lg font-semibold text-brand-blue mb-3">
                  Heritage Asset
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Preserving legacy architecture while delivering refined,
                  culturally immersive hospitality experiences.
                </p>

                {/* Accent */}
                <div className="mt-6 h-[2px] w-12 bg-brand-green rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default HeritageHospitalitySection;
