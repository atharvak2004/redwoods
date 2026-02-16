import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OurBusinesses() {
  return (
    <section className="py-28 bg-white" id="our-businesses">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          className="max-w-4xl mb-20"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Our Businesses
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Expertise Across <br />
            <span className="text-[#373e68]">
              Real Estate, Energy & Heritage
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Our businesses are built on long-term thinking, disciplined execution,
            and a commitment to creating assets with lasting value.
          </p>
        </motion.div>

        {/* ================= BUSINESS CARDS ================= */}

        <BusinessCard
          image="/RealEstateHeroBg.png"
          title="Real Estate Development"
          desc="Development-focused advisory supporting residential and commercial projects through strategic planning, execution guidance, and market-driven insights."
          link="real-estate/development"
          cards={[
            {
              title: "Development Projects",
              items: ["Dehradun", "Ranikhet", "Ghaziabad"],
            },
          ]}
        />

        <BusinessCard
          image="/home/real-estate-adv1.png"
          title="Real Estate Advisory"
          desc="Strategic real estate advisory services enabling informed investment decisions, efficient transactions, and long-term portfolio value."
          link="/real-estate/advisory"
          cards={[
            {
              title: "Advisory Services",
              items: ["Investment Advisory", "Transaction & Brokerage Support"],
            },
          ]}
        />

        <BusinessCard
          image="/solar/Dakpathar.JPG"
          title="Renewable Energy"
          desc="Execution of clean energy infrastructure projects with a focus on sustainability, operational efficiency, and long-term asset performance."
          link="/business/renewable-energy"
          cards={[
            {
              title: "Solar Projects",
              items: ["Dhakrani", "Dakpathar", "Dadajalalpur"],
            },
          ]}
        />

        <BusinessCard
          image="/heritageHero.png"
          title="Heritage Hospitality"
          desc="Curated hospitality experiences through the careful restoration and adaptive reuse of heritage properties, balancing legacy with modern comfort."
          link="/business/heritage-hospitality"
          cards={[
            {
              title: "Heritage Assets",
              items: ["Barsana Jal Mahal", "Shukla Ka Talab", "Pilibhit House"],
            },
          ]}
        />

      </div>
    </section>
  );
}

/* ================= REUSABLE ================= */

function BusinessCard({ image, title, desc, link, cards }) {
  return (
    <motion.div
      className="grid lg:grid-cols-2 gap-14 items-center mb-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* IMAGE */}
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-[320px] object-cover rounded-3xl shadow-lg 
                     group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-2xl font-semibold text-brand-blue">
          {title}
        </h3>

        <p className="mt-4 text-gray-700 leading-relaxed">
          {desc}
        </p>

        {/* INFO CARDS */}
        <div className="grid sm:grid-cols-2 gap-8 mt-8">
          {cards.map((card, i) => (
            <InfoCard key={i} {...card} />
          ))}
        </div>

        <Link to={link}>
          <button
            className="mt-10 inline-flex items-center gap-3 
            bg-brand-green text-white px-8 py-3 rounded-full 
            font-medium hover:opacity-90 transition"
          >
            Explore Business →
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

function InfoCard({ title, items }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
      <h4 className="text-sm uppercase tracking-wide text-brand-blue font-medium mb-4">
        {title}
      </h4>
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
