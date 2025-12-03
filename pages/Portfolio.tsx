import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveHorizontal, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal';

// --- COMPONENTS ---

interface BeforeAfterProps {
  beforeImg: string;
  afterImg: string;
  title: string;
  description: string;
  tag: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImg, afterImg, title, description, tag }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const onMouseDown = () => (isDragging.current = true);
  const onMouseUp = () => (isDragging.current = false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  // Allow clicking anywhere to jump
  const onClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 group"
    >
       {/* Header */}
       <div className="p-6 border-b border-slate-50 bg-slate-50/50">
          <div className="flex justify-between items-start mb-2">
            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase rounded-full tracking-wider">
                {tag}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <p className="text-slate-500 text-sm mt-2">{description}</p>
       </div>

       {/* Slider Area */}
       <div 
         className="relative h-[400px] w-full cursor-col-resize select-none overflow-hidden"
         ref={containerRef}
         onMouseDown={onMouseDown}
         onMouseUp={onMouseUp}
         onMouseLeave={onMouseUp}
         onMouseMove={onMouseMove}
         onTouchMove={onTouchMove}
         onClick={onClick}
       >
          {/* Image 2 (After) - Background */}
          <img 
            src={afterImg} 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover" 
            draggable={false}
          />
          <div className="absolute top-4 right-4 bg-slate-900/80 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-md z-10">
             DESPUÉS (CERTIFICADO)
          </div>

          {/* Image 1 (Before) - Clipped */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
             <img 
               src={beforeImg} 
               alt="Before" 
               className="absolute inset-0 w-full h-full object-cover" 
               draggable={false}
             />
             <div className="absolute top-4 left-4 bg-red-600/80 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-md z-10">
               ANTES
             </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-accent">
               <MoveHorizontal size={20} />
            </div>
          </div>
       </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---

const Portfolio: React.FC = () => {
  
  // Data for Visual Transformations
  const transformations = [
    {
      title: "Infraestructura Maroil Trading",
      description: "Transformación total del piso 10 Torre BVC. Cableado estructurado Panduit y Servidores Hyper-V.",
      tag: "Ejecución: 5 Semanas",
      beforeImg: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=2070&auto=format&fit=crop", // Messy wires
      afterImg: "https://images.unsplash.com/photo-1558494949-efc527651087?q=80&w=2070&auto=format&fit=crop"  // Clean rack
    },
    {
      title: "Centro de Control Industrial",
      description: "Implementación de videowall y puestos de operación para monitoreo SCADA.",
      tag: "Seguridad & Control",
      beforeImg: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", // Dark old office
      afterImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"  // Modern bright office/dashboard
    }
  ];

  // Data for Detailed Grid
  const portfolioItems: PortfolioItem[] = [
    {
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      title: 'Castillo Refinery - Planta de Procesamiento',
      desc: 'Sistema integral para control de gandolas, laboratorio y simulaciones financieras.',
      moreInfo: 'Desarrollamos la Versión 1.0 operativa en solo 3 meses. El sistema controla desde la entrada del crudo hasta el despacho, integrando notificaciones push y simulaciones de ventas según el precio del mercado.',
      tags: ['Refinería', '3 Meses', 'SCADA']
    },
    {
      img: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2146&auto=format&fit=crop',
      title: 'Castillo Autosys - Talleres Mecánicos',
      desc: 'Gestión completa de órdenes de trabajo y control de mecánicos.',
      moreInfo: 'Implementado en 6 semanas. Administra los puestos de servicio, inventario de repuestos y eficiencia de mecánicos. Todo el ciclo de reparación digitalizado.',
      tags: ['Automotriz', '6 Semanas', 'Inventario']
    },
    {
      img: 'https://images.unsplash.com/photo-1516549655169-df83a0926e97?q=80&w=2070&auto=format&fit=crop',
      title: 'Clínica Cimer - Cableado Estructurado',
      desc: 'Infraestructura de red certificada y control de acceso.',
      moreInfo: 'Ejecución completa en 6 semanas. Instalación de cableado estructurado Panduit y sistema de gestión hospitalaria integrado.',
      tags: ['Salud', 'Panduit', '6 Semanas']
    },
    {
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', 
      title: 'Castillo Gym - Biometría Inteligente',
      desc: 'Control de acceso integrado con análisis de datos demográficos.',
      moreInfo: 'Integración con biométricos Hikvision. El sistema mide el flujo de personas por edad y género para tomar decisiones comerciales (ej. clases de spinning). Validación de pago móvil inmediata.',
      tags: ['Biometría', 'Hikvision', 'Analytics']
    },
    {
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', 
      title: 'Maroil Trading - Torre BVC',
      desc: 'Habilitación completa del piso 10: Firewall, VLANs y Servidores.',
      moreInfo: 'Proyecto llave en mano entregado en 5 semanas. Desde la seguridad perimetral con Fortinet hasta la conexión de todos los puestos de trabajo con Ubiquiti.',
      tags: ['Maroil', '5 Semanas', 'Fortinet']
    },
    {
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
      title: 'Defensa Anti-Ransomware Banca',
      desc: 'Auditoría de seguridad y refuerzo de la infraestructura digital.',
      moreInfo: 'Implementación de Firewall de última generación y pruebas de penetración. Evitó ataques y aseguró la data sensible.',
      tags: ['Banca', 'Ciberseguridad', 'Firewall']
    },
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <span className="text-accent font-bold tracking-wider uppercase text-sm">Nuestra Evidencia</span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 mt-2">Hechos, no palabras.</h1>
            <p className="text-xl text-slate-400 max-w-3xl">
              Habilitamos pisos corporativos en 5 semanas y desarrollamos sistemas industriales en 3 meses.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
        {/* SECTION 1: VISUAL TRANSFORMATIONS (Before/After) */}
        <div>
          <Reveal className="flex items-center mb-12">
            <div className="p-3 bg-slate-900 rounded-xl mr-4 text-white">
               <MoveHorizontal size={24} />
            </div>
            <div>
               <h2 className="text-3xl font-bold text-slate-900">Transformaciones de Infraestructura</h2>
               <p className="text-slate-500">Deslice para ver el orden que traemos al caos.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {transformations.map((item, idx) => (
               <BeforeAfterSlider 
                 key={idx}
                 beforeImg={item.beforeImg}
                 afterImg={item.afterImg}
                 title={item.title}
                 description={item.description}
                 tag={item.tag}
               />
             ))}
          </div>
        </div>

        {/* SECTION 2: DETAILED CASE STUDIES (Grid) */}
        <div>
          <Reveal className="flex items-center mb-12">
             <div className="p-3 bg-slate-900 rounded-xl mr-4 text-white">
               <CheckCircle2 size={24} />
             </div>
             <div>
               <h2 className="text-3xl font-bold text-slate-900">Casos Reales en Anzoátegui</h2>
               <p className="text-slate-500">Resultados comprobables con clientes locales.</p>
            </div>
          </Reveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <StaggerItem key={idx} className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10 duration-500"></div>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Tags Overlay */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                    {item.tags?.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded backdrop-blur-sm shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative bg-white flex flex-col h-[320px]">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm line-clamp-3">{item.desc}</p>
                  
                  <div className="flex-grow"></div>

                  {/* Expandable info styled as a quiet reveal */}
                  <div className="pt-4 border-t border-slate-100">
                     <p className="text-xs text-slate-500 mb-4 line-clamp-4 opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.moreInfo}
                     </p>
                     <Link to="/contacto" className="text-accent font-bold text-sm hover:underline flex items-center group/link">
                        Solicitar Similar <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform"/>
                     </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom CTA */}
        <Reveal className="mt-16 bg-accent rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400"></div>
           <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -left-20 -bottom-20 w-64 h-64 bg-white rounded-full blur-[80px] opacity-20"></motion.div>
           
           <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">¿Tu empresa es el próximo caso de éxito?</h2>
              <p className="text-blue-50 max-w-2xl mx-auto mb-8 text-lg">
                La tecnología no debería ser un gasto, sino una ventaja competitiva. Permítenos demostrarte la diferencia.
              </p>
              <Link to="/contacto" className="inline-flex items-center bg-white text-accent px-10 py-4 rounded-xl font-bold text-lg transition-all hover:bg-slate-50 shadow-xl hover:scale-105">
                Hablar con un Ingeniero <ArrowRight className="ml-2" />
              </Link>
           </div>
        </Reveal>

      </div>
    </div>
  );
};

export default Portfolio;
