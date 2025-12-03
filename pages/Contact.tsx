import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: 'Mayorista',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por contactarnos. Un asesor comercial le responderá en breve.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all placeholder-slate-400";

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
       <div className="bg-primary text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h1 className="text-4xl font-black mb-4 uppercase">Contacto Comercial</h1>
            <p className="text-xl text-secondary font-medium">
              Distribuya la mejor sal del mercado. Precios especiales al mayor.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form */}
          <Reveal className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-primary mb-6">Solicitar Lista de Precios</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Ej. Juan Pérez"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Empresa / Negocio</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Ej. Supermercado X"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="juan@empresa.com"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Teléfono / WhatsApp</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+58 412 000 0000"
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tipo de Cliente:</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>Mayorista</option>
                  <option>Supermercado / Retail</option>
                  <option>Restaurante / Industrial</option>
                  <option>Consumidor Final</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mensaje / Pedido</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Estoy interesado en..."
                ></textarea>
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-accent hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-red-500/30">
                Enviar Solicitud
              </motion.button>
            </form>
          </Reveal>

          {/* Contact Info */}
          <div className="space-y-10">
            
            <Reveal delay={0.2}>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Información Directa</h3>
              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Ubicación Planta</p>
                    <p className="text-slate-600">Zona Industrial, [Ciudad], [Estado].</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Teléfonos</p>
                    <p className="text-slate-600">+58 412 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Correo Electrónico</p>
                    <p className="text-slate-600">ventas@salarrecife.com</p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;