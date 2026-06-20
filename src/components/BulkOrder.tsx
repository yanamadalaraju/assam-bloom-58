// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { MessageCircle, Sparkles, TrendingUp, Shield, Truck, Award, CheckCircle } from "lucide-react";
// import { TeaParticles } from "./TeaParticles";
// import bulkBg from "@/assets/assamgarden1.jpg";

// function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const [val, setVal] = useState(0);
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-50px" });

//   useEffect(() => {
//     if (!inView) return;
//     const start = performance.now();
//     const dur = 2000;
//     let raf = 0;
//     const tick = (t: number) => {
//       const elapsed = t - start;
//       const progress = Math.min(1, elapsed / dur);
//       const easeOutCubic = 1 - Math.pow(1 - progress, 3);
//       setVal(Math.floor(to * easeOutCubic));
//       if (progress < 1) {
//         raf = requestAnimationFrame(tick);
//       }
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [inView, to]);

//   return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
// }

// const stats = [
//   { v: 35, suffix: "+", label: "Years Experience", icon: Award, delay: 0 },
//   { v: 500, suffix: "+", label: "Happy Buyers", icon: TrendingUp, delay: 0.1 },
//   { v: 20, suffix: "+", label: "Tea Varieties", icon: Sparkles, delay: 0.2 },
//   { v: 100, suffix: "%", label: "Service Excellence & Satisfaction", icon: Shield, delay: 0.3 },
// ];

// const features = [
//   { text: "Special Wholesale Pricing for Bulk Orders", icon: TrendingUp },
//   { text: "Premium Assam Tea with a Reliable & Strong Supply Chain", icon: CheckCircle },
//  { text: "Premium Tea Selection from Multiple Assam Tea Gardens", icon: Award },
//   { text: "Export Quality Assured", icon: Truck },
// ];

// export function BulkOrder() {
//   return (
//     <section id="bulk" className="relative py-16 md:py-20 overflow-hidden">
//       {/* Background with visible image */}
//       <div className="absolute inset-0">
//         <img 
//           src={bulkBg} 
//           alt="Tea plantation background" 
//           className="h-full w-full object-cover object-center" 
//           loading="lazy" 
//         />
//         {/* Lighter overlay to make background visible */}
//         <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/60 via-forest-deep/40 to-forest-deep/50" />
//         <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-forest-deep/30" />
//       </div>
      
//       <TeaParticles count={18} />

//       {/* Decorative elements */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative mx-auto max-w-6xl px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative rounded-2xl bg-gradient-to-br from-cream/15 to-cream/8 backdrop-blur-sm p-6 md:p-8 shadow-2xl border border-gold/30 hover:border-gold/50 transition-all duration-500"
//         >
//           {/* Glass reflection effect */}
//           <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
//           <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

//           {/* Animated sparkle background */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute -top-20 -right-20 w-32 h-32 opacity-20"
//           >
//             <Sparkles className="w-full h-full text-gold" />
//           </motion.div>

//           <motion.div
//             initial={{ y: -10, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.4 }}
//           >
//             <div className="relative inline-block">
//               <Sparkles className="h-8 w-8 text-gold mx-auto mb-3" strokeWidth={1.5} />
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold"
//               />
//             </div>
//           </motion.div>

//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//             <motion.span
//               initial={{ letterSpacing: "0.2em" }}
//               whileInView={{ letterSpacing: "0.4em" }}
//               transition={{ duration: 0.4 }}
//               className="text-[10px] uppercase tracking-[0.4em] text-gold font-semibold"
//             >
//               Wholesale
//             </motion.span>
//             <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//           </div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-4"
//           >
//             Special pricing for{' '}
//             <span className="relative inline-block">
//               <span className="italic bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                 bulk orders
//               </span>
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "100%" }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-transparent"
//               />
//             </span>
//           </motion.h2>

//          <motion.p
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ duration: 0.4, delay: 0.3 }}
//   className="text-cream/80 text-sm md:text-base max-w-2xl mx-auto mb-8"
// >
//   Partner with India's most trusted Assam Tea dealer. Get premium quality at wholesale prices.
// </motion.p>

//           {/* Features grid with icons */}
//           <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-8">
//             {features.map((f, i) => {
//               const Icon = f.icon;
//               return (
//                 <motion.div
//                   key={f.text}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: i * 0.08 }}
//                   whileHover={{ scale: 1.02, x: 3 }}
//                   className="group relative overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-r from-forest-deep/70 to-transparent backdrop-blur-sm hover:border-gold/50 transition-all duration-300"
//                 >
//                   <div className="flex items-center gap-3 p-3">
//                     <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
//                       <Icon className="w-4 h-4 text-gold" />
//                     </div>
//                     <span className="text-cream/90 text-xs md:text-sm font-medium text-left">{f.text}</span>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="flex flex-wrap items-center justify-center gap-3 mb-10"
//           >
//             <a
//               href="#contact"
//               className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-amber-500 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-forest-deep font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
//             >
//               <span className="relative z-10">Get Custom Quote</span>
//               <TrendingUp className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </a>
//             <a
//               href="https://wa.me/919999999999"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group inline-flex items-center gap-2 rounded-full border-2 border-gold/50 bg-transparent px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-gold font-semibold hover:bg-gold/20 hover:border-gold transition-all duration-300 hover:scale-105"
//             >
//               <MessageCircle className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
//               WhatsApp Us
//             </a>
//           </motion.div>

//           {/* Stats Section with Number Animation */}
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gold/30"
//           >
//             {stats.map((s, i) => {
//               const Icon = s.icon;
//               return (
//                 <motion.div
//                   key={s.label}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.4, delay: s.delay }}
//                   whileHover={{ scale: 1.05 }}
//                   className="group text-center"
//                 >
//                   <div className="relative inline-block mb-2">
//                     <div className="w-10 h-10 mx-auto rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-all duration-300">
//                       <Icon className="w-5 h-5 text-gold" />
//                     </div>
//                     <motion.div
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
//                       className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-gold"
//                     />
//                   </div>
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: s.delay + 0.2 }}
//                     className="font-display text-2xl md:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-gold to-amber-400 bg-clip-text"
//                   >
//                     <Counter to={s.v} suffix={s.suffix} />
//                   </motion.div>
//                   <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-cream/60 font-medium group-hover:text-cream/80 transition-colors">
//                     {s.label}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* Trust badge */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.8 }}
//             className="mt-6 pt-4 text-center"
//           >
//             <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/10 border border-gold/30 backdrop-blur-sm">
//               <Shield className="w-3 h-3 text-gold" />
//               <span className="text-cream/60 text-[9px] uppercase tracking-wider">Trusted by 500+ buyers</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { 
//   MessageCircle, 
//   Sparkles, 
//   TrendingUp, 
//   Shield, 
//   Truck, 
//   Award, 
//   CheckCircle,
//   Hotel,
//   Utensils,
//   Coffee,
//   Building2,
//   Users,
//   ArrowRight
// } from "lucide-react";
// import { TeaParticles } from "./TeaParticles";
// import bulkBg from "@/assets/assamgarden1.jpg";

// function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const [val, setVal] = useState(0);
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-50px" });

//   useEffect(() => {
//     if (!inView) return;
//     const start = performance.now();
//     const dur = 2000;
//     let raf = 0;
//     const tick = (t: number) => {
//       const elapsed = t - start;
//       const progress = Math.min(1, elapsed / dur);
//       const easeOutCubic = 1 - Math.pow(1 - progress, 3);
//       setVal(Math.floor(to * easeOutCubic));
//       if (progress < 1) {
//         raf = requestAnimationFrame(tick);
//       }
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [inView, to]);

//   return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
// }

// const stats = [
//   { v: 35, suffix: "+", label: "Years Experience", icon: Award, delay: 0 },
//   { v: 500, suffix: "+", label: "Happy Buyers", icon: TrendingUp, delay: 0.1 },
//   { v: 200, suffix: "+", label: "Tea Gardens", icon: Sparkles, delay: 0.2 },
//   { v: 100, suffix: "%", label: "Service Excellence & Satisfaction", icon: Shield, delay: 0.3 },
// ];

// const features = [
//   { text: "Special Wholesale Pricing for Bulk Orders", icon: TrendingUp },
//   { text: "Premium Assam Tea with a Reliable & Strong Supply Chain", icon: CheckCircle },
//   { text: "Premium Tea Selection from various Assam Tea Gardens", icon: Award },
//   { text: "Export Quality Assured", icon: Truck },
// ];

// // Bulk Purchase Categories
// const bulkCategories = [
//   {
//     id: "hotels",
//     icon: Hotel,
//     title: "Hotels",
//     description: "Premium Tea solutions for luxury hotels, boutique stays, and hospitality chains.",
//     features: ["Premium Packaging", "Consistent Quality", "Bulk Discounts", "Custom Branding"],
//     color: "from-amber-500/20 to-amber-600/10"
//   },
//   {
//     id: "restaurants",
//     icon: Utensils,
//     title: "Restaurants",
//     description: "Authentic Assam Tea to complement your restaurant's culinary experience.",
//     features: ["Restaurant Grade", "Masala Chai Blends", "Competitive Pricing", "Regular Supply"],
//     color: "from-orange-500/20 to-orange-600/10"
//   },
//   {
//     id: "cafes",
//     icon: Coffee,
//     title: "Cafes & Tea Shops",
//     description: "Build your cafe's reputation with the finest Assam Tea selection.",
//     features: ["Specialty Blends", "Eye-catching Packaging", "Training Support", "Marketing Materials"],
//     color: "from-gold/20 to-amber-500/10"
//   },
//   {
//     id: "offices",
//     icon: Building2,
//     title: "Offices & Corporates",
//     description: "Keep your Team energized with premium Tea in your office pantry.",
//     features: ["Bulk Packaging", "Tea Bags & Loose Leaf", "Flexible Ordering", "Nationwide Delivery"],
//     color: "from-blue-500/20 to-blue-600/10"
//   },
//   {
//     id: "institutions",
//     icon: Users,
//     title: "Institutions & Events",
//     description: "Reliable Tea supply for schools, colleges, hospitals, and large events.",
//     features: ["Institutional Pricing", "Large Volume Orders", "Custom Blends", "Timely Dispatch"],
//     color: "from-green-500/20 to-green-600/10"
//   }
// ];

// export function BulkOrder() {
//   const [activeCategory, setActiveCategory] = useState<string>("hotels");

//   return (
//     <section id="bulk" className="relative py-16 md:py-20 overflow-hidden">
//       {/* Background with visible image */}
//       <div className="absolute inset-0">
//         <img 
//           src={bulkBg} 
//           alt="Tea plantation background" 
//           className="h-full w-full object-cover object-center" 
//           loading="lazy" 
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/60 via-forest-deep/40 to-forest-deep/50" />
//         <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-forest-deep/30" />
//       </div>
      
//       <TeaParticles count={18} />

//       <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         <div className="text-center mb-12">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative rounded-2xl bg-gradient-to-br from-cream/15 to-cream/8 backdrop-blur-sm p-8 shadow-2xl border border-gold/30 hover:border-gold/50 transition-all duration-500"
//           >
//             {/* Glass reflection effect */}
//             <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
//             <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute -top-20 -right-20 w-32 h-32 opacity-20"
//             >
//               <Sparkles className="w-full h-full text-gold" />
//             </motion.div>

//             <motion.div
//               initial={{ y: -10, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="relative inline-block">
//                 <Sparkles className="h-8 w-8 text-gold mx-auto mb-3" strokeWidth={1.5} />
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold"
//                 />
//               </div>
//             </motion.div>

//             <div className="flex items-center justify-center gap-3 mb-4">
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//               <motion.span
//                 initial={{ letterSpacing: "0.2em" }}
//                 whileInView={{ letterSpacing: "0.4em" }}
//                 transition={{ duration: 0.4 }}
//                 className="text-[10px] uppercase tracking-[0.4em] text-gold font-semibold"
//               >
//                 Wholesale
//               </motion.span>
//               <span className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-transparent" />
//             </div>

//             <motion.h2
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-4"
//             >
//               Special pricing for{' '}
//               <span className="relative inline-block">
//                 <span className="italic bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
//                   bulk orders
//                 </span>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   transition={{ duration: 0.6, delay: 0.6 }}
//                   className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-transparent"
//                 />
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.4, delay: 0.3 }}
//               className="text-cream/80 text-sm md:text-base max-w-2xl mx-auto mb-8"
//             >
//               Partner with India's most trusted Assam Tea dealer. Get premium quality at wholesale prices.
//             </motion.p>

//             {/* Features grid */}
//             <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-8">
//               {features.map((f, i) => {
//                 const Icon = f.icon;
//                 return (
//                   <motion.div
//                     key={f.text}
//                     initial={{ opacity: 0, x: -15 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: i * 0.08 }}
//                     whileHover={{ scale: 1.02, x: 3 }}
//                     className="group relative overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-r from-forest-deep/70 to-transparent backdrop-blur-sm hover:border-gold/50 transition-all duration-300"
//                   >
//                     <div className="flex items-center gap-3 p-3">
//                       <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
//                         <Icon className="w-4 h-4 text-gold" />
//                       </div>
//                       <span className="text-cream/90 text-xs md:text-sm font-medium text-left">{f.text}</span>
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               className="flex flex-wrap items-center justify-center gap-3 mb-10"
//             >
//               <a
//                 href="#contact"
//                 className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-amber-500 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-forest-deep font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
//               >
//                 <span className="relative z-10">Get Custom Quote</span>
//                 <TrendingUp className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </a>
//               <a
//                 href="https://wa.me/98490 23900"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center gap-2 rounded-full border-2 border-gold/50 bg-transparent px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-gold font-semibold hover:bg-gold/20 hover:border-gold transition-all duration-300 hover:scale-105"
//               >
//                 <MessageCircle className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
//                 WhatsApp Us
//               </a>
//             </motion.div>

//             {/* Stats Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gold/30"
//             >
//               {stats.map((s, i) => {
//                 const Icon = s.icon;
//                 return (
//                   <motion.div
//                     key={s.label}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.4, delay: s.delay }}
//                     whileHover={{ scale: 1.05 }}
//                     className="group text-center"
//                   >
//                     <div className="relative inline-block mb-2">
//                       <div className="w-10 h-10 mx-auto rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-all duration-300">
//                         <Icon className="w-5 h-5 text-gold" />
//                       </div>
//                       <motion.div
//                         animate={{ scale: [1, 1.2, 1] }}
//                         transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
//                         className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-gold"
//                       />
//                     </div>
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: s.delay + 0.2 }}
//                       className="font-display text-2xl md:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-gold to-amber-400 bg-clip-text"
//                     >
//                       <Counter to={s.v} suffix={s.suffix} />
//                     </motion.div>
//                     <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-cream/60 font-medium group-hover:text-cream/80 transition-colors">
//                       {s.label}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>

//             {/* Trust badge */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.4, delay: 0.8 }}
//               className="mt-6 pt-4 text-center"
//             >
//               <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/10 border border-gold/30 backdrop-blur-sm">
//                 <Shield className="w-3 h-3 text-gold" />
//                 <span className="text-cream/60 text-[9px] uppercase tracking-wider">Trusted by 500+ buyers</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Bulk Purchase Categories Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-12"
//         >
//           <div className="text-center mb-8">
//             <h3 className="font-display text-2xl md:text-3xl text-cream mb-2">
//               Bulk Purchase Solutions For
//             </h3>
//             <p className="text-cream/60 text-sm">
//               Tailored Tea solutions for every business need
//             </p>
//           </div>

//           {/* Category Tabs */}
//           <div className="flex flex-wrap justify-center gap-2 mb-8">
//             {bulkCategories.map((category) => {
//               const Icon = category.icon;
//               const isActive = activeCategory === category.id;
//               return (
//                 <button
//                   key={category.id}
//                   onClick={() => setActiveCategory(category.id)}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     isActive
//                       ? "bg-gold text-forest-deep shadow-lg shadow-gold/25"
//                       : "bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20"
//                   }`}
//                 >
//                   <Icon className={`w-4 h-4 ${isActive ? "text-forest-deep" : "text-gold"}`} />
//                   {category.title}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Category Cards */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {bulkCategories.map((category, index) => {
//               const Icon = category.icon;
//               const isActive = activeCategory === category.id;
//               return (
//                 <motion.div
//                   key={category.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.02 }}
//                   className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${category.color} backdrop-blur-sm border transition-all duration-500 ${
//                     isActive 
//                       ? "border-gold/50 shadow-lg shadow-gold/20" 
//                       : "border-gold/20 hover:border-gold/40"
//                   }`}
//                 >
//                   <div className="p-6">
//                     <div className="flex items-start justify-between mb-3">
//                       <div className="flex items-center gap-3">
//                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
//                           isActive ? "bg-gold/30" : "bg-gold/20 group-hover:bg-gold/30"
//                         } transition-colors duration-300`}>
//                           <Icon className={`w-6 h-6 ${isActive ? "text-gold" : "text-gold/80"}`} />
//                         </div>
//                         <h4 className="font-display text-xl text-cream">{category.title}</h4>
//                       </div>
//                       {isActive && (
//                         <div className="px-2 py-1 rounded-full bg-gold/20 text-gold text-[8px] uppercase tracking-wider font-semibold">
//                           Selected
//                         </div>
//                       )}
//                     </div>

//                     <p className="text-cream/70 text-sm leading-relaxed mb-4">
//                       {category.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {category.features.map((feature, idx) => (
//                         <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
//                           {feature}
//                         </span>
//                       ))}
//                     </div>

//                     <a
//                       href="#contact"
//                       className="inline-flex items-center gap-1.5 text-gold text-xs font-medium hover:gap-2 transition-all duration-300 group"
//                     >
//                       Get Quote
//                       <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//                     </a>
//                   </div>

//                   {/* Hover glow effect */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -skew-x-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Additional CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="text-center mt-8"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-gold/20 backdrop-blur-sm">
//               <Users className="w-4 h-4 text-gold" />
//               <span className="text-cream/60 text-xs">
//                 Custom solutions available for your specific business needs
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }






import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  MessageCircle, 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Truck, 
  Award, 
  CheckCircle,
  Hotel,
  Utensils,
  Coffee,
  Building2,
  Users,
  ArrowRight
} from "lucide-react";
import { TeaParticles } from "./TeaParticles";
import bulkBg from "@/assets/assamgarden1.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 2000;
    let raf = 0;
    const tick = (t: number) => {
      const elapsed = t - start;
      const progress = Math.min(1, elapsed / dur);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(to * easeOutCubic));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const stats = [
  { v: 35, suffix: "+", label: "Years Experience", icon: Award, delay: 0 },
  { v: 500, suffix: "+", label: "Happy Buyers", icon: TrendingUp, delay: 0.1 },
  { v: 200, suffix: "+", label: "Tea Gardens", icon: Sparkles, delay: 0.2 },
  { v: 100, suffix: "%", label: "Service Excellence & Satisfaction", icon: Shield, delay: 0.3 },
];

const features = [
  { text: "Special Wholesale Pricing for Bulk Orders", icon: TrendingUp },
  { text: "Premium Assam Tea with a Reliable & Strong Supply Chain", icon: CheckCircle },
  { text: "Premium Tea Selection from various Assam Tea Gardens", icon: Award },
  { text: "Export Quality Assured", icon: Truck },
];

// Bulk Purchase Categories
const bulkCategories = [
  {
    id: "hotels",
    icon: Hotel,
    title: "Hotels",
    description: "Premium Tea solutions for luxury hotels, boutique stays, and hospitality chains.",
    features: ["Premium Packaging", "Consistent Quality", "Bulk Discounts", "Custom Branding"],
    color: "from-amber-500/20 to-amber-600/10"
  },
  {
    id: "restaurants",
    icon: Utensils,
    title: "Restaurants",
    description: "Authentic Assam Tea to complement your restaurant's culinary experience.",
    features: ["Restaurant Grade", "Masala Chai Blends", "Competitive Pricing", "Regular Supply","Irani Tea"],
    color: "from-orange-500/20 to-orange-600/10"
  },
  {
    id: "cafes",
    icon: Coffee,
    title: "Cafes & Tea Shops",
    description: "Build your cafe's reputation with the finest Assam Tea selection.",
    features: ["Specialty Blends", "Eye-catching Packaging", "Training Support", "Marketing Materials"],
    color: "from-gold/20 to-amber-500/10"
  },
  {
    id: "offices",
    icon: Building2,
    title: "Offices & Corporates",
    description: "Keep your Team energized with premium Tea in your office pantry.",
    features: ["Bulk Packaging", "Tea Bags & Loose Leaf", "Flexible Ordering", "Nationwide Delivery"],
    color: "from-blue-500/20 to-blue-600/10"
  },
  {
    id: "institutions",
    icon: Users,
    title: "Institutions & Events",
    description: "Reliable Tea supply for schools, colleges, hospitals, and large events.",
    features: ["Institutional Pricing", "Large Volume Orders", "Custom Blends", "Timely Dispatch"],
    color: "from-green-500/20 to-green-600/10"
  }
];

export function BulkOrder() {
  const [activeCategory, setActiveCategory] = useState<string>("hotels");

  return (
    <section id="bulk" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background with visible image */}
      <div className="absolute inset-0">
        <img 
          src={bulkBg} 
          alt="Tea plantation background" 
          className="h-full w-full object-cover object-center" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/60 via-forest-deep/40 to-forest-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-forest-deep/30" />
      </div>
      
      <TeaParticles count={18} />

      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-2xl bg-gradient-to-br from-cream/15 to-cream/8 backdrop-blur-sm p-8 md:p-10 shadow-2xl border border-gold/30 hover:border-gold/50 transition-all duration-500"
          >
            {/* Glass reflection effect */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
            <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-32 h-32 opacity-20"
            >
              <Sparkles className="w-full h-full text-gold" />
            </motion.div>

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative inline-block">
                <Sparkles className="h-12 w-12 text-gold mx-auto mb-4" strokeWidth={1.5} />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold"
                />
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <motion.span
                initial={{ letterSpacing: "0.2em" }}
                whileInView={{ letterSpacing: "0.4em" }}
                transition={{ duration: 0.4 }}
                className="text-base uppercase tracking-[0.4em] text-gold font-semibold"
              >
                Wholesale
              </motion.span>
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
            >
              Special pricing for{' '}
              <span className="relative inline-block">
                <span className="italic bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                  bulk orders
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-transparent"
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Partner with India's most trusted Assam Tea dealer. Get premium quality at wholesale prices.
            </motion.p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.text}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ scale: 1.02, x: 3 }}
                    className="group relative overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-r from-forest-deep/70 to-transparent backdrop-blur-sm hover:border-gold/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 p-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <span className="text-cream/90 text-base md:text-lg font-medium text-left">{f.text}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-10"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold to-amber-500 px-10 py-4 text-base uppercase tracking-[0.2em] text-forest-deep font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Get Custom Quote</span>
                <TrendingUp className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="https://wa.me/919849023900"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-gold/50 bg-transparent px-10 py-4 text-base uppercase tracking-[0.2em] text-gold font-semibold hover:bg-gold/20 hover:border-gold transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gold/30"
            >
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: s.delay }}
                    whileHover={{ scale: 1.05 }}
                    className="group text-center"
                  >
                    <div className="relative inline-block mb-3">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-all duration-300">
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: s.delay + 0.2 }}
                      className="font-display text-4xl md:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-gold to-amber-400 bg-clip-text"
                    >
                      <Counter to={s.v} suffix={s.suffix} />
                    </motion.div>
                    <div className="mt-2 text-sm uppercase tracking-[0.3em] text-cream/60 font-medium group-hover:text-cream/80 transition-colors">
                      {s.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-8 pt-4 text-center"
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-cream/10 border border-gold/30 backdrop-blur-sm">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-cream/60 text-sm uppercase tracking-wider">Trusted by 500+ buyers</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bulk Purchase Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-4xl md:text-5xl text-cream mb-3">
              Bulk Purchase Solutions For
            </h3>
            <p className="text-cream/60 text-lg">
              Tailored Tea solutions for every business need
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {bulkCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gold text-forest-deep shadow-lg shadow-gold/25"
                      : "bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? "text-forest-deep" : "text-gold"}`} />
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bulkCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${category.color} backdrop-blur-sm border transition-all duration-500 ${
                    isActive 
                      ? "border-gold/50 shadow-lg shadow-gold/20" 
                      : "border-gold/20 hover:border-gold/40"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                          isActive ? "bg-gold/30" : "bg-gold/20 group-hover:bg-gold/30"
                        } transition-colors duration-300`}>
                          <Icon className={`w-8 h-8 ${isActive ? "text-gold" : "text-gold/80"}`} />
                        </div>
                        <h4 className="font-display text-2xl md:text-3xl text-cream">{category.title}</h4>
                      </div>
                      {isActive && (
                        <div className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs uppercase tracking-wider font-semibold">
                          Selected
                        </div>
                      )}
                    </div>

                    <p className="text-cream/70 text-lg leading-relaxed mb-4">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.features.map((feature, idx) => (
                        <span key={idx} className="text-sm px-3 py-1.5 rounded-full bg-cream/10 text-cream/60 border border-gold/20">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-gold text-base font-medium hover:gap-3 transition-all duration-300 group"
                    >
                      Get Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -skew-x-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cream/10 border border-gold/20 backdrop-blur-sm">
              <Users className="w-6 h-6 text-gold" />
              <span className="text-cream/60 text-base">
                Custom solutions available for your specific business needs
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}