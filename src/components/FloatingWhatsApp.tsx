"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/23057971431"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 whatsapp-float flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 fill-current" />
      </a>
    </motion.div>
  );
};

export default FloatingWhatsApp;
