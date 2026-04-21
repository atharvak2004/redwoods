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
    <footer className="bg-gray-200 text-brand-blue">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          <div className="flex flex-col items-center">
            <img
              src="/Redwoods_logo-removebg.png"
              alt="Redwoods Group"
              className="h-20 w-auto mb-6 items-center"
            />
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Delivering strategic advisory, execution excellence, and
              long-term value across real estate, energy, and heritage hospitality.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-brand-green transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">
              Businesses
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              {businesses.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-brand-green transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <CiLocationOn className="text-lg" />
                Bengaluru, Karnataka, India
              </li>
              <li className="flex items-center gap-3">
                <IoIosCall className="text-lg" />
                +91 80490 78888
              </li>
              <li className="flex items-center gap-3">
                <CiMail className="text-lg" />
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

        {/* Divider */}
        <div
          className="mt-16 pt-8 border-t border-brand-lightgreen
                     flex flex-col md:flex-row justify-between items-center gap-4
                     text-sm text-gray-700"
        >
          <a href="/" className="hover:text-brand-green transition">
            © {new Date().getFullYear()} Redwoods. All rights reserved.
          </a>

          <a
            href="https://prushal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-green transition text-center"
          >
            Designed & Developed by PRUSHAL TECHNOLOGY PVT. LTD.
          </a>
        </div>
      </div>
    </footer>
  );
}
