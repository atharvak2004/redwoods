
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        clientLogo: "Redwoods_logo-removebg.png",
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
        clientLogo: "Redwoods_logo-removebg.png",
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
        clientLogo: "Redwoods_logo-removebg.png",
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
        clientLogo: "Redwoods_logo-removebg.png",
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


/* ================== YEARS ================== */

const uniqueYears = [...new Set(transactions.map((t) => t.year))].sort(
    (a, b) => a - b
);

const colors = ["pink", "blue", "purple", "orange", "green"];

const timelineData = uniqueYears.map((year, index) => ({
    year,
    color: colors[index % colors.length],
}));

const hexColors = {
    pink: "#ec4899",
    blue: "#0ea5e9",
    purple: "#9333ea",
    orange: "#f97316",
    green: "#22c55e",
};

/* ================== CONSTANTS ================== */

const WAVE_AMP = 70;
const CIRCLE_R = 44;
const SVG_HEIGHT = 480;
const CENTER_Y = SVG_HEIGHT / 2;

/* ================== COMPONENT ================== */

const WaveTimeline = () => {
    const containerRef = useRef(null);
    const [selectedYear, setSelectedYear] = useState(null);

    const getNodeX = (i) => {
        const width = 1400;
        const padding = 80;
        const usableWidth = width - padding * 2;
        const gap =
            timelineData.length > 1
                ? usableWidth / (timelineData.length - 1)
                : 0;
        return padding + i * gap;
    };

    const getNodeY = (i) =>
        CENTER_Y + (i % 2 === 0 ? -WAVE_AMP : WAVE_AMP);

    const filteredTransactions = transactions.filter(
        (txn) => txn.year === selectedYear
    );

    return (
        <>
            {/* ================= SECTION ================= */}
            <div
                ref={containerRef}
                className="w-full py-16 md:py-24 px-4 md:px-8"
            >
                {/* HEADER */}
                <motion.div
                    className="max-w-7xl mx-auto text-center md:text-left px-2 md:px-0"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Top Label */}
                    <span className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] text-green-500 mb-4 md:mb-5">
                        Transactions Portfolio
                    </span>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl xl:text-5xl font-semibold text-brand-blue leading-[1.2]">
                        Snapshot of Success <br />
                       <span className="">Across Key Mandates</span>
                    </h2>

                    {/* Description */}
                    <p className="mt-6 md:mt-7 text-sm md:text-lg text-gray-600 leading-relaxed max-w-xl md:max-w-2xl mx-auto md:mx-0">
                        An overview of selected transactions across advisory and investment
                        mandates, reflecting structured execution, market insight, and
                        strategic expertise.
                    </p>

                    {/* Subtle Divider (premium touch) */}
                    {/* <div className="mt-8 md:mt-10 w-16 h-[2px] bg-gradient-to-r from-green-400 to-transparent mx-auto md:mx-0 rounded-full" /> */}
                </motion.div>

                <div className="relative mx-auto w-full mt-12 md:mt-16">
                    <svg
                        className="hidden md:block"
                        width="100%"
                        height={SVG_HEIGHT}
                        viewBox="0 0 1400 480"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Lines */}
                        {timelineData.map((item, i) => {
                            if (i >= timelineData.length - 1) return null;

                            return (
                                <motion.path
                                    key={i}
                                    d={`M ${getNodeX(i)} ${getNodeY(i)}
                  C ${(getNodeX(i) + getNodeX(i + 1)) / 2} ${getNodeY(i)},
                  ${(getNodeX(i) + getNodeX(i + 1)) / 2} ${getNodeY(i + 1)},
                  ${getNodeX(i + 1)} ${getNodeY(i + 1)}`}
                                    stroke={hexColors[item.color]}
                                    strokeWidth="4"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: i * 0.2 }}
                                />
                            );
                        })}

                        {/* Nodes */}
                        {timelineData.map((item, i) => {
                            const x = getNodeX(i);
                            const y = getNodeY(i);
                            const hex = hexColors[item.color];

                            return (
                                <motion.g
                                    key={item.year}
                                    onClick={() => setSelectedYear(item.year)}
                                    className="cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <motion.circle
                                        cx={x}
                                        cy={y}
                                        r={CIRCLE_R}
                                        fill="white"
                                        stroke={hex}
                                        strokeWidth="4"
                                        whileHover={{
                                            filter: `drop-shadow(0px 0px 10px ${hex})`,
                                        }}
                                    />

                                    <text
                                        x={x}
                                        y={y + 6}
                                        textAnchor="middle"
                                        fontSize="16"
                                        fill={hex}
                                    >
                                        {item.year}
                                    </text>
                                </motion.g>
                            );
                        })}
                    </svg>
                </div>

                {/* ================= MOBILE TIMELINE ================= */}
                <div className="block md:hidden mt-16 px-4">
                    <div className="relative max-w-md mx-auto">

                        {/* Center Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-x-1/2" />

                        {timelineData.map((item, i) => {
                            const count = transactions.filter(
                                (t) => t.year === item.year
                            ).length;

                            const hex = hexColors[item.color];
                            const isLeft = i % 2 === 0;

                            return (
                                <div
                                    key={item.year}
                                    onClick={() => setSelectedYear(item.year)}
                                    className="relative flex items-center justify-between mb-20"
                                >
                                    {/* LEFT SIDE */}
                                    <div className={`w-1/2 flex ${isLeft ? "justify-end pr-6" : "justify-start pl-6"}`}>
                                        {isLeft && (
                                            <div className="flex flex-col items-center group">
                                                {/* Circle */}
                                                <div
                                                    className="relative w-20 h-20 rounded-full bg-white border-4 flex items-center justify-center text-base font-semibold transition-all duration-300"
                                                    style={{ borderColor: hex, color: hex }}
                                                >
                                                    {item.year}

                                                    {/* Glow */}
                                                    <div
                                                        className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition"
                                                        style={{ backgroundColor: hex }}
                                                    />
                                                </div>

                                                {/* Badge */}
                                                {count > 0 && (
                                                    <div
                                                        className="mt-3 text-xs px-3 py-1 rounded-full font-medium"
                                                        style={{
                                                            backgroundColor: `${hex}15`,
                                                            color: hex,
                                                        }}
                                                    >
                                                        {count} Transactions
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* CENTER DOT */}
                                    <div className="relative z-10 w-4 h-4 bg-white border-2 rounded-full border-gray-400" />

                                    {/* RIGHT SIDE */}
                                    <div className={`w-1/2 flex ${!isLeft ? "justify-start pl-6" : "justify-end pr-6"}`}>
                                        {!isLeft && (
                                            <div className="flex flex-col items-center group">
                                                {/* Circle */}
                                                <div
                                                    className="relative w-20 h-20 rounded-full bg-white border-4 flex items-center justify-center text-base font-semibold transition-all duration-300"
                                                    style={{ borderColor: hex, color: hex }}
                                                >
                                                    {item.year}

                                                    {/* Glow */}
                                                    <div
                                                        className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition"
                                                        style={{ backgroundColor: hex }}
                                                    />
                                                </div>

                                                {/* Badge */}
                                                {count > 0 && (
                                                    <div
                                                        className="mt-3 text-xs px-3 py-1 rounded-full font-medium"
                                                        style={{
                                                            backgroundColor: `${hex}15`,
                                                            color: hex,
                                                        }}
                                                    >
                                                        {count} Transactions
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
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
                            className="bg-white w-[95%] max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 md:p-8 shadow-2xl relative"
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            {/* Close */}
                            <button
                                onClick={() => setSelectedYear(null)}
                                className="absolute top-4 right-5 text-xl text-gray-500 hover:text-black"
                            >
                                ✕
                            </button>

                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                                Transactions - {selectedYear}
                            </h2>

                            {/* Cards */}
                            <div className="space-y-6">
                                {filteredTransactions.length > 0 ? (
                                    filteredTransactions.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col md:flex-row gap-5 md:gap-6 border border-gray-200 rounded-2xl p-5 md:p-6 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                        >
                                            {/* Logo */}
                                            {item.clientLogo && (
                                                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-xl border p-3">
                                                    <img
                                                        src={item.clientLogo}
                                                        alt={item.client}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-semibold text-gray-900">
                                                    {item.company}
                                                </h4>

                                                <p className="text-sm text-gray-600">
                                                    {item.transactionText}
                                                </p>

                                                <div className="text-xs">
                                                    <span className="text-gray-500 uppercase">
                                                        {item.metricLabel}
                                                    </span>

                                                    <span className="ml-2 px-2 py-1 rounded-md bg-green-100 text-green-600 font-semibold">
                                                        {item.metricValue}
                                                    </span>
                                                </div>

                                                <p className="text-xs text-gray-500">
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
};

export default WaveTimeline;
