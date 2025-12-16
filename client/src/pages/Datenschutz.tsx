import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import { useEffect } from "react";

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black text-white">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-40 pb-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-12">Datenschutz</h1>
        
        <div className="space-y-8 font-body text-gray-400">
          <section>
            <h2 className="text-xl text-white font-bold uppercase mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-white font-bold mt-4 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-bold uppercase mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-bold uppercase mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-white font-bold mt-4 mb-2">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            
            <h3 className="text-white font-bold mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
              Leibinger Asset Management GmbH<br />
              Herterichstr. 174<br />
              81476 München<br />
              E-Mail: beteiligung@leibinger-am.de
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-bold uppercase mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-white font-bold mt-4 mb-2">Cookies</h3>
            <p className="mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>
            
            <h3 className="text-white font-bold mt-4 mb-2">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>
        </div>
      </div>

      <Contact />
    </div>
  );
}
