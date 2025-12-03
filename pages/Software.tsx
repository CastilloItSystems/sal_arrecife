import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Truck, Activity, Code, Smartphone, Bot, Zap, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import LeadForm from '../components/LeadForm';
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal';

const Software: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("Software");

  const openDemo = (interest: string) => {
    setSelectedInterest(interest);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <span className="text-accent font-bold tracking-wider uppercase text-sm">Desarrollo Propio</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 mt-2">Ecosistemas Digitales</h1>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
              No vendemos "paquetes genéricos". Creamos soluciones tailor-made que se adaptan a la operación real, con soporte local y tiempos de entrega récord.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* Refinery */}
        <Reveal className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div whileHover={{ rotate: 10 }} className="bg-blue-100 p-4 rounded-2xl w-fit mb-6 text-primary shadow-lg shadow-blue-500/20">
              <BarChart3 className="w-10 h-10" />
            </motion.div>
            <div className="flex items-baseline gap-4 mb-2">
               <h2 className="text-4xl font-bold text-slate-900">Castillo Refinery</h2>
               <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">V1 en 3 Meses</span>
            </div>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Administración integral de refinerías. Controla desde la entrada de gandolas, verificación de crudo y laboratorio, hasta las alertas y simulaciones financieras para saber cuándo vender.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-700 font-medium"><div className="w-2 h-2 bg-accent rounded-full mr-4 shadow-[0_0_10px_#3b82f6]"></div>Visualización de procesos tipo SCADA.</li>
              <li className="flex items-center text-slate-700 font-medium"><div className="w-2 h-2 bg-accent rounded-full mr-4 shadow-[0_0_10px_#3b82f6]"></div>Simulaciones de ventas según precio de mercado.</li>
              <li className="flex items-center text-slate-700 font-medium"><div className="w-2 h-2 bg-accent rounded-full mr-4 shadow-[0_0_10px_#3b82f6]"></div>Notificaciones Push (Windows/Mac/App) y Correo.</li>
            </ul>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => openDemo('Refinery')} className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-accent transition-colors">Solicitar Demo</motion.button>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <motion.img 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Refinery Dashboard" 
              className="relative z-10 rounded-2xl shadow-2xl border border-slate-200 transform transition-transform duration-500 group-hover:scale-[1.02]" 
            />
          </div>
        </Reveal>

        {/* Autosys */}
        <Reveal className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative group">
             <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <motion.img 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2146&auto=format&fit=crop" 
              alt="Autosys App" 
              className="relative z-10 rounded-2xl shadow-2xl border border-slate-200 transform transition-transform duration-500 group-hover:scale-[1.02]" 
            />
          </div>
          <div className="lg:w-1/2">
            <motion.div whileHover={{ rotate: -10 }} className="bg-amber-100 p-4 rounded-2xl w-fit mb-6 text-amber-600 shadow-lg shadow-amber-500/20">
              <Truck className="w-10 h-10" />
            </motion.div>
            <div className="flex items-baseline gap-4 mb-2">
                <h2 className="text-4xl font-bold text-slate-900">Castillo Autosys</h2>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Listo en 6 Semanas</span>
            </div>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Sistema eficiente para talleres mecánicos con módulo de órdenes de trabajo robusto. Detalla desde que el carro entra hasta que sale, con inventario, compra y venta.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-700 font-medium"><div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>Administración de puestos de servicio y mecánicos.</li>
              <li className="flex items-center text-slate-700 font-medium"><div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>Gestión detallada de repuestos e inventario.</li>
              <li className="flex items-center text-slate-700 font-medium"><div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>Facturación fiscal integrada.</li>
            </ul>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => openDemo('Autosys')} className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-amber-600 transition-colors">Solicitar Demo</motion.button>
          </div>
        </Reveal>

        {/* Gym / Biometrics */}
        <Reveal direction="up" className="bg-slate-900 rounded-3xl p-12 md:p-20 text-white overflow-hidden relative shadow-2xl">
           <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent/10 to-transparent"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <div className="bg-white/10 p-4 rounded-2xl w-fit mb-8 backdrop-blur-sm border border-white/10">
                 <Smartphone className="w-10 h-10 text-accent" />
               </div>
               <h2 className="text-4xl font-bold mb-6">Castillo Gym + Biometría</h2>
               <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                 Integración profunda con biométricos Hikvision. El sistema no solo abre puertas: registra métricas (hombre/mujer/edad) para tomar decisiones de negocio, como horarios de clases de spinning.
               </p>
               <div className="flex flex-wrap gap-4 mb-10">
                   <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">Biometría Hikvision</span>
                   <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">Validación Pago Móvil</span>
                   <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">Analítica de Datos</span>
               </div>
               <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => openDemo('Gym')} className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-colors inline-block shadow-lg shadow-blue-500/20">
                 Automatizar mi Acceso
               </motion.button>
             </div>
             
             {/* Metric Visual */}
             <div className="relative">
                <motion.div 
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-8 rounded-2xl shadow-xl transform lg:rotate-3 transition-transform"
                >
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-slate-400 font-mono text-sm uppercase">Tiempo de Validación</h3>
                        <Activity className="text-green-400" />
                    </div>
                    <div className="text-5xl font-bold text-white mb-2">Inmediata</div>
                    <p className="text-slate-500 text-sm">Validación de Pago Móvil en tiempo real.</p>
                    
                    <div className="mt-8 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-full animate-pulse"></div>
                    </div>
                </motion.div>
             </div>
           </div>
        </Reveal>

        {/* Branding/Web */}
        <Reveal className="bg-gradient-to-br from-slate-100 to-white border border-slate-200 rounded-3xl p-16 text-center shadow-lg">
           <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-full mb-8 text-white shadow-xl">
                <Layers size={32} />
           </div>
           <h2 className="text-4xl font-bold text-slate-900 mb-6">Diseño & Branding Corporativo</h2>
           <p className="max-w-2xl mx-auto text-slate-600 mb-10 text-lg">
             Desde la identidad visual (Logos, Paleta de Colores) hasta sitios web corporativos optimizados para SEO. Entregamos la cara digital que su empresa merece.
           </p>
           <div className="flex justify-center gap-4">
             <Link to="/portfolio" className="text-slate-900 border-b-2 border-slate-900 font-bold pb-1 hover:text-accent hover:border-accent transition-colors">
                Ver Portafolio de Diseño
             </Link>
           </div>
        </Reveal>

      </div>

      {/* Modals */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Solicitar Demo: ${selectedInterest}`}>
        <p className="text-slate-600 mb-4 text-sm">Déjenos sus datos y le mostraremos el sistema en funcionamiento.</p>
        <LeadForm defaultInterest={selectedInterest} onSuccess={() => setTimeout(() => setIsModalOpen(false), 2000)} />
      </Modal>

    </div>
  );
};

export default Software;
