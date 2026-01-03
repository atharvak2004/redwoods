import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function TransactionsHero() {
  return (
    <section className="relative h-[90vh] min-h-[500px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/transactionsbg.jpg"
          alt="Transactions"
          className="h-full w-full object-cover"
        />
        {/* Brand Overlay */}
        <div className="absolute inset-0 bg-black/60" />
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
              Transactions
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
              className="text-4xl md:text-5xl xl:text-6xl font-semibold text-white leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Proven Track Record <br />
              <span className="text-white/80">
                Across Strategic Transactions
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              A curated selection of transactions executed across real estate
              and financial advisory, reflecting our disciplined approach,
              market insight, and execution excellence.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default TransactionsHero;
