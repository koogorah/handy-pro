"use client";

import { motion } from "framer-motion";
import { 
  FiSettings, 
  FiZap, 
  FiDroplet, 
  FiHome, 
  FiTool, 
  FiRefreshCw 
} from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiSettings className="w-12 h-12 text-accent-100" />,
      title: "Plumbing Services",
      description: "Complete plumbing solutions including repairs, installations, and maintenance for residential and commercial properties.",
      features: ["Leak repairs", "Pipe installations", "Drain cleaning", "Bathroom fittings"],
    },
    {
      icon: <FiZap className="w-12 h-12 text-accent-100" />,
      title: "Electrical Work",
      description: "Professional electrical services from wiring to fixture installations, ensuring safety and compliance.",
      features: ["Wiring & rewiring", "Light installations", "Power outlets", "Electrical repairs"],
    },
    {
      icon: <FiHome className="w-12 h-12 text-accent-100" />,
      title: "Painting Services",
      description: "Interior and exterior painting services with premium materials and expert craftsmanship.",
      features: ["Interior painting", "Exterior painting", "Wall preparation", "Color consultation"],
    },
    {
      icon: <FiTool className="w-12 h-12 text-accent-100" />,
      title: "Masonry Work",
      description: "Professional masonry services for construction, repairs, and renovations.",
      features: ["Brickwork", "Plastering", "Tile installation", "Structural repairs"],
    },
    {
      icon: <FiDroplet className="w-12 h-12 text-accent-100" />,
      title: "Sewage Systems",
      description: "Complete sewage and drainage system installation, maintenance, and repairs.",
      features: ["Septic tanks", "Drainage systems", "Pipe relining", "Blockage removal"],
    },
    {
      icon: <FiRefreshCw className="w-12 h-12 text-accent-100" />,
      title: "General Maintenance",
      description: "Comprehensive property maintenance services to keep your property in perfect condition.",
      features: ["Property inspections", "Preventive maintenance", "Minor repairs", "Renovations"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
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
            Our <span className="text-primary-100">Services</span>
          </h2>
          <p className="text-lg text-text-200 max-w-2xl mx-auto">
            Comprehensive handyman services covering all aspects of property
            maintenance and repairs. Professional, reliable, and affordable
            solutions for your home or business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-100 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Service Image */}
              <div className="h-48 bg-cover bg-center bg-no-repeat relative" 
                style={{
                  backgroundImage: `url("images/${index === 0 ? 'Plumbing' : 
                                          index === 1 ? 'Electrical' : 
                                          index === 2 ? 'Painting' : 
                                          index === 3 ? 'Masonry' : 
                                          index === 4 ? 'Sewage' : 
                                          'General'}.jpg")`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                {/* Service Title */}
                <h3 className="text-xl font-semibold text-text-100 mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-text-200 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-text-200">
                      <div className="w-1.5 h-1.5 bg-accent-100 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/23057971431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-100 hover:bg-primary-200 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <span>Book Service</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
