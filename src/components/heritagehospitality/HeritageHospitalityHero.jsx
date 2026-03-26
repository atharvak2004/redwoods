import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";
export default function HeritageHospitalityHero() {
    return (
        <section className="relative h-[90vh] min-h-[520px] flex items-center">
            <div className="absolute inset-0">
                <MediaElement
                    src="/home/hero/barsana-hero-image2.png"
                    alt="Premium real estate architecture"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/65" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-6">
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
                        <span className="hover:text-brand-green transition cursor-pointer">Business</span>
                        <span className="mx-2">/</span>
                        <span className="text-brand-lightgreen">Heritage Hospitality</span>
                    </motion.div>
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-7xl text-white leading-tight font-bebas">
                            Our Business  <br />
                            <span className="text-white/80">
                                Heritage Hospitality
                            </span>
                        </h1>
                        <motion.p
                            className="mt-6 text-md md:text-lg text-white/80 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Revitalizing heritage properties through restoration and adaptive reuse, guided by cultural sensitivity, architectural integrity, and thoughtful hospitality development.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

