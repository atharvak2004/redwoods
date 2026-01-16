import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutServices() {
  const services = [
    {
      title: "Real Estate Advisory",
      description:
        "We offer end-to-end real estate advisory services including development advisory, investment strategy, deal structuring, and brokerage. Our approach is grounded in market intelligence, risk assessment, and execution excellence.",
      image: "RealEstateHeroBg.png",
      link: "/business/real-estate-advisory",
    },
    {
      title: "Renewable Energy",
      description:
        "Our renewable energy vertical focuses on clean power generation and sustainable infrastructure. We support projects across planning, execution, and operational strategy to enable long-term environmental and economic impact.",
      image: "DHAKRANI_solor.png",
      link: "/business/renewable-energy",
    },
    {
      title: "Heritage Hospitality",
      description:
        "We curate heritage hospitality experiences by restoring and managing culturally significant properties, blending authenticity with modern comfort while preserving historical value.",
      image: "home/hero/heritage1.jpg",
      link: "/business/heritage-hospitality",
    },
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-sm tracking-widest uppercase text-brand-lightgreen">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Expertise Across <br />
            <span className="text-[#3e467c]">
              Diverse Business Verticals
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Our services are built on strategic insight, disciplined execution,
            and a long-term perspective—helping clients navigate complex
            opportunities with confidence.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* FULL CARD CLICKABLE */}
              <Link
                to={service.link}
                className="block group h-full cursor-pointer"
              >
                <div
                  className="relative bg-white border border-gray-200
                             rounded-3xl overflow-hidden
                             hover:shadow-xl transition h-full"
                >
                  {/* Accent Strip */}
                  <div className="absolute top-0 right-6 h-1 w-24 bg-brand-lightgreen rounded-bl-3xl z-10" />

                  {/* Image */}
                  <div className="h-[220px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover
                                 group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3
                      className="text-xl font-semibold text-brand-blue
                                 group-hover:text-brand-green transition"
                    >
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Visual CTA */}
                    <div
                      className="mt-6 inline-flex items-center gap-2
                                 text-brand-green font-medium"
                    >
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default AboutServices;
