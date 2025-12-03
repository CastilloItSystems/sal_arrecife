"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-linear-to-br from-[#004A77] via-[#00B4D8] to-[#004A77]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-[#EF4444]/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Transforma tu Cocina
          </h2>
          <div className="h-1 w-32 bg-[#EF4444] mx-auto mb-8 rounded-full" />
          <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Únete a miles de chefs y familias que han descubierto la diferencia
            de cocinar con Sal Arrecife
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-8 py-4 bg-[#EF4444] text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#EF4444]/50">
            <span className="relative z-10 flex items-center gap-2">
              Comprar Ahora
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>

          <button className="group relative px-8 py-4 bg-white text-[#004A77] text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10 flex items-center gap-2">
              Conoce Más
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#00B4D8]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/80">Clientes Satisfechos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-white/80">Natural y Pura</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">80+</div>
            <div className="text-white/80">Minerales Esenciales</div>
          </div>
        </div>
      </div>
    </section>
  );
}
