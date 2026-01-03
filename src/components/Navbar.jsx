import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";
  const isBusinessActive = location.pathname.startsWith("/business");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },

    {
      name: "Our Business",

      dropdown: [
        {
          name: "Real Estate Advisory",
          path: "/business/real-estate-advisory",
          children: [
            {
              name: "Real Estate Development",
              path: "/business/real-estate-advisory#development",
            },
            {
              name: "Real Estate Services",
              path: "/business/real-estate-advisory#services",
            },
          ],
        },
        {
          name: "Renewable Energy",
          path: "/business/renewable-energy",
        },
        {
          name: "Heritage Hospitality",
          path: "/business/heritage-hospitality",
        },
      ],
    },

    { name: "Transactions", path: "/transaction" },
    { name: "Our Leadership", path: "/team" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src="/Redwoods_logo-removebg.png"
              alt="Redwoods"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </NavLink>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              // ---------- NORMAL LINKS ----------
              if (!link.dropdown) {
                return (
                  <NavLink key={link.name} to={link.path}>
                    {({ isActive }) => (
                      <span
                        className={`relative text-md font-medium cursor-pointer transition-colors
                          ${isActive
                            ? "text-brand-blue"
                            : isContactPage || scrolled
                              ? "text-gray-700 hover:text-brand-green"
                              : "text-white hover:text-brand-lightgreen"
                          }
                        `}
                      >
                        {link.name}
                        <span
                          className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300
                            ${isActive
                              ? "w-full bg-brand-blue"
                              : "w-0 bg-brand-green"
                            }
                          `}
                        />
                      </span>
                    )}
                  </NavLink>
                );
              }

              // ---------- OUR BUSINESS (DROPDOWN) ----------
              return (
                <div key={link.name} className="relative group">
                  <NavLink to={link.path}>
                    {() => (
                      <span
                        className={`relative text-md font-medium cursor-pointer transition-colors
                          ${isBusinessActive
                            ? "text-brand-blue"
                            : isContactPage || scrolled
                              ? "text-gray-700 hover:text-brand-green"
                              : "text-white hover:text-brand-lightgreen"
                          }
                        `}
                      >
                        {link.name}
                        <span
                          className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300
                            ${isBusinessActive
                              ? "w-full bg-brand-blue"
                              : "w-0 bg-brand-green group-hover:w-full"
                            }
                          `}
                        />
                      </span>
                    )}
                  </NavLink>

                  {/* DROPDOWN MENU */}
                  <div
                    className="
                      absolute left-0 top-full mt-4 w-72
                      bg-white rounded-xl shadow-lg
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-300
                    "
                  >
                    <div className="py-3">
                      {link.dropdown.map((item) => (
                        <div key={item.name} className="px-4 py-2">
                          <NavLink
                            to={item.path}
                            className="block font-medium text-gray-800 hover:text-brand-blue"
                          >
                            {item.name}
                          </NavLink>

                          {item.children && (
                            <div className="ml-4 mt-2 border-l pl-4 space-y-1">
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.name}
                                  to={child.path}
                                  className="block text-sm text-gray-600 hover:text-brand-green"
                                >
                                  {child.name}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setOpen(true)}
            className={`md:hidden text-2xl
              ${isContactPage || scrolled ? "text-brand-blue" : "text-white"}
            `}
          >
            <FiMenu />
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 h-full w-[280px] bg-white z-50"
          >
            <div className="h-20 px-6 flex items-center justify-between border-b">
              <img
                src="/Redwoods_logo-removebg.png"
                alt="Redwoods"
                className="h-10"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-brand-blue"
              >
                <FiX />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => {
                // ---------- NORMAL LINKS ----------
                if (!link.dropdown) {
                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-base font-medium transition-colors
            ${isActive
                          ? "text-brand-blue"
                          : "text-gray-700 hover:text-brand-green"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  );
                }

                // ---------- DROPDOWN (OUR BUSINESS) ----------
                const isOpen = mobileDropdown === link.name;

                return (
                  <div key={link.name}>
                    {/* Dropdown Header */}
                    <button
                      onClick={() =>
                        setMobileDropdown(isOpen ? null : link.name)
                      }
                      className="w-full flex items-center justify-between
                     text-base font-medium text-gray-800"
                    >
                      {link.name}
                      <span
                        className={`transition-transform duration-300
              ${isOpen ? "rotate-180" : ""}`}
                      >
                        ▾
                      </span>
                    </button>

                    {/* Dropdown Content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="mt-3 pl-4 border-l space-y-4 overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <div key={item.name}>
                              <NavLink
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className="block font-medium text-gray-700
                               hover:text-brand-blue"
                              >
                                {item.name}
                              </NavLink>

                              {/* Nested Children */}
                              {item.children && (
                                <div className="mt-2 ml-3 space-y-2">
                                  {item.children.map((child) => (
                                    <NavLink
                                      key={child.name}
                                      to={child.path}
                                      onClick={() => setOpen(false)}
                                      className="block text-sm text-gray-600
                                     hover:text-brand-green"
                                    >
                                      {child.name}
                                    </NavLink>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
