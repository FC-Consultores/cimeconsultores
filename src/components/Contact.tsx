"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, MessageCircle } from "lucide-react";

// Lista de servicios para el selector
const servicesList = [
  "Apertura de Negocios",
  "Asesoría Fiscal Integral",
  "Facturación Electrónica 4.0",
  "Declaraciones Mensuales y Anuales",
  "Regularización de Créditos Fiscales",
  "Auditoría y Control Interno",
  "Gestión de Nómina",
  "Otro / No estoy seguro"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    service: servicesList[0],
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return alert("Por favor completa tu nombre y mensaje.");

    const WHATSAPP_NUMBER = "529992010912";
    const text = `Hola Cime Consultores, soy *${formData.name}*. 👋\n\nMe interesa el servicio de: *${formData.service}*. \n\nMi consulta es: ${formData.message}`;
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-brand-dark relative overflow-hidden">
      {/* Decoraciones de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: Información y Confianza */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <span className="text-brand-green font-semibold tracking-widest uppercase text-sm">
              Hablemos de tu negocio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
              ¿Listo para ordenar <br />
              <span className="text-brand-gold">tus finanzas?</span>
            </h2>
          </div>

          <p className="text-white/60 text-lg leading-relaxed max-w-md">
            No dejes pasar más tiempo. Agenda una consulta gratuita o envíanos tus dudas. Te respondemos directo a tu WhatsApp.
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-green">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-white/40">Llámanos o escríbenos</p>
                <p className="font-semibold text-lg">+52 999 201 0912</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-green">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-white/40">Correo electrónico</p>
                <p className="font-semibold text-lg">contacto@cimeconsultores.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Columna Derecha: El "Ticket" de WhatsApp */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-brand-green/10 relative overflow-hidden"
        >
          {/* Acento superior */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green to-brand-gold" />

          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-50 p-2 rounded-lg">
              <MessageCircle className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark">Iniciar Conversación</h3>
              <p className="text-sm text-brand-dark/50">Completa los datos para ir directo a WhatsApp</p>
            </div>
          </div>

          <form onSubmit={handleSend} className="space-y-5">
            
            {/* Nombre */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-dark/60 uppercase tracking-wide">Tu Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
                required
              />
            </div>

            {/* Selector de Servicio */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-dark/60 uppercase tracking-wide">Servicio de Interés</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all appearance-none cursor-pointer"
              >
                {servicesList.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Mensaje */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-dark/60 uppercase tracking-wide">¿Cómo podemos ayudarte?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ej. Necesito regularizar mis declaraciones del año pasado..."
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all resize-none"
                required
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 mt-4 group"
            >
              <span>Enviar mensaje por WhatsApp</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-center text-xs text-brand-dark/40 mt-2">
              Al enviar, serás redirigido a tu app de WhatsApp.
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}