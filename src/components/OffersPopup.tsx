import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Gift, Truck, Percent, Clock, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

// Import images for carousel
import teaHarvestImg from "@/assets/product1.png";
import teaCupImg from "@/assets/product2.png";
import teaExportImg from "@/assets/product3.png";

const offers = [
  { icon: Percent, title: "25% Off", text: "First order 100kg+", color: "from-amber-500 to-orange-500" },
  { icon: Truck, title: "Free Shipping", text: "Orders 500kg+", color: "from-emerald-500 to-teal-500" },
  { icon: Gift, title: "Free Sample", text: "With every quote", color: "from-purple-500 to-pink-500" },
];

const carouselImages = [
  { src: teaHarvestImg, alt: "Tea Harvesting", title: "Fresh Gardens" },
  { src: teaCupImg, alt: "Premium Tea", title: "Premium Tea" },
  { src: teaExportImg, alt: "Global Export", title: "Worldwide" },
];

export function OffersPopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!shown) {
        setOpen(true);
        setShown(true);
      }
    }, 3000);

    const onScroll = () => {
      if (shown) return;
      const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (ratio > 0.35) {
        setOpen(true);
        setShown(true);
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [shown]);

  // Auto-slide effect
  useEffect(() => {
    if (!open || !isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [open, isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-xl shadow-2xl"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 z-20 h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 text-cream/60 hover:text-gold transition-all flex items-center justify-center backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <div className="relative grid md:grid-cols-2">
              {/* Left Side - Image Carousel */}
              <div className="relative h-48 md:h-auto overflow-hidden bg-gradient-to-br from-forest to-forest-deep">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={carouselImages[currentSlide].src}
                      alt={carouselImages[currentSlide].alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Image Overlay Content */}
                <div className="absolute bottom-2 left-2 right-2 z-10">
                  <div className="bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                    <p className="text-cream text-xs font-medium">
                      {carouselImages[currentSlide].title}
                    </p>
                  </div>
                </div>

                {/* Carousel Navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  <ChevronLeft className="h-3 w-3" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  <ChevronRight className="h-3 w-3" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentSlide(idx);
                        setTimeout(() => setIsAutoPlaying(true), 5000);
                      }}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        currentSlide === idx
                          ? "w-3 bg-gold"
                          : "w-1 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side - Offers Content */}
              <div className="relative p-4">
                {/* Icon with Animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 200 }}
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-gold to-amber-500 mb-3 shadow-md"
                >
                  <Sparkles className="h-5 w-5 text-forest-deep" strokeWidth={1.8} />
                </motion.div>

                {/* Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-px w-6 bg-gold/60" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Limited</span>
                  <span className="h-px w-6 bg-gold/60" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-cream leading-tight mb-1.5">
                  Special{' '}
                  <span className="bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                    Offers
                  </span>
                </h3>
                
                <p className="text-cream/60 text-sm mb-3">
                  For bulk buyers
                </p>

                {/* Offers Grid */}
                <div className="space-y-2 mb-3">
                  {offers.map((o, i) => (
                    <motion.div
                      key={o.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-2.5 rounded-lg bg-white/5 backdrop-blur-sm p-2 border border-white/10 hover:border-gold/30 transition-all duration-300 group"
                    >
                      <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r ${o.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <o.icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="font-display text-cream text-sm font-semibold">{o.title}</div>
                        <div className="text-cream/50 text-xs">{o.text}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Timer Badge */}
                <div className="flex items-center justify-center gap-1.5 mb-3 py-1.5 bg-white/5 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span className="text-cream/60 text-xs uppercase tracking-wider">Ends in 7d</span>
                  <Star className="w-3 h-3 text-gold fill-gold" />
                </div>

                {/* CTA Buttons */}
                <div className="space-y-1">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-3 py-2 text-sm font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
                  >
                    Claim Offer
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <button
                    onClick={() => setOpen(false)}
                    className="w-full text-center text-cream/40 hover:text-cream/60 text-[10px] uppercase tracking-wider transition-colors py-1"
                  >
                    Maybe later
                  </button>
                </div>

                {/* Trust Badge */}
                <div className="mt-2 pt-1.5 border-t border-white/10">
                  <p className="text-cream/30 text-[8px] text-center uppercase tracking-wider">
                    No credit card • Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}