"use client";

import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";

const coreItems = [
  {
    title: "Misión",
    icon: <Target size={24} />,
    description:
      "Transformar la contabilidad y la estrategia fiscal en un motor de crecimiento. Acompañamos a empresas y emprendedores con asesoría práctica, transparente y 100% digital para que cumplan con confianza y se enfoquen en escalar.",
  },
  {
    title: "Visión",
    icon: <Eye size={24} />,
    description:
      "Ser el referente de consultoría fiscal reconocido por convertir el cumplimiento normativo en una ventaja competitiva, impulsando la sostenibilidad y el éxito financiero de nuestros clientes a través de la innovación.",
  },
  {
    title: "Valores",
    icon: <HeartHandshake size={24} />,
    items: [
      "Transparencia: Procesos claros, sin letra pequeña.",
      "Confianza: Relaciones basadas en resultados y comunicación honesta.",
      "Profesionalismo: Precisión técnica y soluciones puntuales.",
      "Cercanía: Un equipo humano disponible cuando lo necesitas.",
    ],
  },
];

export default function CoreValues() {
  return (
    <section id="mision-vision-valores" className="py-24 px-6 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-green font-semibold tracking-wide uppercase text-sm">
            Nuestros Pilares
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">
            Lo que nos mueve y nos <span className="text-brand-green">define</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coreItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-green/10 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{item.title}</h3>
              {item.items ? (
                <ul className="space-y-3">
                  {item.items.map((val, i) => (
                    <li key={i} className="flex items-start gap-2 text-brand-dark/70 text-sm">
                      <span className="text-brand-gold mt-1">●</span>
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-brand-dark/70 leading-relaxed">{item.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}