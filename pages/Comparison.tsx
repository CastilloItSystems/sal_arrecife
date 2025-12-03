import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal';

const Comparison: React.FC = () => {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      
      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-6">Diferencias con la Competencia</h1>
            <p className="text-xl text-secondary font-medium">
              Por qué elegir Sal Arrecife es la decisión inteligente.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Sal Arrecife Card */}
          <Reveal direction="right" className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-primary transform hover:-translate-y-2 transition-transform">
             <div className="bg-primary p-8 text-center">
                <h2 className="text-3xl font-black text-white uppercase tracking-wider">Sal Arrecife</h2>
                <div className="mt-4 bg-white/10 inline-block px-4 py-1 rounded-full text-secondary font-bold">LA MEJOR OPCIÓN</div>
             </div>
             <div className="p-10 bg-blue-50/50 h-full">
                <ul className="space-y-6">
                   <li className="flex items-start">
                      <CheckCircle className="text-green-500 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg font-bold text-slate-800">Refinada y sin humedad. Totalmente seca.</span>
                   </li>
                   <li className="flex items-start">
                      <CheckCircle className="text-green-500 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg font-bold text-slate-800">Sal más blanca y pura.</span>
                   </li>
                   <li className="flex items-start">
                      <CheckCircle className="text-green-500 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg font-bold text-slate-800">Empaque totalmente transparente. No ocultamos nada.</span>
                   </li>
                   <li className="flex items-start">
                      <CheckCircle className="text-green-500 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg font-bold text-slate-800">Mejor presentación y variedad (1 Kg y 1/2 Kg).</span>
                   </li>
                   <li className="flex items-start">
                      <CheckCircle className="text-green-500 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg font-bold text-slate-800">Enriquecida con Yodo y Flúor (Normativa Cumplida).</span>
                   </li>
                   <li className="flex items-start">
                      <CheckCircle className="text-green-500 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg font-bold text-slate-800">Precios competitivos calidad-precio.</span>
                   </li>
                </ul>
             </div>
          </Reveal>

          {/* Competencia Card */}
          <Reveal direction="left" className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200 transform hover:-translate-y-2 transition-transform opacity-90">
             <div className="bg-slate-800 p-8 text-center">
                <h2 className="text-3xl font-black text-white uppercase tracking-wider">Otras Marcas</h2>
                <div className="mt-4 bg-white/10 inline-block px-4 py-1 rounded-full text-slate-300 font-bold">COMPETENCIA</div>
             </div>
             <div className="p-10 h-full">
                <ul className="space-y-6">
                   <li className="flex items-start">
                      <XCircle className="text-red-400 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg text-slate-600">Suelen tener dureza y no fluyen (Húmedas).</span>
                   </li>
                   <li className="flex items-start">
                      <XCircle className="text-red-400 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg text-slate-600">Color grisáceo o amarillento (Menos pureza).</span>
                   </li>
                   <li className="flex items-start">
                      <XCircle className="text-red-400 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg text-slate-600">Dibujos y logos grandes tapan el producto.</span>
                   </li>
                   <li className="flex items-start">
                      <XCircle className="text-red-400 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg text-slate-600">Poca variedad de productos y presentaciones.</span>
                   </li>
                   <li className="flex items-start">
                      <XCircle className="text-red-400 w-8 h-8 mr-4 flex-shrink-0" />
                      <span className="text-lg text-slate-600">Algunas marcas no aclaran contenido de Yodo/Flúor.</span>
                   </li>
                </ul>
             </div>
          </Reveal>

        </div>

      </div>
    </div>
  );
};

export default Comparison;