import { motion } from "framer-motion";
import { ShieldCheck, Award, Sprout, Truck, BadgeDollarSign, Package } from "lucide-react";

const features = [
  { icon: Award, title: "Export Quality Standards", text: "Every consignment passes rigorous benchmarks before it leaves the warehouse." },
  { icon: ShieldCheck, title: "FSSAI Compliant", text: "Fully certified and compliant with food safety regulations." },
  { icon: Sprout, title: "Fresh Garden-Sourced", text: "Leaves picked, processed and dispatched without compromise." },
  { icon: Truck, title: "Reliable Supply Chain", text: "Dependable timelines for buyers in any corner of the world." },
  { icon: BadgeDollarSign, title: "Competitive Pricing", text: "Direct-from-estate sourcing keeps wholesale costs honest." },
  { icon: Package, title: "Custom Packaging", text: "White-label and bespoke packaging solutions on request." },
];

export function ExportSection() {
  return (
    <section id="export" className="relative bg-cream py-32 md:py-44 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><path fill='none' stroke='%23234B2F' stroke-width='1' d='M0 200 Q200 100 400 200 T800 200 M0 250 Q200 150 400 250 T800 250 M0 150 Q200 50 400 150 T800 150'/></svg>\")",
          backgroundSize: "cover",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-forest" />
            <span className="text-xs uppercase tracking-[0.4em] text-forest">Export & Quality</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-forest-deep leading-tight">
            Built for buyers who <span className="italic text-gradient-gold">demand more</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-sm border border-forest/10 bg-card p-8 transition-all duration-500 hover:shadow-luxury hover:border-gold/40"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-sm bg-forest-deep text-gold transition-colors group-hover:bg-gradient-gold group-hover:text-forest-deep">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-forest-deep mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.text}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-gold transition-all duration-700 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
