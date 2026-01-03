import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";
function ContactInfo() {
  return (
    <section className="md:pt-28 min-h-screen bg-[#f7f5f2] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-brand-blue mb-4">
              Get in Touch
            </h1>

            <p className="text-brand-green font-medium mb-6">
              We'd love to hear from you.
            </p>

            <p className="text-gray-700 leading-relaxed max-w-md mb-10">
              If you have any inquiries or would like to explore a potential
              collaboration, please use the contact form. Our team will respond
              with clarity and discretion.
            </p>

            {/* Social Icons */}
            <motion.div
              className="flex gap-6 pt-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              {[FaLinkedinIn, FaInstagram, FaEnvelope].map((Icon, index) => (
                <motion.a
                  key={index}
                  className="w-12 h-12 flex items-center justify-center
                             rounded-full border border-gray-300
                             text-gray-600 hover:text-brand-blue
                             hover:border-brand-blue transition"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <form className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600">First Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 px-3 py-2 bg-transparent border
                               border-gray-400 focus:outline-none
                               focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Last Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 px-3 py-2 bg-transparent border
                               border-gray-400 focus:outline-none
                               focus:border-brand-green"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">Email *</label>
                <input
                  type="email"
                  className="w-full mt-1 px-3 py-2 bg-transparent border
                             border-gray-400 focus:outline-none
                             focus:border-brand-green"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  rows="5"
                  className="w-full mt-1 px-3 py-2 bg-transparent border
                             border-gray-400 focus:outline-none
                             focus:border-brand-green"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-brand-green text-white
                           rounded-full font-medium
                           hover:opacity-90 transition"
              >
                Send
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
