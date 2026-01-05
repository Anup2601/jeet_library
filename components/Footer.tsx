import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black border-t border-white/10 py-8 sm:py-12 px-4"
    >
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:pl-38">
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Jeet Library
          </h3>
          <p className="text-gray-100 text-sm mb-4">
            Your partner in academic excellence
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <a href="#" className="text-gray-100 hover:text-cyan-400 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-100 hover:text-cyan-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/jeetlibrary1?igsh=MWhwZDF2aXhldWtlMQ==" className="text-gray-100 hover:text-cyan-400 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@jeet-library" className="text-gray-100 hover:text-cyan-400 transition">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        

        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-100">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" /> +91 98765 43210
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" /> libraryrawat@gmail.com
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" /> LS Plaza, Gali Number 9, Jagat Farm, Block E, GTB Market, Gamma 1, Greater Noida, Uttar Pradesh 201310
            </li>
          </ul>
        </div>

        <div className="hidden md:block text-center sm:text-left">
          <h4 className="font-semibold mb-4 text-white">Hours</h4>
          <p className="text-sm text-gray-100">Open 24/7</p>
          <p className="text-sm text-gray-100 mt-2">365 days a year</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center text-sm text-gray-100">
        © 2025 Jeet Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;