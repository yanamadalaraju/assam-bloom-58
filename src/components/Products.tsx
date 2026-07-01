// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight, Sparkles, Crown, Gem, BadgeDollarSign, X, Check, Leaf, TrendingUp, Clock, ChevronLeft, ChevronRight, Star, User, Truck, Shield, Clock as ClockIcon } from "lucide-react";
// import { useState } from "react";
// import tPremium from "@/assets/product1.png";
// import tRoyal from "@/assets/product2.png";
// import tEconomic from "@/assets/product3.png";

// // Define types
// interface Review {
//   name: string;
//   rating: number;
//   comment: string;
//   date: string;
// }

// interface ProductDetails {
//   fullDescription: string;
//   specifications: Array<{ label: string; value: string }>;
//   brewing: string[];
//   thumbnails: string[];
//   reviews: Review[];
// }

// interface Product {
//   img: string;
//   title: string;
//   desc: string;
//   badge: string;
//   icon: any;
//   features: string[];
//   details: ProductDetails;
// }

// const products: Product[] = [
//   { 
//     img: tPremium, 
//     title: "Royal Assam Tea", 
//     desc: "Finest handpicked leaves from premium estates, offering exceptional aroma and rich golden liquor.",
//     badge: "Premium",
//     icon: Gem,
//     features: ["Single Estate", "Handpicked", "Golden Liquor"],
//     details: {
//       fullDescription: "Our Premium Assam Tea is sourced from the most respected Tea estates in Upper Assam, known for producing Teas with exceptional body and depth. Each leaf is carefully handpicked during the peak growing season to ensure the highest quality standards.",
//       specifications: [
//         { label: "Origin", value: "Upper Assam, India" },
//         { label: "Elevation", value: "100-200 meters" },
//         { label: "Harvest", value: "First Flush (March-April)" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Morning" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Enjoy with or without milk"
//       ],
//       thumbnails: [tPremium, tPremium, tPremium],
//       reviews: [
//         { name: "Rajesh Sharma", rating: 5, comment: "Excellent quality Tea! The aroma is amazing.", date: "2024-02-15" },
//         { name: "Priya Patel", rating: 5, comment: "Truly premium taste. Worth every penny.", date: "2024-02-10" },
//         { name: "Amit Kumar", rating: 4, comment: "Great flavor and consistent quality.", date: "2024-02-05" }
//       ]
//     }
//   },
//   { 
//     img: tRoyal, 
//     title: "Premium Assam Tea", 
//     desc: "The pinnacle of Assam Tea — rare, exquisite, and crafted for royalty. A truly majestic experience.",
//     badge: "Royal Collection",
//     icon: Crown,
//     features: ["Rare Leaves", "Exquisite Flavor", "Royal Heritage"],
//     details: {
//       fullDescription: "Royal Assam Tea represents the zenith of Tea craftsmanship. Sourced from century-old heritage gardens, these rare leaves undergo traditional withering and rolling processes that have been preserved for generations. Each sip reveals complex notes of malt, honey, and a distinctive royal character.",
//       specifications: [
//         { label: "Origin", value: "Heritage Estates, Assam" },
//         { label: "Elevation", value: "150-250 meters" },
//         { label: "Harvest", value: "Special Reserve (Limited)" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Special Occasions" }
//       ],
//       brewing: [
//         "Use 1.5 Teaspoons per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 4-6 minutes",
//         "Best enjoyed without milk to appreciate complexity"
//       ],
//       thumbnails: [tRoyal, tRoyal, tRoyal],
//       reviews: [
//         { name: "Vikram Singh", rating: 5, comment: "Absolutely royal experience! The best Tea I've ever had.", date: "2024-02-18" },
//         { name: "Neha Gupta", rating: 5, comment: "Exquisite flavor profile. A true masterpiece.", date: "2024-02-12" },
//         { name: "Anjali Mehta", rating: 5, comment: "Worth the premium price. Exceptional quality.", date: "2024-02-08" }
//       ]
//     }
//   },
//   { 
//     img: tEconomic, 
//     title: "Economic Assam Tea", 
//     desc: "Quality Assam Tea at an accessible price point. Perfect for daily consumption without compromise.",
//     badge: "Best Value",
//     icon: BadgeDollarSign,
//     features: ["Affordable", "Consistent Quality", "Daily Brew"],
//     details: {
//       fullDescription: "Economic Assam Tea delivers the authentic Assam experience at an everyday price point. Sourced from reliable gardens with consistent quality standards, this Tea offers the bold, robust character Assam is famous for, perfect for your daily cup or commercial use.",
//       specifications: [
//         { label: "Origin", value: "Assam Valley" },
//         { label: "Elevation", value: "50-150 meters" },
//         { label: "Harvest", value: "Standard Season" },
//         { label: "Caffeine", value: "Medium-High" },
//         { label: "Best Time", value: "Any Time" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-4 minutes",
//         "Great with milk and sugar"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       reviews: [
//         { name: "Suresh Yadav", rating: 4, comment: "Great value for money. Perfect for daily chai.", date: "2024-02-16" },
//         { name: "Meena Devi", rating: 5, comment: "Very satisfied with the quality and price.", date: "2024-02-11" },
//         { name: "Rakesh Jain", rating: 4, comment: "Consistent taste. Good for everyday use.", date: "2024-02-06" }
//       ]
//     }
//   },
// ];

// export function Products() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0);

//   const nextImage = () => {
//     if (selectedProduct) {
//       setSelectedThumbnail((prev) => (prev + 1) % selectedProduct.details.thumbnails.length);
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setSelectedThumbnail((prev) => (prev - 1 + selectedProduct.details.thumbnails.length) % selectedProduct.details.thumbnails.length);
//     }
//   };

//   const renderStars = (rating: number) => {
//     return Array(5).fill(0).map((_, i) => (
//       <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-gold fill-gold' : 'text-gold/30'}`} />
//     ));
//   };

//   return (
//     <>
//       <section id="products" className="relative bg-gradient-to-br from-forest-deep via-forest-deep to-forest py-16 md:py-20 overflow-hidden">
//         {/* Decorative background elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl"></div>
//           <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/10 blur-3xl"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cream/5 blur-3xl"></div>
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
//           >
//             <div className="flex items-center justify-center gap-3 mb-3">
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//               <span className="text-[11px] uppercase tracking-[0.4em] text-gold font-semibold">Collection</span>
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//             </div>
            
//             <motion.div
//               initial={{ scale: 0.95 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-3">
//                 Choose Your{' '}
//                 <span className="relative inline-block">
//                   <span className="italic bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                     Perfect Blend
//                   </span>
//                   <Sparkles className="absolute -top-5 -right-6 w-4 h-4 text-gold opacity-60" />
//                 </span>
//               </h2>
//             </motion.div>
            
//             <p className="mt-2 text-cream/70 text-sm md:text-base max-w-xl mx-auto">
//               From everyday essentials to royal indulgence — find your perfect cup of Assam Tea.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {products.map((p, i) => {
//               const Icon = p.icon;
//               return (
//                 <motion.article
//                   key={p.title}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
//                 >
//                   <div className="relative overflow-hidden aspect-[4/5]">
//                     <img
//                       src={p.img}
//                       alt={p.title}
//                       className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       loading="lazy"
//                     />
                    
//                     <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 via-30% to-transparent" />
                    
//                     <div className="absolute top-3 left-3 z-10">
//                       <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 backdrop-blur-sm text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full ${
//                         p.title === "Royal Assam Tea" 
//                           ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
//                           : p.title === "Premium Assam Tea"
//                           ? "bg-gold/90 text-forest-deep"
//                           : "bg-cream/90 text-forest-deep"
//                       }`}>
//                         <Icon className="w-2.5 h-2.5" />
//                         {p.badge}
//                       </span>
//                     </div>
                    
//                     <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 group-hover:scale-110">
//                       <ArrowUpRight className="h-3.5 w-3.5" />
//                     </div>
                    
//                     <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                       <div className="flex items-center gap-1.5 mb-1.5">
//                         <Icon className="w-4 h-4 text-gold" />
//                         <h3 className="font-display text-xl md:text-2xl text-cream group-hover:text-gold transition-colors duration-300">
//                           {p.title}
//                         </h3>
//                       </div>
//                       <p className="text-cream/70 text-xs md:text-sm mb-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
//                         {p.desc}
//                       </p>
                      
//                       <div className="flex flex-wrap gap-1.5 mb-3">
//                         {p.features.map((feature, idx) => (
//                           <span key={idx} className="text-[9px] md:text-[10px] text-cream/50 border border-gold/20 rounded-full px-1.5 py-0.5">
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
                      
//                       <button
//                         onClick={() => {
//                           setSelectedProduct(p);
//                           setSelectedThumbnail(0);
//                         }}
//                         className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-0.5 group-hover:border-gold transition-all duration-300 group-hover:gap-2 hover:cursor-pointer"
//                       >
//                         <span>Discover</span>
//                         <ArrowUpRight className="h-2.5 w-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -skew-x-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//                   </div>

//                   {p.title === "Royal Assam Tea" && (
//                     <div className="absolute -top-2 -right-2 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//                       <Crown className="w-full h-full text-gold" />
//                     </div>
//                   )}
//                 </motion.article>
//               );
//             })}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-center mt-8 md:mt-10"
//           >
//             <a
//               href="#contact"
//               className="group inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-gold/30 text-gold font-semibold rounded-full hover:bg-gold hover:text-forest-deep transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 text-xs md:text-sm"
//             >
//               Get Wholesale Pricing
//               <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Product Details Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
//             onClick={() => setSelectedProduct(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-forest-deep to-forest rounded-2xl shadow-2xl border border-gold/20"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-gold/20 transition-colors duration-300 text-cream hover:text-gold"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="p-0">
//                 <div className="flex flex-col md:flex-row">
//                   {/* Left side - Images and Reviews */}
//                   <div className="flex-1 border-r border-gold/20">
//                     <div className="p-6 h-full flex flex-col">
//                       {/* Fixed Image Section */}
//                       <div className="flex-shrink-0">
//                         <div className="relative overflow-hidden rounded-xl mb-4 aspect-square group/image">
//                           <img
//                             src={selectedProduct.details.thumbnails[selectedThumbnail]}
//                             alt={selectedProduct.title}
//                             className="w-full h-full object-cover"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
                          
//                           {selectedProduct.details.thumbnails.length > 1 && (
//                             <>
//                               <button
//                                 onClick={prevImage}
//                                 className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
//                               >
//                                 <ChevronLeft className="w-6 h-6" />
//                               </button>
//                               <button
//                                 onClick={nextImage}
//                                 className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
//                               >
//                                 <ChevronRight className="w-6 h-6" />
//                               </button>
//                             </>
//                           )}
//                         </div>
                        
//                         <div className="flex gap-3 justify-center mb-6">
//                           {selectedProduct.details.thumbnails.map((thumb, idx: number) => (
//                             <button
//                               key={idx}
//                               onClick={() => setSelectedThumbnail(idx)}
//                               className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
//                                 selectedThumbnail === idx 
//                                   ? "border-gold shadow-lg shadow-gold/20" 
//                                   : "border-gold/30 hover:border-gold/60"
//                               }`}
//                             >
//                               <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Reviews Section - Scrollable */}
//                       <div className="flex-1 flex flex-col min-h-0">
//                         <div className="flex items-center gap-2 mb-4 flex-shrink-0">
//                           <Star className="w-5 h-5 text-gold fill-gold" />
//                           <h4 className="text-gold font-semibold text-base uppercase tracking-wider">Customer Reviews</h4>
//                         </div>
//                         <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
//                           {selectedProduct.details.reviews.map((review: Review, idx: number) => (
//                             <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: idx * 0.1 }}
//                               className="bg-cream/5 backdrop-blur-sm rounded-lg p-3 border border-gold/20 hover:border-gold/40 transition-all duration-300"
//                             >
//                               <div className="flex items-center justify-between mb-2">
//                                 <div className="flex items-center gap-2">
//                                   <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
//                                     <User className="w-4 h-4 text-gold" />
//                                   </div>
//                                   <div>
//                                     <p className="text-cream text-sm font-semibold">{review.name}</p>
//                                     <p className="text-cream/50 text-[10px]">{review.date}</p>
//                                   </div>
//                                 </div>
//                                 <div className="flex gap-0.5 flex-shrink-0">
//                                   {renderStars(review.rating)}
//                                 </div>
//                               </div>
//                               <p className="text-cream/70 text-sm leading-relaxed pl-10">
//                                 "{review.comment}"
//                               </p>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right side - Details */}
//                   <div className="flex-1">
//                     <div className="p-6 h-full flex flex-col">
//                       <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-full w-fit flex-shrink-0 ${
//                         selectedProduct.title === "Royal Assam Tea" 
//                           ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
//                           : selectedProduct.title === "Premium Assam Tea"
//                           ? "bg-gold/90 text-forest-deep"
//                           : "bg-cream/90 text-forest-deep"
//                       }`}>
//                         {selectedProduct.badge}
//                       </span>
                      
//                       <h3 className="font-display text-3xl md:text-4xl text-cream mt-3 mb-4 flex-shrink-0">
//                         {selectedProduct.title}
//                       </h3>
                      
//                       <div className="overflow-y-auto pr-2 flex-1 custom-scrollbar-right">
//                         <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-6">
//                           {selectedProduct.details.fullDescription}
//                         </p>

//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Leaf className="w-4 h-4" />
//                             Specifications
//                           </h4>
//                           <div className="grid grid-cols-2 gap-3">
//                             {selectedProduct.details.specifications.map((spec: { label: string; value: string }, idx: number) => (
//                               <div key={idx} className="border-b border-gold/20 pb-2">
//                                 <p className="text-cream/50 text-xs uppercase tracking-wider">{spec.label}</p>
//                                 <p className="text-cream text-sm md:text-base font-medium">{spec.value}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Clock className="w-4 h-4" />
//                             Brewing Instructions
//                           </h4>
//                           <ul className="space-y-2">
//                             {selectedProduct.details.brewing.map((step: string, idx: number) => (
//                               <li key={idx} className="flex items-start gap-2 text-cream/80 text-sm md:text-base">
//                                 <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
//                                 <span>{step}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="flex flex-wrap gap-2 mb-6">
//                           {selectedProduct.features.map((feature: string, idx: number) => (
//                             <span key={idx} className="text-sm text-cream/70 border border-gold/30 rounded-full px-3 py-1 bg-forest-deep/50">
//                               {feature}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Trust Badges Section */}
//                       <div className="mt-6 pt-4 border-t border-gold/20 flex-shrink-0">
//                         <div className="grid grid-cols-3 gap-3">
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <Truck className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Free Shipping</p>
//                             <p className="text-cream/40 text-[8px]">On orders 50kg+</p>
//                           </div>
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <Shield className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Quality Guarantee</p>
//                             <p className="text-cream/40 text-[8px]">100% authentic</p>
//                           </div>
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <ClockIcon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Fast Delivery</p>
//                             <p className="text-cream/40 text-[8px]">Pan India shipping</p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Buttons */}
//                       <div className="flex gap-3 mt-4 flex-shrink-0">
//                         <a
//                           href="#contact"
//                           onClick={() => setSelectedProduct(null)}
//                           className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 text-sm md:text-base"
//                         >
//                           Enquire Now
//                           <TrendingUp className="w-4 h-4" />
//                         </a>
//                         <button
//                           onClick={() => setSelectedProduct(null)}
//                           className="px-6 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 text-sm md:text-base"
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(212, 175, 55, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(212, 175, 55, 0.6);
//         }
        
//         .custom-scrollbar-right::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-thumb {
//           background: rgba(212, 175, 55, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-thumb:hover {
//           background: rgba(212, 175, 55, 0.6);
//         }
//       `}</style>
//     </>
//   );
// }





// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight, Sparkles, Crown, Gem, BadgeDollarSign, X, Check, Leaf, TrendingUp, Clock, ChevronLeft, ChevronRight, Star, User, Truck, Shield, Clock as ClockIcon, Coffee, Flame, Leaf as LeafIcon, Utensils, Building2, ShoppingBag } from "lucide-react";
// import { useState } from "react";
// import tPremium from "@/assets/product1.png";
// import tRoyal from "@/assets/product2.png";
// import tEconomic from "@/assets/product3.png";

// // Define types
// interface Review {
//   name: string;
//   rating: number;
//   comment: string;
//   date: string;
// }

// interface ProductDetails {
//   fullDescription: string;
//   specifications: Array<{ label: string; value: string }>;
//   brewing: string[];
//   thumbnails: string[];
//   reviews: Review[];
// }

// interface Product {
//   img: string;
//   title: string;
//   desc: string;
//   badge: string;
//   icon: any;
//   features: string[];
//   details: ProductDetails;
//   category: string;
// }

// const products: Product[] = [
//   { 
//     img: tPremium, 
//     title: "Royal Assam Tea", 
//     desc: "Finest handpicked leaves from premium estates, offering exceptional aroma and rich golden liquor.",
//     badge: "Premium",
//     icon: Gem,
//     category: "Premium Tea",
//     features: ["Single Estate", "Handpicked", "Golden Liquor"],
//     details: {
//       fullDescription: "Our Premium Assam Tea is sourced from the most respected Tea estates in Upper Assam, known for producing Teas with exceptional body and depth. Each leaf is carefully handpicked during the peak growing season to ensure the highest quality standards.",
//       specifications: [
//         { label: "Origin", value: "Upper Assam, India" },
//         { label: "Elevation", value: "100-200 meters" },
//         { label: "Harvest", value: "First Flush (March-April)" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Morning" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Enjoy with or without milk"
//       ],
//       thumbnails: [tPremium, tPremium, tPremium],
//       reviews: [
//         { name: "Rajesh Sharma", rating: 5, comment: "Excellent quality Tea! The aroma is amazing.", date: "2024-02-15" },
//         { name: "Priya Patel", rating: 5, comment: "Truly premium taste. Worth every penny.", date: "2024-02-10" },
//         { name: "Amit Kumar", rating: 4, comment: "Great flavor and consistent quality.", date: "2024-02-05" }
//       ]
//     }
//   },
//   { 
//     img: tRoyal, 
//     title: "Premium Assam Tea", 
//     desc: "The pinnacle of Assam Tea — rare, exquisite, and crafted for royalty. A truly majestic experience.",
//     badge: "Royal Collection",
//     icon: Crown,
//     category: "Premium Tea",
//     features: ["Rare Leaves", "Exquisite Flavor", "Royal Heritage"],
//     details: {
//       fullDescription: "Royal Assam Tea represents the zenith of Tea craftsmanship. Sourced from century-old heritage gardens, these rare leaves undergo traditional withering and rolling processes that have been preserved for generations. Each sip reveals complex notes of malt, honey, and a distinctive royal character.",
//       specifications: [
//         { label: "Origin", value: "Heritage Estates, Assam" },
//         { label: "Elevation", value: "150-250 meters" },
//         { label: "Harvest", value: "Special Reserve (Limited)" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Special Occasions" }
//       ],
//       brewing: [
//         "Use 1.5 Teaspoons per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 4-6 minutes",
//         "Best enjoyed without milk to appreciate complexity"
//       ],
//       thumbnails: [tRoyal, tRoyal, tRoyal],
//       reviews: [
//         { name: "Vikram Singh", rating: 5, comment: "Absolutely royal experience! The best Tea I've ever had.", date: "2024-02-18" },
//         { name: "Neha Gupta", rating: 5, comment: "Exquisite flavor profile. A true masterpiece.", date: "2024-02-12" },
//         { name: "Anjali Mehta", rating: 5, comment: "Worth the premium price. Exceptional quality.", date: "2024-02-08" }
//       ]
//     }
//   },
//   { 
//     img: tEconomic, 
//     title: "Economic Assam Tea", 
//     desc: "Quality Assam Tea at an accessible price point. Perfect for daily consumption without compromise.",
//     badge: "Best Value",
//     icon: BadgeDollarSign,
//     category: "Daily Use Tea",
//     features: ["Affordable", "Consistent Quality", "Daily Brew"],
//     details: {
//       fullDescription: "Economic Assam Tea delivers the authentic Assam experience at an everyday price point. Sourced from reliable gardens with consistent quality standards, this Tea offers the bold, robust character Assam is famous for, perfect for your daily cup or commercial use.",
//       specifications: [
//         { label: "Origin", value: "Assam Valley" },
//         { label: "Elevation", value: "50-150 meters" },
//         { label: "Harvest", value: "Standard Season" },
//         { label: "Caffeine", value: "Medium-High" },
//         { label: "Best Time", value: "Any Time" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-4 minutes",
//         "Great with milk and sugar"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       reviews: [
//         { name: "Suresh Yadav", rating: 4, comment: "Great value for money. Perfect for daily chai.", date: "2024-02-16" },
//         { name: "Meena Devi", rating: 5, comment: "Very satisfied with the quality and price.", date: "2024-02-11" },
//         { name: "Rakesh Jain", rating: 4, comment: "Consistent taste. Good for everyday use.", date: "2024-02-06" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Classic Assam Tea",
//     desc: "Traditional Assam Tea with bold, malty flavor and rich amber color. Perfect for the true Tea lover.",
//     badge: "Classic",
//     icon: Coffee,
//     category: "Assam Tea",
//     features: ["Bold Flavor", "Rich Aroma", "Traditional"],
//     details: {
//       fullDescription: "Classic Assam Tea embodies the true spirit of Assam's Tea heritage. Known for its strong, malty character and deep amber color, this Tea is the perfect choice for those who appreciate the bold flavors that Assam is famous for worldwide.",
//       specifications: [
//         { label: "Origin", value: "Assam, India" },
//         { label: "Elevation", value: "80-180 meters" },
//         { label: "Harvest", value: "Second Flush" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Morning & Afternoon" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Perfect with milk and sugar"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       reviews: [
//         { name: "Arun Das", rating: 5, comment: "This is what real Assam Tea tastes like!", date: "2024-02-20" },
//         { name: "Smita Reddy", rating: 4, comment: "Very authentic flavor. Highly recommended.", date: "2024-02-14" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Premium CTC Tea",
//     desc: "Finest CTC (Crush, Tear, Curl) Tea with strong body and deep color. Ideal for masala chai.",
//     badge: "CTC Premium",
//     icon: Flame,
//     category: "CTC Tea",
//     features: ["Strong Body", "Deep Color", "Perfect for Chai"],
//     details: {
//       fullDescription: "Our Premium CTC Tea is crafted using the traditional Crush, Tear, Curl method that produces small, dense granules perfect for a strong, invigorating cup. This Tea is specially processed to release maximum flavor and color, making it ideal for masala chai.",
//       specifications: [
//         { label: "Origin", value: "Assam, India" },
//         { label: "Process", value: "CTC (Crush, Tear, Curl)" },
//         { label: "Harvest", value: "Multiple Seasons" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Anytime" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 2-3 minutes",
//         "Excellent with spices and milk"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       reviews: [
//         { name: "Rahul Kapoor", rating: 5, comment: "Best CTC Tea for masala chai!", date: "2024-02-19" },
//         { name: "Deepika Singh", rating: 4, comment: "Very strong and flavorful.", date: "2024-02-12" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Premium Green Tea",
//     desc: "Light, refreshing, and packed with antioxidants. Sourced from the finest Tea gardens.",
//     badge: "Healthy Choice",
//     icon: LeafIcon,
//     category: "Green Tea",
//     features: ["Antioxidant Rich", "Light & Refreshing", "Health Benefits"],
//     details: {
//       fullDescription: "Our Premium Green Tea is meticulously processed to preserve the natural antioxidants and delicate flavor profiles. Gently sTeamed and rolled, this Tea offers a smooth, refreshing taste with subtle vegetal notes that Tea connoisseurs appreciate.",
//       specifications: [
//         { label: "Origin", value: "Assam Highlands" },
//         { label: "Process", value: "STeamed & Rolled" },
//         { label: "Harvest", value: "Spring Season" },
//         { label: "Caffeine", value: "Low-Moderate" },
//         { label: "Best Time", value: "Morning & Evening" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 75-80°C",
//         "Steep for 2-3 minutes",
//         "Do not oversteep to avoid bitterness"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       reviews: [
//         { name: "Dr. Meera Gupta", rating: 5, comment: "Excellent quality green Tea with great health benefits.", date: "2024-02-17" },
//         { name: "Rohit Sharma", rating: 4, comment: "Very refreshing and light. Love it!", date: "2024-02-10" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Authentic Masala Tea",
//     desc: "Premium CTC blended with traditional Indian spices for the perfect cup of masala chai.",
//     badge: "Spiced Blend",
//     icon: Coffee,
//     category: "Masala Tea",
//     features: ["Spiced Blend", "Traditional Recipe", "Perfect Chai"],
//     details: {
//       fullDescription: "Our Authentic Masala Tea is a carefully crafted blend of premium CTC Tea and traditional Indian spices including cardamom, cinnamon, ginger, and cloves. This perfect combination creates a warming, aromatic cup that captures the essence of Indian chai.",
//       specifications: [
//         { label: "Base", value: "Premium CTC Tea" },
//         { label: "Spices", value: "Cardamom, Cinnamon, Ginger, Cloves" },
//         { label: "Blend", value: "Traditional Recipe" },
//         { label: "Caffeine", value: "Medium-High" },
//         { label: "Best Time", value: "Anytime" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-4 minutes",
//         "Add milk and sugar to taste"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       reviews: [
//         { name: "Ananya Patel", rating: 5, comment: "The perfect masala chai blend!", date: "2024-02-18" },
//         { name: "Vikram Reddy", rating: 5, comment: "Authentic taste. Reminds me of street chai.", date: "2024-02-13" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Bulk Institutional Pack",
//     desc: "High-quality Tea in bulk packaging for institutions, offices, and industrial use.",
//     badge: "Bulk Supply",
//     icon: Building2,
//     category: "Institutional Packs",
//     features: ["Bulk Packaging", "Cost Effective", "Consistent Quality"],
//     details: {
//       fullDescription: "Our Institutional Packs offer premium quality Tea in bulk quantities at competitive prices. Ideal for offices, hotels, canteens, and industrial use, these packs ensure consistent quality and exceptional value for large-scale consumption.",
//       specifications: [
//         { label: "Packaging", value: "Bulk Bags (5kg, 10kg, 25kg)" },
//         { label: "Grade", value: "Commercial Grade" },
//         { label: "Origin", value: "Assam, India" },
//         { label: "Shelf Life", value: "24 Months" },
//         { label: "Best For", value: "Institutional Consumption" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Adjust quantity based on required strength"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       reviews: [
//         { name: "Hotel Grand", rating: 5, comment: "Excellent quality for our daily hotel service.", date: "2024-02-16" },
//         { name: "Office Supplies", rating: 4, comment: "Great bulk pricing and consistent quality.", date: "2024-02-09" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "HORECA Premium Pack",
//     desc: "Superior quality Tea specially packaged for hotels, restaurants, and catering services.",
//     badge: "HORECA Grade",
//     icon: Utensils,
//     category: "Horeca Packs",
//     features: ["Premium Grade", "Hospitality Standard", "Consistent Flavor"],
//     details: {
//       fullDescription: "Our HORECA Premium Pack is specially designed for the hospitality industry. These carefully selected Tea leaves offer superior quality, consistent flavor, and elegant presentation perfect for hotels, restaurants, and catering services that demand the best for their guests.",
//       specifications: [
//         { label: "Packaging", value: "Premium Bags (1kg, 2kg, 5kg)" },
//         { label: "Grade", value: "Hospitality Grade" },
//         { label: "Origin", value: "Premium Estates, Assam" },
//         { label: "Shelf Life", value: "24 Months" },
//         { label: "Best For", value: "Hotels, Restaurants, Catering" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Train staff for consistent brewing"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       reviews: [
//         { name: "Grand Heritage Hotel", rating: 5, comment: "Our guests love the Tea quality!", date: "2024-02-15" },
//         { name: "Cafe Royal", rating: 5, comment: "Excellent for our premium Tea service.", date: "2024-02-08" }
//       ]
//     }
//   }
// ];

// export function Products() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0);
//   const [activeCategory, setActiveCategory] = useState<string>("All");

//   const categories = ["All", "Premium Tea", "Daily Use Tea", "Assam Tea", "CTC Tea", "Green Tea", "Masala Tea", "Institutional Packs", "Horeca Packs"];

//   const filteredProducts = activeCategory === "All" 
//     ? products 
//     : products.filter(p => p.category === activeCategory);

//   const nextImage = () => {
//     if (selectedProduct) {
//       setSelectedThumbnail((prev) => (prev + 1) % selectedProduct.details.thumbnails.length);
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setSelectedThumbnail((prev) => (prev - 1 + selectedProduct.details.thumbnails.length) % selectedProduct.details.thumbnails.length);
//     }
//   };

//   const renderStars = (rating: number) => {
//     return Array(5).fill(0).map((_, i) => (
//       <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-gold fill-gold' : 'text-gold/30'}`} />
//     ));
//   };

//   return (
//     <>
//       <section id="products" className="relative bg-gradient-to-br from-forest-deep via-forest-deep to-forest py-16 md:py-20 overflow-hidden">
//         {/* Decorative background elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl"></div>
//           <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/10 blur-3xl"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cream/5 blur-3xl"></div>
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
//           >
//             <div className="flex items-center justify-center gap-3 mb-3">
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//               <span className="text-[11px] uppercase tracking-[0.4em] text-gold font-semibold">Collection</span>
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//             </div>
            
//             <motion.div
//               initial={{ scale: 0.95 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-3">
//                 Choose Your{' '}
//                 <span className="relative inline-block">
//                   <span className="italic bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                     Perfect Blend
//                   </span>
//                   <Sparkles className="absolute -top-5 -right-6 w-4 h-4 text-gold opacity-60" />
//                 </span>
//               </h2>
//             </motion.div>
            
//             <p className="mt-2 text-cream/70 text-sm md:text-base max-w-xl mx-auto">
//               From everyday essentials to royal indulgence — find your perfect cup of Assam Tea.
//             </p>
//           </motion.div>

//           {/* Category Filters */}
//           <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-gold text-forest-deep shadow-lg shadow-gold/30"
//                     : "bg-cream/10 text-cream/70 hover:bg-cream/20 hover:text-cream border border-gold/20"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {filteredProducts.map((p, i) => {
//               const Icon = p.icon;
//               return (
//                 <motion.article
//                   key={p.title}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
//                 >
//                   <div className="relative overflow-hidden aspect-[4/5]">
//                     <img
//                       src={p.img}
//                       alt={p.title}
//                       className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       loading="lazy"
//                     />
                    
//                     <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 via-30% to-transparent" />
                    
//                     <div className="absolute top-3 left-3 z-10">
//                       <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 backdrop-blur-sm text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full ${
//                         p.title === "Royal Assam Tea" 
//                           ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
//                           : p.title === "Premium Assam Tea"
//                           ? "bg-gold/90 text-forest-deep"
//                           : "bg-cream/90 text-forest-deep"
//                       }`}>
//                         <Icon className="w-2.5 h-2.5" />
//                         {p.badge}
//                       </span>
//                     </div>
                    
//                     <div className="absolute top-3 right-3 z-10">
//                       <span className="inline-flex items-center px-2 py-0.5 bg-black/50 backdrop-blur-sm text-[9px] text-cream/80 rounded-full border border-gold/20">
//                         {p.category}
//                       </span>
//                     </div>
                    
//                     <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                       <div className="flex items-center gap-1.5 mb-1.5">
//                         <Icon className="w-4 h-4 text-gold" />
//                         <h3 className="font-display text-xl md:text-2xl text-cream group-hover:text-gold transition-colors duration-300">
//                           {p.title}
//                         </h3>
//                       </div>
//                       <p className="text-cream/70 text-xs md:text-sm mb-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
//                         {p.desc}
//                       </p>
                      
//                       <div className="flex flex-wrap gap-1.5 mb-3">
//                         {p.features.map((feature, idx) => (
//                           <span key={idx} className="text-[9px] md:text-[10px] text-cream/50 border border-gold/20 rounded-full px-1.5 py-0.5">
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
                      
//                       <button
//                         onClick={() => {
//                           setSelectedProduct(p);
//                           setSelectedThumbnail(0);
//                         }}
//                         className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-0.5 group-hover:border-gold transition-all duration-300 group-hover:gap-2 hover:cursor-pointer"
//                       >
//                         <span>Discover</span>
//                         <ArrowUpRight className="h-2.5 w-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -skew-x-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//                   </div>

//                   {p.title === "Royal Assam Tea" && (
//                     <div className="absolute -top-2 -right-2 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//                       <Crown className="w-full h-full text-gold" />
//                     </div>
//                   )}
//                 </motion.article>
//               );
//             })}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-cream/60 text-lg">No products found in this category.</p>
//             </div>
//           )}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-center mt-8 md:mt-10"
//           >
//             <a
//               href="#contact"
//               className="group inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-gold/30 text-gold font-semibold rounded-full hover:bg-gold hover:text-forest-deep transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 text-xs md:text-sm"
//             >
//               Get Wholesale Pricing
//               <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Product Details Modal - Same as before */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
//             onClick={() => setSelectedProduct(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-forest-deep to-forest rounded-2xl shadow-2xl border border-gold/20"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-gold/20 transition-colors duration-300 text-cream hover:text-gold"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="p-0">
//                 <div className="flex flex-col md:flex-row">
//                   {/* Left side - Images and Reviews */}
//                   <div className="flex-1 border-r border-gold/20">
//                     <div className="p-6 h-full flex flex-col">
//                       <div className="flex-shrink-0">
//                         <div className="relative overflow-hidden rounded-xl mb-4 aspect-square group/image">
//                           <img
//                             src={selectedProduct.details.thumbnails[selectedThumbnail]}
//                             alt={selectedProduct.title}
//                             className="w-full h-full object-cover"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
                          
//                           {selectedProduct.details.thumbnails.length > 1 && (
//                             <>
//                               <button
//                                 onClick={prevImage}
//                                 className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
//                               >
//                                 <ChevronLeft className="w-6 h-6" />
//                               </button>
//                               <button
//                                 onClick={nextImage}
//                                 className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
//                               >
//                                 <ChevronRight className="w-6 h-6" />
//                               </button>
//                             </>
//                           )}
//                         </div>
                        
//                         <div className="flex gap-3 justify-center mb-6">
//                           {selectedProduct.details.thumbnails.map((thumb, idx: number) => (
//                             <button
//                               key={idx}
//                               onClick={() => setSelectedThumbnail(idx)}
//                               className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
//                                 selectedThumbnail === idx 
//                                   ? "border-gold shadow-lg shadow-gold/20" 
//                                   : "border-gold/30 hover:border-gold/60"
//                               }`}
//                             >
//                               <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="flex-1 flex flex-col min-h-0">
//                         <div className="flex items-center gap-2 mb-4 flex-shrink-0">
//                           <Star className="w-5 h-5 text-gold fill-gold" />
//                           <h4 className="text-gold font-semibold text-base uppercase tracking-wider">Customer Reviews</h4>
//                         </div>
//                         <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
//                           {selectedProduct.details.reviews.map((review: Review, idx: number) => (
//                             <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: idx * 0.1 }}
//                               className="bg-cream/5 backdrop-blur-sm rounded-lg p-3 border border-gold/20 hover:border-gold/40 transition-all duration-300"
//                             >
//                               <div className="flex items-center justify-between mb-2">
//                                 <div className="flex items-center gap-2">
//                                   <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
//                                     <User className="w-4 h-4 text-gold" />
//                                   </div>
//                                   <div>
//                                     <p className="text-cream text-sm font-semibold">{review.name}</p>
//                                     <p className="text-cream/50 text-[10px]">{review.date}</p>
//                                   </div>
//                                 </div>
//                                 <div className="flex gap-0.5 flex-shrink-0">
//                                   {renderStars(review.rating)}
//                                 </div>
//                               </div>
//                               <p className="text-cream/70 text-sm leading-relaxed pl-10">
//                                 "{review.comment}"
//                               </p>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right side - Details */}
//                   <div className="flex-1">
//                     <div className="p-6 h-full flex flex-col">
//                       <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-full w-fit flex-shrink-0 ${
//                         selectedProduct.title === "Royal Assam Tea" 
//                           ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
//                           : selectedProduct.title === "Premium Assam Tea"
//                           ? "bg-gold/90 text-forest-deep"
//                           : "bg-cream/90 text-forest-deep"
//                       }`}>
//                         {selectedProduct.badge}
//                       </span>
                      
//                       <h3 className="font-display text-3xl md:text-4xl text-cream mt-3 mb-4 flex-shrink-0">
//                         {selectedProduct.title}
//                       </h3>
                      
//                       <div className="overflow-y-auto pr-2 flex-1 custom-scrollbar-right">
//                         <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-6">
//                           {selectedProduct.details.fullDescription}
//                         </p>

//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Leaf className="w-4 h-4" />
//                             Specifications
//                           </h4>
//                           <div className="grid grid-cols-2 gap-3">
//                             {selectedProduct.details.specifications.map((spec: { label: string; value: string }, idx: number) => (
//                               <div key={idx} className="border-b border-gold/20 pb-2">
//                                 <p className="text-cream/50 text-xs uppercase tracking-wider">{spec.label}</p>
//                                 <p className="text-cream text-sm md:text-base font-medium">{spec.value}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Clock className="w-4 h-4" />
//                             Brewing Instructions
//                           </h4>
//                           <ul className="space-y-2">
//                             {selectedProduct.details.brewing.map((step: string, idx: number) => (
//                               <li key={idx} className="flex items-start gap-2 text-cream/80 text-sm md:text-base">
//                                 <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
//                                 <span>{step}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="flex flex-wrap gap-2 mb-6">
//                           {selectedProduct.features.map((feature: string, idx: number) => (
//                             <span key={idx} className="text-sm text-cream/70 border border-gold/30 rounded-full px-3 py-1 bg-forest-deep/50">
//                               {feature}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="mt-6 pt-4 border-t border-gold/20 flex-shrink-0">
//                         <div className="grid grid-cols-3 gap-3">
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <Truck className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Free Shipping</p>
//                             <p className="text-cream/40 text-[8px]">On orders 50kg+</p>
//                           </div>
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <Shield className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Quality Guarantee</p>
//                             <p className="text-cream/40 text-[8px]">100% authentic</p>
//                           </div>
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <ClockIcon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Fast Delivery</p>
//                             <p className="text-cream/40 text-[8px]">Pan India shipping</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex gap-3 mt-4 flex-shrink-0">
//                         <a
//                           href="#contact"
//                           onClick={() => setSelectedProduct(null)}
//                           className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 text-sm md:text-base"
//                         >
//                           Enquire Now
//                           <TrendingUp className="w-4 h-4" />
//                         </a>
//                         <button
//                           onClick={() => setSelectedProduct(null)}
//                           className="px-6 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 text-sm md:text-base"
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(212, 175, 55, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(212, 175, 55, 0.6);
//         }
        
//         .custom-scrollbar-right::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-thumb {
//           background: rgba(212, 175, 55, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-thumb:hover {
//           background: rgba(212, 175, 55, 0.6);
//         }
//       `}</style>
//     </>
//   );
// }






// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight, Sparkles, Crown, Gem, BadgeDollarSign, X, Check, Leaf, TrendingUp, Clock, ChevronLeft, ChevronRight, Star, User, Truck, Shield, Clock as ClockIcon, Coffee, Flame, Leaf as LeafIcon, Utensils, Building2, ShoppingBag, Package, Scale, Ruler, Weight } from "lucide-react";
// import { useState } from "react";
// import tPremium from "@/assets/product1.png";
// import tRoyal from "@/assets/product2.png";
// import tEconomic from "@/assets/product3.png";

// // Define types
// interface Review {
//   name: string;
//   rating: number;
//   comment: string;
//   date: string;
// }

// interface CatalogOption {
//   size: string;
//   price: string;
//   moq: string;
//   sku: string;
// }

// interface ProductDetails {
//   fullDescription: string;
//   specifications: Array<{ label: string; value: string }>;
//   brewing: string[];
//   thumbnails: string[];
//   reviews: Review[];
//   catalog: CatalogOption[];
// }

// interface Product {
//   img: string;
//   title: string;
//   desc: string;
//   badge: string;
//   icon: any;
//   features: string[];
//   details: ProductDetails;
//   category: string;
// }

// const products: Product[] = [
//   { 
//     img: tPremium, 
//     title: "Royal Assam Tea", 
//     desc: "Finest handpicked leaves from premium estates, offering exceptional aroma and rich golden liquor.",
//     badge: "Premium",
//     icon: Gem,
//     category: "Premium Tea",
//     features: ["Single Estate", "Handpicked", "Golden Liquor"],
//     details: {
//       fullDescription: "Our Premium Assam Tea is sourced from the most respected Tea estates in Upper Assam, known for producing Teas with exceptional body and depth. Each leaf is carefully handpicked during the peak growing season to ensure the highest quality standards.",
//       specifications: [
//         { label: "Origin", value: "Upper Assam, India" },
//         { label: "Elevation", value: "100-200 meters" },
//         { label: "Harvest", value: "First Flush (March-April)" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Morning" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Enjoy with or without milk"
//       ],
//       thumbnails: [tPremium, tPremium, tPremium],
//       catalog: [
//         { size: "500g", price: "₹450", moq: "10 packs", sku: "RAT-500" },
//         { size: "1kg", price: "₹850", moq: "5 packs", sku: "RAT-001" },
//         { size: "5kg", price: "₹3,900", moq: "2 packs", sku: "RAT-005" },
//         { size: "10kg", price: "₹7,200", moq: "1 pack", sku: "RAT-010" },
//         { size: "25kg", price: "₹17,500", moq: "1 pack", sku: "RAT-025" }
//       ],
//       reviews: [
//         { name: "Rajesh Sharma", rating: 5, comment: "Excellent quality Tea! The aroma is amazing.", date: "2024-02-15" },
//         { name: "Priya Patel", rating: 5, comment: "Truly premium taste. Worth every penny.", date: "2024-02-10" },
//         { name: "Amit Kumar", rating: 4, comment: "Great flavor and consistent quality.", date: "2024-02-05" }
//       ]
//     }
//   },
//   { 
//     img: tRoyal, 
//     title: "Premium Assam Tea", 
//     desc: "The pinnacle of Assam Tea — rare, exquisite, and crafted for royalty. A truly majestic experience.",
//     badge: "Royal Collection",
//     icon: Crown,
//     category: "Premium Tea",
//     features: ["Rare Leaves", "Exquisite Flavor", "Royal Heritage"],
//     details: {
//       fullDescription: "Royal Assam Tea represents the zenith of Tea craftsmanship. Sourced from century-old heritage gardens, these rare leaves undergo traditional withering and rolling processes that have been preserved for generations. Each sip reveals complex notes of malt, honey, and a distinctive royal character.",
//       specifications: [
//         { label: "Origin", value: "Heritage Estates, Assam" },
//         { label: "Elevation", value: "150-250 meters" },
//         { label: "Harvest", value: "Special Reserve (Limited)" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Special Occasions" }
//       ],
//       brewing: [
//         "Use 1.5 Teaspoons per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 4-6 minutes",
//         "Best enjoyed without milk to appreciate complexity"
//       ],
//       thumbnails: [tRoyal, tRoyal, tRoyal],
//       catalog: [
//         { size: "500g", price: "₹550", moq: "10 packs", sku: "PAT-500" },
//         { size: "1kg", price: "₹1,050", moq: "5 packs", sku: "PAT-001" },
//         { size: "5kg", price: "₹4,800", moq: "2 packs", sku: "PAT-005" },
//         { size: "10kg", price: "₹8,900", moq: "1 pack", sku: "PAT-010" },
//         { size: "25kg", price: "₹21,500", moq: "1 pack", sku: "PAT-025" }
//       ],
//       reviews: [
//         { name: "Vikram Singh", rating: 5, comment: "Absolutely royal experience! The best Tea I've ever had.", date: "2024-02-18" },
//         { name: "Neha Gupta", rating: 5, comment: "Exquisite flavor profile. A true masterpiece.", date: "2024-02-12" },
//         { name: "Anjali Mehta", rating: 5, comment: "Worth the premium price. Exceptional quality.", date: "2024-02-08" }
//       ]
//     }
//   },
//   { 
//     img: tEconomic, 
//     title: "Economic Assam Tea", 
//     desc: "Quality Assam Tea at an accessible price point. Perfect for daily consumption without compromise.",
//     badge: "Best Value",
//     icon: BadgeDollarSign,
//     category: "Daily Use Tea",
//     features: ["Affordable", "Consistent Quality", "Daily Brew"],
//     details: {
//       fullDescription: "Economic Assam Tea delivers the authentic Assam experience at an everyday price point. Sourced from reliable gardens with consistent quality standards, this Tea offers the bold, robust character Assam is famous for, perfect for your daily cup or commercial use.",
//       specifications: [
//         { label: "Origin", value: "Assam Valley" },
//         { label: "Elevation", value: "50-150 meters" },
//         { label: "Harvest", value: "Standard Season" },
//         { label: "Caffeine", value: "Medium-High" },
//         { label: "Best Time", value: "Any Time" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-4 minutes",
//         "Great with milk and sugar"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹250", moq: "10 packs", sku: "EAT-500" },
//         { size: "1kg", price: "₹450", moq: "5 packs", sku: "EAT-001" },
//         { size: "5kg", price: "₹2,100", moq: "2 packs", sku: "EAT-005" },
//         { size: "10kg", price: "₹3,900", moq: "1 pack", sku: "EAT-010" },
//         { size: "25kg", price: "₹9,500", moq: "1 pack", sku: "EAT-025" }
//       ],
//       reviews: [
//         { name: "Suresh Yadav", rating: 4, comment: "Great value for money. Perfect for daily chai.", date: "2024-02-16" },
//         { name: "Meena Devi", rating: 5, comment: "Very satisfied with the quality and price.", date: "2024-02-11" },
//         { name: "Rakesh Jain", rating: 4, comment: "Consistent taste. Good for everyday use.", date: "2024-02-06" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Classic Assam Tea",
//     desc: "Traditional Assam Tea with bold, malty flavor and rich amber color. Perfect for the true Tea lover.",
//     badge: "Classic",
//     icon: Coffee,
//     category: "Assam Tea",
//     features: ["Bold Flavor", "Rich Aroma", "Traditional"],
//     details: {
//       fullDescription: "Classic Assam Tea embodies the true spirit of Assam's Tea heritage. Known for its strong, malty character and deep amber color, this Tea is the perfect choice for those who appreciate the bold flavors that Assam is famous for worldwide.",
//       specifications: [
//         { label: "Origin", value: "Assam, India" },
//         { label: "Elevation", value: "80-180 meters" },
//         { label: "Harvest", value: "Second Flush" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Morning & Afternoon" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Perfect with milk and sugar"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹300", moq: "10 packs", sku: "CAT-500" },
//         { size: "1kg", price: "₹550", moq: "5 packs", sku: "CAT-001" },
//         { size: "5kg", price: "₹2,500", moq: "2 packs", sku: "CAT-005" },
//         { size: "10kg", price: "₹4,600", moq: "1 pack", sku: "CAT-010" },
//         { size: "25kg", price: "₹11,000", moq: "1 pack", sku: "CAT-025" }
//       ],
//       reviews: [
//         { name: "Arun Das", rating: 5, comment: "This is what real Assam Tea tastes like!", date: "2024-02-20" },
//         { name: "Smita Reddy", rating: 4, comment: "Very authentic flavor. Highly recommended.", date: "2024-02-14" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Premium CTC Tea",
//     desc: "Finest CTC (Crush, Tear, Curl) Tea with strong body and deep color. Ideal for masala chai.",
//     badge: "CTC Premium",
//     icon: Flame,
//     category: "CTC Tea",
//     features: ["Strong Body", "Deep Color", "Perfect for Chai"],
//     details: {
//       fullDescription: "Our Premium CTC Tea is crafted using the traditional Crush, Tear, Curl method that produces small, dense granules perfect for a strong, invigorating cup. This Tea is specially processed to release maximum flavor and color, making it ideal for masala chai.",
//       specifications: [
//         { label: "Origin", value: "Assam, India" },
//         { label: "Process", value: "CTC (Crush, Tear, Curl)" },
//         { label: "Harvest", value: "Multiple Seasons" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Anytime" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 2-3 minutes",
//         "Excellent with spices and milk"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹280", moq: "10 packs", sku: "CTC-500" },
//         { size: "1kg", price: "₹520", moq: "5 packs", sku: "CTC-001" },
//         { size: "5kg", price: "₹2,400", moq: "2 packs", sku: "CTC-005" },
//         { size: "10kg", price: "₹4,400", moq: "1 pack", sku: "CTC-010" },
//         { size: "25kg", price: "₹10,500", moq: "1 pack", sku: "CTC-025" }
//       ],
//       reviews: [
//         { name: "Rahul Kapoor", rating: 5, comment: "Best CTC Tea for masala chai!", date: "2024-02-19" },
//         { name: "Deepika Singh", rating: 4, comment: "Very strong and flavorful.", date: "2024-02-12" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Premium Green Tea",
//     desc: "Light, refreshing, and packed with antioxidants. Sourced from the finest Tea gardens.",
//     badge: "Healthy Choice",
//     icon: LeafIcon,
//     category: "Green Tea",
//     features: ["Antioxidant Rich", "Light & Refreshing", "Health Benefits"],
//     details: {
//       fullDescription: "Our Premium Green Tea is meticulously processed to preserve the natural antioxidants and delicate flavor profiles. Gently sTeamed and rolled, this Tea offers a smooth, refreshing taste with subtle vegetal notes that Tea connoisseurs appreciate.",
//       specifications: [
//         { label: "Origin", value: "Assam Highlands" },
//         { label: "Process", value: "STeamed & Rolled" },
//         { label: "Harvest", value: "Spring Season" },
//         { label: "Caffeine", value: "Low-Moderate" },
//         { label: "Best Time", value: "Morning & Evening" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 75-80°C",
//         "Steep for 2-3 minutes",
//         "Do not oversteep to avoid bitterness"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹350", moq: "10 packs", sku: "GRT-500" },
//         { size: "1kg", price: "₹650", moq: "5 packs", sku: "GRT-001" },
//         { size: "5kg", price: "₹2,900", moq: "2 packs", sku: "GRT-005" },
//         { size: "10kg", price: "₹5,400", moq: "1 pack", sku: "GRT-010" },
//         { size: "25kg", price: "₹12,800", moq: "1 pack", sku: "GRT-025" }
//       ],
//       reviews: [
//         { name: "Dr. Meera Gupta", rating: 5, comment: "Excellent quality green Tea with great health benefits.", date: "2024-02-17" },
//         { name: "Rohit Sharma", rating: 4, comment: "Very refreshing and light. Love it!", date: "2024-02-10" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Authentic Masala Tea",
//     desc: "Premium CTC blended with traditional Indian spices for the perfect cup of masala chai.",
//     badge: "Spiced Blend",
//     icon: Coffee,
//     category: "Masala Tea",
//     features: ["Spiced Blend", "Traditional Recipe", "Perfect Chai"],
//     details: {
//       fullDescription: "Our Authentic Masala Tea is a carefully crafted blend of premium CTC Tea and traditional Indian spices including cardamom, cinnamon, ginger, and cloves. This perfect combination creates a warming, aromatic cup that captures the essence of Indian chai.",
//       specifications: [
//         { label: "Base", value: "Premium CTC Tea" },
//         { label: "Spices", value: "Cardamom, Cinnamon, Ginger, Cloves" },
//         { label: "Blend", value: "Traditional Recipe" },
//         { label: "Caffeine", value: "Medium-High" },
//         { label: "Best Time", value: "Anytime" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-4 minutes",
//         "Add milk and sugar to taste"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹320", moq: "10 packs", sku: "MST-500" },
//         { size: "1kg", price: "₹590", moq: "5 packs", sku: "MST-001" },
//         { size: "5kg", price: "₹2,700", moq: "2 packs", sku: "MST-005" },
//         { size: "10kg", price: "₹4,900", moq: "1 pack", sku: "MST-010" },
//         { size: "25kg", price: "₹11,500", moq: "1 pack", sku: "MST-025" }
//       ],
//       reviews: [
//         { name: "Ananya Patel", rating: 5, comment: "The perfect masala chai blend!", date: "2024-02-18" },
//         { name: "Vikram Reddy", rating: 5, comment: "Authentic taste. Reminds me of street chai.", date: "2024-02-13" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Bulk Institutional Pack",
//     desc: "High-quality Tea in bulk packaging for institutions, offices, and industrial use.",
//     badge: "Bulk Supply",
//     icon: Building2,
//     category: "Institutional Packs",
//     features: ["Bulk Packaging", "Cost Effective", "Consistent Quality"],
//     details: {
//       fullDescription: "Our Institutional Packs offer premium quality Tea in bulk quantities at competitive prices. Ideal for offices, hotels, canteens, and industrial use, these packs ensure consistent quality and exceptional value for large-scale consumption.",
//       specifications: [
//         { label: "Packaging", value: "Bulk Bags" },
//         { label: "Grade", value: "Commercial Grade" },
//         { label: "Origin", value: "Assam, India" },
//         { label: "Shelf Life", value: "24 Months" },
//         { label: "Best For", value: "Institutional Consumption" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Adjust quantity based on required strength"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "5kg", price: "₹2,100", moq: "2 packs", sku: "INS-005" },
//         { size: "10kg", price: "₹3,900", moq: "1 pack", sku: "INS-010" },
//         { size: "25kg", price: "₹9,200", moq: "1 pack", sku: "INS-025" },
//         { size: "50kg", price: "₹17,500", moq: "1 pack", sku: "INS-050" }
//       ],
//       reviews: [
//         { name: "Hotel Grand", rating: 5, comment: "Excellent quality for our daily hotel service.", date: "2024-02-16" },
//         { name: "Office Supplies", rating: 4, comment: "Great bulk pricing and consistent quality.", date: "2024-02-09" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "HORECA Premium Pack",
//     desc: "Superior quality Tea specially packaged for hotels, restaurants, and catering services.",
//     badge: "HORECA Grade",
//     icon: Utensils,
//     category: "Horeca Packs",
//     features: ["Premium Grade", "Hospitality Standard", "Consistent Flavor"],
//     details: {
//       fullDescription: "Our HORECA Premium Pack is specially designed for the hospitality industry. These carefully selected Tea leaves offer superior quality, consistent flavor, and elegant presentation perfect for hotels, restaurants, and catering services that demand the best for their guests.",
//       specifications: [
//         { label: "Packaging", value: "Premium Bags" },
//         { label: "Grade", value: "Hospitality Grade" },
//         { label: "Origin", value: "Premium Estates, Assam" },
//         { label: "Shelf Life", value: "24 Months" },
//         { label: "Best For", value: "Hotels, Restaurants, Catering" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Train staff for consistent brewing"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "1kg", price: "₹650", moq: "5 packs", sku: "HOR-001" },
//         { size: "5kg", price: "₹2,900", moq: "2 packs", sku: "HOR-005" },
//         { size: "10kg", price: "₹5,400", moq: "1 pack", sku: "HOR-010" },
//         { size: "25kg", price: "₹12,500", moq: "1 pack", sku: "HOR-025" }
//       ],
//       reviews: [
//         { name: "Grand Heritage Hotel", rating: 5, comment: "Our guests love the Tea quality!", date: "2024-02-15" },
//         { name: "Cafe Royal", rating: 5, comment: "Excellent for our premium Tea service.", date: "2024-02-08" }
//       ]
//     }
//   }
// ];

// export function Products() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0);
//   const [activeCategory, setActiveCategory] = useState<string>("All");

//   const categories = ["All", "Premium Tea", "Daily Use Tea", "Assam Tea", "CTC Tea", "Green Tea", "Masala Tea", "Institutional Packs", "Horeca Packs"];

//   const filteredProducts = activeCategory === "All" 
//     ? products 
//     : products.filter(p => p.category === activeCategory);

//   const nextImage = () => {
//     if (selectedProduct) {
//       setSelectedThumbnail((prev) => (prev + 1) % selectedProduct.details.thumbnails.length);
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setSelectedThumbnail((prev) => (prev - 1 + selectedProduct.details.thumbnails.length) % selectedProduct.details.thumbnails.length);
//     }
//   };

//   const renderStars = (rating: number) => {
//     return Array(5).fill(0).map((_, i) => (
//       <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-gold fill-gold' : 'text-gold/30'}`} />
//     ));
//   };

//   return (
//     <>
//       <section id="products" className="relative bg-gradient-to-br from-forest-deep via-forest-deep to-forest py-16 md:py-20 overflow-hidden">
//         {/* Decorative background elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl"></div>
//           <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/10 blur-3xl"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cream/5 blur-3xl"></div>
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
//           >
//             <div className="flex items-center justify-center gap-3 mb-3">
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//               <span className="text-[11px] uppercase tracking-[0.4em] text-gold font-semibold">Collection</span>
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//             </div>
            
//             <motion.div
//               initial={{ scale: 0.95 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-3">
//                 Choose Your{' '}
//                 <span className="relative inline-block">
//                   <span className="italic bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                     Perfect Blend
//                   </span>
//                   <Sparkles className="absolute -top-5 -right-6 w-4 h-4 text-gold opacity-60" />
//                 </span>
//               </h2>
//             </motion.div>
            
//             <p className="mt-2 text-cream/70 text-sm md:text-base max-w-xl mx-auto">
//               From everyday essentials to royal indulgence — find your perfect cup of Assam Tea.
//             </p>
//           </motion.div>

//           {/* Category Filters */}
//           <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-gold text-forest-deep shadow-lg shadow-gold/30"
//                     : "bg-cream/10 text-cream/70 hover:bg-cream/20 hover:text-cream border border-gold/20"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {filteredProducts.map((p, i) => {
//               const Icon = p.icon;
//               return (
//                 <motion.article
//                   key={p.title}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
//                 >
//                   <div className="relative overflow-hidden aspect-[4/5]">
//                     <img
//                       src={p.img}
//                       alt={p.title}
//                       className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       loading="lazy"
//                     />
                    
//                     <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 via-30% to-transparent" />
                    
//                     <div className="absolute top-3 left-3 z-10">
//                       <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 backdrop-blur-sm text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full ${
//                         p.title === "Royal Assam Tea" 
//                           ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
//                           : p.title === "Premium Assam Tea"
//                           ? "bg-gold/90 text-forest-deep"
//                           : "bg-cream/90 text-forest-deep"
//                       }`}>
//                         <Icon className="w-2.5 h-2.5" />
//                         {p.badge}
//                       </span>
//                     </div>
                    
//                     <div className="absolute top-3 right-3 z-10">
//                       <span className="inline-flex items-center px-2 py-0.5 bg-black/50 backdrop-blur-sm text-[9px] text-cream/80 rounded-full border border-gold/20">
//                         {p.category}
//                       </span>
//                     </div>
                    
//                     <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                       <div className="flex items-center gap-1.5 mb-1.5">
//                         <Icon className="w-4 h-4 text-gold" />
//                         <h3 className="font-display text-xl md:text-2xl text-cream group-hover:text-gold transition-colors duration-300">
//                           {p.title}
//                         </h3>
//                       </div>
//                       <p className="text-cream/70 text-xs md:text-sm mb-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
//                         {p.desc}
//                       </p>
                      
//                       <div className="flex flex-wrap gap-1.5 mb-3">
//                         {p.features.map((feature, idx) => (
//                           <span key={idx} className="text-[9px] md:text-[10px] text-cream/50 border border-gold/20 rounded-full px-1.5 py-0.5">
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
                      
//                       <button
//                         onClick={() => {
//                           setSelectedProduct(p);
//                           setSelectedThumbnail(0);
//                         }}
//                         className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-0.5 group-hover:border-gold transition-all duration-300 group-hover:gap-2 hover:cursor-pointer"
//                       >
//                         <span>Discover</span>
//                         <ArrowUpRight className="h-2.5 w-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -skew-x-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//                   </div>

//                   {p.title === "Royal Assam Tea" && (
//                     <div className="absolute -top-2 -right-2 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//                       <Crown className="w-full h-full text-gold" />
//                     </div>
//                   )}
//                 </motion.article>
//               );
//             })}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-cream/60 text-lg">No products found in this category.</p>
//             </div>
//           )}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-center mt-8 md:mt-10"
//           >
//             <a
//               href="#contact"
//               className="group inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-gold/30 text-gold font-semibold rounded-full hover:bg-gold hover:text-forest-deep transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 text-xs md:text-sm"
//             >
//               Get Wholesale Pricing
//               <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Product Details Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
//             onClick={() => setSelectedProduct(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-forest-deep to-forest rounded-2xl shadow-2xl border border-gold/20"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-gold/20 transition-colors duration-300 text-cream hover:text-gold"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="p-0">
//                 <div className="flex flex-col lg:flex-row">
//                   {/* Left side - Images and Reviews */}
//                   <div className="lg:w-1/2 border-r border-gold/20">
//                     <div className="p-6 h-full flex flex-col">
//                       <div className="flex-shrink-0">
//                         <div className="relative overflow-hidden rounded-xl mb-4 aspect-square group/image">
//                           <img
//                             src={selectedProduct.details.thumbnails[selectedThumbnail]}
//                             alt={selectedProduct.title}
//                             className="w-full h-full object-cover"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
                          
//                           {selectedProduct.details.thumbnails.length > 1 && (
//                             <>
//                               <button
//                                 onClick={prevImage}
//                                 className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
//                               >
//                                 <ChevronLeft className="w-6 h-6" />
//                               </button>
//                               <button
//                                 onClick={nextImage}
//                                 className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
//                               >
//                                 <ChevronRight className="w-6 h-6" />
//                               </button>
//                             </>
//                           )}
//                         </div>
                        
//                         <div className="flex gap-3 justify-center mb-6">
//                           {selectedProduct.details.thumbnails.map((thumb, idx: number) => (
//                             <button
//                               key={idx}
//                               onClick={() => setSelectedThumbnail(idx)}
//                               className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
//                                 selectedThumbnail === idx 
//                                   ? "border-gold shadow-lg shadow-gold/20" 
//                                   : "border-gold/30 hover:border-gold/60"
//                               }`}
//                             >
//                               <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Reviews Section */}
//                       <div className="flex-1 flex flex-col min-h-0">
//                         <div className="flex items-center gap-2 mb-4 flex-shrink-0">
//                           <Star className="w-5 h-5 text-gold fill-gold" />
//                           <h4 className="text-gold font-semibold text-base uppercase tracking-wider">Customer Reviews</h4>
//                         </div>
//                         <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
//                           {selectedProduct.details.reviews.map((review: Review, idx: number) => (
//                             <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: idx * 0.1 }}
//                               className="bg-cream/5 backdrop-blur-sm rounded-lg p-3 border border-gold/20 hover:border-gold/40 transition-all duration-300"
//                             >
//                               <div className="flex items-center justify-between mb-2">
//                                 <div className="flex items-center gap-2">
//                                   <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
//                                     <User className="w-4 h-4 text-gold" />
//                                   </div>
//                                   <div>
//                                     <p className="text-cream text-sm font-semibold">{review.name}</p>
//                                     <p className="text-cream/50 text-[10px]">{review.date}</p>
//                                   </div>
//                                 </div>
//                                 <div className="flex gap-0.5 flex-shrink-0">
//                                   {renderStars(review.rating)}
//                                 </div>
//                               </div>
//                               <p className="text-cream/70 text-sm leading-relaxed pl-10">
//                                 "{review.comment}"
//                               </p>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right side - Details */}
//                   <div className="lg:w-1/2">
//                     <div className="p-6 h-full flex flex-col">
//                       <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-full w-fit flex-shrink-0 ${
//                         selectedProduct.title === "Royal Assam Tea" 
//                           ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
//                           : selectedProduct.title === "Premium Assam Tea"
//                           ? "bg-gold/90 text-forest-deep"
//                           : "bg-cream/90 text-forest-deep"
//                       }`}>
//                         {selectedProduct.badge}
//                       </span>
                      
//                       <h3 className="font-display text-3xl md:text-4xl text-cream mt-3 mb-4 flex-shrink-0">
//                         {selectedProduct.title}
//                       </h3>
                      
//                       <div className="overflow-y-auto pr-2 flex-1 custom-scrollbar-right">
//                         <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-6">
//                           {selectedProduct.details.fullDescription}
//                         </p>

//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Leaf className="w-4 h-4" />
//                             Specifications
//                           </h4>
//                           <div className="grid grid-cols-2 gap-3">
//                             {selectedProduct.details.specifications.map((spec: { label: string; value: string }, idx: number) => (
//                               <div key={idx} className="border-b border-gold/20 pb-2">
//                                 <p className="text-cream/50 text-xs uppercase tracking-wider">{spec.label}</p>
//                                 <p className="text-cream text-sm md:text-base font-medium">{spec.value}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Product Catalog / Pricing Table */}
//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Package className="w-4 h-4" />
//                             Product Catalog & Pricing
//                           </h4>
//                           <div className="overflow-x-auto">
//                             <table className="w-full text-sm">
//                               <thead>
//                                 <tr className="border-b border-gold/20">
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">Pack Size</th>
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">Price</th>
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">MOQ</th>
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">SKU</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 {selectedProduct.details.catalog.map((item: CatalogOption, idx: number) => (
//                                   <motion.tr
//                                     key={idx}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ delay: idx * 0.05 }}
//                                     className="border-b border-gold/10 hover:bg-gold/5 transition-colors duration-200"
//                                   >
//                                     <td className="py-2 px-3 text-cream font-medium">
//                                       <div className="flex items-center gap-2">
//                                         <Weight className="w-3 h-3 text-gold/60" />
//                                         {item.size}
//                                       </div>
//                                     </td>
//                                     <td className="py-2 px-3 text-gold font-bold">{item.price}</td>
//                                     <td className="py-2 px-3 text-cream/70 text-xs">{item.moq}</td>
//                                     <td className="py-2 px-3 text-cream/40 text-xs font-mono">{item.sku}</td>
//                                   </motion.tr>
//                                 ))}
//                               </tbody>
//                             </table>
//                           </div>
//                           <p className="text-cream/40 text-[10px] mt-2 italic">* MOQ: Minimum Order Quantity | Bulk discounts available for larger quantities</p>
//                         </div>

//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Clock className="w-4 h-4" />
//                             Brewing Instructions
//                           </h4>
//                           <ul className="space-y-2">
//                             {selectedProduct.details.brewing.map((step: string, idx: number) => (
//                               <li key={idx} className="flex items-start gap-2 text-cream/80 text-sm md:text-base">
//                                 <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
//                                 <span>{step}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="flex flex-wrap gap-2 mb-6">
//                           {selectedProduct.features.map((feature: string, idx: number) => (
//                             <span key={idx} className="text-sm text-cream/70 border border-gold/30 rounded-full px-3 py-1 bg-forest-deep/50">
//                               {feature}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="mt-6 pt-4 border-t border-gold/20 flex-shrink-0">
//                         <div className="grid grid-cols-3 gap-3">
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <Truck className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Free Shipping</p>
//                             <p className="text-cream/40 text-[8px]">On orders 50kg+</p>
//                           </div>
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <Shield className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Quality Guarantee</p>
//                             <p className="text-cream/40 text-[8px]">100% authentic</p>
//                           </div>
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <ClockIcon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Fast Delivery</p>
//                             <p className="text-cream/40 text-[8px]">Pan India shipping</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex gap-3 mt-4 flex-shrink-0">
//                         <a
//                           href="#contact"
//                           onClick={() => setSelectedProduct(null)}
//                           className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 text-sm md:text-base"
//                         >
//                           Enquire Now
//                           <TrendingUp className="w-4 h-4" />
//                         </a>
//                         <button
//                           onClick={() => setSelectedProduct(null)}
//                           className="px-6 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 text-sm md:text-base"
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(212, 175, 55, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(212, 175, 55, 0.6);
//         }
        
//         .custom-scrollbar-right::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-thumb {
//           background: rgba(212, 175, 55, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-thumb:hover {
//           background: rgba(212, 175, 55, 0.6);
//         }
//       `}</style>
//     </>
//   );
// }





// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight, Sparkles, Crown, Gem, BadgeDollarSign, X, Check, Leaf, TrendingUp, Clock, ChevronLeft, ChevronRight, Star, User, Truck, Shield, Clock as ClockIcon, Coffee, Flame, Leaf as LeafIcon, Utensils, Building2, ShoppingBag, Package, Scale, Ruler, Weight } from "lucide-react";
// import { useState } from "react";
// import tPremium from "@/assets/product1.png";
// import tRoyal from "@/assets/product2.png";
// import tEconomic from "@/assets/product3.png";

// // Define types
// interface Review {
//   name: string;
//   rating: number;
//   comment: string;
//   date: string;
// }

// interface CatalogOption {
//   size: string;
//   price: string;
//   moq: string;
//   sku: string;
// }

// interface ProductDetails {
//   fullDescription: string;
//   specifications: Array<{ label: string; value: string }>;
//   brewing: string[];
//   thumbnails: string[];
//   reviews: Review[];
//   catalog: CatalogOption[];
// }

// interface Product {
//   img: string;
//   title: string;
//   desc: string;
//   badge: string;
//   icon: any;
//   features: string[];
//   details: ProductDetails;
//   category: string;
// }

// const products: Product[] = [
//   { 
//     img: tPremium, 
//     title: "Royal Assam Tea", 
//     desc: "Finest handpicked leaves from premium estates, offering exceptional aroma and rich golden liquor.",
//     badge: "Premium",
//     icon: Gem,
//     category: "Premium Tea",
//     features: ["Single Estate", "Handpicked", "Golden Liquor"],
//     details: {
//       fullDescription: "Our Premium Assam Tea is sourced from the most respected Tea estates in Upper Assam, known for producing Teas with exceptional body and depth. Each leaf is carefully handpicked during the peak growing season to ensure the highest quality standards.",
//       specifications: [
//         { label: "Origin", value: "Upper Assam, India" },
//         { label: "Elevation", value: "100-200 meters" },
//         { label: "Harvest", value: "First Flush (March-April)" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Morning" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Enjoy with or without milk"
//       ],
//       thumbnails: [tPremium, tPremium, tPremium],
//       catalog: [
//         { size: "500g", price: "₹450", moq: "10 packs", sku: "RAT-500" },
//         { size: "1kg", price: "₹850", moq: "5 packs", sku: "RAT-001" },
//         { size: "5kg", price: "₹3,900", moq: "2 packs", sku: "RAT-005" },
//         { size: "10kg", price: "₹7,200", moq: "1 pack", sku: "RAT-010" },
//         { size: "25kg", price: "₹17,500", moq: "1 pack", sku: "RAT-025" }
//       ],
//       reviews: [
//         { name: "Rajesh Sharma", rating: 5, comment: "Excellent quality Tea! The aroma is amazing.", date: "2024-02-15" },
//         { name: "Priya Patel", rating: 5, comment: "Truly premium taste. Worth every penny.", date: "2024-02-10" },
//         { name: "Amit Kumar", rating: 4, comment: "Great flavor and consistent quality.", date: "2024-02-05" }
//       ]
//     }
//   },
//   { 
//     img: tRoyal, 
//     title: "Premium Assam Tea", 
//     desc: "The pinnacle of Assam Tea — rare, exquisite, and crafted for royalty. A truly majestic experience.",
//     badge: "Royal Collection",
//     icon: Crown,
//     category: "Premium Tea",
//     features: ["Rare Leaves", "Exquisite Flavor", "Royal Heritage"],
//     details: {
//       fullDescription: "Royal Assam Tea represents the zenith of Tea craftsmanship. Sourced from century-old heritage gardens, these rare leaves undergo traditional withering and rolling processes that have been preserved for generations. Each sip reveals complex notes of malt, honey, and a distinctive royal character.",
//       specifications: [
//         { label: "Origin", value: "Heritage Estates, Assam" },
//         { label: "Elevation", value: "150-250 meters" },
//         { label: "Harvest", value: "Special Reserve (Limited)" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Special Occasions" }
//       ],
//       brewing: [
//         "Use 1.5 Teaspoons per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 4-6 minutes",
//         "Best enjoyed without milk to appreciate complexity"
//       ],
//       thumbnails: [tRoyal, tRoyal, tRoyal],
//       catalog: [
//         { size: "500g", price: "₹550", moq: "10 packs", sku: "PAT-500" },
//         { size: "1kg", price: "₹1,050", moq: "5 packs", sku: "PAT-001" },
//         { size: "5kg", price: "₹4,800", moq: "2 packs", sku: "PAT-005" },
//         { size: "10kg", price: "₹8,900", moq: "1 pack", sku: "PAT-010" },
//         { size: "25kg", price: "₹21,500", moq: "1 pack", sku: "PAT-025" }
//       ],
//       reviews: [
//         { name: "Vikram Singh", rating: 5, comment: "Absolutely royal experience! The best Tea I've ever had.", date: "2024-02-18" },
//         { name: "Neha Gupta", rating: 5, comment: "Exquisite flavor profile. A true masterpiece.", date: "2024-02-12" },
//         { name: "Anjali Mehta", rating: 5, comment: "Worth the premium price. Exceptional quality.", date: "2024-02-08" }
//       ]
//     }
//   },
//   { 
//     img: tEconomic, 
//     title: "Economic Assam Tea", 
//     desc: "Quality Assam Tea at an accessible price point. Perfect for daily consumption without compromise.",
//     badge: "Best Value",
//     icon: BadgeDollarSign,
//     category: "Daily Use Tea",
//     features: ["Affordable", "Consistent Quality", "Daily Brew"],
//     details: {
//       fullDescription: "Economic Assam Tea delivers the authentic Assam experience at an everyday price point. Sourced from reliable gardens with consistent quality standards, this Tea offers the bold, robust character Assam is famous for, perfect for your daily cup or commercial use.",
//       specifications: [
//         { label: "Origin", value: "Assam Valley" },
//         { label: "Elevation", value: "50-150 meters" },
//         { label: "Harvest", value: "Standard Season" },
//         { label: "Caffeine", value: "Medium-High" },
//         { label: "Best Time", value: "Any Time" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-4 minutes",
//         "Great with milk and sugar"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹250", moq: "10 packs", sku: "EAT-500" },
//         { size: "1kg", price: "₹450", moq: "5 packs", sku: "EAT-001" },
//         { size: "5kg", price: "₹2,100", moq: "2 packs", sku: "EAT-005" },
//         { size: "10kg", price: "₹3,900", moq: "1 pack", sku: "EAT-010" },
//         { size: "25kg", price: "₹9,500", moq: "1 pack", sku: "EAT-025" }
//       ],
//       reviews: [
//         { name: "Suresh Yadav", rating: 4, comment: "Great value for money. Perfect for daily chai.", date: "2024-02-16" },
//         { name: "Meena Devi", rating: 5, comment: "Very satisfied with the quality and price.", date: "2024-02-11" },
//         { name: "Rakesh Jain", rating: 4, comment: "Consistent taste. Good for everyday use.", date: "2024-02-06" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Classic Assam Tea",
//     desc: "Traditional Assam Tea with bold, malty flavor and rich amber color. Perfect for the true Tea lover.",
//     badge: "Classic",
//     icon: Coffee,
//     category: "Assam Tea",
//     features: ["Bold Flavor", "Rich Aroma", "Traditional"],
//     details: {
//       fullDescription: "Classic Assam Tea embodies the true spirit of Assam's Tea heritage. Known for its strong, malty character and deep amber color, this Tea is the perfect choice for those who appreciate the bold flavors that Assam is famous for worldwide.",
//       specifications: [
//         { label: "Origin", value: "Assam, India" },
//         { label: "Elevation", value: "80-180 meters" },
//         { label: "Harvest", value: "Second Flush" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Morning & Afternoon" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Perfect with milk and sugar"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹300", moq: "10 packs", sku: "CAT-500" },
//         { size: "1kg", price: "₹550", moq: "5 packs", sku: "CAT-001" },
//         { size: "5kg", price: "₹2,500", moq: "2 packs", sku: "CAT-005" },
//         { size: "10kg", price: "₹4,600", moq: "1 pack", sku: "CAT-010" },
//         { size: "25kg", price: "₹11,000", moq: "1 pack", sku: "CAT-025" }
//       ],
//       reviews: [
//         { name: "Arun Das", rating: 5, comment: "This is what real Assam Tea tastes like!", date: "2024-02-20" },
//         { name: "Smita Reddy", rating: 4, comment: "Very authentic flavor. Highly recommended.", date: "2024-02-14" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Premium CTC Tea",
//     desc: "Finest CTC (Crush, Tear, Curl) Tea with strong body and deep color. Ideal for masala chai.",
//     badge: "CTC Premium",
//     icon: Flame,
//     category: "CTC Tea",
//     features: ["Strong Body", "Deep Color", "Perfect for Chai"],
//     details: {
//       fullDescription: "Our Premium CTC Tea is crafted using the traditional Crush, Tear, Curl method that produces small, dense granules perfect for a strong, invigorating cup. This Tea is specially processed to release maximum flavor and color, making it ideal for masala chai.",
//       specifications: [
//         { label: "Origin", value: "Assam, India" },
//         { label: "Process", value: "CTC (Crush, Tear, Curl)" },
//         { label: "Harvest", value: "Multiple Seasons" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Anytime" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 2-3 minutes",
//         "Excellent with spices and milk"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹280", moq: "10 packs", sku: "CTC-500" },
//         { size: "1kg", price: "₹520", moq: "5 packs", sku: "CTC-001" },
//         { size: "5kg", price: "₹2,400", moq: "2 packs", sku: "CTC-005" },
//         { size: "10kg", price: "₹4,400", moq: "1 pack", sku: "CTC-010" },
//         { size: "25kg", price: "₹10,500", moq: "1 pack", sku: "CTC-025" }
//       ],
//       reviews: [
//         { name: "Rahul Kapoor", rating: 5, comment: "Best CTC Tea for masala chai!", date: "2024-02-19" },
//         { name: "Deepika Singh", rating: 4, comment: "Very strong and flavorful.", date: "2024-02-12" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Premium Green Tea",
//     desc: "Light, refreshing, and packed with antioxidants. Sourced from the finest Tea gardens.",
//     badge: "Healthy Choice",
//     icon: LeafIcon,
//     category: "Green Tea",
//     features: ["Antioxidant Rich", "Light & Refreshing", "Health Benefits"],
//     details: {
//       fullDescription: "Our Premium Green Tea is meticulously processed to preserve the natural antioxidants and delicate flavor profiles. Gently sTeamed and rolled, this Tea offers a smooth, refreshing taste with subtle vegetal notes that Tea connoisseurs appreciate.",
//       specifications: [
//         { label: "Origin", value: "Assam Highlands" },
//         { label: "Process", value: "STeamed & Rolled" },
//         { label: "Harvest", value: "Spring Season" },
//         { label: "Caffeine", value: "Low-Moderate" },
//         { label: "Best Time", value: "Morning & Evening" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 75-80°C",
//         "Steep for 2-3 minutes",
//         "Do not oversteep to avoid bitterness"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹350", moq: "10 packs", sku: "GRT-500" },
//         { size: "1kg", price: "₹650", moq: "5 packs", sku: "GRT-001" },
//         { size: "5kg", price: "₹2,900", moq: "2 packs", sku: "GRT-005" },
//         { size: "10kg", price: "₹5,400", moq: "1 pack", sku: "GRT-010" },
//         { size: "25kg", price: "₹12,800", moq: "1 pack", sku: "GRT-025" }
//       ],
//       reviews: [
//         { name: "Dr. Meera Gupta", rating: 5, comment: "Excellent quality green Tea with great health benefits.", date: "2024-02-17" },
//         { name: "Rohit Sharma", rating: 4, comment: "Very refreshing and light. Love it!", date: "2024-02-10" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Authentic Masala Tea",
//     desc: "Premium CTC blended with traditional Indian spices for the perfect cup of masala chai.",
//     badge: "Spiced Blend",
//     icon: Coffee,
//     category: "Masala Tea",
//     features: ["Spiced Blend", "Traditional Recipe", "Perfect Chai"],
//     details: {
//       fullDescription: "Our Authentic Masala Tea is a carefully crafted blend of premium CTC Tea and traditional Indian spices including cardamom, cinnamon, ginger, and cloves. This perfect combination creates a warming, aromatic cup that captures the essence of Indian chai.",
//       specifications: [
//         { label: "Base", value: "Premium CTC Tea" },
//         { label: "Spices", value: "Cardamom, Cinnamon, Ginger, Cloves" },
//         { label: "Blend", value: "Traditional Recipe" },
//         { label: "Caffeine", value: "Medium-High" },
//         { label: "Best Time", value: "Anytime" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-4 minutes",
//         "Add milk and sugar to taste"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹320", moq: "10 packs", sku: "MST-500" },
//         { size: "1kg", price: "₹590", moq: "5 packs", sku: "MST-001" },
//         { size: "5kg", price: "₹2,700", moq: "2 packs", sku: "MST-005" },
//         { size: "10kg", price: "₹4,900", moq: "1 pack", sku: "MST-010" },
//         { size: "25kg", price: "₹11,500", moq: "1 pack", sku: "MST-025" }
//       ],
//       reviews: [
//         { name: "Ananya Patel", rating: 5, comment: "The perfect masala chai blend!", date: "2024-02-18" },
//         { name: "Vikram Reddy", rating: 5, comment: "Authentic taste. Reminds me of street chai.", date: "2024-02-13" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Bulk Institutional Pack",
//     desc: "High-quality Tea in bulk packaging for institutions, offices, and industrial use.",
//     badge: "Bulk Supply",
//     icon: Building2,
//     category: "Institutional Packs",
//     features: ["Bulk Packaging", "Cost Effective", "Consistent Quality"],
//     details: {
//       fullDescription: "Our Institutional Packs offer premium quality Tea in bulk quantities at competitive prices. Ideal for offices, hotels, canteens, and industrial use, these packs ensure consistent quality and exceptional value for large-scale consumption.",
//       specifications: [
//         { label: "Packaging", value: "Bulk Bags" },
//         { label: "Grade", value: "Commercial Grade" },
//         { label: "Origin", value: "Assam, India" },
//         { label: "Shelf Life", value: "24 Months" },
//         { label: "Best For", value: "Institutional Consumption" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Adjust quantity based on required strength"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "5kg", price: "₹2,100", moq: "2 packs", sku: "INS-005" },
//         { size: "10kg", price: "₹3,900", moq: "1 pack", sku: "INS-010" },
//         { size: "25kg", price: "₹9,200", moq: "1 pack", sku: "INS-025" },
//         { size: "50kg", price: "₹17,500", moq: "1 pack", sku: "INS-050" }
//       ],
//       reviews: [
//         { name: "Hotel Grand", rating: 5, comment: "Excellent quality for our daily hotel service.", date: "2024-02-16" },
//         { name: "Office Supplies", rating: 4, comment: "Great bulk pricing and consistent quality.", date: "2024-02-09" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "HORECA Premium Pack",
//     desc: "Superior quality Tea specially packaged for hotels, restaurants, and catering services.",
//     badge: "HORECA Grade",
//     icon: Utensils,
//     category: "Horeca Packs",
//     features: ["Premium Grade", "Hospitality Standard", "Consistent Flavor"],
//     details: {
//       fullDescription: "Our HORECA Premium Pack is specially designed for the hospitality industry. These carefully selected Tea leaves offer superior quality, consistent flavor, and elegant presentation perfect for hotels, restaurants, and catering services that demand the best for their guests.",
//       specifications: [
//         { label: "Packaging", value: "Premium Bags" },
//         { label: "Grade", value: "Hospitality Grade" },
//         { label: "Origin", value: "Premium Estates, Assam" },
//         { label: "Shelf Life", value: "24 Months" },
//         { label: "Best For", value: "Hotels, Restaurants, Catering" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Train staff for consistent brewing"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "1kg", price: "₹650", moq: "5 packs", sku: "HOR-001" },
//         { size: "5kg", price: "₹2,900", moq: "2 packs", sku: "HOR-005" },
//         { size: "10kg", price: "₹5,400", moq: "1 pack", sku: "HOR-010" },
//         { size: "25kg", price: "₹12,500", moq: "1 pack", sku: "HOR-025" }
//       ],
//       reviews: [
//         { name: "Grand Heritage Hotel", rating: 5, comment: "Our guests love the Tea quality!", date: "2024-02-15" },
//         { name: "Cafe Royal", rating: 5, comment: "Excellent for our premium Tea service.", date: "2024-02-08" }
//       ]
//     }
//   }
// ];

// export function Products() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0);
//   const [activeCategory, setActiveCategory] = useState<string>("All");

//   const categories = ["All", "Premium Tea", "Daily Use Tea", "Assam Tea", "CTC Tea", "Green Tea", "Masala Tea", "Institutional Packs", "Horeca Packs"];

//   const filteredProducts = activeCategory === "All" 
//     ? products 
//     : products.filter(p => p.category === activeCategory);

//   const nextImage = () => {
//     if (selectedProduct) {
//       setSelectedThumbnail((prev) => (prev + 1) % selectedProduct.details.thumbnails.length);
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setSelectedThumbnail((prev) => (prev - 1 + selectedProduct.details.thumbnails.length) % selectedProduct.details.thumbnails.length);
//     }
//   };

//   const renderStars = (rating: number) => {
//     return Array(5).fill(0).map((_, i) => (
//       <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-gold fill-gold' : 'text-gold/30'}`} />
//     ));
//   };

//   return (
//     <>
//       <section id="products" className="relative bg-gradient-to-br from-forest-deep via-forest-deep to-forest py-16 md:py-20 overflow-hidden">
//         {/* Decorative background elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl"></div>
//           <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/10 blur-3xl"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cream/5 blur-3xl"></div>
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
//           >
//             <div className="flex items-center justify-center gap-3 mb-3">
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//               <span className="text-[11px] uppercase tracking-[0.4em] text-gold font-semibold">Collection</span>
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//             </div>
            
//             <motion.div
//               initial={{ scale: 0.95 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-3">
//                 Choose Your{' '}
//                 <span className="relative inline-block">
//                   <span className="italic bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                     Perfect Blend
//                   </span>
//                   <Sparkles className="absolute -top-5 -right-6 w-4 h-4 text-gold opacity-60" />
//                 </span>
//               </h2>
//             </motion.div>
            
//             <p className="mt-2 text-cream/70 text-sm md:text-base max-w-xl mx-auto">
//               From everyday essentials to royal indulgence — find your perfect cup of Assam Tea.
//             </p>
//           </motion.div>

//           {/* Category Filters */}
//           <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-gold text-forest-deep shadow-lg shadow-gold/30"
//                     : "bg-cream/10 text-cream/70 hover:bg-cream/20 hover:text-cream border border-gold/20"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* 4 Cards in a row */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//             {filteredProducts.map((p, i) => {
//               const Icon = p.icon;
//               return (
//                 <motion.article
//                   key={p.title}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
//                 >
//                   <div className="relative overflow-hidden aspect-[4/5]">
//                     <img
//                       src={p.img}
//                       alt={p.title}
//                       className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       loading="lazy"
//                     />
                    
//                     <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 via-30% to-transparent" />
                    
//                     <div className="absolute top-3 left-3 z-10">
//                       <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 backdrop-blur-sm text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full ${
//                         p.title === "Royal Assam Tea" 
//                           ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
//                           : p.title === "Premium Assam Tea"
//                           ? "bg-gold/90 text-forest-deep"
//                           : "bg-cream/90 text-forest-deep"
//                       }`}>
//                         <Icon className="w-2.5 h-2.5" />
//                         {p.badge}
//                       </span>
//                     </div>
                    
//                     <div className="absolute top-3 right-3 z-10">
//                       <span className="inline-flex items-center px-2 py-0.5 bg-black/50 backdrop-blur-sm text-[9px] text-cream/80 rounded-full border border-gold/20">
//                         {p.category}
//                       </span>
//                     </div>
                    
//                     <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                       <div className="flex items-center gap-1.5 mb-1.5">
//                         <Icon className="w-4 h-4 text-gold" />
//                         <h3 className="font-display text-lg md:text-xl text-cream group-hover:text-gold transition-colors duration-300">
//                           {p.title}
//                         </h3>
//                       </div>
//                       <p className="text-cream/70 text-xs md:text-sm mb-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
//                         {p.desc}
//                       </p>
                      
//                       <div className="flex flex-wrap gap-1.5 mb-3">
//                         {p.features.slice(0, 2).map((feature, idx) => (
//                           <span key={idx} className="text-[8px] md:text-[9px] text-cream/50 border border-gold/20 rounded-full px-1.5 py-0.5">
//                             {feature}
//                           </span>
//                         ))}
//                         {p.features.length > 2 && (
//                           <span className="text-[8px] md:text-[9px] text-cream/50 border border-gold/20 rounded-full px-1.5 py-0.5">
//                             +{p.features.length - 2}
//                           </span>
//                         )}
//                       </div>
                      
//                       <button
//                         onClick={() => {
//                           setSelectedProduct(p);
//                           setSelectedThumbnail(0);
//                         }}
//                         className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-0.5 group-hover:border-gold transition-all duration-300 group-hover:gap-2 hover:cursor-pointer"
//                       >
//                         <span>Discover</span>
//                         <ArrowUpRight className="h-2.5 w-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -skew-x-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//                   </div>

//                   {p.title === "Royal Assam Tea" && (
//                     <div className="absolute -top-2 -right-2 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//                       <Crown className="w-full h-full text-gold" />
//                     </div>
//                   )}
//                 </motion.article>
//               );
//             })}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-cream/60 text-lg">No products found in this category.</p>
//             </div>
//           )}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-center mt-8 md:mt-10"
//           >
//             <a
//               href="#contact"
//               className="group inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-gold/30 text-gold font-semibold rounded-full hover:bg-gold hover:text-forest-deep transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 text-xs md:text-sm"
//             >
//               Get Wholesale Pricing
//               <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Product Details Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
//             onClick={() => setSelectedProduct(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-forest-deep to-forest rounded-2xl shadow-2xl border border-gold/20"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-gold/20 transition-colors duration-300 text-cream hover:text-gold"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="p-0">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
//                   {/* Left side - Images and Reviews */}
//                   <div className="border-r border-gold/20">
//                     <div className="p-6 h-full flex flex-col">
//                       <div className="flex-shrink-0">
//                         <div className="relative overflow-hidden rounded-xl mb-4 aspect-square group/image">
//                           <img
//                             src={selectedProduct.details.thumbnails[selectedThumbnail]}
//                             alt={selectedProduct.title}
//                             className="w-full h-full object-cover"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
                          
//                           {selectedProduct.details.thumbnails.length > 1 && (
//                             <>
//                               <button
//                                 onClick={prevImage}
//                                 className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
//                               >
//                                 <ChevronLeft className="w-6 h-6" />
//                               </button>
//                               <button
//                                 onClick={nextImage}
//                                 className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
//                               >
//                                 <ChevronRight className="w-6 h-6" />
//                               </button>
//                             </>
//                           )}
//                         </div>
                        
//                         <div className="flex gap-3 justify-center mb-6">
//                           {selectedProduct.details.thumbnails.map((thumb, idx: number) => (
//                             <button
//                               key={idx}
//                               onClick={() => setSelectedThumbnail(idx)}
//                               className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
//                                 selectedThumbnail === idx 
//                                   ? "border-gold shadow-lg shadow-gold/20" 
//                                   : "border-gold/30 hover:border-gold/60"
//                               }`}
//                             >
//                               <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Reviews Section */}
//                       <div className="flex-1 flex flex-col min-h-0">
//                         <div className="flex items-center gap-2 mb-4 flex-shrink-0">
//                           <Star className="w-5 h-5 text-gold fill-gold" />
//                           <h4 className="text-gold font-semibold text-base uppercase tracking-wider">Customer Reviews</h4>
//                         </div>
//                         <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
//                           {selectedProduct.details.reviews.map((review: Review, idx: number) => (
//                             <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: idx * 0.1 }}
//                               className="bg-cream/5 backdrop-blur-sm rounded-lg p-3 border border-gold/20 hover:border-gold/40 transition-all duration-300"
//                             >
//                               <div className="flex items-center justify-between mb-2">
//                                 <div className="flex items-center gap-2">
//                                   <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
//                                     <User className="w-4 h-4 text-gold" />
//                                   </div>
//                                   <div>
//                                     <p className="text-cream text-sm font-semibold">{review.name}</p>
//                                     <p className="text-cream/50 text-[10px]">{review.date}</p>
//                                   </div>
//                                 </div>
//                                 <div className="flex gap-0.5 flex-shrink-0">
//                                   {renderStars(review.rating)}
//                                 </div>
//                               </div>
//                               <p className="text-cream/70 text-sm leading-relaxed pl-10">
//                                 "{review.comment}"
//                               </p>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right side - Details */}
//                   <div className="">
//                     <div className="p-6 h-full flex flex-col">
//                       <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-full w-fit flex-shrink-0 ${
//                         selectedProduct.title === "Royal Assam Tea" 
//                           ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
//                           : selectedProduct.title === "Premium Assam Tea"
//                           ? "bg-gold/90 text-forest-deep"
//                           : "bg-cream/90 text-forest-deep"
//                       }`}>
//                         {selectedProduct.badge}
//                       </span>
                      
//                       <h3 className="font-display text-3xl md:text-4xl text-cream mt-3 mb-4 flex-shrink-0">
//                         {selectedProduct.title}
//                       </h3>
                      
//                       <div className="overflow-y-auto pr-2 flex-1 custom-scrollbar-right">
//                         <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-6">
//                           {selectedProduct.details.fullDescription}
//                         </p>

//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Leaf className="w-4 h-4" />
//                             Specifications
//                           </h4>
//                           <div className="grid grid-cols-2 gap-3">
//                             {selectedProduct.details.specifications.map((spec: { label: string; value: string }, idx: number) => (
//                               <div key={idx} className="border-b border-gold/20 pb-2">
//                                 <p className="text-cream/50 text-xs uppercase tracking-wider">{spec.label}</p>
//                                 <p className="text-cream text-sm md:text-base font-medium">{spec.value}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Product Catalog / Pricing Table */}
//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Package className="w-4 h-4" />
//                             Product Catalog & Pricing
//                           </h4>
//                           <div className="overflow-x-auto">
//                             <table className="w-full text-sm">
//                               <thead>
//                                 <tr className="border-b border-gold/20">
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">Pack Size</th>
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">Price</th>
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">MOQ</th>
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">SKU</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 {selectedProduct.details.catalog.map((item: CatalogOption, idx: number) => (
//                                   <motion.tr
//                                     key={idx}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ delay: idx * 0.05 }}
//                                     className="border-b border-gold/10 hover:bg-gold/5 transition-colors duration-200"
//                                   >
//                                     <td className="py-2 px-3 text-cream font-medium">
//                                       <div className="flex items-center gap-2">
//                                         <Weight className="w-3 h-3 text-gold/60" />
//                                         {item.size}
//                                       </div>
//                                     </td>
//                                     <td className="py-2 px-3 text-gold font-bold">{item.price}</td>
//                                     <td className="py-2 px-3 text-cream/70 text-xs">{item.moq}</td>
//                                     <td className="py-2 px-3 text-cream/40 text-xs font-mono">{item.sku}</td>
//                                   </motion.tr>
//                                 ))}
//                               </tbody>
//                             </table>
//                           </div>
//                           <p className="text-cream/40 text-[10px] mt-2 italic">* MOQ: Minimum Order Quantity | Bulk discounts available for larger quantities</p>
//                         </div>

//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Clock className="w-4 h-4" />
//                             Brewing Instructions
//                           </h4>
//                           <ul className="space-y-2">
//                             {selectedProduct.details.brewing.map((step: string, idx: number) => (
//                               <li key={idx} className="flex items-start gap-2 text-cream/80 text-sm md:text-base">
//                                 <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
//                                 <span>{step}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="flex flex-wrap gap-2 mb-6">
//                           {selectedProduct.features.map((feature: string, idx: number) => (
//                             <span key={idx} className="text-sm text-cream/70 border border-gold/30 rounded-full px-3 py-1 bg-forest-deep/50">
//                               {feature}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="mt-6 pt-4 border-t border-gold/20 flex-shrink-0">
//                         <div className="grid grid-cols-3 gap-3">
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <Truck className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Free Shipping</p>
//                             <p className="text-cream/40 text-[8px]">On orders 50kg+</p>
//                           </div>
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <Shield className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Quality Guarantee</p>
//                             <p className="text-cream/40 text-[8px]">100% authentic</p>
//                           </div>
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <ClockIcon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Fast Delivery</p>
//                             <p className="text-cream/40 text-[8px]">Pan India shipping</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex gap-3 mt-4 flex-shrink-0">
//                         <a
//                           href="#contact"
//                           onClick={() => setSelectedProduct(null)}
//                           className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 text-sm md:text-base"
//                         >
//                           Enquire Now
//                           <TrendingUp className="w-4 h-4" />
//                         </a>
//                         <button
//                           onClick={() => setSelectedProduct(null)}
//                           className="px-6 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 text-sm md:text-base"
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(212, 175, 55, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(212, 175, 55, 0.6);
//         }
        
//         .custom-scrollbar-right::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-thumb {
//           background: rgba(212, 175, 55, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-thumb:hover {
//           background: rgba(212, 175, 55, 0.6);
//         }
//       `}</style>
//     </>
//   );
// }






// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight, Sparkles, Crown, Gem, BadgeDollarSign, X, Check, Leaf, TrendingUp, Clock, ChevronLeft, ChevronRight, Star, User, Truck, Shield, Clock as ClockIcon, Coffee, Flame, Leaf as LeafIcon, Utensils, Building2, ShoppingBag, Package, Scale, Ruler, Weight } from "lucide-react";
// import { useState } from "react";
// import tPremium from "@/assets/product1.png";
// import tRoyal from "@/assets/product2.png";
// import tEconomic from "@/assets/product3.png";

// // Define types
// interface Review {
//   name: string;
//   rating: number;
//   comment: string;
//   date: string;
// }

// interface CatalogOption {
//   size: string;
//   price: string;
//   moq: string;
//   sku: string;
// }

// interface ProductDetails {
//   fullDescription: string;
//   specifications: Array<{ label: string; value: string }>;
//   brewing: string[];
//   thumbnails: string[];
//   reviews: Review[];
//   catalog: CatalogOption[];
// }

// interface Product {
//   img: string;
//   title: string;
//   desc: string;
//   badge: string;
//   icon: any;
//   features: string[];
//   details: ProductDetails;
//   category: string;
// }

// const products: Product[] = [
//   { 
//     img: tPremium, 
//     title: "Royal Assam Tea", 
//     desc: "Finest handpicked leaves from premium estates, offering exceptional aroma and rich golden liquor.",
//     badge: "Premium",
//     icon: Gem,
//     category: "Premium Tea",
//     features: ["Single Estate", "Handpicked", "Golden Liquor"],
//     details: {
//       fullDescription: "Our Premium Assam Tea is sourced from the most respected Tea estates in Upper Assam, known for producing Teas with exceptional body and depth. Each leaf is carefully handpicked during the peak growing season to ensure the highest quality standards.",
//       specifications: [
//         { label: "Origin", value: "Upper Assam, India" },
//         { label: "Elevation", value: "100-200 meters" },
//         { label: "Harvest", value: "First Flush (March-April)" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Morning" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Enjoy with or without milk"
//       ],
//       thumbnails: [tPremium, tPremium, tPremium],
//       catalog: [
//         { size: "500g", price: "₹450", moq: "10 packs", sku: "RAT-500" },
//         { size: "1kg", price: "₹850", moq: "5 packs", sku: "RAT-001" },
//         { size: "5kg", price: "₹3,900", moq: "2 packs", sku: "RAT-005" },
//         { size: "10kg", price: "₹7,200", moq: "1 pack", sku: "RAT-010" },
//         { size: "25kg", price: "₹17,500", moq: "1 pack", sku: "RAT-025" }
//       ],
//       reviews: [
//         { name: "Rajesh Sharma", rating: 5, comment: "Excellent quality Tea! The aroma is amazing.", date: "2024-02-15" },
//         { name: "Priya Patel", rating: 5, comment: "Truly premium taste. Worth every penny.", date: "2024-02-10" },
//         { name: "Amit Kumar", rating: 4, comment: "Great flavor and consistent quality.", date: "2024-02-05" }
//       ]
//     }
//   },
//   { 
//     img: tRoyal, 
//     title: "Premium Assam Tea", 
//     desc: "The pinnacle of Assam Tea — rare, exquisite, and crafted for royalty. A truly majestic experience.",
//     badge: "Royal Collection",
//     icon: Crown,
//     category: "Premium Tea",
//     features: ["Rare Leaves", "Exquisite Flavor", "Royal Heritage"],
//     details: {
//       fullDescription: "Royal Assam Tea represents the zenith of Tea craftsmanship. Sourced from century-old heritage gardens, these rare leaves undergo traditional withering and rolling processes that have been preserved for generations. Each sip reveals complex notes of malt, honey, and a distinctive royal character.",
//       specifications: [
//         { label: "Origin", value: "Heritage Estates, Assam" },
//         { label: "Elevation", value: "150-250 meters" },
//         { label: "Harvest", value: "Special Reserve (Limited)" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Special Occasions" }
//       ],
//       brewing: [
//         "Use 1.5 Teaspoons per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 4-6 minutes",
//         "Best enjoyed without milk to appreciate complexity"
//       ],
//       thumbnails: [tRoyal, tRoyal, tRoyal],
//       catalog: [
//         { size: "500g", price: "₹550", moq: "10 packs", sku: "PAT-500" },
//         { size: "1kg", price: "₹1,050", moq: "5 packs", sku: "PAT-001" },
//         { size: "5kg", price: "₹4,800", moq: "2 packs", sku: "PAT-005" },
//         { size: "10kg", price: "₹8,900", moq: "1 pack", sku: "PAT-010" },
//         { size: "25kg", price: "₹21,500", moq: "1 pack", sku: "PAT-025" }
//       ],
//       reviews: [
//         { name: "Vikram Singh", rating: 5, comment: "Absolutely royal experience! The best Tea I've ever had.", date: "2024-02-18" },
//         { name: "Neha Gupta", rating: 5, comment: "Exquisite flavor profile. A true masterpiece.", date: "2024-02-12" },
//         { name: "Anjali Mehta", rating: 5, comment: "Worth the premium price. Exceptional quality.", date: "2024-02-08" }
//       ]
//     }
//   },
//   { 
//     img: tEconomic, 
//     title: "Economic Assam Tea", 
//     desc: "Quality Assam Tea at an accessible price point. Perfect for daily consumption without compromise.",
//     badge: "Best Value",
//     icon: BadgeDollarSign,
//     category: "Daily Use Tea",
//     features: ["Affordable", "Consistent Quality", "Daily Brew"],
//     details: {
//       fullDescription: "Economic Assam Tea delivers the authentic Assam experience at an everyday price point. Sourced from reliable gardens with consistent quality standards, this Tea offers the bold, robust character Assam is famous for, perfect for your daily cup or commercial use.",
//       specifications: [
//         { label: "Origin", value: "Assam Valley" },
//         { label: "Elevation", value: "50-150 meters" },
//         { label: "Harvest", value: "Standard Season" },
//         { label: "Caffeine", value: "Medium-High" },
//         { label: "Best Time", value: "Any Time" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-4 minutes",
//         "Great with milk and sugar"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹250", moq: "10 packs", sku: "EAT-500" },
//         { size: "1kg", price: "₹450", moq: "5 packs", sku: "EAT-001" },
//         { size: "5kg", price: "₹2,100", moq: "2 packs", sku: "EAT-005" },
//         { size: "10kg", price: "₹3,900", moq: "1 pack", sku: "EAT-010" },
//         { size: "25kg", price: "₹9,500", moq: "1 pack", sku: "EAT-025" }
//       ],
//       reviews: [
//         { name: "Suresh Yadav", rating: 4, comment: "Great value for money. Perfect for daily chai.", date: "2024-02-16" },
//         { name: "Meena Devi", rating: 5, comment: "Very satisfied with the quality and price.", date: "2024-02-11" },
//         { name: "Rakesh Jain", rating: 4, comment: "Consistent taste. Good for everyday use.", date: "2024-02-06" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Classic Assam Tea",
//     desc: "Traditional Assam Tea with bold, malty flavor and rich amber color. Perfect for the true Tea lover.",
//     badge: "Classic",
//     icon: Coffee,
//     category: "Assam Tea",
//     features: ["Bold Flavor", "Rich Aroma", "Traditional"],
//     details: {
//       fullDescription: "Classic Assam Tea embodies the true spirit of Assam's Tea heritage. Known for its strong, malty character and deep amber color, this Tea is the perfect choice for those who appreciate the bold flavors that Assam is famous for worldwide.",
//       specifications: [
//         { label: "Origin", value: "Assam, India" },
//         { label: "Elevation", value: "80-180 meters" },
//         { label: "Harvest", value: "Second Flush" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Morning & Afternoon" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Perfect with milk and sugar"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹300", moq: "10 packs", sku: "CAT-500" },
//         { size: "1kg", price: "₹550", moq: "5 packs", sku: "CAT-001" },
//         { size: "5kg", price: "₹2,500", moq: "2 packs", sku: "CAT-005" },
//         { size: "10kg", price: "₹4,600", moq: "1 pack", sku: "CAT-010" },
//         { size: "25kg", price: "₹11,000", moq: "1 pack", sku: "CAT-025" }
//       ],
//       reviews: [
//         { name: "Arun Das", rating: 5, comment: "This is what real Assam Tea tastes like!", date: "2024-02-20" },
//         { name: "Smita Reddy", rating: 4, comment: "Very authentic flavor. Highly recommended.", date: "2024-02-14" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Premium CTC Tea",
//     desc: "Finest CTC (Crush, Tear, Curl) Tea with strong body and deep color. Ideal for masala chai.",
//     badge: "CTC Premium",
//     icon: Flame,
//     category: "CTC Tea",
//     features: ["Strong Body", "Deep Color", "Perfect for Chai"],
//     details: {
//       fullDescription: "Our Premium CTC Tea is crafted using the traditional Crush, Tear, Curl method that produces small, dense granules perfect for a strong, invigorating cup. This Tea is specially processed to release maximum flavor and color, making it ideal for masala chai.",
//       specifications: [
//         { label: "Origin", value: "Assam, India" },
//         { label: "Process", value: "CTC (Crush, Tear, Curl)" },
//         { label: "Harvest", value: "Multiple Seasons" },
//         { label: "Caffeine", value: "High" },
//         { label: "Best Time", value: "Anytime" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 2-3 minutes",
//         "Excellent with spices and milk"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹280", moq: "10 packs", sku: "CTC-500" },
//         { size: "1kg", price: "₹520", moq: "5 packs", sku: "CTC-001" },
//         { size: "5kg", price: "₹2,400", moq: "2 packs", sku: "CTC-005" },
//         { size: "10kg", price: "₹4,400", moq: "1 pack", sku: "CTC-010" },
//         { size: "25kg", price: "₹10,500", moq: "1 pack", sku: "CTC-025" }
//       ],
//       reviews: [
//         { name: "Rahul Kapoor", rating: 5, comment: "Best CTC Tea for masala chai!", date: "2024-02-19" },
//         { name: "Deepika Singh", rating: 4, comment: "Very strong and flavorful.", date: "2024-02-12" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Premium Green Tea",
//     desc: "Light, refreshing, and packed with antioxidants. Sourced from the finest Tea gardens.",
//     badge: "Healthy Choice",
//     icon: LeafIcon,
//     category: "Green Tea",
//     features: ["Antioxidant Rich", "Light & Refreshing", "Health Benefits"],
//     details: {
//       fullDescription: "Our Premium Green Tea is meticulously processed to preserve the natural antioxidants and delicate flavor profiles. Gently sTeamed and rolled, this Tea offers a smooth, refreshing taste with subtle vegetal notes that Tea connoisseurs appreciate.",
//       specifications: [
//         { label: "Origin", value: "Assam Highlands" },
//         { label: "Process", value: "STeamed & Rolled" },
//         { label: "Harvest", value: "Spring Season" },
//         { label: "Caffeine", value: "Low-Moderate" },
//         { label: "Best Time", value: "Morning & Evening" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 75-80°C",
//         "Steep for 2-3 minutes",
//         "Do not oversteep to avoid bitterness"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹350", moq: "10 packs", sku: "GRT-500" },
//         { size: "1kg", price: "₹650", moq: "5 packs", sku: "GRT-001" },
//         { size: "5kg", price: "₹2,900", moq: "2 packs", sku: "GRT-005" },
//         { size: "10kg", price: "₹5,400", moq: "1 pack", sku: "GRT-010" },
//         { size: "25kg", price: "₹12,800", moq: "1 pack", sku: "GRT-025" }
//       ],
//       reviews: [
//         { name: "Dr. Meera Gupta", rating: 5, comment: "Excellent quality green Tea with great health benefits.", date: "2024-02-17" },
//         { name: "Rohit Sharma", rating: 4, comment: "Very refreshing and light. Love it!", date: "2024-02-10" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Authentic Masala Tea",
//     desc: "Premium CTC blended with traditional Indian spices for the perfect cup of masala chai.",
//     badge: "Spiced Blend",
//     icon: Coffee,
//     category: "Masala Tea",
//     features: ["Spiced Blend", "Traditional Recipe", "Perfect Chai"],
//     details: {
//       fullDescription: "Our Authentic Masala Tea is a carefully crafted blend of premium CTC Tea and traditional Indian spices including cardamom, cinnamon, ginger, and cloves. This perfect combination creates a warming, aromatic cup that captures the essence of Indian chai.",
//       specifications: [
//         { label: "Base", value: "Premium CTC Tea" },
//         { label: "Spices", value: "Cardamom, Cinnamon, Ginger, Cloves" },
//         { label: "Blend", value: "Traditional Recipe" },
//         { label: "Caffeine", value: "Medium-High" },
//         { label: "Best Time", value: "Anytime" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-4 minutes",
//         "Add milk and sugar to taste"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "500g", price: "₹320", moq: "10 packs", sku: "MST-500" },
//         { size: "1kg", price: "₹590", moq: "5 packs", sku: "MST-001" },
//         { size: "5kg", price: "₹2,700", moq: "2 packs", sku: "MST-005" },
//         { size: "10kg", price: "₹4,900", moq: "1 pack", sku: "MST-010" },
//         { size: "25kg", price: "₹11,500", moq: "1 pack", sku: "MST-025" }
//       ],
//       reviews: [
//         { name: "Ananya Patel", rating: 5, comment: "The perfect masala chai blend!", date: "2024-02-18" },
//         { name: "Vikram Reddy", rating: 5, comment: "Authentic taste. Reminds me of street chai.", date: "2024-02-13" }
//       ]
//     }
//   },
//   {
//     img: tEconomic,
//     title: "Bulk Institutional Pack",
//     desc: "High-quality Tea in bulk packaging for institutions, offices, and industrial use.",
//     badge: "Bulk Supply",
//     icon: Building2,
//     category: "Institutional Packs",
//     features: ["Bulk Packaging", "Cost Effective", "Consistent Quality"],
//     details: {
//       fullDescription: "Our Institutional Packs offer premium quality Tea in bulk quantities at competitive prices. Ideal for offices, hotels, canteens, and industrial use, these packs ensure consistent quality and exceptional value for large-scale consumption.",
//       specifications: [
//         { label: "Packaging", value: "Bulk Bags" },
//         { label: "Grade", value: "Commercial Grade" },
//         { label: "Origin", value: "Assam, India" },
//         { label: "Shelf Life", value: "24 Months" },
//         { label: "Best For", value: "Institutional Consumption" }
//       ],
//       brewing: [
//         "Use 1 Teaspoon per cup",
//         "Water temperature: 95-100°C",
//         "Steep for 3-5 minutes",
//         "Adjust quantity based on required strength"
//       ],
//       thumbnails: [tEconomic, tEconomic, tEconomic],
//       catalog: [
//         { size: "5kg", price: "₹2,100", moq: "2 packs", sku: "INS-005" },
//         { size: "10kg", price: "₹3,900", moq: "1 pack", sku: "INS-010" },
//         { size: "25kg", price: "₹9,200", moq: "1 pack", sku: "INS-025" },
//         { size: "50kg", price: "₹17,500", moq: "1 pack", sku: "INS-050" }
//       ],
//       reviews: [
//         { name: "Hotel Grand", rating: 5, comment: "Excellent quality for our daily hotel service.", date: "2024-02-16" },
//         { name: "Office Supplies", rating: 4, comment: "Great bulk pricing and consistent quality.", date: "2024-02-09" }
//       ]
//     }
//   },
//   // {
//   //   img: tEconomic,
//   //   title: "HORECA Premium Pack",
//   //   desc: "Superior quality Tea specially packaged for hotels, restaurants, and catering services.",
//   //   badge: "HORECA Grade",
//   //   icon: Utensils,
//   //   category: "Horeca Packs",
//   //   features: ["Premium Grade", "Hospitality Standard", "Consistent Flavor"],
//   //   details: {
//   //     fullDescription: "Our HORECA Premium Pack is specially designed for the hospitality industry. These carefully selected Tea leaves offer superior quality, consistent flavor, and elegant presentation perfect for hotels, restaurants, and catering services that demand the best for their guests.",
//   //     specifications: [
//   //       { label: "Packaging", value: "Premium Bags" },
//   //       { label: "Grade", value: "Hospitality Grade" },
//   //       { label: "Origin", value: "Premium Estates, Assam" },
//   //       { label: "Shelf Life", value: "24 Months" },
//   //       { label: "Best For", value: "Hotels, Restaurants, Catering" }
//   //     ],
//   //     brewing: [
//   //       "Use 1 Teaspoon per cup",
//   //       "Water temperature: 95-100°C",
//   //       "Steep for 3-5 minutes",
//   //       "Train staff for consistent brewing"
//   //     ],
//   //     thumbnails: [tEconomic, tEconomic, tEconomic],
//   //     catalog: [
//   //       { size: "1kg", price: "₹650", moq: "5 packs", sku: "HOR-001" },
//   //       { size: "5kg", price: "₹2,900", moq: "2 packs", sku: "HOR-005" },
//   //       { size: "10kg", price: "₹5,400", moq: "1 pack", sku: "HOR-010" },
//   //       { size: "25kg", price: "₹12,500", moq: "1 pack", sku: "HOR-025" }
//   //     ],
//   //     reviews: [
//   //       { name: "Grand Heritage Hotel", rating: 5, comment: "Our guests love the Tea quality!", date: "2024-02-15" },
//   //       { name: "Cafe Royal", rating: 5, comment: "Excellent for our premium Tea service.", date: "2024-02-08" }
//   //     ]
//   //   }
//   // }
// ];

// export function Products() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0);
//   const [activeCategory, setActiveCategory] = useState<string>("All");

//   const categories = ["All", "Premium Tea", "Daily Use Tea", "Assam Tea", "CTC Tea", "Green Tea", "Masala Tea", "Institutional Packs", "Horeca Packs"];

//   const filteredProducts = activeCategory === "All" 
//     ? products 
//     : products.filter(p => p.category === activeCategory);

//   const nextImage = () => {
//     if (selectedProduct) {
//       setSelectedThumbnail((prev) => (prev + 1) % selectedProduct.details.thumbnails.length);
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setSelectedThumbnail((prev) => (prev - 1 + selectedProduct.details.thumbnails.length) % selectedProduct.details.thumbnails.length);
//     }
//   };

//   const renderStars = (rating: number) => {
//     return Array(5).fill(0).map((_, i) => (
//       <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-gold fill-gold' : 'text-gold/30'}`} />
//     ));
//   };

//   return (
//     <>
//       <section id="products" className="relative bg-gradient-to-br from-forest-deep via-forest-deep to-forest py-16 md:py-20 overflow-hidden">
//         {/* Decorative background elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl"></div>
//           <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/10 blur-3xl"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cream/5 blur-3xl"></div>
//         </div>

//         <div className="relative mx-auto max-w-7xl px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
//           >
//             <div className="flex items-center justify-center gap-3 mb-3">
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//               <span className="text-[11px] uppercase tracking-[0.4em] text-gold font-semibold">Collection</span>
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//             </div>
            
//             <motion.div
//               initial={{ scale: 0.95 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-3">
//                 Choose Your{' '}
//                 <span className="relative inline-block">
//                   <span className="italic bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                     Perfect Blend
//                   </span>
//                   <Sparkles className="absolute -top-5 -right-6 w-4 h-4 text-gold opacity-60" />
//                 </span>
//               </h2>
//             </motion.div>
            
//             <p className="mt-2 text-cream/70 text-sm md:text-base max-w-xl mx-auto">
//               From everyday essentials to royal indulgence — find your perfect cup of Assam Tea.
//             </p>
//           </motion.div>

//           {/* Category Filters */}
//           <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-gold text-forest-deep shadow-lg shadow-gold/30"
//                     : "bg-cream/10 text-cream/70 hover:bg-cream/20 hover:text-cream border border-gold/20"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* 4 Cards in a row */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//             {filteredProducts.map((p, i) => {
//               const Icon = p.icon;
//               return (
//                 <motion.article
//                   key={p.title}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
//                 >
//                   <div className="relative overflow-hidden aspect-[4/5]">
//                     <img
//                       src={p.img}
//                       alt={p.title}
//                       className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       loading="lazy"
//                     />
                    
//                     <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 via-30% to-transparent" />
                    
//                     <div className="absolute top-3 left-3 z-10">
//                       <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 backdrop-blur-sm text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full ${
//                         p.title === "Royal Assam Tea" 
//                           ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
//                           : p.title === "Premium Assam Tea"
//                           ? "bg-gold/90 text-forest-deep"
//                           : "bg-cream/90 text-forest-deep"
//                       }`}>
//                         <Icon className="w-2.5 h-2.5" />
//                         {p.badge}
//                       </span>
//                     </div>
                    
//                     <div className="absolute top-3 right-3 z-10">
//                       <span className="inline-flex items-center px-2 py-0.5 bg-black/50 backdrop-blur-sm text-[9px] text-cream/80 rounded-full border border-gold/20">
//                         {p.category}
//                       </span>
//                     </div>
                    
//                     <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                       <div className="flex items-center gap-1.5 mb-1.5">
//                         <Icon className="w-4 h-4 text-gold" />
//                         <h3 className="font-display text-lg md:text-xl text-cream group-hover:text-gold transition-colors duration-300">
//                           {p.title}
//                         </h3>
//                       </div>
//                       <p className="text-cream/70 text-xs md:text-sm mb-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
//                         {p.desc}
//                       </p>
                      
//                       <div className="flex flex-wrap gap-1.5 mb-3">
//                         {p.features.slice(0, 2).map((feature, idx) => (
//                           <span key={idx} className="text-[8px] md:text-[9px] text-cream/50 border border-gold/20 rounded-full px-1.5 py-0.5">
//                             {feature}
//                           </span>
//                         ))}
//                         {p.features.length > 2 && (
//                           <span className="text-[8px] md:text-[9px] text-cream/50 border border-gold/20 rounded-full px-1.5 py-0.5">
//                             +{p.features.length - 2}
//                           </span>
//                         )}
//                       </div>
                      
//                       <button
//                         onClick={() => {
//                           setSelectedProduct(p);
//                           setSelectedThumbnail(0);
//                         }}
//                         className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-0.5 group-hover:border-gold transition-all duration-300 group-hover:gap-2 hover:cursor-pointer"
//                       >
//                         <span>Discover</span>
//                         <ArrowUpRight className="h-2.5 w-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -skew-x-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//                   </div>

//                   {p.title === "Royal Assam Tea" && (
//                     <div className="absolute -top-2 -right-2 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//                       <Crown className="w-full h-full text-gold" />
//                     </div>
//                   )}
//                 </motion.article>
//               );
//             })}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-cream/60 text-lg">No products found in this category.</p>
//             </div>
//           )}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-center mt-8 md:mt-10"
//           >
//             <a
//               href="#contact"
//               className="group inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-gold/30 text-gold font-semibold rounded-full hover:bg-gold hover:text-forest-deep transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 text-xs md:text-sm"
//             >
//               Get Wholesale Pricing
//               <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Product Details Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
//             onClick={() => setSelectedProduct(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-forest-deep to-forest rounded-2xl shadow-2xl border border-gold/20"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-gold/20 transition-colors duration-300 text-cream hover:text-gold"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="p-0">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
//                   {/* Left side - Images and Reviews */}
//                   <div className="border-r border-gold/20">
//                     <div className="p-6 h-full flex flex-col">
//                       <div className="flex-shrink-0">
//                         <div className="relative overflow-hidden rounded-xl mb-4 aspect-square group/image">
//                           <img
//                             src={selectedProduct.details.thumbnails[selectedThumbnail]}
//                             alt={selectedProduct.title}
//                             className="w-full h-full object-cover"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
                          
//                           {selectedProduct.details.thumbnails.length > 1 && (
//                             <>
//                               <button
//                                 onClick={prevImage}
//                                 className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
//                               >
//                                 <ChevronLeft className="w-6 h-6" />
//                               </button>
//                               <button
//                                 onClick={nextImage}
//                                 className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
//                               >
//                                 <ChevronRight className="w-6 h-6" />
//                               </button>
//                             </>
//                           )}
//                         </div>
                        
//                         <div className="flex gap-3 justify-center mb-6">
//                           {selectedProduct.details.thumbnails.map((thumb, idx: number) => (
//                             <button
//                               key={idx}
//                               onClick={() => setSelectedThumbnail(idx)}
//                               className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
//                                 selectedThumbnail === idx 
//                                   ? "border-gold shadow-lg shadow-gold/20" 
//                                   : "border-gold/30 hover:border-gold/60"
//                               }`}
//                             >
//                               <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Reviews Section */}
//                       <div className="flex-1 flex flex-col min-h-0">
//                         <div className="flex items-center gap-2 mb-4 flex-shrink-0">
//                           <Star className="w-5 h-5 text-gold fill-gold" />
//                           <h4 className="text-gold font-semibold text-base uppercase tracking-wider">Customer Reviews</h4>
//                         </div>
//                         <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
//                           {selectedProduct.details.reviews.map((review: Review, idx: number) => (
//                             <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: idx * 0.1 }}
//                               className="bg-cream/5 backdrop-blur-sm rounded-lg p-3 border border-gold/20 hover:border-gold/40 transition-all duration-300"
//                             >
//                               <div className="flex items-center justify-between mb-2">
//                                 <div className="flex items-center gap-2">
//                                   <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
//                                     <User className="w-4 h-4 text-gold" />
//                                   </div>
//                                   <div>
//                                     <p className="text-cream text-sm font-semibold">{review.name}</p>
//                                     <p className="text-cream/50 text-[10px]">{review.date}</p>
//                                   </div>
//                                 </div>
//                                 <div className="flex gap-0.5 flex-shrink-0">
//                                   {renderStars(review.rating)}
//                                 </div>
//                               </div>
//                               <p className="text-cream/70 text-sm leading-relaxed pl-10">
//                                 "{review.comment}"
//                               </p>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right side - Details */}
//                   <div className="">
//                     <div className="p-6 h-full flex flex-col">
//                       <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-full w-fit flex-shrink-0 ${
//                         selectedProduct.title === "Royal Assam Tea" 
//                           ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
//                           : selectedProduct.title === "Premium Assam Tea"
//                           ? "bg-gold/90 text-forest-deep"
//                           : "bg-cream/90 text-forest-deep"
//                       }`}>
//                         {selectedProduct.badge}
//                       </span>
                      
//                       <h3 className="font-display text-3xl md:text-4xl text-cream mt-3 mb-4 flex-shrink-0">
//                         {selectedProduct.title}
//                       </h3>
                      
//                       <div className="overflow-y-auto pr-2 flex-1 custom-scrollbar-right">
//                         <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-6">
//                           {selectedProduct.details.fullDescription}
//                         </p>

//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Leaf className="w-4 h-4" />
//                             Specifications
//                           </h4>
//                           <div className="grid grid-cols-2 gap-3">
//                             {selectedProduct.details.specifications.map((spec: { label: string; value: string }, idx: number) => (
//                               <div key={idx} className="border-b border-gold/20 pb-2">
//                                 <p className="text-cream/50 text-xs uppercase tracking-wider">{spec.label}</p>
//                                 <p className="text-cream text-sm md:text-base font-medium">{spec.value}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Product Catalog / Pricing Table */}
//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Package className="w-4 h-4" />
//                             Product Catalog & Pricing
//                           </h4>
//                           <div className="overflow-x-auto">
//                             <table className="w-full text-sm">
//                               <thead>
//                                 <tr className="border-b border-gold/20">
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">Pack Size</th>
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">Price</th>
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">MOQ</th>
//                                   <th className="text-left py-2 px-3 text-cream/60 text-xs uppercase tracking-wider font-medium">SKU</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 {selectedProduct.details.catalog.map((item: CatalogOption, idx: number) => (
//                                   <motion.tr
//                                     key={idx}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ delay: idx * 0.05 }}
//                                     className="border-b border-gold/10 hover:bg-gold/5 transition-colors duration-200"
//                                   >
//                                     <td className="py-2 px-3 text-cream font-medium">
//                                       <div className="flex items-center gap-2">
//                                         <Weight className="w-3 h-3 text-gold/60" />
//                                         {item.size}
//                                       </div>
//                                     </td>
//                                     <td className="py-2 px-3 text-gold font-bold">{item.price}</td>
//                                     <td className="py-2 px-3 text-cream/70 text-xs">{item.moq}</td>
//                                     <td className="py-2 px-3 text-cream/40 text-xs font-mono">{item.sku}</td>
//                                   </motion.tr>
//                                 ))}
//                               </tbody>
//                             </table>
//                           </div>
//                           <p className="text-cream/40 text-[10px] mt-2 italic">* MOQ: Minimum Order Quantity | Bulk discounts available for larger quantities</p>
//                         </div>

//                         <div className="mb-6">
//                           <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                             <Clock className="w-4 h-4" />
//                             Brewing Instructions
//                           </h4>
//                           <ul className="space-y-2">
//                             {selectedProduct.details.brewing.map((step: string, idx: number) => (
//                               <li key={idx} className="flex items-start gap-2 text-cream/80 text-sm md:text-base">
//                                 <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
//                                 <span>{step}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="flex flex-wrap gap-2 mb-6">
//                           {selectedProduct.features.map((feature: string, idx: number) => (
//                             <span key={idx} className="text-sm text-cream/70 border border-gold/30 rounded-full px-3 py-1 bg-forest-deep/50">
//                               {feature}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="mt-6 pt-4 border-t border-gold/20 flex-shrink-0">
//                         <div className="grid grid-cols-3 gap-3">
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <Truck className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Free Shipping</p>
//                             <p className="text-cream/40 text-[8px]">On orders 50kg+</p>
//                           </div>
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <Shield className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Quality Guarantee</p>
//                             <p className="text-cream/40 text-[8px]">100% authentic</p>
//                           </div>
//                           <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
//                             <div className="flex justify-center mb-2">
//                               <ClockIcon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
//                             </div>
//                             <p className="text-cream/60 text-[10px] uppercase tracking-wider">Fast Delivery</p>
//                             <p className="text-cream/40 text-[8px]">Pan India shipping</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex gap-3 mt-4 flex-shrink-0">
//                         <a
//                           href="#contact"
//                           onClick={() => setSelectedProduct(null)}
//                           className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 text-sm md:text-base"
//                         >
//                           Enquire Now
//                           <TrendingUp className="w-4 h-4" />
//                         </a>
//                         <button
//                           onClick={() => setSelectedProduct(null)}
//                           className="px-6 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 text-sm md:text-base"
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(212, 175, 55, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(212, 175, 55, 0.6);
//         }
        
//         .custom-scrollbar-right::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-thumb {
//           background: rgba(212, 175, 55, 0.4);
//           border-radius: 10px;
//         }
//         .custom-scrollbar-right::-webkit-scrollbar-thumb:hover {
//           background: rgba(212, 175, 55, 0.6);
//         }
//       `}</style>
//     </>
//   );
// }




import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Crown, Gem, BadgeDollarSign, X, Check, Leaf, TrendingUp, Clock, ChevronLeft, ChevronRight, Star, User, Truck, Shield, Clock as ClockIcon, Coffee, Flame, Leaf as LeafIcon, Building2, Package, Weight } from "lucide-react";
import { useState } from "react";
import tPremium from "@/assets/product1.png";
import tRoyal from "@/assets/product2.png";
import tEconomic from "@/assets/product3.png";
import { SEO } from "./SEO";

// Define types
interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface CatalogOption {
  size: string;
  price: string;
  moq: string;
  sku: string;
}

interface ProductDetails {
  fullDescription: string;
  specifications: Array<{ label: string; value: string }>;
  brewing: string[];
  thumbnails: string[];
  reviews: Review[];
  catalog: CatalogOption[];
}

interface Product {
  img: string;
  title: string;
  desc: string;
  badge: string;
  icon: any;
  features: string[];
  details: ProductDetails;
  category: string;
}

const products: Product[] = [
  { 
    img: tPremium, 
    title: "Royal Assam Tea", 
    desc: "Finest handpicked leaves from premium estates, offering exceptional aroma and rich golden liquor.",
    badge: "Premium",
    icon: Gem,
    category: "Premium Tea",
    features: ["Single Estate", "Handpicked", "Golden Liquor"],
    details: {
      fullDescription: "Our Premium Assam Tea is sourced from the most respected Tea estates in Upper Assam, known for producing Teas with exceptional body and depth. Each leaf is carefully handpicked during the peak growing season to ensure the highest quality standards.",
      specifications: [
        { label: "Origin", value: "Upper Assam, India" },
        { label: "Elevation", value: "100-200 meters" },
        { label: "Harvest", value: "First Flush (March-April)" },
        { label: "Caffeine", value: "High" },
        { label: "Best Time", value: "Morning" }
      ],
      brewing: [
        "Use 1 Teaspoon per cup",
        "Water temperature: 95-100°C",
        "Steep for 3-5 minutes",
        "Enjoy with or without milk"
      ],
      thumbnails: [tPremium, tPremium, tPremium],
      catalog: [
        { size: "500g", price: "₹450", moq: "10 packs", sku: "RAT-500" },
        { size: "1kg", price: "₹850", moq: "5 packs", sku: "RAT-001" },
        { size: "5kg", price: "₹3,900", moq: "2 packs", sku: "RAT-005" },
        { size: "10kg", price: "₹7,200", moq: "1 pack", sku: "RAT-010" },
        { size: "25kg", price: "₹17,500", moq: "1 pack", sku: "RAT-025" }
      ],
      reviews: [
        { name: "Rajesh Sharma", rating: 5, comment: "Excellent quality Tea! The aroma is amazing.", date: "2024-02-15" },
        { name: "Priya Patel", rating: 5, comment: "Truly premium taste. Worth every penny.", date: "2024-02-10" },
        { name: "Amit Kumar", rating: 4, comment: "Great flavor and consistent quality.", date: "2024-02-05" }
      ]
    }
  },
  { 
    img: tRoyal, 
    title: "Premium Assam Tea", 
    desc: "The pinnacle of Assam Tea — rare, exquisite, and crafted for royalty. A truly majestic experience.",
    badge: "Royal Collection",
    icon: Crown,
    category: "Premium Tea",
    features: ["Rare Leaves", "Exquisite Flavor", "Royal Heritage"],
    details: {
      fullDescription: "Royal Assam Tea represents the zenith of Tea craftsmanship. Sourced from century-old heritage gardens, these rare leaves undergo traditional withering and rolling processes that have been preserved for generations. Each sip reveals complex notes of malt, honey, and a distinctive royal character.",
      specifications: [
        { label: "Origin", value: "Heritage Estates, Assam" },
        { label: "Elevation", value: "150-250 meters" },
        { label: "Harvest", value: "Special Reserve (Limited)" },
        { label: "Caffeine", value: "High" },
        { label: "Best Time", value: "Special Occasions" }
      ],
      brewing: [
        "Use 1.5 Teaspoons per cup",
        "Water temperature: 95-100°C",
        "Steep for 4-6 minutes",
        "Best enjoyed without milk to appreciate complexity"
      ],
      thumbnails: [tRoyal, tRoyal, tRoyal],
      catalog: [
        { size: "500g", price: "₹550", moq: "10 packs", sku: "PAT-500" },
        { size: "1kg", price: "₹1,050", moq: "5 packs", sku: "PAT-001" },
        { size: "5kg", price: "₹4,800", moq: "2 packs", sku: "PAT-005" },
        { size: "10kg", price: "₹8,900", moq: "1 pack", sku: "PAT-010" },
        { size: "25kg", price: "₹21,500", moq: "1 pack", sku: "PAT-025" }
      ],
      reviews: [
        { name: "Vikram Singh", rating: 5, comment: "Absolutely royal experience! The best Tea I've ever had.", date: "2024-02-18" },
        { name: "Neha Gupta", rating: 5, comment: "Exquisite flavor profile. A true masterpiece.", date: "2024-02-12" },
        { name: "Anjali Mehta", rating: 5, comment: "Worth the premium price. Exceptional quality.", date: "2024-02-08" }
      ]
    }
  },
  { 
    img: tEconomic, 
    title: "Economic Assam Tea", 
    desc: "Quality Assam Tea at an accessible price point. Perfect for daily consumption without compromise.",
    badge: "Best Value",
    icon: BadgeDollarSign,
    category: "Daily Use Tea",
    features: ["Affordable", "Consistent Quality", "Daily Brew"],
    details: {
      fullDescription: "Economic Assam Tea delivers the authentic Assam experience at an everyday price point. Sourced from reliable gardens with consistent quality standards, this Tea offers the bold, robust character Assam is famous for, perfect for your daily cup or commercial use.",
      specifications: [
        { label: "Origin", value: "Assam Valley" },
        { label: "Elevation", value: "50-150 meters" },
        { label: "Harvest", value: "Standard Season" },
        { label: "Caffeine", value: "Medium-High" },
        { label: "Best Time", value: "Any Time" }
      ],
      brewing: [
        "Use 1 Teaspoon per cup",
        "Water temperature: 95-100°C",
        "Steep for 3-4 minutes",
        "Great with milk and sugar"
      ],
      thumbnails: [tEconomic, tEconomic, tEconomic],
      catalog: [
        { size: "500g", price: "₹250", moq: "10 packs", sku: "EAT-500" },
        { size: "1kg", price: "₹450", moq: "5 packs", sku: "EAT-001" },
        { size: "5kg", price: "₹2,100", moq: "2 packs", sku: "EAT-005" },
        { size: "10kg", price: "₹3,900", moq: "1 pack", sku: "EAT-010" },
        { size: "25kg", price: "₹9,500", moq: "1 pack", sku: "EAT-025" }
      ],
      reviews: [
        { name: "Suresh Yadav", rating: 4, comment: "Great value for money. Perfect for daily chai.", date: "2024-02-16" },
        { name: "Meena Devi", rating: 5, comment: "Very satisfied with the quality and price.", date: "2024-02-11" },
        { name: "Rakesh Jain", rating: 4, comment: "Consistent taste. Good for everyday use.", date: "2024-02-06" }
      ]
    }
  },
  {
    img: tEconomic,
    title: "Classic Assam Tea",
    desc: "Traditional Assam Tea with bold, malty flavor and rich amber color. Perfect for the true Tea lover.",
    badge: "Classic",
    icon: Coffee,
    category: "Assam Tea",
    features: ["Bold Flavor", "Rich Aroma", "Traditional"],
    details: {
      fullDescription: "Classic Assam Tea embodies the true spirit of Assam's Tea heritage. Known for its strong, malty character and deep amber color, this Tea is the perfect choice for those who appreciate the bold flavors that Assam is famous for worldwide.",
      specifications: [
        { label: "Origin", value: "Assam, India" },
        { label: "Elevation", value: "80-180 meters" },
        { label: "Harvest", value: "Second Flush" },
        { label: "Caffeine", value: "High" },
        { label: "Best Time", value: "Morning & Afternoon" }
      ],
      brewing: [
        "Use 1 Teaspoon per cup",
        "Water temperature: 95-100°C",
        "Steep for 3-5 minutes",
        "Perfect with milk and sugar"
      ],
      thumbnails: [tEconomic, tEconomic, tEconomic],
      catalog: [
        { size: "500g", price: "₹300", moq: "10 packs", sku: "CAT-500" },
        { size: "1kg", price: "₹550", moq: "5 packs", sku: "CAT-001" },
        { size: "5kg", price: "₹2,500", moq: "2 packs", sku: "CAT-005" },
        { size: "10kg", price: "₹4,600", moq: "1 pack", sku: "CAT-010" },
        { size: "25kg", price: "₹11,000", moq: "1 pack", sku: "CAT-025" }
      ],
      reviews: [
        { name: "Arun Das", rating: 5, comment: "This is what real Assam Tea tastes like!", date: "2024-02-20" },
        { name: "Smita Reddy", rating: 4, comment: "Very authentic flavor. Highly recommended.", date: "2024-02-14" }
      ]
    }
  },
  {
    img: tEconomic,
    title: "Premium CTC Tea",
    desc: "Finest CTC (Crush, Tear, Curl) Tea with strong body and deep color. Ideal for masala chai.",
    badge: "CTC Premium",
    icon: Flame,
    category: "CTC Tea",
    features: ["Strong Body", "Deep Color", "Perfect for Chai"],
    details: {
      fullDescription: "Our Premium CTC Tea is crafted using the traditional Crush, Tear, Curl method that produces small, dense granules perfect for a strong, invigorating cup. This Tea is specially processed to release maximum flavor and color, making it ideal for masala chai.",
      specifications: [
        { label: "Origin", value: "Assam, India" },
        { label: "Process", value: "CTC (Crush, Tear, Curl)" },
        { label: "Harvest", value: "Multiple Seasons" },
        { label: "Caffeine", value: "High" },
        { label: "Best Time", value: "Anytime" }
      ],
      brewing: [
        "Use 1 Teaspoon per cup",
        "Water temperature: 95-100°C",
        "Steep for 2-3 minutes",
        "Excellent with spices and milk"
      ],
      thumbnails: [tEconomic, tEconomic, tEconomic],
      catalog: [
        { size: "500g", price: "₹280", moq: "10 packs", sku: "CTC-500" },
        { size: "1kg", price: "₹520", moq: "5 packs", sku: "CTC-001" },
        { size: "5kg", price: "₹2,400", moq: "2 packs", sku: "CTC-005" },
        { size: "10kg", price: "₹4,400", moq: "1 pack", sku: "CTC-010" },
        { size: "25kg", price: "₹10,500", moq: "1 pack", sku: "CTC-025" }
      ],
      reviews: [
        { name: "Rahul Kapoor", rating: 5, comment: "Best CTC Tea for masala chai!", date: "2024-02-19" },
        { name: "Deepika Singh", rating: 4, comment: "Very strong and flavorful.", date: "2024-02-12" }
      ]
    }
  },
  {
    img: tEconomic,
    title: "Premium Green Tea",
    desc: "Light, refreshing, and packed with antioxidants. Sourced from the finest Tea gardens.",
    badge: "Healthy Choice",
    icon: LeafIcon,
    category: "Green Tea",
    features: ["Antioxidant Rich", "Light & Refreshing", "Health Benefits"],
    details: {
      fullDescription: "Our Premium Green Tea is meticulously processed to preserve the natural antioxidants and delicate flavor profiles. Gently steamed and rolled, this Tea offers a smooth, refreshing taste with subtle vegetal notes that Tea connoisseurs appreciate.",
      specifications: [
        { label: "Origin", value: "Assam Highlands" },
        { label: "Process", value: "Steamed & Rolled" },
        { label: "Harvest", value: "Spring Season" },
        { label: "Caffeine", value: "Low-Moderate" },
        { label: "Best Time", value: "Morning & Evening" }
      ],
      brewing: [
        "Use 1 Teaspoon per cup",
        "Water temperature: 75-80°C",
        "Steep for 2-3 minutes",
        "Do not oversteep to avoid bitterness"
      ],
      thumbnails: [tEconomic, tEconomic, tEconomic],
      catalog: [
        { size: "500g", price: "₹350", moq: "10 packs", sku: "GRT-500" },
        { size: "1kg", price: "₹650", moq: "5 packs", sku: "GRT-001" },
        { size: "5kg", price: "₹2,900", moq: "2 packs", sku: "GRT-005" },
        { size: "10kg", price: "₹5,400", moq: "1 pack", sku: "GRT-010" },
        { size: "25kg", price: "₹12,800", moq: "1 pack", sku: "GRT-025" }
      ],
      reviews: [
        { name: "Dr. Meera Gupta", rating: 5, comment: "Excellent quality green Tea with great health benefits.", date: "2024-02-17" },
        { name: "Rohit Sharma", rating: 4, comment: "Very refreshing and light. Love it!", date: "2024-02-10" }
      ]
    }
  },
  {
    img: tEconomic,
    title: "Authentic Masala Tea",
    desc: "Premium CTC blended with traditional Indian spices for the perfect cup of masala chai.",
    badge: "Spiced Blend",
    icon: Coffee,
    category: "Masala Tea",
    features: ["Spiced Blend", "Traditional Recipe", "Perfect Chai"],
    details: {
      fullDescription: "Our Authentic Masala Tea is a carefully crafted blend of premium CTC Tea and traditional Indian spices including cardamom, cinnamon, ginger, and cloves. This perfect combination creates a warming, aromatic cup that captures the essence of Indian chai.",
      specifications: [
        { label: "Base", value: "Premium CTC Tea" },
        { label: "Spices", value: "Cardamom, Cinnamon, Ginger, Cloves" },
        { label: "Blend", value: "Traditional Recipe" },
        { label: "Caffeine", value: "Medium-High" },
        { label: "Best Time", value: "Anytime" }
      ],
      brewing: [
        "Use 1 Teaspoon per cup",
        "Water temperature: 95-100°C",
        "Steep for 3-4 minutes",
        "Add milk and sugar to taste"
      ],
      thumbnails: [tEconomic, tEconomic, tEconomic],
      catalog: [
        { size: "500g", price: "₹320", moq: "10 packs", sku: "MST-500" },
        { size: "1kg", price: "₹590", moq: "5 packs", sku: "MST-001" },
        { size: "5kg", price: "₹2,700", moq: "2 packs", sku: "MST-005" },
        { size: "10kg", price: "₹4,900", moq: "1 pack", sku: "MST-010" },
        { size: "25kg", price: "₹11,500", moq: "1 pack", sku: "MST-025" }
      ],
      reviews: [
        { name: "Ananya Patel", rating: 5, comment: "The perfect masala chai blend!", date: "2024-02-18" },
        { name: "Vikram Reddy", rating: 5, comment: "Authentic taste. Reminds me of street chai.", date: "2024-02-13" }
      ]
    }
  },
  {
    img: tEconomic,
    title: "Bulk Institutional Pack",
    desc: "High-quality Tea in bulk packaging for institutions, offices, and industrial use.",
    badge: "Bulk Supply",
    icon: Building2,
    category: "Institutional Packs",
    features: ["Bulk Packaging", "Cost Effective", "Consistent Quality"],
    details: {
      fullDescription: "Our Institutional Packs offer premium quality Tea in bulk quantities at competitive prices. Ideal for offices, hotels, canteens, and industrial use, these packs ensure consistent quality and exceptional value for large-scale consumption.",
      specifications: [
        { label: "Packaging", value: "Bulk Bags" },
        { label: "Grade", value: "Commercial Grade" },
        { label: "Origin", value: "Assam, India" },
        { label: "Shelf Life", value: "24 Months" },
        { label: "Best For", value: "Institutional Consumption" }
      ],
      brewing: [
        "Use 1 Teaspoon per cup",
        "Water temperature: 95-100°C",
        "Steep for 3-5 minutes",
        "Adjust quantity based on required strength"
      ],
      thumbnails: [tEconomic, tEconomic, tEconomic],
      catalog: [
        { size: "5kg", price: "₹2,100", moq: "2 packs", sku: "INS-005" },
        { size: "10kg", price: "₹3,900", moq: "1 pack", sku: "INS-010" },
        { size: "25kg", price: "₹9,200", moq: "1 pack", sku: "INS-025" },
        { size: "50kg", price: "₹17,500", moq: "1 pack", sku: "INS-050" }
      ],
      reviews: [
        { name: "Hotel Grand", rating: 5, comment: "Excellent quality for our daily hotel service.", date: "2024-02-16" },
        { name: "Office Supplies", rating: 4, comment: "Great bulk pricing and consistent quality.", date: "2024-02-09" }
      ]
    }
  }
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Premium Tea", "Daily Use Tea", "Assam Tea", "CTC Tea", "Green Tea", "Masala Tea", "Institutional Packs"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

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
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-gold fill-gold' : 'text-gold/30'}`} />
    ));
  };

  return (
    <>
     <SEO
        title="Premium Assam Tea Products — Wholesale & Export"
        description="Explore our premium range of Assam Tea including Royal Assam, Premium CTC, Green Tea, and Bulk Institutional packs. Wholesale pricing available."
        keywords={[
          'Assam Tea products',
          'Premium Tea',
          'CTC Tea',
          'Green Tea',
          'Bulk Tea',
          'Tea wholesale',
          'Tea export'
        ]}
        image="https://rkTeasales.com/products-og-image.jpg"
        type="website"
      />
      <section id="products" className="relative bg-gradient-to-br from-forest-deep via-forest-deep to-forest py-20 md:py-24 overflow-hidden">
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
            className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <span className="text-sm uppercase tracking-[0.4em] text-gold font-semibold">Collection</span>
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
            
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
                Choose Your{' '}
                <span className="relative inline-block">
                  <span className="italic bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                    Perfect Blend
                  </span>
                  <Sparkles className="absolute -top-6 -right-7 w-5 h-5 text-gold opacity-60" />
                </span>
              </h2>
            </motion.div>
            
            <p className="mt-3 text-cream/70 text-base md:text-lg max-w-2xl mx-auto">
              From everyday essentials to royal indulgence — find your perfect cup of Assam Tea.
            </p>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-forest-deep shadow-lg shadow-gold/30"
                    : "bg-cream/10 text-cream/70 hover:bg-cream/20 hover:text-cream border border-gold/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 4 Cards in a row - Image and Content Separated */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-forest-deep border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/20 to-transparent" />
                    
                    {/* Badge on Image */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 backdrop-blur-sm text-xs md:text-sm font-bold uppercase tracking-wider rounded-full ${
                        p.title === "Royal Assam Tea" 
                          ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
                          : p.title === "Premium Assam Tea"
                          ? "bg-gold/90 text-forest-deep"
                          : "bg-cream/90 text-forest-deep"
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                        {p.badge}
                      </span>
                    </div>
                    
                    {/* Category on Image */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 bg-black/60 backdrop-blur-sm text-xs text-cream/90 rounded-full border border-gold/30">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section - Separated from Image */}
                  <div className="p-5 md:p-6 bg-forest-deep">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                      <h3 className="font-display text-xl md:text-2xl text-cream font-bold group-hover:text-gold transition-colors duration-300">
                        {p.title}
                      </h3>
                    </div>
                    
                    <p className="text-cream/80 text-sm md:text-base mb-4 leading-relaxed line-clamp-2">
                      {p.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-[10px] md:text-xs text-cream/60 border border-gold/30 rounded-full px-2 py-0.5 bg-forest-deep/50">
                          {feature}
                        </span>
                      ))}
                      {p.features.length > 2 && (
                        <span className="text-[10px] md:text-xs text-cream/60 border border-gold/30 rounded-full px-2 py-0.5 bg-forest-deep/50">
                          +{p.features.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => {
                        setSelectedProduct(p);
                        setSelectedThumbnail(0);
                      }}
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gold border-b border-gold/40 pb-1 group-hover:border-gold transition-all duration-300 group-hover:gap-3 hover:cursor-pointer"
                    >
                      <span>Discover</span>
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Hover Effect */}
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-cream/60 text-xl">No products found in this category.</p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10 md:mt-12"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-transparent border-2 border-gold/30 text-gold font-semibold rounded-full hover:bg-gold hover:text-forest-deep transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 text-sm md:text-base"
            >
              Get Wholesale Pricing
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
              className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-forest-deep to-forest rounded-2xl shadow-2xl border border-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-gold/20 transition-colors duration-300 text-cream hover:text-gold"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                  {/* Left side - Images and Reviews */}
                  <div className="border-r border-gold/20">
                    <div className="p-6 h-full flex flex-col">
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
                                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
                              >
                                <ChevronLeft className="w-7 h-7" />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all duration-300 opacity-0 group-hover/image:opacity-100"
                              >
                                <ChevronRight className="w-7 h-7" />
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

                      {/* Reviews Section */}
                      <div className="flex-1 flex flex-col min-h-0">
                        <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                          <Star className="w-6 h-6 text-gold fill-gold" />
                          <h4 className="text-gold font-semibold text-lg uppercase tracking-wider">Customer Reviews</h4>
                        </div>
                        <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
                          {selectedProduct.details.reviews.map((review: Review, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="bg-cream/5 backdrop-blur-sm rounded-lg p-4 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                                    <User className="w-5 h-5 text-gold" />
                                  </div>
                                  <div>
                                    <p className="text-cream text-base font-semibold">{review.name}</p>
                                    <p className="text-cream/50 text-xs">{review.date}</p>
                                  </div>
                                </div>
                                <div className="flex gap-0.5 flex-shrink-0">
                                  {renderStars(review.rating)}
                                </div>
                              </div>
                              <p className="text-cream/70 text-base leading-relaxed pl-13">
                                "{review.comment}"
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="">
                    <div className="p-6 h-full flex flex-col">
                      <span className={`inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold uppercase tracking-wider rounded-full w-fit flex-shrink-0 ${
                        selectedProduct.title === "Royal Assam Tea" 
                          ? "bg-gradient-to-r from-gold to-amber-500 text-forest-deep" 
                          : selectedProduct.title === "Premium Assam Tea"
                          ? "bg-gold/90 text-forest-deep"
                          : "bg-cream/90 text-forest-deep"
                      }`}>
                        {selectedProduct.badge}
                      </span>
                      
                      <h3 className="font-display text-4xl md:text-5xl text-cream mt-4 mb-5 flex-shrink-0">
                        {selectedProduct.title}
                      </h3>
                      
                      <div className="overflow-y-auto pr-2 flex-1 custom-scrollbar-right">
                        <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-6">
                          {selectedProduct.details.fullDescription}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-gold font-semibold text-base uppercase tracking-wider mb-4 flex items-center gap-3">
                            <Leaf className="w-5 h-5" />
                            Specifications
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {selectedProduct.details.specifications.map((spec: { label: string; value: string }, idx: number) => (
                              <div key={idx} className="border-b border-gold/20 pb-2">
                                <p className="text-cream/50 text-sm uppercase tracking-wider">{spec.label}</p>
                                <p className="text-cream text-base md:text-lg font-medium">{spec.value}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Product Catalog / Pricing Table */}
                        <div className="mb-6">
                          <h4 className="text-gold font-semibold text-base uppercase tracking-wider mb-4 flex items-center gap-3">
                            <Package className="w-5 h-5" />
                            Product Catalog & Pricing
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm md:text-base">
                              <thead>
                                <tr className="border-b border-gold/20">
                                  <th className="text-left py-3 px-4 text-cream/60 text-xs uppercase tracking-wider font-medium">Pack Size</th>
                                  <th className="text-left py-3 px-4 text-cream/60 text-xs uppercase tracking-wider font-medium">Price</th>
                                  <th className="text-left py-3 px-4 text-cream/60 text-xs uppercase tracking-wider font-medium">MOQ</th>
                                  <th className="text-left py-3 px-4 text-cream/60 text-xs uppercase tracking-wider font-medium">SKU</th>
                                </tr>
                              </thead>
                              <tbody>
                                {selectedProduct.details.catalog.map((item: CatalogOption, idx: number) => (
                                  <motion.tr
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="border-b border-gold/10 hover:bg-gold/5 transition-colors duration-200"
                                  >
                                    <td className="py-3 px-4 text-cream font-medium">
                                      <div className="flex items-center gap-2">
                                        <Weight className="w-4 h-4 text-gold/60" />
                                        {item.size}
                                      </div>
                                    </td>
                                    <td className="py-3 px-4 text-gold font-bold text-base">{item.price}</td>
                                    <td className="py-3 px-4 text-cream/70 text-sm">{item.moq}</td>
                                    <td className="py-3 px-4 text-cream/40 text-xs font-mono">{item.sku}</td>
                                  </motion.tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <p className="text-cream/40 text-xs mt-2 italic">* MOQ: Minimum Order Quantity | Bulk discounts available for larger quantities</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-gold font-semibold text-base uppercase tracking-wider mb-4 flex items-center gap-3">
                            <Clock className="w-5 h-5" />
                            Brewing Instructions
                          </h4>
                          <ul className="space-y-2">
                            {selectedProduct.details.brewing.map((step: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-cream/80 text-base md:text-lg">
                                <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProduct.features.map((feature: string, idx: number) => (
                            <span key={idx} className="text-sm md:text-base text-cream/70 border border-gold/30 rounded-full px-3 py-1 bg-forest-deep/50">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gold/20 flex-shrink-0">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex justify-center mb-2">
                              <Truck className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <p className="text-cream/60 text-xs uppercase tracking-wider">Free Shipping</p>
                            <p className="text-cream/40 text-[10px]">On orders 50kg+</p>
                          </div>
                          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex justify-center mb-2">
                              <Shield className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <p className="text-cream/60 text-xs uppercase tracking-wider">Quality Guarantee</p>
                            <p className="text-cream/40 text-[10px]">100% authentic</p>
                          </div>
                          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex justify-center mb-2">
                              <ClockIcon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <p className="text-cream/60 text-xs uppercase tracking-wider">Fast Delivery</p>
                            <p className="text-cream/40 text-[10px]">Pan India shipping</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-4 flex-shrink-0">
                        <a
                          href="#contact"
                          onClick={() => setSelectedProduct(null)}
                          className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 text-base md:text-lg"
                        >
                          Enquire Now
                          <TrendingUp className="w-5 h-5" />
                        </a>
                        <button
                          onClick={() => setSelectedProduct(null)}
                          className="px-8 py-4 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 text-base md:text-lg"
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