"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: "💎",
    title: "100% Natural",
    description:
      "Sin aditivos ni procesos químicos, pura sal marina del Caribe",
  },
  {
    icon: "⚡",
    title: "Rica en Minerales",
    description: "Contiene más de 80 minerales esenciales para tu salud",
  },
  {
    icon: "🌊",
    title: "Cosecha Artesanal",
    description: "Proceso tradicional que preserva todas sus propiedades",
  },
  {
    icon: "✨",
    title: "Sabor Superior",
    description: "Realza el sabor natural de tus alimentos",
  },
  {
    icon: "🌿",
    title: "Ecológica",
    description: "Producción sustentable que respeta el medio ambiente",
  },
  {
    icon: "❤️",
    title: "Bienestar",
    description: "Contribuye al equilibrio mineral de tu organismo",
  },
];

export default function Benefits() {
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
      id="beneficios"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004A77] mb-4">
            ¿Por qué elegir Sal Arrecife?
          </h2>
          <div className="h-1 w-24 bg-[#00B4D8] mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beneficios únicos que hacen de nuestra sal la mejor elección para tu
            cocina
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#00B4D8] hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Efecto de gradiente hover */}
              <div className="absolute inset-0 bg-linear-to-br from-[#004A77]/0 to-[#00B4D8]/0 group-hover:from-[#004A77]/5 group-hover:to-[#00B4D8]/5 rounded-2xl transition-all duration-500" />

              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#004A77] mb-3 group-hover:text-[#00B4D8] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Borde animado */}
              <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-[#00B4D8] to-[#EF4444] w-0 group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
