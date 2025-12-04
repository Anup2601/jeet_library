"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Admin", href: "#admin" },
    { name: "Facility", href: "#facility" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Dark overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-lg shadow-lg shadow-cyan-500/10"
            : "bg-black"
        }`}
      >
        <div className="w-full px-16 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a
              href="/"
              className="text-2xl px-8 font-bold text-white hover:text-cyan-400 transition-colors duration-300"
            >
              Jeet Library
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium text-lg relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <a
                  href="#book"
                  className="bg-cyan-400 text-black px-6 py-2.5 rounded-lg hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  Book Seat
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-6 py-2.5 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-cyan-400 transition-all duration-300 relative z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden fixed top-20 left-0 right-0 w-full transition-all duration-500 z-50 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-4 mt-2 px-4 pt-4 pb-6 space-y-3 bg-gradient-to-b from-black via-gray-900 to-black rounded-2xl shadow-xl border border-cyan-500/20 backdrop-blur-xl">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 border-l-4 border-transparent hover:border-cyan-400 rounded-xl transition-all duration-300 font-medium text-lg"
                style={{
                  animation: isOpen
                    ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                {link.name}
              </a>
            ))}

            {/* CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-cyan-500/20">
              <a
                href="#book"
                className="block text-center bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Book Seat
              </a>

              <a
                href="tel:+1234567890"
                className="flex justify-center items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;