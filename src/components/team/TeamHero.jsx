import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function TeamHero() {
  return (
    <section className="relative min-h-screen flex items-center  md:pt-0">
      <div className="absolute inset-0">
        <img
          src="/teambg.jpg"
          alt="Our Team"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="mb-6 text-sm text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <NavLink to="/" className="hover:text-brand-green transition">
              Home
            </NavLink>
            <span className="mx-2">/</span>
            <span className="text-brand-lightgreen">Our Team</span>
          </motion.div>
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl text-white leading-tight font-bebas"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Our Team <br />
              <span className="text-white/80">
                Leadership, Experience & Strength
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-md md:text-lg text-white/80 leading-relaxed max-w-3xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Experienced professionals building the future, brick by brick —
              combining strategic insight, technical expertise, and disciplined
              execution across every project.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {[
              { value: "20+", label: "Years of Experience" },
              { value: "1,000+", label: "Cumulative Team Experience" },
              { value: "200+", label: "Engineers & Workforce" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="text-3xl md:text-4xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wide text-brand-lightgreen">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default TeamHero;
