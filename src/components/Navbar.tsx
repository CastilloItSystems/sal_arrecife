"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <h1
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled
                  ? "bg-linear-to-r from-[#004A77] to-[#00B4D8] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              Sal Arrecife
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className={`font-medium transition-colors duration-300 hover:text-[#00B4D8] ${
                scrolled ? "text-[#004A77]" : "text-white"
              }`}
            >
              Inicio
            </a>
            <a
              href="#beneficios"
              className={`font-medium transition-colors duration-300 hover:text-[#00B4D8] ${
                scrolled ? "text-[#004A77]" : "text-white"
              }`}
            >
              Beneficios
            </a>
            <a
              href="#productos"
              className={`font-medium transition-colors duration-300 hover:text-[#00B4D8] ${
                scrolled ? "text-[#004A77]" : "text-white"
              }`}
            >
              Productos
            </a>
            <a
              href="#testimonios"
              className={`font-medium transition-colors duration-300 hover:text-[#00B4D8] ${
                scrolled ? "text-[#004A77]" : "text-white"
              }`}
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              className={`font-medium transition-colors duration-300 hover:text-[#00B4D8] ${
                scrolled ? "text-[#004A77]" : "text-white"
              }`}
            >
              Contacto
            </a>
            <button className="px-6 py-2 bg-[#EF4444] text-white font-semibold rounded-full hover:bg-[#EF4444]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Comprar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? "text-[#004A77]" : "text-white"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 bg-white rounded-lg p-4 shadow-lg">
              <a
                href="#inicio"
                className="text-[#004A77] font-medium hover:text-[#00B4D8] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#beneficios"
                className="text-[#004A77] font-medium hover:text-[#00B4D8] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beneficios
              </a>
              <a
                href="#productos"
                className="text-[#004A77] font-medium hover:text-[#00B4D8] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Productos
              </a>
              <a
                href="#testimonios"
                className="text-[#004A77] font-medium hover:text-[#00B4D8] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="#contacto"
                className="text-[#004A77] font-medium hover:text-[#00B4D8] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <button className="px-6 py-2 bg-[#EF4444] text-white font-semibold rounded-full hover:bg-[#EF4444]/90 transition-all duration-300">
                Comprar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
