import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

function RenewableEnergySection() {
  return (
    <section id="renewable-energy" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* ================= TITLE ================= */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm tracking-widest uppercase text-brand-lightgreen mb-4">
            Solar power & clean energy solutions
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-6">
            Renewable Energy
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Advisory and execution support for renewable energy projects,
            focused on clean power generation, sustainable infrastructure,
            and long-term environmental and economic value.
          </p>
        </motion.div>

        {/* ================= MAIN VIDEO ================= */}
        <motion.div
          className="relative rounded-3xl overflow-hidden
                     h-[320px] sm:h-[420px] md:h-[520px] lg:h-[60vh]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <MediaElement
            src="/KrantiSolarVideo.mp4"
            alt="Renewable energy"
            isVideo
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* ================= IMAGE + POINTS ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            className="aspect-square rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <MediaElement
              src="/renewable-energy-image.jpg"
              alt="Solar energy project"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Points */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ul className="space-y-4 text-base text-gray-700">
              {[
                "Project advisory & feasibility assessment",
                "Investment structuring & strategy",
                "Execution support & operational guidance",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-brand-green font-bold">•</span>
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

export default RenewableEnergySection;
