import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OurBusinesses() {
  return (
    <section className="pt-32 bg-white" id="our-businesses">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Our Businesses
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Expertise Across <br />
            <span className="text-[#373e68]">
              Property, Energy & Heritage
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Each vertical is shaped by long-term thinking, disciplined execution,
            and a commitment to building assets that endure.
          </p>
        </motion.div>

        {/* ================= WHY US ================= */}
        <motion.div
          className="grid md:grid-cols-3 gap-14 mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              title: "Long-Term Vision",
              desc: "We approach every project with a multi-decade outlook, prioritizing durability and value creation over short-term gains.",
            },
            {
              title: "Integrated Expertise",
              desc: "Our teams combine advisory insight with hands-on execution across property, energy, and heritage assets.",
            },
            {
              title: "Selective Partnerships",
              desc: "We work with a focused set of clients and projects to ensure depth, attention, and consistent outcomes.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h4 className="text-lg font-semibold text-brand-blue mb-3">
                {item.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ================= REAL ESTATE ================= */}
        <BusinessSection
          image="/Ranikhet.png"
          title="Real Estate Advisory"
          desc="Comprehensive advisory across development, investment strategy, and brokerage—supporting informed decision-making across residential and commercial assets."
          link="/business/real-estate-advisory"
        >
          <InfoCard
            title="Development"
            items={[
              "Completed: The Residency",
              "Ongoing: Dehradun, Ranikhet, Ghaziabad",
            ]}
          />
          <InfoCard
            title="Services"
            items={[
              "Investment Advisory",
              "Brokerage & Transaction Support",
            ]}
          />
        </BusinessSection>

        {/* ================= RENEWABLE ENERGY ================= */}
        <BusinessSection
          image="/solorplant.png"
          title="Renewable Energy"
          desc="Development and execution of clean energy infrastructure focused on efficiency, sustainability, and institutional-grade performance."
          link="/business/renewable-energy"
        >
          <InfoCard
            title="Solar Power Projects"
            items={[
              "Dhakrani",
              "Dakpathar",
              "Dadajalalpur",
            ]}
          />
        </BusinessSection>

        {/* ================= SCALE ================= */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: "15+", label: "Years of Experience" },
            { value: "500+", label: "Acres Developed & Managed" },
            { value: "10+ MW", label: "Clean Energy Assets" },
            { value: "2+", label: "Heritage Properties Revived" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-semibold text-brand-green mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ================= HERITAGE ================= */}
        <BusinessSection
          image="/jal-mahal.jpg"
          title="Heritage Hospitality"
          desc="Sensitive restoration and hospitality operations that preserve architectural legacy while enabling sustainable, contemporary use."
          link="/business/heritage-hospitality"
        >
          <InfoCard
            title="Heritage Assets"
            items={[
              "Barsana Jal Mahal",
              "Shukla Ka Talab",
            ]}
          />
        </BusinessSection>

      </div>
    </section>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function BusinessSection({ image, title, desc, link, children }) {
  return (
    <div className="mb-32">
      <motion.div
        className="h-[420px] rounded-3xl overflow-hidden mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-14 items-start">
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-brand-blue">
            {title}
          </h3>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {desc}
          </p>

          <Link to={link}>
            <button className="mt-8 inline-flex items-center gap-3 bg-brand-green text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
              Know More →
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="lg:col-span-2 grid sm:grid-cols-2 gap-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

function InfoCard({ title, items }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200">
      <h4 className="text-sm uppercase tracking-wide text-brand-blue font-medium mb-4">
        {title}
      </h4>
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
