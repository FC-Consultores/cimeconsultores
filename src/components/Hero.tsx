"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  LayoutDashboard, 
  FileText, 
  Users, 
  Calculator, 
  CalendarCheck, 
  ShieldCheck, 
  Rocket 
} from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = "529992010912";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, vi su página y me interesa una consulta");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Lista de servicios con iconos personalizados
const servicios = [
  { text: "Portal de facturación", icon: <LayoutDashboard size={18} /> },
  { text: "Facturaciones de ingresos, complementos de pago, etc.", icon: <FileText size={18} /> },
  { text: "Facturaciones de nómina", icon: <Users size={18} /> },
  { text: "Análisis de impuestos", icon: <Calculator size={18} /> },
  { text: "Presentamos tus declaraciones mensuales y anuales.", icon: <CalendarCheck size={18} /> },
  { text: "Correcciones de obligaciones o créditos fiscales ante el SAT.", icon: <ShieldCheck size={18} /> },
  { text: "Alta de tu negocio ante el SAT.", icon: <Rocket size={18} /> },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO CON OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.webp" 
          alt="Fondo de oficina contable"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/85 mix-blend-multiply" />
      </div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 py-20">
        
        {/* Columna Izquierda */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
          >
            <span className="text-brand-green">Acompañamos a tu negocio</span>
            <br />
            <span>con soluciones claras y puntuales, desde:</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2"
          >
            {/* Botón WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-green text-white font-medium rounded-xl hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg shadow-brand-green/20"
            >
              Agenda tu consulta
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white font-medium rounded-xl hover:border-brand-gold hover:text-brand-gold transition-all duration-300 backdrop-blur-sm"
            >
              Ver todos los servicios
            </a>
          </motion.div>
        </div>

        {/* Columna Derecha (Lista con iconos temáticos) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 space-y-5"
        >
          <h3 className="text-white font-semibold text-lg flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="text-brand-gold">●</span> Servicios incluidos
          </h3>
          
          <ul className="space-y-4">
            {servicios.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="flex items-start gap-3 text-white/90 text-sm md:text-base"
              >
                {/* Icono temático en verde */}
                <div className="text-brand-green flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <span className="leading-relaxed">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}