import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ================== TRANSACTIONS ================== */

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

/* ================== YEAR TITLES ================== */

const yearTitles = {
  2025: "Strategic Growth",
  2023: "Advisory Expansion",
  2016: "Major Acquisitions",
  2015: "Rapid Scaling",
  2014: "Key Partnerships",
  2013: "Market Entry",
  2011: "Early Investments",
  2008: "Foundation Deals",
  2006: "Origin",
};

/* ================== YEARS ================== */

const uniqueYears = [...new Set(transactions.map(t => t.year))].sort((a, b) => a - b);

/* ================== CONSTANTS ================== */

const WIDTH = 1800;
const HEIGHT = 420;
const CENTER_Y = HEIGHT / 2;
const SPACING = WIDTH / (uniqueYears.length + 1);
const R = 36;
const LINE_OFFSET = -50;

/* ================== POINTS ================== */

const points = uniqueYears.map((year, i) => ({
  x: SPACING * (i + 1),
  y: i % 2 === 0 ? CENTER_Y - 70 : CENTER_Y + 70,
}));

/* ================== PATH ================== */

function buildWavePath() {
  let d = "";

  for (let i = 0; i < points.length; i++) {
    const p = points[i];

    const isTop = p.y < CENTER_Y;

    const adjustedY = isTop
      ? p.y + LINE_OFFSET
      : p.y - LINE_OFFSET;

    if (i === 0) {
      d += `M ${p.x} ${adjustedY}`;
    } else {
      const prev = points[i - 1];

      const prevIsTop = prev.y < CENTER_Y;
      const prevAdjustedY = prevIsTop
        ? prev.y + LINE_OFFSET
        : prev.y - LINE_OFFSET;

      const cpX = (prev.x + p.x) / 2;

      d += ` C ${cpX} ${prevAdjustedY}, ${cpX} ${adjustedY}, ${p.x} ${adjustedY}`;
    }
  }

  return d;
}

/* ================== COMPONENT ================== */

export default function HorizontalTimeline() {
  const [selectedYear, setSelectedYear] = useState(null);
  const path = buildWavePath();

  const filteredTransactions = transactions.filter(
    (t) => t.year === selectedYear
  );

  return (
    <>
      {/* ================= TIMELINE ================= */}
      <div className="w-full flex justify-center py-16 bg-gradient-to-b from-gray-50 to-white">
        <svg width="100%" height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>

          {/* Gradient */}
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a78bfa">
                <animate attributeName="offset" values="0;1" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>

          {/* Wave */}
          <motion.path
            d={path}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Nodes */}
          {points.map((p, i) => {
            const year = uniqueYears[i];

            return (
              <motion.g
                key={year}
                onClick={() => setSelectedYear(year)}
                className="cursor-pointer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.2 }}
              >
                {/* Glow */}
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r={R + 6}
                  fill="#3b82f6"
                  opacity={0.08}
                />

                {/* Outer Circle */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={R}
                  fill="white"
                  stroke="#3b82f6"
                  strokeWidth="3"
                />

                {/* Inner Ring */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={R - 12}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  opacity="0.5"
                />

                {/* Year */}
                <text
                  x={p.x}
                  y={p.y - 4}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="#2563eb"
                >
                  {year}
                </text>

                {/* ================= CONNECTOR LINE ================= */}

                {(() => {
                  const isTop = p.y < CENTER_Y;

                  const lineLength = 80;

                  const x2 = p.x;
                  const y2 = isTop ? p.y + lineLength : p.y - lineLength;

                  return (
                    <>
                      {/* Line */}
                      <motion.line
                        x1={p.x}
                        y1={p.y + (isTop ? R : -R)}
                        x2={x2}
                        y2={y2}
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: i * 0.2 }}
                      />

                      {/* Title AFTER LINE */}
                      <motion.text
                        x={x2}
                        y={isTop ? y2 + 16 : y2 - 10}
                        textAnchor="middle"
                        fontSize="12"
                        fontWeight="600"
                        fill="#374151"
                        initial={{ opacity: 0, y: isTop ? 10 : -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.25 }}
                      >
                        {yearTitles[year]}
                      </motion.text>
                    </>
                  );
                })()}
              </motion.g>
            );
          })}
        </svg>
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