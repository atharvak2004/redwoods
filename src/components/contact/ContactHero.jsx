import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function ContactHero() {
  return (
    <section className="relative h-[90vh] min-h-[520px] flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/contactbg.jpg"
          alt="Contact Redwoods"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm text-white/80"
          >
            <NavLink to="/" className="hover:text-brand-green transition">
              Home
            </NavLink>
            <span className="mx-2">/</span>
            <span className="text-brand-lightgreen">Contact</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-white leading-tight">
              Let’s Start a <br />
              <span className="text-white/80">
                Meaningful Conversation
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl"
          >
            Whether you’re exploring an opportunity, seeking strategic advisory,
            or planning a long-term partnership, our team is ready to engage
            with clarity, discretion, and purpose.
          </motion.p>


        </div>
      </div>
    </section>
  );
}
