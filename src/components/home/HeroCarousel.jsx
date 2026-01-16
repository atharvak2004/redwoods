import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const slides = [
  {
    // 1️⃣ Real Estate Development
    title: "REAL ESTATE.\nBUILT TO LAST.",
    desc: "Developing high-quality residential and commercial projects with a focus on durability, design excellence, and long-term value creation.",
    image: "/RealEstateHeroBg.png",
    link: "/real-estate/development",
  },
  {
    // 2️⃣ Heritage Hospitality
    title: "HERITAGE.\nREIMAGINED.",
    desc: "Transforming historic properties into unique hospitality experiences while preserving cultural legacy and architectural authenticity.",
    image: "/home/hero/InfinitySwimmingPool.jpg",
    link: "/heritage-hospitality/pilibhit-house",
  },
  {
    // 3️⃣ Solar Power Plant
    title: "GRID-READY.\nSOLAR POWER.",
    desc: "Engineering and delivering large-scale solar power plants that support the transition to clean, renewable energy infrastructure.",
    image: "/home/hero/solar1.JPG",
    link: "/renewable-energy/dadajalalpur-solar",
  },
  {
    // 4️⃣ Solar Power Plant
    title: "CLEAN ENERGY.\nFOR THE FUTURE.",
    desc: "Developing high-performance solar energy assets designed for efficiency, sustainability, and long-term impact.",
    image: "/home/hero/solar2.JPG",
    link: "/renewable-energy/khodri-solar",
  },
];


export default function HeroCarousel() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        speed={1200}  // smoother
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) =>
            `<span class="${className} pagination-item">
              <span class="number">
                ${String(index + 1).padStart(2, "0")}
              </span>
              <span class="line"></span>
            </span>`,
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
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="px-10 lg:px-24 text-white max-w-4xl">

                  <span className="text-brand-green tracking-widest text-sm fade-up delay-1">
                    OUR EXPERTISE
                  </span>

                  <h1 className="
                    mt-4 text-4xl lg:text-7xl
                    font-bebas
                    leading-tight
                    fade-up delay-2
                    font-semibold 
                  ">
                    {slide.title}
                  </h1>

                  <p className="
                    mt-6 text-gray-300 max-w-xl text-lg
                    fade-up delay-3
                  ">
                    {slide.desc}
                  </p>

                  <Link to={slide.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="
      mt-4 inline-flex items-center gap-2
      bg-brand-green text-white
      px-6 py-3 rounded-full
      text-sm font-medium
      hover:opacity-90 transition
      fade-up delay-4
    "
                    >
                      View Project →
                    </motion.button>
                  </Link>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div
        className="
    custom-pagination absolute z-20
    bottom-20 sm:bottom-16
    left-1/2 -translate-x-1/2
    flex gap-6
    lg:flex-col
    lg:top-1/2 lg:right-12 lg:left-auto
    lg:-translate-y-1/2 lg:-translate-x-0
  "
      />

      <style>{`
/* Smooth background zoom */
.slide-bg {
  animation: zoomSlow 7s ease-in-out forwards;
}

@keyframes zoomSlow {
  from { transform: scale(1); }
  to { transform: scale(1.06); }
}

/* Fade up animation */
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

/* Delays */
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }

/* Pagination */
.custom-pagination {
  align-items: center;
}

.pagination-item {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.pagination-item .number {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #cbd5e1;
  transition: 0.4s ease;
}

.pagination-item .line {
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #54b06d, #92c658);
  transition: 0.4s ease;
}

/* Active */
.swiper-pagination-bullet-active .number {
  color: #54b06d;
  font-size: 32px;
  font-weight: 800;
}

.swiper-pagination-bullet-active .line {
  width: 42px;
}
      `}</style>

    </section>
  );
}
