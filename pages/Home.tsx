import React, { useState } from 'react';
import { 
    ArrowRight, Droplets, Sun, Star, ShieldCheck, ChefHat, Check, 
    Utensils, Truck, Search, ThumbsUp, Sparkles, Heart, XCircle, 
    CheckCircle, MapPin, Phone, Mail, Factory, ShoppingBag
} from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import LeadForm from '../components/LeadForm';
import OceanBackground from '../components/OceanBackground';
import { Reveal, StaggerContainer, StaggerItem } from '../components/Reveal';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("General");

  const openModal = (interest: string) => {
    setSelectedInterest(interest);
    setIsModalOpen(true);
  };

  // Full product list from PDF Page 6
  const allProducts = [
    { name: "Sal Comestible Arrecife Fina", category: "Hogar", icon: "🧂", desc: "La clásica de mesa. Alta pureza y blancura." },
    { name: "Sal Comestible Evaporada Gruesa o Parrillera", category: "Hogar", icon: "🥩", desc: "Cristales gruesos para asados." },
    { name: "Sal Comestible Extrafina", category: "Industrial", icon: "🌫️", desc: "Granulometría muy fina para alta disolución." },
    { name: "Sal Industrial Grano Grueso", category: "Industrial", icon: "🏭", desc: "Para procesos industriales exigentes." },
    { name: "Sal Industrial Premium", category: "Industrial", icon: "💎", desc: "Máxima pureza para industria alimentaria." },
    { name: "Sal Mi Llanura Blanca Gruesa", category: "Variedad", icon: "⛰️", desc: "Opción económica de alta calidad." },
    { name: "Sal Mi Llanura Roja", category: "Variedad", icon: "🔴", desc: "Variedad específica con características propias." },
    { name: "Sal Molida Industrial", category: "Industrial", icon: "⚙️", desc: "Procesada para fácil integración." },
  ];

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden scroll-smooth font-sans">
      
      {/* ================= HERO SECTION (#inicio) ================= */}
      <section id="inicio" className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-primary">
        <OceanBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <Reveal direction="right">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-secondary text-sm font-extrabold uppercase tracking-widest mb-8 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
                Calidad Premium Venezolana
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1] drop-shadow-xl">
                BIENVENIDOS A <br/>
                <span className="text-secondary font-handwriting italic transform inline-block -rotate-2 mt-2">Sal Arrecife</span>
              </h1>
              <p className="text-2xl text-white/90 font-bold italic mb-10 max-w-xl">
                "Una pizca de mar en su hogar"
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="bg-accent hover:bg-red-600 text-white px-10 py-5 rounded-full font-extrabold text-lg shadow-xl shadow-red-500/40 transition-all uppercase tracking-wide border-2 border-accent"
                >
                  Ver Catálogo
                </motion.button>
                <button 
                  onClick={() => {
                    document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 border-2 border-white/30 transition-colors backdrop-blur-sm"
                >
                  Conócenos
                </button>
              </div>
            </Reveal>
            
            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center relative">
               <Reveal direction="left" delay={0.3} className="relative w-full max-w-lg">
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                     <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-8 border border-white/20 shadow-2xl relative overflow-hidden text-center group">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl group-hover:bg-secondary/40 transition-colors duration-500"></div>
                        <div className="text-9xl mb-4 transform scale-150 drop-shadow-2xl filter contrast-125">🧂</div>
                        <h3 className="text-white font-black text-4xl mb-2 tracking-tight">100% NATURAL</h3>
                        <p className="text-slate-200 font-medium text-lg mb-6">Sin humedad. Máxima blancura.</p>
                        <div className="flex justify-center gap-3 mt-4">
                            <span className="bg-secondary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">Yodo</span>
                            <span className="bg-secondary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">Flúor</span>
                        </div>
                     </div>
                  </motion.div>
               </Reveal>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
           <ArrowRight className="rotate-90 w-8 h-8" />
        </div>
      </section>

      {/* ================= NOSOTROS (#nosotros) ================= */}
      <section id="nosotros" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Reveal className="text-center mb-16">
             <h2 className="text-primary font-black text-4xl md:text-5xl mb-6 uppercase">Sobre Nosotros</h2>
             <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
               Somos una empresa que se dedica a la <strong>producción y distribución</strong> de diferentes tipos de sal,
               ofreciendo una variedad de productos adaptados a las necesidades del hogar y la industria.
             </p>
           </Reveal>

           <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem className="bg-slate-50 p-10 rounded-[2.5rem] text-center border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="inline-flex p-5 bg-primary/10 rounded-full text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors"><Truck size={48}/></div>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">Logística y Distribución</h3>
                <p className="text-slate-600">Servicio eficiente para garantizar satisfacción en cada segmento del mercado.</p>
              </StaggerItem>
              <StaggerItem className="bg-slate-50 p-10 rounded-[2.5rem] text-center border border-slate-100 hover:shadow-xl hover:border-secondary/20 transition-all duration-300 group">
                <div className="inline-flex p-5 bg-secondary/10 rounded-full text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors"><Search size={48}/></div>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">Análisis de Calidad</h3>
                <p className="text-slate-600">Cumplimiento estricto de normas sanitarias. Blancura y pureza garantizada.</p>
              </StaggerItem>
              <StaggerItem className="bg-slate-50 p-10 rounded-[2.5rem] text-center border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 group">
                <div className="inline-flex p-5 bg-accent/10 rounded-full text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors"><ThumbsUp size={48}/></div>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">Atención al Cliente</h3>
                <p className="text-slate-600">Nuestro compromiso es con usted. Atención personalizada para mayoristas.</p>
              </StaggerItem>
           </StaggerContainer>
        </div>
      </section>

      {/* ================= BENEFICIOS (#beneficios) ================= */}
      <section id="beneficios" className="py-24 bg-primary text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fish-net.png')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Reveal className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Beneficios de la Sal</h2>
              <p className="text-xl text-secondary font-bold">Más que un condimento, un mineral esencial.</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <Reveal delay={0.1} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-colors hover:-translate-y-1 duration-300">
                  <ChefHat className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-bold text-xl mb-3">1. Sabor Realzador</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">Resalta sabores naturales, equilibra dulces y ácidos, y mejora la experiencia de disfrutar una comida.</p>
               </Reveal>
               <Reveal delay={0.2} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-colors hover:-translate-y-1 duration-300">
                  <Sparkles className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-bold text-xl mb-3">2. Conservante Natural</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">Previene el crecimiento de bacterias y prolonga la vida útil de los alimentos.</p>
               </Reveal>
               <Reveal delay={0.3} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-colors hover:-translate-y-1 duration-300">
                  <Star className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-bold text-xl mb-3">3. Textura y Apariencia</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">Aporta crujencia (como en un pretzel) y elegancia visual a los platos.</p>
               </Reveal>
               <Reveal delay={0.4} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-colors hover:-translate-y-1 duration-300">
                  <Droplets className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-bold text-xl mb-3">4. Equilibrio Hídrico</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">Ayuda a regular la cantidad de agua dentro y alrededor de las células.</p>
               </Reveal>
               <Reveal delay={0.5} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-colors hover:-translate-y-1 duration-300 md:col-span-2 lg:col-span-2">
                  <Heart className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-bold text-xl mb-3">5. Aporte de Minerales (Yodo y Flúor)</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">El <strong className="text-white">Yodo</strong> es esencial para el buen funcionamiento de la tiroides y el metabolismo. El <strong className="text-white">Flúor</strong> previene la formación de caries y fortalece el esmalte dental.</p>
               </Reveal>
            </div>
         </div>
      </section>

      {/* ================= PRODUCTOS (#productos) ================= */}
      <section id="productos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Reveal className="text-center mb-20">
             <h2 className="text-primary font-black text-4xl md:text-5xl mb-6 uppercase">Productos Destacados</h2>
             <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
           </Reveal>

           {/* PRODUCTOS PRINCIPALES (Fina & Gruesa) */}
           <div className="space-y-24 mb-32">
              {/* Sal Fina */}
              <Reveal className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden group hover:border-secondary/20 transition-colors">
                 <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-20 transition-transform group-hover:translate-x-10"></div>
                 <div className="lg:w-1/2 relative z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-full font-bold text-sm mb-6 shadow-md">
                        <Star size={16} className="mr-2 fill-white" /> EL CLÁSICO DEL HOGAR
                    </div>
                    <h3 className="text-4xl font-black text-primary mb-4">Sal Comestible Fina</h3>
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      El ingrediente básico. Destaca por su <strong>fluidez, blancura y disolución perfecta</strong>. Ideal para sazonar, panificación y quesos.
                    </p>
                    <ul className="space-y-3 mb-8">
                       <li className="flex items-center text-slate-700 font-bold"><Check className="text-secondary mr-2"/> Sazonar carnes y aves</li>
                       <li className="flex items-center text-slate-700 font-bold"><Check className="text-secondary mr-2"/> Elaboración de pan</li>
                       <li className="flex items-center text-slate-700 font-bold"><Check className="text-secondary mr-2"/> Elaboración de quesos</li>
                    </ul>
                    <button onClick={() => openModal('Sal Fina')} className="bg-primary hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg transform hover:-translate-y-1">
                       Solicitar Cotización
                    </button>
                 </div>
                 <div className="lg:w-1/2 flex justify-center relative z-10">
                    <div className="w-72 h-80 bg-gradient-to-br from-slate-50 to-white rounded-[2rem] border-8 border-white shadow-2xl flex items-center justify-center text-center p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div>
                           <div className="text-6xl mb-6">🧂</div>
                           <h4 className="font-handwriting text-4xl text-primary font-bold">Sal Fina</h4>
                           <span className="block mt-4 bg-secondary text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md">1Kg / 500g</span>
                        </div>
                    </div>
                 </div>
              </Reveal>

              {/* Sal Gruesa */}
              <Reveal className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden group hover:border-accent/20 transition-colors">
                 <div className="absolute top-0 left-0 w-1/3 h-full bg-accent/5 -skew-x-12 -translate-x-20 transition-transform group-hover:-translate-x-10"></div>
                 <div className="lg:w-1/2 flex justify-center order-2 lg:order-1 relative z-10">
                    <div className="w-72 h-80 bg-gradient-to-br from-slate-50 to-white rounded-[2rem] border-8 border-white shadow-2xl flex items-center justify-center text-center p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div>
                           <div className="text-6xl mb-6">🥩</div>
                           <h4 className="font-handwriting text-4xl text-primary font-bold">Parrillera</h4>
                           <span className="block mt-4 bg-accent text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md">1Kg / 500g</span>
                        </div>
                    </div>
                 </div>
                 <div className="lg:w-1/2 order-1 lg:order-2 relative z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-full font-bold text-sm mb-6 shadow-md">
                        <Utensils size={16} className="mr-2 fill-white" /> ESPECIAL ASADOS
                    </div>
                    <h3 className="text-4xl font-black text-primary mb-4">Sal Gruesa Parrillera</h3>
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      Cristales grandes que estallan en sabor. Especial para <strong>barbacoas, decoración de platos</strong> y conservación de alimentos.
                    </p>
                    <ul className="space-y-3 mb-8">
                       <li className="flex items-center text-slate-700 font-bold"><Check className="text-accent mr-2"/> Sazonar carnes (BBQ)</li>
                       <li className="flex items-center text-slate-700 font-bold"><Check className="text-accent mr-2"/> Decoración de platos</li>
                       <li className="flex items-center text-slate-700 font-bold"><Check className="text-accent mr-2"/> Deshidratar carnes/pescados</li>
                    </ul>
                    <button onClick={() => openModal('Sal Gruesa')} className="bg-accent hover:bg-red-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg transform hover:-translate-y-1">
                       Solicitar Cotización
                    </button>
                 </div>
              </Reveal>
           </div>

           {/* CATÁLOGO COMPLETO (PDF Page 6) */}
           <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-lg">
              <Reveal className="text-center mb-12">
                 <h3 className="text-3xl font-black text-slate-800 uppercase flex items-center justify-center">
                    <ShoppingBag className="mr-3 text-primary" /> Catálogo Completo
                 </h3>
                 <p className="text-slate-500 mt-2">Todas nuestras presentaciones disponibles</p>
              </Reveal>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {allProducts.map((prod, idx) => (
                    <StaggerItem key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-secondary/50 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
                       <div className="flex justify-between items-start mb-4">
                           <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{prod.icon}</div>
                           <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${prod.category === 'Industrial' ? 'bg-slate-200 text-slate-600' : 'bg-secondary/10 text-secondary'}`}>
                             {prod.category}
                           </span>
                       </div>
                       <h4 className="text-lg font-bold text-primary mb-2 leading-tight">{prod.name}</h4>
                       <p className="text-sm text-slate-500 mb-6 flex-grow">{prod.desc}</p>
                       <button 
                         onClick={() => openModal(prod.name)}
                         className="text-secondary font-bold text-sm flex items-center group-hover:underline mt-auto"
                       >
                         Consultar <ArrowRight size={14} className="ml-1"/>
                       </button>
                    </StaggerItem>
                 ))}
              </StaggerContainer>
           </div>

        </div>
      </section>

      {/* ================= COMPARATIVA (#comparativa) ================= */}
      <section id="comparativa" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-95"></div>
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">¿Por qué Arrecife?</h2>
            <p className="text-xl text-secondary font-medium">La diferencia es clara frente a la competencia.</p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
             {/* Us */}
             <Reveal direction="right" className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-secondary text-slate-900 flex flex-col">
                <div className="bg-secondary p-8 text-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-white/10 opacity-50"></div>
                   <h3 className="text-3xl font-black text-white uppercase relative z-10 tracking-wider">Sal Arrecife</h3>
                   <div className="mt-2 inline-block px-4 py-1 bg-white text-secondary text-xs font-bold rounded-full uppercase tracking-widest shadow-sm relative z-10">Calidad Superior</div>
                </div>
                <div className="p-10 bg-blue-50/30 flex-grow">
                   <ul className="space-y-6">
                      {['Totalmente SECA y sin humedad', 'Blancura incomparable', 'Empaque transparente (Honestidad)', 'Yodo y Flúor garantizados', 'Precios competitivos'].map(item => (
                         <li key={item} className="flex items-start">
                            <CheckCircle className="text-green-500 w-6 h-6 mr-4 flex-shrink-0 mt-0.5" /> 
                            <span className="text-lg font-bold text-slate-800">{item}</span>
                         </li>
                      ))}
                   </ul>
                </div>
             </Reveal>
             {/* Them */}
             <Reveal direction="left" className="bg-slate-800/50 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-slate-700 flex flex-col">
                <div className="bg-slate-800 p-8 text-center border-b border-slate-700">
                   <h3 className="text-3xl font-black text-slate-300 uppercase tracking-wider">Otras Marcas</h3>
                   <div className="mt-2 inline-block px-4 py-1 bg-slate-700 text-slate-400 text-xs font-bold rounded-full uppercase tracking-widest">Competencia</div>
                </div>
                <div className="p-10 flex-grow">
                   <ul className="space-y-6 text-slate-300">
                      {[
                        'Suelen tener humedad (No fluyen)', 
                        'Color grisáceo o amarillento', 
                        'Empaques opacos que ocultan el producto', 
                        'Cantidades dudosas de minerales'
                      ].map(item => (
                         <li key={item} className="flex items-start">
                            <XCircle className="text-red-400 w-6 h-6 mr-4 flex-shrink-0 mt-0.5" /> 
                            <span className="text-lg font-medium">{item}</span>
                         </li>
                      ))}
                   </ul>
                </div>
             </Reveal>
          </div>

          {/* Customer Types (PDF Page 8) */}
          <div className="mt-20">
              <Reveal className="text-center mb-10">
                  <h3 className="text-2xl font-bold uppercase text-white">Identificamos dos tipos de clientes</h3>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/50 p-8 rounded-3xl border border-secondary/30">
                      <h4 className="text-xl font-bold text-secondary mb-2">Cliente A (Busca Calidad)</h4>
                      <p className="text-slate-300 text-sm">Valora la fluidez, la blancura y la presentación. Entiende que nuestra sal no tiene impurezas.</p>
                  </div>
                  <div className="bg-slate-800/50 p-8 rounded-3xl border border-secondary/30">
                      <h4 className="text-xl font-bold text-secondary mb-2">Cliente B (Comparador)</h4>
                      <p className="text-slate-300 text-sm">Necesita saber que otras marcas han bajado calidad y cambiado empaques. Nuestra sal mantiene estándares.</p>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACTO (#contacto) ================= */}
      <section id="contacto" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-primary font-black text-4xl md:text-5xl mb-4 uppercase">Contacto Comercial</h2>
            <p className="text-xl text-slate-600">Precios especiales para mayoristas y distribuidores.</p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
              <h3 className="text-2xl font-black text-primary mb-6 flex items-center">
                 <ShoppingBag className="mr-3"/> Solicitar Lista de Precios
              </h3>
              <LeadForm onSuccess={() => {}} defaultInterest={selectedInterest} />
            </Reveal>

            <Reveal delay={0.2} className="space-y-6 flex flex-col justify-center">
               <div className="bg-primary text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                  <MapPin className="w-10 h-10 text-secondary mb-4 relative z-10" />
                  <h3 className="text-2xl font-bold mb-2 relative z-10">Ubicación Planta</h3>
                  <p className="text-slate-200 text-lg relative z-10">Zona Industrial, Barcelona,<br/>Anzoátegui, Venezuela.</p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100 hover:border-accent/30 transition-colors">
                      <Phone className="w-8 h-8 text-accent mb-4" />
                      <h3 className="text-lg font-bold text-slate-900 mb-1">WhatsApp</h3>
                      <p className="text-slate-600 font-mono text-sm">+58 412 000 0000</p>
                   </div>
                   <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100 hover:border-secondary/30 transition-colors">
                      <Mail className="w-8 h-8 text-secondary mb-4" />
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600 font-mono text-sm">ventas@salarrecife.com</p>
                   </div>
               </div>
               
               <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 text-center">
                   <p className="text-primary font-bold">Horario de Atención</p>
                   <p className="text-slate-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
               </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Modal Container */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Cotizar: ${selectedInterest}`}>
        <LeadForm defaultInterest={selectedInterest} onSuccess={() => setTimeout(() => setIsModalOpen(false), 2000)} />
      </Modal>

    </div>
  );
};

export default Home;