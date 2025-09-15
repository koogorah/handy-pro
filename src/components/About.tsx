"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiAward, FiClock, FiShield } from "react-icons/fi";

const About = () => {
  const features = [
    {
      icon: <FiAward className="w-8 h-8 text-accent-100" />,
      title: "Certified Professionals",
      description: "All our technicians are certified and experienced in their respective trades.",
    },
    {
      icon: <FiClock className="w-8 h-8 text-accent-100" />,
      title: "Fast Response",
      description: "We respond quickly to your calls and complete jobs efficiently.",
    },
    {
      icon: <FiCheckCircle className="w-8 h-8 text-accent-100" />,
      title: "Quality Guarantee",
      description: "All work is guaranteed with follow-up support if needed.",
    },
    {
      icon: <FiShield className="w-8 h-8 text-accent-100" />,
      title: "Reliable Service",
      description: "Trusted by hundreds of satisfied customers across Mauritius.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-bg-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* About Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="images/HandyProMauritius-wide.jpg"
                alt="Professional handyman tools"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-100 mb-6">
              Your Trusted{" "}
              <span className="text-primary-100">Property Maintenance</span>{" "}
              Partner
            </h2>
            
            <p className="text-lg text-text-200 mb-6 leading-relaxed">
              Handy Pro is your reliable partner for all property maintenance
              needs across Mauritius. With years of experience and a team of
              certified professionals, we provide comprehensive handyman services
              for residential and commercial properties.
            </p>

            <p className="text-lg text-text-200 mb-8 leading-relaxed">
              From emergency repairs to planned maintenance, our skilled
              technicians deliver quality workmanship with attention to detail.
              We're committed to providing fast, efficient, and affordable
              solutions for all your maintenance requirements.
            </p>

            {/* Business Details */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-text-100 mb-4">
                Business Information
              </h3>
              <div className="space-y-2 text-text-200">
                <p><strong>Contractor:</strong> Ikhlaas</p>
                <p><strong>Business Registration:</strong> I25002639</p>
                <p><strong>Location:</strong> Kalimaye Road, Petite Cabane, Camp De Masque Pave, 1404-03, Mauritius</p>
              </div>
            </div>

            <a
              href="https://wa.me/23057971431"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-100 hover:bg-accent-200 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Free Quote</span>
            </a>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-text-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-200 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
