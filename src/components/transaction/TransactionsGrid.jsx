import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowDropDown } from "react-icons/md";

function TransactionsGrid() {
  const [activeYear, setActiveYear] = useState(null);
  const layoutTransition = {
    stiffness: 120,

  };

  const transactions = [
    {
      year: 2016,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText:
        "Transacted the acquisition of land in the Central Business District",
      client: "Embassy Group",
      clientLogo: "/transaction_logos/Embassy-group.png",
      metricLabel: "Value",
      metricValue: "₹350 Million",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2016,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText:
        "Transacted the lease of office space for Musa Sait Wakf & BMR Advisors",
      client: "BMR Advisors",
      clientLogo: "/transaction_logos/BMR-Advisors.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "23,000 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2015,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText:
        "Transacted the lease of office space to set up India Head Quarters",
      client: "Janalakshmi",
      clientLogo: "/transaction_logos/Janalakshmi.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "150,000 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2015,
      company: "Redwoods Capital Management",
      transactionText:
        "Structured the joint development and profit share transaction",
      client: "Godrej Properties",
      clientLogo: "/transaction_logos/Godrej-Properties.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "1.1 Million SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2015,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText:
        "Transacted the acquisition of land in the Central Business District",
      client: "Embassy Group",
      clientLogo: "/transaction_logos/Embassy-group.png",
      metricLabel: "Value",
      metricValue: "₹400 Million",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2015,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText:
        "Transacted the lease of warehouse spaces in Pune & Mumbai",
      client: "Iron Mountain",
      clientLogo: "/transaction_logos/Iron-Mountain.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "0.22 Million SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2015,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText:
        "Transacted the lease of office space to set up South India Head Quarters",
      client: "Jubilant Motorworks",
      clientLogo: "/transaction_logos/Jubilant-Motorworks.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "8,285 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2015,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText: "Transacted the lease of retail restaurant",
      client: "Havmor",
      clientLogo: "/transaction_logos/Hong-Kong.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "6,651 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2014,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText: "Helped acquire controlling interest in",
      client: "Windchimes & Embassy Blackstone",
      clientLogo: "/transaction_logos/c3.png",
      metricLabel: "Value / Total Saleable Area",
      metricValue: "₹19,510 Million / 106 Acres",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2014,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText:
        "Transacted the lease of office space to set up branch offices",
      client: "Janalakshmi",
      clientLogo: "/transaction_logos/Janalakshmi.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "28,000 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2014,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText: "Transacted the lease of retail space in Bangalore",
      client: "Apple",
      clientLogo: "/transaction_logos/Apple.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "10,000 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2013,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText: "Transacted the lease of SEZ space",
      client: "Fidelity",
      clientLogo: "/transaction_logos/Fidelity.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "1,75,000 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2011,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText: "Raised investor funding and structured finance",
      client: "Jain Heights",
      clientLogo: "/transaction_logos/Jain-Heights.png",
      metricLabel: "Value / Total Saleable Area",
      metricValue: "₹150 Million / 6,50,000 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2011,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText: "Transacted the lease of office space in Gurgaon",
      client: "COLT",
      clientLogo: "/transaction_logos/COLT.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "1,00,000 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2011,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText: "Raised investor funding and structured finance",
      client: "JDP Prime 1002",
      clientLogo: "/transaction_logos/JDP.png",
      metricLabel: "Value / Total Saleable Area",
      metricValue: "₹250 Million / 56,000 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2008,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText: "Transacted the lease of office space in Bangalore",
      client: "COLT",
      clientLogo: "/transaction_logos/COLT.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "36,000 + 36,000 SFT",
      role: "Sole Transaction Advisor",
    },
    {
      year: 2006,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText: "Transacted the lease of SEZ space",
      client: "Fidelity",
      clientLogo: "/transaction_logos/Fidelity.png",
      metricLabel: "Total Built-Up Area",
      metricValue: "2,75,000 SFT",
      role: "Sole Transaction Advisor",
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

        {years.map((year) => {
          const isOpen = activeYear === year;

          return (
            <motion.div
              key={year}
              className="mb-8 border border-brand-lightgreen rounded-xl bg-white overflow-hidden"
            >
              <button
                onClick={() => setActiveYear(isOpen ? null : year)}
                className="w-full flex items-center justify-between
                   px-8 py-6"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-brand-lightgreen">
                  {year}
                </h2>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-brand-lightgreen"
                >
                  <MdArrowDropDown size={30} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div


                    className="overflow-hidden px-8 pb-10"
                  >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                      {groupedByYear[year].map((item, index) => (
                        <motion.div
                          key={index}

                        >
                          {/* CARD */}
                          <div className="h-full w-full border border-brand-lightgreen rounded-xl p-8 flex flex-col text-center bg-white">

                            <p className="text-xs tracking-widest uppercase text-gray-600 leading-relaxed">
                              <span className="font-semibold text-gray-800">
                                {item.company}
                              </span>
                              <br />
                              {item.transactionText}
                            </p>

                            {item.clientLogo && (
                              <div className="my-6 flex justify-center">
                                <img
                                  src={item.clientLogo}
                                  alt={item.client}
                                  className="h-28 object-contain"
                                />
                              </div>
                            )}

                            {item.metricValue && (
                              <div className="mt-auto">
                                <p className="text-xs tracking-widest uppercase text-gray-500">
                                  {item.metricLabel}
                                </p>
                                <p className="text-xl font-semibold text-brand-blue mt-1">
                                  {item.metricValue}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Year: {item.year}
                                </p>
                              </div>
                            )}

                            <p className="mt-6 text-[11px] uppercase tracking-wide text-gray-600">
                              {item.company} acted as the
                              <br />
                              <span className="font-semibold text-gray-800">
                                {item.role}
                              </span>
                            </p>

                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default TransactionsGrid;
