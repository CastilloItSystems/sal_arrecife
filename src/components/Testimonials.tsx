"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "María González",
    role: "Chef Profesional",
    text: "La Sal Arrecife ha transformado mis platillos. La diferencia en sabor es notable y mis clientes lo notan.",
    rating: 5,
    avatar: "👩‍🍳",
  },
  {
    name: "Carlos Mendoza",
    role: "Nutricionista",
    text: "Recomiendo Sal Arrecife a todos mis pacientes por su riqueza mineral natural y sus beneficios para la salud.",
    rating: 5,
    avatar: "👨‍⚕️",
  },
  {
    name: "Ana Rodríguez",
    role: "Ama de Casa",
    text: "Desde que uso Sal Arrecife, toda mi familia nota la diferencia. ¡Es simplemente la mejor sal que he probado!",
    rating: 5,
    avatar: "👩‍🦰",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#00B4D8] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#EF4444] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004A77] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="h-1 w-24 bg-[#00B4D8] mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de personas confían en Sal Arrecife para su cocina diaria
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carrusel de testimonios */}
          <div className="relative h-[400px] sm:h-[350px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0 scale-100"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full scale-95"
                    : "opacity-0 translate-x-full scale-95"
                }`}
              >
                <div className="bg-linear-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100 h-full flex flex-col justify-between">
                  {/* Comillas decorativas */}
                  <div className="text-6xl text-[#00B4D8]/20 font-serif leading-none mb-4">
                    &ldquo;
                  </div>

                  {/* Texto del testimonio */}
                  <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 grow">
                    {testimonial.text}
                  </p>

                  {/* Estrellas */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#EF4444] text-2xl">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Información del autor */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-linear-to-br from-[#004A77] to-[#00B4D8] rounded-full flex items-center justify-center text-3xl shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-[#004A77] text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-12 bg-[#00B4D8]"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
