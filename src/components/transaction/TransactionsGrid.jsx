import { motion } from "framer-motion";

function TransactionsGrid() {
  const transactions = [
    {
      image: "https://via.placeholder.com/300x150",
      date: "March 2025",
      title: "Sale of SL Finance",
      description:
        "Advised on the strategic sale of SL Finance, delivering a structured transaction aligned with long-term value creation.",
    },
    {
      image: "https://via.placeholder.com/300x150",
      date: "October 2024",
      title: "Land Sale – Ghaziabad",
      description:
        "Executed advisory services for a prime land transaction in Ghaziabad, ensuring transparency and optimal market positioning.",
    },
    {
      image: "https://via.placeholder.com/300x150",
      date: "2023",
      title: "Land Sale – Civil Lines, Ghaziabad",
      description:
        "Provided end-to-end advisory for a landmark land sale in Civil Lines, Ghaziabad, with disciplined execution.",
    },
    {
      image: "https://via.placeholder.com/300x150",
      date: "2022",
      title: "Strategic Advisory Mandate",
      description:
        "Supported a strategic advisory mandate involving asset restructuring and transaction planning.",
    },
    {
      image: "https://via.placeholder.com/300x150",
      date: "2021",
      title: "Investment Advisory Engagement",
      description:
        "Advised investors on asset acquisition strategy with a focus on risk management and value growth.",
    },
    {
      image: "https://via.placeholder.com/300x150",
      date: "2020",
      title: "Development Advisory Project",
      description:
        "Delivered development advisory services across planning, structuring, and execution stages.",
    },
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-sm tracking-widest uppercase text-brand-lightgreen">
            Transactions
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Snapshot of Success <br />
            <span className="text-[#3e467c]">
              Across Key Mandates
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            A snapshot of key transactions across advisory and investment mandates,
            showcasing disciplined execution.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {transactions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl overflow-hidden
                         border border-gray-200
                         hover:shadow-xl transition"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Image */}
              <div className="h-[220px] bg-gray-50 flex items-center justify-center p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="inline-block text-sm uppercase tracking-wide text-gray-500">
                  {item.date}
                </span>

                <div className="mt-2 h-[2px] w-10 bg-brand-green rounded-full" />

                <h3 className="mt-4 text-lg font-semibold text-brand-blue">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default TransactionsGrid;
