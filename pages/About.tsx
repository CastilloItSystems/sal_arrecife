import React from 'react';
import { Truck, Search, ThumbsUp } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="bg-primary text-white py-20 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fish-net.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase">Sobre Nosotros</h1>
            <p className="text-xl text-secondary font-medium max-w-2xl mx-auto">
              Comprometidos con llevar la pureza del mar a su mesa, garantizando calidad en cada grano.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <Reveal className="mb-20 text-center max-w-4xl mx-auto">
          <p className="text-2xl text-slate-700 font-medium leading-relaxed">
            Somos una empresa dedicada a la <span className="text-primary font-black">producción y distribución</span> de diferentes tipos de sal. 
            Ofrecemos una variedad de productos adaptados a las necesidades del hogar y la industria gastronómica.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <StaggerItem className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-primary text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 text-primary">
              <Truck size={40} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Logística y Distribución</h3>
            <p className="text-slate-600 leading-relaxed">
              Contamos con una flota eficiente para asegurar que nuestro producto llegue a tiempo y en perfectas condiciones a cada rincón.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-secondary text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6 text-secondary">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Análisis de Calidad</h3>
            <p className="text-slate-600 leading-relaxed">
              Cada lote es sometido a rigurosas pruebas para cumplir con las normas sanitarias y garantizar la pureza, blancura y sequedad.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-accent text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 text-accent">
              <ThumbsUp size={40} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Atención al Cliente</h3>
            <p className="text-slate-600 leading-relaxed">
              La satisfacción de nuestros clientes en cada segmento del mercado es primordial. Escuchamos y mejoramos constantemente.
            </p>
          </StaggerItem>

        </StaggerContainer>

      </div>
    </div>
  );
};

export default About;