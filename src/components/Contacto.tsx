"use client";

import { useCallback } from "react";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Contacto() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value.trim();
    const asunto = (form.elements.namedItem("asunto") as HTMLInputElement).value.trim();
    const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value.trim();

    const texto = `Hola, soy ${nombre || "—"}.%0AAsunto: ${asunto || "Consulta"}%0A${mensaje || ""}`;
    const url = `https://wa.me/529992010912?text=${texto}`;
    window.open(url, "_blank");
    form.reset();
  }, []);

  return (
    <section
      id="contacto"
      className="relative pt-0 pb-20 border-t border-white/10 bg-[--color-brand-black] overflow-hidden"
    >
      {/* Franja SVG en la parte superior */}
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 150"
          preserveAspectRatio="none"
          className="w-full h-30"
        >
          <rect width="900" height="600" fill="#131313" />
          <path
            d="M0,88h56v62h57v-24h56V56h56v69h56v26h57V35h56v6h56v8h56v57h57v-21h56V17h56v9h56v46h57v27h56v-18h56V0H0v88Z"
            fill="#60ac45"
          />
        </svg>
      </div>

      {/* Luces difusas suaves */}
      <div className="pointer-events-none absolute -top-10 -left-16 w-72 h-72 bg-[#60ac45]/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-[#60ac45]/5 rounded-full blur-3xl" />

      <div className="container relative mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 relative inline-block">
          Contáctanos
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#60ac45] rounded"></span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form → WhatsApp */}
          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-white/10">
            <form onSubmit={onSubmit} className="space-y-4" aria-label="Formulario de contacto">
              <div>
                <label htmlFor="nombre" className="block text-sm mb-1 text-[--color-brand-white]/80">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  className="w-full rounded-lg bg-transparent border border-white/15 px-3 py-2 outline-none focus:border-[#60ac45]"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm mb-1 text-[--color-brand-white]/80">
                  Asunto
                </label>
                <input
                  id="asunto"
                  name="asunto"
                  type="text"
                  className="w-full rounded-lg bg-transparent border border-white/15 px-3 py-2 outline-none focus:border-[#60ac45]"
                  placeholder="Asesoría contable / fiscal"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm mb-1 text-[--color-brand-white]/80">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="w-full rounded-lg bg-transparent border border-white/15 px-3 py-2 outline-none focus:border-[#60ac45] resize-y"
                  placeholder="Cuéntanos brevemente tu necesidad…"
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-[#60ac45] px-5 py-3 font-semibold text-[--color-brand-black] hover:opacity-90 transition"
                >
                  Enviar por WhatsApp
                </button>

                <a
                  href="mailto:facundocime@hotmail.com"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium hover:text-[#60ac45] hover:border-[#60ac45] transition"
                >
                  Enviar correo
                </a>
              </div>
            </form>
          </div>

          {/* Contacto directo + mapa */}
          <div className="space-y-6">
            <div className="p-6 bg-[#1a1a1a] rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Datos de contacto</h3>
              <ul className="space-y-2 text-[--color-brand-white]/80">
                <li className="flex items-center gap-2">
                  <FiMail className="text-lg" />
                  <a
                    href="mailto:facundocime@hotmail.com"
                    className="hover:text-[#60ac45] transition-colors"
                  >
                    facundocime@hotmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaWhatsapp className="text-lg" />
                  <a
                    href="https://wa.me/529992010912"
                    target="_blank"
                    className="hover:text-[#60ac45] transition-colors"
                  >
                    999 201 0912
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm">📍</span>Mérida, Yucatán
                </li>
              </ul>

              <div className="mt-4 flex items-center gap-4 text-xl">
                <a
                  href="https://www.facebook.com/facundo.cime"
                  target="_blank"
                  className="text-[--color-brand-white] hover:text-[#60ac45] transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.tiktok.com/@faccime"
                  target="_blank"
                  className="text-[--color-brand-white] hover:text-[#60ac45] transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
