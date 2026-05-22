import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Gift, Truck, Percent } from "lucide-react";

const offers = [
  { icon: Percent, title: "Up to 25% Off", text: "On first bulk wholesale order above 100kg." },
  { icon: Truck, title: "Free Export Shipping", text: "Complimentary shipping on FOB orders above 500kg." },
  { icon: Gift, title: "Free Sample Kit", text: "Curated tasting kit with every quotation request." },
];

export function OffersPopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (shown) return;
      const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (ratio > 0.35) {
        setOpen(true);
        setShown(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [shown]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest-deep/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.85, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-sm shadow-luxury"
          >
            {/* gradient frame */}
            <div className="absolute inset-0 bg-gradient-gold opacity-90" />
            <div className="relative m-[2px] rounded-sm bg-forest-deep p-8 md:p-12 text-center">
              {/* glow */}
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gold/20 blur-3xl pointer-events-none" />

              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full border border-gold/30 text-gold/80 hover:bg-gold hover:text-forest-deep transition-all flex items-center justify-center z-10"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", damping: 12 }}
                className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold mb-6 shadow-gold"
              >
                <Sparkles className="h-7 w-7 text-forest-deep" strokeWidth={1.8} />
              </motion.div>

              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-10 bg-gold" />
                <span className="font-display text-xs uppercase tracking-[0.4em] text-gold">Exclusive Offer</span>
                <span className="h-px w-10 bg-gold" />
              </div>

              <h3 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-3">
                A gift from <span className="italic text-gradient-gold">our gardens</span>
              </h3>
              <p className="font-display text-cream/70 text-lg mb-8 max-w-md mx-auto">
                Limited-time benefits curated for wholesale & export buyers this season.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {offers.map((o, i) => (
                  <motion.div
                    key={o.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    className="rounded-sm border border-gold/25 bg-forest/40 p-4 text-left"
                  >
                    <o.icon className="h-5 w-5 text-gold mb-2" strokeWidth={1.5} />
                    <div className="font-display text-cream text-lg leading-tight mb-1">{o.title}</div>
                    <div className="font-display text-cream/65 text-xs leading-snug">{o.text}</div>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 font-display text-sm uppercase tracking-[0.25em] text-forest-deep shadow-gold hover:scale-105 transition-transform duration-500"
              >
                Claim Your Offer
              </a>
              <button
                onClick={() => setOpen(false)}
                className="block mx-auto mt-4 font-display text-xs uppercase tracking-[0.3em] text-cream/50 hover:text-gold transition-colors"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
