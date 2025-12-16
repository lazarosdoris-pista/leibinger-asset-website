import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start", 
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="blog" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
            Insights <br /> & News
          </h2>
          
          <div className="flex flex-col items-end gap-6 mt-6 md:mt-0">
            <div className="text-right text-gray-400 font-body text-sm max-w-xs">
              Aktuelle Gedanken zu Märkten, Strategien und der Zukunft des Investierens.
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 py-4">
              {Object.entries(blogPosts).map(([id, post], index) => (
                <div key={id} className="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-4 first:pl-0">
                  <Link href={`/blog/${id}`}>
                    <motion.article
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative flex flex-col h-[400px] border border-white/10 p-8 hover:border-white/40 transition-all duration-500 bg-white/5 hover:bg-white/10 backdrop-blur-sm cursor-pointer overflow-hidden"
                    >
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-6 flex justify-between items-start">
                          <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">{post.date}</span>
                          <span className="text-[10px] border border-white/20 px-3 py-1 rounded-full text-gray-400 uppercase tracking-widest group-hover:border-white/40 transition-colors bg-black/20 backdrop-blur-md">
                            {post.category}
                          </span>
                        </div>

                        <h3 className="text-2xl font-display font-bold uppercase mb-4 leading-tight text-gray-200 group-hover:text-white transition-colors line-clamp-3">
                          {post.title}
                        </h3>

                        <p className="text-sm text-gray-400 font-body mb-6 flex-grow leading-relaxed line-clamp-4 border-l border-white/20 pl-4">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                          <span className="text-xs font-body uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Read Article</span>
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
