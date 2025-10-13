import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.jsx'
import { 
  TrendingUp, 
  Handshake, 
  Target, 
  Euro, 
  BarChart3, 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  Shield, 
  Zap, 
  Star,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cookieBannerVisible, setCookieBannerVisible] = useState(() => {
    return localStorage.getItem('cookiePreference') === null
  })
  const [activeService, setActiveService] = useState(0)
  
  const handleCookieAccept = () => {
    localStorage.setItem('cookiePreference', 'accepted')
    setCookieBannerVisible(false)
  }
  
  const handleCookieDecline = () => {
    localStorage.setItem('cookiePreference', 'declined')
    setCookieBannerVisible(false)
  }
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const services = [
    {
      icon: TrendingUp,
      title: 'Wachstum',
      subtitle: 'Skalierung & Expansion',
      description: 'Von der Vision zur Million – Wir begleiten Ihr Unternehmen auf dem Weg zu nachhaltigem Wachstum und einer Skalierung auf über 1 Mio. EUR Umsatz.',
      color: 'bg-slate-700',
      features: [
        'Strategieentwicklung',
        'Marktexpansion',
        'Prozessoptimierung',
        'Finanzierungsstruktur'
      ]
    },
    {
      icon: Handshake,
      title: 'Beteiligung',
      subtitle: 'Strategische Partnerschaften',
      description: 'Mehr als nur Kapital – Wir investieren direkt in Ihr Unternehmen und bringen aktive operative Unterstützung und jahrelange Expertise mit ein.',
      color: 'bg-slate-600',
      features: [
        'Eigenkapitalinvestment',
        'Operative Unterstützung',
        'Netzwerkzugang',
        'Strategische Beratung'
      ]
    },
    {
      icon: Target,
      title: 'Nachfolge',
      subtitle: 'Unternehmensübergabe',
      description: 'Ihr Lebenswerk in sicheren Händen – Wir entwickeln eine maßgeschneiderte Nachfolgestrategie und begleiten Sie durch den gesamten Übergabeprozess.',
      color: 'bg-slate-800',
      features: [
        'Nachfolgestrategie',
        'Nachfolger-Suche',
        'Vertragsverhandlung',
        'Kontinuitätssicherung'
      ]
    }
  ]

  const investmentCriteria = [
    {
      icon: Euro,
      title: 'Umsatzvolumen',
      main: '100k - 5 Mio. EUR Jahresumsatz',
      description: 'Start-ups, junge und etablierte Unternehmen mit Wachstumspotenzial'
    },
    {
      icon: BarChart3,
      title: 'Profitabilität',
      main: 'Positive EBITDA-Marge',
      description: 'Nachweislich rentable Geschäftsmodelle'
    },
    {
      icon: Building2,
      title: 'Branchen',
      main: 'Traditionelle Industrien',
      description: 'Fokus auf Handwerk, Produktion, Dienstleistungen'
    },
    {
      icon: MapPin,
      title: 'Standort',
      main: 'Bayern & Süddeutschland',
      description: 'Regionale Nähe für persönliche Betreuung'
    },
    {
      icon: Calendar,
      title: 'Zeithorizont',
      main: 'Langfristige Partnerschaft',
      description: 'Mindestens 5-10 Jahre Zusammenarbeit'
    },
    {
      icon: Building2,
      title: 'Management',
      main: 'Engagierte Führung',
      description: 'Motivierte Unternehmer mit Wachstumswillen'
    }
  ]

  const processSteps = [
    {
      number: 1,
      icon: Users,
      title: 'Erstgespräch',
      description: 'Kostenlose Analyse Ihrer Situation und Ihrer Ziele',
      duration: '1-2 Wochen',
      color: 'bg-slate-700'
    },
    {
      number: 2,
      icon: Shield,
      title: 'Due Diligence',
      description: 'Umfassende Prüfung und Bewertung Ihres Unternehmens',
      duration: '2-4 Wochen',
      color: 'bg-slate-600'
    },
    {
      number: 3,
      icon: Target,
      title: 'Strategie',
      description: 'Entwicklung maßgeschneiderter Lösungen und Roadmap',
      duration: '1-2 Wochen',
      color: 'bg-slate-700'
    },
    {
      number: 4,
      icon: Zap,
      title: 'Umsetzung',
      description: 'Gemeinsame Realisierung der vereinbarten Ziele',
      duration: 'Laufend',
      color: 'bg-slate-600'
    },
    {
      number: 5,
      icon: Star,
      title: 'Erfolg',
      description: 'Nachhaltiger Unternehmenserfolg und langfristige Partnerschaft',
      duration: 'Langfristig',
      color: 'bg-slate-800'
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cookie Banner */}
      {cookieBannerVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 z-50 shadow-lg">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              Wir verwenden Cookies, um die Funktionalität unserer Website zu gewährleisten und zu verbessern. 
              Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. 
              Weitere Informationen finden Sie in unserer{' '}
              <a href="#" className="underline">Datenschutzerklärung</a>.
            </p>
            <div className="flex gap-2 shrink-0">
              <Button onClick={handleCookieAccept} className="bg-slate-600 hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-200">
                Alle Cookies akzeptieren
              </Button>
              <Button onClick={handleCookieDecline} className="bg-slate-500 hover:bg-slate-600 text-white shadow-md hover:shadow-lg transition-all duration-200">
                Ablehnen
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Leibinger Asset Management" className="h-10" />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => scrollToSection('wachstum')}>Wachstum</Button>
              <Button variant="ghost" onClick={() => scrollToSection('beteiligung')}>Beteiligung</Button>
              <Button variant="ghost" onClick={() => scrollToSection('investitionsprofil')}>Investitionsprofil</Button>
              <Button variant="ghost" onClick={() => scrollToSection('kontakt')}>Kontakt</Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2">
              <Button variant="ghost" onClick={() => { scrollToSection('wachstum'); setMobileMenuOpen(false); }}>Wachstum</Button>
              <Button variant="ghost" onClick={() => { scrollToSection('beteiligung'); setMobileMenuOpen(false); }}>Beteiligung</Button>
              <Button variant="ghost" onClick={() => { scrollToSection('investitionsprofil'); setMobileMenuOpen(false); }}>Investitionsprofil</Button>
              <Button variant="ghost" onClick={() => { scrollToSection('kontakt'); setMobileMenuOpen(false); }}>Kontakt</Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
            Wachstum gestalten.<br />Werte schaffen.
          </h1>
          <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto">
            Ihr strategischer Partner für nachhaltigen Erfolg im Mittelstand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-slate-600 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => scrollToSection('kontakt')}
            >
              Kostenloses Erstgespräch
            </Button>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section id="services" className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div 
                  key={index}
                  id={service.title.toLowerCase()}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-slate-300 flex flex-col"
                >
                  <div className={`${service.color} w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 text-center mb-4">{service.subtitle}</p>
                  <p className="text-gray-700 text-center mb-6">{service.description}</p>
                  <Button 
                    variant="default" className="w-full bg-slate-700 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all duration-200 mt-auto" >
                    Mehr erfahren
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Unsere Expertise</h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 shadow-lg">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div 
                    key={index}
                    className={`${activeService === index ? 'block' : 'hidden'}`}
                  >
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-white rounded-full text-sm text-gray-600 mb-4">
                        {service.subtitle}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Left Column - Text */}
                      <div>
                        <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                        <p className="text-base text-gray-700 mb-6">{service.description}</p>
                        
                        {/* Feature List with Checkmarks */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          variant="default" 
                          className="bg-slate-700 hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-200"
                        >
                          Mehr erfahren
                        </Button>
                      </div>
                      
                      {/* Right Column - Large Icon */}
                      <div className="flex justify-center">
                        <div className={`${service.color} w-56 h-56 rounded-full flex items-center justify-center shadow-2xl`}>
                          <Icon className="w-28 h-28 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              
              {/* Carousel Dots */}
              <div className="flex justify-center gap-3 mt-12">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-4 h-4 rounded-full transition-all ${
                      activeService === index 
                        ? service.color.replace('bg-', 'bg-') + ' scale-125' 
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Service ${index + 1} auswählen`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Profile */}
      <section id="investitionsprofil" className="py-12 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Unser Investitionsprofil</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Wir investieren gezielt in Unternehmen mit klaren Kriterien und langfristiger Perspektive
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentCriteria.map((criterion, index) => {
              const Icon = criterion.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{criterion.title}</h3>
                  <p className="font-semibold text-gray-900 mb-2">{criterion.main}</p>
                  <p className="text-gray-600 text-sm">{criterion.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Passt Ihr Unternehmen zu unserem Profil?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, ob wir der richtige Partner für Ihr Unternehmen sind.
          </p>
          <Button 
            size="lg" 
            className="bg-slate-600 hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => scrollToSection('kontakt')}
          >
            Jetzt Gespräch vereinbaren
          </Button>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Unser Prozess</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto">
            Von der ersten Kontaktaufnahme bis zur erfolgreichen Partnerschaft – Ihr Weg zu nachhaltigem Unternehmenserfolg in 5 strukturierten Schritten
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 h-full flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                    {/* Number Badge */}
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg`}>
                      {step.number}
                    </div>
                    {/* Large Icon Circle */}
                    <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-2xl`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-700 mb-4 flex-grow">{step.description}</p>
                    <p className="text-xs text-gray-500 font-medium">{step.duration}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für den ersten Schritt?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Unternehmen auf das nächste Level bringen. Vereinbaren Sie noch heute Ihr kostenloses Erstgespräch.
          </p>
          <Button 
            size="lg" 
            className="bg-slate-600 hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => scrollToSection('kontakt')}
          >
            Prozess starten
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Kontaktieren Sie uns</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Kontakt</h3>
              <p className="text-gray-300 mb-6">
                Interessiert an einer Partnerschaft? Schreiben Sie uns eine E-Mail und wir melden uns zeitnah bei Ihnen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>Bayern, Deutschland</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <a href="mailto:beteiligung@leibinger-am.de" className="flex items-center gap-3 hover:text-slate-400 transition-colors text-lg">
                    <span className="text-2xl">✉️</span>
                    <p className="font-semibold">beteiligung@leibinger-am.de</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Leibinger Asset Management</h3>
          <p className="text-gray-400 mb-6">
            Ihr strategischer Partner für nachhaltigen Erfolg im Mittelstand
          </p>
          <div className="flex justify-center gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-slate-400 hover:text-slate-300 transition-colors cursor-pointer">
                  Impressum
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Rechtliche Hinweise</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-bold mb-2">Angaben gemäß § 5 TMG</h3>
                    <p>Leibinger Asset Management GmbH</p>
                    <p>Herterichstr. 174</p>
                    <p>81476 München</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Kontakt</h3>
                    <p></p>
                    <p>E-Mail: info@leibinger-am.de</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Vertretungsberechtigte Geschäftsführer</h3>
                    <p>Fabian Leibinger</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Registereintrag</h3>
                    <p>Eintragung im Handelsregister</p>
                    <p>Registergericht: Amtsgericht München</p>
                    <p>Registernummer: HRB 289101</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Umsatzsteuer-ID</h3>
                    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                    <p>DE367614650</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-slate-400 hover:text-slate-300 transition-colors cursor-pointer">
                  Datenschutz
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Datenschutzerklärung</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-bold mb-2">1. Datenschutz auf einen Blick</h3>
                    <h4 className="font-semibold mb-1">Allgemeine Hinweise</h4>
                    <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">2. Datenerfassung auf dieser Website</h3>
                    <h4 className="font-semibold mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                    <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Wie erfassen wir Ihre Daten?</h4>
                    <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                    <p className="mt-2">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Wofür nutzen wir Ihre Daten?</h4>
                    <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">3. Kontaktformular</h3>
                    <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">4. Cookies</h3>
                    <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

