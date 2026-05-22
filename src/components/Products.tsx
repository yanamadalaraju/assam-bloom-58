import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import tCtc from "@/assets/tea-ctc.jpg";
import tOrtho from "@/assets/tea-orthodox.jpg";
import tGreen from "@/assets/tea-green.jpg";
import tMasala from "@/assets/tea-masala.jpg";
import tFlav from "@/assets/tea-flavored.jpg";
import tExport from "@/assets/tea-export.jpg";

const products = [
  { img: tCtc, title: "CTC Tea", desc: "Bold, brisk and full-bodied — the classic Assam cup." },
  { img: tOrtho, title: "Orthodox Tea", desc: "Whole-leaf craftsmanship with layered character." },
  { img: tGreen, title: "Green Tea", desc: "Delicate, fresh and gently grassy from young leaves." },
  { img: tMasala, title: "Masala Tea", desc: "Warm spice blend rooted in Indian tradition." },
  { img: tFlav, title: "Flavored Tea", desc: "Botanicals and florals woven into premium leaves." },
  { img: tExport, title: "Export Blends", desc: "Custom blends crafted for global buyers." },
];

export function Products() {
  return (
    <section id="products" className="relative bg-forest-deep py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.85 0.12 85) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Collection</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight">
            A curated <span className="italic text-gradient-gold">tea library</span>
          </h2>
          <p className="mt-6 text-cream/70 text-lg">
            Six expressions of Assam — from estate-fresh CTC to bespoke export blends.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm glass cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-cream mb-2">{p.title}</h3>
                  <p className="text-cream/70 text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <span className="text-xs uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-1">
                    View Details
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
