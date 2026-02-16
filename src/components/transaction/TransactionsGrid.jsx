import { motion } from "framer-motion";

function TransactionsGrid() {
  const transactions = [
    {
      year: 2025,
      image: "/essel-grp.png",
      date: "March 2025",
      title: "Sale of Essel Finance",
      description:
        "Advised on the strategic sale of SL Finance, delivering a structured transaction aligned with long-term value creation.",
    },
    {
      year: 2025,
      image: "/dummy-company.png",
      date: "October 2025",
      title: "Land Sale – Ghaziabad",
      description:
        "Executed advisory services for a prime land transaction in Ghaziabad, ensuring transparency and optimal market positioning.",
    },
    {
      year: 2023,
      image: "/tripathi-grp.png",
      date: "2023",
      title: "Land Sale – Civil Lines, Ghaziabad",
      description:
        "Provided end-to-end advisory for a landmark land sale in Civil Lines, Ghaziabad, with disciplined execution.",
    },
    {
      year: 2023,
      image: "/dummy-company.png",
      date: "2023",
      title: "Strategic Advisory Mandate",
      description:
        "Supported a strategic advisory mandate involving asset restructuring and transaction planning.",
    },
    {
      year: 2023,
      image: "/dummy-company.png",
      date: "2023",
      title: "Investment Advisory Engagement",
      description:
        "Advised investors on asset acquisition strategy with a focus on risk management and value growth.",
    },
    {
      year: 2025,
      image: "/dummy-company.png",
      date: "2025",
      title: "Development Advisory Project",
      description:
        "Delivered development advisory services across planning, structuring, and execution stages.",
    },
  ];

  const groupedByYear = transactions.reduce((acc, txn) => {
    acc[txn.year] = acc[txn.year] || [];
    acc[txn.year].push(txn);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          className="max-w-3xl mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-sm tracking-widest uppercase text-brand-lightgreen">
            Transactions Portfolio
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            Snapshot of Success <br />
            <span className="text-[#3e467c]">Across Key Mandates</span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            An overview of selected transactions across advisory and investment
            mandates, reflecting structured analysis, market insight, and
            coordinated transaction support.

          </p>
        </motion.div>

        {/* ================= YEAR-WISE SECTIONS ================= */}
        {years.map((year) => (
          <div key={year} className="mb-28">

            {/* Year Heading */}
            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-semibold text-brand-lightgreen"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {year}
              </motion.h2>

              <motion.div
                className="mt-3 h-[3px] bg-brand-lightgreen rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "3.5rem" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              />
            </motion.div>


            {/* Cards Grid */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              {groupedByYear[year].map((item, index) => (
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
                  <div className="h-[220px] flex items-center justify-center p-6 border-b border-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <span className="text-sm uppercase tracking-wide text-gray-500">
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
        ))}

      </div>
    </section>
  );
}

export default TransactionsGrid;
