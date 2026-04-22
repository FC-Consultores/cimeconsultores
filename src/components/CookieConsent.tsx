"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Mostrar banner después de 2 segundos
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    // Aquí puedes inicializar Google Analytics u otras herramientas
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-brand-dark border-t border-white/10 p-4 md:p-6 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/80 text-sm text-center md:text-left">
              <p className="font-semibold text-white mb-1">🍪 Usamos cookies</p>
              <p>
                Utilizamos cookies para mejorar tu experiencia. Al aceptar, nos ayudas a entender cómo usas nuestro sitio. 
                <a href="/cookies" className="text-brand-green underline ml-1">
                  Más información
                </a>
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={rejectCookies}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-brand-green text-white font-medium rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}