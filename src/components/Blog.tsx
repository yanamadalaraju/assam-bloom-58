import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import b4 from "@/assets/blog-4.jpg";

const posts = [
  { img: b1, tag: "Heritage", date: "May 2026", title: "The Rich Heritage of Assam Tea", featured: true },
  { img: b2, tag: "Craft", date: "Apr 2026", title: "How Premium Tea is Crafted" },
  { img: b3, tag: "Global", date: "Mar 2026", title: "Why Assam Tea is Loved Worldwide" },
  { img: b4, tag: "Guide", date: "Feb 2026", title: "Understanding Orthodox vs CTC Tea" },
];

export function Blog() {
  return (
    <section id="blog" className="relative bg-cream py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-forest" />
              <span className="text-xs uppercase tracking-[0.4em] text-forest">Journal</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-forest-deep leading-tight">
              Stories from the <span className="italic text-gradient-gold">tea garden</span>
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-forest hover:text-gold transition-colors">
            All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group cursor-pointer ${p.featured ? "lg:row-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`relative overflow-hidden rounded-sm mb-5 ${p.featured ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-cream/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-forest-deep">
                  {p.tag}
                </span>
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{p.date}</div>
              <h3 className={`font-display text-forest-deep group-hover:text-gold transition-colors leading-tight mb-3 ${p.featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                {p.title}
              </h3>
              <span className="inline-flex items-center gap-2 text-sm text-forest border-b border-gold/40 pb-1">
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
