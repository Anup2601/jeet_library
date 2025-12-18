"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <motion.div
      drag
      dragMomentum={false}
      className="fixed bottom-10 right-10 z-50"
      style={{ cursor: "grab" }}
    >
      <motion.a
        href="https://wa.me/919682596953"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg z-50 cursor-pointer"
      >
        <FaWhatsapp size={30} />
      </motion.a>
    </motion.div>
  );
}
