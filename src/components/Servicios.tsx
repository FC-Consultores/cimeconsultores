import {
  FaBriefcase,
  FaFileInvoiceDollar,
  FaCalculator,
  FaSearchDollar,
  FaClipboardCheck,
  FaBuilding,
} from "react-icons/fa";

const servicios = [
  {
    icon: <FaBuilding className="text-[#60ac45] text-3xl mb-4" />,
    titulo: "Apertura de negocios",
    descripcion:
      "Te guiamos en el proceso legal y fiscal para iniciar tu empresa de manera segura.",
  },
  {
    icon: <FaBriefcase className="text-[#60ac45] text-3xl mb-4" />,
    titulo: "Asesoría fiscal y contable",
    descripcion:
      "Soluciones claras para cumplir con tus obligaciones fiscales y optimizar recursos.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-[#60ac45] text-3xl mb-4" />,
    titulo: "Facturación 4.0",
    descripcion:
      "Implementación y emisión de facturas electrónicas conforme a los estándares vigentes.",
  },
  {
    icon: <FaCalculator className="text-[#60ac45] text-3xl mb-4" />,
    titulo: "Declaraciones",
    descripcion:
      "Presentamos declaraciones mensuales y anuales de manera puntual ante el SAT.",
  },
  {
    icon: <FaSearchDollar className="text-[#60ac45] text-3xl mb-4" />,
    titulo: "Corrección de créditos fiscales",
    descripcion:
      "Te ayudamos a regularizar créditos fiscales y resolver adeudos con el SAT.",
  },
  {
    icon: <FaClipboardCheck className="text-[#60ac45] text-3xl mb-4" />,
    titulo: "Auditoría interna",
    descripcion:
      "Revisamos y fortalecemos tus procesos contables para un control interno confiable.",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative py-20 border-t border-white/10 bg-[--color-brand-black] overflow-hidden"
    >
      {/* Luces difusas verdes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#60ac45]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#60ac45]/5 rounded-full blur-3xl"></div>

      <div className="container relative text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          Nuestros Servicios
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#60ac45] rounded"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="p-6 bg-[#1a1a1a] rounded-xl border border-white/10 hover:border-[#60ac45] transition-colors duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(96,172,69,0.3)]"
            >
              {servicio.icon}
              <h3 className="text-xl font-semibold mb-2">{servicio.titulo}</h3>
              <p className="text-[--color-brand-white]/70 text-sm">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
