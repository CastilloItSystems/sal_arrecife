import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Utensils, Star, Check } from 'lucide-react';
import Modal from '../components/Modal';
import LeadForm from '../components/LeadForm';
import { Reveal } from '../components/Reveal';

const Products: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Sal Arrecife");

  const openOrder = (product: string) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen font-sans">
      
      {/* Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <Reveal>
             <h1 className="text-5xl font-black uppercase mb-4 tracking-tight">Nuestros Productos</h1>
             <p className="text-xl text-secondary font-medium">Variedad y calidad para cada necesidad culinaria.</p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
        
        {/* Sal Fina */}
        <Reveal className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 translate-x-20"></div>
           
           <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="lg:w-1/2">
                 <div className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-full font-bold text-sm mb-6 shadow-lg">
                    <Star size={16} className="mr-2 fill-white" /> EL CLÁSICO DEL HOGAR
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Sal Comestible Fina</h2>
                 <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Conocida como sal de mesa, es el ingrediente básico que no puede faltar. 
                    Nuestra versión fina destaca por su fluidez, blancura y disolución perfecta.
                 </p>
                 
                 <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                    <h3 className="font-extrabold text-primary mb-4 flex items-center"><ChefHat className="mr-2"/> USOS RECOMENDADOS</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                       {['Sazonar Carnes y Aves', 'Sopas y Verduras', 'Elaboración de Pan', 'Quesos y Maduración'].map(uso => (
                          <li key={uso} className="flex items-center text-slate-700 font-medium">
                             <Check className="text-secondary mr-2 w-5 h-5" /> {uso}
                          </li>
                       ))}
                    </ul>
                 </div>
                 
                 <div className="space-y-2 mb-8 text-sm text-slate-500">
                    <p>• Contenido Mineral: Sodio, Yodo y Flúor.</p>
                    <p>• Ayuda a la conservación de alimentos (Deshidratación osmótica).</p>
                 </div>

                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => openOrder('Sal Fina')}
                   className="bg-primary hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl"
                 >
                   Solicitar Cotización Fina
                 </motion.button>
              </div>

              {/* Image Placeholder */}
              <div className="lg:w-1/2 flex justify-center">
                 <motion.div 
                   whileHover={{ rotate: 5 }}
                   className="relative w-80 h-96 bg-gradient-to-br from-slate-100 to-white rounded-3xl shadow-inner border-8 border-white flex items-center justify-center"
                 >
                    <div className="text-center p-8">
                        <div className="text-6xl mb-4">🧂</div>
                        <h3 className="font-black text-3xl text-primary font-handwriting italic -rotate-6">Sal Fina</h3>
                        <p className="text-accent font-bold mt-2">100% Natural</p>
                        <div className="mt-8 bg-secondary text-white font-bold py-1 px-4 rounded-full inline-block">1 Kg / 500g</div>
                    </div>
                    {/* Badge */}
                    <div className="absolute -top-6 -right-6 bg-accent text-white w-20 h-20 rounded-full flex items-center justify-center font-black text-center text-xs shadow-lg rotate-12">
                       CON<br/>YODO Y<br/>FLÚOR
                    </div>
                 </motion.div>
              </div>
           </div>
        </Reveal>

        {/* Sal Gruesa */}
        <Reveal className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1/2 h-full bg-accent/5 -skew-x-12 -translate-x-20"></div>
           
           <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              
              {/* Image Placeholder */}
              <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
                 <motion.div 
                   whileHover={{ rotate: -5 }}
                   className="relative w-80 h-96 bg-gradient-to-br from-slate-100 to-white rounded-3xl shadow-inner border-8 border-white flex items-center justify-center"
                 >
                    <div className="text-center p-8">
                        <div className="text-6xl mb-4">🥩</div>
                        <h3 className="font-black text-3xl text-primary font-handwriting italic -rotate-6">Parrillera</h3>
                        <p className="text-accent font-bold mt-2">Cristales Gruesos</p>
                        <div className="mt-8 bg-accent text-white font-bold py-1 px-4 rounded-full inline-block">1 Kg / 500g</div>
                    </div>
                 </motion.div>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2">
                 <div className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-full font-bold text-sm mb-6 shadow-lg">
                    <Utensils size={16} className="mr-2 fill-white" /> ESPECIAL ASADOS
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Sal Gruesa Parrillera</h2>
                 <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Cristales más grandes que estallan en sabor. Especialmente adecuada para barbacoas, 
                    pero también excelente para decorar platos o conservar alimentos.
                 </p>
                 
                 <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                    <h3 className="font-extrabold text-primary mb-4 flex items-center"><ChefHat className="mr-2"/> USOS RECOMENDADOS</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                       {['Sazonar Carnes (BBQ)', 'Condimento Ensaladas', 'Decoración de Platos', 'Limpieza Utensilios'].map(uso => (
                          <li key={uso} className="flex items-center text-slate-700 font-medium">
                             <Check className="text-accent mr-2 w-5 h-5" /> {uso}
                          </li>
                       ))}
                    </ul>
                 </div>
                 
                 <div className="space-y-2 mb-8 text-sm text-slate-500">
                    <p>• Textura crujiente que mejora la experiencia.</p>
                    <p>• Ideal para deshidratar carnes o pescados.</p>
                 </div>

                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => openOrder('Sal Gruesa')}
                   className="bg-accent hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl"
                 >
                   Solicitar Cotización Parrillera
                 </motion.button>
              </div>

           </div>
        </Reveal>

      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Pedido: ${selectedProduct}`}>
        <LeadForm defaultInterest={selectedProduct} onSuccess={() => setTimeout(() => setIsModalOpen(false), 2000)} />
      </Modal>

    </div>
  );
};

export default Products;