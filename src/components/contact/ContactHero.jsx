import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

/* ACTIONS */
const openMap = () => {
  window.open(
    "https://www.google.com/maps/place/Redwoods/@12.9743628,77.6118325,902m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae16840f89fedf:0x6657c24357c4451a!8m2!3d12.9743628!4d77.6144074!16s%2Fg%2F1tdwccp6?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
    "_blank"
  );
};



const openInstagram = () => window.open("https://instagram.com/", "_blank");
const openCall = () => {
  window.location.href = "tel:+91(80)49078888";
};

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
      className="w-24 lg:w-32 cursor-pointer"
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
          className="text-5xl md:text-7xl text-white leading-tight w-full font-bebas"
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
          className=" text-white/80 max-w-3xl
          mt-6 text-md md:text-lg leading-relaxed"
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
          onClick={() => window.open("https://facebook.com")}
          className="absolute top-[160px] right-[280px]"
        />

        <Hex
          src="/contact/hex-yt.svg"
          onClick={() => window.open("https://youtube.com")}
          className="absolute top-[216px] right-[374px]"
        />

      </div>
    </section>
  );
}
