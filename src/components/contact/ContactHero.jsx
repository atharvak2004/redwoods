import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

/* ACTIONS */
const openMap = () => window.open("https://maps.google.com?q=Pune", "_blank");
const openInstagram = () => window.open("https://instagram.com/", "_blank");
const openWhatsApp = () => window.open("https://wa.me/919876543210", "_blank");
const openEmail = () => (window.location.href = "mailto:test@gmail.com");

/* HEX COMPONENT */
const Hex = ({ src, onClick, className }) => (
  <motion.div
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className={className}
  >
    <img
      src={src}
      onClick={onClick}
      className="w-24 cursor-pointer"
      alt="contact icon"
    />
  </motion.div>
);

export default function ContactHero() {
  return (
    <section
      className="relative h-[90vh] min-h-[520px] flex items-center
      bg-gradient-to-br from-[#162f4b] via-[#091a2e] to-[#0d1c2d] pt-60 md:pt-0"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-sm text-white/80"
        >
          <NavLink to="/" className="hover:text-green-400 transition">
            Home
          </NavLink>
          <span className="mx-2">/</span>
          <span className="text-green-400">Contact</span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl xl:text-6xl 
            font-semibold text-white leading-tight w-full font-bebas"
        >
          Let’s Start a <br />
          <span className="text-white/80">
            Meaningful Conversation
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-lg text-white/80 max-w-3xl"
        >
          Whether you’re exploring an opportunity, seeking strategic advisory,
          or planning a long-term partnership, our team is ready to engage
          with clarity, discretion, and purpose.
        </motion.p>

        {/* MOBILE HEX (ZIG-ZAG) */}
        <div className="lg:hidden mt-10 relative w-full h-[420px]">

          <div
            className="
      absolute left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[320px] h-[420px]
    "
          >

            <Hex
              src="/contact/hex-map.svg"
              onClick={openMap}
              className="absolute top-[0px] left-[120px]"
            />

            <Hex
              src="/contact/hex-insta.svg"
              onClick={openInstagram}
              className="absolute top-[40px] left-[50px]"
            />

            <Hex
              src="/contact/hex-whatsapp.svg"
              onClick={openWhatsApp}
              className="absolute top-[122px] left-[50px]"
            />

            <Hex
              src="/contact/hex-mail.svg"
              onClick={openEmail}
              className="absolute top-[162px] left-[120px]"
            />

            <Hex
              src="/contact/hex-fb.svg"
              onClick={() => window.open("https://facebook.com")}
              className="absolute top-[122px] left-[190px]"
            />

            <Hex
              src="/contact/hex-yt.svg"
              onClick={() => window.open("https://youtube.com")}
              className="absolute top-[40px] left-[190px]"
            />

          </div>
        </div>


      </div>

      {/* DESKTOP HEX (UNCHANGED) */}
      <div className="hidden lg:block absolute right-[6%] top-[50%] -translate-y-1/2 w-[600px] h-[300px]">
        <Hex
          src="/contact/hex-map.svg"
          onClick={openMap}
          className="absolute top-[0px] right-[0px]"
        />

        <Hex
          src="/contact/hex-insta.svg"
          onClick={openInstagram}
          className="absolute top-[40px] right-[70px]"
        />

        <Hex
          src="/contact/hex-whatsapp.svg"
          onClick={openWhatsApp}
          className="absolute top-[122px] right-[70px]"
        />

        <Hex
          src="/contact/hex-mail.svg"
          onClick={openEmail}
          className="absolute top-[162px] right-[140px]"
        />

        <Hex
          src="/contact/hex-fb.svg"
          onClick={() => window.open("https://facebook.com")}
          className="absolute top-[122px] right-[210px]"
        />

        <Hex
          src="/contact/hex-yt.svg"
          onClick={() => window.open("https://youtube.com")}
          className="absolute top-[162px] right-[280px]"
        />

      </div>
    </section>
  );
}
