import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative py-20 bg-[#60ac45] overflow-hidden">
      <div className="container relative grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#131313]">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-lg text-[#131313]/80 max-w-xl mb-10">
            En Cime Consultores te acompañamos con soluciones claras, confiables y hechas a tu medida.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/529992010912"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#131313] text-white font-semibold hover:opacity-90 transition"
            >
              <FaWhatsapp /> Escríbenos por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[#131313] text-[#131313] hover:bg-[#131313] hover:text-white transition"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Imagen decorativa */}
        <div className="relative">
          <Image
            src="/cta-hero.jpg"
            alt="Consultoría fiscal y contable"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
