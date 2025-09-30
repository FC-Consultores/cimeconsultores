import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";

export default function MisionVisionValores() {
  return (
    <section
      id="mvv"
      className="relative py-20 border-t border-white/10 bg-[--color-brand-black] overflow-hidden"
    >
      {/* Luces difusas suaves */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#60ac45]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#60ac45]/5 rounded-full blur-3xl"></div>

      <div className="container relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          Misión, Visión y Valores
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#60ac45] rounded"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-white/10">
            <FaBullseye className="text-[#60ac45] text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Misión</h3>
            <p className="text-[--color-brand-white]/75">
              Brindar asesoría fiscal y contable con un enfoque práctico y cercano,
              ayudando a empresas y emprendedores a cumplir sus obligaciones y crecer con confianza.
            </p>
          </div>

          {/* Visión */}
          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-white/10">
            <FaEye className="text-[#60ac45] text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visión</h3>
            <p className="text-[--color-brand-white]/75">
              Ser un despacho de referencia reconocido por la transparencia, la confianza
              y el compromiso con el éxito de nuestros clientes.
            </p>
          </div>

          {/* Valores */}
          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-white/10">
            <FaCheckCircle className="text-[#60ac45] text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">Valores</h3>
            <ul className="space-y-2 text-[--color-brand-white]/80">
              {[
                "Transparencia: claridad en cada proceso.",
                "Confianza: relaciones a largo plazo.",
                "Profesionalismo: soluciones efectivas y puntuales.",
                "Cercanía: acompañamiento constante y humano.",
              ].map((v) => (
                <li key={v} className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#60ac45]" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
