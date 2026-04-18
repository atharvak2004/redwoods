import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

const slides = [
  {
    title: "REAL ESTATE.\nBUILT TO LAST.",
    desc: "End-to-end real estate development across land acquisition, project feasibility, planning, structuring, and execution—delivering projects seamlessly from concept to completion.",
    image: "/home/hero/hero-carousal-image1.png",
    link: "/real-estate/development",
  },
  {
    title: "CLEAN ENERGY.\nBUILT RESPONSIBLY.",
    desc: "Ownership and operation of clean energy infrastructure, focused on sustainable power generation, operational efficiency, and long-term asset performance.",
    image: "/solar/Dhakarani-hero.png",
    link: "/business/renewable-energy",
  },
  {
    title: "HERITAGE.\nTHOUGHTFULLY REDESIGNED.",
    desc: "Restoration and adaptive reuse of heritage properties, balancing cultural preservation with contemporary hospitality and long-term stewardship.",
    image: "/home/hero/hero2.png",
    link: "/heritage-hospitality/shukla-talab",
  },
  {
    title: "REAL ESTATE.\nADVISED WITH CLARITY.",
    desc: "Strategic real estate advisory services supporting informed investment decisions, efficient transactions, and sustainable long-term value creation.",
    image: "/home/hero/hero4.png",
    link: "/real-estate/advisory",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) => {
            return `
              <span class="${className} progress-item">
                <span class="progress-track">
                  <span class="progress-fill"></span>
                </span>
              </span>
            `;
          },
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center relative slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/30" /> */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="px-10 lg:px-24 text-white max-w-4xl">

                  <span className="text-brand-green tracking-widest text-sm fade-up delay-1">
                    OUR EXPERTISE
                  </span>

                  <h1 className="md:text-7xl text-5xl mt-4 font-bebas leading-tight fade-up delay-2">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-lg text-md md:text-lg text-white/80 leading-relaxed tracking-wide text-justify fade-up delay-3">
                    {slide.desc}
                  </p>

                  <Link to={slide.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 md:mt-12 inline-flex items-center gap-2
                      border-2 border-brand-green
                      text-brand-green
                      px-7 py-3
                      rounded-full
                      text-sm font-semibold
                      hover:bg-brand-green hover:text-white
                      transition-all duration-300"
                    >
                      View Project <MdKeyboardArrowRight size={22} />
                    </motion.button>
                  </Link>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Pagination */}
      <div className="custom-pagination absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4" />

      <style>{`

/* Background zoom */
.slide-bg {
  animation: zoomSlow 7s ease-in-out forwards;
}

@keyframes zoomSlow {
  from { transform: scale(1); }
  to { transform: scale(1.06); }
}

/* Fade animation */
.fade-up {
  opacity: 0;
  animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }

/* Reset swiper bullet */
.swiper-pagination-bullet {
  width: auto;
  height: auto;
  background: transparent;
  opacity: 1;
  margin: 0 !important;
}

/* Progress container */
.progress-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

/* Track */
.progress-track {
  width: 60px;
  height: 5px;
  background: linear-gradient(
    90deg,
    rgba(84,176,109,0.6),
    rgba(146,198,88,0.6)
  );
  border-radius: 20px;
  overflow: hidden;
}

/* Fill */
.progress-fill {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg,#54b06d,#92c658);
}

/* Active animation */
.swiper-pagination-bullet-active .progress-fill {
  animation: fillBar 5.2s linear forwards;
}

@keyframes fillBar {
  from { width: 0%; }
  to { width: 100%; }
}

      `}</style>
    </section>
  );
}