import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import { useEffect } from "react";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black text-white">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-40 pb-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-12">Impressum</h1>
        
        <div className="space-y-8 font-body text-gray-400">
          <section>
            <h2 className="text-xl text-white font-bold uppercase mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Leibinger Asset Management GmbH<br />
              Herterichstr. 174<br />
              81476 München
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-bold uppercase mb-4">Vertreten durch</h2>
            <p>
              Geschäftsführer: Fabian Leibinger
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-bold uppercase mb-4">Kontakt</h2>
            <p>
              Telefon: +49 (0) 89 12345678<br />
              E-Mail: beteiligung@leibinger-am.de
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-bold uppercase mb-4">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht München<br />
              Registernummer: HRB 289354
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-bold uppercase mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 365 245 123
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-bold uppercase mb-4">Haftungsausschluss (Disclaimer)</h2>
            <h3 className="text-white font-bold mt-4 mb-2">Haftung für Inhalte</h3>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            
            <h3 className="text-white font-bold mt-4 mb-2">Haftung für Links</h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-white font-bold mt-4 mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>

      <Contact />
    </div>
  );
}
