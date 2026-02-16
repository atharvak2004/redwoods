import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function ServicesSection() {
  const location = useLocation();
  const hideButton = location.pathname === "/real-estate/services";
  const [activeCard, setActiveCard] = useState(null);
  return (
    <section
      id="services"
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Strategic Services
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Real Estate <br />
            <span className="text-[#373e68]">Advisory & Brokerage</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-700 text-lg leading-relaxed">
            Strategic real estate services supporting informed decision-making
            across investments and transactions, guided by market insight,
            structured analysis, and disciplined execution.

          </p>
        </motion.div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ================= INVESTMENT ADVISORY ================= */}
          <div className="w-full" style={{ perspective: "1200px" }}>
            <motion.div
              animate={{ rotateY: activeCard === "investment" ? 180 : 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d", height: "460px" }}
              className="relative w-full"
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 h-full w-full
                           bg-white rounded-2xl p-10
                           border border-gray-200
                           flex flex-col"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-full h-44 mb-6">
                  <img
                    src="/real-estate-adv.png"
                    alt="Investment Advisory"
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-brand-blue mb-4">
                  Investment Advisory
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Advisory support for investors seeking clarity, risk management,
                  and long-term value across real estate opportunities.
                </p>

                <button
                  onClick={() => setActiveCard("investment")}
                  className="mt-auto bg-brand-green text-white
                             px-6 py-3 rounded-full
                             font-medium hover:opacity-90 transition w-1/2"
                >
                  Know More →
                </button>

                <div className="absolute top-0 right-8 h-1 w-24 bg-brand-lightgreen rounded-b-3xl" />
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 h-full w-full
                           bg-brand-green text-white
                           rounded-2xl p-10
                           flex flex-col"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <h3 className="text-2xl font-semibold mb-4">
                  Investment Advisory
                </h3>

                <p className="text-sm leading-relaxed">
                  Our investment advisory services span acquisition strategy,
                  portfolio assessment, asset repositioning, financial evaluation,
                  and exit planning—supported by market research and on-ground
                  execution insight.
                </p>

                <button
                  onClick={() => setActiveCard(null)}
                  className="mt-auto bg-white text-brand-green
                             px-6 py-3 rounded-full
                             font-medium hover:opacity-90 transition w-1/2"
                >
                  ← Back
                </button>
              </div>
            </motion.div>
          </div>

          {/* ================= BROKERAGE ================= */}
          <div className="w-full" style={{ perspective: "1200px" }}>
            <motion.div
              animate={{ rotateY: activeCard === "brokerage" ? 180 : 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d", height: "460px" }}
              className="relative w-full"
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 h-full w-full
                           bg-white rounded-2xl p-10
                           border border-gray-200
                           flex flex-col"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-full h-44 mb-6">
                  <img
                    src="/real-estate-brokerage.png"
                    alt="Brokerage"
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-brand-blue mb-4">
                  Brokerage Transactions
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Transaction advisory for commercial and residential assets,
                  focused on structured execution and informed pricing decisions.
                </p>

                <button
                  onClick={() => setActiveCard("brokerage")}
                  className="mt-auto bg-brand-green text-white
                             px-6 py-3 rounded-full
                             font-medium hover:opacity-90 transition w-1/2"
                >
                  Know More →
                </button>

                <div className="absolute top-0 right-8 h-1 w-24 bg-brand-lightgreen rounded-b-3xl" />
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 h-full w-full
                           bg-brand-green text-white
                           rounded-2xl p-10
                           flex flex-col"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <h3 className="text-2xl font-semibold mb-4">
                  Brokerage Transactions
                </h3>

                <p className="text-sm leading-relaxed">
                  We advise and execute real estate transactions with an emphasis
                  on deal structuring, negotiation support, pricing alignment,
                  and coordinated closures across office, retail, residential,
                  and mixed-use assets.

                </p>

                <button
                  onClick={() => setActiveCard(null)}
                  className="mt-auto bg-white text-brand-green
                             px-6 py-3 rounded-full
                             font-medium hover:opacity-90 transition w-1/2"
                >
                  ← Back
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
