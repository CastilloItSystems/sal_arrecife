import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Wifi, Cable } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal';

const Infrastructure: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl font-bold mb-4">Infraestructura IT</h1>
            <p className="text-xl text-slate-400 max-w-3xl">
              Construimos las carreteras digitales por donde viajan tus datos. 
              Instalaciones certificadas que duran décadas, no meses.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <StaggerItem className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
            <Cable className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-4">Cableado Estructurado</h3>
            <p className="text-slate-600 mb-4">
              Certificación Cat6/Cat6A/Fibra Óptica. Ordenamiento de Racks (Peinado profesional). Cumplimiento de normas ANSI/TIA.
            </p>
            <p className="text-sm text-slate-500 font-semibold">Partners: Panduit, Belden.</p>
          </StaggerItem>
          <StaggerItem className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
            <Wifi className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-4">Redes Inalámbricas</h3>
            <p className="text-slate-600 mb-4">
              Diseño de mapas de calor WiFi. Enlaces punto a punto de largo alcance (hasta 50km). Roaming corporativo sin interrupciones.
            </p>
            <p className="text-sm text-slate-500 font-semibold">Partners: Ubiquiti, Mikrotik.</p>
          </StaggerItem>
          <StaggerItem className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
            <Server className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-4">Servidores & Virtualización</h3>
            <p className="text-slate-600 mb-4">
              Implementación de clusters de alta disponibilidad. Configuración de Active Directory, DNS, DHCP. Virtualización con Hyper-V.
            </p>
            <p className="text-sm text-slate-500 font-semibold">Partners: Microsoft, Dell, HP.</p>
          </StaggerItem>
        </StaggerContainer>

        {/* Visual Showcase placeholder */}
        <Reveal className="rounded-2xl overflow-hidden relative h-96 group">
           <motion.img 
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.7 }}
             src="https://picsum.photos/seed/datacenter/1200/600" 
             alt="Maroil Rack" 
             className="w-full h-full object-cover" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>
           <div className="absolute bottom-0 left-0 p-10">
             <h2 className="text-3xl text-white font-bold mb-2">Estética y Funcionalidad</h2>
             <p className="text-slate-300 max-w-xl">
               Un rack desordenado es un riesgo de seguridad. En Castillo IT, nos obsesiona la estética del cableado porque refleja la calidad de la conexión.
               <br/><br/>
               <Link to="/portfolio" className="text-accent hover:text-white font-bold underline">Ver el caso Maroil Trading &rarr;</Link>
             </p>
           </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Infrastructure;
