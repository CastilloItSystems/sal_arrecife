import React from 'react';
import { MapPin, Phone, Mail, Instagram, ExternalLink, Droplets, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white border-t border-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
               <Droplets className="h-6 w-6 text-secondary" />
               <h3 className="text-2xl font-extrabold text-white">SAL ARRECIFE</h3>
            </div>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Producción y distribución de sal de alta calidad. Pureza, blancura y el punto exacto de sabor para su hogar y negocio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-secondary font-extrabold mb-6 uppercase text-sm tracking-widest">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => scrollTo('productos')} className="text-slate-300 hover:text-white transition-colors font-medium">Productos</button></li>
              <li><button onClick={() => scrollTo('beneficios')} className="text-slate-300 hover:text-white transition-colors font-medium">Beneficios</button></li>
              <li><button onClick={() => scrollTo('comparativa')} className="text-slate-300 hover:text-white transition-colors font-medium">Comparativa</button></li>
              <li><button onClick={() => scrollTo('contacto')} className="text-slate-300 hover:text-white transition-colors font-medium">Contacto</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-secondary font-extrabold mb-6 uppercase text-sm tracking-widest">Contacto</h4>
            <address className="not-italic">
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0 text-accent" />
                  <span>Zona Industrial,<br />Barcelona, Anzoátegui.</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-accent" />
                  <span>+58 412 000 0000</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-accent" />
                  <span>ventas@salarrecife.com</span>
                </li>
              </ul>
            </address>
          </div>

          {/* CTA */}
          <div>
             <h4 className="text-secondary font-extrabold mb-6 uppercase text-sm tracking-widest">Atención al Cliente</h4>
             <p className="text-sm text-slate-300 mb-4">Solicite su pedido directamente por WhatsApp.</p>
             <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/30"
              >
                Chat WhatsApp <ExternalLink size={16} className="ml-2" />
             </a>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Sal Arrecife. Una pizca de mar en su hogar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;