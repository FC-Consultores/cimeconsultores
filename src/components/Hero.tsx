const WA = "https://wa.me/529992010912";
const WA_MSG = encodeURIComponent(
  "Hola, me gustaría información de asesoría contable y fiscal. ¿Podemos hablar?"
);

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center"
      aria-label="Inicio - Asesoría contable y fiscal"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Overlay para oscurecer */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Asesoría fiscal y contable{" "}
            <span className="text-[#60ac45]">para tu negocio</span>
          </h1>

          <p className="mt-4 text-[--color-brand-white]/90">
            Facturación 4.0, declaraciones mensuales y anuales, auditoría interna y
            corrección de créditos fiscales ante el SAT. Acompañamos a tu negocio con
            soluciones claras y puntuales.
          </p>

          {/* Bullets */}
          <ul className="mt-6 grid gap-3 text-[--color-brand-white]/85">
            {[
              "Cumplimiento puntual ante el SAT",
              "Acompañamiento cercano y confiable",
              "Enfoque práctico para emprendedores y pymes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#60ac45]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Botones */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${WA}?text=${WA_MSG}`}
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-[#60ac45] px-5 py-3 font-semibold text-[--color-brand-black] hover:opacity-90 transition"
            >
              Escríbenos por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium hover:text-[#60ac45] hover:border-[#60ac45] transition"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
