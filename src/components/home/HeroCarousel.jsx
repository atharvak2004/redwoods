import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "UTILITY-SCALE.\nSOLAR POWER.",
    desc: "Execution and advisory for grid-connected solar power plants delivering reliable, long-term clean energy infrastructure.",
    image: "/DHAKRANI_solor.png",
    link: "/business/renewable-energy",
  },
  {
    title: "CLEAN ENERGY.\nLONG-TERM VALUE.",
    desc: "Development and operation of solar energy assets focused on sustainability, efficiency, and institutional-grade performance.",
    image: "/solarherobg.png",
    link: "/business/renewable-energy",
  },
  {
    title: "HERITAGE.\nRESTORED WITH PURPOSE.",
    desc: "Revitalizing historic properties through sensitive restoration and adaptive reuse, preserving cultural legacy while creating enduring value.",
    image: "/Heritage_Services_3.jpg",
    link: "/business/heritage-hospitality",
  },
  {
    title: "REAL ESTATE.\nBUILT TO ENDURE.",
    desc: "Strategic development and advisory across residential and commercial real estate, delivering sustainable assets with long-term value.",
    image: "/RealEstateHeroBg.png",
    link: "/business/real-estate-advisory",
  },

];

export default function HeroCarousel() {
  return (
    <section className="relative h-[90vh] md:h-[100vh] w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) =>
            `<span class="${className}">
              ${String(index + 1).padStart(2, "0")}
            </span>`,
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-3xl px-6 sm:px-10 lg:pr-32 text-white">
                  <h1 className="text-4xl md:text-6xl font-semibold leading-tight whitespace-pre-line">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-lg text-gray-200 max-w-xl">
                    {slide.desc}
                  </p>
                  <Link to={slide.link}>
                    <button
                      className="mt-10 inline-flex items-center gap-3
                               bg-brand-green text-white px-8 py-3 rounded-full
                               font-medium hover:opacity-90 transition"
                    >
                      Read More →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ SINGLE PAGINATION ELEMENT */}
      <div
        className="
          custom-pagination absolute z-20 flex
          bottom-8 left-1/2 -translate-x-1/2 gap-4
          lg:flex-col lg:gap-6
          lg:top-1/2 lg:right-8 lg:left-auto lg:-translate-x-0 lg:-translate-y-1/2
        "
      />

      {/* Pagination styles */}
      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          background: transparent;
          opacity: 0.6;
          font-size: 28px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: rgba(255,255,255,0.6);
        }

        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          font-weight: 600;
          color: #54b06d;
          position: relative;
        }

        /* Desktop accent line */
        @media (min-width: 1024px) {
          .custom-pagination .swiper-pagination-bullet-active::after {
            content: "";
            position: absolute;
            right: -28px;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 4px;
            background: #4e5798;
          }
        }
      `}</style>
    </section>
  );
}
