"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMessageCircle } from "react-icons/fi";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-primary-300 via-white to-primary-300 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url("images/HandyProMauritius.jpg")' // CHANGE THIS URL
                }}
      ></div>
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-100 mb-6 leading-tight"
          >
            Professional{" "}
            <span className="text-primary-100">Handyman</span> Services
            <br />
            <span className="text-accent-100">in Mauritius</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-text-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Reliable multi-trade services including plumbing, electrical,
            painting, masonry, and general property maintenance. Fast response
            times and quality workmanship guaranteed.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="https://wa.me/23057971431"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-100 hover:bg-accent-200 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FiMessageCircle className="w-5 h-5" />
              <span>WhatsApp Now</span>
            </a>
            <a
              href="tel:+23057971431"
              className="bg-primary-100 hover:bg-primary-200 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FiPhone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 text-sm text-text-200"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-100 rounded-full"></div>
              <span>Licensed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-100 rounded-full"></div>
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-100 rounded-full"></div>
              <span>Competitive Pricing</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
