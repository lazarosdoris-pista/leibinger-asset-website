import { motion } from "framer-motion";
import LiquidCore from "./LiquidCore";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col md:flex-row">
      {/* Left Side: Minimalist Reality */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-full bg-black flex flex-col justify-center px-6 md:px-20 relative z-10 border-b md:border-b-0 md:border-r border-white/10 pt-32 md:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-white/50 font-body uppercase tracking-widest text-xs md:text-sm mb-4">
            Strategic Partner
          </h2>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.9] mb-6 md:mb-8">
            WACHSTUM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
              GESTALTEN
            </span>
          </h1>
          <p className="text-gray-400 max-w-md font-body text-base md:text-lg leading-relaxed mb-8 md:mb-0">
            Ihr strategischer Partner für nachhaltigen Erfolg im Mittelstand. 
            Wir transformieren Visionen in messbare Realität.
          </p>
          
          <div className="mt-8 md:mt-12 flex gap-6">
            <button className="px-6 py-3 md:px-8 md:py-4 border border-white text-white font-body uppercase tracking-widest text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300">
              Erstgespräch
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Experimental Liquid Reality */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-full bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black z-0" />
        
        {/* 3D Liquid Element */}
        <div className="absolute inset-0 z-10">
          <LiquidCore className="w-full h-full" />
        </div>
        
        {/* Visionary Overlay Elements */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-12 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="self-end text-right pt-20 md:pt-32"
          >

            <div className="text-2xl md:text-3xl font-display font-bold text-white/90 leading-tight">
              BEYOND<br/>CAPITAL
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="self-start max-w-xs hidden md:block"
          >
            <div className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-4">Mission</div>
            <p className="text-lg font-display text-white/80 leading-relaxed">
              Wir investieren nicht nur in Unternehmen. Wir investieren in <span className="text-white font-bold">Charakter</span>, <span className="text-white font-bold">Mut</span> und <span className="text-white font-bold">Zukunft</span>.
            </p>
          </motion.div>
        </div>

        {/* Interactive Floating Tags - Hidden on mobile to reduce clutter */}
        <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
           {['Innovation', 'Tradition', 'Excellence'].map((tag, i) => (
             <motion.div
               key={tag}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ 
                 opacity: [0.3, 0.6, 0.3], 
                 y: [0, -20, 0],
                 x: [0, i % 2 === 0 ? 10 : -10, 0]
               }}
               transition={{ 
                 duration: 4 + i, 
                 repeat: Infinity, 
                 delay: i * 0.5,
                 ease: "easeInOut" 
               }}
               className={`absolute text-white/10 font-display font-bold text-6xl uppercase tracking-tighter select-none
                 ${i === 0 ? 'top-1/3 right-1/4' : ''}
                 ${i === 1 ? 'bottom-1/4 right-1/3' : ''}
                 ${i === 2 ? 'top-1/2 left-1/4' : ''}
               `}
             >
               {tag}
             </motion.div>
           ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-[10px] md:text-xs uppercase tracking-[0.3em] z-30"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
}
