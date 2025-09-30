"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Bloquear scroll al abrir menú + cerrar con ESC
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <>
            {/* Header fijo */}
            <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-[--color-brand-black]/40 backdrop-blur-md">
                <div className="container flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="#inicio" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Cime Consultores"
                            width={200}
                            height={200}
                        />
                    </Link>

                    {/* Botón MENÚ */}
                    <button
                        aria-label="Abrir menú"
                        aria-controls="side-menu"
                        aria-expanded={open}
                        onClick={() => setOpen(true)}
                        aria-hidden={open}
                        className={`group flex items-center gap-2 transition-opacity ${open ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}
                    >
                        <span className="uppercase text-sm tracking-widest text-[--color-brand-white] group-hover:text-[#60ac45] transition-colors">
                            Menú
                        </span>
                        <HiOutlineSquares2X2 className="w-5 h-5 text-[--color-brand-white] group-hover:text-[#60ac45] transition-colors" />
                    </button>
                </div>
            </header>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={close}
            />

            {/* Panel lateral */}
            <aside
                id="side-menu"
                className={`fixed top-0 right-0 z-[70] h-screen w-72 max-w-[90vw] bg-[--color-brand-black] border-l border-white/10 p-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between">
                    <p className="uppercase tracking-widest text-sm text-[#60ac45]">
                        Menú
                    </p>
                    <button
                        aria-label="Cerrar menú"
                        onClick={close}
                        className="h-8 w-8 grid place-content-center rounded border border-white/20 hover:bg-[#60ac45]/10"
                    >
                        ✕
                    </button>
                </div>

                {/* Links */}
                <nav className="mt-6 space-y-3">
                    <a href="#inicio" onClick={close} className="block text-lg hover:text-[#60ac45]">Inicio</a>
                    <a href="#nosotros" onClick={close} className="block text-lg hover:text-[#60ac45]">Nosotros</a>
                    <a href="#servicios" onClick={close} className="block text-lg hover:text-[#60ac45]">Servicios</a>
                    <a href="#por-que-elegirnos" onClick={close} className="block text-lg hover:text-[#60ac45]">¿Por qué elegirnos?</a>
                    <a href="#contacto" onClick={close} className="block text-lg hover:text-[#60ac45]">Contacto</a>
                </nav>

                {/* Contacto rápido */}
                <div className="mt-8">
                    <div className="flex items-center gap-4 text-2xl">
                        {/* Outlook -> mailto */}
                        <a
                            href="mailto:facundocime@hotmail.com"
                            aria-label="Enviar correo (Outlook)"
                            className="text-[--color-brand-white] hover:text-[#60ac45] transition-colors"
                            target="_blank"
                        >
                            <FiMail />
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/529992010912"
                            aria-label="WhatsApp"
                            className="text-[--color-brand-white] hover:text-[#60ac45] transition-colors"
                            target="_blank"
                        >
                            <FaWhatsapp />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/facundo.cime"
                            aria-label="Facebook"
                            className="text-[--color-brand-white] hover:text-[#60ac45] transition-colors"
                            target="_blank"
                        >
                            <FaFacebook />
                        </a>

                        {/* TikTok */}
                        <a
                            href="https://www.tiktok.com/@faccime"
                            aria-label="TikTok"
                            className="text-[--color-brand-white] hover:text-[#60ac45] transition-colors"
                            target="_blank"
                        >
                            <FaTiktok />
                        </a>
                    </div>

                    {/* Ubicación (opcional, pequeñito) */}
                    <p className="mt-4 text-sm text-white/60">Mérida, Yucatán</p>
                </div>

            </aside>
        </>
    );
}
