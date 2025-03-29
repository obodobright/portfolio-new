"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header
      className={`fixed w-full backdrop-blur-md shadow-lg z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-white/95 dark:bg-gray-900/95" : "py-6 bg-white/90 dark:bg-gray-900/90"
      }`}
    >
      <div className="border- border-gray-100 dark:border-gray-800">
        <nav className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-2xl">O</span>
              </div>
              <div className="text-2xl font-bold">
                <span className="gradient-text">Obodo</span>
                <span className="text-gray-700 dark:text-gray-300 ml-2">Bright</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              {["about", "projects", "skills", "contact"].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  onClick={() => handleSectionClick(section)}
                  className={`nav-link px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 relative group
                    ${
                      activeSection === section
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }
                  `}
                >
                  <span className="relative z-10 capitalize">{section}</span>
                  {activeSection === section && (
                    <span className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-full scale-100 animate-scale-in"></span>
                  )}
                  <span className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
              ))}
              <button className="ml-6 px-8 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5">
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1vYSHSqqL4BAyoeLAdQ0XJ38z8m0Aku5l/view?usp=sharing"
                >
                  Resume
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
