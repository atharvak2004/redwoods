import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const timeline = [
  { year: "2006", color: "#ec4899", x: 50, y: 160, position: "top" },
  { year: "2010", color: "#0284c7", x: 250, y: 140, position: "bottom" },
  { year: "2012", color: "#9333ea", x: 450, y: 90, position: "top" },
  { year: "2015", color: "#f59e0b", x: 650, y: 150, position: "bottom" },
  { year: "2017", color: "#22c55e", x: 850, y: 80, position: "top" },
];

export default function ExactTimeline() {
  const [activeYear, setActiveYear] = useState(null);

  return (
    <section className="w-full py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto relative">

        {/* SVG */}
        <svg viewBox="0 0 1000 200" className="w-full">
          <path
            d="M50,10 C200,1 350,200 450,90 S700,0 850,80"
            stroke="#9ca3af"
            strokeWidth="3"
            fill="transparent"
          />
        </svg>

        {/* NODES */}
        {timeline.map((item, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              left: `${item.x / 10}%`,
              top: `${item.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >

            {/* TOP TEXT */}
            {item.position === "top" && (
              <div className="absolute -top-20 text-center">
                <h4 className="font-semibold text-sm tracking-widest">
                  LOREM IPSUM
                </h4>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            )}

            {/* DOT */}
            <div
              className="w-3 h-3 rounded-full mb-2"
              style={{ backgroundColor: item.color }}
            />

            {/* RING */}
            <div
              onClick={() =>
                setActiveYear(activeYear === item.year ? null : item.year)
              }
              className="w-24 h-24 rounded-full border-[6px] flex items-center justify-center cursor-pointer"
              style={{ borderColor: item.color }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: item.color }}
              >
                {item.year}
              </div>
            </div>

            {/* DOT */}
            <div
              className="w-3 h-3 rounded-full mt-2"
              style={{ backgroundColor: item.color }}
            />

            {/* BOTTOM TEXT */}
            {item.position === "bottom" && (
              <div className="absolute top-28 text-center">
                <h4 className="font-semibold text-sm tracking-widest">
                  LOREM IPSUM
                </h4>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            )}

            {/* CLICK DATA */}
            <AnimatePresence>
              {activeYear === item.year && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-32 bg-white px-4 py-2 rounded-lg shadow-md text-sm"
                >
                  Transaction Data
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>
    </section>
  );
}