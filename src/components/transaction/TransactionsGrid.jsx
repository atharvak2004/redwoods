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
      year: 2025,
      company: "Redwoods Capital Management",
      transactionText: "Advised on the strategic sale of Essel Finance",
      client: "Essel Finance",
      clientLogo: "/essel-grp.png",
      metricLabel: "Transaction Type",
      metricValue: "Strategic Sale",
      role: "Transaction Advisor",
    },
    {
      year: 2025,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText:
        "Transacted the sale of a land parcel in Ghaziabad",
      client: "Confidential Client",
      clientLogo: "/dummy-company.png",
      metricLabel: "Asset Type",
      metricValue: "Land Transaction",
      role: "Transaction Advisor",
    },
    {
      year: 2023,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText:
        "Advised on the sale of land located in Civil Lines, Ghaziabad",
      client: "Tripathi Group",
      clientLogo: "/tripathi-grp.png",
      metricLabel: "Location",
      metricValue: "Civil Lines, Ghaziabad",
      role: "Transaction Advisor",
    },
    {
      year: 2023,
      company: "Redwoods Capital Management",
      transactionText:
        "Provided strategic advisory for asset restructuring and transaction planning",
      client: "Confidential Client",
      clientLogo: "/dummy-company.png",
      metricLabel: "Mandate",
      metricValue: "Strategic Advisory",
      role: "Financial Advisor",
    },
    {
      year: 2023,
      company: "Redwoods Capital Management",
      transactionText:
        "Advised investors on acquisition strategy and portfolio positioning",
      client: "Private Investors",
      clientLogo: "/dummy-company.png",
      metricLabel: "Service",
      metricValue: "Investment Advisory",
      role: "Investment Advisor",
    },
    {
      year: 2025,
      company: "Redwoods Projects Pvt. Ltd.",
      transactionText:
        "Provided development advisory across project planning and execution",
      client: "Confidential Client",
      clientLogo: "/dummy-company.png",
      metricLabel: "Service",
      metricValue: "Development Advisory",
      role: "Development Advisor",
    },
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

        {years.map((year) => (
          <div key={year} className="mb-24">

            <h3 className="text-3xl font-semibold text-brand-lightgreen mb-12 text-center">
              {year}
            </h3>

            <div className="relative">

              {/* Timeline line */}
              <div className="absolute md:left-1/2 left-4 top-0 h-full w-[2px] bg-brand-lightgreen/30 md:-translate-x-1/2"></div>

              <div className="space-y-16">

                {groupedByYear[year].map((item, index) => {

                  const isLeft = index % 2 === 0;

                  return (
                    <div key={index} className="relative flex items-center w-full">

                      {/* Timeline Dot */}
                      <span className="absolute md:left-1/2 left-4 w-4 h-4 bg-brand-lightgreen rounded-full md:-translate-x-1/2 -translate-x-1/2 z-20"></span>

                      {/* CARD WRAPPER */}
                      <div
                        className={`w-full md:w-1/2 pl-10 md:pl-0 ${isLeft ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                          }`}
                      >

                        <div className="relative">

                          {/* Visual circle */}
                          <div
                            className={`absolute -top-10 w-48 h-48 border border-brand-lightgreen/20 rounded-full opacity-30 ${isLeft ? "-left-10" : "-right-10"
                              }`}
                          ></div>

                          {/* CARD */}
                          <div className="relative flex flex-col md:flex-row items-start gap-4 border border-brand-lightgreen/60 rounded-xl p-6 bg-white hover:shadow-lg hover:-translate-y-[2px] transition-all duration-300">

                            {/* LOGO */}
                            {item.clientLogo && (
                              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-gray-50 rounded-lg border border-gray-100 p-3">
                                <img
                                  src={item.clientLogo}
                                  alt={item.client}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            )}

                            {/* CONTENT */}
                            <div className="flex flex-col">

                              <h4 className="text-sm font-semibold text-brand-blue leading-tight">
                                {item.company}
                              </h4>

                              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                {item.transactionText}
                              </p>

                              {item.metricValue && (
                                <div className="mt-3 inline-flex items-center gap-2 text-xs flex-wrap">

                                  <span className="text-gray-500 uppercase tracking-wide">
                                    {item.metricLabel}
                                  </span>

                                  <span className="px-2 py-1 rounded-md bg-brand-lightgreen/10 text-brand-lightgreen font-semibold">
                                    {item.metricValue}
                                  </span>

                                </div>
                              )}

                              <p className="text-xs text-gray-500 mt-2">
                                Role:{" "}
                                <span className="font-medium text-gray-700">
                                  {item.role}
                                </span>
                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default TransactionsGrid;
