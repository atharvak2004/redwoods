import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function TransactionsHero() {
  return (
    <section className="relative h-[90vh] min-h-[500px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/transactionsnewbg.jpg"
          alt="Transactions"
          className="h-full w-full object-cover"
        />
        {/* Brand Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb */}
          <motion.div
            className="mb-6 text-sm text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <NavLink
              to="/"
              className="hover:text-brand-green transition"
            >
              Home
            </NavLink>
            <span className="mx-2">/</span>
            <span className="text-brand-lightgreen">
              Transactions Portfolio
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            className="max-w-3xl"
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
              className="text-5xl md:text-7xl text-white leading-tight font-bebas"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Experience Across <br />
              <span className="text-white/80">
                Strategic Transactions
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg text-md md:text-lg text-white/80 leading-relaxed tracking-wide text-justify fade-up delay-3"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              A curated overview of transactions advised across real estate and
              financial mandates, reflecting Redwoods' structured approach,
              market insight, and disciplined transaction support.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default TransactionsHero;
