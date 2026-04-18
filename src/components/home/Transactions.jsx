import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Transactions() {
  const transactions = [
    {
      date: "March 2025",
      title: "Sale of SL Finance",
      description:
        "Successfully advised and executed the sale of SL Finance, delivering strategic value through structured negotiations and seamless closure.",
      image: "tr-2.jpeg",
    },
    {
      date: "October 2024",
      title: "Land Sale – Ghaziabad",
      description:
        "Advised on the sale of a prime land parcel in Ghaziabad, facilitating an efficient transaction aligned with market valuations.",
      image: "Ghaziabad.jpeg",
    },
    {
      date: "2023",
      title: "Land Sale – Civil Lines, Ghaziabad",
      description:
        "Handled the end-to-end advisory for a landmark land transaction in Civil Lines, Ghaziabad, ensuring transparency and optimal outcomes.",
      image: "tr-3.jpeg",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-sm tracking-widest text-brand-lightgreen uppercase">
            Transactions
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Select Transactions <br />
            <span className="">
              Across Our Business Verticals
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            A snapshot of key transactions executed across real estate and
            financial advisory, reflecting our expertise, credibility, and
            execution excellence.
          </p>
        </motion.div>

        {/* ================= TRANSACTIONS LIST ================= */}
        <div className="space-y-24">
          {transactions.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* Image */}
                <motion.div
                  className="h-[320px] rounded-3xl overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? 40 : -40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className="text-sm uppercase tracking-wide text-brand-green">
                    {item.date}
                  </span>

                  <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-brand-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link to="/transaction">
            <button
              className="
                inline-flex items-center gap-3
                bg-brand-green text-white
                px-10 py-4 rounded-full
                font-medium
                hover:opacity-90 transition
              "
            >
              View More Transactions →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
