import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  Award,
  Heart,
  Sparkles,
  MapPin
} from "lucide-react";

// Testimonial Data with Indian Names
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar Agarwal",
    position: "Distributor",
    company: "Shree Sai Tea Traders",
    location: "Mumbai",
    rating: 5,
    text: "Outstanding quality and service! R K Tea has been our trusted partner for over 3 years. Their consistency in quality and timely deliveries have helped us grow our business significantly.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    verified: true
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Retailer",
    company: "Premium Tea House",
    location: "Delhi",
    rating: 5,
    text: "The best Assam tea I've ever sourced. The aroma and taste are exceptional. Customer support is fantastic and they always go the extra mile.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    verified: true
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Exporter",
    company: "Global Tea Exports",
    location: "Ahmedabad",
    rating: 5,
    text: "Export quality packaging and consistent product quality. Our international clients love the tea. Highly recommended for bulk orders.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    verified: true
  },
  {
    id: 4,
    name: "Sunita Reddy",
    position: "Cafe Owner",
    company: "Chai Point Cafe",
    location: "Bangalore",
    rating: 4,
    text: "Great value for money. The masala chai blend is a hit at our cafe. Regular supply and good pricing. Customers love the authentic taste.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    verified: true
  },
  {
    id: 5,
    name: "Vikram Singh Rathore",
    position: "Wholesaler",
    company: "Eastern Tea Agency",
    location: "Kolkata",
    rating: 5,
    text: "Professional team, excellent communication, and top-notch quality. Their bulk pricing is very competitive. Best in the industry!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    verified: true
  },
  {
    id: 6,
    name: "Neha Gupta",
    position: "Online Retailer",
    company: "TeaCup Online",
    location: "Jaipur",
    rating: 5,
    text: "The packaging options are great for online sales. Products reach customers fresh and intact. Very satisfied with the quality.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    verified: true
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-10 md:py-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #234B2F 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Background Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <MessageCircle className="w-3 h-3 text-gold" />
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Testimonials</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-4">
            What Our{' '}
            <span className="relative whitespace-nowrap">
              <span className="italic text-gold">Clients Say</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none">
                <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg">
            Trusted by 500+ businesses across India. Here's what our partners say.
          </p>
        </motion.div>

        {/* Single Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[380px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Card with NO white space - Full bleed design */}
                <div className="w-full h-full bg-gradient-to-br from-white to-amber-50/50 rounded-2xl shadow-xl overflow-hidden border border-gold/20">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 z-10">
                    <Quote className="w-12 h-12 text-gold/15" />
                  </div>
                  
                  <div className="h-full flex flex-col p-8">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[currentIndex].rating
                              ? "text-gold fill-gold"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text - Takes available space */}
                    <div className="flex-1 flex items-center">
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        "{testimonials[currentIndex].text}"
                      </p>
                    </div>

                    {/* Client Info - Fixed at bottom */}
                    <div className="flex items-center gap-4 pt-6 mt-4 border-t border-gray-100">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-gold flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-forest-deep text-lg truncate">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonials[currentIndex].position} • {testimonials[currentIndex].company}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-gold" />
                          <span className="text-gray-400 text-xs">{testimonials[currentIndex].location}</span>
                        </div>
                      </div>
                      {testimonials[currentIndex].verified && (
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-600 text-[10px] whitespace-nowrap flex-shrink-0">
                          <Award className="w-3 h-3" />
                          Verified
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Properly positioned */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 h-2 bg-gold rounded-full"
                    : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gold/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gold/20">
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm text-gray-600">Join 500+ satisfied businesses across India</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}