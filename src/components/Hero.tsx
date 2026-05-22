import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { TeaParticles } from "./TeaParticles";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    img: hero1,
    eyebrow: "Origin",
    title: "From the Heart of Assam",
    subtitle: "Premium tea sourced directly from the lush tea gardens of Northeast India.",
  },
  {
    img: hero2,
    eyebrow: "Heritage",
    title: "Crafted by Tradition",
    subtitle: "Authentic tea expertise passed through generations.",
  },
  {
    img: hero3,
    eyebrow: "Flavor",
    title: "The Taste of Pure Assam",
    subtitle: "Rich aroma, bold flavor, and unmatched freshness in every sip.",
  },
  {
    img: hero4,
    eyebrow: "Export",
    title: "Trusted Worldwide",
    subtitle: "Delivering premium Assam tea with consistency, quality, and care.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-forest-deep">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="h-full w-full object-cover animate-slow-zoom"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <TeaParticles count={28} />

      <div className="relative z-10 flex h-full items-center px-6">
        <div className="mx-auto w-full max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.4em] text-gold">{slide.eyebrow}</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-6">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-cream/80 max-w-xl leading-relaxed font-light mb-10">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="group inline-flex items-center gap-3 rounded-full border border-gold/70 bg-gold/5 px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-forest-deep transition-all duration-500 shadow-gold"
                >
                  Explore Collection
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-cream/80 hover:text-gold transition-colors"
                >
                  Our Story
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-px transition-all duration-500 ${
              i === index ? "w-16 bg-gold" : "w-8 bg-cream/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-2 text-gold/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
