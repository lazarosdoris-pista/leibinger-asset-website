import { motion } from "framer-motion";

const criteria = [
  { label: "Umsatzvolumen", value: "100k - 5 Mio. EUR", desc: "Jahresumsatz" },
  { label: "Profitabilität", value: "Positive EBITDA", desc: "Nachweislich rentabel" },
  { label: "Branchen", value: "Traditionell", desc: "Handwerk, Produktion, Dienstleistungen" },
  { label: "Standort", value: "Süddeutschland", desc: "Bayern & Regionale Nähe" },
  { label: "Zeithorizont", value: "Langfristig", desc: "5-10 Jahre Partnerschaft" },
];

export default function InvestmentProfile() {
  return (
    <section className="py-32 bg-white text-black relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8 sticky top-32">
              Investitions-<br />profil
            </h2>
            <p className="text-gray-600 font-body text-lg mb-8 sticky top-64">
              Wir investieren gezielt in Unternehmen mit klaren Kriterien und langfristiger Perspektive.
              Start-ups, junge und etablierte Unternehmen mit Wachstumspotenzial.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 gap-px bg-gray-200 border border-gray-200">
            {criteria.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-12 hover:bg-gray-50 transition-colors group"
              >
                <div className="text-sm text-gray-400 uppercase tracking-widest mb-4">{item.label}</div>
                <div className="text-3xl md:text-4xl font-display font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {item.value}
                </div>
                <div className="text-gray-500 font-body">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
