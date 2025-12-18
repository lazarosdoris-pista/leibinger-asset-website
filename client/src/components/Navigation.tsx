import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Wachstum", href: "#growth" },
  { name: "Beteiligung", href: "#participation" },
  { name: "Nachfolge", href: "#succession" },
  { name: "Investitionsprofil", href: "#profile" },
  { name: "Insights", href: "#blog" },
  { name: "Kontakt", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 md:py-6 transition-all duration-300",
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3 md:py-4" : "bg-transparent mix-blend-difference"
        )}
      >
        <Link href="/">
          <div className="w-32 md:w-48 cursor-pointer">
            <img src="/images/logo.png" alt="Leibinger Asset Management" className="w-full h-auto invert" />
          </div>
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 uppercase text-sm font-body tracking-widest hover:text-gray-300 transition-colors"
        >
          <span className="hidden sm:block">Menu</span>
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-white rounded-full group-hover:bg-white group-hover:text-black transition-all">
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center p-4"
          >
            <div className="flex flex-col gap-6 md:gap-8 text-center w-full max-w-md">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  className="text-3xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:to-white transition-all cursor-pointer uppercase tracking-tighter"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            <div className="absolute bottom-10 left-0 w-full text-center text-gray-500 font-body text-xs md:text-sm uppercase tracking-widest px-4">
              Wachstum gestalten. Werte schaffen.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
