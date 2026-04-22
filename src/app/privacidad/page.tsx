import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-brand-white pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <Link href="/" className="text-brand-green hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-bold text-brand-dark mb-8">Aviso de Privacidad</h1>
        
        <div className="text-brand-dark/70 space-y-6">
          <p className="font-semibold">Cime Consultores, con domicilio en Mérida, Yucatán, México, es responsable de la protección de sus datos personales.</p>
          
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. Datos que recopilamos</h2>
          <p>Recopilamos los siguientes datos personales:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nombre completo</li>
            <li>Correo electrónico</li>
            <li>Número telefónico</li>
            <li>RFC (cuando es necesario para servicios fiscales)</li>
            <li>Información financiera relacionada con nuestros servicios</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Finalidad del tratamiento</h2>
          <p>Sus datos serán utilizados para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prestación de servicios contables y fiscales</li>
            <li>Comunicación sobre sus obligaciones fiscales</li>
            <li>Envío de información relevante sobre cambios en la legislación</li>
            <li>Facturación de nuestros servicios</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Transferencia de datos</h2>
          <p>Sus datos no serán transferidos a terceros, excepto cuando sea requerido por autoridad competente o sea necesario para el cumplimiento de obligaciones fiscales ante el SAT.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Derechos ARCO</h2>
          <p>Usted tiene derecho a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acceder</strong> a sus datos personales</li>
            <li><strong>Rectificar</strong> datos inexactos</li>
            <li><strong>Cancelar</strong> el uso de sus datos</li>
            <li><strong>Oponerse</strong> al tratamiento de los mismos</li>
          </ul>
          <p>Para ejercer sus derechos, envíe una solicitud a: contacto@cimeconsultores.com</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">5. Uso de cookies</h2>
          <p>Nuestro sitio web utiliza cookies para mejorar su experiencia. Consulte nuestra <Link href="/cookies" className="text-brand-green underline">Política de Cookies</Link> para más información.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">6. Cambios al aviso</h2>
          <p>Nos reservamos el derecho de modificar este aviso de privacidad. Los cambios serán publicados en esta página.</p>

          <p className="text-sm text-brand-dark/50 mt-12">
            Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}