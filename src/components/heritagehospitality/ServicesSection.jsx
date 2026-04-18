import React from "react";
import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

export function ServicesSection() {
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

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Our Expertise
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Heritage Hospitality <br />
            <span className="">Services</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
            Comprehensive services that honour the past while creating refined,
            culturally immersive hospitality experiences.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Heritage Restoration",
              img: "/Heritage_Services_1.jpeg",
              desc: "Preserving architectural legacy while adapting spaces for contemporary use.",
              points: [
                "Architectural conservation",
                "Structural rehabilitation",
                "Heritage compliance",
                "Authentic material sourcing",
              ],
            },
            {
              title: "Hospitality Development",
              img: "/Heritage_Services_2.jpeg",
              desc: "Transforming heritage assets into boutique hospitality destinations.",
              points: [
                "Concept development",
                "Design integration",
                "Amenity planning",
                "Guest experience design",
              ],
            },
            {
              title: "Asset Management",
              img: "/Heritage_Services_3.jpg",
              desc: "Operational excellence while maintaining cultural authenticity.",
              points: [
                "Operations oversight",
                "Revenue optimization",
                "Brand positioning",
                "Quality standards",
              ],
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              className="group bg-white rounded-2xl overflow-hidden
                         border border-gray-200
                         hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <MediaElement
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover
                             transition-transform duration-700
                             group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className="text-xl font-semibold text-brand-blue mb-4
                             group-hover:text-brand-lightgreen transition-colors"
                >
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* <ul className="space-y-3">
                  {service.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 rounded-full bg-brand-lightgreen flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{p}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
