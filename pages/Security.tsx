import React from 'react';
import { Eye, Fingerprint, Cpu, ShieldAlert, Lock, Globe, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal';

const Security: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
       <div className="relative bg-slate-950 text-white py-24 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950 opacity-80"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              Protección Activa 24/7
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Seguridad Integral</h1>
            <p className="text-xl text-slate-400 max-w-3xl">
              Protección total en dos frentes: El perímetro físico de sus instalaciones y la integridad digital de sus datos.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Physical Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
           
           {/* CCTV */}
           <Reveal direction="right" className="group">
             <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-8">
                  <div className="bg-red-100 p-4 rounded-2xl mr-6">
                    <Eye className="w-8 h-8 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">CCTV Inteligente</h2>
                </div>
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop" 
                  alt="CCTV Monitoring" 
                  className="rounded-2xl shadow-md mb-8 w-full h-48 object-cover" 
                />
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Más que grabar, nuestros sistemas analizan. Implementamos cámaras con reconocimiento de placas (LPR), detección facial y alertas de intrusión.
                </p>
                <ul className="space-y-3 text-slate-700 font-medium">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>Monitoreo remoto vía App.</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>Cámaras térmicas industriales.</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>NVRs con redundancia RAID.</li>
                </ul>
             </div>
           </Reveal>

           {/* Access Control */}
           <Reveal direction="left" className="group" delay={0.2}>
             <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-8">
                  <div className="bg-blue-100 p-4 rounded-2xl mr-6">
                    <Fingerprint className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Control de Acceso</h2>
                </div>
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="https://images.unsplash.com/photo-1625314887424-9f190599bd56?q=80&w=1974&auto=format&fit=crop" 
                  alt="Biometric Scanner" 
                  className="rounded-2xl shadow-md mb-8 w-full h-48 object-cover" 
                />
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Elimine las llaves y tarjetas prestadas. Controle quién entra y sale de sus instalaciones con registro horario exacto para nómina.
                </p>
                <ul className="space-y-3 text-slate-700 font-medium">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>Huella dactilar y Rostro 3D.</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>Torniquetes y barreras vehiculares.</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>Reportes automáticos de asistencia.</li>
                </ul>
             </div>
           </Reveal>
        </div>

        {/* Cybersecurity Section - The "Command Center" Look */}
        <Reveal direction="up" className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white mb-24 shadow-2xl relative overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-700 pb-8">
                <div>
                    <div className="flex items-center mb-4">
                        <ShieldAlert className="w-10 h-10 text-accent mr-4" />
                        <h2 className="text-4xl font-bold">Ciberseguridad Ofensiva</h2>
                    </div>
                    <p className="text-slate-400 max-w-xl">Protegemos sus activos digitales con la misma rigurosidad que sus activos físicos.</p>
                </div>
                <motion.button whileHover={{ scale: 1.05 }} className="mt-6 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center">
                    <Lock size={18} className="mr-2"/> Solicitar Pentest
                </motion.button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div whileHover={{ y: -5 }} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-accent/50 transition-colors group">
                    <Server className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3">Firewalls Next-Gen</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                    Implementación de Fortinet y Palo Alto Networks. Inspección profunda de paquetes y VPNs encriptadas para trabajo remoto seguro.
                    </p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-red-500/50 transition-colors group">
                    <Globe className="w-8 h-8 text-red-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3">Ethical Hacking</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                    Simulamos ataques reales (Pen-testing) para encontrar agujeros de seguridad en su red antes que los criminales.
                    </p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors group">
                    <Cpu className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3">Anti-Ransomware</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                    Despliegue de EDR (Endpoint Detection & Response) y estrategias de backup inmutable en nube para recuperación inmediata.
                    </p>
                </motion.div>
            </div>
          </div>
        </Reveal>

        {/* IoT Section */}
        <Reveal className="bg-white p-10 md:p-16 rounded-3xl border border-slate-200 shadow-xl flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 pr-8">
            <h3 className="text-3xl font-bold mb-6 flex items-center text-slate-900">
              <Cpu className="mr-4 text-purple-600 w-8 h-8" /> Integración IoT & Domótica
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Conectamos el mundo físico con el digital. Sensores de temperatura para cuartos fríos, control de iluminación automatizado para oficinas y medición de consumo eléctrico en tiempo real. 
            </p>
            <p className="text-slate-900 font-semibold">
                Todo centralizado en un dashboard a medida.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
             <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex justify-between items-center mb-4 border-b border-purple-200 pb-2">
                    <span className="text-purple-900 font-bold">Temperatura A.C.</span>
                    <span className="text-purple-600 font-mono">22°C</span>
                </div>
                <div className="flex justify-between items-center mb-4 border-b border-purple-200 pb-2">
                    <span className="text-purple-900 font-bold">Iluminación</span>
                    <span className="text-green-600 font-mono">80%</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-purple-900 font-bold">Puerta Srv.</span>
                    <span className="text-red-600 font-mono text-xs bg-red-100 px-2 py-1 rounded">CERRADO</span>
                </div>
             </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default Security;
