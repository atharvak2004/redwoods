import { motion } from "framer-motion";

function ProjectLeft({ image, title, subtitle, title2  }) {
  return (
    <section id="theresidency" className="py-24 bg-white">
      <div id="ghaziabad-mi" className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-brand-green">
            {title2}
          </span>

          <h3 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight mt-4">
            {title}
          </h3>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-md">
            {subtitle}
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default ProjectLeft;
