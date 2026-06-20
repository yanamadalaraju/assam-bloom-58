// import { motion } from "framer-motion";
// import { ShieldCheck, Award, Sprout, Truck, BadgeDollarSign, Package, Leaf, Globe, Sparkles, ArrowRight, CheckCircle, Clock, TrendingUp, Users, Heart, Star } from "lucide-react";
// import { useState } from "react";

// const features = [
//   { 
//     icon: Award, 
//     title: "Export Quality Standards", 
//     shortText: "Every consignment passes rigorous benchmarks.",
//     text: "Every consignment passes rigorous benchmarks before it leaves the warehouse. Our quality control Team performs over 50+ checks including taste, aroma, color, and moisture content.",
//     image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&h=600&fit=crop",
//     stats: "99.9% Quality Score",
//     certifications: ["ISO 22000", "HACCP", "BRCGS"]
//   },
//   { 
//     icon: ShieldCheck, 
//     title: "FSSAI Compliant", 
//     shortText: "Fully certified with food safety regulations.",
//     text: "Fully certified and compliant with food safety regulations. We maintain strict adherence to FSSAI guidelines with regular audits and certifications.",
//     image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&h=600&fit=crop",
//     stats: "100% Compliant",
//     certifications: ["FSSAI", "ISO 22000", "GMP"]
//   },
//   { 
//     icon: Sprout, 
//     title: "Fresh Garden-Sourced", 
//     shortText: "Leaves picked and processed fresh.",
//     text: "Leaves picked, processed and dispatched without compromise. Direct partnerships with 50+ premium Tea estates ensure freshness within 24 hours of plucking.",
//     image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&h=600&fit=crop",
//     stats: "Fresh within 24hrs",
//     certifications: ["Organic", "Rainforest", "Fair Trade"]
//   },
//   { 
//     icon: Truck, 
//     title: "Reliable Supply Chain", 
//     shortText: "Dependable timelines worldwide.",
//     text: "Dependable timelines for buyers in any corner of the world. Our logistics network spans 50+ countries with guaranteed delivery within 7-10 business days.",
//     image: "https://images.unsplash.com/photo-1601497781860-8bdf7f7bb0e4?w=800&h=600&fit=crop",
//     stats: "50+ Countries",
//     certifications: ["AEO", "C-TPAT", "GDP"]
//   },
//   { 
//     icon: BadgeDollarSign, 
//     title: "Competitive Pricing", 
//     shortText: "Direct-from-estate cost savings.",
//     text: "Direct-from-estate sourcing keeps wholesale costs honest. By eliminating middlemen, we offer 30-40% lower prices than market average.",
//     image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=600&fit=crop",
//     stats: "30% Cost Saving",
//     certifications: ["Best Price", "Volume Discount", "Flexible Terms"]
//   },
//   { 
//     icon: Package, 
//     title: "Custom Packaging", 
//     shortText: "White-label solutions available.",
//     text: "White-label and bespoke packaging solutions on request. From eco-friendly materials to luxury gift boxes, we offer 100+ customizable options.",
//     image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop",
//     stats: "100+ Designs",
//     certifications: ["Eco-Friendly", "BPA Free", "Custom Labels"]
//   },
// ];

// export function ExportSection() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   return (
//     <section className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-20 md:py-28 overflow-hidden">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #234B2F 1px, transparent 0)`,
//           backgroundSize: "40px 40px"
//         }} />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/10 mb-4">
//             <Globe className="w-3 h-3 text-gold" />
//             <span className="text-[11px] uppercase tracking-wider text-forest font-semibold">Global Export Partner</span>
//           </div>
          
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-4">
//             Built for buyers who{' '}
//             <span className="relative whitespace-nowrap">
//               <span className="italic text-gold">demand more</span>
//               <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none">
//                 <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#D4AF37" stopOpacity="0"/>
//                     <stop offset="50%" stopColor="#D4AF37" stopOpacity="1"/>
//                     <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </span>
//           </h2>
          
//           <p className="text-gray-600 text-base md:text-lg">
//             Quality you can trust, delivered globally. Our commitment to excellence sets us apart.
//           </p>
//         </motion.div>

//         {/* Features Grid with Sliding Panel */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             const isHovered = hoveredCard === index;
            
//             return (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 className="group relative h-[420px] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                   <img 
//                     src={feature.image} 
//                     alt={feature.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                 </div>

//                 {/* Top Badge */}
//                 <div className="absolute top-4 left-4 z-10">
//                   <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
//                     <Star className="w-3 h-3 text-gold fill-gold" />
//                     <span className="text-cream text-[10px] font-semibold">{feature.stats}</span>
//                   </div>
//                 </div>

//                 {/* Icon */}
//                 <div className="absolute top-4 right-4 z-10">
//                   <div className="w-10 h-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
//                     <Icon className="w-5 h-5 text-gold" />
//                   </div>
//                 </div>

//                 {/* Main Content - Always Visible */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
//                   <h3 className="font-display text-2xl text-cream mb-2">{feature.title}</h3>
//                   <p className="text-cream/80 text-sm leading-relaxed">
//                     {feature.shortText}
//                   </p>
//                 </div>

//                 {/* Sliding Panel - Appears from Bottom on Hover */}
//                 <motion.div
//                   initial={{ y: "100%" }}
//                   animate={{ y: isHovered ? "0%" : "100%" }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-forest-deep via-forest-deep to-forest-deep/95 rounded-t-xl overflow-hidden"
//                   style={{ height: "65%" }}
//                 >
//                   <div className="h-full p-6 flex flex-col">
//                     {/* Title in Panel */}
//                     <div className="flex items-center gap-2 mb-3">
//                       <Icon className="w-5 h-5 text-gold" />
//                       <h3 className="font-display text-xl text-cream">{feature.title}</h3>
//                     </div>

//                     {/* Full Description */}
//                     <p className="text-cream/80 text-sm leading-relaxed mb-3 flex-1">
//                       {feature.text}
//                     </p>

//                     {/* Certifications */}
//                     <div className="mb-3">
//                       <p className="text-gold text-[10px] uppercase tracking-wider mb-2">Certifications</p>
//                       <div className="flex flex-wrap gap-2">
//                         {feature.certifications.map((cert, idx) => (
//                           <span key={idx} className="px-2 py-0.5 rounded-full bg-cream/10 text-cream/70 text-[9px]">
//                             {cert}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* CTA Button */}
//                     <a
//                       href="#contact"
//                       className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gold text-forest-deep font-semibold text-sm rounded-lg hover:bg-amber-500 transition-all duration-300"
//                     >
//                       Enquire Now
//                       <ArrowRight className="w-3 h-3" />
//                     </a>
//                   </div>
//                 </motion.div>

//                 {/* Progress Indicator */}
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/30 z-10">
//                   <motion.div
//                     initial={{ width: "0%" }}
//                     animate={{ width: isHovered ? "100%" : "0%" }}
//                     transition={{ duration: 0.4 }}
//                     className="h-full bg-gradient-to-r from-gold to-amber-500 rounded-full"
//                   />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="text-center mt-16"
//         >
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a
//               href="#contact"
//               className="group inline-flex items-center gap-2 px-8 py-3 bg-forest-deep text-white font-semibold rounded-lg hover:bg-forest transition-all duration-300 shadow-sm hover:shadow-md"
//             >
//               Start Global Sourcing
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </a>
//             <a
//               href="#products"
//               className="group inline-flex items-center gap-2 px-8 py-3 border-2 border-forest-deep/20 text-forest-deep font-semibold rounded-lg hover:bg-forest-deep/5 transition-all duration-300"
//             >
//               View Collection
//               <Leaf className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//             </a>
//           </div>
//           <div className="flex items-center justify-center gap-4 mt-4">
//             <div className="flex items-center gap-1">
//               <Heart className="w-3 h-3 text-gold fill-gold" />
//               <span className="text-xs text-gray-500">Trusted by 500+ buyers</span>
//             </div>
//             <div className="w-px h-3 bg-gray-300" />
//             <div className="flex items-center gap-1">
//               <Users className="w-3 h-3 text-gold" />
//               <span className="text-xs text-gray-500">50+ countries served</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// import { motion } from "framer-motion";
// import { ShieldCheck, Award, Sprout, Truck, BadgeDollarSign, Package, Leaf, Globe, Sparkles, ArrowRight, CheckCircle, Clock, TrendingUp, Users, Heart, Star } from "lucide-react";
// import { useState } from "react";

// // Import images from assets folder
// import exportQualityImg from "@/assets/export.webp";
// import fssaiImg from "@/assets/fssai.jpg";
// import freshGardenImg from "@/assets/export1.jpg";
// import supplyChainImg from "@/assets/reliableexport.jpg";
// import pricingImg from "@/assets/competativepricing.jpg";
// import packagingImg from "@/assets/custompacakging.jpg";

// const features = [
//   { 
//     icon: Award, 
//     title: "Export Quality Standards", 
//     shortText: "Every consignment passes rigorous benchmarks.",
//     text: "Every consignment passes rigorous benchmarks before it leaves the warehouse. Our quality control Team performs over 50+ checks including taste, aroma, color, and moisture content.",
//     image: exportQualityImg,
//     stats: "99.9% Quality Score",
//     certifications: ["ISO 22000", "HACCP", "BRCGS"]
//   },
//   { 
//     icon: ShieldCheck, 
//     title: "FSSAI Compliant", 
//     shortText: "Fully certified with food safety regulations.",
//     text: "Fully certified and compliant with food safety regulations. We maintain strict adherence to FSSAI guidelines with regular audits and certifications.",
//     image: fssaiImg,
//     stats: "100% Compliant",
//     certifications: ["FSSAI", "ISO 22000", "GMP"]
//   },
//   { 
//     icon: Sprout, 
//     title: "Fresh Garden-Sourced", 
//     shortText: "Leaves picked and processed fresh.",
//     text: "Leaves picked, processed and dispatched without compromise. Direct partnerships with 50+ premium Tea estates ensure freshness within 24 hours of plucking.",
//     image: freshGardenImg,
//     stats: "Fresh within 24hrs",
//     certifications: ["Organic", "Rainforest", "Fair Trade"]
//   },
//   { 
//     icon: Truck, 
//     title: "Reliable Supply Chain", 
//     shortText: "Dependable timelines worldwide.",
//     text: "Dependable timelines for buyers in any corner of the world. Our logistics network spans 50+ countries with guaranteed delivery within 7-10 business days.",
//     image: supplyChainImg,
//     stats: "50+ Countries",
//     certifications: ["AEO", "C-TPAT", "GDP"]
//   },
//   { 
//     icon: BadgeDollarSign, 
//     title: "Competitive Pricing", 
//     shortText: "Direct-from-estate cost savings.",
//     text: "Direct-from-estate sourcing keeps wholesale costs honest. By eliminating middlemen, we offer 30-40% lower prices than market average.",
//     image: pricingImg,
//     stats: "30% Cost Saving",
//     certifications: ["Best Price", "Volume Discount", "Flexible Terms"]
//   },
//   { 
//     icon: Package, 
//     title: "Custom Packaging", 
//     shortText: "White-label solutions available.",
//     text: "White-label and bespoke packaging solutions on request. From eco-friendly materials to luxury gift boxes, we offer 100+ customizable options.",
//     image: packagingImg,
//     stats: "100+ Designs",
//     certifications: ["Eco-Friendly", "BPA Free", "Custom Labels"]
//   },
// ];

// export function ExportSection() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   return (
//     <section className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-12 md:py-16 overflow-hidden">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #234B2F 1px, transparent 0)`,
//           backgroundSize: "40px 40px"
//         }} />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/10 mb-3">
//             <Globe className="w-3 h-3 text-gold" />
//             <span className="text-[11px] uppercase tracking-wider text-forest font-semibold">Global Export Partner</span>
//           </div>
          
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest-deep leading-tight mb-3">
//             Built for buyers who{' '}
//             <span className="relative whitespace-nowrap">
//               <span className="italic text-gold">demand more</span>
//               <svg className="absolute -bottom-2 left-0 w-full" height="3" viewBox="0 0 200 4" fill="none">
//                 <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round"/>
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#D4AF37" stopOpacity="0"/>
//                     <stop offset="50%" stopColor="#D4AF37" stopOpacity="1"/>
//                     <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </span>
//           </h2>
          
//           <p className="text-gray-500 text-sm md:text-base">
//             Quality you can trust, delivered globally. Our commitment to excellence sets us apart.
//           </p>
//         </motion.div>

//         {/* Features Grid with Sliding Panel */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             const isHovered = hoveredCard === index;
            
//             return (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 className="group relative h-[420px] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                   <img 
//                     src={feature.image} 
//                     alt={feature.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                 </div>

//                 {/* Top Badge */}
//                 <div className="absolute top-4 left-4 z-10">
//                   <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm">
//                     <Star className="w-3 h-3 text-gold fill-gold" />
//                     <span className="text-cream text-[11px] font-semibold">{feature.stats}</span>
//                   </div>
//                 </div>

//                 {/* Icon */}
//                 <div className="absolute top-4 right-4 z-10">
//                   <div className="w-11 h-11 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
//                     <Icon className="w-5 h-5 text-gold" />
//                   </div>
//                 </div>

//                 {/* Main Content - Always Visible */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
//                   <h3 className="font-display text-2xl text-cream mb-2 font-bold">{feature.title}</h3>
//                   <p className="text-cream/85 text-sm leading-relaxed">
//                     {feature.shortText}
//                   </p>
//                 </div>

//                 {/* Sliding Panel - Appears from Bottom on Hover */}
//                 <motion.div
//                   initial={{ y: "100%" }}
//                   animate={{ y: isHovered ? "0%" : "100%" }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-forest-deep via-forest-deep to-forest-deep/95 rounded-t-xl overflow-hidden"
//                   style={{ height: "65%" }}
//                 >
//                   <div className="h-full p-5 flex flex-col">
//                     {/* Title in Panel */}
//                     <div className="flex items-center gap-2 mb-3">
//                       <Icon className="w-5 h-5 text-gold" />
//                       <h3 className="font-display text-xl text-cream font-bold">{feature.title}</h3>
//                     </div>

//                     {/* Full Description */}
//                     <p className="text-cream/85 text-sm leading-relaxed mb-3 flex-1">
//                       {feature.text}
//                     </p>

//                     {/* Certifications */}
//                     <div className="mb-3">
//                       <p className="text-gold text-[11px] uppercase tracking-wider mb-2 font-semibold">Certifications</p>
//                       <div className="flex flex-wrap gap-2">
//                         {feature.certifications.map((cert, idx) => (
//                           <span key={idx} className="px-2 py-0.5 rounded-full bg-cream/10 text-cream/80 text-[10px]">
//                             {cert}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* CTA Button */}
//                     <a
//                       href="#contact"
//                       className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gold text-forest-deep font-semibold text-sm rounded-lg hover:bg-amber-500 transition-all duration-300"
//                     >
//                       Enquire Now
//                       <ArrowRight className="w-3.5 h-3.5" />
//                     </a>
//                   </div>
//                 </motion.div>

//                 {/* Progress Indicator */}
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/30 z-10">
//                   <motion.div
//                     initial={{ width: "0%" }}
//                     animate={{ width: isHovered ? "100%" : "0%" }}
//                     transition={{ duration: 0.4 }}
//                     className="h-full bg-gradient-to-r from-gold to-amber-500 rounded-full"
//                   />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="text-center mt-10 md:mt-12"
//         >
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a
//               href="#contact"
//               className="group inline-flex items-center gap-2 px-7 py-3 bg-forest-deep text-white font-semibold rounded-lg hover:bg-forest transition-all duration-300 shadow-sm hover:shadow-md text-sm"
//             >
//               Start Global Sourcing
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </a>
//             <a
//               href="#products"
//               className="group inline-flex items-center gap-2 px-7 py-3 border-2 border-forest-deep/20 text-forest-deep font-semibold rounded-lg hover:bg-forest-deep/5 transition-all duration-300 text-sm"
//             >
//               View Collection
//               <Leaf className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//             </a>
//           </div>
//           <div className="flex items-center justify-center gap-4 mt-3">
//             <div className="flex items-center gap-1.5">
//               <Heart className="w-3 h-3 text-gold fill-gold" />
//               <span className="text-xs text-gray-500">Trusted by 500+ buyers</span>
//             </div>
//             <div className="w-px h-3 bg-gray-300" />
//             <div className="flex items-center gap-1.5">
//               <Users className="w-3 h-3 text-gold" />
//               <span className="text-xs text-gray-500">50+ countries served</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





import { motion } from "framer-motion";
import { ShieldCheck, Award, Sprout, Truck, BadgeDollarSign, Package, Leaf, Globe, Sparkles, ArrowRight, CheckCircle, Clock, TrendingUp, Users, Heart, Star } from "lucide-react";
import { useState } from "react";

// Import images from assets folder
import exportQualityImg from "@/assets/export.webp";
import fssaiImg from "@/assets/fssai.jpg";
import freshGardenImg from "@/assets/export1.jpg";
import supplyChainImg from "@/assets/reliableexport.jpg";
import pricingImg from "@/assets/competativepricing.jpg";
import packagingImg from "@/assets/custompacakging.jpg";

const features = [
  { 
    icon: Award, 
    title: "Export Quality Standards", 
    shortText: "Every consignment passes rigorous benchmarks.",
    text: "Every consignment passes rigorous benchmarks before it leaves the warehouse. Our quality control Team performs over 50+ checks including taste, aroma, color, and moisture content.",
    image: exportQualityImg,
    stats: "99.9% Quality Score",
    certifications: ["ISO 22000", "HACCP", "BRCGS"]
  },
  { 
    icon: ShieldCheck, 
    title: "FSSAI Compliant", 
    shortText: "Fully certified with food safety regulations.",
    text: "Fully certified and compliant with food safety regulations. We maintain strict adherence to FSSAI guidelines with regular audits and certifications.",
    image: fssaiImg,
    stats: "100% Compliant",
    certifications: ["FSSAI", "ISO 22000",]
  },
  { 
    icon: Sprout, 
    title: "Fresh Garden-Sourced", 
    shortText: "Leaves picked and processed fresh.",
   text: "Leaves picked, processed and dispatched without compromise. Direct partnerships with 50+ premium Tea estates ensure freshness within 24 hours of harvest.",
    image: freshGardenImg,
   stats: "Direct Tea Garden Sourcing",
    certifications: ["Organic", "Rainforest", "Fair Trade"]
  },
  { 
    icon: Truck, 
    title: "Reliable Supply Chain", 
    shortText: "Dependable timelines worldwide.",
    text: "Dependable timelines for buyers in any corner of the world. Our logistics network spans 50+ countries with guaranteed delivery within 7-10 business days.",
    image: supplyChainImg,
    stats: "50+ Countries",
    certifications: ["AEO", "C-TPAT", "GDP"]
  },
  { 
    icon: BadgeDollarSign, 
    title: "Competitive Pricing", 
    shortText: "Direct-from-estate cost savings.",
    text: "Direct-from-estate sourcing keeps wholesale costs honest. By eliminating middlemen, we offer 30-40% lower prices than market average.",
    image: pricingImg,
    stats: "30% Cost Saving",
    certifications: ["Best Price", "Volume Discount", "Flexible Terms"]
  },
  { 
  icon: Package, 
  title: "Tea Garden Sourcing", 
  shortText: "Direct sourcing from premium Tea gardens.",
  text: "We source premium Assam Tea directly from multiple trusted Tea gardens. Access a wide variety of Tea grades and flexible quantities ranging from 25kg to bulk orders, ensuring consistent quality and reliable availability throughout the year.",
  image: packagingImg,
  stats: "50+ Tea Gardens",
  certifications: ["Direct Sourcing", "Quality Assured", "Bulk Supply"]
},
];

export function ExportSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="export" className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-12 md:py-16 overflow-hidden scroll-mt-24">
      {/* Added id="export" and scroll-mt-24 for proper scroll offset */}
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #234B2F 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/10 mb-3">
            <Globe className="w-3 h-3 text-gold" />
            <span className="text-[11px] uppercase tracking-wider text-forest font-semibold">Global Export Partner</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest-deep leading-tight mb-3">
            Built for buyers who{' '}
            <span className="relative whitespace-nowrap">
              <span className="italic text-gold">demand more</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="3" viewBox="0 0 200 4" fill="none">
                <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round"/>
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
          
          <p className="text-gray-500 text-sm md:text-base">
            Quality you can trust, delivered globally. Our commitment to excellence sets us apart.
          </p>
        </motion.div>

        {/* Features Grid with Sliding Panel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative h-[420px] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-cream text-[11px] font-semibold">{feature.stats}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-11 h-11 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                </div>

                {/* Main Content - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-display text-2xl text-cream mb-2 font-bold">{feature.title}</h3>
                  <p className="text-cream/85 text-sm leading-relaxed">
                    {feature.shortText}
                  </p>
                </div>

                {/* Sliding Panel - Appears from Bottom on Hover */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: isHovered ? "0%" : "100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-forest-deep via-forest-deep to-forest-deep/95 rounded-t-xl overflow-hidden"
                  style={{ height: "65%" }}
                >
                  <div className="h-full p-5 flex flex-col">
                    {/* Title in Panel */}
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-5 h-5 text-gold" />
                      <h3 className="font-display text-xl text-cream font-bold">{feature.title}</h3>
                    </div>

                    {/* Full Description */}
                    <p className="text-cream/85 text-sm leading-relaxed mb-3 flex-1">
                      {feature.text}
                    </p>

                    {/* Certifications */}
                    <div className="mb-3">
                      <p className="text-gold text-[11px] uppercase tracking-wider mb-2 font-semibold">Certifications</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.certifications.map((cert, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-full bg-cream/10 text-cream/80 text-[10px]">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gold text-forest-deep font-semibold text-sm rounded-lg hover:bg-amber-500 transition-all duration-300"
                    >
                      Enquire Now
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>

                {/* Progress Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/30 z-10">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.4 }}
                    className="h-full bg-gradient-to-r from-gold to-amber-500 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 md:mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3 bg-forest-deep text-white font-semibold rounded-lg hover:bg-forest transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              Start Global Sourcing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-7 py-3 border-2 border-forest-deep/20 text-forest-deep font-semibold rounded-lg hover:bg-forest-deep/5 transition-all duration-300 text-sm"
            >
              View Collection
              <Leaf className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-gold fill-gold" />
              <span className="text-xs text-gray-500">Trusted by 500+ buyers</span>
            </div>
            <div className="w-px h-3 bg-gray-300" />
            <div className="flex items-center gap-1.5">
              <Users className="w-3 h-3 text-gold" />
              <span className="text-xs text-gray-500">50+ countries served</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}