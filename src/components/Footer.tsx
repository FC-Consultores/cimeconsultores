import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[--color-brand-black] border-t border-white/10 mt-20">
      <div className="container py-12">
        {/* Top: 2 columnas */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Columna izquierda: logo + texto */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              {/* Cambia por tu logo en /public/logo.png */}
              <Image src="/logo2.png" alt="Cime Consultores" width={110} height={110} />
            </div>
            <p className="mt-6 text-[--color-brand-white]/75 leading-relaxed">
              En <strong>Cime Consultores</strong> acompañamos a emprendedores y
              empresas con soluciones **fiscales y contables** claras, puntuales y
              confiables. Te ayudamos a cumplir ante el SAT, optimizar recursos y
              tomar decisiones con información actualizada.
            </p>
          </div>

          {/* Columna derecha: secciones + redes */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Secciones */}
            <nav aria-label="Secciones del sitio">
              <h4 className="text-sm uppercase tracking-widest text-[--color-brand-white]/70">
                Secciones
              </h4>
              <ul className="mt-4 space-y-3">
                <li><a href="#inicio"    className="hover:text-[#60ac45] transition-colors">Inicio</a></li>
                <li><a href="#nosotros"  className="hover:text-[#60ac45] transition-colors">Nosotros</a></li>
                <li><a href="#servicios" className="hover:text-[#60ac45] transition-colors">Servicios</a></li>
                <li><a href="#clientes"  className="hover:text-[#60ac45] transition-colors">Clientes</a></li>
                <li><a href="#contacto"  className="hover:text-[#60ac45] transition-colors">Contacto</a></li>
              </ul>
            </nav>

            {/* Redes */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-[--color-brand-white]/70">
                Contáctanos
              </h4>
              <ul className="mt-4 space-y-2 text-[--color-brand-white]/80">
                <li>
                  <a href="mailto:facundocime@hotmail.com" className="hover:text-[#60ac45] transition-colors inline-flex items-center gap-2">
                    <FiMail className="text-lg" /> facundocime@hotmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/529992010912" target="_blank" className="hover:text-[#60ac45] transition-colors inline-flex items-center gap-2">
                    <FaWhatsapp className="text-lg" /> 999 201 0912
                  </a>
                </li>
              </ul>

              <div className="mt-4 flex items-center gap-4 text-xl">
                <a href="https://www.facebook.com/facundo.cime" target="_blank"
                   className="text-[--color-brand-white] hover:text-[#60ac45] transition-colors" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://www.tiktok.com/@faccime" target="_blank"
                   className="text-[--color-brand-white] hover:text-[#60ac45] transition-colors" aria-label="TikTok">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-[--color-brand-white]/60">
          © {new Date().getFullYear()} Cime Consultores · Derechos reservados
        </div>
      </div>
    </footer>
  );
}
