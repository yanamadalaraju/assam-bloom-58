import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Crown, Gem, BadgeDollarSign, X, Check, Leaf, TrendingUp, Clock, ChevronLeft, ChevronRight, Star, User, Truck, Shield, Clock as ClockIcon } from "lucide-react";
import { useState } from "react";
import tPremium from "@/assets/product1.png";
import tRoyal from "@/assets/product2.png";
import tEconomic from "@/assets/product3.png";

// Define types
interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductDetails {
  fullDescription: string;
  specifications: Array<{ label: string; value: string }>;
  brewing: string[];
  thumbnails: string[];
  reviews: Review[];
}

interface Product {
  img: string;
  title: string;
  desc: string;
  badge: string;
  icon: any;
  features: string[];
  details: ProductDetails;
}

const products: Product[] = [
  { 
    img: tPremium, 
    title: "Premium Assam Tea", 
    desc: "Finest handpicked leaves from premium estates, offering exceptional aroma and rich golden liquor.",
    badge: "Premium",
    icon: Gem,
    features: ["Single Estate", "Handpicked", "Golden Liquor"],
    details: {
      fullDescription: "Our Premium Assam Tea is sourced from the most respected tea estates in Upper Assam, known for producing teas with exceptional body and depth. Each leaf is carefully handpicked during the peak growing season to ensure the highest quality standards.",
      specifications: [
        { label: "Origin", value: "Upper Assam, India" },
        { label: "Elevation", value: "100-200 meters" },
        { label: "Harvest", value: "First Flush (March-April)" },
        { label: "Caffeine", value: "High" },
        { label: "Best Time", value: "Morning" }
      ],
      brewing: [
        "Use 1 teaspoon per cup",
        "Water temperature: 95-100°C",
        "Steep for 3-5 minutes",
        "Enjoy with or without milk"
      ],
      thumbnails: [tPremium, tPremium, tPremium],
      reviews: [
        { name: "Rajesh Sharma", rating: 5, comment: "Excellent quality tea! The aroma is amazing.", date: "2024-02-15" },
        { name: "Priya Patel", rating: 5, comment: "Truly premium taste. Worth every penny.", date: "2024-02-10" },
        { name: "Amit Kumar", rating: 4, comment: "Great flavor and consistent quality.", date: "2024-02-05" }
      ]
    }
  },
  { 
    img: tRoyal, 
    title: "Royal Assam Tea", 
    desc: "The pinnacle of Assam tea — rare, exquisite, and crafted for royalty. A truly majestic experience.",
    badge: "Royal Collection",
    icon: Crown,
    features: ["Rare Leaves", "Exquisite Flavor", "Royal Heritage"],
    details: {
      fullDescription: "Royal Assam Tea represents the zenith of tea craftsmanship. Sourced from century-old heritage gardens, these rare leaves undergo traditional withering and rolling processes that have been preserved for generations. Each sip reveals complex notes of malt, honey, and a distinctive royal character.",
      specifications: [
        { label: "Origin", value: "Heritage Estates, Assam" },
        { label: "Elevation", value: "150-250 meters" },
        { label: "Harvest", value: "Special Reserve (Limited)" },
        { label: "Caffeine", value: "High" },
        { label: "Best Time", value: "Special Occasions" }
      ],
      brewing: [
        "Use 1.5 teaspoons per cup",
        "Water temperature: 95-100°C",
        "Steep for 4-6 minutes",
        "Best enjoyed without milk to appreciate complexity"
      ],
      thumbnails: [tRoyal, tRoyal, tRoyal],
      reviews: [
        { name: "Vikram Singh", rating: 5, comment: "Absolutely royal experience! The best tea I've ever had.", date: "2024-02-18" },
        { name: "Neha Gupta", rating: 5, comment: "Exquisite flavor profile. A true masterpiece.", date: "2024-02-12" },
        { name: "Anjali Mehta", rating: 5, comment: "Worth the premium price. Exceptional quality.", date: "2024-02-08" }
      ]
    }
  },
  { 
    img: tEconomic, 
    title: "Economic Assam Tea", 
    desc: "Quality Assam tea at an accessible price point. Perfect for daily consumption without compromise.",
    badge: "Best Value",
    icon: BadgeDollarSign,
    features: ["Affordable", "Consistent Quality", "Daily Brew"],
    details: {
      fullDescription: "Economic Assam Tea delivers the authentic Assam experience at an everyday price point. Sourced from reliable gardens with consistent quality standards, this tea offers the bold, robust character Assam is famous for, perfect for your daily cup or commercial use.",
      specifications: [
        { label: "Origin", value: "Assam Valley" },
        { label: "Elevation", value: "50-150 meters" },
        { label: "Harvest", value: "Standard Season" },
        { label: "Caffeine", value: "Medium-High" },
        { label: "Best Time", value: "Any Time" }
      ],
      brewing: [
        "Use 1 teaspoon per cup",
        "Water temperature: 95-100°C",
        "Steep for 3-4 minutes",
        "Great with milk and sugar"
      ],
      thumbnails: [tEconomic, tEconomic, tEconomic],
      reviews: [
        { name: "Suresh Yadav", rating: 4, comment: "Great value for money. Perfect for daily chai.", date: "2024-02-16" },
        { name: "Meena Devi", rating: 5, comment: "Very satisfied with the quality and price.", date: "2024-02-11" },
        { name: "Rakesh Jain", rating: 4, comment: "Consistent taste. Good for everyday use.", date: "2024-02-06" }
      ]
    }
  },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0);

  const nextImage = () => {
    if (selectedProduct) {
      setSelectedThumbnail((prev) => (prev + 1) % selectedProduct.details.thumbnails.length);
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setSelectedThumbnail((prev) => (prev - 1 + selectedProduct.details.thumbnails.length) % selectedProduct.details.thumbnails.length);
    }
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-gold fill-gold' : 'text-gold/30'}`} />
    ));
  };

  return (
    <>
      <section id="products" className="relative bg-gradient-to-br from-forest-deep via-forest-deep to-forest py-16 md:py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cream/5 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-gold font-semibold">Collection</span>
              <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
            
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-3">
                Choose Your{' '}
                <span className="relative inline-block">
                  <span className="italic bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                    Perfect Blend
                  </span>
                  <Sparkles className="absolute -top-5 -right-6 w-4 h-4 text-gold opacity-60" />
                </span>
              </h2>
            </motion.div>
            
            <p className="mt-2 text-cream/70 text-sm md:text-base max-w-xl mx-auto">
              From everyday essentials to royal indulgence — find your perfect cup of Assam tea.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 via-30% to-transparent" />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 backdrop-blur-sm text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full ${
                        p.title === "Royal Assam Tea" 
                          ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
                          : p.title === "Premium Assam Tea"
                          ? "bg-gold/90 text-forest-deep"
                          : "bg-cream/90 text-forest-deep"
                      }`}>
                        <Icon className="w-2.5 h-2.5" />
                        {p.badge}
                      </span>
                    </div>
                    
                    <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 group-hover:scale-110">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Icon className="w-4 h-4 text-gold" />
                        <h3 className="font-display text-xl md:text-2xl text-cream group-hover:text-gold transition-colors duration-300">
                          {p.title}
                        </h3>
                      </div>
                      <p className="text-cream/70 text-xs md:text-sm mb-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {p.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.features.map((feature, idx) => (
                          <span key={idx} className="text-[9px] md:text-[10px] text-cream/50 border border-gold/20 rounded-full px-1.5 py-0.5">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => {
                          setSelectedProduct(p);
                          setSelectedThumbnail(0);
                        }}
                        className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-0.5 group-hover:border-gold transition-all duration-300 group-hover:gap-2 hover:cursor-pointer"
                      >
                        <span>Discover</span>
                        <ArrowUpRight className="h-2.5 w-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -skew-x-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>

                  {p.title === "Royal Assam Tea" && (
                    <div className="absolute -top-2 -right-2 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Crown className="w-full h-full text-gold" />
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 md:mt-10"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-gold/30 text-gold font-semibold rounded-full hover:bg-gold hover:text-forest-deep transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 text-xs md:text-sm"
            >
              Get Wholesale Pricing
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-forest-deep to-forest rounded-2xl shadow-2xl border border-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-gold/20 transition-colors duration-300 text-cream hover:text-gold"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Images and Reviews */}
                  <div className="flex-1 border-r border-gold/20">
                    <div className="p-6 h-full flex flex-col">
                      {/* Fixed Image Section */}
                      <div className="flex-shrink-0">
                        <div className="relative overflow-hidden rounded-xl mb-4 aspect-square group/image">
                          <img
                            src={selectedProduct.details.thumbnails[selectedThumbnail]}
                            alt={selectedProduct.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
                          
                          {selectedProduct.details.thumbnails.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
                              >
                                <ChevronLeft className="w-6 h-6" />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
                              >
                                <ChevronRight className="w-6 h-6" />
                              </button>
                            </>
                          )}
                        </div>
                        
                        <div className="flex gap-3 justify-center mb-6">
                          {selectedProduct.details.thumbnails.map((thumb, idx: number) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedThumbnail(idx)}
                              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                                selectedThumbnail === idx 
                                  ? "border-gold shadow-lg shadow-gold/20" 
                                  : "border-gold/30 hover:border-gold/60"
                              }`}
                            >
                              <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Reviews Section - Scrollable */}
                      <div className="flex-1 flex flex-col min-h-0">
                        <div className="flex items-center gap-2 mb-4 flex-shrink-0">
                          <Star className="w-5 h-5 text-gold fill-gold" />
                          <h4 className="text-gold font-semibold text-base uppercase tracking-wider">Customer Reviews</h4>
                        </div>
                        <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
                          {selectedProduct.details.reviews.map((review: Review, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="bg-cream/5 backdrop-blur-sm rounded-lg p-3 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                                    <User className="w-4 h-4 text-gold" />
                                  </div>
                                  <div>
                                    <p className="text-cream text-sm font-semibold">{review.name}</p>
                                    <p className="text-cream/50 text-[10px]">{review.date}</p>
                                  </div>
                                </div>
                                <div className="flex gap-0.5 flex-shrink-0">
                                  {renderStars(review.rating)}
                                </div>
                              </div>
                              <p className="text-cream/70 text-sm leading-relaxed pl-10">
                                "{review.comment}"
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="flex-1">
                    <div className="p-6 h-full flex flex-col">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-full w-fit flex-shrink-0 ${
                        selectedProduct.title === "Royal Assam Tea" 
                          ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
                          : selectedProduct.title === "Premium Assam Tea"
                          ? "bg-gold/90 text-forest-deep"
                          : "bg-cream/90 text-forest-deep"
                      }`}>
                        {selectedProduct.badge}
                      </span>
                      
                      <h3 className="font-display text-3xl md:text-4xl text-cream mt-3 mb-4 flex-shrink-0">
                        {selectedProduct.title}
                      </h3>
                      
                      <div className="overflow-y-auto pr-2 flex-1 custom-scrollbar-right">
                        <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-6">
                          {selectedProduct.details.fullDescription}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Leaf className="w-4 h-4" />
                            Specifications
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {selectedProduct.details.specifications.map((spec: { label: string; value: string }, idx: number) => (
                              <div key={idx} className="border-b border-gold/20 pb-2">
                                <p className="text-cream/50 text-xs uppercase tracking-wider">{spec.label}</p>
                                <p className="text-cream text-sm md:text-base font-medium">{spec.value}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Brewing Instructions
                          </h4>
                          <ul className="space-y-2">
                            {selectedProduct.details.brewing.map((step: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-cream/80 text-sm md:text-base">
                                <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProduct.features.map((feature: string, idx: number) => (
                            <span key={idx} className="text-sm text-cream/70 border border-gold/30 rounded-full px-3 py-1 bg-forest-deep/50">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Trust Badges Section */}
                      <div className="mt-6 pt-4 border-t border-gold/20 flex-shrink-0">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex justify-center mb-2">
                              <Truck className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <p className="text-cream/60 text-[10px] uppercase tracking-wider">Free Shipping</p>
                            <p className="text-cream/40 text-[8px]">On orders 50kg+</p>
                          </div>
                          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex justify-center mb-2">
                              <Shield className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <p className="text-cream/60 text-[10px] uppercase tracking-wider">Quality Guarantee</p>
                            <p className="text-cream/40 text-[8px]">100% authentic</p>
                          </div>
                          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex justify-center mb-2">
                              <ClockIcon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <p className="text-cream/60 text-[10px] uppercase tracking-wider">Fast Delivery</p>
                            <p className="text-cream/40 text-[8px]">Pan India shipping</p>
                          </div>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3 mt-4 flex-shrink-0">
                        <a
                          href="#contact"
                          onClick={() => setSelectedProduct(null)}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                        >
                          Enquire Now
                          <TrendingUp className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => setSelectedProduct(null)}
                          className="px-6 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 text-sm md:text-base"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.6);
        }
        
        .custom-scrollbar-right::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar-right::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar-right::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar-right::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.6);
        }
      `}</style>
    </>
  );
}