import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Strategie",
    subtitle: "Transformation & Vision",
    description: "Märkte wandeln sich radikal. Wir entwickeln nicht nur Konzepte, sondern transformieren Geschäftsmodelle. Von der digitalen Agenda bis zur nachhaltigen Neupositionierung – wir gestalten den Wandel aktiv.",
    tags: ["Digitale Transformation", "Geschäftsmodell-Innovation", "Marktstrategie", "Change Management"]
  },
  {
    id: "02",
    title: "Wachstum",
    subtitle: "Skalierung & Expansion",
    description: "Von der Vision zur Marktführerschaft – Wir begleiten Ihr Unternehmen auf dem Weg zu nachhaltigem Wachstum und einer signifikanten Umsatzsteigerung.",
    tags: ["Strategieentwicklung", "Marktexpansion", "Prozessoptimierung", "Vertriebssteuerung"]
  },
  {
    id: "03",
    title: "Restrukturierung",
    subtitle: "Turnaround & Performance",
    description: "Wir navigieren Unternehmen durch kritische Phasen. Mit präziser Analyse und konsequenter Umsetzung steigern wir die operative Leistung und sichern die Zukunftsfähigkeit – auch in herausfordernden Zeiten.",
    tags: ["Turnaround Management", "Effizienzsteigerung", "Liquiditätssicherung", "Krisenbewältigung"]
  },
  {
    id: "04",
    title: "Beteiligung",
    subtitle: "Strategische Partnerschaften",
    description: "Mehr als nur Kapital – Wir investieren direkt in Ihr Unternehmen und bringen aktive operative Unterstützung sowie jahrelange Expertise ein.",
    tags: ["Direktinvestition", "Operative Unterstützung", "Netzwerkzugang", "Langfristige Partnerschaft"]
  },
  {
    id: "05",
    title: "Due Diligence",
    subtitle: "Prüfung & Analyse",
    description: "Wir gehen tief ins Detail. Unsere Analyse ist kompromisslos gründlich, um Risiken zu minimieren und versteckte Potenziale aufzudecken. Wir prüfen Finanzen, Recht, Steuern und Marktposition bis ins kleinste Detail.",
    tags: ["Finanzanalyse", "Rechtliche Prüfung", "Marktanalyse", "Risikobewertung"]
  },
  {
    id: "06",
    title: "Nachfolge",
    subtitle: "Unternehmensübergabe",
    description: "Ihr Lebenswerk in sicheren Händen – Wir entwickeln eine maßgeschneiderte Nachfolgestrategie und begleiten Sie durch den gesamten Übergabeprozess.",
    tags: ["Nachfolgestrategie", "Übergabeprozess", "Vermögenssicherung", "Generationswechsel"]
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

  const toggleMobile = (index: number) => {
    setMobileExpandedIndex(mobileExpandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-black text-white relative overflow-hidden" id="expertise">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-20 border-b border-white/20 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
            Unsere <br /> Expertise
          </h2>
          <div className="text-left md:text-right text-gray-400 font-body text-sm max-w-xs">
            Ganzheitliche Beratung und Investment für den Mittelstand.
          </div>
        </div>

        {/* Desktop Layout (Split Screen) */}
        <div className="hidden lg:grid grid-cols-12 gap-24">
          {/* Left Column: Navigation / List */}
          <div className="col-span-5 flex flex-col gap-2">
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
          <div className="col-span-7 relative min-h-[400px]">
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

                  <p className="text-3xl font-light leading-relaxed text-gray-200 mb-12">
                    {services[activeIndex].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
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

        {/* Mobile Layout (Accordion) */}
        <div className="lg:hidden flex flex-col gap-4">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${
                mobileExpandedIndex === index ? "bg-white/5 border-white/30" : "bg-transparent"
              }`}
            >
              <button
                onClick={() => toggleMobile(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-mono">{service.id}</div>
                  <h3 className={`text-2xl font-display font-bold uppercase ${
                    mobileExpandedIndex === index ? "text-white" : "text-gray-300"
                  }`}>
                    {service.title}
                  </h3>
                </div>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${
                    mobileExpandedIndex === index ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileExpandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px w-full bg-white/10 mb-4" />
                      <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-4">
                        {service.subtitle}
                      </h4>
                      <p className="text-gray-300 font-light leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-[10px] uppercase tracking-wider border border-white/20 px-3 py-1 rounded-full text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
