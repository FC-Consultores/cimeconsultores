import Image from "next/image";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative py-20 border-t border-white/10 bg-[--color-brand-black] overflow-hidden"
    >
     {/* BANDA DECORATIVA IZQUIERDA */}
  <div
    className="
      absolute inset-y-0 left-0 
      w-[46vw] max-w-[760px] 
      bg-[url('/fondo-nosotros.svg')] bg-no-repeat bg-cover bg-left 
      opacity-20 pointer-events-none hidden md:block
      after:absolute after:inset-0 after:content-[''] 
      after:bg-gradient-to-r after:from-transparent after:to-[--color-brand-black]
    "
  />

  <div className="container relative grid md:grid-cols-2 gap-12 items-center">
    {/* Columna texto */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
        Nosotros
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#60ac45] rounded"></span>
      </h2>

      <p className="text-[--color-brand-white]/80 leading-relaxed">
        En <strong>Cime Consultores</strong> brindamos asesoría fiscal y contable con 
        un enfoque práctico, claro y cercano. Nuestro propósito es ayudarte a cumplir 
        puntualmente con tus obligaciones fiscales, optimizar recursos y tomar decisiones 
        seguras con información confiable.
      </p>

      <p className="mt-4 text-[--color-brand-white]/80 leading-relaxed">
        Atendemos a personas físicas con actividad empresarial, pymes y negocios en 
        crecimiento. Nuestro compromiso es ofrecerte soluciones personalizadas y un 
        acompañamiento constante para que te concentres en hacer crecer tu negocio.
      </p>

      <p className="mt-6 font-medium text-[#60ac45] border-l-4 border-[#60ac45] pl-3">
        Cime Consultores · Tu aliado en finanzas y crecimiento.
      </p>
    </div>

        {/* Columna imagen */}
    <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden border border-white/10 shadow-lg transition-transform duration-700 hover:scale-105">
      <img
        src="/nosotros.jpg"
        alt="Equipo de Cime Consultores"
        className="object-cover w-full h-full"
      />
        </div>
      </div>
    </section>
  );
}
