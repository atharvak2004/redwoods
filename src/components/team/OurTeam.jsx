import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function OurTeam() {
  const team = [
    {
      name: "Ms. Kaveramma C S",
      position: "Secretary",
      image: "/team/Kaveri-whitebg.png",
      linkedin: "#",
    },
    {
      name: "Mr. Vicky Arya",
      position: "Business Development ",
      image: "/team/Vicky-removebg-preview.png",
      linkedin: "#",
    },
    {
      name: "Ms. Kirthika M",
      position: "IT",
      image: "/team/Kirthika-removebg-preview.png",
      linkedin: "#",
    },
    {
      name: "Ms. Gadi Muthyalamma",
      position: "Accounts",
      image: "/team/Muthyalamma-removebg-preview.png",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-lg font-semibold tracking-widest text-brand-lightgreen uppercase">
            Our Team
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-brand-blue leading-tight">
            The Faces <br />
            <span className="text-[#373e68]">Behind Our Work</span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Get to know the talented individuals who make everything possible. Our team is united by a shared commitment to quality, innovation, and client satisfaction.
          </p>
        </motion.div>

        {/* ================= TEAM CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center gap-y-24">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="relative bg-white border border-gray-200 rounded-3xl
                         w-full md:w-[380px] p-10 text-center
                         hover:shadow-xl transition"
            >
              {/* Accent Strip */}
              <div className="absolute top-0 right-6 h-1 w-24 bg-brand-lightgreen rounded-bl-3xl" />

              {/* Image */}
              <div className="mx-auto size-60 rounded-full overflow-hidden
                              border-4 border-white shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-brand-blue">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-gray-600 tracking-wide">
                  {member.position}
                </p>

                {/* LinkedIn */}
                {/* <div className="mt-6 flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 flex items-center justify-center rounded-full
                               border border-brand-green text-brand-green
                               hover:bg-brand-green hover:text-white
                               transition"
                  >
                    <FaLinkedinIn className="text-lg" />
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
