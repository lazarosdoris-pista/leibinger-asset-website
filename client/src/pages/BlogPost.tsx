import { useRoute } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

import { blogPosts } from "@/data/blogPosts";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:id");
  const post = params && blogPosts[params.id as keyof typeof blogPosts];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) return <div className="bg-black min-h-screen text-white flex items-center justify-center">Post not found</div>;

  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      <Navigation />
      
      <article className="pt-40 pb-20 relative">
        {/* Background Elements */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800/10 via-black to-black pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Link href="/#blog">
            <a className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm cursor-pointer">
              <ArrowLeft size={16} /> Back to Insights
            </a>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-500 font-body uppercase tracking-widest text-sm">{post.date}</span>
              <span className="border border-white/20 px-3 py-1 rounded-full text-xs text-gray-400 uppercase tracking-widest">{post.category}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase mb-12 leading-tight text-white">
              {post.title}
            </h1>

            <div 
              className="font-body text-gray-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-20 pt-12 border-t border-white/10">
              <h3 className="text-2xl font-display font-bold uppercase mb-8 text-white">Das könnte Sie auch interessieren</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {Object.entries(blogPosts)
                  .filter(([id]) => id !== params.id)
                  .slice(0, 2)
                  .map(([id, relatedPost]) => (
                    <Link key={id} href={`/blog/${id}`}>
                      <div className="group cursor-pointer border border-white/10 p-6 hover:bg-white/5 transition-colors">
                        <div className="text-xs text-gray-500 mb-2 uppercase tracking-widest">{relatedPost.category}</div>
                        <h4 className="text-xl font-display font-bold text-white group-hover:text-gray-300 transition-colors mb-4">{relatedPost.title}</h4>
                        <div className="flex items-center text-sm text-white uppercase tracking-widest gap-2">
                          Read Article <ArrowRight size={14} />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Contact />
    </div>
  );
}
