import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaUserTie, FaBuilding, FaChartLine, FaHandshake, FaLandmark } from "react-icons/fa";
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

const yearIcons = {
  2025: <FaChartLine />,
  2023: <FaHandshake />,
  2016: <FaBuilding />,
  2014: <FaLandmark />,
  2006: <FaUserTie />,
};

const getYearDescription = (year) => {
  const items = transactions.filter(t => t.year === year);

  if (!items.length) return "No key transactions";

  // Take top 2 highlights
  const highlights = items.slice(0, 2);

  return highlights
    .map(item => {
      if (item.metricValue) return item.metricValue;
      return item.transactionText?.slice(0, 25);
    })
    .join(" • ");
};

const uniqueYears = [...new Set(transactions.map(t => t.year))].sort((a, b) => a - b);

const colors = ["#7c3aed", "#0284c7", "#65a30d", "#f59e0b", "#e11d48"];

export default function MilestoneTimeline() {
  const [selectedYear, setSelectedYear] = useState(null);

  const filteredTransactions = transactions.filter(
    t => t.year === selectedYear
  );

  return (
    <>
      <div className="w-full py-24 bg-gray-100 flex flex-col items-center">
        <div className="relative w-full max-w-8xl pt-40 h-[480px]">
          <div className="absolute bottom-0 left-0 w-full h-4 transform origin-bottom-left bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 via-yellow-400 to-red-500 rounded-lg shadow-lg"></div>
          <div className="w-full overflow-x-auto px-8">
            <div className="flex gap-16 min-w-max items-end pt-[170px]">
              {uniqueYears.map((year, i) => {
                const color = colors[i % colors.length];
                const height = 120;

                return (
                  <motion.div
                    key={year}
                    className="relative flex flex-col items-center cursor-pointer min-w-[140px]"
                    onClick={() => setSelectedYear(year)}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >

                    {/* PIN LINE */}
                    <div
                      className="w-[3px]"
                      style={{ height, backgroundColor: color }}
                    />

                    {/* DOT */}
                    <div
                      className="w-4 h-4 rounded-full border-4 border-white shadow-md"
                      style={{ backgroundColor: color }}
                    />

                    {/* ================= YEAR CARD ================= */}

                    <div className="absolute -top-40 w-44 text-white text-center">

                      <div className="relative group">

                        {/* GLOW BACKDROP */}
                        <div
                          className="absolute inset-0 blur-xl opacity-30 group-hover:opacity-50 transition duration-500"
                          style={{ background: `linear-gradient(135deg, ${color}, #ffffff20)` }}
                        />

                        {/* MAIN CARD */}
                        <div
                          className="relative px-5 py-5 h-[200px] flex flex-col justify-between rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20 transition-all duration-300 group-hover:scale-105"
                          style={{
                            background: `linear-gradient(135deg, ${color}, #00000020)`,
                          }}
                        >
                          <div className="flex justify-center mb-3">
                            <div className="relative">

                              {/* ICON GLOW */}
                              <div
                                className="absolute inset-0 rounded-full blur-md opacity-50"
                                style={{ backgroundColor: color }}
                              />

                              {/* ICON */}
                              <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg text-xl text-gray-700 border-4 border-white">
                                {yearIcons[year] || <FaUserTie />}
                              </div>

                            </div>
                          </div>

                          {/* YEAR */}
                          <h3 className="text-3xl font-extrabold tracking-wider text-white drop-shadow-md">
                            {year}
                          </h3>

                          {/* DIVIDER */}
                          <div className="w-10 h-[2px] bg-white/60 my-2 mx-auto rounded-full" />

                          {/* DESCRIPTION */}
                          <p className="text-xs text-white/80 leading-relaxed px-2 line-clamp-2  min-h-[32px]">
                            {getYearDescription(year)}
                          </p>

                        </div>

                        {/* TRIANGLE POINTER (DIRECTLY BELOW CARD ✅) */}
                        <div
                          className="w-0 h-0 mx-auto"
                          style={{
                            borderLeft: "20px solid transparent",
                            borderRight: "20px solid transparent",
                            borderTop: `24px solid ${color}`,
                            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.2))",
                          }}
                        />

                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}

      <AnimatePresence>
        {selectedYear && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white/90 backdrop-blur-xl w-[95%] max-w-5xl max-h-[85vh] overflow-y-auto rounded-2xl p-8 relative shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedYear(null)}
                className="absolute top-4 right-5 text-xl text-gray-500 hover:text-black"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="text-3xl font-semibold text-brand-blue mb-8 text-center">
                Transactions - {selectedYear}
              </h2>

              <div className="space-y-10">
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative flex flex-col md:flex-row gap-4 border border-brand-lightgreen/60 rounded-xl p-6 bg-white hover:shadow-xl hover:-translate-y-[3px] transition-all duration-300"
                    >
                      {/* LOGO */}
                      {item.clientLogo && (
                        <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 bg-gray-50 rounded-lg border p-3">
                          <img
                            src={item.clientLogo}
                            alt={item.client}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}

                      {/* CONTENT */}
                      <div>
                        <h4 className="text-sm font-semibold text-brand-blue">
                          {item.company}
                        </h4>

                        <p className="text-sm text-gray-600 mt-1">
                          {item.transactionText}
                        </p>

                        <div className="mt-3 text-xs">
                          <span className="text-gray-500 uppercase">
                            {item.metricLabel}
                          </span>

                          <span className="ml-2 px-2 py-1 rounded-md bg-brand-lightgreen/10 text-brand-lightgreen font-semibold">
                            {item.metricValue}
                          </span>
                        </div>

                        <p className="text-xs text-gray-500 mt-2">
                          Role:{" "}
                          <span className="font-medium text-gray-700">
                            {item.role}
                          </span>
                        </p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No transactions available
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}