"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "¿Por qué elegirnos?", href: "#por-que-elegirnos" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* NAVBAR FIJO */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-dark/90 backdrop-blur-md border-b border-white/10 shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Responsive */}
          <Link href="#hero" onClick={() => setIsOpen(false)} className="block relative z-50">
            <Image
              src="/logo-horiz.png"
              alt="Cime Consultores"
              width={160}
              height={40}
              className="hidden md:block object-contain"
            />
            <Image
              src="/logo-icon.png"
              alt="Cime Consultores"
              width={80}
              height={80}
              className="md:hidden object-contain"
            />
          </Link>

          {/* Botón Menú */}
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 text-white font-medium hover:text-brand-green transition-colors group relative z-50"
          >
            <span className="hidden sm:inline tracking-widest text-sm">MENÚ</span>
            <HiOutlineSquares2X2 size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </nav>

      {/* OVERLAY + DRAWER LATERAL */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-[#1a1a1a] border-l border-white/10 z-50 p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-brand-green font-bold tracking-widest text-sm">MENÚ</span>
                <button onClick={toggleMenu} className="text-white hover:text-brand-green transition-colors p-2">
                  <HiOutlineSquares2X2 size={24} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-white text-xl font-medium hover:text-brand-green transition-colors border-b border-white/5 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Redes y Ubicación */}
              <div className="mt-auto space-y-6 pt-6 border-t border-white/10">
                <div className="flex gap-4">
                  <a href="mailto:contacto@cimeconsultores.com" className="text-white/70 hover:text-brand-green transition-colors p-2 bg-white/5 rounded-full">
                    <FiMail size={20} />
                  </a>
                  <a href="https://wa.me/529992010912" className="text-white/70 hover:text-brand-green transition-colors p-2 bg-white/5 rounded-full">
                    <FaWhatsapp size={20} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-brand-green transition-colors p-2 bg-white/5 rounded-full">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-brand-green transition-colors p-2 bg-white/5 rounded-full">
                    <FaTiktok size={20} />
                  </a>
                </div>
                <p className="text-white/40 text-sm flex items-center gap-2">
                  📍 Mérida, Yucatán
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}