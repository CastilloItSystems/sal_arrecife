"use client";

import { useEffect, useRef, useState } from "react";

const products = [
  {
    name: "Sal Fina",
    description:
      "Perfecta para uso diario en cocina y mesa. Textura suave que se disuelve rápidamente.",
    features: ["Grano fino", "Disolución rápida", "Ideal para hornear"],
    price: "Desde $50 MXN",
    image: "🧂",
    popular: false,
  },
  {
    name: "Sal Gruesa",
    description:
      "Ideal para carnes, parrillas y conservas. Cristales grandes con textura crujiente.",
    features: [
      "Grano grueso",
      "Perfecta para parrillas",
      "Alto contenido mineral",
    ],
    price: "Desde $60 MXN",
    image: "🌊",
    popular: true,
  },
  {
    name: "Sal en Escamas",
    description:
      "Premium gourmet para finalizar platillos. Textura única y sabor excepcional.",
    features: [
      "Textura escamosa",
      "Finalización gourmet",
      "Presentación elegante",
    ],
    price: "Desde $120 MXN",
    image: "✨",
    popular: false,
  },
  {
    name: "Sal con Especias",
    description:
      "Mezclas especiales con hierbas y especias naturales para realzar tus platillos.",
    features: ["Mezclas únicas", "Sabores variados", "Sin conservadores"],
    price: "Desde $80 MXN",
    image: "🌿",
    popular: false,
  },
  {
    name: "Sal de Grano Medio",
    description:
      "Versátil para todo tipo de preparaciones. Balance perfecto entre fino y grueso.",
    features: ["Grano medio", "Uso versátil", "Ideal para sazonar"],
    price: "Desde $55 MXN",
    image: "💎",
    popular: false,
  },
  {
    name: "Sal Artesanal Premium",
    description:
      "Edición limitada cosechada a mano. La máxima expresión de nuestra sal marina.",
    features: ["Cosecha manual", "Edición limitada", "Calidad premium"],
    price: "Desde $200 MXN",
    image: "👑",
    popular: false,
  },
];

export default function Products() {
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B4D8]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EF4444]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#004A77] mb-4">
            Nuestros Productos
          </h2>
          <div className="h-1 w-24 bg-[#00B4D8] mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra línea completa de sal marina natural, cada una con
            características únicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                product.popular
                  ? "border-[#EF4444]"
                  : "border-gray-100 hover:border-[#00B4D8]"
              } hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Badge Popular */}
              {product.popular && (
                <div className="absolute -top-4 right-8 bg-[#EF4444] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Más Popular
                </div>
              )}

              {/* Efecto de gradiente hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${
                  product.popular
                    ? "from-[#EF4444]/0 to-[#EF4444]/0 group-hover:from-[#EF4444]/5 group-hover:to-[#EF4444]/10"
                    : "from-[#004A77]/0 to-[#00B4D8]/0 group-hover:from-[#004A77]/5 group-hover:to-[#00B4D8]/5"
                } rounded-3xl transition-all duration-500`}
              />

              <div className="relative z-10">
                {/* Icono del producto */}
                <div className="text-7xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>

                {/* Nombre y precio */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-[#004A77] mb-2 group-hover:text-[#00B4D8] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-[#EF4444]">
                    {product.price}
                  </p>
                </div>

                {/* Descripción */}
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {product.description}
                </p>

                {/* Características */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-[#00B4D8] mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón */}
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105 ${
                    product.popular
                      ? "bg-[#EF4444] text-white hover:bg-[#EF4444]/90 shadow-lg hover:shadow-xl"
                      : "bg-[#004A77] text-white hover:bg-[#00B4D8] shadow-lg hover:shadow-xl"
                  }`}
                >
                  Comprar Ahora
                </button>
              </div>

              {/* Brillo decorativo */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 rounded-3xl" />
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Necesitas una presentación especial o pedidos al mayoreo?
          </p>
          <button className="px-8 py-4 bg-white border-2 border-[#004A77] text-[#004A77] font-semibold rounded-full hover:bg-[#004A77] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
            Contactar a Ventas
          </button>
        </div>
      </div>
    </section>
  );
}
