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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

export function PhilosophySection() {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">

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

          {/* ================= IMAGES ================= */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <MediaElement
                src='/OurPhilosophy-image1.png'
                alt="Heritage architectural detail"
                className="object-cover"
              />
            </div>

            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mt-12">
              <MediaElement
                src="/OurPhilosophy-image2.png"
                alt="Heritage hospitality space"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
              Our Philosophy
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight mb-6">
              Where History <br />
              <span className="">
                Meets Hospitality
              </span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Heritage properties are enduring expressions of craftsmanship, culture, and history. Our philosophy respects this legacy while enabling thoughtful hospitality experiences that support preservation, continued relevance, and long-term stewardship.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Authenticity First",
                  desc: "Every restoration decision prioritizes historical accuracy and cultural integrity.",
                },
                {
                  title: "Sustainable Preservation",
                  desc: "Conservation techniques ensure these properties endure for generations.",
                },
                {
                  title: "Experiential Excellence",
                  desc: "Guest experiences are designed to connect visitors with the soul of each property.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  custom={i}
                  className="flex gap-4"
                >
                  <span className="w-2 h-2 mt-2 rounded-full bg-brand-lightgreen flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-1">
                      {item.title}
                    </h4>
                    {/* <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
