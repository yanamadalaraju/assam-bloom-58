// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { 
//   Star, 
//   Quote, 
//   ChevronLeft, 
//   ChevronRight, 
//   MessageCircle, 
//   Award,
//   Heart,
//   Sparkles,
//   MapPin
// } from "lucide-react";

// // Testimonial Data with Indian Names
// const testimonials = [
//   {
//     id: 1,
//     name: "Rajesh Kumar Agarwal",
//     position: "Distributor",
//     company: "Shree Sai Tea Traders",
//     location: "Mumbai",
//     rating: 5,
//     text: "Outstanding quality and service! R K Tea has been our trusted partner for over 3 years. Their consistency in quality and timely deliveries have helped us grow our business significantly.",
//     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
//     verified: true
//   },
//   {
//     id: 2,
//     name: "Priya Sharma",
//     position: "Retailer",
//     company: "Premium Tea House",
//     location: "Delhi",
//     rating: 5,
//     text: "The best Assam Tea I've ever sourced. The aroma and taste are exceptional. Customer support is fantastic and they always go the extra mile.",
//     image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
//     verified: true
//   },
//   {
//     id: 3,
//     name: "Amit Patel",
//     position: "Exporter",
//     company: "Global Tea Exports",
//     location: "Ahmedabad",
//     rating: 5,
//     text: "Export quality packaging and consistent product quality. Our international clients love the Tea. Highly recommended for bulk orders.",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
//     verified: true
//   },
//   {
//     id: 4,
//     name: "Sunita Reddy",
//     position: "Cafe Owner",
//     company: "Chai Point Cafe",
//     location: "Bangalore",
//     rating: 4,
//     text: "Great value for money. The masala chai blend is a hit at our cafe. Regular supply and good pricing. Customers love the authentic taste.",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
//     verified: true
//   },
//   {
//     id: 5,
//     name: "Vikram Singh Rathore",
//     position: "Wholesaler",
//     company: "Eastern Tea Agency",
//     location: "Kolkata",
//     rating: 5,
//     text: "Professional Team, excellent communication, and top-notch quality. Their bulk pricing is very competitive. Best in the industry!",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
//     verified: true
//   },
//   {
//     id: 6,
//     name: "Neha Gupta",
//     position: "Online Retailer",
//     company: "TeaCup Online",
//     location: "Jaipur",
//     rating: 5,
//     text: "The packaging options are great for online sales. Products reach customers fresh and intact. Very satisfied with the quality.",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
//     verified: true
//   }
// ];

// export function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index: number) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-10 md:py-10 overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #234B2F 1px, transparent 0)`,
//           backgroundSize: "40px 40px"
//         }} />
//       </div>

//       {/* Background Orbs */}
//       <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

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
//             <MessageCircle className="w-3 h-3 text-gold" />
//             <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Testimonials</span>
//           </div>
          
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-4">
//             What Our{' '}
//             <span className="relative whitespace-nowrap">
//               <span className="italic text-gold">Clients Say</span>
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
//             Trusted by 500+ businesses across India. Here's what our partners say.
//           </p>
//         </motion.div>

//         {/* Single Carousel */}
//         <div className="relative max-w-4xl mx-auto">
//           <div className="relative h-[400px] md:h-[380px]">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 initial={{ opacity: 0, x: direction * 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: direction * -100 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="absolute inset-0"
//               >
//                 {/* Card with NO white space - Full bleed design */}
//                 <div className="w-full h-full bg-gradient-to-br from-white to-amber-50/50 rounded-2xl shadow-xl overflow-hidden border border-gold/20">
//                   {/* Quote Icon */}
//                   <div className="absolute top-6 right-6 z-10">
//                     <Quote className="w-12 h-12 text-gold/15" />
//                   </div>
                  
//                   <div className="h-full flex flex-col p-8">
//                     {/* Rating Stars */}
//                     <div className="flex items-center gap-1 mb-4">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className={`w-5 h-5 ${
//                             i < testimonials[currentIndex].rating
//                               ? "text-gold fill-gold"
//                               : "text-gray-300"
//                           }`}
//                         />
//                       ))}
//                     </div>

//                     {/* Testimonial Text - Takes available space */}
//                     <div className="flex-1 flex items-center">
//                       <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                         "{testimonials[currentIndex].text}"
//                       </p>
//                     </div>

//                     {/* Client Info - Fixed at bottom */}
//                     <div className="flex items-center gap-4 pt-6 mt-4 border-t border-gray-100">
//                       <img
//                         src={testimonials[currentIndex].image}
//                         alt={testimonials[currentIndex].name}
//                         className="w-14 h-14 rounded-full object-cover border-2 border-gold flex-shrink-0"
//                       />
//                       <div className="flex-1 min-w-0">
//                         <h4 className="font-semibold text-forest-deep text-lg truncate">
//                           {testimonials[currentIndex].name}
//                         </h4>
//                         <p className="text-gray-500 text-sm">
//                           {testimonials[currentIndex].position} • {testimonials[currentIndex].company}
//                         </p>
//                         <div className="flex items-center gap-1 mt-1">
//                           <MapPin className="w-3 h-3 text-gold" />
//                           <span className="text-gray-400 text-xs">{testimonials[currentIndex].location}</span>
//                         </div>
//                       </div>
//                       {testimonials[currentIndex].verified && (
//                         <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-600 text-[10px] whitespace-nowrap flex-shrink-0">
//                           <Award className="w-3 h-3" />
//                           Verified
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation Buttons - Properly positioned */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 z-20"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 z-20"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>

//           {/* Dot Indicators */}
//           <div className="flex justify-center gap-2 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`transition-all duration-300 ${
//                   currentIndex === index
//                     ? "w-8 h-2 bg-gold rounded-full"
//                     : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gold/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Trust Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gold/20">
//             <Heart className="w-4 h-4 text-gold fill-gold" />
//             <span className="text-sm text-gray-600">Join 500+ satisfied businesses across India</span>
//             <Sparkles className="w-4 h-4 text-gold" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }






// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { 
//   Star, 
//   Quote, 
//   ChevronLeft, 
//   ChevronRight, 
//   MessageCircle, 
//   Award,
//   Heart,
//   Sparkles,
//   MapPin,
//   Play,
//   Pause,
//   Maximize2,
//   Volume2,
//   VolumeX,
//   ThumbsUp
// } from "lucide-react";

// // Testimonial Data with Indian Names
// const testimonials = [
//   {
//     id: 1,
//     name: "Rajesh Kumar Agarwal",
//     position: "Distributor",
//     company: "Shree Sai Tea Traders",
//     location: "Mumbai",
//     rating: 5,
//     text: "Outstanding quality and service! R K Tea has been our trusted partner for over 3 years. Their consistency in quality and timely deliveries have helped us grow our business significantly.",
//     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 2,
//     name: "Priya Sharma",
//     position: "Retailer",
//     company: "Premium Tea House",
//     location: "Delhi",
//     rating: 5,
//     text: "The best Assam Tea I've ever sourced. The aroma and taste are exceptional. Customer support is fantastic and they always go the extra mile.",
//     image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 3,
//     name: "Amit Patel",
//     position: "Exporter",
//     company: "Global Tea Exports",
//     location: "Ahmedabad",
//     rating: 5,
//     text: "Export quality packaging and consistent product quality. Our international clients love the Tea. Highly recommended for bulk orders.",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 4,
//     name: "Sunita Reddy",
//     position: "Cafe Owner",
//     company: "Chai Point Cafe",
//     location: "Bangalore",
//     rating: 4,
//     text: "Great value for money. The masala chai blend is a hit at our cafe. Regular supply and good pricing. Customers love the authentic taste.",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 5,
//     name: "Vikram Singh Rathore",
//     position: "Wholesaler",
//     company: "Eastern Tea Agency",
//     location: "Kolkata",
//     rating: 5,
//     text: "Professional Team, excellent communication, and top-notch quality. Their bulk pricing is very competitive. Best in the industry!",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 6,
//     name: "Neha Gupta",
//     position: "Online Retailer",
//     company: "TeaCup Online",
//     location: "Jaipur",
//     rating: 5,
//     text: "The packaging options are great for online sales. Products reach customers fresh and intact. Very satisfied with the quality.",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   }
// ];

// // Video Testimonials Data
// const videoTestimonials = [
//   {
//     id: 1,
//     title: "Packaging Facility Tour",
//     description: "State-of-the-art packaging facility ensuring premium quality and freshness",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abc123", // Replace with actual video URL
//     thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop",
//     type: "facility",
//     duration: "2:45"
//   },
//   {
//     id: 2,
//     title: "Customer Testimonial - Rajesh Kumar",
//     description: "Hear from our satisfied distributor about their experience with R.K. Tea",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=def456", // Replace with actual video URL
//     thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
//     type: "testimonial",
//     duration: "3:20"
//   },
//   {
//     id: 3,
//     title: "Quality Control Process",
//     description: "How we ensure every batch meets the highest quality standards",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=ghi789", // Replace with actual video URL
//     thumbnail: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&h=450&fit=crop",
//     type: "facility",
//     duration: "4:10"
//   },
//   {
//     id: 4,
//     title: "Customer Testimonial - Priya Sharma",
//     description: "Our retail partner shares their success story with R.K. Tea",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=jkl012", // Replace with actual video URL
//     thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop",
//     type: "testimonial",
//     duration: "2:55"
//   }
// ];

// export function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [activeTab, setActiveTab] = useState<'written' | 'video'>('written');
//   const [playingVideo, setPlayingVideo] = useState<number | null>(null);
//   const [isMuted, setIsMuted] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (activeTab === 'written') {
//         handleNext();
//       }
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex, activeTab]);

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index: number) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   const handleVideoPlay = (videoId: number) => {
//     setPlayingVideo(playingVideo === videoId ? null : videoId);
//   };

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-10 md:py-10 overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #234B2F 1px, transparent 0)`,
//           backgroundSize: "40px 40px"
//         }} />
//       </div>

//       {/* Background Orbs */}
//       <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-8"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
//             <MessageCircle className="w-3 h-3 text-gold" />
//             <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Testimonials</span>
//           </div>
          
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-4">
//             What Our{' '}
//             <span className="relative whitespace-nowrap">
//               <span className="italic text-gold">Clients Say</span>
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
//             Trusted by 500+ businesses across India. Here's what our partners say.
//           </p>
//         </motion.div>

//         {/* Tab Buttons */}
//         <div className="flex justify-center gap-4 mb-8">
//           <button
//             onClick={() => {
//               setActiveTab('written');
//               setCurrentIndex(0);
//             }}
//             className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//               activeTab === 'written'
//                 ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                 : 'bg-white/50 text-gray-600 hover:bg-gold/10 border border-gold/20'
//             }`}
//           >
//             <Star className="w-4 h-4" />
//             Written Reviews
//           </button>
//           <button
//             onClick={() => {
//               setActiveTab('video');
//               setCurrentIndex(0);
//             }}
//             className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//               activeTab === 'video'
//                 ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                 : 'bg-white/50 text-gray-600 hover:bg-gold/10 border border-gold/20'
//             }`}
//           >
//             <Play className="w-4 h-4" />
//             Video Testimonials
//           </button>
//         </div>

//         {/* Content */}
//         {activeTab === 'written' ? (
//           // Written Testimonials Carousel
//           <div className="relative max-w-4xl mx-auto">
//             <div className="relative h-[400px] md:h-[380px]">
//               <AnimatePresence mode="wait" custom={direction}>
//                 <motion.div
//                   key={currentIndex}
//                   custom={direction}
//                   initial={{ opacity: 0, x: direction * 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: direction * -100 }}
//                   transition={{ duration: 0.5, ease: "easeInOut" }}
//                   className="absolute inset-0"
//                 >
//                   <div className="w-full h-full bg-gradient-to-br from-white to-amber-50/50 rounded-2xl shadow-xl overflow-hidden border border-gold/20">
//                     <div className="absolute top-6 right-6 z-10">
//                       <Quote className="w-12 h-12 text-gold/15" />
//                     </div>
                    
//                     <div className="h-full flex flex-col p-8">
//                       <div className="flex items-center gap-1 mb-4">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-5 h-5 ${
//                               i < testimonials[currentIndex].rating
//                                 ? "text-gold fill-gold"
//                                 : "text-gray-300"
//                             }`}
//                           />
//                         ))}
//                       </div>

//                       <div className="flex-1 flex items-center">
//                         <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                           "{testimonials[currentIndex].text}"
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-4 pt-6 mt-4 border-t border-gray-100">
//                         <img
//                           src={testimonials[currentIndex].image}
//                           alt={testimonials[currentIndex].name}
//                           className="w-14 h-14 rounded-full object-cover border-2 border-gold flex-shrink-0"
//                         />
//                         <div className="flex-1 min-w-0">
//                           <h4 className="font-semibold text-forest-deep text-lg truncate">
//                             {testimonials[currentIndex].name}
//                           </h4>
//                           <p className="text-gray-500 text-sm">
//                             {testimonials[currentIndex].position} • {testimonials[currentIndex].company}
//                           </p>
//                           <div className="flex items-center gap-1 mt-1">
//                             <MapPin className="w-3 h-3 text-gold" />
//                             <span className="text-gray-400 text-xs">{testimonials[currentIndex].location}</span>
//                           </div>
//                         </div>
//                         {testimonials[currentIndex].verified && (
//                           <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-600 text-[10px] whitespace-nowrap flex-shrink-0">
//                             <Award className="w-3 h-3" />
//                             Verified
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Navigation Buttons */}
//             <button
//               onClick={handlePrev}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 z-20"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 z-20"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>

//             {/* Dot Indicators */}
//             <div className="flex justify-center gap-2 mt-8">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`transition-all duration-300 ${
//                     currentIndex === index
//                       ? "w-8 h-2 bg-gold rounded-full"
//                       : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gold/50"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         ) : (
//           // Video Testimonials Grid
//           <div className="grid md:grid-cols-2 gap-6">
//             {videoTestimonials.map((video, index) => (
//               <motion.div
//                 key={video.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group relative rounded-2xl overflow-hidden shadow-xl border border-gold/20 hover:border-gold/40 transition-all duration-300"
//               >
//                 {playingVideo === video.id ? (
//                   // Video Player
//                   <div className="relative aspect-video bg-black">
//                     <iframe
//                       src={video.videoUrl}
//                       title={video.title}
//                       className="w-full h-full"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     />
//                     <button
//                       onClick={() => handleVideoPlay(video.id)}
//                       className="absolute top-2 right-2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
//                     >
//                       <Pause className="w-4 h-4" />
//                     </button>
//                     <button
//                       onClick={toggleMute}
//                       className="absolute bottom-2 right-2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
//                     >
//                       {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
//                     </button>
//                     <button
//                       className="absolute bottom-2 left-2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
//                       onClick={() => {
//                         const iframe = document.querySelector(`iframe[title="${video.title}"]`);
//                         if (iframe) {
//                           // @ts-ignore
//                           iframe.requestFullscreen?.();
//                         }
//                       }}
//                     >
//                       <Maximize2 className="w-4 h-4" />
//                     </button>
//                   </div>
//                 ) : (
//                   // Thumbnail with Play Button
//                   <div 
//                     className="relative aspect-video cursor-pointer group"
//                     onClick={() => handleVideoPlay(video.id)}
//                   >
//                     <img
//                       src={video.thumbnail}
//                       alt={video.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
//                     {/* Play Button Overlay */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gold shadow-2xl">
//                         <Play className="w-8 h-8 text-forest-deep ml-1" />
//                       </div>
//                     </div>

//                     {/* Duration Badge */}
//                     <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-white text-xs">
//                       {video.duration}
//                     </div>

//                     {/* Type Badge */}
//                     <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold/90 text-forest-deep text-xs font-semibold uppercase tracking-wider">
//                       {video.type === 'facility' ? '📦 Facility Tour' : '🎤 Testimonial'}
//                     </div>
//                   </div>
//                 )}

//                 {/* Video Info */}
//                 <div className="p-4 bg-white">
//                   <h4 className="font-semibold text-forest-deep text-base">
//                     {video.title}
//                   </h4>
//                   <p className="text-gray-500 text-sm mt-1">
//                     {video.description}
//                   </p>
//                   <div className="flex items-center gap-4 mt-2">
//                     <button
//                       onClick={() => handleVideoPlay(video.id)}
//                       className="inline-flex items-center gap-1.5 text-gold text-xs font-medium hover:text-amber-600 transition-colors"
//                     >
//                       {playingVideo === video.id ? 'Close Video' : 'Watch Video'}
//                       <Play className="w-3 h-3" />
//                     </button>
//                     <span className="text-gray-300">|</span>
//                     <div className="flex items-center gap-1 text-gray-400 text-xs">
//                       <ThumbsUp className="w-3 h-3" />
//                       <span>Trusted</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* Trust Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gold/20">
//             <Heart className="w-4 h-4 text-gold fill-gold" />
//             <span className="text-sm text-gray-600">Join 500+ satisfied businesses across India</span>
//             <Sparkles className="w-4 h-4 text-gold" />
//           </div>
//         </motion.div>

//         {/* Video CTA */}
//         {activeTab === 'video' && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="text-center mt-8"
//           >
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20 text-sm"
//             >
//               <MessageCircle className="w-4 h-4" />
//               Share Your Story
//             </a>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }



// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { 
//   Star, 
//   Quote, 
//   ChevronLeft, 
//   ChevronRight, 
//   MessageCircle, 
//   Award,
//   Heart,
//   Sparkles,
//   MapPin,
//   Play,
//   Pause,
//   Maximize2,
//   Volume2,
//   VolumeX,
//   ThumbsUp,
//   Users,
//   Store,
//   Building2,
//   User
// } from "lucide-react";

// // Testimonial Data with Categories
// const testimonials = [
//   // Distributors
//   {
//     id: 1,
//     name: "Rajesh Kumar Agarwal",
//     position: "Distributor",
//     company: "Shree Sai Tea Traders",
//     location: "Mumbai",
//     category: "distributor",
//     rating: 5,
//     text: "Outstanding quality and service! R K Tea has been our trusted partner for over 3 years. Their consistency in quality and timely deliveries have helped us grow our business significantly. We've expanded our distribution network by 40% since partnering with them.",
//     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 5,
//     name: "Vikram Singh Rathore",
//     position: "Distributor",
//     company: "Eastern Tea Agency",
//     location: "Kolkata",
//     category: "distributor",
//     rating: 5,
//     text: "Professional Team, excellent communication, and top-notch quality. Their bulk pricing is very competitive. We've been able to serve 200+ retail partners with their consistent supply. Best in the industry!",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 8,
//     name: "Sanjay Mehta",
//     position: "Distributor",
//     company: "Mehta Tea Distributors",
//     location: "Indore",
//     category: "distributor",
//     rating: 5,
//     text: "The quality consistency is unmatched. Our customers specifically ask for R K Tea by name. The packaging and delivery schedules are always on point. A truly reliable partner for any distributor.",
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },

//   // Retailers
//   {
//     id: 2,
//     name: "Priya Sharma",
//     position: "Retailer",
//     company: "Premium Tea House",
//     location: "Delhi",
//     category: "retailer",
//     rating: 5,
//     text: "The best Assam Tea I've ever sourced. The aroma and taste are exceptional. Customer support is fantastic and they always go the extra mile. My customers keep coming back for the premium quality.",
//     image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 4,
//     name: "Sunita Reddy",
//     position: "Retailer",
//     company: "Chai Point Cafe",
//     location: "Bangalore",
//     category: "retailer",
//     rating: 4,
//     text: "Great value for money. The masala chai blend is a hit at our cafe. Regular supply and good pricing. Customers love the authentic taste and keep coming back for more.",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 6,
//     name: "Neha Gupta",
//     position: "Retailer",
//     company: "TeaCup Online",
//     location: "Jaipur",
//     category: "retailer",
//     rating: 5,
//     text: "The packaging options are great for online sales. Products reach customers fresh and intact. The variety of Tea options helps us cater to different customer preferences. Very satisfied with the quality.",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },

//   // Consumers
//   {
//     id: 7,
//     name: "Dr. Ananya Reddy",
//     position: "Tea Enthusiast",
//     company: "Regular Customer",
//     location: "Hyderabad",
//     category: "consumer",
//     rating: 5,
//     text: "I've been drinking Assam Tea for 20 years, and R K Tea is the best I've found. The flavor is authentic and rich. It's my go-to morning Tea now. The quality is consistently excellent.",
//     image: "https://images.unsplash.com/photo-1554151228-14d9bef656c4?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 9,
//     name: "Prof. Amit Desai",
//     position: "Tea Connoisseur",
//     company: "Regular Customer",
//     location: "Pune",
//     category: "consumer",
//     rating: 5,
//     text: "The golden tips and rich maltiness of R K Tea's premium range remind me of the finest Assam Teas. I've recommended it to all my colleagues and family. Truly exceptional quality.",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
//   {
//     id: 10,
//     name: "Meera Iyer",
//     position: "Homemaker",
//     company: "Regular Customer",
//     location: "Chennai",
//     category: "consumer",
//     rating: 4,
//     text: "I started buying R K Tea for my family and now it's the only Tea we drink. The flavor is perfect for our morning chai. Even my children love it. Great value for money!",
//     image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
//     verified: true,
//     video: null
//   },
// ];

// // Video Testimonials Data with Categories
// const videoTestimonials = [
//   {
//     id: 1,
//     title: "Packaging Facility Tour",
//     description: "State-of-the-art packaging facility ensuring premium quality and freshness",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abc123",
//     thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop",
//     type: "facility",
//     category: "facility",
//     duration: "2:45"
//   },
//   {
//     id: 2,
//     title: "Distributor Success Story",
//     description: "Rajesh Kumar shares how R.K. Tea helped grow his distribution business",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=def456",
//     thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
//     type: "testimonial",
//     category: "distributor",
//     duration: "3:20"
//   },
//   {
//     id: 3,
//     title: "Quality Control Process",
//     description: "How we ensure every batch meets the highest quality standards",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=ghi789",
//     thumbnail: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&h=450&fit=crop",
//     type: "facility",
//     category: "facility",
//     duration: "4:10"
//   },
//   {
//     id: 4,
//     title: "Retailer Experience",
//     description: "Priya Sharma shares her success story with R.K. Tea at her Tea house",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=jkl012",
//     thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop",
//     type: "testimonial",
//     category: "retailer",
//     duration: "2:55"
//   }
// ];

// export function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [activeTab, setActiveTab] = useState<'written' | 'video'>('written');
//   const [activeCategory, setActiveCategory] = useState<'all' | 'distributor' | 'retailer' | 'consumer'>('all');
//   const [playingVideo, setPlayingVideo] = useState<number | null>(null);
//   const [isMuted, setIsMuted] = useState(true);

//   // Filter testimonials based on category
//   const filteredTestimonials = activeCategory === 'all' 
//     ? testimonials 
//     : testimonials.filter(t => t.category === activeCategory);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (activeTab === 'written') {
//         handleNext();
//       }
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex, activeTab, activeCategory]);

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index: number) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   const handleVideoPlay = (videoId: number) => {
//     setPlayingVideo(playingVideo === videoId ? null : videoId);
//   };

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   // Filter video testimonials
//   const filteredVideos = activeCategory === 'all' 
//     ? videoTestimonials 
//     : videoTestimonials.filter(v => v.category === activeCategory);

//   const categoryTabs = [
//     { id: 'all', label: 'All Testimonials', icon: Users },
//     { id: 'distributor', label: 'Distributors', icon: Building2 },
//     { id: 'retailer', label: 'Retailers', icon: Store },
//     { id: 'consumer', label: 'Consumers', icon: User },
//   ];

//   const getCategoryCount = (category: string) => {
//     if (category === 'all') return testimonials.length;
//     return testimonials.filter(t => t.category === category).length;
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-10 md:py-10 overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #234B2F 1px, transparent 0)`,
//           backgroundSize: "40px 40px"
//         }} />
//       </div>

//       {/* Background Orbs */}
//       <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-8"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
//             <MessageCircle className="w-3 h-3 text-gold" />
//             <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Testimonials</span>
//           </div>
          
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-4">
//             What Our{' '}
//             <span className="relative whitespace-nowrap">
//               <span className="italic text-gold">Clients Say</span>
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
//             Trusted by 500+ businesses across India. Here's what our partners say.
//           </p>
//         </motion.div>

//         {/* Category Filter Tabs */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           {categoryTabs.map((cat) => {
//             const Icon = cat.icon;
//             const isActive = activeCategory === cat.id;
//             return (
//               <button
//                 key={cat.id}
//                 onClick={() => {
//                   setActiveCategory(cat.id as any);
//                   setCurrentIndex(0);
//                 }}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
//                   isActive
//                     ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                     : 'bg-white/50 text-gray-600 hover:bg-gold/10 border border-gold/20'
//                 }`}
//               >
//                 <Icon className="w-4 h-4" />
//                 {cat.label}
//                 <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
//                   isActive ? 'bg-forest-deep/20 text-forest-deep' : 'bg-gray-200 text-gray-500'
//                 }`}>
//                   {getCategoryCount(cat.id)}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Content Type Tabs */}
//         <div className="flex justify-center gap-4 mb-8">
//           <button
//             onClick={() => {
//               setActiveTab('written');
//               setCurrentIndex(0);
//             }}
//             className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//               activeTab === 'written'
//                 ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                 : 'bg-white/50 text-gray-600 hover:bg-gold/10 border border-gold/20'
//             }`}
//           >
//             <Star className="w-4 h-4" />
//             Written Reviews
//           </button>
//           <button
//             onClick={() => {
//               setActiveTab('video');
//               setCurrentIndex(0);
//             }}
//             className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//               activeTab === 'video'
//                 ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                 : 'bg-white/50 text-gray-600 hover:bg-gold/10 border border-gold/20'
//             }`}
//           >
//             <Play className="w-4 h-4" />
//             Video Testimonials
//           </button>
//         </div>

//         {/* Content */}
//         {activeTab === 'written' ? (
//           // Written Testimonials Carousel
//           <div className="relative max-w-4xl mx-auto">
//             {filteredTestimonials.length === 0 ? (
//               <div className="text-center py-12 text-gray-500">
//                 No testimonials found for this category.
//               </div>
//             ) : (
//               <>
//                 <div className="relative h-[420px] md:h-[400px]">
//                   <AnimatePresence mode="wait" custom={direction}>
//                     <motion.div
//                       key={currentIndex}
//                       custom={direction}
//                       initial={{ opacity: 0, x: direction * 100 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: direction * -100 }}
//                       transition={{ duration: 0.5, ease: "easeInOut" }}
//                       className="absolute inset-0"
//                     >
//                       <div className="w-full h-full bg-gradient-to-br from-white to-amber-50/50 rounded-2xl shadow-xl overflow-hidden border border-gold/20">
//                         <div className="absolute top-6 right-6 z-10">
//                           <Quote className="w-12 h-12 text-gold/15" />
//                         </div>
                        
//                         <div className="h-full flex flex-col p-8">
//                           <div className="flex items-center justify-between mb-4">
//                             <div className="flex items-center gap-1">
//                               {[...Array(5)].map((_, i) => (
//                                 <Star
//                                   key={i}
//                                   className={`w-5 h-5 ${
//                                     i < filteredTestimonials[currentIndex].rating
//                                       ? "text-gold fill-gold"
//                                       : "text-gray-300"
//                                   }`}
//                                 />
//                               ))}
//                             </div>
//                             {/* Category Badge */}
//                             <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium uppercase tracking-wider ${
//                               filteredTestimonials[currentIndex].category === 'distributor'
//                                 ? 'bg-blue-100 text-blue-600'
//                                 : filteredTestimonials[currentIndex].category === 'retailer'
//                                 ? 'bg-green-100 text-green-600'
//                                 : 'bg-purple-100 text-purple-600'
//                             }`}>
//                               {filteredTestimonials[currentIndex].category}
//                             </span>
//                           </div>

//                           <div className="flex-1 flex items-center">
//                             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                               "{filteredTestimonials[currentIndex].text}"
//                             </p>
//                           </div>

//                           <div className="flex items-center gap-4 pt-6 mt-4 border-t border-gray-100">
//                             <img
//                               src={filteredTestimonials[currentIndex].image}
//                               alt={filteredTestimonials[currentIndex].name}
//                               className="w-14 h-14 rounded-full object-cover border-2 border-gold flex-shrink-0"
//                             />
//                             <div className="flex-1 min-w-0">
//                               <h4 className="font-semibold text-forest-deep text-lg truncate">
//                                 {filteredTestimonials[currentIndex].name}
//                               </h4>
//                               <p className="text-gray-500 text-sm">
//                                 {filteredTestimonials[currentIndex].position} • {filteredTestimonials[currentIndex].company}
//                               </p>
//                               <div className="flex items-center gap-1 mt-1">
//                                 <MapPin className="w-3 h-3 text-gold" />
//                                 <span className="text-gray-400 text-xs">{filteredTestimonials[currentIndex].location}</span>
//                               </div>
//                             </div>
//                             {filteredTestimonials[currentIndex].verified && (
//                               <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-600 text-[10px] whitespace-nowrap flex-shrink-0">
//                                 <Award className="w-3 h-3" />
//                                 Verified
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>

//                 {/* Navigation Buttons */}
//                 {filteredTestimonials.length > 1 && (
//                   <>
//                     <button
//                       onClick={handlePrev}
//                       className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 z-20"
//                     >
//                       <ChevronLeft className="w-5 h-5" />
//                     </button>
//                     <button
//                       onClick={handleNext}
//                       className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 z-20"
//                     >
//                       <ChevronRight className="w-5 h-5" />
//                     </button>
//                   </>
//                 )}

//                 {/* Dot Indicators */}
//                 <div className="flex justify-center gap-2 mt-8">
//                   {filteredTestimonials.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => goToSlide(index)}
//                       className={`transition-all duration-300 ${
//                         currentIndex === index
//                           ? "w-8 h-2 bg-gold rounded-full"
//                           : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gold/50"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//         ) : (
//           // Video Testimonials Grid
//           <div className="grid md:grid-cols-2 gap-6">
//             {filteredVideos.length === 0 ? (
//               <div className="col-span-2 text-center py-12 text-gray-500">
//                 No video testimonials found for this category.
//               </div>
//             ) : (
//               filteredVideos.map((video, index) => (
//                 <motion.div
//                   key={video.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group relative rounded-2xl overflow-hidden shadow-xl border border-gold/20 hover:border-gold/40 transition-all duration-300"
//                 >
//                   {playingVideo === video.id ? (
//                     <div className="relative aspect-video bg-black">
//                       <iframe
//                         src={video.videoUrl}
//                         title={video.title}
//                         className="w-full h-full"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                       />
//                       <button
//                         onClick={() => handleVideoPlay(video.id)}
//                         className="absolute top-2 right-2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
//                       >
//                         <Pause className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={toggleMute}
//                         className="absolute bottom-2 right-2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
//                       >
//                         {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
//                       </button>
//                       <button
//                         className="absolute bottom-2 left-2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
//                         onClick={() => {
//                           const iframe = document.querySelector(`iframe[title="${video.title}"]`);
//                           if (iframe) {
//                             // @ts-ignore
//                             iframe.requestFullscreen?.();
//                           }
//                         }}
//                       >
//                         <Maximize2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   ) : (
//                     <div 
//                       className="relative aspect-video cursor-pointer group"
//                       onClick={() => handleVideoPlay(video.id)}
//                     >
//                       <img
//                         src={video.thumbnail}
//                         alt={video.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gold shadow-2xl">
//                           <Play className="w-8 h-8 text-forest-deep ml-1" />
//                         </div>
//                       </div>

//                       <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-white text-xs">
//                         {video.duration}
//                       </div>

//                       <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
//                         video.category === 'distributor'
//                           ? 'bg-blue-500/90 text-white'
//                           : video.category === 'retailer'
//                           ? 'bg-green-500/90 text-white'
//                           : 'bg-purple-500/90 text-white'
//                       }`}>
//                         {video.category === 'facility' ? '📦 Facility' : video.category}
//                       </div>
//                     </div>
//                   )}

//                   <div className="p-4 bg-white">
//                     <h4 className="font-semibold text-forest-deep text-base">
//                       {video.title}
//                     </h4>
//                     <p className="text-gray-500 text-sm mt-1">
//                       {video.description}
//                     </p>
//                     <div className="flex items-center gap-4 mt-2">
//                       <button
//                         onClick={() => handleVideoPlay(video.id)}
//                         className="inline-flex items-center gap-1.5 text-gold text-xs font-medium hover:text-amber-600 transition-colors"
//                       >
//                         {playingVideo === video.id ? 'Close Video' : 'Watch Video'}
//                         <Play className="w-3 h-3" />
//                       </button>
//                       <span className="text-gray-300">|</span>
//                       <div className="flex items-center gap-1 text-gray-400 text-xs">
//                         <ThumbsUp className="w-3 h-3" />
//                         <span>Trusted</span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))
//             )}
//           </div>
//         )}

//         {/* Trust Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gold/20">
//             <Heart className="w-4 h-4 text-gold fill-gold" />
//             <span className="text-sm text-gray-600">Join 500+ satisfied businesses across India</span>
//             <Sparkles className="w-4 h-4 text-gold" />
//           </div>
//         </motion.div>

//         {/* Video CTA */}
//         {activeTab === 'video' && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="text-center mt-8"
//           >
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20 text-sm"
//             >
//               <MessageCircle className="w-4 h-4" />
//               Share Your Story
//             </a>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }




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
  MapPin,
  Play,
  Pause,
  Maximize2,
  Volume2,
  VolumeX,
  ThumbsUp,
  Users,
  Store,
  Building2,
  User
} from "lucide-react";

// Testimonial Data with Categories
const testimonials = [
  // Distributors
  {
    id: 1,
    name: "Rajesh Kumar Agarwal",
    position: "Distributor",
    company: "Shree Sai Tea Traders",
    location: "Mumbai",
    category: "distributor",
    rating: 5,
    text: "Outstanding quality and service! R K Tea has been our trusted partner for over 3 years. Their consistency in quality and timely deliveries have helped us grow our business significantly. We've expanded our distribution network by 40% since partnering with them.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    verified: true,
    video: null
  },
  {
    id: 5,
    name: "Vikram Singh Rathore",
    position: "Distributor",
    company: "Eastern Tea Agency",
    location: "Kolkata",
    category: "distributor",
    rating: 5,
    text: "Professional Team, excellent communication, and top-notch quality. Their bulk pricing is very competitive. We've been able to serve 200+ retail partners with their consistent supply. Best in the industry!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    verified: true,
    video: null
  },
  {
    id: 8,
    name: "Sanjay Mehta",
    position: "Distributor",
    company: "Mehta Tea Distributors",
    location: "Indore",
    category: "distributor",
    rating: 5,
    text: "The quality consistency is unmatched. Our customers specifically ask for R K Tea by name. The packaging and delivery schedules are always on point. A truly reliable partner for any distributor.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    verified: true,
    video: null
  },

  // Retailers
  {
    id: 2,
    name: "Priya Sharma",
    position: "Retailer",
    company: "Premium Tea House",
    location: "Delhi",
    category: "retailer",
    rating: 5,
    text: "The best Assam Tea I've ever sourced. The aroma and taste are exceptional. Customer support is fantastic and they always go the extra mile. My customers keep coming back for the premium quality.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    verified: true,
    video: null
  },
  {
    id: 4,
    name: "Sunita Reddy",
    position: "Retailer",
    company: "Chai Point Cafe",
    location: "Bangalore",
    category: "retailer",
    rating: 4,
    text: "Great value for money. The masala chai blend is a hit at our cafe. Regular supply and good pricing. Customers love the authentic taste and keep coming back for more.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    verified: true,
    video: null
  },
  {
    id: 6,
    name: "Neha Gupta",
    position: "Retailer",
    company: "TeaCup Online",
    location: "Jaipur",
    category: "retailer",
    rating: 5,
    text: "The packaging options are great for online sales. Products reach customers fresh and intact. The variety of Tea options helps us cater to different customer preferences. Very satisfied with the quality.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    verified: true,
    video: null
  },

  // Consumers
  {
    id: 7,
    name: "Dr. Ananya Reddy",
    position: "Tea Enthusiast",
    company: "Regular Customer",
    location: "Hyderabad",
    category: "consumer",
    rating: 5,
    text: "I've been drinking Assam Tea for 20 years, and R K Tea is the best I've found. The flavor is authentic and rich. It's my go-to morning Tea now. The quality is consistently excellent.",
    image: "https://images.unsplash.com/photo-1554151228-14d9bef656c4?w=100&h=100&fit=crop",
    verified: true,
    video: null
  },
  {
    id: 9,
    name: "Prof. Amit Desai",
    position: "Tea Connoisseur",
    company: "Regular Customer",
    location: "Pune",
    category: "consumer",
    rating: 5,
    text: "The golden tips and rich maltiness of R K Tea's premium range remind me of the finest Assam Teas. I've recommended it to all my colleagues and family. Truly exceptional quality.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    verified: true,
    video: null
  },
  {
    id: 10,
    name: "Meera Iyer",
    position: "Homemaker",
    company: "Regular Customer",
    location: "Chennai",
    category: "consumer",
    rating: 4,
    text: "I started buying R K Tea for my family and now it's the only Tea we drink. The flavor is perfect for our morning chai. Even my children love it. Great value for money!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    verified: true,
    video: null
  },
];

// Video Testimonials Data with Categories
const videoTestimonials = [
  {
    id: 1,
    title: "Packaging Facility Tour",
    description: "State-of-the-art packaging facility ensuring premium quality and freshness",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abc123",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop",
    type: "facility",
    category: "facility",
    duration: "2:45"
  },
  {
    id: 2,
    title: "Distributor Success Story",
    description: "Rajesh Kumar shares how R.K. Tea helped grow his distribution business",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=def456",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    type: "testimonial",
    category: "distributor",
    duration: "3:20"
  },
  {
    id: 3,
    title: "Quality Control Process",
    description: "How we ensure every batch meets the highest quality standards",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=ghi789",
    thumbnail: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&h=450&fit=crop",
    type: "facility",
    category: "facility",
    duration: "4:10"
  },
  {
    id: 4,
    title: "Retailer Experience",
    description: "Priya Sharma shares her success story with R.K. Tea at her Tea house",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=jkl012",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop",
    type: "testimonial",
    category: "retailer",
    duration: "2:55"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeTab, setActiveTab] = useState<'written' | 'video'>('written');
  const [activeCategory, setActiveCategory] = useState<'all' | 'distributor' | 'retailer' | 'consumer'>('all');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Filter testimonials based on category
  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTab === 'written') {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, activeTab, activeCategory]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleVideoPlay = (videoId: number) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Filter video testimonials
  const filteredVideos = activeCategory === 'all' 
    ? videoTestimonials 
    : videoTestimonials.filter(v => v.category === activeCategory);

  const categoryTabs = [
    { id: 'all', label: 'All Testimonials', icon: Users },
    { id: 'distributor', label: 'Distributors', icon: Building2 },
    { id: 'retailer', label: 'Retailers', icon: Store },
    { id: 'consumer', label: 'Consumers', icon: User },
  ];

  const getCategoryCount = (category: string) => {
    if (category === 'all') return testimonials.length;
    return testimonials.filter(t => t.category === category).length;
  };

  return (
    <section className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-16 md:py-20 overflow-hidden">
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
          className="text-center max-w-4xl mx-auto mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-5">
            <MessageCircle className="w-4 h-4 text-gold" />
            <span className="text-sm uppercase tracking-wider text-gold font-semibold">Testimonials</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-5">
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
          
          <p className="text-gray-600 text-lg md:text-xl">
            Trusted by 500+ businesses across India. Here's what our partners say.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {categoryTabs.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  setCurrentIndex(0);
                }}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
                    : 'bg-white/50 text-gray-600 hover:bg-gold/10 border border-gold/20'
                }`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                {cat.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-forest-deep/20 text-forest-deep' : 'bg-gray-200 text-gray-500'
                }`}>
                  {getCategoryCount(cat.id)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Type Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => {
              setActiveTab('written');
              setCurrentIndex(0);
            }}
            className={`flex items-center gap-2.5 px-7 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              activeTab === 'written'
                ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
                : 'bg-white/50 text-gray-600 hover:bg-gold/10 border border-gold/20'
            }`}
          >
            <Star className="w-4 h-4 md:w-5 md:h-5" />
            Written Reviews
          </button>
          <button
            onClick={() => {
              setActiveTab('video');
              setCurrentIndex(0);
            }}
            className={`flex items-center gap-2.5 px-7 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              activeTab === 'video'
                ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
                : 'bg-white/50 text-gray-600 hover:bg-gold/10 border border-gold/20'
            }`}
          >
            <Play className="w-4 h-4 md:w-5 md:h-5" />
            Video Testimonials
          </button>
        </div>

        {/* Content */}
        {activeTab === 'written' ? (
          // Written Testimonials Carousel
          <div className="relative max-w-4xl mx-auto">
            {filteredTestimonials.length === 0 ? (
              <div className="text-center py-12 text-gray-500 text-lg">
                No testimonials found for this category.
              </div>
            ) : (
              <>
                <div className="relative h-[440px] md:h-[420px]">
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
                      <div className="w-full h-full bg-gradient-to-br from-white to-amber-50/50 rounded-2xl shadow-xl overflow-hidden border border-gold/20">
                        <div className="absolute top-6 right-6 z-10">
                          <Quote className="w-14 h-14 text-gold/15" />
                        </div>
                        
                        <div className="h-full flex flex-col p-8 md:p-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 md:w-6 md:h-6 ${
                                    i < filteredTestimonials[currentIndex].rating
                                      ? "text-gold fill-gold"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            {/* Category Badge */}
                            <span className={`text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider ${
                              filteredTestimonials[currentIndex].category === 'distributor'
                                ? 'bg-blue-100 text-blue-600'
                                : filteredTestimonials[currentIndex].category === 'retailer'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-purple-100 text-purple-600'
                            }`}>
                              {filteredTestimonials[currentIndex].category}
                            </span>
                          </div>

                          <div className="flex-1 flex items-center">
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                              "{filteredTestimonials[currentIndex].text}"
                            </p>
                          </div>

                          <div className="flex items-center gap-4 pt-6 mt-4 border-t border-gray-100">
                            <img
                              src={filteredTestimonials[currentIndex].image}
                              alt={filteredTestimonials[currentIndex].name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-gold flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-forest-deep text-xl truncate">
                                {filteredTestimonials[currentIndex].name}
                              </h4>
                              <p className="text-gray-500 text-base">
                                {filteredTestimonials[currentIndex].position} • {filteredTestimonials[currentIndex].company}
                              </p>
                              <div className="flex items-center gap-1.5 mt-1">
                                <MapPin className="w-3.5 h-3.5 text-gold" />
                                <span className="text-gray-400 text-sm">{filteredTestimonials[currentIndex].location}</span>
                              </div>
                            </div>
                            {filteredTestimonials[currentIndex].verified && (
                              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-600 text-xs whitespace-nowrap flex-shrink-0">
                                <Award className="w-4 h-4" />
                                Verified
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                {filteredTestimonials.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 z-20"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 z-20"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2.5 mt-8">
                  {filteredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 ${
                        currentIndex === index
                          ? "w-10 h-2.5 bg-gold rounded-full"
                          : "w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gold/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          // Video Testimonials Grid
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {filteredVideos.length === 0 ? (
              <div className="col-span-2 text-center py-12 text-gray-500 text-lg">
                No video testimonials found for this category.
              </div>
            ) : (
              filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden shadow-xl border border-gold/20 hover:border-gold/40 transition-all duration-300"
                >
                  {playingVideo === video.id ? (
                    <div className="relative aspect-video bg-black">
                      <iframe
                        src={video.videoUrl}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        onClick={() => handleVideoPlay(video.id)}
                        className="absolute top-3 right-3 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
                      >
                        <Pause className="w-5 h-5" />
                      </button>
                      <button
                        onClick={toggleMute}
                        className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <button
                        className="absolute bottom-3 left-3 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-300"
                        onClick={() => {
                          const iframe = document.querySelector(`iframe[title="${video.title}"]`);
                          if (iframe) {
                            // @ts-ignore
                            iframe.requestFullscreen?.();
                          }
                        }}
                      >
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="relative aspect-video cursor-pointer group"
                      onClick={() => handleVideoPlay(video.id)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gold shadow-2xl">
                          <Play className="w-10 h-10 text-forest-deep ml-1" />
                        </div>
                      </div>

                      <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded bg-black/60 text-white text-sm">
                        {video.duration}
                      </div>

                      <div className={`absolute top-3 left-3 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider ${
                        video.category === 'distributor'
                          ? 'bg-blue-500/90 text-white'
                          : video.category === 'retailer'
                          ? 'bg-green-500/90 text-white'
                          : 'bg-purple-500/90 text-white'
                      }`}>
                        {video.category === 'facility' ? '📦 Facility' : video.category}
                      </div>
                    </div>
                  )}

                  <div className="p-5 bg-white">
                    <h4 className="font-semibold text-forest-deep text-lg md:text-xl">
                      {video.title}
                    </h4>
                    <p className="text-gray-500 text-base mt-1">
                      {video.description}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <button
                        onClick={() => handleVideoPlay(video.id)}
                        className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-amber-600 transition-colors"
                      >
                        {playingVideo === video.id ? 'Close Video' : 'Watch Video'}
                        <Play className="w-4 h-4" />
                      </button>
                      <span className="text-gray-300">|</span>
                      <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                        <ThumbsUp className="w-4 h-4" />
                        <span>Trusted</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-md border border-gold/20">
            <Heart className="w-5 h-5 text-gold fill-gold" />
            <span className="text-base text-gray-600">Join 500+ satisfied businesses across India</span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
        </motion.div>

        {/* Video CTA */}
        {activeTab === 'video' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Share Your Story
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}