import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Strategy",
    subtitle: "Transformation & Vision",
    description: "Märkte wandeln sich radikal. Wir entwickeln nicht nur Strategien, sondern transformieren Geschäftsmodelle. Von der digitalen Agenda bis zur nachhaltigen Neupositionierung – wir gestalten den Wandel aktiv.",
    tags: ["Digitale Transformation", "Geschäftsmodell-Innovation", "Marktstrategie", "Change Management"]
  },
  {
    id: "02",
    title: "Wachstum",
    subtitle: "Skalierung & Expansion",
    description: "Von der Vision zur Million – Wir begleiten Ihr Unternehmen auf dem Weg zu nachhaltigem Wachstum und einer Skalierung auf über 1 Mio. EUR Umsatz.",
    tags: ["Strategieentwicklung", "Marktexpansion", "Prozessoptimierung"]
  },
  {
    id: "03",
    title: "Restructuring",
    subtitle: "Turnaround & Performance",
    description: "Wir navigieren Unternehmen durch kritische Phasen. Mit präziser Analyse und konsequenter Umsetzung steigern wir die operative Performance und sichern die Zukunftsfähigkeit – auch in stürmischen Zeiten.",
    tags: ["Turnaround Management", "Effizienzprogramme", "Liquiditätssicherung", "Krisenbewältigung"]
  },
  {
    id: "04",
    title: "Beteiligung",
    subtitle: "Strategische Partnerschaften",
    description: "Mehr als nur Kapital – Wir investieren direkt in Ihr Unternehmen und bringen aktive operative Unterstützung und jahrelange Expertise mit ein.",
    tags: ["Direktinvestition", "Operative Unterstützung", "Netzwerk"]
  },
  {
    id: "05",
    title: "Due Diligence",
    subtitle: "Intensive Prüfung & Analyse",
    description: "Wir gehen tief ins Detail. Unsere Due Diligence ist kompromisslos gründlich, um Risiken zu minimieren und versteckte Potenziale aufzudecken. Wir analysieren Finanzen, Recht, Steuern und Marktposition bis ins kleinste Detail.",
    tags: ["Finanzanalyse", "Rechtliche Prüfung", "Marktanalyse", "Risikobewertung"]
  },
  {
    id: "06",
    title: "Nachfolge",
    subtitle: "Unternehmensübergabe",
    description: "Ihr Lebenswerk in sicheren Händen – Wir entwickeln eine maßgeschneiderte Nachfolgestrategie und begleiten Sie durch den gesamten Übergabeprozess.",
    tags: ["Nachfolgestrategie", "Übergabeprozess", "Sicherung"]
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden" id="expertise">
      <div className="container mx-auto px-4">
        <div className="mb-20 border-b border-white/20 pb-8 flex justify-between items-end">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
            Unsere <br /> Expertise
          </h2>
          <div className="hidden md:block text-right text-gray-400 font-body text-sm max-w-xs">
            Ganzheitliche Beratung und Investment für den Mittelstand.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Navigation / List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group cursor-pointer relative py-6 border-b border-white/10 transition-all duration-300 ${
                  activeIndex === index ? "opacity-100 pl-4" : "opacity-40 hover:opacity-70"
                }`}
              >
                {/* Active Indicator Line */}
                {activeIndex === index && (
                  <motion.div 
                    layoutId="activeLine"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                  />
                )}

                <div className="flex items-center justify-between">
                  <h3 className={`text-3xl md:text-4xl font-display font-bold uppercase transition-colors ${
                    activeIndex === index ? "text-white" : "text-gray-400"
                  }`}>
                    {service.title}
                  </h3>
                  <ArrowUpRight 
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "opacity-100 rotate-45" : "opacity-0"
                    }`} 
                  />
                </div>
                <p className={`text-sm mt-2 font-body uppercase tracking-widest transition-colors ${
                   activeIndex === index ? "text-gray-400" : "text-gray-600"
                }`}>
                  {service.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Content Display (Sticky) */}
          <div className="lg:col-span-7 relative min-h-[400px]">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10"
                >
                  {/* Decorative Background Number */}
                  <div className="absolute -top-20 -right-10 text-[200px] font-display font-bold text-white/5 select-none pointer-events-none">
                    {services[activeIndex].id}
                  </div>

                  <h3 className="text-2xl font-body text-white mb-8 uppercase tracking-widest border-l-2 border-white pl-4">
                    {services[activeIndex].subtitle}
                  </h3>

                  <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-200 mb-12">
                    {services[activeIndex].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services[activeIndex].tags.map((tag, i) => (
                      <motion.div 
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-center gap-3 text-gray-400 border border-white/10 p-4 rounded-sm bg-white/5 backdrop-blur-sm"
                      >
                        <CheckCircle2 size={16} className="text-white" />
                        <span className="uppercase text-xs tracking-wider">{tag}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Abstract Visual Element behind content */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white/5 to-transparent blur-3xl -z-10 rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
