import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutLeaves from "@/assets/about-leaves.jpg";
import aboutEstate from "@/assets/about-estate.jpg";

const timeline = [
  { year: "Origin", title: "Rooted in Assam", text: "Founded with a singular vision to share the world's finest Assam tea." },
  { year: "Estates", title: "Trusted Gardens", text: "Direct relationships with premium estates across Northeast India." },
  { year: "Today", title: "A Global Reach", text: "Delivering authentic flavor to discerning buyers worldwide." },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section id="about" ref={ref} className="relative bg-cream py-32 md:py-44 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-forest-deep to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-forest" />
            <span className="text-xs uppercase tracking-[0.4em] text-forest">Our Story</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-forest-deep leading-tight">
            A vision brewed in the <span className="italic text-gradient-gold">gardens of Assam</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: y1 }} className="relative">
            <div className="relative overflow-hidden rounded-sm shadow-luxury">
              <img src={aboutEstate} alt="Assam tea estate" className="w-full h-[600px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent" />
            </div>
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-12 -right-6 md:-right-12 w-2/3 overflow-hidden rounded-sm shadow-luxury border-4 border-cream"
            >
              <img src={aboutLeaves} alt="Tea leaves" className="w-full h-64 object-cover" loading="lazy" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="font-display text-2xl md:text-3xl text-forest-deep leading-relaxed">
              "R K Tea Sales was founded with a singular vision — to bring the world's finest Assam tea
              directly from the lush gardens of Northeast India to discerning buyers across the globe."
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our deep-rooted connections with premium tea estates in Assam allow us to source the
              freshest, highest-quality tea leaves, ensuring every batch maintains the authentic
              character that Assam tea is celebrated for worldwide.
            </p>

            <div className="pt-8 space-y-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="flex gap-6 border-l-2 border-gold/40 pl-6"
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{t.year}</div>
                    <h3 className="font-display text-xl text-forest-deep mb-1">{t.title}</h3>
                    <p className="text-muted-foreground text-sm">{t.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
