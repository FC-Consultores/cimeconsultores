"use client";

import { motion } from "framer-motion";
import { MessageCircle, PieChart, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Nos reunimos contigo (virtual o presencial) para entender tu situación actual y objetivos.",
    icon: <MessageCircle size={24} />,
  },
  {
    step: "02",
    title: "Estrategia",
    desc: "Diseñamos un plan fiscal y contable a tu medida para optimizar tus recursos.",
    icon: <PieChart size={24} />,
  },
  {
    step: "03",
    title: "Ejecución",
    desc: "Implementamos las soluciones y te acompañamos mes a mes con reportes claros.",
    icon: <Rocket size={24} />,
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 px-6 bg-brand-green relative overflow-hidden">
      {/* Textura sutil */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-dark"
          >
            Así de fácil es trabajar <br />
            <span className="text-brand-dark/70">con nosotros</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Línea conectora (visible en desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-brand-dark/20 -z-10" />

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-dark text-brand-green mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="block text-sm font-bold tracking-widest text-brand-dark/50 mb-2">
                PASO {item.step}
              </span>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">{item.title}</h3>
              <p className="text-brand-dark/80 leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Botón CTA Central */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/529992010912"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 shadow-xl"
          >
            Empieza hoy mismo
            <Rocket size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}