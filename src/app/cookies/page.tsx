import Link from "next/link";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-brand-white pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <Link href="/" className="text-brand-green hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-bold text-brand-dark mb-8">Política de Cookies</h1>
        
        <div className="text-brand-dark/70 space-y-6">
          <p className="font-semibold">En Cime Consultores utilizamos cookies para mejorar su experiencia en nuestro sitio web.</p>
          
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. ¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos ayudan a proporcionar una mejor experiencia de usuario.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Tipos de cookies que utilizamos</h2>
          
          <h3 className="text-xl font-bold text-brand-dark mt-6 mb-3">Cookies esenciales</h3>
          <p>Son necesarias para el funcionamiento del sitio web. No pueden ser desactivadas.</p>
          
          <h3 className="text-xl font-bold text-brand-dark mt-6 mb-3">Cookies de análisis</h3>
          <p>Nos permiten contar visitas y fuentes de tráfico para mejorar el rendimiento de nuestro sitio. Utilizamos Vercel Analytics y Google Analytics.</p>
          
          <h3 className="text-xl font-bold text-brand-dark mt-6 mb-3">Cookies de funcionalidad</h3>
          <p>Permiten recordar sus preferencias (como el idioma o región) para personalizar su experiencia.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Cookies de terceros</h2>
          <p>Utilizamos servicios de terceros que pueden instalar cookies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Vercel Analytics:</strong> Para analizar el tráfico del sitio</li>
            <li><strong>Google Analytics:</strong> Para entender el comportamiento de los usuarios</li>
            <li><strong>WhatsApp Business:</strong> Para la funcionalidad de chat directo</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Cómo gestionar las cookies</h2>
          <p>Puede configurar su navegador para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Recibir una notificación cuando se instalen cookies</li>
            <li>Bloquear cookies de terceros</li>
            <li>Eliminar cookies existentes</li>
          </ul>
          <p className="text-sm italic">Nota: Al desactivar ciertas cookies, algunas funcionalidades del sitio pueden no estar disponibles.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">5. Duración de las cookies</h2>
          <p>Las cookies que utilizamos tienen diferentes duraciones:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sesión:</strong> Se eliminan al cerrar el navegador</li>
            <li><strong>Persistentes:</strong> Permanecen desde 24 horas hasta 2 años</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">6. Actualizaciones</h2>
          <p>Podemos actualizar esta política de cookies periódicamente. Le recomendamos revisarla regularmente.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">7. Contacto</h2>
          <p>Si tiene preguntas sobre nuestra política de cookies, contáctenos en: <a href="mailto:facundocime@hotmail.com" className="text-brand-green underline">facundocime@hotmail.com</a></p>

          <p className="text-sm text-brand-dark/50 mt-12">
            Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}