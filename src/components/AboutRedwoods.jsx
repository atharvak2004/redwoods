import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBriefcase, FaCogs, FaAward } from "react-icons/fa";

export default function AboutRedwoods() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const stats = [
    {
      title: "Established",
      value: "2006",
      desc: "A legacy built on credibility, growth, and trust.",
      icon: <FaCalendarAlt size={20} />,
    },
    {
      title: "Experience",
      value: "20+ Years",
      desc: "Deep industry knowledge across market cycles.",
      icon: <FaBriefcase size={20} />,
    },
    {
      title: "Services",
      value: "End-to-End",
      desc: "From advisory to execution and investment structuring.",
      icon: <FaCogs size={20} />,
    },
    {
      title: "Reputation",
      value: "Trusted Brand",
      desc: "Recognised by investors, partners, and buyers.",
      icon: <FaAward size={20} />,
    },
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
              About Redwoods Group
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
              Redefining Trust in <br />
              <span className="">
                Real Estate & Investments
              </span>
            </h2>
<p className="mt-6 text-gray-700 text-lg leading-relaxed text-justify">
  Redwoods Group is a diversified business group delivering strategic
  opportunities across real estate, renewable energy, and hospitality sectors.
</p>

<p className="mt-4 text-gray-700 leading-relaxed text-justify">
  Since 2006, we have supported investors, developers, and organizations
  with advisory expertise, deal structuring, and joint development solutions across India.
</p>

<p className="mt-4 text-gray-700 leading-relaxed text-justify">
  Our experience in facilitating over 25 million sq. ft. of real estate
  transactions reflects our commitment to delivering practical, value-driven outcomes.
</p>

<p className="mt-4 text-gray-700 leading-relaxed text-justify">
  Guided by integrity, transparency, and long-term thinking, Redwoods continues
  to build trusted partnerships and sustainable growth opportunities.
</p>

            {!isAboutPage && (
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-10 inline-flex items-center gap-3
                  bg-brand-green text-white px-8 py-3 rounded-full
                  font-medium shadow-md hover:shadow-lg transition"
                >
                  Learn More About Us →
                </motion.button>
              </Link>
            )}

          </motion.div>

          {/* RIGHT PREMIUM CARDS */}

          <div className="grid sm:grid-cols-2 gap-8">

            {stats.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-[1px] rounded-2xl 
  bg-gradient-to-br from-brand-lightgreen/40 via-transparent to-brand-lightgreen/30 h-full"
              >
                <div className="relative p-8 rounded-2xl bg-white border border-gray-100
  shadow-sm group-hover:shadow-xl transition flex flex-col justify-between h-full">

                  <div>
                    {/* ICON */}
                    <div className="flex items-center justify-center w-12 h-12
      rounded-xl bg-brand-lightgreen/10 text-brand-lightgreen mb-5
      group-hover:scale-110 transition">
                      {item.icon}
                    </div>

                    <h3 className="text-xs uppercase tracking-widest text-gray-500">
                      {item.title}
                    </h3>

                    <div className="mt-1 text-3xl font-semibold text-brand-blue">
                      {item.value}
                    </div>

                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}