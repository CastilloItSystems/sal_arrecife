import React from 'react';
import { Droplets, Heart, ChefHat, Sparkles, Scale, Star } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <ChefHat className="w-10 h-10 text-white" />,
      title: "1. Sabor Realzador",
      desc: "La capacidad más destacada de la sal. Resalta los sabores naturales, equilibra dulces y ácidos, y mejora la experiencia culinaria.",
      color: "bg-primary"
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white" />,
      title: "2. Conservante Natural",
      desc: "Utilizada durante siglos para prevenir bacterias. Reduce la humedad creando un entorno inhóspito para microorganismos, prolongando la vida útil.",
      color: "bg-secondary"
    },
    {
      icon: <Star className="w-10 h-10 text-white" />,
      title: "3. Textura y Apariencia",
      desc: "Agrega textura crujiente (sal gruesa en un pretzel) o elegancia visual (sal de escamas en un filete).",
      color: "bg-accent"
    },
    {
      icon: <Droplets className="w-10 h-10 text-white" />,
      title: "4. Equilibrio Hídrico",
      desc: "Esencial para mantener el equilibrio de agua en el cuerpo. Regula la cantidad de agua dentro y alrededor de las células.",
      color: "bg-slate-800"
    },
    {
      icon: <Heart className="w-10 h-10 text-white" />,
      title: "5. Aporte de Minerales",
      desc: "Contiene SODIO (vital para impulsos nerviosos/función muscular) y IODURO (necesario para hormonas tiroideas y metabolismo).",
      color: "bg-blue-600"
    }
  ];

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-6">Características y Beneficios</h1>
            <p className="text-xl text-secondary font-medium">
              Más que un condimento, es un mineral esencial para la vida y la cocina.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <StaggerContainer className="space-y-8">
          {benefits.map((item, idx) => (
            <StaggerItem key={idx} className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-shadow">
               <div className={`${item.color} p-8 md:w-32 flex items-center justify-center flex-shrink-0`}>
                 {item.icon}
               </div>
               <div className="p-8 flex flex-col justify-center">
                 <h3 className="text-2xl font-black text-slate-800 mb-3">{item.title}</h3>
                 <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
               </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal className="mt-20 text-center">
            <h3 className="text-3xl font-black text-primary mb-8">Ventaja Nutricional Adicional</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                    <h4 className="text-2xl font-bold text-primary mb-4">Yodo</h4>
                    <p className="text-slate-700">
                        Esencial para el buen funcionamiento de la glándula tiroides, que regula el metabolismo y crecimiento. Ayuda a prevenir el bocio.
                    </p>
                </div>
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                    <h4 className="text-2xl font-bold text-primary mb-4">Flúor</h4>
                    <p className="text-slate-700">
                        Conocido por prevenir caries dentales. Mejora la salud bucal y fortalece el esmalte dental.
                    </p>
                </div>
            </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Benefits;