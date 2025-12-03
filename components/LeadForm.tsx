import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface LeadFormProps {
  onSuccess?: () => void;
  defaultInterest?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSuccess, defaultInterest = 'General' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    interest: defaultInterest
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 text-green-600">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Enviada!</h3>
        <p className="text-slate-600">Un ejecutivo de ventas de Sal Arrecife le enviará el catálogo en breve.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all placeholder-slate-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1">Nombre Completo</label>
        <input 
          required 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          className={inputClass} 
          placeholder="Ej. Juan Pérez"
        />
      </div>
      
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1">Empresa / Negocio</label>
        <input 
          type="text" 
          name="company" 
          value={formData.company}
          onChange={handleChange}
          className={inputClass} 
          placeholder="Ej. Distribuidora Central"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1">WhatsApp / Teléfono</label>
        <input 
          required 
          type="tel" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          className={inputClass} 
          placeholder="+58 412..."
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1">Interés Principal</label>
        <select 
          name="interest" 
          value={formData.interest}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="Sal Fina (Bulto)">Sal Fina (Bulto)</option>
          <option value="Sal Parrillera (Bulto)">Sal Parrillera (Bulto)</option>
          <option value="Distribución / Mayorista">Distribución / Mayorista</option>
          <option value="Uso Industrial">Uso Industrial</option>
          <option value="Otros">Otros</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="w-full bg-accent hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-red-500/30 mt-4 uppercase tracking-wide"
      >
        Enviar Solicitud
      </button>
      
      <p className="text-xs text-slate-400 text-center mt-4">
        Atendemos pedidos al mayor y detal.
      </p>
    </form>
  );
};

export default LeadForm;