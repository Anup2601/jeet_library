import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer
        id="contact"
        className="bg-black/50 border-t border-white/10 py-12 px-4"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Jeet Library
            </h3>
            <p className="text-gray-400 text-sm">
              Your partner in academic excellence
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#facilities"
                  className="hover:text-cyan-400 transition"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-cyan-400 transition"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@studyhub.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Delhi, India
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <p className="text-sm text-gray-400">Open 24/7</p>
            <p className="text-sm text-gray-400 mt-2">365 days a year</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          © 2025 Jeet Library. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
