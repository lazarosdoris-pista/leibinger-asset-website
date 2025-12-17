import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "Ab welcher Phase investieren Sie genau?",
      answer: "Wir fokussieren uns auf etablierte mittelständische Unternehmen in der DACH-Region sowie auf engagierte Gründer mit skalierbaren Geschäftsmodellen. Unser Sweetspot sind Unternehmen in Nachfolgesituationen, Wachstumsphasen oder komplexen Turnaround-Szenarien. Wir sind kein klassischer Early-Stage Venture Capital Investor, suchen aber gezielt nach unternehmerischem Potenzial."
    },
    {
      question: "Bleibt das Management an Bord?",
      answer: "Absolut. Wir verstehen uns als Partner auf Augenhöhe. Unser Ziel ist es, das bestehende Management zu stärken und gemeinsam Wachstumsstrategien zu entwickeln. Wir bringen Kapital und Expertise ein, ersetzen aber nicht die operative Führung, es sei denn, dies ist explizit gewünscht (z.B. bei Nachfolgelösungen)."
    },
    {
      question: "Wie sieht die Exit-Strategie aus?",
      answer: "Wir agieren mit einer langfristigen Perspektive. Im Gegensatz zu klassischen Private-Equity-Fonds haben wir keinen festen Verkaufsdruck nach wenigen Jahren. Unser Fokus liegt auf nachhaltiger Wertsteigerung. Ein Exit wird nur dann in Betracht gezogen, wenn es der strategisch sinnvollste Schritt für das Unternehmen und alle Beteiligten ist."
    },
    {
      question: "Woher stammt das Kapital?",
      answer: "Wir investieren ausschließlich eigene Mittel. Das gibt uns maximale Unabhängigkeit und Flexibilität. Wir sind keinen externen Investoren oder starren Fondslaufzeiten verpflichtet und können Entscheidungen schnell und pragmatisch treffen."
    },
    {
      question: "Wie hoch ist das Investitionsvolumen?",
      answer: "Unser typisches Investitionsvolumen (Equity Ticket) liegt bei bis zu 5 Millionen Euro pro Transaktion. Bei größeren Transaktionen können wir flexibel Co-Investoren aus unserem Netzwerk hinzuziehen."
    },
    {
      question: "Wie lange dauert der Prozess?",
      answer: "Dank unserer schlanken Strukturen und Unabhängigkeit können wir sehr schnell agieren. Von der ersten Prüfung bis zum Abschluss (Closing) vergehen oft nur wenige Wochen, sofern alle Informationen vorliegen. Wir legen Wert auf einen effizienten, transparenten Prozess ohne unnötige Bürokratie."
    },
    {
      question: "Welche Branchen sind für Sie interessant?",
      answer: "Wir sind branchenagnostisch, haben aber besondere Expertise in den Bereichen Industrie, Technologie, Dienstleistungen und Handel. Entscheidender als die Branche ist für uns das Geschäftsmodell und das Potenzial zur Wertsteigerung."
    }
  ];

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6">
            Häufige Fragen
          </h2>
          <p className="text-xl text-gray-400 font-body max-w-2xl mx-auto">
            Transparenz ist die Basis unserer Partnerschaft. Hier beantworten wir die wichtigsten Fragen vorab.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 rounded-lg px-6 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <AccordionTrigger className="text-lg md:text-xl font-display font-bold hover:no-underline py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-body text-base md:text-lg pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
