"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-brand-white relative overflow-hidden">
      
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Columna Izquierda: Contenido y Foto */}
        <div className="relative order-2 lg:order-1">
          {/* Marco decorativo dorado */}
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/20 rounded-2xl z-0" />
          
          {/* Contenedor de la Foto */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-brand-green/10 bg-gray-100 aspect-[4/3]">
            
            <Image 
              src="/nosotros.webp" 
              alt="Equipo de trabajo de Cime Consultores"
              fill
              className="object-cover"
            />
            {/* Capa suave para integrar con el fondo si es necesario */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
          </div>

          {/* Etiqueta flotante de confianza */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -bottom-6 -right-6 lg:-right-12 bg-brand-white p-4 rounded-xl shadow-xl border border-brand-green/10 z-20 flex items-center gap-3"
          >
            <div className="bg-brand-green/10 p-2 rounded-full text-brand-green">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-brand-dark">Confianza Total</p>
              <p className="text-xs text-brand-dark/60">Gestión segura y transparente</p>
            </div>
          </motion.div>
        </div>

        {/* Columna Derecha: Texto */}
        <div className="space-y-8 order-1 lg:order-2">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-green uppercase bg-brand-green/10 rounded-full">
              Quiénes Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
              Contabilidad y Estrategia Fiscal para <span className="text-brand-green">tu Crecimiento</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-lg text-brand-dark/70 leading-relaxed"
          >
            <p>
              En <strong className="text-brand-dark">Cime Consultores</strong>, no somos solo contadores; somos el respaldo financiero que tu negocio necesita. Combinamos experiencia técnica con un enfoque práctico y cercano.
            </p>
            <p>
              Nuestro propósito es ayudarte a cumplir puntualmente con tus obligaciones ante el SAT, optimizar tus recursos y tomar decisiones seguras. Tú concéntrate en crecer, nosotros nos encargamos de los números.
            </p>
          </motion.div>

          {/* Grid de Valores */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 text-brand-green"><ShieldCheck size={20} /></div>
              <p className="text-sm font-medium text-brand-dark">Cumplimiento total ante el SAT sin rezagos.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 text-brand-green"><TrendingUp size={20} /></div>
              <p className="text-sm font-medium text-brand-dark">Optimización fiscal y maximización de deducciones.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 text-brand-green"><Users size={20} /></div>
              <p className="text-sm font-medium text-brand-dark">Atención directa, rápida y personalizada.</p>
            </div>
          </motion.div>

          {/* Botón de acción (opcional pero recomendado) */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ delay: 0.3 }}
             className="pt-4"
          >
             <a 
               href="#contacto" 
               className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-dark transition-colors group"
             >
               Conoce más sobre nuestros servicios
               <span className="group-hover:translate-x-1 transition-transform">→</span>
             </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}