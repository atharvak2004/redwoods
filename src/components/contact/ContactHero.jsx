import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
/* ================= ACTIONS ================= */

const openInstagram = () => window.open("");
const openCall = () => {
  window.location.href = "tel:+918049078888";
};
const openEmail = () => {
  window.location.href = "mailto:info@redwoodscorp.com";
};

/* ================= LOCATIONS ================= */

const locations = [
  {
    name: "Bangalore - Head Office",
    mapUrl:
      "https://www.google.com/maps/place/Redwoods/@12.9743628,77.6118325,902m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae16840f89fedf:0x6657c24357c4451a!8m2!3d12.9743628!4d77.6144074!16s%2Fg%2F1tdwccp6?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Delhi Office",
    mapUrl:
      "https://www.google.com/maps/search/redwoods+C-345,+3rd+Floor,+Defence+Colony,+New+Delhi+-+110024/@28.5733421,77.2303086,3390m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Dehradun Office",
    mapUrl:
      "https://www.google.com/maps/place/Vasant+vihar/@30.3233089,77.9986889,1598m/data=!3m1!1e3!4m10!1m2!2m1!1s%2316,+Lane+No:+5,+Vasanth+Vihar+Extension,+DehradunUttarkhand+-+248006!3m6!1s0x39092b00600b865d:0x1c8fa47d5739d616!8m2!3d30.3226277!4d78.0036994!15sCkcjMTYsIExhbmUgTm86IDUsIFZhc2FudGggVmloYXIgRXh0ZW5zaW9uLCBEZWhyYWR1biBVdHRhcmFraGFuZCAtIDI0ODAwNlpDIkEjMTYgbGFuZSBubyA1IHZhc2FudGggdmloYXIgZXh0ZW5zaW9uIGRlaHJhZHVuIHV0dGFyYWtoYW5kIDI0ODAwNpIBBmdhcmRlbpoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQydFNZVXhXUWpCak0zQlVVa1ZrYmxSdWFEVk9iVmw0VmpGa01GWklZeEFC4AEA-gEECAAQEA!16s%2Fg%2F11xvhc209k?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
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
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
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
          className="text-white/80 max-w-2xl mt-6 text-md md:text-lg leading-relaxed"
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
              // onClick={openInstagram}
              className="absolute top-[40px] left-[50px]"
            />

            <Hex
              src="/contact/hex-call.svg"
              onClick={() => setShowCallPopup(true)}
              className="absolute top-[122px] left-[50px]"
            />

            <Hex
              src="/contact/hex-mail.svg"
              onClick={() => setShowEmailPopup(true)}
              className="absolute top-[162px] left-[120px]"
            />

            <Hex
              src="/contact/hex-fb.svg"
              onClick={() => window.open("https://www.facebook.com/RedwoodsIndia", "_blank")}
              className="absolute top-[122px] left-[190px]"
            />

            <Hex
              src="/contact/hex-yt.svg"
              onClick={() => window.open("https://www.youtube.com/@RedwoodsHoldingsGroup", "_blank")}
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
          // onClick={openInstagram}
          className="absolute top-[56px] right-[94px]"
        />

        <Hex
          src="/contact/hex-call.svg"
          onClick={() => setShowCallPopup(true)}
          className="absolute top-[162px] right-[94px]"
        />

        <Hex
          src="/contact/hex-mail.svg"
          onClick={() => setShowEmailPopup(true)}
          className="absolute top-[212px] right-[186px]"
        />

        <Hex
          src="/contact/hex-fb.svg"
          onClick={() => window.open("https://www.facebook.com/RedwoodsIndia", "_blank")}
          className="absolute top-[160px] right-[280px]"
        />

        <Hex
          src="/contact/hex-yt.svg"
          onClick={() => window.open("https://www.youtube.com/@RedwoodsHoldingsGroup", "_blank")}
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
      {/* ================= CALL POPUP ================= */}
      <AnimatePresence>
        {showCallPopup && (
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
              <button
                onClick={() => setShowCallPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              >
                <MdCancel size={26} />
              </button>

              <h3 className="text-2xl font-semibold text-brand-blue mb-6">
                Call Us
              </h3>

              <button
                onClick={() => {
                  openCall();
                  setShowCallPopup(false);
                }}
                className="w-full py-3 rounded-lg border
                     border-brand-lightgreen
                     text-brand-blue font-medium
                     hover:bg-brand-lightgreen hover:text-white
                     transition"
              >
                +91 80490 78888
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ================= EMAIL POPUP ================= */}
      <AnimatePresence>
        {showEmailPopup && (
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
              <button
                onClick={() => setShowEmailPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              >
                <MdCancel size={26} />
              </button>

              <h3 className="text-2xl font-semibold text-brand-blue mb-6">
                Email Us
              </h3>

              <button
                onClick={() => {
                  openEmail();
                  setShowEmailPopup(false);
                }}
                className="w-full py-3 rounded-lg border
                     border-brand-lightgreen
                     text-brand-blue font-medium
                     hover:bg-brand-lightgreen hover:text-white
                     transition"
              >
                info@redwoodscorp.com
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
