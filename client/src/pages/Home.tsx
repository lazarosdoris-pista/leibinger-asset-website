import Hero from "@/components/Hero";
import Services from "@/components/Services";
import InvestmentProfile from "@/components/InvestmentProfile";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";

export default function Home() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <InvestmentProfile />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}
