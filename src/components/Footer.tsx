"use client";

import { 
  FiPhone, 
  FiMessageCircle, 
  FiMail, 
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin 
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    "Plumbing Services",
    "Electrical Work",
    "Painting Services",
    "Masonry Work",
    "Sewage Systems",
    "General Maintenance",
  ];

  const socialLinks = [
    {
      icon: <FiFacebook className="w-5 h-5" />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <FiInstagram className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      href: "#",
      label: "LinkedIn",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-text-100 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">HP</span>
              </div>
              <span className="text-xl font-bold">Handy Pro</span>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for professional handyman services across
              Mauritius. Quality workmanship, reliable service, and competitive
              pricing.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-accent-100 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-accent-100 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhone className="w-4 h-4 text-accent-100" />
                <a
                  href="tel:+23057971431"
                  className="text-gray-300 hover:text-accent-100 transition-colors duration-200"
                >
                  +230 5797 1431
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FiMessageCircle className="w-4 h-4 text-accent-100" />
                <a
                  href="https://wa.me/23057971431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-100 transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FiMail className="w-4 h-4 text-accent-100" />
                <a
                  href="mailto:handypro.mauritius@gmail.com"
                  className="text-gray-300 hover:text-accent-100 transition-colors duration-200"
                >
                  handypro.mauritius@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-4 h-4 text-accent-100" />
                <span className="text-gray-300">
                  Kalimaye Road, Petite Cabane
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Handy Pro. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Business Registration: I25002639 | Contractor: Ikhlaas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
