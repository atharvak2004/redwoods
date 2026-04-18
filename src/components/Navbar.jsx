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
  const isBusinessActive =
    location.pathname.startsWith("/business") ||
    location.pathname.startsWith("/real-estate") ||
    location.pathname.startsWith("/renewable-energy") ||
    location.pathname.startsWith("/heritage-hospitality");

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
          name: "Real Estate Development",
          path: "/real-estate/development",
        },
        {
          name: "Real Estate Advisory",
          path: "/real-estate/advisory",
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

    { name: "Transactions Portfolio", path: "/transaction" },
    { name: "Our People", path: "/team" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
    fixed top-4 left-4 right-4
    mx-auto max-w-7xl
    z-50
    bg-white/90 backdrop-blur-md
    rounded-2xl
    shadow-xl
    border border-gray-200
  "
      >
        <div className={`px-6 p-1 flex items-center justify-between transition-all duration-300 h-18`}>
          {/* Logo */}
          <NavLink to="/">
            <img
              src="/redwoods-logo-clear.png"
              alt="Redwoods"
              className={`transition-all duration-300 h-16`}
            />
          </NavLink>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-10">

            {navLinks.map((link) => {

              /* ---------- NORMAL LINKS ---------- */
              if (!link.dropdown) {
                return (
                  <NavLink key={link.name} to={link.path}>
                    {({ isActive }) => (
                      <span
                        className={`relative text-md font-medium cursor-pointer
  text-brand-blue`}
                      >
                        {link.name}
                        <span
                          className={`absolute -bottom-1 left-0 h-[2px] transition-all
                          ${isActive
                              ? "w-full bg-brand-green"
                              : "w-0 bg-brand-green"
                            }`}
                        />
                      </span>
                    )}
                  </NavLink>
                );
              }

              /* ---------- OUR BUSINESS ---------- */
              return (
                <div key={link.name} className="relative group">

                  <NavLink to={link.path}>
                    <span
                      className="relative text-md font-medium cursor-pointer text-brand-blue"
                    >
                      {link.name}

                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] transition-all
                        ${isBusinessActive
                            ? "w-full bg-brand-green"
                            : "w-0 bg-brand-green group-hover:w-full"
                          }`}
                      />
                    </span>
                  </NavLink>

                  {/* DROPDOWN */}
                  <div className="
                    absolute left-0 top-full mt-4 w-72
                    bg-white rounded-xl shadow-lg
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all
                  ">
                    {link.dropdown.map((item) => (
                      <div key={item.name} className="px-4 py-2">

                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `block font-medium
                            ${isActive
                              ? "text-brand-green"
                              : "text-gray-700 hover:text-brand-blue"
                            }`}
                        >
                          {item.name}
                        </NavLink>

                        {/* Children */}
                        {item.children && (
                          <div className="ml-4 mt-2 border-l pl-4 space-y-1">
                            {item.children.map((child) => (
                              <NavLink
                                key={child.name}
                                to={child.path}
                                className={({ isActive }) =>
                                  `block text-sm
                                  ${isActive
                                    ? "text-brand-green"
                                    : "text-gray-600 hover:text-brand-green"
                                  }`}
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
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className={`md:hidden text-2xl text-brand-blue
              `}
          >
            <FiMenu />
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl"
          >

            <div className="h-20 px-6 flex items-center justify-between border-b">
              <img src="/Redwoods_logo-removebg.png" className="h-10" />
              <button onClick={() => setOpen(false)} className="text-2xl">
                <FiX />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-8 gap-6">

              {navLinks.map((link) => {

                if (!link.dropdown) {
                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `font-medium
                        ${isActive
                          ? "text-brand-green"
                          : "text-gray-700 hover:text-brand-green"
                        }`}
                    >
                      {link.name}
                    </NavLink>
                  );
                }

                const isOpen = mobileDropdown === link.name;

                return (
                  <div key={link.name}>
                    <button
                      onClick={() =>
                        setMobileDropdown(isOpen ? null : link.name)
                      }
                      className="w-full flex justify-between font-medium"
                    >
                      {link.name}
                      <span className={`${isOpen && "rotate-180"} transition`}>
                        ▾
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 pl-4 border-l space-y-4">

                        {link.dropdown.map((item) => (
                          <div key={item.name}>

                            <NavLink
                              to={item.path}
                              onClick={() => setOpen(false)}
                              className={({ isActive }) =>
                                `block font-medium
                                ${isActive
                                  ? "text-brand-green"
                                  : "text-gray-700 hover:text-brand-blue"
                                }`}
                            >
                              {item.name}
                            </NavLink>

                            {item.children && (
                              <div className="ml-3 mt-2 space-y-2">
                                {item.children.map((child) => (
                                  <NavLink
                                    key={child.name}
                                    to={child.path}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                      `block text-sm
                                      ${isActive
                                        ? "text-brand-green"
                                        : "text-gray-600 hover:text-brand-green"
                                      }`}
                                  >
                                    {child.name}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}

                      </div>
                    )}
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
