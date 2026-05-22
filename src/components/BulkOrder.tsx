import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { TeaParticles } from "./TeaParticles";
import bulkBg from "@/assets/bulk-bg.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const stats = [
  { v: 10, suffix: "+", label: "Years Experience" },
  { v: 500, suffix: "+", label: "Happy Buyers" },
  { v: 20, suffix: "+", label: "Tea Varieties" },
  { v: 100, suffix: "%", label: "Quality Commitment" },
];

const features = [
  "Special Wholesale Pricing for Bulk Orders",
  "Premium Assam Tea with Reliable Supply",
  "Customized Packaging Available",
  "Export Quality Assured",
];

export function BulkOrder() {
  return (
    <section id="bulk" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bulkBg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/95 via-forest-deep/85 to-forest-deep/95" />
      </div>
      <TeaParticles count={24} />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-sm glass p-10 md:p-16 shadow-luxury"
        >
          <div className="absolute inset-0 pointer-events-none rounded-sm" style={{
            background: "linear-gradient(135deg, oklch(0.78 0.13 82 / 0.15), transparent 40%, oklch(0.78 0.13 82 / 0.1))"
          }} />

          <Sparkles className="h-8 w-8 text-gold mx-auto mb-6" strokeWidth={1.5} />
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Wholesale</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-cream leading-tight mb-6">
            Special pricing for <span className="italic text-gradient-gold">bulk orders</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12 mt-10">
            {features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-3 text-left rounded-sm border border-gold/20 bg-forest-deep/40 px-5 py-4"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="text-cream/85 text-sm">{f}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm uppercase tracking-[0.2em] text-forest-deep font-medium shadow-gold hover:scale-105 transition-transform duration-500"
            >
              Get Custom Quote
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-4 text-sm uppercase tracking-[0.2em] text-gold hover:bg-gold/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gold/15">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl md:text-5xl text-gradient-gold">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-cream/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
