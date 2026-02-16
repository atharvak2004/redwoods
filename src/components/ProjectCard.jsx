import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({
  image,
  title,
  shortDescription,
  fullDescription,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          minHeight: "420px", // 🔥 CRITICAL FIX
        }}
        className="relative w-full"
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-white rounded-2xl overflow-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-brand-blue mb-2">
              {title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {shortDescription}
            </p>

            <button
              onClick={() => setFlipped(true)}
              className="mt-auto bg-brand-green text-white
                         px-5 py-2 rounded-full
                         text-sm font-medium
                         hover:opacity-90 transition w-1/2"
            >
              Know More →
            </button>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-brand-green text-white rounded-2xl p-6 flex flex-col"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h3 className="text-lg font-semibold mb-4">
            {title}
          </h3>

          <p className="text-sm leading-relaxed">
            {fullDescription}
          </p>

          <button
            onClick={() => setFlipped(false)}
            className="mt-auto bg-white text-brand-green
                       px-4 py-2 rounded-full
                       text-sm font-medium
                       hover:opacity-90 transition w-1/2"
          >
            ← Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
