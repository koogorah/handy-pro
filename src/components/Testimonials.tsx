"use client";

import { motion } from "framer-motion";
import { FiStar, FiUser } from "react-icons/fi";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Curepipe",
      rating: 5,
      text: "Excellent service! Ikhlaas fixed our plumbing issue quickly and professionally. Very reasonable pricing and great attention to detail. Highly recommend Handy Pro!",
      service: "Plumbing Repair",
    },
    {
      name: "Jean-Pierre Laurent",
      location: "Port Louis",
      rating: 5,
      text: "Had some electrical work done at my office. The team was punctual, efficient, and very knowledgeable. Will definitely use their services again.",
      service: "Electrical Installation",
    },
    {
      name: "Sophie Ramdhun",
      location: "Quatre Bornes",
      rating: 5,
      text: "Painted our entire house and did an amazing job. The work was completed on time and the quality was outstanding. Very satisfied with the results!",
      service: "House Painting",
    },
    {
      name: "David Mootien",
      location: "Rose Hill",
      rating: 5,
      text: "Quick response to our emergency call. Fixed our sewage blockage the same day. Professional and courteous service throughout.",
      service: "Sewage System",
    },
    {
      name: "Anita Bissessur",
      location: "Vacoas",
      rating: 5,
      text: "Great masonry work on our garden wall. The team was skilled, clean, and completed the work to a high standard. Would recommend to anyone.",
      service: "Masonry Work",
    },
    {
      name: "Rajesh Seechurn",
      location: "Beau Bassin",
      rating: 5,
      text: "Regular maintenance service for our rental properties. Always reliable and thorough. Great value for money and excellent communication.",
      service: "Property Maintenance",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-accent-100 fill-current" : "text-bg-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-bg-100">
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
            What Our <span className="text-primary-100">Customers Say</span>
          </h2>
          <p className="text-lg text-text-200 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services across Mauritius.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-text-200 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <FiUser className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-100">{testimonial.name}</h4>
                  <p className="text-sm text-text-200">{testimonial.location}</p>
                  <p className="text-xs text-primary-100 font-medium">{testimonial.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-text-100 mb-4">
            Ready to Experience Our Quality Service?
          </h3>
          <p className="text-text-200 mb-8 max-w-2xl mx-auto">
            Join our satisfied customers across Mauritius. Contact us today for
            reliable, professional handyman services.
          </p>
          <a
            href="https://wa.me/23057971431"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-100 hover:bg-accent-200 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
