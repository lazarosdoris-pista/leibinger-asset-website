import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "essential");
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    // In a real implementation, we would save specific preferences
    localStorage.setItem("cookie-consent", "custom");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 text-white p-6 md:p-8 shadow-2xl rounded-none">
            {!showDetails ? (
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold uppercase mb-2">Datenschutz-Einstellungen</h3>
                  <p className="text-sm text-gray-300 font-body leading-relaxed">
                    Wir nutzen Cookies und vergleichbare Technologien, um die Funktionalität unserer Website zu gewährleisten und zu verbessern. 
                    Einige sind essenziell, andere helfen uns, Ihr Nutzungserlebnis zu optimieren.
                  </p>
                  <button 
                    onClick={() => setShowDetails(true)}
                    className="mt-2 text-xs uppercase tracking-widest border-b border-white/30 hover:border-white transition-colors pb-0.5"
                  >
                    Einstellungen anpassen
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <button 
                    onClick={handleRejectAll}
                    className="px-6 py-3 border border-white/30 hover:bg-white/10 transition-colors text-xs uppercase tracking-widest font-body"
                  >
                    Nur Essenzielle
                  </button>
                  <button 
                    onClick={handleAcceptAll}
                    className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-xs uppercase tracking-widest font-body font-bold"
                  >
                    Alle Akzeptieren
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <h3 className="text-xl font-display font-bold uppercase">Cookie-Einstellungen</h3>
                  <button onClick={() => setShowDetails(false)} className="hover:text-gray-300">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="grid gap-4">
                  <div className="flex items-start gap-4 p-4 border border-white/10 bg-white/5">
                    <input type="checkbox" checked disabled className="mt-1" />
                    <div>
                      <h4 className="font-bold uppercase text-sm mb-1">Essenzielle Cookies</h4>
                      <p className="text-xs text-gray-400">Notwendig für die grundlegende Funktionalität der Website (z.B. Speicherung Ihrer Cookie-Einstellungen).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 border border-white/10 hover:bg-white/5 transition-colors">
                    <input type="checkbox" defaultChecked className="mt-1" />
                    <div>
                      <h4 className="font-bold uppercase text-sm mb-1">Analyse & Statistik</h4>
                      <p className="text-xs text-gray-400">Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um Fehler zu finden und die UX zu verbessern.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 border border-white/10 hover:bg-white/5 transition-colors">
                    <input type="checkbox" defaultChecked className="mt-1" />
                    <div>
                      <h4 className="font-bold uppercase text-sm mb-1">Marketing</h4>
                      <p className="text-xs text-gray-400">Werden verwendet, um Besuchern relevante Werbung anzuzeigen (derzeit nicht aktiv).</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
                  <button 
                    onClick={handleRejectAll}
                    className="px-6 py-3 border border-white/30 hover:bg-white/10 transition-colors text-xs uppercase tracking-widest font-body"
                  >
                    Alle Ablehnen
                  </button>
                  <button 
                    onClick={handleSaveSettings}
                    className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-xs uppercase tracking-widest font-body font-bold"
                  >
                    Auswahl Speichern
                  </button>
                </div>
                
                <div className="text-xs text-gray-500 flex gap-4">
                  <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutzerklärung</a>
                  <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
