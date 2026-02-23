import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
/* ================= ACTIONS ================= */

const openInstagram = () => window.open("https://instagram.com/", "_blank");
const openCall = () => {
  window.location.href = "tel:+918049078888";
};
const openEmail = () => {
  window.location.href = "mailto:test@gmail.com";
};

/* ================= LOCATIONS ================= */

const locations = [
  {
    name: "Bangalore – Head Office",
    mapUrl:
      "https://www.google.com/maps/place/Redwoods/@12.9743628,77.6144074",
  },
  {
    name: "Mumbai Office",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Mumbai+India",
  },
  {
    name: "Delhi NCR Office",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Delhi+NCR+India",
  },
];

/* ================= HEX COMPONENT ================= */

const Hex = ({ src, onClick, className }) => (
  <motion.div
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className={className}
  >
    <img
      src={src}
      onClick={onClick}
      className="w-24 lg:w-32 cursor-pointer"
      alt="contact icon"
    />
  </motion.div>
);

/* ================= MAIN COMPONENT ================= */

export default function ContactHero() {
  const [showMapPopup, setShowMapPopup] = useState(false);

  const openLocation = (url) => {
    window.open(url, "_blank");
    setShowMapPopup(false);
  };

  return (
    <section
      className="relative h-[90vh] min-h-[520px] flex items-center
      bg-gradient-to-br from-[#162f4b] via-[#091a2e] to-[#0d1c2d] pt-60 md:pt-0"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* ================= BREADCRUMB ================= */}
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

        {/* ================= TITLE ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl text-white leading-tight w-full font-bebas"
        >
          Let’s Start a <br />
          <span className="text-white/80">
            Meaningful Conversation
          </span>
        </motion.h1>

        {/* ================= DESCRIPTION ================= */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/80 max-w-3xl mt-6 text-md md:text-lg leading-relaxed"
        >
          Whether you’re exploring an opportunity, seeking strategic advisory,
          or planning a long-term partnership, our team is ready to engage
          with clarity, discretion, and purpose.
        </motion.p>

        {/* ================= MOBILE HEX ================= */}
        <div className="lg:hidden mt-10 relative w-full h-[420px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[420px]">

            <Hex
              src="/contact/hex-map.svg"
              onClick={() => setShowMapPopup(true)}
              className="absolute top-[0px] left-[120px]"
            />

            <Hex
              src="/contact/hex-insta.svg"
              onClick={openInstagram}
              className="absolute top-[40px] left-[50px]"
            />

            <Hex
              src="/contact/hex-call.svg"
              onClick={openCall}
              className="absolute top-[122px] left-[50px]"
            />

            <Hex
              src="/contact/hex-mail.svg"
              onClick={openEmail}
              className="absolute top-[162px] left-[120px]"
            />

            <Hex
              src="/contact/hex-fb.svg"
              onClick={() => window.open("https://facebook.com", "_blank")}
              className="absolute top-[122px] left-[190px]"
            />

            <Hex
              src="/contact/hex-yt.svg"
              onClick={() => window.open("https://youtube.com", "_blank")}
              className="absolute top-[40px] left-[190px]"
            />

          </div>
        </div>
      </div>

      {/* ================= DESKTOP HEX ================= */}
      <div className="hidden lg:block absolute right-[6%] top-[50%] -translate-y-1/2 w-[600px] h-[300px]">

        <Hex
          src="/contact/hex-map.svg"
          onClick={() => setShowMapPopup(true)}
          className="absolute top-[0px] right-[0px]"
        />

        <Hex
          src="/contact/hex-insta.svg"
          onClick={openInstagram}
          className="absolute top-[56px] right-[94px]"
        />

        <Hex
          src="/contact/hex-call.svg"
          onClick={openCall}
          className="absolute top-[162px] right-[94px]"
        />

        <Hex
          src="/contact/hex-mail.svg"
          onClick={openEmail}
          className="absolute top-[212px] right-[186px]"
        />

        <Hex
          src="/contact/hex-fb.svg"
          onClick={() => window.open("https://facebook.com", "_blank")}
          className="absolute top-[160px] right-[280px]"
        />

        <Hex
          src="/contact/hex-yt.svg"
          onClick={() => window.open("https://youtube.com", "_blank")}
          className="absolute top-[216px] right-[374px]"
        />
      </div>

      {/* ================= MAP POPUP ================= */}
      <AnimatePresence>
        {showMapPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="relative bg-white rounded-2xl p-8 w-[90%] max-w-md text-center"
            >
              {/* CLOSE ICON */}
              <button
                onClick={() => setShowMapPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              >
                <MdCancel size={26} />
              </button>

              <h3 className="text-2xl font-semibold text-brand-blue mb-6">
                Select Location
              </h3>

              <div className="space-y-4">
                {locations.map((loc, index) => (
                  <button
                    key={index}
                    onClick={() => openLocation(loc.mapUrl)}
                    className="w-full py-3 rounded-lg border
                         border-brand-lightgreen
                         text-brand-blue font-medium
                         hover:bg-brand-lightgreen hover:text-white
                         transition"
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
