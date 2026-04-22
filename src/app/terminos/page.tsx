import Link from "next/link";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-brand-white pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <Link href="/" className="text-brand-green hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-bold text-brand-dark mb-8">Términos y Condiciones</h1>
        
        <div className="text-brand-dark/70 space-y-6">
          <p className="font-semibold">Bienvenido a Cime Consultores. Al utilizar nuestros servicios, usted acepta los siguientes términos y condiciones:</p>
          
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. Servicios</h2>
          <p>Cime Consultores proporciona servicios de asesoría fiscal, contable y financiera. Los servicios específicos serán definidos en un contrato o acuerdo de prestación de servicios.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Obligaciones del cliente</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar información veraz y completa</li>
            <li>Entregar documentación en los plazos establecidos</li>
            <li>Pagar los honorarios acordados puntualmente</li>
            <li>Notificar cambios en su situación fiscal o empresarial</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Honorarios</h2>
          <p>Los honorarios se establecerán de acuerdo a la complejidad de los servicios requeridos. El incumplimiento en el pago podrá resultar en la suspensión de los servicios.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Confidencialidad</h2>
          <p>Nos comprometemos a mantener la confidencialidad de toda la información proporcionada, conforme a nuestra obligación profesional y el aviso de privacidad.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">5. Limitación de responsabilidad</h2>
          <p>Cime Consultores no se hace responsable por:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Multas o recargos derivados de información incompleta o falsa proporcionada por el cliente</li>
            <li>Retrasos en la entrega de documentación por parte del cliente</li>
            <li>Cambios en la legislación fiscal que afecten la situación del cliente</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">6. Propiedad intelectual</h2>
          <p>Todo el contenido de este sitio web (textos, imágenes, logotipos) es propiedad de Cime Consultores y está protegido por las leyes de propiedad intelectual.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">7. Modificaciones</h2>
          <p>Nos reservamos el derecho de modificar estos términos. Los cambios entrarán en vigor desde su publicación en esta página.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">8. Ley aplicable</h2>
          <p>Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia será resuelta en los tribunales de Mérida, Yucatán.</p>

          <p className="text-sm text-brand-dark/50 mt-12">
            Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}