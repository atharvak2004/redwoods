import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Transactions Portfolio", href: "/transaction" },
  { label: "Our People", href: "/team" },
  { label: "Contact Us", href: "/contact" },
];

const businesses = [
  {
    label: "Real Estate Development",
    href: "/real-estate/development",
  },
  {
    label: "Real Estate Advisory",
    href: "/real-estate/advisory",
  },
  {
    label: "Renewable Energy",
    href: "/business/renewable-energy",
  },
  {
    label: "Heritage Hospitality",
    href: "/business/heritage-hospitality",
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        {/* Top Center Section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <img
            src="/redwoods-logo-clear.png"
            alt="Redwoods Group"
            className="h-36 w-auto mb-6"
          />

          <p className="text-sm text-gray-900 leading-relaxed">
            Delivering strategic advisory, execution excellence, and
            long-term value across real estate, energy, and heritage hospitality.
          </p>
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-brand-green opacity-30"></div>

        {/* Middle Section */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-24 text-sm text-left">

            {/* Quick Links */}
            <div className="w-full">
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-brand-green">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-brand-green transition duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Businesses */}
            <div className="w-full">
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-brand-green">
                Businesses
              </h4>
              <ul className="space-y-3">
                {businesses.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-brand-green transition duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="w-full">
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-brand-green">
                Contact
              </h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <CiLocationOn className="text-lg text-brand-green" />
                  Bengaluru, Karnataka, India
                </li>
                <li className="flex items-center gap-3">
                  <IoIosCall className="text-lg text-brand-green" />
                  +91 80490 78888
                </li>
                <li className="flex items-center gap-3">
                  <CiMail className="text-lg text-brand-green" />
                  <a
                    href="mailto:info@redwoodscorp.com"
                    className="hover:text-brand-green transition"
                  >
                    info@redwoodscorp.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 pt-6 border-t border-brand-green opacity-30"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-700 max-w-5xl mx-auto">
          <span>
            © {new Date().getFullYear()} Redwoods. All rights reserved.
          </span>

          <a
            href="https://prushal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-green transition"
          >
            Designed & Developed by PRUSHAL TECHNOLOGY PVT. LTD.
          </a>
        </div>

      </div>
    </footer>
  );
}