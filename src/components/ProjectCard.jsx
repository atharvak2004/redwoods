import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({
  image,
  title,
  description,
  url,
}) {
  return (
    <div className="flex flex-col h-full">

      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover
                     transition-transform duration-700
                     group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">

        <h3 className="text-lg font-semibold text-brand-blue mb-2
                       group-hover:text-brand-lightgreen transition">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Button */}
        <Link to={url} className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2
                       bg-brand-green text-white
                       px-5 py-2 rounded-full
                       text-sm font-medium
                       hover:opacity-90 transition"
          >
            Know More →
          </motion.button>
        </Link>

      </div>
    </div>
  );
}
