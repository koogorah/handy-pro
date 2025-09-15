"use client";

import { motion } from "framer-motion";
import { 
  FiPhone, 
  FiMessageCircle, 
  FiMail, 
  FiMapPin, 
  FiClock 
} from "react-icons/fi";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6 text-white" />,
      title: "Phone",
      value: "+230 5797 1431",
      href: "tel:+23057971431",
      description: "Call us for immediate assistance",
    },
    {
      icon: <FiMessageCircle className="w-6 h-6 text-white" />,
      title: "WhatsApp",
      value: "+230 5797 1431",
      href: "https://wa.me/23057971431",
      description: "Chat with us on WhatsApp",
    },
    {
      icon: <FiMail className="w-6 h-6 text-white" />,
      title: "Email",
      value: "handypro.mauritius@gmail.com",
      href: "mailto:handypro.mauritius@gmail.com",
      description: "Send us an email",
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-white" />,
      title: "Address",
      value: "Kalimaye Road, Petite Cabane",
      href: "https://maps.google.com/?q=Kalimaye+Road,+Petite+Cabane,+Camp+De+Masque+Pave,+Mauritius",
      description: "Camp De Masque Pave, 1404-03",
    },
    {
      icon: <FiClock className="w-6 h-6 text-white" />,
      title: "Working Hours",
      value: "Mon-Sat: 10:00-18:00",
      href: null,
      description: "Public holidays & Sundays: Emergencies only",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-100 mb-4">
            Get In <span className="text-primary-100">Touch</span>
          </h2>
          <p className="text-lg text-text-200 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free quote and
            experience our professional handyman services across Mauritius.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-text-100 mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-100 mb-1">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary-100 hover:text-primary-200 transition-colors duration-200 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text-100 font-medium">{info.value}</p>
                    )}
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/23057971431"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-accent-100 hover:bg-accent-200 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <FiMessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:+23057971431"
                className="w-full bg-primary-100 hover:bg-primary-200 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <FiPhone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form or Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          >
            {/* Contact Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/images/HandyProMauritius-wide.jpg"
                alt="Professional handyman at work"
                className="w-full h-48 object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold text-text-100 mb-6">
              Business Details
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-text-100 mb-2">Registered Business</h4>
                <p className="text-text-200">Business Registration Number: I25002639</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-100 mb-2">Main Contractor</h4>
                <p className="text-text-200">Ikhlaas</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-100 mb-2">Service Area</h4>
                <p className="text-text-200">All regions of Mauritius (main island)</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-100 mb-2">Emergency Service</h4>
                <p className="text-text-200">24/7 emergency call-out available</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary-100 bg-opacity-10 rounded-lg">
              <h4 className="font-semibold text-primary-100 mb-2">
                Preferred Contact Method
              </h4>
              <p className="text-text-200 text-sm">
                For fastest response, we recommend contacting us via WhatsApp.
                We typically respond within 30 minutes during business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
