import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutRedwoodsDetailed() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Our Story
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Redefining Trust in <br />
            <span className="text-[#373e68]">
              Real Estate & Investments
            </span>
          </h2>

          <p className="mt-14 text-gray-700 text-lg leading-relaxed max-w-3xl">
            Founded in 2006, Redwoods Group is a diversified business group committed to delivering strategic opportunities across Real Estate Development, Real Estate Advisory, Renewable Energy, and Heritage Hospitality.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-lg">
            With deep expertise in investment advisory, deal structuring, fund syndication, and joint developments, Redwoods has built a reputation for delivering thoughtful solutions that create long-term value for investors, developers, and businesses.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-lg">
            Over the years, we have facilitated over 25 million sq. ft. of leasing and real estate transactions across major markets in India, building strong partnerships with leading developers and global organizations.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-lg">
            Our association with renowned clients including Fidelity Investments, Embassy, Valmark, Vaishnavi Group, Marvel, Jain Heights, Unity Infra Projects, Unitech, and Steria, along with our strategic collaboration with BNP Paribas Real Estate, reflects the trust and credibility we have built in the industry.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-lg">
            Over the years, we have facilitated over 25 million sq. ft. of leasing and real estate transactions across major markets in India, building strong partnerships with leading developers and global organizations.
          </p>

          <p className="mt-8 text-gray-700 leading-relaxed max-w-3xl text-xl font-semibold">
            At Redwoods, our approach is guided by integrity, transparency, and long-term thinking. We believe in building lasting relationships and creating opportunities that drive sustainable growth for our partners and stakeholders.
          </p>
           <p className="mt-8 text-gray-700 leading-relaxed max-w-3xl text-xl font-semibold">
           As we continue to expand across sectors, our vision remains clear — to redefine trust and excellence in every venture we undertake.
          </p>



          {!isAboutPage && (
            <Link to="/about">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="
                  mt-10 inline-flex items-center gap-3
                  bg-brand-green text-white px-8 py-3 rounded-full
                  font-medium hover:opacity-90 transition
                "
              >
                Learn More About Us →
              </motion.button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
