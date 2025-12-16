import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-display font-bold uppercase mb-8"
        >
          Let's Talk
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 font-body max-w-2xl mx-auto mb-12"
        >
          Interessiert an einer Partnerschaft? Schreiben Sie uns eine E-Mail und wir melden uns zeitnah bei Ihnen.
        </motion.p>

        <motion.a
          href="mailto:beteiligung@leibinger-am.de"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="inline-block text-3xl md:text-5xl font-body border-b-2 border-white pb-2 hover:text-gray-300 hover:border-gray-300 transition-all"
        >
          beteiligung@leibinger-am.de
        </motion.a>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500 font-body uppercase tracking-widest">
          <div>
            Bayern, Deutschland
          </div>
          <div>
            Leibinger Asset Management
          </div>
          <div className="flex justify-center gap-4">
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </section>
  );
}
