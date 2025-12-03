import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import { NavItem } from '../types';
import Modal from './Modal';
import LeadForm from './LeadForm';

const navItems: NavItem[] = [
  { label: 'Inicio', path: 'inicio' },
  { label: 'Nosotros', path: 'nosotros' },
  { label: 'Beneficios', path: 'beneficios' },
  { label: 'Productos', path: 'productos' },
  { label: 'Comparativa', path: 'comparativa' },
  { label: 'Contacto', path: 'contacto' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    // If we are not on home, go to home first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10 text-white transition-all duration-300 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo */}
            <div 
              onClick={() => scrollToSection('inicio')} 
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="bg-white p-2 rounded-full group-hover:bg-secondary transition-colors duration-300 shadow-lg">
                <Droplets className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight leading-none text-white drop-shadow-md">SAL</span>
                <span className="font-extrabold text-2xl tracking-tight leading-none text-secondary -mt-1 font-handwriting" style={{ fontFamily: 'cursive' }}>Arrecife</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => scrollToSection(item.path)}
                    className="px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 uppercase tracking-wide text-slate-200 hover:text-white hover:bg-white/10 hover:shadow-inner"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-accent hover:bg-red-600 text-white px-6 py-3 rounded-full font-extrabold text-sm shadow-lg shadow-red-500/30 transition-all transform hover:scale-105 uppercase tracking-wider"
              >
                Hacer Pedido
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-primary border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => scrollToSection(item.path)}
                  className="block w-full text-left px-3 py-4 rounded-md text-lg font-bold text-slate-200 hover:text-white hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
              <button
                  onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                  className="block w-full text-center mt-4 bg-accent text-white px-5 py-4 rounded-md font-bold text-lg uppercase shadow-lg"
                >
                  Hacer Pedido
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Lead Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Solicitar Pedido / Cotización">
        <p className="text-slate-600 mb-4 text-sm">
          Complete el formulario para solicitar precios al mayor o distribución.
        </p>
        <LeadForm defaultInterest="Distribución / Mayorista" onSuccess={() => setTimeout(() => setIsModalOpen(false), 2000)} />
      </Modal>
    </>
  );
};

export default Navbar;