import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import MisionVisionValores from "@/components/MisionVisionValores";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import CTA from "@/components/CTA";
import Contacto from "@/components/Contacto";
import Servicios from "@/components/Servicios";
// más secciones después…

export default function Home() {
  return (
    <>
      <Hero />
      <Nosotros />
      <MisionVisionValores />
      <Servicios />
      <PorQueElegirnos />
      <CTA />
      <Contacto />
 
    </>
  );
}