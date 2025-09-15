"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HP</span>
            </div>
            <span className="text-xl font-bold text-text-100">Handy Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-text-200 hover:text-primary-100 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/23057971431"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-100 hover:bg-accent-200 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-text-100 hover:text-primary-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-bg-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-text-200 hover:text-primary-100 hover:bg-bg-100 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/23057971431"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-accent-100 hover:bg-accent-200 text-white px-4 py-2 rounded-full font-semibold transition-colors duration-200 mt-4"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
