import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 👈 Importa el navbar

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cime Consultores | Asesores Fiscales y Contables en Mérida",
  description: "Asesoría fiscal, contable y financiera con precisión, tecnología y transparencia. Cumplimiento ante el SAT, facturación 4.0 y nómina.",
  keywords: ["contador en mérida", "asesoría fiscal", "declaraciones SAT", "facturación electrónica", "nómina empresas"],
  openGraph: {
    title: "Cime Consultores | Soluciones Fiscales y Contables",
    description: "Acompañamos a tu negocio con soluciones claras y puntuales ante el SAT.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-brand-white text-brand-dark antialiased`}>
        <Navbar /> {/* 👈 Navbar fijo en todas las páginas */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}