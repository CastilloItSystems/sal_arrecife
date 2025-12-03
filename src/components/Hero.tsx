"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#004A77] via-[#00B4D8] to-[#004A77]"
    >
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-[#00B4D8] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-[#EF4444] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-20 left-1/2 w-72 h-72 bg-[#004A77] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Parallax effect */}
      <div
        className="absolute inset-0 bg-linear-to-b from-transparent to-black/20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fadeInDown">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Sal Arrecife
          </h1>
          <div className="h-1 w-32 bg-[#EF4444] mx-auto mb-8 rounded-full" />
        </div>

        <div
          className="animate-fadeInUp"
          style={{
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 font-light leading-relaxed">
            Pureza del Mar Caribe en cada cristal
          </p>
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Descubre la excelencia de nuestra sal marina artesanal, cosechada
            naturalmente con minerales esenciales para tu bienestar
          </p>
        </div>

        <div
          className="animate-scaleIn"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <button className="group relative px-8 py-4 bg-[#EF4444] text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Descubre Más</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Olas decorativas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 sm:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
}
