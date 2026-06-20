// import { motion } from "framer-motion";
// import { useState } from "react";
// import { 
//   Shield, 
//   Award, 
//   Truck, 
//   TrendingUp, 
//   Package, 
//   Headphones, 
//   BadgeDollarSign, 
//   Clock, 
//   Users, 
//   Globe, 
//   Gift, 
//   CheckCircle,
//   Star,
//   ArrowRight,
//   Heart,
//   Sparkles,
//   Crown,
//   Rocket,
//   ShoppingBag,
//   Zap
// } from "lucide-react";

// // Import images from assets folder
// import highProfitImg from "@/assets/profit.jpg";
// import freeShippingImg from "@/assets/shiping.jpg";
// import zeroInventoryImg from "@/assets/inventory.jpg";
// import qualityGuaranteeImg from "@/assets/guarantee.jpg";
// import dealerSupportImg from "@/assets/customerservice.jpg";
// import marketingSupportImg from "@/assets/marketing.webp";

// // Images for each benefit card
// const benefitImages = {
//   "High Profit Margins": highProfitImg,
//   "Free Pan India Shipping": freeShippingImg,
//   "Zero Inventory Risk": zeroInventoryImg,
//   "100% Quality Guarantee": qualityGuaranteeImg,
//   "24/7 Dealer Support": dealerSupportImg,
//   "Marketing Support": marketingSupportImg,
  
// };

// const benefits = [
//   {
//     icon: BadgeDollarSign,
//     title: "High Profit Margins",
//     shortDesc: "Industry-leading 25-35% margins",
//     description: "Enjoy maximum returns on every sale. Our competitive wholesale pricing ensures you get the best profit margins in the industry.",
//     features: ["25-35% Margins", "Volume Discounts", "Seasonal Offers"],
//     image: benefitImages["High Profit Margins"],
//     stat: "35% Margin"
//   },
//   {
//   icon: Truck,
//   title: "Reliable Supply Chain",
//   shortDesc: "Consistent sourcing and timely dispatch",
//   description: "Our strong network of Tea gardens and logistics partners ensures uninterrupted supply, timely deliveries, and consistent product availability throughout the year.",
//   features: ["Multiple Tea Gardens", "Timely Dispatch", "Year-Round Supply"],
//   image: benefitImages["Reliable Supply Chain"],
//   stat: "Strong Network"
// },
//   {
//     icon: Package,
//     title: "Zero Inventory Risk",
//     shortDesc: "No minimum stock commitment",
//     description: "Order exactly what you need. Flexible ordering with easy return policy means zero inventory pressure.",
//     features: ["Flexible Ordering", "Easy Returns", "No Stock Pressure"],
//     image: benefitImages["Zero Inventory Risk"],
//     stat: "Risk Free"
//   },
//   {
//     icon: Shield,
//     title: "100% Quality Guarantee",
//     shortDesc: "FSSAI certified premium quality",
//     description: "Every batch undergoes strict quality control. Consistent taste and quality across all shipments guaranteed.",
//     features: ["FSSAI Certified", "Quality Testing", "Consistent Taste"],
//     image: benefitImages["100% Quality Guarantee"],
//     stat: "Certified"
//   },
//   {
//     icon: Headphones,
//     title: "24/7 Dealer Support",
//     shortDesc: "Dedicated relationship manager",
//     description: "Quick response and after-sales support. Your dedicated manager ensures smooth operations always.",
//     features: ["Dedicated Manager", "Quick Response", "24/7 Support"],
//     image: benefitImages["24/7 Dealer Support"],
//     stat: "Always Here"
//   },
//   {
//     icon: TrendingUp,
//     title: "Marketing Support",
//     shortDesc: "Free branding & promotional materials",
//     description: "Complete marketing support including branding materials, product samples, and promotional offers.",
//     features: ["Branding Kit", "Free Samples", "Promotional Offers"],
//     image: benefitImages["Marketing Support"],
//     stat: "Full Support"
//   }
// ];

// export function DealerBenefitsSection() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   return (
//     <section id="dealers" className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-16 md:py-20 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
//           backgroundSize: "40px 40px"
//         }} />
//       </div>

//       {/* Decorative Orbs */}
//       <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-12"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
//             <Zap className="w-3 h-3 text-gold" />
//             <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Exclusive Benefits</span>
//           </div>
          
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
//             Why Partner With{' '}
//             <span className="relative whitespace-nowrap">
//               <span className="italic text-gold">R K Tea?</span>
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
          
//           <p className="text-cream/70 text-base md:text-lg">
//             Join 250+ successful dealers and unlock exclusive benefits with India's most trusted Tea exporter
//           </p>
//         </motion.div>

//         {/* Main Benefits Grid - Clear Images Before Hover */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {benefits.map((benefit, index) => {
//             const Icon = benefit.icon;
//             const isHovered = hoveredCard === index;
            
//             return (
//               <motion.div
//                 key={benefit.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 className="relative h-[360px] rounded-xl overflow-hidden cursor-pointer shadow-lg"
//               >
//                 {/* Background Image - Always Visible and Clear */}
//                 <div className="absolute inset-0">
//                   <img 
//                     src={benefit.image} 
//                     alt={benefit.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   {/* Lighter gradient so image is more visible */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/50 to-forest-deep/20" />
//                 </div>

//                 {/* Content - Drawer slides up from bottom */}
//                 <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-end">
//                   {/* Always Visible Content - Top section with better transparency */}
//                   <div className="p-5">
//                     <div className="flex items-start justify-between mb-3">
//                       <div className="flex items-center gap-3">
//                         <div className="w-12 h-12 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center">
//                           <Icon className="w-6 h-6 text-gold" />
//                         </div>
//                         <div>
//                           <h3 className="text-cream font-display font-bold text-xl drop-shadow-md">{benefit.title}</h3>
//                           <p className="text-cream/80 text-sm mt-0.5 drop-shadow-sm">{benefit.shortDesc}</p>
//                         </div>
//                       </div>
//                       <div className="px-2.5 py-1 rounded-full bg-gold text-forest-deep text-xs font-bold shadow-lg">
//                         {benefit.stat}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Drawer Content - Slides up on hover with solid background */}
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ 
//                       height: isHovered ? "auto" : 0,
//                       opacity: isHovered ? 1 : 0
//                     }}
//                     transition={{ duration: 0.3, ease: "easeOut" }}
//                     className="overflow-hidden"
//                   >
//                     <div className="p-5 pt-0 bg-gradient-to-t from-forest-deep via-forest-deep/95 to-transparent">
//                       <p className="text-cream/90 text-sm leading-relaxed mb-3">
//                         {benefit.description}
//                       </p>
                      
//                       <div className="flex flex-wrap gap-2 mb-3">
//                         {benefit.features.map((feature, idx) => (
//                           <span key={idx} className="px-2 py-1 rounded-full bg-cream/15 text-cream/80 text-xs backdrop-blur-sm">
//                             {feature}
//                           </span>
//                         ))}
//                       </div>

//                       <a
//                         href="#contact"
//                         className="inline-flex items-center gap-1.5 text-gold text-sm font-medium hover:gap-2 transition-all duration-300"
//                       >
//                         Learn More
//                         <ArrowRight className="w-3.5 h-3.5" />
//                       </a>
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Top Glow on Hover */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: isHovered ? 1 : 0 }}
//                   className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
//                 />
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-5 py-6 border-t border-b border-gold/20 mb-12"
//         >
//           <div className="text-center">
//             <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
//               <Users className="w-6 h-6 text-gold" />
//             </div>
//             <div className="text-3xl font-bold text-gold">250+</div>
//             <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Active Dealers</div>
//           </div>
//           <div className="text-center">
//             <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
//               <Globe className="w-6 h-6 text-gold" />
//             </div>
//             <div className="text-3xl font-bold text-gold">200+</div>
//             <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Cities Covered</div>
//           </div>
//           <div className="text-center">
//             <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
//               <TrendingUp className="w-6 h-6 text-gold" />
//             </div>
//             <div className="text-3xl font-bold text-gold">₹100Cr+</div>
//             <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Annual Revenue</div>
//           </div>
//           <div className="text-center">
//             <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
//               <Heart className="w-6 h-6 text-gold" />
//             </div>
//             <div className="text-3xl font-bold text-gold">98%</div>
//             <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Renewal Rate</div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center"
//         >
//           <div className="bg-gradient-to-r from-gold/10 to-amber-500/10 rounded-xl p-6 border border-gold/20">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//               <div className="text-left">
//                 <h3 className="text-cream text-2xl font-display mb-1">Ready to Grow Together?</h3>
//                 <p className="text-cream/50 text-sm">Join 250+ successful dealers across India</p>
//               </div>
//               <div className="flex flex-col sm:flex-row items-center gap-3">
//                 <a
//                   href="#contact"
//                   className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-forest-deep font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 text-sm"
//                 >
//                   Apply for Dealership
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </a>
//                 <a
//                   href="#catalogue"
//                   className="inline-flex items-center gap-2 px-6 py-2.5 border border-gold/30 text-gold rounded-lg hover:bg-gold/10 transition-all duration-300 text-sm"
//                 >
//                   Download Brochure
//                   <Heart className="w-4 h-4" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Shield, 
  Award, 
  Truck, 
  TrendingUp, 
  Package, 
  Headphones, 
  BadgeDollarSign, 
  Clock, 
  Users, 
  Globe, 
  Gift, 
  CheckCircle,
  Star,
  ArrowRight,
  Heart,
  Sparkles,
  Crown,
  Rocket,
  ShoppingBag,
  Zap
} from "lucide-react";

// Import images from assets folder
import highProfitImg from "@/assets/profit.jpg";
import freeShippingImg from "@/assets/shiping.jpg";
import zeroInventoryImg from "@/assets/inventory.jpg";
import qualityGuaranteeImg from "@/assets/guarantee.jpg";
import dealerSupportImg from "@/assets/customerservice.jpg";
import marketingSupportImg from "@/assets/marketing.webp";
import reliableSupplyImg from "@/assets/shiping.jpg"; // Use existing image or import a new one

// Images for each benefit card
const benefitImages = {
  "High Profit Margins": highProfitImg,
  "Free Pan India Shipping": freeShippingImg,
  "Zero Inventory Risk": zeroInventoryImg,
  "100% Quality Guarantee": qualityGuaranteeImg,
  "24/7 Dealer Support": dealerSupportImg,
  "Marketing Support": marketingSupportImg,
  "Reliable Supply Chain": reliableSupplyImg, // Added missing entry
};

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "High Profit Margins",
    shortDesc: "Industry-leading 25-35% margins",
    description: "Enjoy maximum returns on every sale. Our competitive wholesale pricing ensures you get the best profit margins in the industry.",
    features: ["25-35% Margins", "Volume Discounts", "Seasonal Offers"],
    image: benefitImages["High Profit Margins"],
    stat: "35% Margin"
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    shortDesc: "Consistent sourcing and timely dispatch",
    description: "Our strong network of Tea gardens and logistics partners ensures uninterrupted supply, timely deliveries, and consistent product availability throughout the year.",
    features: ["Multiple Tea Gardens", "Timely Dispatch", "Year-Round Supply"],
    image: benefitImages["Reliable Supply Chain"],
    stat: "Strong Network"
  },
  {
    icon: Package,
    title: "Zero Inventory Risk",
    shortDesc: "No minimum stock commitment",
    description: "Benefit from flexible order quantities, consistent tea availability, and a dependable supply chain tailored to your business needs.",
    features: ["Flexible Ordering", "Easy Returns", "No Stock Pressure"],
    image: benefitImages["Zero Inventory Risk"],
    stat: "Risk Free"
  },
  {
    icon: Shield,
    title: "100% Quality Guarantee",
    shortDesc: "FSSAI certified premium quality",
    description: "Every batch undergoes strict quality control. Consistent taste and quality across all shipments guaranteed.",
    features: ["FSSAI Certified", "Quality Testing", "Consistent Taste"],
    image: benefitImages["100% Quality Guarantee"],
    stat: "Certified"
  },
  {
    icon: Headphones,
    title: "24/7 Dealer Support",
    shortDesc: "Dedicated relationship manager",
    description: "Quick response and after-sales support. Your dedicated manager ensures smooth operations always.",
    features: ["Dedicated Manager", "Quick Response", "24/7 Support"],
    image: benefitImages["24/7 Dealer Support"],
    stat: "Always Here"
  },
  {
    icon: TrendingUp,
    title: "Marketing Support",
    shortDesc: "Free branding & promotional materials",
 description: "Complete marketing support including product samples, promotional offers, and dealer growth assistance.",
    features: [ "Free Samples", "Promotional Offers"],
    image: benefitImages["Marketing Support"],
    stat: "Full Support"
  }
];

export function DealerBenefitsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="dealers" className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-16 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

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
            <Zap className="w-3 h-3 text-gold" />
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Exclusive Benefits</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
            Why Partner With{' '}
            <span className="relative whitespace-nowrap">
              <span className="italic text-gold">R K Tea?</span>
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
          
          <p className="text-cream/70 text-base md:text-lg">
            Join 250+ successful dealers and unlock exclusive benefits with India's most trusted Tea exporter
          </p>
        </motion.div>

        {/* Main Benefits Grid - Clear Images Before Hover */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative h-[360px] rounded-xl overflow-hidden cursor-pointer shadow-lg"
              >
                {/* Background Image - Always Visible and Clear */}
                <div className="absolute inset-0">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Lighter gradient so image is more visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/50 to-forest-deep/20" />
                </div>

                {/* Content - Drawer slides up from bottom */}
                <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-end">
                  {/* Always Visible Content - Top section with better transparency */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="text-cream font-display font-bold text-xl drop-shadow-md">{benefit.title}</h3>
                          <p className="text-cream/80 text-sm mt-0.5 drop-shadow-sm">{benefit.shortDesc}</p>
                        </div>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-gold text-forest-deep text-xs font-bold shadow-lg">
                        {benefit.stat}
                      </div>
                    </div>
                  </div>

                  {/* Drawer Content - Slides up on hover with solid background */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 bg-gradient-to-t from-forest-deep via-forest-deep/95 to-transparent">
                      <p className="text-cream/90 text-sm leading-relaxed mb-3">
                        {benefit.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {benefit.features.map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 rounded-full bg-cream/15 text-cream/80 text-xs backdrop-blur-sm">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-gold text-sm font-medium hover:gap-2 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Top Glow on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 py-6 border-t border-b border-gold/20 mb-12"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold">250+</div>
            <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Active Dealers</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
              <Globe className="w-6 h-6 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold">200+</div>
            <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold">₹100Cr+</div>
            <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Annual Revenue</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
              <Heart className="w-6 h-6 text-gold" />
            </div>
            <div className="text-3xl font-bold text-gold">98%</div>
            <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Renewal Rate</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gold/10 to-amber-500/10 rounded-xl p-6 border border-gold/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h3 className="text-cream text-2xl font-display mb-1">Ready to Grow Together?</h3>
                <p className="text-cream/50 text-sm">Join 250+ successful dealers across India</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-forest-deep font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 text-sm"
                >
                  Apply for Dealership
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#catalogue"
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-gold/30 text-gold rounded-lg hover:bg-gold/10 transition-all duration-300 text-sm"
                >
                  Download Brochure
                  <Heart className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}