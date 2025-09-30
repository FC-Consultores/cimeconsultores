import { FaShieldAlt, FaHandshake, FaClock, FaChartLine } from "react-icons/fa";

const puntos = [
  {
    icon: <FaShieldAlt className="text-[#60ac45] text-3xl mb-3" />,
    titulo: "Cumplimiento puntual ante el SAT",
    desc: "Procesos claros y calendarizados para evitar retrasos y multas.",
  },
  {
    icon: <FaHandshake className="text-[#60ac45] text-3xl mb-3" />,
    titulo: "Atención personalizada",
    desc: "Acompañamiento cercano para resolver dudas y tomar mejores decisiones.",
  },
  {
    icon: <FaClock className="text-[#60ac45] text-3xl mb-3" />,
    titulo: "Respuesta ágil",
    desc: "Comunicación directa por WhatsApp y correo para avanzar sin fricciones.",
  },
  {
    icon: <FaChartLine className="text-[#60ac45] text-3xl mb-3" />,
    titulo: "Enfoque en pymes y emprendedores",
    desc: "Soluciones prácticas para tu etapa actual y tu crecimiento.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section
      id="por-que-elegirnos"
      className="relative py-20 border-t border-white/10 bg-[--color-brand-black] overflow-hidden"
    >
      {/* Luces difusas sutiles */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[36rem] h-[18rem] bg-[#60ac45]/10 rounded-full blur-3xl"></div>

      <div className="container relative text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          ¿Por qué elegirnos?
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#60ac45] rounded"></span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {puntos.map((p, i) => (
            <div
              key={i}
              className="p-6 bg-[#1a1a1a] rounded-xl border border-white/10 hover:border-[#60ac45] transition-colors"
            >
              {p.icon}
              <h3 className="text-lg font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-[--color-brand-white]/70 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
