"use client";

import { motion } from "framer-motion";
import { 
  Building2, Landmark, FileCheck, CalendarCheck, 
  RefreshCcw, ClipboardCheck, Users, CloudCog 
} from "lucide-react";

const services = [
  {
    title: "Constitución de Empresas",
    desc: "Te acompañamos desde el registro legal hasta el alta ante el SAT. Estructura tu negocio con bases sólidas y sin contratiempos.",
    icon: <Building2 size={24} />,
  },
  {
    title: "Asesoría Fiscal Integral",
    desc: "Estrategias personalizadas para cumplir con el SAT, reducir riesgos y maximizar tu rentabilidad con información clara y oportuna.",
    icon: <Landmark size={24} />,
  },
  {
    title: "Facturación Electrónica 4.0",
    desc: "Emisión, validación y gestión de CFDI bajo los últimos requisitos del SAT. Sin errores, sin retrasos, 100% digital.",
    icon: <FileCheck size={24} />,
  },
  {
    title: "Declaraciones Mensuales y Anuales",
    desc: "Cálculo preciso, presentación oportuna y seguimiento constante. Mantén tu historial fiscal limpio y evita multas.",
    icon: <CalendarCheck size={24} />,
  },
  {
    title: "Regularización y Créditos Fiscales",
    desc: "Recuperamos o compensamos saldos a favor, resolvemos adeudos y corregimos inconsistencias. Tu tranquilidad ante el SAT es nuestra prioridad.",
    icon: <RefreshCcw size={24} />,
  },
  {
    title: "Auditoría y Control Interno",
    desc: "Diagnóstico profundo de tus procesos financieros. Detectamos riesgos, optimizamos flujos y blindamos tu operación.",
    icon: <ClipboardCheck size={24} />,
  },
  {
    title: "Gestión de Nómina",
    desc: "Liquidaciones, timbrado CFDI y cumplimiento ante IMSS e INFONAVIT. Precisión en cada pago, tranquilidad para tu equipo.",
    icon: <Users size={24} />,
  },
  {
    title: "Portal de Facturación 24/7",
    desc: "Plataforma intuitiva para emitir ingresos, egresos y complementos en tiempo real. Control total desde cualquier dispositivo.",
    icon: <CloudCog size={24} />,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 px-6 bg-brand-dark overflow-hidden">
      
      {/* Fondo decorativo: Grid sutil + Glow verde */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-brand-green uppercase bg-brand-green/10 rounded-full border border-brand-green/20"
          >
            Lo que hacemos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Soluciones diseñadas para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-gold">
              cada etapa de tu negocio
            </span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-1 bg-brand-gold/60 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 hover:border-brand-green/30 hover:bg-white/10 transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-gold/0 group-hover:from-brand-green/5 group-hover:to-brand-gold/5 transition-all duration-500 pointer-events-none" />
              
              {/* Icon Container */}
              <div className="relative w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-green/25 transition-all duration-500">
                {service.icon}
                {/* Corner accent */}
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-brand-gold/40 rounded-tr-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-bold text-white mb-3 group-hover:text-brand-green transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}