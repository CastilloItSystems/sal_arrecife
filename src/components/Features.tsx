"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Versatilidad en la Cocina",
    description:
      "Ideal para todo tipo de preparaciones: carnes, pescados, ensaladas, postres y más. Su textura y sabor realzan cada platillo.",
    image: "🍳",
    color: "from-[#004A77] to-[#00B4D8]",
  },
  {
    title: "Propiedades Saludables",
    description:
      "Rico en minerales como magnesio, calcio y potasio. Apoya la función muscular y el equilibrio electrolítico del cuerpo.",
    image: "💪",
    color: "from-[#00B4D8] to-[#EF4444]",
  },
  {
    title: "Proceso Tradicional",
    description:
      "Evaporación solar natural que conserva todos los nutrientes del mar. Sin refinamiento industrial ni químicos añadidos.",
    image: "☀️",
    color: "from-[#EF4444] to-[#004A77]",
  },
];

export default function Features() {
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
      id="productos"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B4D8]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#004A77]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004A77] mb-4">
            Características Excepcionales
          </h2>
          <div className="h-1 w-24 bg-[#EF4444] mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lo que hace especial a nuestra sal marina
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : `opacity-0 ${
                      index % 2 === 0 ? "-translate-x-10" : "translate-x-10"
                    }`
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Tarjeta de icono */}
              <div className="w-full lg:w-1/2">
                <div
                  className={`relative group bg-linear-to-br ${feature.color} p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="absolute inset-0 bg-black/10 rounded-3xl group-hover:bg-black/5 transition-all duration-500" />
                  <div className="relative z-10 text-center">
                    <div className="text-9xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      {feature.image}
                    </div>
                  </div>
                  {/* Brillo animado */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                </div>
              </div>

              {/* Contenido de texto */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-3xl font-bold text-[#004A77] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-[#00B4D8] font-semibold group/link cursor-pointer">
                    <span className="group-hover/link:translate-x-2 transition-transform duration-300">
                      Conoce más
                    </span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
