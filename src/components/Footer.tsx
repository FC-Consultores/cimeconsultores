import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white/40 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Marca */}
        <div className="md:col-span-1 space-y-4">
          <Image src="/logo-horiz.png" alt="Cime Consultores" width={140} height={35} className="brightness-0 invert opacity-80" />
          <p className="text-sm leading-relaxed max-w-xs">
            Soluciones fiscales y contables para negocios que quieren crecer con seguridad y cumplimiento.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#nosotros" className="hover:text-brand-green transition-colors">Nosotros</Link></li>
            <li><Link href="#servicios" className="hover:text-brand-green transition-colors">Servicios</Link></li>
            <li><Link href="#por-que-elegirnos" className="hover:text-brand-green transition-colors">¿Por qué elegirnos?</Link></li>
            <li><Link href="#contacto" className="hover:text-brand-green transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacidad" className="hover:text-brand-green transition-colors">
                Aviso de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos" className="hover:text-brand-green transition-colors">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-brand-green transition-colors">
                Política de Cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <p className="text-sm mb-2">Mérida, Yucatán, México</p>
          <p className="text-sm">facundocime@hotmail.com</p>
          <p className="text-sm mt-1">+52 999 201 0912</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs">
        <p>© {new Date().getFullYear()} Cime Consultores. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}