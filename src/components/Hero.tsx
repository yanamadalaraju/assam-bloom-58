// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowRight } from "lucide-react";
// import { TeaParticles } from "./TeaParticles";
// import hero1 from "@/assets/hero-1.jpg";
// import hero2 from "@/assets/hero-2.jpg";
// import hero3 from "@/assets/hero-3.jpg";
// import hero4 from "@/assets/hero-4.jpg";

// const slides = [
//   {
//     img: hero1,
//     eyebrow: "Origin",
//     title: "From the Heart of Assam",
//     subtitle: "Premium Tea sourced directly from the lush Tea gardens of Northeast India.",
//   },
//   {
//     img: hero2,
//     eyebrow: "Heritage",
//     title: "Crafted by Tradition",
//     subtitle: "Authentic Tea expertise passed through generations.",
//   },
//   {
//     img: hero3,
//     eyebrow: "Flavor",
//     title: "The Taste of Pure Assam",
//     subtitle: "Rich aroma, bold flavor, and unmatched freshness in every sip.",
//   },
//   {
//     img: hero4,
//     eyebrow: "Export",
//     title: "Trusted Worldwide",
//     subtitle: "Delivering premium Assam Tea with consistency, quality, and care.",
//   },
// ];

// export function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
//     return () => clearInterval(t);
//   }, []);

//   const slide = slides[index];

//   return (
//     <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-forest-deep">
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.6, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <img
//             src={slide.img}
//             alt={slide.title}
//             className="h-full w-full object-cover animate-slow-zoom"
//             width={1920}
//             height={1080}
//           />
//           <div className="absolute inset-0 bg-hero-overlay" />
//           <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       <TeaParticles count={28} />

//       <div className="relative z-10 flex h-full items-center px-6">
//         <div className="mx-auto w-full max-w-7xl">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//               className="max-w-3xl"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <span className="h-px w-12 bg-gold" />
//                 <span className="text-xs uppercase tracking-[0.4em] text-gold">{slide.eyebrow}</span>
//               </div>
//               <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-6">
//                 {slide.title}
//               </h1>
//               <p className="text-lg md:text-xl text-cream/80 max-w-xl leading-relaxed font-light mb-10">
//                 {slide.subtitle}
//               </p>
//               <div className="flex flex-wrap items-center gap-4">
//                 <a
//                   href="#products"
//                   className="group inline-flex items-center gap-3 rounded-full border border-gold/70 bg-gold/5 px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-forest-deep transition-all duration-500 shadow-gold"
//                 >
//                   Explore Collection
//                   <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </a>
//                 <a
//                   href="#about"
//                   className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-cream/80 hover:text-gold transition-colors"
//                 >
//                   Our Story
//                 </a>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Slide indicators */}
//       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-px transition-all duration-500 ${
//               i === index ? "w-16 bg-gold" : "w-8 bg-cream/30"
//             }`}
//             aria-label={`Slide ${i + 1}`}
//           />
//         ))}
//       </div>

//       {/* Scroll cue */}
//       <motion.div
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-2 text-gold/70"
//       >
//         <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
//         <ChevronDown className="h-4 w-4" />
//       </motion.div>
//     </section>
//   );
// }



// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowRight } from "lucide-react";
// import { TeaParticles } from "./TeaParticles";
// import hero1 from "@/assets/cup.png";
// import hero2 from "@/assets/from the heart of assam.png";
// import hero3 from "@/assets/the taste of pure assam.png";
// import hero4 from "@/assets/Artboard 1.png";

// const slides = [
//   {
//     img: hero1,
//     eyebrow: "Origin",
//     title: "From the Heart of Assam",
//     subtitle: "Premium Tea sourced directly from the lush Tea gardens of Northeast India.",
//   },
//   {
//     img: hero2,
//     eyebrow: "Heritage",
//     title: "Crafted by Tradition",
//     subtitle: "Authentic Tea expertise passed through generations.",
//   },
//   {
//     img: hero3,
//     eyebrow: "Flavor",
//     title: "The Taste of Pure Assam",
//     subtitle: "Rich aroma, bold flavor, and unmatched freshness in every sip.",
//   },
//   {
//     img: hero4,
//     eyebrow: "Export",
//     title: "Trusted Worldwide",
//     subtitle: "Delivering premium Assam Tea with consistency, quality, and care.",
//   },
// ];

// export function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 15000);
//     return () => clearInterval(t);
//   }, []);

//   const slide = slides[index];

//   return (
//     <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-forest-deep">
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.6, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <img
//             src={slide.img}
//             alt={slide.title}
//             className="h-full w-full object-cover animate-slow-zoom"
//             width={1920}
//             height={1080}
//           />
//         </motion.div>
//       </AnimatePresence>

//       <TeaParticles count={28} />

//       <div className="relative z-10 flex h-full items-center px-6">
//         <div className="mx-auto w-full max-w-7xl">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//               className="max-w-3xl"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <span className="h-px w-12 bg-gold" />
//                 <span className="text-xs uppercase tracking-[0.4em] text-gold">{slide.eyebrow}</span>
//               </div>
//               <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-6">
//                 {slide.title}
//               </h1>
//               <p className="text-lg md:text-xl text-cream/80 max-w-xl leading-relaxed font-light mb-10">
//                 {slide.subtitle}
//               </p>
//               <div className="flex flex-wrap items-center gap-4">
//                 <a
//                   href="#products"
//                   className="group inline-flex items-center gap-3 rounded-full border border-gold/70 bg-gold/5 px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-forest-deep transition-all duration-500 shadow-gold"
//                 >
//                   Explore Collection
//                   <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </a>
//                 <a
//                   href="#about"
//                   className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-cream/80 hover:text-gold transition-colors"
//                 >
//                   Our Story
//                 </a>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Slide indicators - Clickable with dots */}
//       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setIndex(i);
//             }}
//             className="group flex items-center gap-2 transition-all duration-300"
//             aria-label={`Go to slide ${i + 1}`}
//           >
//             <div
//               className={`h-2 rounded-full transition-all duration-500 ${
//                 i === index 
//                   ? "w-10 bg-gold shadow-lg shadow-gold/30" 
//                   : "w-2 bg-cream/40 group-hover:bg-cream/70 group-hover:w-4"
//               }`}
//             />
//             <span className="sr-only">Slide {i + 1}</span>
//           </button>
//         ))}
//       </div>

//       {/* Scroll cue */}
//       <motion.div
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-2 text-gold/70"
//       >
//         <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
//         <ChevronDown className="h-4 w-4" />
//       </motion.div>
//     </section>
//   );
// }





// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowRight, Crown, Star } from "lucide-react";
// import { TeaParticles } from "./TeaParticles";
// import hero1 from "@/assets/cup.png";
// import hero2 from "@/assets/from the heart of assam.png";
// import hero3 from "@/assets/the taste of pure assam.png";
// import hero4 from "@/assets/Artboard 1.png";

// const slides = [
//   {
//     img: hero1,
//     eyebrow: "Origin",
//     title: "From the Heart of Assam",
//     subtitle: "Premium Tea sourced directly from the lush Tea gardens of Northeast India.",
//   },
//   {
//     img: hero2,
//     eyebrow: "Heritage",
//     title: "Crafted by Tradition",
//     subtitle: "Authentic Tea expertise passed through generations.",
//   },
//   {
//     img: hero3,
//     eyebrow: "Flavor",
//     title: "The Taste of Pure Assam",
//     subtitle: "Rich aroma, bold flavor, and unmatched freshness in every sip.",
//   },
//   {
//     img: hero4,
//     eyebrow: "Export",
//     title: "Trusted Worldwide",
//     subtitle: "Delivering premium Assam Tea with consistency, quality, and care.",
//   },
// ];

// export function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 15000);
//     return () => clearInterval(t);
//   }, []);

//   const slide = slides[index];

//   return (
//     <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-forest-deep">
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.6, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <img
//             src={slide.img}
//             alt={slide.title}
//             className="h-full w-full object-cover animate-slow-zoom"
//             width={1920}
//             height={1080}
//           />
//         </motion.div>
//       </AnimatePresence>

//       <TeaParticles count={28} />

//       {/* Content wrapper with proper z-index and padding */}
//       <div className="relative z-10 flex h-full items-start md:items-center px-6 pt-32 md:pt-40 pb-32">
//         <div className="mx-auto w-full max-w-7xl">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//               className="max-w-4xl"
//             >
//               {/* Trust Badge - India's Trusted Tea Since 1990 */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-forest-deep/80 backdrop-blur-md border border-gold/50 shadow-lg shadow-black/20 mb-8"
//               >
//                 <Crown className="w-5 h-5 text-gold flex-shrink-0" />
//                 <span className="text-sm uppercase tracking-[0.3em] text-gold font-semibold whitespace-nowrap">
//                   India's Trusted Tea Since 1990
//                 </span>
//                 <Star className="w-4 h-4 text-gold fill-gold flex-shrink-0" />
//               </motion.div>

//               <div className="flex items-center gap-4 mb-8">
//                 <span className="h-px w-16 bg-gold" />
//                 <span className="text-base uppercase tracking-[0.4em] text-gold font-medium">{slide.eyebrow}</span>
//               </div>
//               <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-cream leading-[1.05] mb-6 md:mb-8">
//                 {slide.title}
//               </h1>
//               <p className={`text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-light mb-8 md:mb-10 lg:mb-12 ${
//                 index === 3 ? 'text-black' : 'text-cream/80'
//               }`}>
//                 {slide.subtitle}
//               </p>
//               <div className="flex flex-wrap items-center gap-4 md:gap-6">
//                 <a
//                   href="#products"
//                   className="group inline-flex items-center gap-3 rounded-full border border-gold/70 bg-gold/10 backdrop-blur-sm px-8 md:px-10 py-4 md:py-5 text-sm md:text-base uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-forest-deep transition-all duration-500 shadow-gold hover:shadow-lg hover:shadow-gold/30"
//                 >
//                   Explore Collection
//                   <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
//                 </a>
//                 <a
//                   href="#about"
//                   className="inline-flex items-center gap-2 text-sm md:text-base uppercase tracking-[0.2em] text-cream/80 hover:text-gold transition-colors"
//                 >
//                   Our Story
//                 </a>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Slide indicators - Clickable with dots */}
//       <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4 md:gap-5">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setIndex(i);
//             }}
//             className="group flex items-center gap-2 transition-all duration-300"
//             aria-label={`Go to slide ${i + 1}`}
//           >
//             <div
//               className={`h-2.5 md:h-3 rounded-full transition-all duration-500 ${
//                 i === index 
//                   ? "w-10 md:w-14 bg-gold shadow-lg shadow-gold/30" 
//                   : "w-2.5 md:w-3 bg-cream/40 group-hover:bg-cream/70 group-hover:w-4 md:group-hover:w-6"
//               }`}
//             />
//             <span className="sr-only">Slide {i + 1}</span>
//           </button>
//         ))}
//       </div>

//       {/* Scroll cue */}
//       <motion.div
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-4 md:bottom-6 right-6 md:right-8 z-10 flex flex-col items-center gap-1.5 md:gap-2 text-gold/70"
//       >
//         <span className="text-[10px] md:text-xs uppercase tracking-[0.3em]">Scroll</span>
//         <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
//       </motion.div>
//     </section>
//   );
// }




import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Crown, Star } from "lucide-react";
import { TeaParticles } from "./TeaParticles";
import hero1 from "@/assets/cup.png";
import hero2 from "@/assets/from the heart of assam.png";
import hero3 from "@/assets/the taste of pure assam.png";
import hero4 from "@/assets/Artboard 1.png";
import { SEO } from "./SEO";

const slides = [
  {
    img: hero1,
    eyebrow: "Origin",
    title: "From the Heart of Assam",
    subtitleLines: [
      "Premium Tea sourced directly",
      "from the lush Tea gardens",
      "of Northeast India."
    ],
  },
  {
    img: hero2,
    eyebrow: "Heritage",
    title: "Crafted by Tradition",
    subtitleLines: [
      "Authentic Tea expertise",
      "passed through generations."
    ],
  },
  {
    img: hero3,
    eyebrow: "Flavor",
    title: "The Taste of Pure Assam",
    subtitleLines: [
      "Rich aroma, bold flavor,",
      "and unmatched freshness",
      "in every sip."
    ],
  },
  {
    img: hero4,
    eyebrow: "Export",
    title: "Trusted Worldwide",
    subtitleLines: [
      "Delivering premium Assam Tea",
      "with consistency, quality,",
      "and care."
    ],
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 15000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    < >
     <SEO
        title="Premium Assam Tea Exports & Wholesale"
        description="Discover premium Assam Tea sourced directly from the gardens of Northeast India. Trusted exporter since 1990 with 250+ dealers worldwide."
        keywords={['Assam Tea', 'Premium Tea', 'Tea Export', 'Wholesale Tea', 'R K Tea']}
        image="https://rkTeasales.com/hero-og-image.jpg"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "R K Tea Sales",
          "description": "Premium Assam Tea Exports & Wholesale since 1990",
          "url": "https://rkTeasales.com",
          "logo": "https://rkTeasales.com/logo.png",
          "foundingDate": "1990",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressCountry": "India"
          }
        }}
      />
  
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-forest-deep">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="h-full w-full object-cover animate-slow-zoom"
            width={1920}
            height={1080}
          />
        </motion.div>
      </AnimatePresence>

      <TeaParticles count={28} />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-[5]" />

      {/* Content wrapper */}
      <div className="relative z-10 flex h-full items-center px-6 pt-32 md:pt-36 lg:pt-40 pb-32">
        <div className="mx-auto w-full max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-forest-deep/90 backdrop-blur-md border border-gold/50 shadow-lg shadow-black/20 mb-6 md:mb-8"
              >
                <Crown className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm uppercase tracking-[0.3em] text-gold font-semibold whitespace-nowrap">
                  India's Trusted Tea Since 1990
                </span>
                <Star className="w-4 h-4 text-gold fill-gold flex-shrink-0" />
              </motion.div>

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="h-px w-16 bg-gold" />
                <div className="inline-block bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                  <span className="text-base uppercase tracking-[0.4em] text-gold font-medium">
                    {slide.eyebrow}
                  </span>
                </div>
              </div>

              {/* Title - Single line with background */}
              <div className="mb-4 md:mb-6">
                <div className="inline-block bg-black/50 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-xl border border-white/10 shadow-lg">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.2] whitespace-nowrap">
                    {slide.title}
                  </span>
                </div>
              </div>

              {/* Subtitle - Line by line with background */}
              <div className="space-y-1.5 md:space-y-2 mb-6 md:mb-8 lg:mb-10">
                {slide.subtitleLines.map((line, i) => (
                  <div
                    key={i}
                    className="inline-block bg-black/40 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-white/5 shadow-md"
                  >
                    <span className="text-base md:text-lg lg:text-xl text-white/90 leading-[1.6]">
                      {line}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <a
                  href="#products"
                  className="group inline-flex items-center gap-3 rounded-full border border-gold/70 bg-gold/20 backdrop-blur-sm px-8 md:px-10 py-4 md:py-5 text-sm md:text-base uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-forest-deep transition-all duration-500 shadow-gold hover:shadow-lg hover:shadow-gold/30"
                >
                  Explore Collection
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 text-sm md:text-base uppercase tracking-[0.2em] text-white/80 hover:text-gold transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  Our Story
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4 md:gap-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group flex items-center gap-2 transition-all duration-300"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className={`h-2.5 md:h-3 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-10 md:w-14 bg-gold shadow-lg shadow-gold/30"
                  : "w-2.5 md:w-3 bg-white/40 group-hover:bg-white/70 group-hover:w-4 md:group-hover:w-6"
              }`}
            />
            <span className="sr-only">Slide {i + 1}</span>
          </button>
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 md:bottom-6 right-6 md:right-8 z-10 flex flex-col items-center gap-1.5 md:gap-2 text-white/70"
      >
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
      </motion.div>
    </section>
      </>
  );
}