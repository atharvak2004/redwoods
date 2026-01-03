import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          
          {/* Brand */}
          <div>
            <img
              src="/Redwoods_logo-removebg.png"
              alt="Redwoods"
              className="h-14 w-auto object-contain mb-6"
            />
            <p className="text-sm text-white/80 leading-relaxed">
              Delivering strategic advisory, execution excellence, and long-term
              value across real estate, energy, and heritage hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="/" className="hover:text-brand-green transition">Home</a></li>
              <li><a href="/about" className="hover:text-brand-green transition">About Us</a></li>
              <li><a href="/team" className="hover:text-brand-green transition">Our Leadership</a></li>
              <li><a href="/business" className="hover:text-brand-green transition">Our Businesses</a></li>
              <li><a href="/transaction" className="hover:text-brand-green transition">Transactions</a></li>
              <li><a href="/contact" className="hover:text-brand-green transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Businesses */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">
              Businesses
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a
                  href="/business#real-estate"
                  className="hover:text-brand-green transition"
                >
                  Real Estate Advisory
                </a>
              </li>
              <li>
                <a
                  href="/business#renewable-energy"
                  className="hover:text-brand-green transition"
                >
                  Renewable Energy
                </a>
              </li>
              <li>
                <a
                  href="/business#heritage-hospitality"
                  className="hover:text-brand-green transition"
                >
                  Heritage Hospitality
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>📍 India</li>
              <li>📞 +91 XXXXX XXXXX</li>
              <li>
                ✉️{" "}
                <a
                  href="mailto:info@redwoodsgroup.com"
                  className="hover:text-brand-green transition"
                >
                  info@redwoodsgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-16 pt-8 border-t border-brand-lightgreen/30
                     flex flex-col md:flex-row justify-between items-center gap-4
                     text-sm text-white/70"
        >
          {/* Copyright */}
          <a href="/" className="hover:text-brand-green transition">
            © {new Date().getFullYear()} Redwoods. All rights reserved.
          </a>

          {/* Developer Credit */}
          <a
            href="https://prushal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-green transition"
          >
            Designed & Developed by PRUSHAL TECHNOLOGY PVT. LTD.
          </a>

          {/* Policies */}
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-brand-green transition">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="hover:text-brand-green transition">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
