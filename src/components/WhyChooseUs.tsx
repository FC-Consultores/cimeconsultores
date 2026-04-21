"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, TrendingUp, FileCheck, Headphones } from "lucide-react";

const benefits = [
  {
    title: "Cumplimiento Puntual ante el SAT",
    desc: "Olvídate de multas y recargos. Nos encargamos de que tus fechas y obligaciones estén siempre al día.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Atención Personalizada",
    desc: "No somos un call center. Tienes un asesor dedicado que conoce tu negocio y tus metas financieras.",
    icon: <Users size={28} />,
  },
  {
    title: "Respuesta Ágil y Directa",
    desc: "Sabemos que el tiempo es dinero. Resolvemos tus dudas en menos de 24 horas vía WhatsApp o correo.",
    icon: <Clock size={28} />,
  },
  {
    title: "Enfoque 100% Digital",
    desc: "Cero papel, cero filas. Gestión de documentos en la nube y firmas electrónicas para tu comodidad.",
    icon: <FileCheck size={28} />,
  },
  {
    title: "Actualización Constante",
    desc: "Las leyes fiscales cambian, nosotros también. Nos mantenemos al día para que tú no tengas que preocuparte.",
    icon: <TrendingUp size={28} />,
  },
  {
    title: "Confidencialidad Absoluta",
    desc: "Tu información financiera es sagrada. Manejamos protocolos estrictos de seguridad y privacidad.",
    icon: <Headphones size={28} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="py-24 px-6 bg-brand-dark relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
      <div className="absolute -right-20 top-20 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-semibold tracking-widest uppercase text-sm"
          >
            Nuestra Garantía
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mt-3"
          >
            ¿Por qué <span className="text-brand-green">Cime Consultores</span>?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-brand-green/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-brand-green mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}