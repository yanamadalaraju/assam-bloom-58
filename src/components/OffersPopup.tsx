// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Sparkles, Gift, Truck, Percent, Clock, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

// // Import images for carousel
// import TeaHarvestImg from "@/assets/product1.png";
// import TeaCupImg from "@/assets/product2.png";
// import TeaExportImg from "@/assets/product3.png";

// const offers = [
//   { icon: Percent, title: "25% Off", text: "First order 100kg+", color: "from-amber-500 to-orange-500" },
//   { icon: Truck, title: "Free Shipping", text: "Orders 500kg+", color: "from-emerald-500 to-Teal-500" },
//   { icon: Gift, title: "Free Sample", text: "With every quote", color: "from-purple-500 to-pink-500" },
// ];

// const carouselImages = [
//   { src: TeaHarvestImg, alt: "Tea Harvesting", title: "Fresh Gardens" },
//   { src: TeaCupImg, alt: "Premium Tea", title: "Premium Tea" },
//   { src: TeaExportImg, alt: "Global Export", title: "Worldwide" },
// ];

// export function OffersPopup() {
//   const [open, setOpen] = useState(false);
//   const [shown, setShown] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!shown) {
//         setOpen(true);
//         setShown(true);
//       }
//     }, 3000);

//     const onScroll = () => {
//       if (shown) return;
//       const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
//       if (ratio > 0.35) {
//         setOpen(true);
//         setShown(true);
//       }
//     };
    
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, [shown]);

//   // Auto-slide effect
//   useEffect(() => {
//     if (!open || !isAutoPlaying) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 4000);
    
//     return () => clearInterval(interval);
//   }, [open, isAutoPlaying]);

//   const nextSlide = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   const prevSlide = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//           onClick={() => setOpen(false)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.95, y: 10, opacity: 0 }}
//             transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//             onClick={(e) => e.stopPropagation()}
//             className="relative w-full max-w-2xl overflow-hidden rounded-xl shadow-2xl"
//           >
//             {/* Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
            
//             {/* Decorative Elements */}
//             <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
//             <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
            
//             {/* Close Button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-2 right-2 z-20 h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 text-cream/60 hover:text-gold transition-all flex items-center justify-center backdrop-blur-sm"
//               aria-label="Close"
//             >
//               <X className="h-3.5 w-3.5" />
//             </button>

//             <div className="relative grid md:grid-cols-2">
//               {/* Left Side - Image Carousel */}
//               <div className="relative h-48 md:h-auto overflow-hidden bg-gradient-to-br from-forest to-forest-deep">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentSlide}
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     transition={{ duration: 0.5 }}
//                     className="absolute inset-0"
//                   >
//                     <img
//                       src={carouselImages[currentSlide].src}
//                       alt={carouselImages[currentSlide].alt}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                   </motion.div>
//                 </AnimatePresence>

//                 {/* Image Overlay Content */}
//                 <div className="absolute bottom-2 left-2 right-2 z-10">
//                   <div className="bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
//                     <p className="text-cream text-xs font-medium">
//                       {carouselImages[currentSlide].title}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Carousel Navigation */}
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
//                 >
//                   <ChevronLeft className="h-3 w-3" />
//                 </button>
                
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
//                 >
//                   <ChevronRight className="h-3 w-3" />
//                 </button>

//                 {/* Dots Indicator */}
//                 <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
//                   {carouselImages.map((_, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => {
//                         setIsAutoPlaying(false);
//                         setCurrentSlide(idx);
//                         setTimeout(() => setIsAutoPlaying(true), 5000);
//                       }}
//                       className={`h-1 rounded-full transition-all duration-300 ${
//                         currentSlide === idx
//                           ? "w-3 bg-gold"
//                           : "w-1 bg-white/50 hover:bg-white/80"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Right Side - Offers Content */}
//               <div className="relative p-4">
//                 {/* Icon with Animation */}
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   animate={{ scale: 1, rotate: 0 }}
//                   transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 200 }}
//                   className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-gold to-amber-500 mb-3 shadow-md"
//                 >
//                   <Sparkles className="h-5 w-5 text-forest-deep" strokeWidth={1.8} />
//                 </motion.div>

//                 {/* Badge */}
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="h-px w-6 bg-gold/60" />
//                   <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Limited</span>
//                   <span className="h-px w-6 bg-gold/60" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="font-display text-xl text-cream leading-tight mb-1.5">
//                   Special{' '}
//                   <span className="bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                     Offers
//                   </span>
//                 </h3>
                
//                 <p className="text-cream/60 text-sm mb-3">
//                   For bulk buyers
//                 </p>

//                 {/* Offers Grid */}
//                 <div className="space-y-2 mb-3">
//                   {offers.map((o, i) => (
//                     <motion.div
//                       key={o.title}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + i * 0.08 }}
//                       className="flex items-center gap-2.5 rounded-lg bg-white/5 backdrop-blur-sm p-2 border border-white/10 hover:border-gold/30 transition-all duration-300 group"
//                     >
//                       <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r ${o.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
//                         <o.icon className="h-4 w-4 text-white" strokeWidth={1.5} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="font-display text-cream text-sm font-semibold">{o.title}</div>
//                         <div className="text-cream/50 text-xs">{o.text}</div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Timer Badge */}
//                 <div className="flex items-center justify-center gap-1.5 mb-3 py-1.5 bg-white/5 rounded-lg">
//                   <Clock className="w-3.5 h-3.5 text-gold" />
//                   <span className="text-cream/60 text-xs uppercase tracking-wider">Ends in 7d</span>
//                   <Star className="w-3 h-3 text-gold fill-gold" />
//                 </div>

//                 {/* CTA Buttons */}
//                 <div className="space-y-1">
//                   <a
//                     href="#contact"
//                     onClick={() => setOpen(false)}
//                     className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-3 py-2 text-sm font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
//                   >
//                     Claim Offer
//                     <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//                   </a>
                  
//                   <button
//                     onClick={() => setOpen(false)}
//                     className="w-full text-center text-cream/40 hover:text-cream/60 text-[10px] uppercase tracking-wider transition-colors py-1"
//                   >
//                     Maybe later
//                   </button>
//                 </div>

//                 {/* Trust Badge */}
//                 <div className="mt-2 pt-1.5 border-t border-white/10">
//                   <p className="text-cream/30 text-[8px] text-center uppercase tracking-wider">
//                     No credit card •  
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }





// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   X, 
//   Sparkles, 
//   Gift, 
//   Truck, 
//   Percent, 
//   Clock, 
//   ArrowRight, 
//   ChevronLeft, 
//   ChevronRight, 
//   Star,
//   Users,
//   Share2,
//   Award,
//   Crown,
//   Package,
//   Heart,
//   PartyPopper,
//   GiftIcon,
//   ShoppingBag,
//   Zap,
//   ChevronDown,
//   CheckCircle,
//   Copy,
//   Mail,
//   MessageCircle
// } from "lucide-react";

// // Import images for carousel
// import TeaHarvestImg from "@/assets/product1.png";
// import TeaCupImg from "@/assets/product2.png";
// import TeaExportImg from "@/assets/product3.png";
// import giftSetImg from "@/assets/hero-1.jpg";
// import giftSet2Img from "@/assets/hero-2.jpg";
// import giftSet3Img from "@/assets/hero-3.jpg";

// const offers = [
//   { icon: Percent, title: "25% Off", text: "First order 100kg+", color: "from-amber-500 to-orange-500" },
//   { icon: Truck, title: "Free Shipping", text: "Orders 500kg+", color: "from-emerald-500 to-Teal-500" },
//   { icon: Gift, title: "Free Sample", text: "With every quote", color: "from-purple-500 to-pink-500" },
// ];

// const carouselImages = [
//   { src: TeaHarvestImg, alt: "Tea Harvesting", title: "Fresh Gardens" },
//   { src: TeaCupImg, alt: "Premium Tea", title: "Premium Tea" },
//   { src: TeaExportImg, alt: "Global Export", title: "Worldwide" },
// ];

// // Gift Sets Data
// const giftSets = [
//   {
//     id: 1,
//     name: "Premium Gift Box",
//     price: "₹999",
//     description: "A curated collection of 3 premium Assam Teas in an elegant gift box. Perfect for Tea connoisseurs.",
//     image: giftSetImg,
//     items: ["Royal Assam Tea 100g", "Premium CTC 100g", "Green Tea 100g"],
//     category: "Premium",
//     popular: true
//   },
//   {
//     id: 2,
//     name: "Festival Hamper",
//     price: "₹1,499",
//     description: "The ultimate festive gift with 5 premium Teas, a Tea infuser, and a traditional Assamese gamosa.",
//     image: giftSet2Img,
//     items: ["Assam Gold 100g", "Masala Chai 100g", "Earl Grey 100g", "Green Tea 100g", "Tea Infuser"],
//     category: "Festival",
//     popular: false
//   },
//   {
//     id: 3,
//     name: "Corporate Gift Set",
//     price: "₹2,499",
//     description: "Premium corporate gifting solution with custom branding and personalized packaging.",
//     image: giftSet3Img,
//     items: ["Custom Blend 200g", "Personalized Packaging", "Branded Tea Infuser", "Gift Note"],
//     category: "Corporate",
//     popular: false
//   },
// ];

// // Referral Program Data
// const referralTiers = [
//   { level: "Bronze", referrals: 1, reward: "10% off", icon: Award },
//   { level: "Silver", referrals: 5, reward: "15% off + Gift", icon: Crown },
//   { level: "Gold", referrals: 10, reward: "25% off + Hamper", icon: Star },
//   { level: "Platinum", referrals: 25, reward: "35% off + Premium Set", icon: Sparkles },
// ];

// export function OffersPopup() {
//   const [open, setOpen] = useState(false);
//   const [shown, setShown] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [activeTab, setActiveTab] = useState<'offers' | 'gifts' | 'referral'>('offers');
//   const [copied, setCopied] = useState(false);
//   const [referralLink] = useState("https://rkTeasales.com/ref/INVITE123");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!shown) {
//         setOpen(true);
//         setShown(true);
//       }
//     }, 3000);

//     const onScroll = () => {
//       if (shown) return;
//       const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
//       if (ratio > 0.35) {
//         setOpen(true);
//         setShown(true);
//       }
//     };
    
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, [shown]);

//   useEffect(() => {
//     if (!open || !isAutoPlaying || activeTab !== 'offers') return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 4000);
    
//     return () => clearInterval(interval);
//   }, [open, isAutoPlaying, activeTab]);

//   const nextSlide = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   const prevSlide = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   const copyReferralLink = () => {
//     navigator.clipboard.writeText(referralLink);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//           onClick={() => setOpen(false)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.95, y: 10, opacity: 0 }}
//             transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//             onClick={(e) => e.stopPropagation()}
//             className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl bg-gradient-to-br from-forest-deep via-forest to-forest-deep"
//           >
//             {/* Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
            
//             {/* Decorative Elements */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
            
//             {/* Close Button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-2 right-2 z-20 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-cream/60 hover:text-gold transition-all flex items-center justify-center backdrop-blur-sm"
//               aria-label="Close"
//             >
//               <X className="h-4 w-4" />
//             </button>

//             <div className="relative p-6">
//               {/* Header with Tabs */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <button
//                   onClick={() => setActiveTab('offers')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'offers'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Percent className="w-4 h-4" />
//                   Special Offers
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('gifts')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'gifts'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Gift className="w-4 h-4" />
//                   Gift Sets
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('referral')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'referral'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Users className="w-4 h-4" />
//                   Referral Program
//                 </button>
//               </div>

//               {/* Tab Content */}
//               {activeTab === 'offers' && (
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {/* Left Side - Image Carousel */}
//                   <div className="relative h-56 md:h-auto overflow-hidden rounded-lg bg-gradient-to-br from-forest to-forest-deep">
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={currentSlide}
//                         initial={{ opacity: 0, scale: 1.1 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.5 }}
//                         className="absolute inset-0"
//                       >
//                         <img
//                           src={carouselImages[currentSlide].src}
//                           alt={carouselImages[currentSlide].alt}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                       </motion.div>
//                     </AnimatePresence>

//                     <div className="absolute bottom-2 left-2 right-2 z-10">
//                       <div className="bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
//                         <p className="text-cream text-xs font-medium">
//                           {carouselImages[currentSlide].title}
//                         </p>
//                       </div>
//                     </div>

//                     <button
//                       onClick={prevSlide}
//                       className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
//                     >
//                       <ChevronLeft className="h-3 w-3" />
//                     </button>
                    
//                     <button
//                       onClick={nextSlide}
//                       className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
//                     >
//                       <ChevronRight className="h-3 w-3" />
//                     </button>

//                     <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
//                       {carouselImages.map((_, idx) => (
//                         <button
//                           key={idx}
//                           onClick={() => {
//                             setIsAutoPlaying(false);
//                             setCurrentSlide(idx);
//                             setTimeout(() => setIsAutoPlaying(true), 5000);
//                           }}
//                           className={`h-1 rounded-full transition-all duration-300 ${
//                             currentSlide === idx
//                               ? "w-3 bg-gold"
//                               : "w-1 bg-white/50 hover:bg-white/80"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   </div>

//                   {/* Right Side - Offers Content */}
//                   <div className="relative">
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className="h-px w-6 bg-gold/60" />
//                       <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Limited</span>
//                       <span className="h-px w-6 bg-gold/60" />
//                     </div>

//                     <h3 className="font-display text-2xl text-cream leading-tight mb-1">
//                       Special{' '}
//                       <span className="bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                         Offers
//                       </span>
//                     </h3>
                    
//                     <p className="text-cream/60 text-sm mb-4">For bulk buyers</p>

//                     <div className="space-y-2.5 mb-4">
//                       {offers.map((o, i) => (
//                         <motion.div
//                           key={o.title}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.3 + i * 0.08 }}
//                           className="flex items-center gap-3 rounded-lg bg-white/5 backdrop-blur-sm p-3 border border-white/10 hover:border-gold/30 transition-all duration-300 group"
//                         >
//                           <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${o.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
//                             <o.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
//                           </div>
//                           <div className="flex-1">
//                             <div className="font-display text-cream font-semibold">{o.title}</div>
//                             <div className="text-cream/50 text-xs">{o.text}</div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>

//                     <div className="flex items-center justify-center gap-1.5 mb-3 py-1.5 bg-white/5 rounded-lg">
//                       <Clock className="w-3.5 h-3.5 text-gold" />
//                       <span className="text-cream/60 text-xs uppercase tracking-wider">Ends in 7d</span>
//                       <Star className="w-3 h-3 text-gold fill-gold" />
//                     </div>

//                     <a
//                       href="#contact"
//                       onClick={() => setOpen(false)}
//                       className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-4 py-2.5 text-sm font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
//                     >
//                       Claim Offer
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               )}

//               {/* Gift Sets Tab */}
//               {activeTab === 'gifts' && (
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <Gift className="w-5 h-5 text-gold" />
//                     <h3 className="font-display text-xl text-cream">
//                       Premium <span className="text-gold">Gift Sets</span>
//                     </h3>
//                     <span className="text-cream/40 text-xs ml-auto">Perfect for all occasions</span>
//                   </div>

//                   <div className="grid md:grid-cols-3 gap-4">
//                     {giftSets.map((gift, index) => (
//                       <motion.div
//                         key={gift.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-500"
//                       >
//                         <div className="relative h-40 overflow-hidden">
//                           <img
//                             src={gift.image}
//                             alt={gift.name}
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                           {gift.popular && (
//                             <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-gold text-forest-deep text-[8px] font-bold uppercase tracking-wider">
//                               Popular
//                             </div>
//                           )}
//                           <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-cream/80 text-[8px] uppercase tracking-wider">
//                             {gift.category}
//                           </div>
//                         </div>
                        
//                         <div className="p-4">
//                           <h4 className="font-display text-cream text-base group-hover:text-gold transition-colors">
//                             {gift.name}
//                           </h4>
//                           <p className="text-cream/50 text-xs mt-1 line-clamp-2">{gift.description}</p>
//                           <div className="flex flex-wrap gap-1 mt-2">
//                             {gift.items.slice(0, 3).map((item, idx) => (
//                               <span key={idx} className="text-[8px] px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                                 {item}
//                               </span>
//                             ))}
//                             {gift.items.length > 3 && (
//                               <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                                 +{gift.items.length - 3}
//                               </span>
//                             )}
//                           </div>
//                           <div className="flex items-center justify-between mt-3 pt-2 border-t border-gold/20">
//                             <span className="font-display text-gold font-bold text-lg">{gift.price}</span>
//                             <a
//                               href="#contact"
//                               onClick={() => setOpen(false)}
//                               className="inline-flex items-center gap-1 text-gold text-xs font-medium hover:gap-2 transition-all duration-300"
//                             >
//                               Order Now <ArrowRight className="w-3 h-3" />
//                             </a>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>

//                   <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
//                     <p className="text-cream/60 text-xs">
//                       🎁 Custom corporate gifting available. <a href="#contact" className="text-gold hover:underline">Contact us</a> for bulk orders.
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Referral Program Tab */}
//               {activeTab === 'referral' && (
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <Users className="w-5 h-5 text-gold" />
//                     <h3 className="font-display text-xl text-cream">
//                       Refer & <span className="text-gold">Earn</span>
//                     </h3>
//                     <span className="text-cream/40 text-xs ml-auto">Share the love of Tea</span>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     {/* Left - Referral Info */}
//                     <div>
//                       <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
//                         <div className="flex items-center gap-2 mb-3">
//                           <GiftIcon className="w-5 h-5 text-gold" />
//                           <h4 className="text-cream font-display">How It Works</h4>
//                         </div>
//                         <ol className="space-y-3 text-sm">
//                           <li className="flex items-start gap-3 text-cream/70">
//                             <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0 font-bold">1</span>
//                             <span>Share your unique referral link with friends & family</span>
//                           </li>
//                           <li className="flex items-start gap-3 text-cream/70">
//                             <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0 font-bold">2</span>
//                             <span>They get <span className="text-gold font-semibold">15% off</span> their first order</span>
//                           </li>
//                           <li className="flex items-start gap-3 text-cream/70">
//                             <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0 font-bold">3</span>
//                             <span>You earn rewards for every successful referral</span>
//                           </li>
//                         </ol>
//                       </div>

//                       {/* Share Buttons */}
//                       <div className="mt-3 flex flex-wrap gap-2">
//                         <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-white text-xs font-medium hover:opacity-90 transition-opacity">
//                           <MessageCircle className="w-3.5 h-3.5" />
//                           WhatsApp
//                         </button>
//                         <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#1DA1F2] text-white text-xs font-medium hover:opacity-90 transition-opacity">
//                           <Share2 className="w-3.5 h-3.5" />
//                           Twitter
//                         </button>
//                         <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#1877F2] text-white text-xs font-medium hover:opacity-90 transition-opacity">
//                           <Users className="w-3.5 h-3.5" />
//                           Facebook
//                         </button>
//                       </div>
//                     </div>

//                     {/* Right - Referral Link & Tiers */}
//                     <div>
//                       <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20 mb-3">
//                         <label className="text-cream/50 text-xs uppercase tracking-wider block mb-2">
//                           Your Referral Link
//                         </label>
//                         <div className="flex items-center gap-2">
//                           <input
//                             type="text"
//                             value={referralLink}
//                             readOnly
//                             className="flex-1 bg-transparent border border-gold/30 rounded-lg px-3 py-2 text-cream text-sm focus:border-gold outline-none"
//                           />
//                           <button
//                             onClick={copyReferralLink}
//                             className="p-2 rounded-lg bg-gold/20 hover:bg-gold/30 text-gold transition-colors"
//                           >
//                             {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
//                           </button>
//                         </div>
//                         {copied && (
//                           <p className="text-green-400 text-xs mt-1">✓ Copied to clipboard!</p>
//                         )}
//                       </div>

//                       {/* Reward Tiers */}
//                       <div className="grid grid-cols-2 gap-2">
//                         {referralTiers.map((tier, idx) => {
//                           const Icon = tier.icon;
//                           return (
//                             <motion.div
//                               key={tier.level}
//                               initial={{ opacity: 0, scale: 0.9 }}
//                               animate={{ opacity: 1, scale: 1 }}
//                               transition={{ delay: idx * 0.05 }}
//                               className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300"
//                             >
//                               <div className="w-8 h-8 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-1">
//                                 <Icon className="w-4 h-4 text-gold" />
//                               </div>
//                               <p className="text-cream font-semibold text-sm">{tier.level}</p>
//                               <p className="text-cream/40 text-[10px]">{tier.referrals} referrals</p>
//                               <p className="text-gold text-xs font-medium">{tier.reward}</p>
//                             </motion.div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-3 p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
//                     <p className="text-cream/60 text-xs">
//                       ⭐ Earn up to <span className="text-gold font-semibold">35% off</span> + premium gift sets. Share the joy of authentic Assam Tea!
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Bottom Action */}
//               <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-between">
//                 <p className="text-cream/30 text-[8px] uppercase tracking-wider">
//                   No credit card required •  
//                 </p>
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="text-cream/40 hover:text-cream/60 text-[10px] uppercase tracking-wider transition-colors"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }





// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   X, 
//   Sparkles, 
//   Gift, 
//   Truck, 
//   Percent, 
//   Clock, 
//   ArrowRight, 
//   ChevronLeft, 
//   ChevronRight, 
//   Star,
//   Users,
//   Share2,
//   Award,
//   Crown,
//   Package,
//   Heart,
//   PartyPopper,
//   GiftIcon,
//   ShoppingBag,
//   Zap,
//   ChevronDown,
//   CheckCircle,
//   Copy,
//   Mail,
//   MessageCircle,
//   Coins,
//   Gem,
//   BadgeCheck,
//   Trophy,
//   TrendingUp,
//   Coffee
// } from "lucide-react";

// // Import images for carousel
// import TeaHarvestImg from "@/assets/product1.png";
// import TeaCupImg from "@/assets/product2.png";
// import TeaExportImg from "@/assets/product3.png";
// import giftSetImg from "@/assets/hero-1.jpg";
// import giftSet2Img from "@/assets/hero-2.jpg";
// import giftSet3Img from "@/assets/hero-3.jpg";

// const offers = [
//   { icon: Percent, title: "25% Off", text: "First order 100kg+", color: "from-amber-500 to-orange-500" },
//   { icon: Coins, title: "Double Coins", text: "On all orders this week", color: "from-yellow-500 to-amber-500" },
//   { icon: Gift, title: "Free Sample Pack", text: "With every order above ₹5000", color: "from-purple-500 to-pink-500" },
// ];

// const carouselImages = [
//   { src: TeaHarvestImg, alt: "Tea Harvesting", title: "Fresh Gardens" },
//   { src: TeaCupImg, alt: "Premium Tea", title: "Premium Tea" },
//   { src: TeaExportImg, alt: "Global Export", title: "Worldwide" },
// ];

// // Gift Sets Data
// const giftSets = [
//   {
//     id: 1,
//     name: "Premium Gift Box",
//     price: "₹999",
//     description: "A curated collection of 3 premium Assam Teas in an elegant gift box. Perfect for Tea connoisseurs.",
//     image: giftSetImg,
//     items: ["Royal Assam Tea 100g", "Premium CTC 100g", "Green Tea 100g"],
//     category: "Premium",
//     popular: true
//   },
//   {
//     id: 2,
//     name: "Festival Hamper",
//     price: "₹1,499",
//     description: "The ultimate festive gift with 5 premium Teas, a Tea infuser, and a traditional Assamese gamosa.",
//     image: giftSet2Img,
//     items: ["Assam Gold 100g", "Masala Chai 100g", "Earl Grey 100g", "Green Tea 100g", "Tea Infuser"],
//     category: "Festival",
//     popular: false
//   },
//   {
//     id: 3,
//     name: "Corporate Gift Set",
//     price: "₹2,499",
//     description: "Premium corporate gifting solution with custom branding and personalized packaging.",
//     image: giftSet3Img,
//     items: ["Custom Blend 200g", "Personalized Packaging", "Branded Tea Infuser", "Gift Note"],
//     category: "Corporate",
//     popular: false
//   },
// ];

// // Referral Program Data
// const referralTiers = [
//   { level: "Bronze", referrals: 1, reward: "10% off", icon: Award },
//   { level: "Silver", referrals: 5, reward: "15% off + Gift", icon: Crown },
//   { level: "Gold", referrals: 10, reward: "25% off + Hamper", icon: Star },
//   { level: "Platinum", referrals: 25, reward: "35% off + Premium Set", icon: Sparkles },
// ];

// // Loyalty Program Data
// const loyaltyTiers = [
//   { 
//     name: "Tea Enthusiast", 
//     points: "0-500", 
//     benefits: ["5% off on orders", "Free shipping on ₹5000+", "Birthday gift"], 
//     icon: Coffee,
//     color: "from-green-500/20 to-emerald-500/10"
//   },
//   { 
//     name: "Tea Connoisseur", 
//     points: "501-2000", 
//     benefits: ["10% off on orders", "Free shipping on ₹3000+", "Birthday gift", "Early access to new blends"], 
//     icon: Gem,
//     color: "from-blue-500/20 to-cyan-500/10"
//   },
//   { 
//     name: "Tea Royalty", 
//     points: "2001-5000", 
//     benefits: ["15% off on orders", "Free shipping on all orders", "Birthday gift + premium hamper", "Exclusive tasting events", "Priority support"], 
//     icon: Crown,
//     color: "from-purple-500/20 to-pink-500/10"
//   },
//   { 
//     name: "Tea Legend", 
//     points: "5000+", 
//     benefits: ["25% off on orders", "Free shipping on all orders", "Annual premium gift set", "Personal Tea sommelier", "Custom blend creation", "VIP event invitations"], 
//     icon: Trophy,
//     color: "from-gold/30 to-amber-500/20"
//   },
// ];

// export function OffersPopup() {
//   const [open, setOpen] = useState(false);
//   const [shown, setShown] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [activeTab, setActiveTab] = useState<'offers' | 'gifts' | 'referral' | 'loyalty'>('offers');
//   const [copied, setCopied] = useState(false);
//   const [referralLink] = useState("https://rkTeasales.com/ref/INVITE123");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!shown) {
//         setOpen(true);
//         setShown(true);
//       }
//     }, 3000);

//     const onScroll = () => {
//       if (shown) return;
//       const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
//       if (ratio > 0.35) {
//         setOpen(true);
//         setShown(true);
//       }
//     };
    
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, [shown]);

//   useEffect(() => {
//     if (!open || !isAutoPlaying || activeTab !== 'offers') return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 4000);
    
//     return () => clearInterval(interval);
//   }, [open, isAutoPlaying, activeTab]);

//   const nextSlide = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   const prevSlide = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   const copyReferralLink = () => {
//     navigator.clipboard.writeText(referralLink);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//           onClick={() => setOpen(false)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.95, y: 10, opacity: 0 }}
//             transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//             onClick={(e) => e.stopPropagation()}
//             className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl bg-gradient-to-br from-forest-deep via-forest to-forest-deep"
//           >
//             {/* Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
            
//             {/* Decorative Elements */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
            
//             {/* Close Button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-2 right-2 z-20 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-cream/60 hover:text-gold transition-all flex items-center justify-center backdrop-blur-sm"
//               aria-label="Close"
//             >
//               <X className="h-4 w-4" />
//             </button>

//             <div className="relative p-6">
//               {/* Header with Tabs */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <button
//                   onClick={() => setActiveTab('offers')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'offers'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Percent className="w-4 h-4" />
//                   Special Offers
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('gifts')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'gifts'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Gift className="w-4 h-4" />
//                   Gift Sets
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('referral')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'referral'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Share2 className="w-4 h-4" />
//                   Refer & Earn
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('loyalty')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'loyalty'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Trophy className="w-4 h-4" />
//                   Loyalty Rewards
//                 </button>
//               </div>

//               {/* Tab Content */}
//               {activeTab === 'offers' && (
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {/* Left Side - Image Carousel */}
//                   <div className="relative h-56 md:h-auto overflow-hidden rounded-lg bg-gradient-to-br from-forest to-forest-deep">
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={currentSlide}
//                         initial={{ opacity: 0, scale: 1.1 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.5 }}
//                         className="absolute inset-0"
//                       >
//                         <img
//                           src={carouselImages[currentSlide].src}
//                           alt={carouselImages[currentSlide].alt}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                       </motion.div>
//                     </AnimatePresence>

//                     <div className="absolute bottom-2 left-2 right-2 z-10">
//                       <div className="bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
//                         <p className="text-cream text-xs font-medium">
//                           {carouselImages[currentSlide].title}
//                         </p>
//                       </div>
//                     </div>

//                     <button
//                       onClick={prevSlide}
//                       className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
//                     >
//                       <ChevronLeft className="h-3 w-3" />
//                     </button>
                    
//                     <button
//                       onClick={nextSlide}
//                       className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
//                     >
//                       <ChevronRight className="h-3 w-3" />
//                     </button>

//                     <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
//                       {carouselImages.map((_, idx) => (
//                         <button
//                           key={idx}
//                           onClick={() => {
//                             setIsAutoPlaying(false);
//                             setCurrentSlide(idx);
//                             setTimeout(() => setIsAutoPlaying(true), 5000);
//                           }}
//                           className={`h-1 rounded-full transition-all duration-300 ${
//                             currentSlide === idx
//                               ? "w-3 bg-gold"
//                               : "w-1 bg-white/50 hover:bg-white/80"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   </div>

//                   {/* Right Side - Offers Content */}
//                   <div className="relative">
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className="h-px w-6 bg-gold/60" />
//                       <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Limited</span>
//                       <span className="h-px w-6 bg-gold/60" />
//                     </div>

//                     <h3 className="font-display text-2xl text-cream leading-tight mb-1">
//                       Special{' '}
//                       <span className="bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                         Offers
//                       </span>
//                     </h3>
                    
//                     <p className="text-cream/60 text-sm mb-4">For bulk buyers</p>

//                     <div className="space-y-2.5 mb-4">
//                       {offers.map((o, i) => (
//                         <motion.div
//                           key={o.title}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.3 + i * 0.08 }}
//                           className="flex items-center gap-3 rounded-lg bg-white/5 backdrop-blur-sm p-3 border border-white/10 hover:border-gold/30 transition-all duration-300 group"
//                         >
//                           <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${o.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
//                             <o.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
//                           </div>
//                           <div className="flex-1">
//                             <div className="font-display text-cream font-semibold">{o.title}</div>
//                             <div className="text-cream/50 text-xs">{o.text}</div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>

//                     <div className="flex items-center justify-center gap-1.5 mb-3 py-1.5 bg-white/5 rounded-lg">
//                       <Clock className="w-3.5 h-3.5 text-gold" />
//                       <span className="text-cream/60 text-xs uppercase tracking-wider">Ends in 7d</span>
//                       <Star className="w-3 h-3 text-gold fill-gold" />
//                     </div>

//                     <a
//                       href="#contact"
//                       onClick={() => setOpen(false)}
//                       className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-4 py-2.5 text-sm font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
//                     >
//                       Claim Offer
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               )}

//               {/* Gift Sets Tab */}
//               {activeTab === 'gifts' && (
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <Gift className="w-5 h-5 text-gold" />
//                     <h3 className="font-display text-xl text-cream">
//                       Premium <span className="text-gold">Gift Sets</span>
//                     </h3>
//                     <span className="text-cream/40 text-xs ml-auto">Perfect for all occasions</span>
//                   </div>

//                   <div className="grid md:grid-cols-3 gap-4">
//                     {giftSets.map((gift, index) => (
//                       <motion.div
//                         key={gift.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-500"
//                       >
//                         <div className="relative h-40 overflow-hidden">
//                           <img
//                             src={gift.image}
//                             alt={gift.name}
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                           {gift.popular && (
//                             <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-gold text-forest-deep text-[8px] font-bold uppercase tracking-wider">
//                               Popular
//                             </div>
//                           )}
//                           <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-cream/80 text-[8px] uppercase tracking-wider">
//                             {gift.category}
//                           </div>
//                         </div>
                        
//                         <div className="p-4">
//                           <h4 className="font-display text-cream text-base group-hover:text-gold transition-colors">
//                             {gift.name}
//                           </h4>
//                           <p className="text-cream/50 text-xs mt-1 line-clamp-2">{gift.description}</p>
//                           <div className="flex flex-wrap gap-1 mt-2">
//                             {gift.items.slice(0, 3).map((item, idx) => (
//                               <span key={idx} className="text-[8px] px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                                 {item}
//                               </span>
//                             ))}
//                             {gift.items.length > 3 && (
//                               <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                                 +{gift.items.length - 3}
//                               </span>
//                             )}
//                           </div>
//                           <div className="flex items-center justify-between mt-3 pt-2 border-t border-gold/20">
//                             <span className="font-display text-gold font-bold text-lg">{gift.price}</span>
//                             <a
//                               href="#contact"
//                               onClick={() => setOpen(false)}
//                               className="inline-flex items-center gap-1 text-gold text-xs font-medium hover:gap-2 transition-all duration-300"
//                             >
//                               Order Now <ArrowRight className="w-3 h-3" />
//                             </a>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>

//                   <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
//                     <p className="text-cream/60 text-xs">
//                       🎁 Custom corporate gifting available. <a href="#contact" className="text-gold hover:underline">Contact us</a> for bulk orders.
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Referral Program Tab */}
//               {activeTab === 'referral' && (
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <Users className="w-5 h-5 text-gold" />
//                     <h3 className="font-display text-xl text-cream">
//                       Refer & <span className="text-gold">Earn</span>
//                     </h3>
//                     <span className="text-cream/40 text-xs ml-auto">Share the love of Tea</span>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     {/* Left - Referral Info */}
//                     <div>
//                       <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
//                         <div className="flex items-center gap-2 mb-3">
//                           <GiftIcon className="w-5 h-5 text-gold" />
//                           <h4 className="text-cream font-display">How It Works</h4>
//                         </div>
//                         <ol className="space-y-3 text-sm">
//                           <li className="flex items-start gap-3 text-cream/70">
//                             <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0 font-bold">1</span>
//                             <span>Share your unique referral link with friends & family</span>
//                           </li>
//                           <li className="flex items-start gap-3 text-cream/70">
//                             <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0 font-bold">2</span>
//                             <span>They get <span className="text-gold font-semibold">15% off</span> their first order</span>
//                           </li>
//                           <li className="flex items-start gap-3 text-cream/70">
//                             <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0 font-bold">3</span>
//                             <span>You earn rewards for every successful referral</span>
//                           </li>
//                         </ol>
//                       </div>

//                       {/* Share Buttons */}
//                       <div className="mt-3 flex flex-wrap gap-2">
//                         <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-white text-xs font-medium hover:opacity-90 transition-opacity">
//                           <MessageCircle className="w-3.5 h-3.5" />
//                           WhatsApp
//                         </button>
//                         <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#1DA1F2] text-white text-xs font-medium hover:opacity-90 transition-opacity">
//                           <Share2 className="w-3.5 h-3.5" />
//                           Twitter
//                         </button>
//                         <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#1877F2] text-white text-xs font-medium hover:opacity-90 transition-opacity">
//                           <Users className="w-3.5 h-3.5" />
//                           Facebook
//                         </button>
//                       </div>
//                     </div>

//                     {/* Right - Referral Link & Tiers */}
//                     <div>
//                       <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20 mb-3">
//                         <label className="text-cream/50 text-xs uppercase tracking-wider block mb-2">
//                           Your Referral Link
//                         </label>
//                         <div className="flex items-center gap-2">
//                           <input
//                             type="text"
//                             value={referralLink}
//                             readOnly
//                             className="flex-1 bg-transparent border border-gold/30 rounded-lg px-3 py-2 text-cream text-sm focus:border-gold outline-none"
//                           />
//                           <button
//                             onClick={copyReferralLink}
//                             className="p-2 rounded-lg bg-gold/20 hover:bg-gold/30 text-gold transition-colors"
//                           >
//                             {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
//                           </button>
//                         </div>
//                         {copied && (
//                           <p className="text-green-400 text-xs mt-1">✓ Copied to clipboard!</p>
//                         )}
//                       </div>

//                       {/* Reward Tiers */}
//                       <div className="grid grid-cols-2 gap-2">
//                         {referralTiers.map((tier, idx) => {
//                           const Icon = tier.icon;
//                           return (
//                             <motion.div
//                               key={tier.level}
//                               initial={{ opacity: 0, scale: 0.9 }}
//                               animate={{ opacity: 1, scale: 1 }}
//                               transition={{ delay: idx * 0.05 }}
//                               className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300"
//                             >
//                               <div className="w-8 h-8 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-1">
//                                 <Icon className="w-4 h-4 text-gold" />
//                               </div>
//                               <p className="text-cream font-semibold text-sm">{tier.level}</p>
//                               <p className="text-cream/40 text-[10px]">{tier.referrals} referrals</p>
//                               <p className="text-gold text-xs font-medium">{tier.reward}</p>
//                             </motion.div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-3 p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
//                     <p className="text-cream/60 text-xs">
//                       ⭐ Earn up to <span className="text-gold font-semibold">35% off</span> + premium gift sets. Share the joy of authentic Assam Tea!
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Loyalty Rewards Tab */}
//               {activeTab === 'loyalty' && (
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <Trophy className="w-5 h-5 text-gold" />
//                     <h3 className="font-display text-xl text-cream">
//                       Loyalty <span className="text-gold">Rewards</span>
//                     </h3>
//                     <span className="text-cream/40 text-xs ml-auto">Earn points with every purchase</span>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-4">
//                     {/* Left - Points Summary */}
//                     <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
//                           <Coins className="w-6 h-6 text-gold" />
//                         </div>
//                         <div>
//                           <p className="text-cream/50 text-xs uppercase tracking-wider">Your Points</p>
//                           <p className="font-display text-2xl text-gold">1,250</p>
//                         </div>
//                         <div className="ml-auto text-right">
//                           <p className="text-cream/50 text-xs uppercase tracking-wider">Current Tier</p>
//                           <p className="font-display text-sm text-cream">Tea Connoisseur</p>
//                         </div>
//                       </div>

//                       <div className="h-2 rounded-full bg-white/10 overflow-hidden">
//                         <motion.div 
//                           initial={{ width: 0 }}
//                           animate={{ width: "62%" }}
//                           transition={{ duration: 1, delay: 0.3 }}
//                           className="h-full bg-gradient-to-r from-gold to-amber-500 rounded-full"
//                         />
//                       </div>
//                       <div className="flex justify-between text-cream/30 text-[10px] mt-1">
//                         <span>0 pts</span>
//                         <span>2,000 pts to Tea Royalty</span>
//                       </div>

//                       <div className="grid grid-cols-2 gap-2 mt-3">
//                         <div className="bg-cream/5 rounded-lg p-2 text-center">
//                           <p className="text-cream/40 text-[8px] uppercase tracking-wider">Orders</p>
//                           <p className="text-cream font-semibold text-sm">12</p>
//                         </div>
//                         <div className="bg-cream/5 rounded-lg p-2 text-center">
//                           <p className="text-cream/40 text-[8px] uppercase tracking-wider">Points Earned</p>
//                           <p className="text-cream font-semibold text-sm">1,250</p>
//                         </div>
//                       </div>

//                       <div className="mt-3 p-2 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20">
//                         <p className="text-cream/60 text-center text-[10px]">
//                           💡 Earn 10 points for every ₹100 spent. Redeem points for discounts & gifts!
//                         </p>
//                       </div>
//                     </div>

//                     {/* Right - Tiers */}
//                     <div className="space-y-2">
//                       {loyaltyTiers.map((tier, idx) => {
//                         const Icon = tier.icon;
//                         const isCurrent = tier.name === "Tea Connoisseur";
//                         return (
//                           <motion.div
//                             key={tier.name}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: idx * 0.08 }}
//                             className={`flex items-start gap-3 p-3 rounded-lg border transition-all duration-300 ${
//                               isCurrent 
//                                 ? 'bg-gradient-to-r from-gold/20 to-amber-500/20 border-gold/50 shadow-lg shadow-gold/10' 
//                                 : 'bg-white/5 border-gold/20 hover:border-gold/40'
//                             }`}
//                           >
//                             <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
//                               isCurrent ? 'bg-gold/30' : 'bg-gold/20'
//                             }`}>
//                               <Icon className={`w-5 h-5 ${isCurrent ? 'text-gold' : 'text-gold/70'}`} />
//                             </div>
//                             <div className="flex-1">
//                               <div className="flex items-center justify-between">
//                                 <h4 className={`font-display text-sm ${isCurrent ? 'text-gold' : 'text-cream'}`}>
//                                   {tier.name}
//                                 </h4>
//                                 <span className="text-cream/40 text-[8px] uppercase tracking-wider">
//                                   {tier.points} pts
//                                 </span>
//                               </div>
//                               <div className="flex flex-wrap gap-1 mt-1">
//                                 {tier.benefits.slice(0, 2).map((benefit, bIdx) => (
//                                   <span key={bIdx} className="text-[8px] px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                                     {benefit}
//                                   </span>
//                                 ))}
//                                 {tier.benefits.length > 2 && (
//                                   <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                                     +{tier.benefits.length - 2} more
//                                   </span>
//                                 )}
//                               </div>
//                             </div>
//                             {isCurrent && (
//                               <div className="px-2 py-0.5 rounded-full bg-gold text-forest-deep text-[8px] font-bold uppercase tracking-wider flex-shrink-0">
//                                 Current
//                               </div>
//                             )}
//                           </motion.div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   <div className="mt-3 p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
//                     <p className="text-cream/60 text-xs">
//                       🏆 <span className="text-gold font-semibold">Tea Legend</span> members get 25% off, free shipping, personal Tea sommelier & custom blend creation!
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Bottom Action */}
//               <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-between">
//                 <p className="text-cream/30 text-[8px] uppercase tracking-wider">
//                   No credit card required •  
//                 </p>
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="text-cream/40 hover:text-cream/60 text-[10px] uppercase tracking-wider transition-colors"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }



// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   X, 
//   Sparkles, 
//   Gift, 
//   Truck, 
//   Percent, 
//   Clock, 
//   ArrowRight, 
//   ChevronLeft, 
//   ChevronRight, 
//   Star,
//   Users,
//   Share2,
//   Award,
//   Crown,
//   Package,
//   Heart,
//   PartyPopper,
//   GiftIcon,
//   ShoppingBag,
//   Zap,
//   ChevronDown,
//   CheckCircle,
//   Copy,
//   Mail,
//   MessageCircle,
//   Coins,
//   Gem,
//   BadgeCheck,
//   Trophy,
//   TrendingUp,
//   Coffee
// } from "lucide-react";

// // Import images for carousel
// import TeaHarvestImg from "@/assets/product1.png";
// import TeaCupImg from "@/assets/product2.png";
// import TeaExportImg from "@/assets/product3.png";
// import giftSetImg from "@/assets/hero-1.jpg";
// import giftSet2Img from "@/assets/hero-2.jpg";
// import giftSet3Img from "@/assets/hero-3.jpg";

// const offers = [
//   { icon: Percent, title: "25% Off", text: "First order 100kg+", color: "from-amber-500 to-orange-500" },
//   { icon: Coins, title: "Double Coins", text: "On all orders this week", color: "from-yellow-500 to-amber-500" },
//   { icon: Gift, title: "Free Sample Pack", text: "With every order above ₹5000", color: "from-purple-500 to-pink-500" },
// ];

// const carouselImages = [
//   { src: TeaHarvestImg, alt: "Tea Harvesting", title: "Fresh Gardens" },
//   { src: TeaCupImg, alt: "Premium Tea", title: "Premium Tea" },
//   { src: TeaExportImg, alt: "Global Export", title: "Worldwide" },
// ];

// // Gift Sets Data
// const giftSets = [
//   {
//     id: 1,
//     name: "Premium Gift Box",
//     price: "₹999",
//     description: "A curated collection of 3 premium Assam Teas in an elegant gift box. Perfect for Tea connoisseurs.",
//     image: giftSetImg,
//     items: ["Royal Assam Tea 100g", "Premium CTC 100g", "Green Tea 100g"],
//     category: "Premium",
//     popular: true
//   },
//   {
//     id: 2,
//     name: "Festival Hamper",
//     price: "₹1,499",
//     description: "The ultimate festive gift with 5 premium Teas, a Tea infuser, and a traditional Assamese gamosa.",
//     image: giftSet2Img,
//     items: ["Assam Gold 100g", "Masala Chai 100g", "Earl Grey 100g", "Green Tea 100g", "Tea Infuser"],
//     category: "Festival",
//     popular: false
//   },
//   {
//     id: 3,
//     name: "Corporate Gift Set",
//     price: "₹2,499",
//     description: "Premium corporate gifting solution with custom branding and personalized packaging.",
//     image: giftSet3Img,
//     items: ["Custom Blend 200g", "Personalized Packaging", "Branded Tea Infuser", "Gift Note"],
//     category: "Corporate",
//     popular: false
//   },
// ];

// // Referral Program Data
// const referralTiers = [
//   { level: "Bronze", referrals: 1, reward: "10% off", icon: Award },
//   { level: "Silver", referrals: 5, reward: "15% off + Gift", icon: Crown },
//   { level: "Gold", referrals: 10, reward: "25% off + Hamper", icon: Star },
//   { level: "Platinum", referrals: 25, reward: "35% off + Premium Set", icon: Sparkles },
// ];

// // Loyalty Program Data
// const loyaltyTiers = [
//   { 
//     name: "Tea Enthusiast", 
//     points: "0-500", 
//     benefits: ["5% off on orders", "Free shipping on ₹5000+", "Birthday gift"], 
//     icon: Coffee,
//     color: "from-green-500/20 to-emerald-500/10"
//   },
//   { 
//     name: "Tea Connoisseur", 
//     points: "501-2000", 
//     benefits: ["10% off on orders", "Free shipping on ₹3000+", "Birthday gift", "Early access to new blends"], 
//     icon: Gem,
//     color: "from-blue-500/20 to-cyan-500/10"
//   },
//   { 
//     name: "Tea Royalty", 
//     points: "2001-5000", 
//     benefits: ["15% off on orders", "Free shipping on all orders", "Birthday gift + premium hamper", "Exclusive tasting events", "Priority support"], 
//     icon: Crown,
//     color: "from-purple-500/20 to-pink-500/10"
//   },
//   { 
//     name: "Tea Legend", 
//     points: "5000+", 
//     benefits: ["25% off on orders", "Free shipping on all orders", "Annual premium gift set", "Personal Tea sommelier", "Custom blend creation", "VIP event invitations"], 
//     icon: Trophy,
//     color: "from-gold/30 to-amber-500/20"
//   },
// ];

// // Helper function to scroll to contact section
// const scrollToContact = () => {
//   const contactSection = document.getElementById('contact');
//   if (contactSection) {
//     contactSection.scrollIntoView({ behavior: 'smooth' });
//   }
// };

// export function OffersPopup() {
//   const [open, setOpen] = useState(false);
//   const [shown, setShown] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [activeTab, setActiveTab] = useState<'offers' | 'gifts' | 'referral' | 'loyalty'>('offers');
//   const [copied, setCopied] = useState(false);
//   const [referralLink] = useState("https://rkTeasales.com/ref/INVITE123");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!shown) {
//         setOpen(true);
//         setShown(true);
//       }
//     }, 3000);

//     const onScroll = () => {
//       if (shown) return;
//       const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
//       if (ratio > 0.35) {
//         setOpen(true);
//         setShown(true);
//       }
//     };
    
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, [shown]);

//   useEffect(() => {
//     if (!open || !isAutoPlaying || activeTab !== 'offers') return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 4000);
    
//     return () => clearInterval(interval);
//   }, [open, isAutoPlaying, activeTab]);

//   const nextSlide = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   const prevSlide = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   const copyReferralLink = () => {
//     navigator.clipboard.writeText(referralLink);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   // Get button text based on active tab
//   const getButtonText = () => {
//     switch(activeTab) {
//       case 'offers': return 'Claim Offer & Get Started';
//       case 'gifts': return 'Order Gift Set';
//       case 'referral': return 'Start Referring';
//       case 'loyalty': return 'Join Loyalty Program';
//       default: return 'Get Started';
//     }
//   };

//   // Handle CTA click - closes popup and scrolls to contact
//   const handleGetStarted = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setOpen(false);
//     // Small delay to allow popup to close before scrolling
//     setTimeout(() => {
//       scrollToContact();
//     }, 300);
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//           onClick={() => setOpen(false)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.95, y: 10, opacity: 0 }}
//             transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//             onClick={(e) => e.stopPropagation()}
//             className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl bg-gradient-to-br from-forest-deep via-forest to-forest-deep"
//           >
//             {/* Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
            
//             {/* Decorative Elements */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
            
//             {/* Close Button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-2 right-2 z-20 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-cream/60 hover:text-gold transition-all flex items-center justify-center backdrop-blur-sm"
//               aria-label="Close"
//             >
//               <X className="h-4 w-4" />
//             </button>

//             <div className="relative p-6">
//               {/* Header with Tabs */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <button
//                   onClick={() => setActiveTab('offers')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'offers'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Percent className="w-4 h-4" />
//                   Special Offers
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('gifts')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'gifts'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Gift className="w-4 h-4" />
//                   Gift Sets
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('referral')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'referral'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Share2 className="w-4 h-4" />
//                   Refer & Earn
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('loyalty')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     activeTab === 'loyalty'
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                       : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//                   }`}
//                 >
//                   <Trophy className="w-4 h-4" />
//                   Loyalty Rewards
//                 </button>
//               </div>

//               {/* Tab Content */}
//               {activeTab === 'offers' && (
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {/* Left Side - Image Carousel */}
//                   <div className="relative h-56 md:h-auto overflow-hidden rounded-lg bg-gradient-to-br from-forest to-forest-deep">
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={currentSlide}
//                         initial={{ opacity: 0, scale: 1.1 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.5 }}
//                         className="absolute inset-0"
//                       >
//                         <img
//                           src={carouselImages[currentSlide].src}
//                           alt={carouselImages[currentSlide].alt}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                       </motion.div>
//                     </AnimatePresence>

//                     <div className="absolute bottom-2 left-2 right-2 z-10">
//                       <div className="bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
//                         <p className="text-cream text-xs font-medium">
//                           {carouselImages[currentSlide].title}
//                         </p>
//                       </div>
//                     </div>

//                     <button
//                       onClick={prevSlide}
//                       className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
//                     >
//                       <ChevronLeft className="h-3 w-3" />
//                     </button>
                    
//                     <button
//                       onClick={nextSlide}
//                       className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
//                     >
//                       <ChevronRight className="h-3 w-3" />
//                     </button>

//                     <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
//                       {carouselImages.map((_, idx) => (
//                         <button
//                           key={idx}
//                           onClick={() => {
//                             setIsAutoPlaying(false);
//                             setCurrentSlide(idx);
//                             setTimeout(() => setIsAutoPlaying(true), 5000);
//                           }}
//                           className={`h-1 rounded-full transition-all duration-300 ${
//                             currentSlide === idx
//                               ? "w-3 bg-gold"
//                               : "w-1 bg-white/50 hover:bg-white/80"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   </div>

//                   {/* Right Side - Offers Content */}
//                   <div className="relative flex flex-col">
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className="h-px w-6 bg-gold/60" />
//                       <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Limited</span>
//                       <span className="h-px w-6 bg-gold/60" />
//                     </div>

//                     <h3 className="font-display text-2xl text-cream leading-tight mb-1">
//                       Special{' '}
//                       <span className="bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                         Offers
//                       </span>
//                     </h3>
                    
//                     <p className="text-cream/60 text-sm mb-4">For bulk buyers</p>

//                     <div className="space-y-2.5 mb-4 flex-1">
//                       {offers.map((o, i) => (
//                         <motion.div
//                           key={o.title}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.3 + i * 0.08 }}
//                           className="flex items-center gap-3 rounded-lg bg-white/5 backdrop-blur-sm p-3 border border-white/10 hover:border-gold/30 transition-all duration-300 group"
//                         >
//                           <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${o.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
//                             <o.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
//                           </div>
//                           <div className="flex-1">
//                             <div className="font-display text-cream font-semibold">{o.title}</div>
//                             <div className="text-cream/50 text-xs">{o.text}</div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>

//                     <div className="flex items-center justify-center gap-1.5 mb-3 py-1.5 bg-white/5 rounded-lg">
//                       <Clock className="w-3.5 h-3.5 text-gold" />
//                       <span className="text-cream/60 text-xs uppercase tracking-wider">Ends in 7d</span>
//                       <Star className="w-3 h-3 text-gold fill-gold" />
//                     </div>

//                     <a
//                       href="#contact"
//                       onClick={handleGetStarted}
//                       className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-4 py-2.5 text-sm font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
//                     >
//                       {getButtonText()}
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               )}

//               {/* Gift Sets Tab */}
//               {activeTab === 'gifts' && (
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <Gift className="w-5 h-5 text-gold" />
//                     <h3 className="font-display text-xl text-cream">
//                       Premium <span className="text-gold">Gift Sets</span>
//                     </h3>
//                     <span className="text-cream/40 text-xs ml-auto">Perfect for all occasions</span>
//                   </div>

//                   <div className="grid md:grid-cols-3 gap-4 mb-4">
//                     {giftSets.map((gift, index) => (
//                       <motion.div
//                         key={gift.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-500"
//                       >
//                         <div className="relative h-40 overflow-hidden">
//                           <img
//                             src={gift.image}
//                             alt={gift.name}
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                           {gift.popular && (
//                             <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-gold text-forest-deep text-[8px] font-bold uppercase tracking-wider">
//                               Popular
//                             </div>
//                           )}
//                           <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-cream/80 text-[8px] uppercase tracking-wider">
//                             {gift.category}
//                           </div>
//                         </div>
                        
//                         <div className="p-4">
//                           <h4 className="font-display text-cream text-base group-hover:text-gold transition-colors">
//                             {gift.name}
//                           </h4>
//                           <p className="text-cream/50 text-xs mt-1 line-clamp-2">{gift.description}</p>
//                           <div className="flex flex-wrap gap-1 mt-2">
//                             {gift.items.slice(0, 3).map((item, idx) => (
//                               <span key={idx} className="text-[8px] px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                                 {item}
//                               </span>
//                             ))}
//                             {gift.items.length > 3 && (
//                               <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                                 +{gift.items.length - 3}
//                               </span>
//                             )}
//                           </div>
//                           <div className="flex items-center justify-between mt-3 pt-2 border-t border-gold/20">
//                             <span className="font-display text-gold font-bold text-lg">{gift.price}</span>
//                             <a
//                               href="#contact"
//                               onClick={handleGetStarted}
//                               className="inline-flex items-center gap-1 text-gold text-xs font-medium hover:gap-2 transition-all duration-300"
//                             >
//                               Order Now <ArrowRight className="w-3 h-3" />
//                             </a>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>

//                   <div className="flex flex-col gap-3">
//                     <div className="p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
//                       <p className="text-cream/60 text-xs">
//                         🎁 Custom corporate gifting available. <a href="#contact" className="text-gold hover:underline">Contact us</a> for bulk orders.
//                       </p>
//                     </div>
//                     <a
//                       href="#contact"
//                       onClick={handleGetStarted}
//                       className="group w-full md:w-auto mx-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-6 py-2.5 text-sm font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
//                     >
//                       {getButtonText()}
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               )}

//               {/* Referral Program Tab */}
//               {activeTab === 'referral' && (
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <Users className="w-5 h-5 text-gold" />
//                     <h3 className="font-display text-xl text-cream">
//                       Refer & <span className="text-gold">Earn</span>
//                     </h3>
//                     <span className="text-cream/40 text-xs ml-auto">Share the love of Tea</span>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     {/* Left - Referral Info */}
//                     <div>
//                       <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
//                         <div className="flex items-center gap-2 mb-3">
//                           <GiftIcon className="w-5 h-5 text-gold" />
//                           <h4 className="text-cream font-display">How It Works</h4>
//                         </div>
//                         <ol className="space-y-3 text-sm">
//                           <li className="flex items-start gap-3 text-cream/70">
//                             <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0 font-bold">1</span>
//                             <span>Share your unique referral link with friends & family</span>
//                           </li>
//                           <li className="flex items-start gap-3 text-cream/70">
//                             <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0 font-bold">2</span>
//                             <span>They get <span className="text-gold font-semibold">15% off</span> their first order</span>
//                           </li>
//                           <li className="flex items-start gap-3 text-cream/70">
//                             <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0 font-bold">3</span>
//                             <span>You earn rewards for every successful referral</span>
//                           </li>
//                         </ol>
//                       </div>

//                       {/* Share Buttons */}
//                       <div className="mt-3 flex flex-wrap gap-2">
//                         <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-white text-xs font-medium hover:opacity-90 transition-opacity">
//                           <MessageCircle className="w-3.5 h-3.5" />
//                           WhatsApp
//                         </button>
//                         <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#1DA1F2] text-white text-xs font-medium hover:opacity-90 transition-opacity">
//                           <Share2 className="w-3.5 h-3.5" />
//                           Twitter
//                         </button>
//                         <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#1877F2] text-white text-xs font-medium hover:opacity-90 transition-opacity">
//                           <Users className="w-3.5 h-3.5" />
//                           Facebook
//                         </button>
//                       </div>
//                     </div>

//                     {/* Right - Referral Link & Tiers */}
//                     <div>
//                       <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20 mb-3">
//                         <label className="text-cream/50 text-xs uppercase tracking-wider block mb-2">
//                           Your Referral Link
//                         </label>
//                         <div className="flex items-center gap-2">
//                           <input
//                             type="text"
//                             value={referralLink}
//                             readOnly
//                             className="flex-1 bg-transparent border border-gold/30 rounded-lg px-3 py-2 text-cream text-sm focus:border-gold outline-none"
//                           />
//                           <button
//                             onClick={copyReferralLink}
//                             className="p-2 rounded-lg bg-gold/20 hover:bg-gold/30 text-gold transition-colors"
//                           >
//                             {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
//                           </button>
//                         </div>
//                         {copied && (
//                           <p className="text-green-400 text-xs mt-1">✓ Copied to clipboard!</p>
//                         )}
//                       </div>

//                       {/* Reward Tiers */}
//                       <div className="grid grid-cols-2 gap-2">
//                         {referralTiers.map((tier, idx) => {
//                           const Icon = tier.icon;
//                           return (
//                             <motion.div
//                               key={tier.level}
//                               initial={{ opacity: 0, scale: 0.9 }}
//                               animate={{ opacity: 1, scale: 1 }}
//                               transition={{ delay: idx * 0.05 }}
//                               className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300"
//                             >
//                               <div className="w-8 h-8 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-1">
//                                 <Icon className="w-4 h-4 text-gold" />
//                               </div>
//                               <p className="text-cream font-semibold text-sm">{tier.level}</p>
//                               <p className="text-cream/40 text-[10px]">{tier.referrals} referrals</p>
//                               <p className="text-gold text-xs font-medium">{tier.reward}</p>
//                             </motion.div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-3 mt-3">
//                     <div className="p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
//                       <p className="text-cream/60 text-xs">
//                         ⭐ Earn up to <span className="text-gold font-semibold">35% off</span> + premium gift sets. Share the joy of authentic Assam Tea!
//                       </p>
//                     </div>
//                     <a
//                       href="#contact"
//                       onClick={handleGetStarted}
//                       className="group w-full md:w-auto mx-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-6 py-2.5 text-sm font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
//                     >
//                       {getButtonText()}
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               )}

//               {/* Loyalty Rewards Tab */}
//               {activeTab === 'loyalty' && (
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <Trophy className="w-5 h-5 text-gold" />
//                     <h3 className="font-display text-xl text-cream">
//                       Loyalty <span className="text-gold">Rewards</span>
//                     </h3>
//                     <span className="text-cream/40 text-xs ml-auto">Earn points with every purchase</span>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-4">
//                     {/* Left - Points Summary */}
//                     <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
//                           <Coins className="w-6 h-6 text-gold" />
//                         </div>
//                         <div>
//                           <p className="text-cream/50 text-xs uppercase tracking-wider">Your Points</p>
//                           <p className="font-display text-2xl text-gold">1,250</p>
//                         </div>
//                         <div className="ml-auto text-right">
//                           <p className="text-cream/50 text-xs uppercase tracking-wider">Current Tier</p>
//                           <p className="font-display text-sm text-cream">Tea Connoisseur</p>
//                         </div>
//                       </div>

//                       <div className="h-2 rounded-full bg-white/10 overflow-hidden">
//                         <motion.div 
//                           initial={{ width: 0 }}
//                           animate={{ width: "62%" }}
//                           transition={{ duration: 1, delay: 0.3 }}
//                           className="h-full bg-gradient-to-r from-gold to-amber-500 rounded-full"
//                         />
//                       </div>
//                       <div className="flex justify-between text-cream/30 text-[10px] mt-1">
//                         <span>0 pts</span>
//                         <span>2,000 pts to Tea Royalty</span>
//                       </div>

//                       <div className="grid grid-cols-2 gap-2 mt-3">
//                         <div className="bg-cream/5 rounded-lg p-2 text-center">
//                           <p className="text-cream/40 text-[8px] uppercase tracking-wider">Orders</p>
//                           <p className="text-cream font-semibold text-sm">12</p>
//                         </div>
//                         <div className="bg-cream/5 rounded-lg p-2 text-center">
//                           <p className="text-cream/40 text-[8px] uppercase tracking-wider">Points Earned</p>
//                           <p className="text-cream font-semibold text-sm">1,250</p>
//                         </div>
//                       </div>

//                       <div className="mt-3 p-2 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20">
//                         <p className="text-cream/60 text-center text-[10px]">
//                           💡 Earn 10 points for every ₹100 spent. Redeem points for discounts & gifts!
//                         </p>
//                       </div>
//                     </div>

//                     {/* Right - Tiers */}
//                     <div className="space-y-2">
//                       {loyaltyTiers.map((tier, idx) => {
//                         const Icon = tier.icon;
//                         const isCurrent = tier.name === "Tea Connoisseur";
//                         return (
//                           <motion.div
//                             key={tier.name}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: idx * 0.08 }}
//                             className={`flex items-start gap-3 p-3 rounded-lg border transition-all duration-300 ${
//                               isCurrent 
//                                 ? 'bg-gradient-to-r from-gold/20 to-amber-500/20 border-gold/50 shadow-lg shadow-gold/10' 
//                                 : 'bg-white/5 border-gold/20 hover:border-gold/40'
//                             }`}
//                           >
//                             <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
//                               isCurrent ? 'bg-gold/30' : 'bg-gold/20'
//                             }`}>
//                               <Icon className={`w-5 h-5 ${isCurrent ? 'text-gold' : 'text-gold/70'}`} />
//                             </div>
//                             <div className="flex-1">
//                               <div className="flex items-center justify-between">
//                                 <h4 className={`font-display text-sm ${isCurrent ? 'text-gold' : 'text-cream'}`}>
//                                   {tier.name}
//                                 </h4>
//                                 <span className="text-cream/40 text-[8px] uppercase tracking-wider">
//                                   {tier.points} pts
//                                 </span>
//                               </div>
//                               <div className="flex flex-wrap gap-1 mt-1">
//                                 {tier.benefits.slice(0, 2).map((benefit, bIdx) => (
//                                   <span key={bIdx} className="text-[8px] px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                                     {benefit}
//                                   </span>
//                                 ))}
//                                 {tier.benefits.length > 2 && (
//                                   <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                                     +{tier.benefits.length - 2} more
//                                   </span>
//                                 )}
//                               </div>
//                             </div>
//                             {isCurrent && (
//                               <div className="px-2 py-0.5 rounded-full bg-gold text-forest-deep text-[8px] font-bold uppercase tracking-wider flex-shrink-0">
//                                 Current
//                               </div>
//                             )}
//                           </motion.div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-3 mt-3">
//                     <div className="p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
//                       <p className="text-cream/60 text-xs">
//                         🏆 <span className="text-gold font-semibold">Tea Legend</span> members get 25% off, free shipping, personal Tea sommelier & custom blend creation!
//                       </p>
//                     </div>
//                     <a
//                       href="#contact"
//                       onClick={handleGetStarted}
//                       className="group w-full md:w-auto mx-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-6 py-2.5 text-sm font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
//                     >
//                       {getButtonText()}
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               )}

//               {/* Bottom Action */}
//               <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-between">
//                 <p className="text-cream/30 text-[8px] uppercase tracking-wider">
//                   No credit card required •  
//                 </p>
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="text-cream/40 hover:text-cream/60 text-[10px] uppercase tracking-wider transition-colors"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }




import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Sparkles, 
  Gift, 
  Truck, 
  Percent, 
  Clock, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Users,
  Share2,
  Award,
  Crown,
  Package,
  Heart,
  PartyPopper,
  GiftIcon,
  ShoppingBag,
  Zap,
  ChevronDown,
  CheckCircle,
  Copy,
  Mail,
  MessageCircle,
  Coins,
  Gem,
  BadgeCheck,
  Trophy,
  TrendingUp,
  Coffee
} from "lucide-react";

// Import images for carousel
import TeaHarvestImg from "@/assets/product1.png";
import TeaCupImg from "@/assets/product2.png";
import TeaExportImg from "@/assets/product3.png";
import giftSetImg from "@/assets/hero-1.jpg";
import giftSet2Img from "@/assets/hero-2.jpg";
import giftSet3Img from "@/assets/hero-3.jpg";

const offers = [
  { icon: Percent, title: "25% Off", text: "First order 100kg+", color: "from-amber-500 to-orange-500" },
  { icon: Coins, title: "Double Coins", text: "On all orders this week", color: "from-yellow-500 to-amber-500" },
  { icon: Gift, title: "Free Sample Pack", text: "With every order above ₹5000", color: "from-purple-500 to-pink-500" },
];

const carouselImages = [
  { src: TeaHarvestImg, alt: "Tea Harvesting", title: "Fresh Gardens" },
  { src: TeaCupImg, alt: "Premium Tea", title: "Premium Tea" },
  { src: TeaExportImg, alt: "Global Export", title: "Worldwide" },
];

// Gift Sets Data
const giftSets = [
  {
    id: 1,
    name: "Premium Gift Box",
    price: "₹999",
    description: "A curated collection of 3 premium Assam Teas in an elegant gift box. Perfect for Tea connoisseurs.",
    image: giftSetImg,
    items: ["Royal Assam Tea 100g", "Premium CTC 100g", "Green Tea 100g"],
    category: "Premium",
    popular: true
  },
  {
    id: 2,
    name: "Festival Hamper",
    price: "₹1,499",
    description: "The ultimate festive gift with 5 premium Teas, a Tea infuser, and a traditional Assamese gamosa.",
    image: giftSet2Img,
    items: ["Assam Gold 100g", "Masala Chai 100g", "Earl Grey 100g", "Green Tea 100g", "Tea Infuser"],
    category: "Festival",
    popular: false
  },
  {
    id: 3,
    name: "Corporate Gift Set",
    price: "₹2,499",
    description: "Premium corporate gifting solution with custom branding and personalized packaging.",
    image: giftSet3Img,
    items: ["Custom Blend 200g", "Personalized Packaging", "Branded Tea Infuser", "Gift Note"],
    category: "Corporate",
    popular: false
  },
];

// Referral Program Data
const referralTiers = [
  { level: "Bronze", referrals: 1, reward: "10% off", icon: Award },
  { level: "Silver", referrals: 5, reward: "15% off + Gift", icon: Crown },
  { level: "Gold", referrals: 10, reward: "25% off + Hamper", icon: Star },
  { level: "Platinum", referrals: 25, reward: "35% off + Premium Set", icon: Sparkles },
];

// Loyalty Program Data
const loyaltyTiers = [
  { 
    name: "Tea Enthusiast", 
    points: "0-500", 
    benefits: ["5% off on orders", "Free shipping on ₹5000+", "Birthday gift"], 
    icon: Coffee,
    color: "from-green-500/20 to-emerald-500/10"
  },
  { 
    name: "Tea Connoisseur", 
    points: "501-2000", 
    benefits: ["10% off on orders", "Free shipping on ₹3000+", "Birthday gift", "Early access to new blends"], 
    icon: Gem,
    color: "from-blue-500/20 to-cyan-500/10"
  },
  { 
    name: "Tea Royalty", 
    points: "2001-5000", 
    benefits: ["15% off on orders", "Free shipping on all orders", "Birthday gift + premium hamper", "Exclusive tasting events", "Priority support"], 
    icon: Crown,
    color: "from-purple-500/20 to-pink-500/10"
  },
  { 
    name: "Tea Legend", 
    points: "5000+", 
    benefits: ["25% off on orders", "Free shipping on all orders", "Annual premium gift set", "Personal Tea sommelier", "Custom blend creation", "VIP event invitations"], 
    icon: Trophy,
    color: "from-gold/30 to-amber-500/20"
  },
];

// Helper function to scroll to contact section
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export function OffersPopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'offers' | 'gifts' | 'referral' | 'loyalty'>('offers');
  const [copied, setCopied] = useState(false);
  const [referralLink] = useState("https://rkTeasales.com/ref/INVITE123");

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

  useEffect(() => {
    if (!open || !isAutoPlaying || activeTab !== 'offers') return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [open, isAutoPlaying, activeTab]);

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

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get button text based on active tab
  const getButtonText = () => {
    switch(activeTab) {
      case 'offers': return 'Claim Offer & Get Started';
      case 'gifts': return 'Order Gift Set';
      case 'referral': return 'Start Referring';
      case 'loyalty': return 'Join Loyalty Program';
      default: return 'Get Started';
    }
  };

  // Handle CTA click - closes popup and scrolls to contact
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // Small delay to allow popup to close before scrolling
    setTimeout(() => {
      scrollToContact();
    }, 300);
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
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl bg-gradient-to-br from-forest-deep via-forest to-forest-deep"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 z-20 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-cream/60 hover:text-gold transition-all flex items-center justify-center backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative p-6">
              {/* Header with Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('offers')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                    activeTab === 'offers'
                      ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
                      : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
                  }`}
                >
                  <Percent className="w-4 h-4" />
                  Special Offers
                </button>
                <button
                  onClick={() => setActiveTab('gifts')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                    activeTab === 'gifts'
                      ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
                      : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
                  }`}
                >
                  <Gift className="w-4 h-4" />
                  Gift Sets
                </button>
                <button
                  onClick={() => setActiveTab('referral')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                    activeTab === 'referral'
                      ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
                      : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
                  }`}
                >
                  <Share2 className="w-4 h-4" />
                  Refer & Earn
                </button>
                <button
                  onClick={() => setActiveTab('loyalty')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                    activeTab === 'loyalty'
                      ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
                      : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
                  }`}
                >
                  <Trophy className="w-4 h-4" />
                  Loyalty Rewards
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'offers' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Side - Image Carousel */}
                  <div className="relative h-56 md:h-auto overflow-hidden rounded-lg bg-gradient-to-br from-forest to-forest-deep">
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

                    <div className="absolute bottom-2 left-2 right-2 z-10">
                      <div className="bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                        <p className="text-cream text-base font-medium">
                          {carouselImages[currentSlide].title}
                        </p>
                      </div>
                    </div>

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
                  <div className="relative flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-px w-6 bg-gold/60" />
                      <span className="text-sm uppercase tracking-[0.3em] text-gold font-semibold">Limited</span>
                      <span className="h-px w-6 bg-gold/60" />
                    </div>

                    <h3 className="font-display text-3xl text-cream leading-tight mb-1">
                      Special{' '}
                      <span className="bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                        Offers
                      </span>
                    </h3>
                    
                    <p className="text-cream/60 text-base mb-4">For bulk buyers</p>

                    <div className="space-y-2.5 mb-4 flex-1">
                      {offers.map((o, i) => (
                        <motion.div
                          key={o.title}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.08 }}
                          className="flex items-center gap-3 rounded-lg bg-white/5 backdrop-blur-sm p-3 border border-white/10 hover:border-gold/30 transition-all duration-300 group"
                        >
                          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${o.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                            <o.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1">
                            <div className="font-display text-cream font-semibold text-lg">{o.title}</div>
                            <div className="text-cream/50 text-base">{o.text}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-1.5 mb-3 py-1.5 bg-white/5 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span className="text-cream/60 text-base uppercase tracking-wider">Ends in 7d</span>
                      <Star className="w-3 h-3 text-gold fill-gold" />
                    </div>

                    <a
                      href="#contact"
                      onClick={handleGetStarted}
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-4 py-2.5 text-lg font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
                    >
                      {getButtonText()}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              )}

              {/* Gift Sets Tab */}
              {activeTab === 'gifts' && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="w-5 h-5 text-gold" />
                    <h3 className="font-display text-2xl text-cream">
                      Premium <span className="text-gold">Gift Sets</span>
                    </h3>
                    <span className="text-cream/40 text-base ml-auto">Perfect for all occasions</span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    {giftSets.map((gift, index) => (
                      <motion.div
                        key={gift.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-500"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={gift.image}
                            alt={gift.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          {gift.popular && (
                            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-gold text-forest-deep text-sm font-bold uppercase tracking-wider">
                              Popular
                            </div>
                          )}
                          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-cream/80 text-sm uppercase tracking-wider">
                            {gift.category}
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h4 className="font-display text-cream text-lg group-hover:text-gold transition-colors">
                            {gift.name}
                          </h4>
                          <p className="text-cream/50 text-base mt-1 line-clamp-2">{gift.description}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {gift.items.slice(0, 3).map((item, idx) => (
                              <span key={idx} className="text-sm px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
                                {item}
                              </span>
                            ))}
                            {gift.items.length > 3 && (
                              <span className="text-sm px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
                                +{gift.items.length - 3}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center justify-between mt-3 pt-2 border-t border-gold/20">
                            <span className="font-display text-gold font-bold text-xl">{gift.price}</span>
                            <a
                              href="#contact"
                              onClick={handleGetStarted}
                              className="inline-flex items-center gap-1 text-gold text-base font-medium hover:gap-2 transition-all duration-300"
                            >
                              Order Now <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
                      <p className="text-cream/60 text-base">
                        🎁 Custom corporate gifting available. <a href="#contact" className="text-gold hover:underline">Contact us</a> for bulk orders.
                      </p>
                    </div>
                    <a
                      href="#contact"
                      onClick={handleGetStarted}
                      className="group w-full md:w-auto mx-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-6 py-2.5 text-lg font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
                    >
                      {getButtonText()}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              )}

              {/* Referral Program Tab */}
              {activeTab === 'referral' && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-gold" />
                    <h3 className="font-display text-2xl text-cream">
                      Refer & <span className="text-gold">Earn</span>
                    </h3>
                    <span className="text-cream/40 text-base ml-auto">Share the love of Tea</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left - Referral Info */}
                    <div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                        <div className="flex items-center gap-2 mb-3">
                          <GiftIcon className="w-5 h-5 text-gold" />
                          <h4 className="text-cream font-display text-lg">How It Works</h4>
                        </div>
                        <ol className="space-y-3 text-base">
                          <li className="flex items-start gap-3 text-cream/70">
                            <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-sm flex items-center justify-center flex-shrink-0 font-bold">1</span>
                            <span>Share your unique referral link with friends & family</span>
                          </li>
                          <li className="flex items-start gap-3 text-cream/70">
                            <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-sm flex items-center justify-center flex-shrink-0 font-bold">2</span>
                            <span>They get <span className="text-gold font-semibold">15% off</span> their first order</span>
                          </li>
                          <li className="flex items-start gap-3 text-cream/70">
                            <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-sm flex items-center justify-center flex-shrink-0 font-bold">3</span>
                            <span>You earn rewards for every successful referral</span>
                          </li>
                        </ol>
                      </div>

                      {/* Share Buttons */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-white text-base font-medium hover:opacity-90 transition-opacity">
                          <MessageCircle className="w-3.5 h-3.5" />
                          WhatsApp
                        </button>
                        <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#1DA1F2] text-white text-base font-medium hover:opacity-90 transition-opacity">
                          <Share2 className="w-3.5 h-3.5" />
                          Twitter
                        </button>
                        <button className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#1877F2] text-white text-base font-medium hover:opacity-90 transition-opacity">
                          <Users className="w-3.5 h-3.5" />
                          Facebook
                        </button>
                      </div>
                    </div>

                    {/* Right - Referral Link & Tiers */}
                    <div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20 mb-3">
                        <label className="text-cream/50 text-sm uppercase tracking-wider block mb-2">
                          Your Referral Link
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={referralLink}
                            readOnly
                            className="flex-1 bg-transparent border border-gold/30 rounded-lg px-3 py-2 text-cream text-base focus:border-gold outline-none"
                          />
                          <button
                            onClick={copyReferralLink}
                            className="p-2 rounded-lg bg-gold/20 hover:bg-gold/30 text-gold transition-colors"
                          >
                            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                        {copied && (
                          <p className="text-green-400 text-base mt-1">✓ Copied to clipboard!</p>
                        )}
                      </div>

                      {/* Reward Tiers */}
                      <div className="grid grid-cols-2 gap-2">
                        {referralTiers.map((tier, idx) => {
                          const Icon = tier.icon;
                          return (
                            <motion.div
                              key={tier.level}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300"
                            >
                              <div className="w-8 h-8 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-1">
                                <Icon className="w-4 h-4 text-gold" />
                              </div>
                              <p className="text-cream font-semibold text-base">{tier.level}</p>
                              <p className="text-cream/40 text-sm">{tier.referrals} referrals</p>
                              <p className="text-gold text-base font-medium">{tier.reward}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
                      <p className="text-cream/60 text-base">
                        ⭐ Earn up to <span className="text-gold font-semibold">35% off</span> + premium gift sets. Share the joy of authentic Assam Tea!
                      </p>
                    </div>
                    <a
                      href="#contact"
                      onClick={handleGetStarted}
                      className="group w-full md:w-auto mx-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-6 py-2.5 text-lg font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
                    >
                      {getButtonText()}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              )}

              {/* Loyalty Rewards Tab */}
              {activeTab === 'loyalty' && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="w-5 h-5 text-gold" />
                    <h3 className="font-display text-2xl text-cream">
                      Loyalty <span className="text-gold">Rewards</span>
                    </h3>
                    <span className="text-cream/40 text-base ml-auto">Earn points with every purchase</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Left - Points Summary */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                          <Coins className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-cream/50 text-sm uppercase tracking-wider">Your Points</p>
                          <p className="font-display text-3xl text-gold">1,250</p>
                        </div>
                        <div className="ml-auto text-right">
                          <p className="text-cream/50 text-sm uppercase tracking-wider">Current Tier</p>
                          <p className="font-display text-base text-cream">Tea Connoisseur</p>
                        </div>
                      </div>

                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "62%" }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-gold to-amber-500 rounded-full"
                        />
                      </div>
                      <div className="flex justify-between text-cream/30 text-sm mt-1">
                        <span>0 pts</span>
                        <span>2,000 pts to Tea Royalty</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="bg-cream/5 rounded-lg p-2 text-center">
                          <p className="text-cream/40 text-sm uppercase tracking-wider">Orders</p>
                          <p className="text-cream font-semibold text-base">12</p>
                        </div>
                        <div className="bg-cream/5 rounded-lg p-2 text-center">
                          <p className="text-cream/40 text-sm uppercase tracking-wider">Points Earned</p>
                          <p className="text-cream font-semibold text-base">1,250</p>
                        </div>
                      </div>

                      <div className="mt-3 p-2 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20">
                        <p className="text-cream/60 text-center text-base">
                          💡 Earn 10 points for every ₹100 spent. Redeem points for discounts & gifts!
                        </p>
                      </div>
                    </div>

                    {/* Right - Tiers */}
                    <div className="space-y-2">
                      {loyaltyTiers.map((tier, idx) => {
                        const Icon = tier.icon;
                        const isCurrent = tier.name === "Tea Connoisseur";
                        return (
                          <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className={`flex items-start gap-3 p-3 rounded-lg border transition-all duration-300 ${
                              isCurrent 
                                ? 'bg-gradient-to-r from-gold/20 to-amber-500/20 border-gold/50 shadow-lg shadow-gold/10' 
                                : 'bg-white/5 border-gold/20 hover:border-gold/40'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              isCurrent ? 'bg-gold/30' : 'bg-gold/20'
                            }`}>
                              <Icon className={`w-5 h-5 ${isCurrent ? 'text-gold' : 'text-gold/70'}`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className={`font-display text-base ${isCurrent ? 'text-gold' : 'text-cream'}`}>
                                  {tier.name}
                                </h4>
                                <span className="text-cream/40 text-sm uppercase tracking-wider">
                                  {tier.points} pts
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {tier.benefits.slice(0, 2).map((benefit, bIdx) => (
                                  <span key={bIdx} className="text-sm px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
                                    {benefit}
                                  </span>
                                ))}
                                {tier.benefits.length > 2 && (
                                  <span className="text-sm px-1.5 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
                                    +{tier.benefits.length - 2} more
                                  </span>
                                )}
                              </div>
                            </div>
                            {isCurrent && (
                              <div className="px-2 py-0.5 rounded-full bg-gold text-forest-deep text-sm font-bold uppercase tracking-wider flex-shrink-0">
                                Current
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 text-center">
                      <p className="text-cream/60 text-base">
                        🏆 <span className="text-gold font-semibold">Tea Legend</span> members get 25% off, free shipping, personal Tea sommelier & custom blend creation!
                      </p>
                    </div>
                    <a
                      href="#contact"
                      onClick={handleGetStarted}
                      className="group w-full md:w-auto mx-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold to-amber-500 px-6 py-2.5 text-lg font-semibold text-forest-deep transition-all duration-300 hover:shadow-md hover:shadow-gold/25 hover:scale-[1.02]"
                    >
                      {getButtonText()}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              )}

              {/* Bottom Action */}
              <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-between">
                <p className="text-cream/30 text-sm uppercase tracking-wider">
                  No credit card required •  
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="text-cream/40 hover:text-cream/60 text-sm uppercase tracking-wider transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}